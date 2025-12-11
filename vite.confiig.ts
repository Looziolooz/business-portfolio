// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Importa il modulo 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // CORREZIONE: Mappa l'alias '@' alla directory 'src'
      // path.resolve(__dirname, './src') crea un percorso assoluto per Vite
      '@': path.resolve(__dirname, './src'), 
    },
  },
});