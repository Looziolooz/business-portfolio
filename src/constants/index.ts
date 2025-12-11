/**
 * Centralizzate Constants & Configuration
 * Evita duplicazione e facilita manutenzione
 * 
 * USAGE:
 * import { PLANS, API_CONFIG, STRIPE_CONFIG } from '@/constants';
 * 
 * const price = PLANS.professional.price;
 */

/**
 * Piani di abbonamento
 */
export const PLANS = {
  starter: {
    id: 'price_starter',
    name: 'Starter',
    priceUSD: 99,
    priceEUR: 90,
    billingCycle: 'monthly',
    description: 'Perfetto per iniziare',
    features: [
      'Fino a 1 sito web',
      'Supporto email',
      'Aggiornamenti mensili',
      'Analytics base',
    ],
    metadata: {
      tier: 'starter',
      maxWebsites: 1,
      supportLevel: 'email',
    },
  },
  professional: {
    id: 'price_professional',
    name: 'Professional',
    priceUSD: 249,
    priceEUR: 225,
    billingCycle: 'monthly',
    description: 'Per aziende in crescita',
    features: [
      'Fino a 5 siti web',
      'Supporto prioritario',
      'Aggiornamenti settimanali',
      'Analytics avanzati',
      'Backup automatici',
    ],
    metadata: {
      tier: 'professional',
      maxWebsites: 5,
      supportLevel: 'priority',
    },
  },
  enterprise: {
    id: 'price_enterprise',
    name: 'Enterprise',
    priceUSD: 499,
    priceEUR: 450,
    billingCycle: 'monthly',
    description: 'Soluzione completa',
    features: [
      'Siti web illimitati',
      'Supporto 24/7 dedicato',
      'Aggiornamenti giornalieri',
      'Analytics illimitati',
      'Backup in tempo reale',
      'Integrazioni personalizzate',
      'Account manager dedicato',
    ],
    metadata: {
      tier: 'enterprise',
      maxWebsites: -1,
      supportLevel: '24/7',
    },
  },
} as const;

/**
 * Configurazione API
 */
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  timeout: 10000,
  retries: 3,
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'BusinessPortfolio/1.0',
  },
} as const;

/**
 * Configurazione Stripe
 */
export const STRIPE_CONFIG = {
  publicKey: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '',
  secretKey: process.env.STRIPE_SECRET_KEY || '',
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
  currency: 'eur',
  locale: 'it',
  // Prodotti e prezzi
  setupFee: 10000, // 100 EUR in centesimi
  products: {
    management: {
      id: 'prod_management',
      name: 'Software di Gestione',
    },
  },
  // Auto-upgrade dopo 12 mesi
  autoUpgradeMonths: 12,
  upgradePriceMultiplier: 2.5, // 90€ → 225€
} as const;

/**
 * Limiti e validazioni
 */
export const VALIDATION_LIMITS = {
  email: { minLength: 5, maxLength: 254 },
  password: { minLength: 8, maxLength: 128 },
  name: { minLength: 2, maxLength: 100 },
  message: { minLength: 10, maxLength: 5000 },
  phone: { minLength: 10, maxLength: 20 },
  urlSlug: { minLength: 3, maxLength: 50 },
} as const;

/**
 * Configurazione Rate Limiting
 */
export const RATE_LIMIT_CONFIG = {
  contactForm: { maxRequests: 5, windowMs: 60000 }, // 5 per minuto
  auth: { maxRequests: 5, windowMs: 300000 }, // 5 per 5 minuti
  api: { maxRequests: 100, windowMs: 60000 }, // 100 per minuto
} as const;

/**
 * Messaggi di errore standardizzati
 */
export const ERROR_MESSAGES = {
  // Generali
  UNEXPECTED_ERROR: 'Si è verificato un errore inatteso. Riprova più tardi.',
  NETWORK_ERROR: 'Errore di connessione. Verifica la tua connessione internet.',
  TIMEOUT_ERROR: 'Richiesta scaduta. Prova di nuovo.',
  
  // Form
  INVALID_EMAIL: 'Indirizzo email non valido.',
  INVALID_PHONE: 'Numero di telefono non valido.',
  REQUIRED_FIELD: 'Questo campo è obbligatorio.',
  PASSWORD_TOO_SHORT: 'La password deve contenere almeno 8 caratteri.',
  PASSWORDS_DONT_MATCH: 'Le password non coincidono.',
  
  // Pagamento
  PAYMENT_FAILED: 'Pagamento non riuscito. Verifica i dati della carta.',
  CARD_DECLINED: 'Carta rifiutata. Prova con una carta diversa.',
  INVALID_CARD: 'Numero carta non valido.',
  PAYMENT_TIMEOUT: 'Timeout nel elaborare il pagamento.',
  
  // Rate limiting
  TOO_MANY_REQUESTS: 'Troppi tentativi. Prova di nuovo tra poco.',
  FORM_SPAM_DETECTED: 'Sembra che tu stia inviando troppi messaggi velocemente.',
} as const;

/**
 * Messaggi di successo
 */
export const SUCCESS_MESSAGES = {
  PAYMENT_SUCCESS: 'Pagamento completato con successo!',
  SUBSCRIPTION_CREATED: 'Abbonamento attivato con successo!',
  SUBSCRIPTION_UPDATED: 'Abbonamento aggiornato con successo!',
  FORM_SUBMITTED: 'Messaggio inviato! Ti contatteremo presto.',
  SAVED: 'Salvato con successo.',
} as const;

/**
 * URL e link
 */
export const ROUTES = {
  home: '/',
  pricing: '/#pricing',
  portfolio: '/#portfolio',
  about: '/#about',
  contact: '/#contact',
  dashboard: '/dashboard',
  account: '/account',
  success: '/success',
  cancel: '/cancel',
} as const;

/**
 * Colori del brand
 */
export const BRAND_COLORS = {
  primary: '#ea5e3f',
  secondary: '#f4a460',
  accent: '#ff6b6b',
  dark: '#1a1a1a',
  light: '#f5f5f5',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
} as const;

/**
 * Feature flags (per A/B testing e rollout graduale)
 */
export const FEATURE_FLAGS = {
  enableStripe: process.env.NEXT_PUBLIC_ENABLE_STRIPE === 'true',
  enableChat: process.env.NEXT_PUBLIC_ENABLE_CHAT === 'true',
  enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  maintenanceMode: process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true',
} as const;

/**
 * Metadata SEO
 */
export const SEO_CONFIG = {
  siteName: 'Lorenzo Dastoli - Portfolio Business',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://lorenzodastoli.com',
  description: 'Software di gestione e siti web personalizzati per piccole aziende. Soluzioni complete con Stripe integrato.',
  keywords: ['gestionale', 'software', 'siti web', 'aziende', 'responsive'],
  author: 'Lorenzo Dastoli',
  ogImage: '/og-image.jpg',
  twitterHandle: '@looziolooz',
} as const;

/**
 * Configurazione logging
 */
export const LOG_CONFIG = {
  level: process.env.NEXT_PUBLIC_LOG_LEVEL || 'info',
  enableConsole: process.env.NODE_ENV === 'development',
  enableRemote: process.env.NODE_ENV === 'production',
} as const;

/**
 * Utility per ottenere prezzo EUR con simbolo
 */
export const formatPrice = (amount: number, currency: string = 'EUR'): string => {
  const formatter = new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency,
  });
  return formatter.format(amount);
};