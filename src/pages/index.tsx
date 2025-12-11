
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/Hero'; // AGGIORNATO: usa il nome della funzione esportata di default
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection /> {/* AGGIORNATO: usa il nome HeroSection */}
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}