// src/hooks/use-scroll-to-section.ts

import { useCallback } from "react";

/**
 * Custom hook to encapsulate the scroll logic, promoting reusability and clean design.
 */
export function useScrollToSection() {
  const handleScroll = useCallback((href: string) => {
    const selector = href.startsWith('#') ? href : `#${href}`;
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return handleScroll;
}