
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { HeroSection } from '@/components/Hero';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection /> 
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}