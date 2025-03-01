
import { useState, useEffect, lazy, Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import { Moon, Sun } from 'lucide-react';

// Lazy load components that are not immediately visible
const Services = lazy(() => import('@/components/Services'));
const About = lazy(() => import('@/components/About'));
const Cases = lazy(() => import('@/components/Cases'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading fallback
const LoadingFallback = () => <div className="min-h-[200px] flex items-center justify-center"><span className="text-primary-DEFAULT">Carregando...</span></div>;

const Index = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-primary-dark/20 text-gray-900 dark:text-white transition-colors duration-300">
      <Navigation />
      <button
        onClick={toggleTheme}
        className="fixed top-24 right-6 z-50 bg-white dark:bg-primary-dark/50 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-primary-dark transition-colors"
        aria-label={theme === 'dark' ? "Mudar para tema claro" : "Mudar para tema escuro"}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-primary-DEFAULT" />
        )}
      </button>
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Cases />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;
