import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
// Percorso canonico per il CSS globale
import "@/app/globals.css"; 
// Import senza estensioni, risolto dall'alias
import { Navbar } from "@/components/Navbar"; 
import { Footer } from "@/components/Footer";

// Configurazione dei font (utilizza i font standard di Next.js)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

// Metadati per SEO
export const metadata: Metadata = {
  title: "Lorenzo Dastoli - Sviluppo Gestionali e Siti Web",
  description: "Software gestionali personalizzati, siti web moderni e soluzioni digitali complete per piccole aziende. Inizia da 10€/mese.",
  keywords: ["software gestionale", "sviluppo web", "next.js", "react", "tailwind css", "stripe", "lorenzo dastoli"],
  openGraph: {
    title: "Lorenzo Dastoli - Sviluppo Gestionali e Siti Web",
    description: "Software gestionali personalizzati e soluzioni digitali per la tua azienda.",
    url: 'https://tuo-dominio.com',
    siteName: 'Lorenzo Dastoli Portfolio',
    locale: 'it_IT',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="font-sans text-gray-900 antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}