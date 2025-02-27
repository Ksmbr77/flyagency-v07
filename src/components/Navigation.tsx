
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-4' : 'py-6'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/67145fa2-5bf6-4117-be93-d48d0e1a722b.png"
              alt="Fly Agency Logo" 
              className="h-20 w-auto" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Início', id: 'inicio' },
              { label: 'Soluções', id: 'serviços' },
              { label: 'Sobre', id: 'sobre' },
              { label: 'Cases', id: 'cases' },
              { label: 'Contato', id: 'contato' }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-800 hover:text-primary-DEFAULT transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-primary-DEFAULT hover:bg-primary-light text-white px-6 py-2 rounded-full transition-all duration-300 hover-shine"
            >
              Agendar Consultoria Gratuita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg p-4 animate-fade-in shadow-lg">
            <div className="flex flex-col space-y-4">
              {[
                { label: 'Início', id: 'inicio' },
                { label: 'Soluções', id: 'serviços' },
                { label: 'Sobre', id: 'sobre' },
                { label: 'Cases', id: 'cases' },
                { label: 'Contato', id: 'contato' }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-800 hover:text-primary-DEFAULT transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-primary-DEFAULT hover:bg-primary-light text-white px-6 py-2 rounded-full transition-all duration-300 w-full hover-shine"
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
