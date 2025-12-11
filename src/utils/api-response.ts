/**
 * Standardizzato API Response Handler
 * Assicura risposte coerenti da tutte le API routes
 * 
 * USAGE in API route (src/app/api/contact/route.ts):
 * 
 * import { apiResponse, apiError } from '@/utils/api-response';
 * 
 * export async function POST(request: Request) {
 *   try {
 *     const data = await request.json();
 *     // ... logic ...
 *     return apiResponse({ orderId: '123' }, 'Pagamento elaborato', 200);
 *   } catch (error) {
 *     return apiError('Errore nel pagamento', 500, error);
 *   }
 * }
 */

export interface ApiSuccessResponse<T = unknown> {
  success: true;
  data: T;
  message?: string;
  timestamp: string;
}

export interface ApiErrorResponse {
  success: false;
  error: {
    message: string;
    code: string;
    details?: Record<string, unknown>;
  };
  timestamp: string;
}

export type ApiResponse<T = unknown> = ApiSuccessResponse<T> | ApiErrorResponse;

/**
 * Ritorna risposta di successo
 */
export const apiResponse = <T,>(
  data: T,
  message?: string,
  status: number = 200
): Response => {
  const response: ApiSuccessResponse<T> = {
    success: true,
    data,
    message,
    timestamp: new Date().toISOString(),
  };

  return new Response(JSON.stringify(response), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
};

/**
 * Ritorna risposta di errore
 */
export const apiError = (
  message: string,
  status: number = 400,
  error?: unknown,
  code?: string,
  details?: Record<string, unknown>
): Response => {
  const errorCode =
    code ||
    {
      400: 'BAD_REQUEST',
      401: 'UNAUTHORIZED',
      403: 'FORBIDDEN',
      404: 'NOT_FOUND',
      409: 'CONFLICT',
      429: 'RATE_LIMITED',
      500: 'INTERNAL_SERVER_ERROR',
      503: 'SERVICE_UNAVAILABLE',
    }[status] ||
    'UNKNOWN_ERROR';

  const response: ApiErrorResponse = {
    success: false,
    error: {
      message,
      code: errorCode,
      details,
    },
    timestamp: new Date().toISOString(),
  };

  // Log errore
  if (error && typeof error !== 'string') {
    console.error(`[API ERROR] ${message}:`, error);
  }

  return new Response(JSON.stringify(response), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
};

/**
 * Validazioni comuni per API routes
 */
export const validateRequest = async (request: Request) => {
  if (request.method !== 'POST') {
    throw new Error('METHOD_NOT_ALLOWED');
  }

  const contentType = request.headers.get('content-type');
  if (!contentType?.includes('application/json')) {
    throw new Error('INVALID_CONTENT_TYPE');
  }

  try {
    return await request.json();
  } catch {
    throw new Error('INVALID_JSON');
  }
};

/**
 * Wrapper per API routes con error handling
 */
export const withErrorHandler = (handler: (req: Request) => Promise<Response>) => {
  return async (request: Request) => {
    try {
      return await handler(request);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      
      if (message === 'METHOD_NOT_ALLOWED') {
        return apiError('Metodo HTTP non consentito', 405, error, 'METHOD_NOT_ALLOWED');
      }
      
      if (message === 'INVALID_CONTENT_TYPE') {
        return apiError('Content-Type non valido', 400, error, 'INVALID_CONTENT_TYPE');
      }
      
      if (message === 'INVALID_JSON') {
        return apiError('JSON non valido', 400, error, 'INVALID_JSON');
      }

      return apiError('Errore interno del server', 500, error, 'INTERNAL_SERVER_ERROR');
    }
  };
};

/**
 * Verifica rate limiting
 */
export const checkRateLimit = (
  headers: Headers,
  maxRequests: number = 10,
  windowMs: number = 60000
): { allowed: boolean; remaining: number } => {
  // TODO: Implementare con Redis o database
  // Per ora, versione semplice senza persistenza
  return { allowed: true, remaining: maxRequests - 1 };
};

/**
 * Verifica autenticazione (se implementata)
 */
export const verifyAuth = async (headers: Headers): Promise<{ userId?: string; valid: boolean }> => {
  const authHeader = headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { valid: false };
  }

  // TODO: Verificare token JWT
  return { valid: false };
};