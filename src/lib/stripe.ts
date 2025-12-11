import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined in environment variables');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-11-17.clover', // Versione API Stripe aggiornata per risolvere l'errore
  typescript: true,
});

// Pricing Configuration
export const PRICING_CONFIG = {
  starter: {
    setupFee: 10000, // 100€ in cents
    monthlyPriceYear1: 1000, // 10€ in cents
    monthlyPriceAfter: 2500, // 25€ in cents
    name: 'Starter',
    description: 'Perfetto per chi inizia',
  },
  professional: {
    setupFee: 10000, // 100€ in cents
    monthlyPriceYear1: 1000, // 10€ in cents
    monthlyPriceAfter: 2500, // 25€ in cents
    name: 'Professional',
    description: 'La scelta ideale per piccole aziende',
  },
  enterprise: {
    setupFee: null, // Custom pricing
    monthlyPriceYear1: null,
    monthlyPriceAfter: null,
    name: 'Enterprise',
    description: 'Soluzione completa su misura',
  },
};

// Helper function to format price for display
export function formatPrice(cents: number): string {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
  }).format(cents / 100);
}

// Helper function to create a subscription with phase transition
export async function createSubscriptionWithPhases(
  customerId: string,
  plan: keyof typeof PRICING_CONFIG
) {
  const config = PRICING_CONFIG[plan];
  
  if (!config.monthlyPriceYear1 || !config.monthlyPriceAfter) {
    throw new Error('Cannot create subscription for custom pricing plan');
  }

  // Create or get price IDs
  const priceYear1Id = await getOrCreatePrice(
    config.monthlyPriceYear1,
    `${config.name} - First Year`
  );
  
  const priceAfterId = await getOrCreatePrice(
    config.monthlyPriceAfter,
    `${config.name} - Standard`
  );

  // Create subscription with phases
  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    items: [{ price: priceYear1Id }],
    payment_behavior: 'default_incomplete',
    payment_settings: { save_default_payment_method: 'on_subscription' },
    expand: ['latest_invoice.payment_intent'],
    metadata: {
      plan,
      priceAfterId,
    },
  });

  return subscription;
}

// Helper to get or create a Stripe Price
async function getOrCreatePrice(
  unitAmount: number,
  productName: string
): Promise<string> {
  // Search for existing price
  const prices = await stripe.prices.list({
    limit: 100,
    active: true,
  });

  const existingPrice = prices.data.find(
    (price) =>
      price.unit_amount === unitAmount &&
      price.recurring?.interval === 'month'
  );

  if (existingPrice) {
    return existingPrice.id;
  }

  // Create product
  const product = await stripe.products.create({
    name: productName,
  });

  // Create price
  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: unitAmount,
    currency: 'eur',
    recurring: { interval: 'month' },
  });

  return price.id;
}

// Create setup fee invoice
export async function createSetupFeeInvoice(
  customerId: string,
  plan: keyof typeof PRICING_CONFIG
) {
  const config = PRICING_CONFIG[plan];
  
  if (!config.setupFee) {
    return null;
  }

  const invoiceItem = await stripe.invoiceItems.create({
    customer: customerId,
    amount: config.setupFee,
    currency: 'eur',
    description: `Setup Fee - ${config.name} Plan`,
  });

  const invoice = await stripe.invoices.create({
    customer: customerId,
    auto_advance: true,
    collection_method: 'charge_automatically',
  });

  return invoice;
}