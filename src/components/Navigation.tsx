
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-dark dark:neo-blur py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/67145fa2-5bf6-4117-be93-d48d0e1a722b.png" 
              alt="Fly Agency Logo" 
              className="h-16 w-auto" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Início', 'Serviços', 'Sobre', 'Cases', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-800 dark:text-white hover:text-primary-DEFAULT transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <ThemeToggle />
            <button className="bg-primary-DEFAULT hover:bg-primary-light text-white px-6 py-2 rounded-full transition-all duration-300 hover-shine">
              Agendar Reunião
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="text-gray-800 dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-dark dark:neo-blur rounded-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {['Início', 'Serviços', 'Sobre', 'Cases', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-800 dark:text-white hover:text-primary-DEFAULT transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-primary-DEFAULT hover:bg-primary-light text-white px-6 py-2 rounded-full transition-all duration-300 w-full hover-shine">
                Agendar Reunião
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
