import { NextRequest, NextResponse } from 'next/server';
import { stripe, PRICING_CONFIG } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { plan, email, name } = body;

    // Validate plan
    if (!plan || !PRICING_CONFIG[plan as keyof typeof PRICING_CONFIG]) {
      return NextResponse.json(
        { error: 'Invalid plan selected' },
        { status: 400 }
      );
    }

    const planConfig = PRICING_CONFIG[plan as keyof typeof PRICING_CONFIG];

    // Handle custom/enterprise plan
    if (plan === 'enterprise' || !planConfig.monthlyPriceYear1) {
      return NextResponse.json(
        { 
          error: 'Please contact us for Enterprise pricing',
          contactRequired: true 
        },
        { status: 400 }
      );
    }

    // Create or retrieve customer
    let customer;
    
    if (email) {
      const existingCustomers = await stripe.customers.list({
        email: email,
        limit: 1,
      });

      if (existingCustomers.data.length > 0) {
        customer = existingCustomers.data[0];
      } else {
        customer = await stripe.customers.create({
          email: email,
          name: name || undefined,
          metadata: {
            plan: plan,
          },
        });
      }
    }

    // Create checkout session with setup fee and subscription
    const session = await stripe.checkout.sessions.create({
      customer: customer?.id,
      customer_email: !customer ? email : undefined,
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        // Setup fee as one-time payment
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: `${planConfig.name} - Setup Fee`,
              description: 'Costo iniziale di configurazione e setup',
            },
            unit_amount: planConfig.setupFee,
          },
          quantity: 1,
        },
        // Monthly subscription (first year pricing)
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: `${planConfig.name} - Abbonamento Mensile`,
              description: '10€/mese per i primi 12 mesi, poi 25€/mese',
            },
            unit_amount: planConfig.monthlyPriceYear1,
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/pricing`,
      metadata: {
        plan: plan,
        priceAfter12Months: planConfig.monthlyPriceAfter.toString(),
      },
      subscription_data: {
        metadata: {
          plan: plan,
          priceAfter12Months: planConfig.monthlyPriceAfter.toString(),
        },
      },
      locale: 'it',
    });

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    });

  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
