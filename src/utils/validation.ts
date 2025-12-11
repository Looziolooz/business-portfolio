/**
 * Input Validation & Sanitization
 * Protegge da: XSS, SQL Injection, malformed data
 * 
 * USAGE:
 * import { validateEmail, sanitizeInput } from '@/utils/validation';
 * 
 * const email = validateEmail('user@example.com');
 * const safe = sanitizeInput(userInput);
 */

import type { z } from 'zod';

/**
 * Validazione Email
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

/**
 * Validazione Numero Telefono (formato internazionale)
 */
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Sanitizzazione stringhe (previene XSS)
 */
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
};

/**
 * Validazione URL
 */
export const validateURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validazione Credit Card (Luhn algorithm)
 */
export const validateCreditCard = (cardNumber: string): boolean => {
  const digits = cardNumber.replace(/\D/g, '');
  
  if (digits.length < 13 || digits.length > 19) return false;

  let sum = 0;
  let isEven = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits.charAt(i), 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

/**
 * Validazione lunghezza stringhe
 */
export const validateLength = (
  input: string,
  minLength: number,
  maxLength: number
): boolean => {
  return input.length >= minLength && input.length <= maxLength;
};

/**
 * Validazione messaggi form (previene spam)
 */
export const validateMessage = (message: string): { valid: boolean; error?: string } => {
  const cleanMsg = message.trim();
  
  if (cleanMsg.length < 10) {
    return { valid: false, error: 'Il messaggio deve contenere almeno 10 caratteri' };
  }
  
  if (cleanMsg.length > 5000) {
    return { valid: false, error: 'Il messaggio non può superare 5000 caratteri' };
  }

  // Previeni spam con troppi link
  const linkCount = (cleanMsg.match(/https?:\/\//g) || []).length;
  if (linkCount > 2) {
    return { valid: false, error: 'Troppi link nel messaggio' };
  }

  return { valid: true };
};

/**
 * Validazione prezzo (Stripe usa centesimi)
 */
export const validatePrice = (price: number): { valid: boolean; error?: string } => {
  if (price <= 0) {
    return { valid: false, error: 'Il prezzo deve essere positivo' };
  }
  
  if (price > 999999.99) {
    return { valid: false, error: 'Prezzo troppo alto' };
  }
  
  if (!Number.isFinite(price)) {
    return { valid: false, error: 'Prezzo non valido' };
  }

  return { valid: true };
};

/**
 * Converte prezzo euro in centesimi per Stripe
 */
export const priceToStripeAmount = (priceInEuro: number): number => {
  const validated = validatePrice(priceInEuro);
  if (!validated.valid) {
    throw new Error(validated.error);
  }
  return Math.round(priceInEuro * 100);
};

/**
 * Converte centesimi Stripe in euro
 */
export const stripeCentsToPrice = (cents: number): number => {
  return Math.round((cents / 100) * 100) / 100;
};

/**
 * Validazione oggetto generico
 */
export const validateObject = <T extends Record<string, unknown>>(
  obj: unknown,
  schema: Record<keyof T, (value: unknown) => boolean>
): obj is T => {
  if (typeof obj !== 'object' || obj === null) return false;

  for (const [key, validator] of Object.entries(schema)) {
    if (!validator((obj as any)[key])) {
      return false;
    }
  }

  return true;
};

/**
 * Rate limiting semplice (previene spam)
 */
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts = 5, windowMs = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(key: string): boolean {
    const now = Date.now();
    const timestamps = this.attempts.get(key) || [];
    
    // Rimuovi timestamp fuori dalla finestra
    const recentAttempts = timestamps.filter((t) => now - t < this.windowMs);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }

    recentAttempts.push(now);
    this.attempts.set(key, recentAttempts);
    return true;
  }

  reset(key: string): void {
    this.attempts.delete(key);
  }
}

export const contactFormRateLimiter = new RateLimiter(5, 60000); // 5 messaggi per minuto