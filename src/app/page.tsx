import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <PortfolioSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}