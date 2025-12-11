// 📄 File: tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  // Configurazione dei percorsi dei file che utilizzano Tailwind
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // Ho rimosso './**/*.md' che non è presente nel template iniziale
  ],
  theme: {
    extend: {
      colors: {
        // Mappa i colori custom (primary, accent, secondary) definiti in globals.css
        primary: {
          50: '#f8f9fa', // Supposto per --color-bg-alt o un tono molto chiaro
          100: 'var(--color-bg-alt)', // Usato in HeroSection
          200: '#fbc5be', // Tono medio-chiaro per sfumature
          400: '#f57a69', // Tono medio
          500: '#ea5e3f', // Corrisponde a --color-primary
          600: '#d84428', // Corrisponde a --color-primary-dark
          700: '#b5341e', // Tono scuro
        },
        accent: {
          50: '#f8f9fa', // Supposto per sfondi molto chiari (Pricing, Testimonials)
          100: '#dcfce7', // Usato in TestimonialsSection
          200: '#bbf7d0', // Usato in HeroSection
          500: '#22c55e', // Corrisponde a --color-accent
          700: '#15803d', // Usato in TestimonialsSection
        },
        secondary: {
          900: '#1a1a1a', // Tono scuro per il footer (Ho usato un tono scuro da globals.css, ma in Footer.tsx viene usato bg-secondary-900. Ho scelto il colore più scuro di globals.css)
        }
      },
    },
  },
  plugins: [],
};

export default config;