
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-dark py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/e8dda4b2-cc66-4d60-9716-5d5798b15974.png" 
              alt="Fly Agency Logo" 
              className="h-16 md:h-20 w-auto" 
              loading="lazy"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
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
                className="text-white hover:text-primary-DEFAULT transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-primary-DEFAULT hover:bg-primary-light text-white px-5 py-2 rounded-full transition-all duration-300 hover-shine will-change-transform"
            >
              Agendar Consultoria Gratuita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-dark rounded-lg p-4 animate-fade-in will-change-transform">
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
                  className="text-white hover:text-primary-DEFAULT transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-primary-DEFAULT hover:bg-primary-light text-white px-6 py-2 rounded-full transition-all duration-300 w-full hover-shine will-change-transform"
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
