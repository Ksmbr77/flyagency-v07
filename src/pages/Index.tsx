
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Cases from '@/components/Cases';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Cases />
      <Contact />
    </main>
  );
};

export default Index;
