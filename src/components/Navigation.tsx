
import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Optimized scroll handler with useCallback for better performance
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    // Using passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const openDiagnosticForm = () => {
    window.location.href = 'https://form.respondi.app/eODFSoBX';
    setIsMobileMenuOpen(false);
  };

  // Keyboard accessibility improvement
  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 will-change-transform ${isScrolled ? 'glass-dark py-4' : 'py-6'}`}
      role="navigation"
      aria-label="Principal"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/e8dda4b2-cc66-4d60-9716-5d5798b15974.png" 
              alt="Fly Agency Logo" 
              className="h-20 md:h-24 w-auto transform-gpu" 
              loading="eager"
              width="120"
              height="96"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Início', id: 'inicio' },
              { name: 'Soluções', id: 'serviços' },
              { name: 'Sobre', id: 'sobre' },
              { name: 'Cases', id: 'cases' },
              { name: 'Contato', id: 'contato' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                onKeyDown={(e) => handleKeyPress(e, () => scrollToSection(item.id))}
                className="text-white hover:text-primary-DEFAULT transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT/50 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
                aria-label={`Navegar para seção ${item.name}`}
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contato')}
              onKeyDown={(e) => handleKeyPress(e, () => scrollToSection('contato'))}
              className="bg-primary-DEFAULT hover:bg-primary-light text-white px-6 py-2 rounded-full transition-all duration-300 hover-shine focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT/50 focus:ring-offset-2 focus:ring-offset-black will-change-transform transform hover:scale-105"
              aria-label="Agendar Consultoria Gratuita"
            >
              Agendar Consultoria Gratuita
            </button>
          </div>

          {/* Mobile Menu Button - Improved for accessibility */}
          <button
            className="md:hidden text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - With improved accessibility */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden mt-4 glass-dark rounded-lg p-4 animate-fade-in transform-gpu"
            role="menu"
          >
            <div className="flex flex-col space-y-4">
              {[
                { name: 'Início', id: 'inicio' },
                { name: 'Soluções', id: 'serviços' },
                { name: 'Sobre', id: 'sobre' },
                { name: 'Cases', id: 'cases' },
                { name: 'Contato', id: 'contato' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  onKeyDown={(e) => handleKeyPress(e, () => scrollToSection(item.id))}
                  className="text-white hover:text-primary-DEFAULT transition-colors duration-300 text-left p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT/50"
                  role="menuitem"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contato')}
                onKeyDown={(e) => handleKeyPress(e, () => scrollToSection('contato'))}
                className="bg-primary-DEFAULT hover:bg-primary-light text-white px-6 py-2 rounded-full transition-all duration-300 w-full hover-shine focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT/50"
                role="menuitem"
              >
                Agendar Consultoria Gratuita
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
