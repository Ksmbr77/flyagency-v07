
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Cases from '@/components/Cases';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-primary-dark/20 text-white">
      <Navigation />
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
