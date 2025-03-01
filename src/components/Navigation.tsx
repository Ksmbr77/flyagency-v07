
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            href="#inicio" 
            className="text-2xl font-bold text-gray-800 dark:text-white hover:text-primary-DEFAULT transition-colors"
          >
            Fly<span className="text-primary-DEFAULT">Agency</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              onClick={() => scrollToSection('inicio')} 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-DEFAULT dark:hover:text-primary-DEFAULT cursor-pointer transition-colors"
            >
              Início
            </a>
            <a 
              onClick={() => scrollToSection('serviços')} 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-DEFAULT dark:hover:text-primary-DEFAULT cursor-pointer transition-colors"
            >
              Soluções
            </a>
            <a 
              onClick={() => scrollToSection('sobre')} 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-DEFAULT dark:hover:text-primary-DEFAULT cursor-pointer transition-colors"
            >
              Sobre
            </a>
            <a 
              onClick={() => scrollToSection('cases')} 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-DEFAULT dark:hover:text-primary-DEFAULT cursor-pointer transition-colors"
            >
              Cases
            </a>
            <a 
              onClick={() => scrollToSection('contato')} 
              className="purple-gradient text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition-all hover-shine"
            >
              Contato
            </a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-800 dark:text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full py-4 bg-white dark:bg-black shadow-lg border-t border-gray-200 dark:border-gray-800 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              onClick={() => scrollToSection('inicio')} 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-DEFAULT dark:hover:text-primary-DEFAULT cursor-pointer transition-colors py-2"
            >
              Início
            </a>
            <a 
              onClick={() => scrollToSection('serviços')} 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-DEFAULT dark:hover:text-primary-DEFAULT cursor-pointer transition-colors py-2"
            >
              Soluções
            </a>
            <a 
              onClick={() => scrollToSection('sobre')} 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-DEFAULT dark:hover:text-primary-DEFAULT cursor-pointer transition-colors py-2"
            >
              Sobre
            </a>
            <a 
              onClick={() => scrollToSection('cases')} 
              className="text-gray-700 dark:text-gray-300 hover:text-primary-DEFAULT dark:hover:text-primary-DEFAULT cursor-pointer transition-colors py-2"
            >
              Cases
            </a>
            <a 
              onClick={() => scrollToSection('contato')} 
              className="purple-gradient text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition-all hover-shine inline-block text-center"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
