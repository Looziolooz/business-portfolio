// src/hooks/use-scroll-to-section.ts
import { useCallback } from 'react';

/**
 * Hook personalizzato per scorrere fluidamente a una sezione specifica
 * data dal suo ID (ad esempio, "#contact" o "#pricing").
 */
export const useScrollToSection = () => {
  const handleScrollToSection = useCallback((id: string) => {
    // Usiamo il check `if (typeof window !== 'undefined')` se necessario
    // per assicurare che questo codice giri solo nel browser,
    // ma per Next.js e "use client" è spesso sufficiente.
    const element = document.querySelector(id);
    if (element) {
      // Usa scrollIntoView per lo scorrimento fluido
      element.scrollIntoView({ behavior: 'smooth' }); 
    }
  }, []);

  return handleScrollToSection;
};