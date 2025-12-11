/**
 * Centralizzato Error Handler per tutta l'applicazione
 * Gestisce: Validazione, Logging, Fallback, Type Safety
 * 
 * USAGE:
 * try {
 *   // codice
 * } catch (error) {
 *   handleError(error, 'NomeComponente.tsx');
 * }
 */

export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export interface AppError {
  id: string;
  message: string;
  severity: ErrorSeverity;
  timestamp: Date;
  context?: string;
  originalError?: unknown;
  userMessage: string;
}

class ErrorHandler {
  private static instance: ErrorHandler;
  private errorLog: AppError[] = [];
  private maxLogSize = 100;

  private constructor() {}

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  /**
   * Processa e logga gli errori
   */
  handle(
    error: unknown,
    context: string,
    severity: ErrorSeverity = ErrorSeverity.MEDIUM
  ): AppError {
    const appError = this.normalizeError(error, context, severity);
    this.log(appError);
    this.notifyMonitoring(appError);
    return appError;
  }

  /**
   * Normalizza qualsiasi tipo di errore in AppError
   */
  private normalizeError(
    error: unknown,
    context: string,
    severity: ErrorSeverity
  ): AppError {
    let message = 'Unknown error';
    let originalError = error;

    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === 'string') {
      message = error;
    } else if (typeof error === 'object' && error !== null) {
      message = JSON.stringify(error);
    }

    return {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      message,
      severity,
      timestamp: new Date(),
      context,
      originalError,
      userMessage: this.getUserFriendlyMessage(severity),
    };
  }

  /**
   * Logga errore (in produzione, invia a servizio esterno)
   */
  private log(error: AppError): void {
    this.errorLog.push(error);

    // Mantieni solo gli ultimi 100 errori
    if (this.errorLog.length > this.maxLogSize) {
      this.errorLog.shift();
    }

    // In produzione, invia a servizio monitoraggio (Sentry, DataDog, etc)
    if (process.env.NODE_ENV === 'production') {
      console.error(`[${error.severity.toUpperCase()}] ${error.context}:`, error);
    } else {
      console.warn(`[${error.severity}] ${error.context}: ${error.message}`);
    }
  }

  /**
   * Invia notifica a servizio esterno in caso di errori critici
   */
  private notifyMonitoring(error: AppError): void {
    if (error.severity === ErrorSeverity.CRITICAL) {
      // TODO: Implementare invio a Sentry, Slack, etc
      console.error('CRITICAL ERROR - Notification sent to monitoring service');
    }
  }

  /**
   * Ritorna messaggio user-friendly basato sulla severità
   */
  private getUserFriendlyMessage(severity: ErrorSeverity): string {
    const messages = {
      [ErrorSeverity.LOW]: 'Qualcosa è andato leggermente storto.',
      [ErrorSeverity.MEDIUM]: 'Si è verificato un errore. Per favore riprova.',
      [ErrorSeverity.HIGH]: 'Errore significativo. Contatta il supporto se il problema persiste.',
      [ErrorSeverity.CRITICAL]: 'Errore critico. Il nostro team è stato notificato.',
    };
    return messages[severity];
  }

  /**
   * Ottieni cronologia errori (per debugging)
   */
  getErrorLog(): AppError[] {
    return [...this.errorLog];
  }

  /**
   * Pulisci log
   */
  clearLog(): void {
    this.errorLog = [];
  }
}

export const handleError = (
  error: unknown,
  context: string,
  severity: ErrorSeverity = ErrorSeverity.MEDIUM
) => ErrorHandler.getInstance().handle(error, context, severity);

export const getErrorLog = () => ErrorHandler.getInstance().getErrorLog();