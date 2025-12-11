import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
          >
            Lorenzo Dastoli
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('chi-sono')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Chi Sono
            </button>
            <button
              onClick={() => scrollToSection('servizi')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Servizi
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Portfolio
            </button>
            <Button
              onClick={() => scrollToSection('contatti')}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
            >
              Contattami
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-900 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('chi-sono')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors font-medium"
            >
              Chi Sono
            </button>
            <button
              onClick={() => scrollToSection('servizi')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors font-medium"
            >
              Servizi
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors font-medium"
            >
              Portfolio
            </button>
            <div className="px-4">
              <Button
                onClick={() => scrollToSection('contatti')}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
              >
                Contattami
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}