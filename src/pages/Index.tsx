
import { useState, useEffect, useCallback } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Cases from '@/components/Cases';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Moon, Sun } from 'lucide-react';

const Index = () => {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  // Handle theme initialization only once after component is mounted
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }, [theme]);
  
  // Apply default styles to optimize initial rendering
  if (!mounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <main className="min-h-screen bg-black text-white transition-colors duration-300">
      <Navigation />
      <button
        onClick={toggleTheme}
        className="fixed top-24 right-6 z-50 bg-black/80 dark:bg-primary-dark/50 p-3 rounded-full shadow-lg hover:bg-gray-900 dark:hover:bg-primary-dark transition-colors"
        aria-label={theme === 'dark' ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
      >
        {theme === 'dark' ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-primary-DEFAULT" />
        )}
      </button>
      <Hero />
      <Services />
      <About />
      <Cases />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
