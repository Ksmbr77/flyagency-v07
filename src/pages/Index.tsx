
import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import { Moon, Sun } from 'lucide-react';

// Lazy load non-critical components for better performance
const Services = lazy(() => import('@/components/Services'));
const About = lazy(() => import('@/components/About'));
const Cases = lazy(() => import('@/components/Cases'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  }, [theme]);

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
      
      {/* Use Suspense for lazy-loaded components */}
      <Suspense fallback={<div className="h-20 flex items-center justify-center">Carregando...</div>}>
        <Services />
        <About />
        <Cases />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
