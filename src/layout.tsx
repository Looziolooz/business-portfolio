import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer';


const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lorenzo Dastoli - Soluzioni Gestionali per Aziende",
  description: "Sviluppo siti web personalizzati e software gestionali per piccole aziende. Gestione ordini, incassi, prenotazioni e molto altro. Abbonamento mensile da 10€.",
  keywords: ["gestionale aziendale", "sito web personalizzato", "software gestione ordini", "gestionale piccole aziende", "sviluppo web", "e-commerce"],
  authors: [{ name: "Lorenzo Dastoli" }],
  openGraph: {
    title: "Lorenzo Dastoli - Soluzioni Gestionali per Aziende",
    description: "Sviluppo siti web personalizzati e software gestionali per piccole aziende",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen flex flex-col"
       cz-shortcut-listen="true">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
