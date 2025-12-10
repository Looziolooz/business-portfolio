import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error: any) {
    console.error('Webhook signature verification failed:', error.message);
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    );
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log('✅ Checkout completed:', session.id);
        
        // TODO: Attiva l'accesso del cliente al gestionale
        // Esempio: await activateCustomerAccess(session.customer, session.metadata.plan);
        
        break;
      }

      case 'customer.subscription.created': {
        const subscription = event.data.object as Stripe.Subscription;
        console.log('✅ Subscription created:', subscription.id);
        
        // TODO: Registra la sottoscrizione nel tuo database
        // Esempio: await saveSubscription(subscription);
        
        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        console.log('🔄 Subscription updated:', subscription.id);
        
        // TODO: Aggiorna lo stato della sottoscrizione
        // Esempio: await updateSubscription(subscription);
        
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        console.log('❌ Subscription deleted:', subscription.id);
        
        // TODO: Disattiva l'accesso del cliente
        // Esempio: await deactivateCustomerAccess(subscription.customer);
        
        break;
      }

      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice;
        console.log('💰 Invoice paid:', invoice.id);
        
        // TODO: Genera fattura elettronica
        // Esempio: await generateInvoice(invoice);
        
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        console.log('⚠️ Invoice payment failed:', invoice.id);
        
        // TODO: Invia email di avviso al cliente
        // Esempio: await sendPaymentFailedEmail(invoice.customer_email);
        
        break;
      }

      case 'customer.subscription.trial_will_end': {
        const subscription = event.data.object as Stripe.Subscription;
        console.log('⏰ Trial ending soon:', subscription.id);
        
        // TODO: Invia reminder al cliente
        
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });

  } catch (error: any) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

// Disable body parsing, need raw body for signature verification
export const config = {
  api: {
    bodyParser: false,
  },
};
