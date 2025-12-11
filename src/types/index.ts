/**
 * Centralizzate TypeScript Types & Interfaces
 * Per coerenza e type safety in tutto il progetto
 * 
 * USAGE:
 * import type { User, Plan, ContactFormData } from '@/types';
 * 
 * const user: User = { ... };
 */

/**
 * Utenti e Autenticazione
 */
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  role: 'user' | 'admin';
  metadata?: Record<string, unknown>;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
  acceptTerms: boolean;
}

export interface LoginData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

/**
 * Piani e Abbonamenti
 */
export interface Plan {
  id: string;
  name: string;
  description: string;
  priceUSD: number;
  priceEUR: number;
  billingCycle: 'monthly' | 'yearly' | 'one-time';
  features: string[];
  metadata: {
    tier: 'starter' | 'professional' | 'enterprise';
    maxWebsites: number;
    supportLevel: string;
  };
}

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  stripeSubscriptionId?: string;
  status: 'active' | 'paused' | 'canceled' | 'expired';
  startDate: Date;
  endDate?: Date;
  canceledAt?: Date;
  autoRenew: boolean;
  metadata?: Record<string, unknown>;
}

export interface StripeCustomer {
  id: string;
  stripeId: string;
  email: string;
  name?: string;
  description?: string;
  metadata?: Record<string, unknown>;
}

/**
 * Form di Contatto
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  companyName?: string;
  budget?: string;
}

export interface ContactFormSubmission extends ContactFormData {
  id: string;
  timestamp: Date;
  read: boolean;
  ip?: string;
  userAgent?: string;
}

/**
 * Portfolio e Progetti
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'gestionale' | 'sito' | 'integrazione';
  imageUrl: string;
  imageAlt: string;
  technologies: string[];
  link?: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ServiceOffered {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: number;
  estimatedTime?: string;
}

/**
 * Pagamenti e Transazioni (Stripe)
 */
export interface PaymentIntent {
  id: string;
  amount: number; // In centesimi
  currency: string;
  status: 'requires_payment_method' | 'requires_confirmation' | 'requires_action' | 'processing' | 'succeeded' | 'canceled';
  clientSecret: string;
  userId?: string;
  metadata?: Record<string, unknown>;
  createdAt: Date;
}

export interface Transaction {
  id: string;
  userId: string;
  amount: number; // In euro
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  type: 'subscription' | 'one-time' | 'setup_fee';
  stripeId?: string;
  description: string;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  completedAt?: Date;
}

export interface Invoice {
  id: string;
  userId: string;
  transactionId: string;
  amount: number;
  status: 'draft' | 'issued' | 'paid' | 'overdue' | 'canceled';
  issuedAt: Date;
  dueAt: Date;
  paidAt?: Date;
  pdfUrl?: string;
}

/**
 * Webhook Events (Stripe)
 */
export interface StripeWebhookEvent {
  id: string;
  type: string;
  data: {
    object: Record<string, unknown>;
    previousAttributes?: Record<string, unknown>;
  };
  created: number;
  livemode: boolean;
}

/**
 * Notifiche e Comunicazioni
 */
export interface Notification {
  id: string;
  userId?: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  actionUrl?: string;
  createdAt: Date;
  expiresAt?: Date;
}

export interface Email {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  from?: string;
  cc?: string[];
  bcc?: string[];
  replyTo?: string;
  attachments?: EmailAttachment[];
}

export interface EmailAttachment {
  filename: string;
  content: string | Buffer;
  contentType?: string;
}

/**
 * Analytics e Tracking
 */
export interface PageView {
  id: string;
  page: string;
  referrer?: string;
  duration: number; // millisecondi
  userAgent: string;
  timestamp: Date;
}

export interface AnalyticsEvent {
  id: string;
  userId?: string;
  name: string;
  category?: string;
  value?: number;
  metadata?: Record<string, unknown>;
  timestamp: Date;
}

/**
 * Settings e Configurazioni
 */
export interface AppSettings {
  maintenanceMode: boolean;
  allowNewSignups: boolean;
  allowNewSubscriptions: boolean;
  privacyPolicyUrl: string;
  termsOfServiceUrl: string;
  contactEmail: string;
  supportEmail: string;
  siteTitle: string;
  siteDescription: string;
}

/**
 * Response API
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string;
    details?: Record<string, unknown>;
  };
  message?: string;
  timestamp: string;
}

/**
 * Componenti Props (TypeScript)
 */
export interface SectionProps {
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  icon?: React.ReactNode;
}

export interface FormFieldProps {
  label?: string;
  required?: boolean;
  error?: string;
  helpText?: string;
  children: React.ReactNode;
}

/**
 * Errors
 */
export class ValidationError extends Error {
  constructor(
    public field: string,
    message: string,
    public code = 'VALIDATION_ERROR'
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

export class AuthenticationError extends Error {
  constructor(message = 'Authentication required', public code = 'AUTH_REQUIRED') {
    super(message);
    this.name = 'AuthenticationError';
  }
}

export class StripeError extends Error {
  constructor(
    message: string,
    public stripeCode: string,
    public code = 'STRIPE_ERROR'
  ) {
    super(message);
    this.name = 'StripeError';
  }
}

/**
 * Type Guards
 */
export const isUser = (data: unknown): data is User => {
  return (
    typeof data === 'object' &&
    data !== null &&
    'id' in data &&
    'email' in data &&
    'name' in data
  );
};

export const isPlan = (data: unknown): data is Plan => {
  return (
    typeof data === 'object' &&
    data !== null &&
    'id' in data &&
    'name' in data &&
    'priceEUR' in data
  );
};

export const isContactFormData = (data: unknown): data is ContactFormData => {
  return (
    typeof data === 'object' &&
    data !== null &&
    'name' in data &&
    'email' in data &&
    'message' in data
  );
};