
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

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    document.body.style.backgroundColor = savedTheme === 'dark' ? '#0D0D0D' : '#ffffff';
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.body.style.backgroundColor = newTheme === 'dark' ? '#0D0D0D' : '#ffffff';
  }, [theme]);

  return (
    <main className={`min-h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:to-primary-dark/20 transition-colors duration-300 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
      <Navigation />
      <button
        onClick={toggleTheme}
        className={`fixed top-24 right-6 z-50 p-3 rounded-full shadow-lg transition-colors ${
          theme === 'dark' 
            ? 'bg-primary-dark/50 hover:bg-primary-dark' 
            : 'bg-white/80 hover:bg-white shadow-md'
        }`}
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
