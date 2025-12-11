/**
 * Centralizzato Logging System
 * Livelli: DEBUG, INFO, WARN, ERROR, FATAL
 * 
 * USAGE:
 * import { logger } from '@/utils/logger';
 * 
 * logger.info('Pagamento elaborato', { orderId: '123', amount: 99.99 });
 * logger.error('Errore Stripe', { code: 'payment_failed' });
 */

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  FATAL = 4,
}

export interface LogEntry {
  timestamp: string;
  level: string;
  message: string;
  context?: Record<string, unknown>;
  stack?: string;
  userId?: string;
}

class Logger {
  private static instance: Logger;
  private currentLevel: LogLevel = LogLevel.INFO;
  private logs: LogEntry[] = [];
  private maxLogs = 500;

  private constructor() {
    this.setLevelFromEnv();
  }

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private setLevelFromEnv(): void {
    const envLevel = process.env.NEXT_PUBLIC_LOG_LEVEL?.toUpperCase();
    if (envLevel && LogLevel[envLevel as keyof typeof LogLevel] !== undefined) {
      this.currentLevel = LogLevel[envLevel as keyof typeof LogLevel];
    }
  }

  private formatTime(): string {
    return new Date().toISOString();
  }

  private createEntry(
    level: LogLevel,
    message: string,
    context?: Record<string, unknown>,
    stack?: string
  ): LogEntry {
    return {
      timestamp: this.formatTime(),
      level: LogLevel[level],
      message,
      context,
      stack,
    };
  }

  private shouldLog(level: LogLevel): boolean {
    return level >= this.currentLevel;
  }

  private storeLog(entry: LogEntry): void {
    this.logs.push(entry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }
  }

  private output(entry: LogEntry): void {
    const prefix = `[${entry.timestamp}] [${entry.level}]`;
    
    if (typeof window === 'undefined') {
      // Server-side
      console.log(prefix, entry.message, entry.context || '', entry.stack || '');
    } else {
      // Client-side
      const style = this.getConsoleStyle(entry.level);
      console.log(`%c${prefix} ${entry.message}`, style, entry.context || {});
    }
  }

  private getConsoleStyle(level: string): string {
    const styles = {
      DEBUG: 'color: gray; font-weight: normal;',
      INFO: 'color: blue; font-weight: normal;',
      WARN: 'color: orange; font-weight: bold;',
      ERROR: 'color: red; font-weight: bold;',
      FATAL: 'color: red; background: yellow; font-weight: bold;',
    };
    return styles[level as keyof typeof styles] || '';
  }

  debug(message: string, context?: Record<string, unknown>): void {
    if (this.shouldLog(LogLevel.DEBUG)) {
      const entry = this.createEntry(LogLevel.DEBUG, message, context);
      this.storeLog(entry);
      this.output(entry);
    }
  }

  info(message: string, context?: Record<string, unknown>): void {
    if (this.shouldLog(LogLevel.INFO)) {
      const entry = this.createEntry(LogLevel.INFO, message, context);
      this.storeLog(entry);
      this.output(entry);
    }
  }

  warn(message: string, context?: Record<string, unknown>): void {
    if (this.shouldLog(LogLevel.WARN)) {
      const entry = this.createEntry(LogLevel.WARN, message, context);
      this.storeLog(entry);
      this.output(entry);
    }
  }

  error(message: string, error?: Error | unknown, context?: Record<string, unknown>): void {
    if (this.shouldLog(LogLevel.ERROR)) {
      const stack = error instanceof Error ? error.stack : undefined;
      const entry = this.createEntry(LogLevel.ERROR, message, context, stack);
      this.storeLog(entry);
      this.output(entry);
    }
  }

  fatal(message: string, error?: Error | unknown, context?: Record<string, unknown>): void {
    if (this.shouldLog(LogLevel.FATAL)) {
      const stack = error instanceof Error ? error.stack : undefined;
      const entry = this.createEntry(LogLevel.FATAL, message, context, stack);
      this.storeLog(entry);
      this.output(entry);
      
      // In produzione, invia a servizio monitoring
      if (process.env.NODE_ENV === 'production') {
        this.sendToMonitoring(entry);
      }
    }
  }

  private async sendToMonitoring(entry: LogEntry): Promise<void> {
    // TODO: Implementare invio a Sentry, LogRocket, DataDog, etc
    try {
      await fetch('/api/logs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry),
      });
    } catch {
      console.error('Failed to send log to monitoring service');
    }
  }

  getLogs(level?: LogLevel): LogEntry[] {
    if (!level) return [...this.logs];
    return this.logs.filter((log) => LogLevel[log.level as keyof typeof LogLevel] >= level);
  }

  clearLogs(): void {
    this.logs = [];
  }

  setLevel(level: LogLevel): void {
    this.currentLevel = level;
  }
}

export const logger = Logger.getInstance();

/**
 * Hook per performance monitoring
 */
export const logPerformance = (label: string): (() => void) => {
  const startTime = performance.now();
  return () => {
    const duration = performance.now() - startTime;
    logger.debug(`Performance [${label}]`, { durationMs: duration.toFixed(2) });
  };
};