import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
    <html lang="it" className="scroll-smooth">
      <body className="antialiased"
      cz-shortcut-listen="true">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}