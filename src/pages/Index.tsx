
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Cases from '@/components/Cases';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { MessageCircle } from 'lucide-react';

const Index = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Cases />
      <Contact />
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.link/jgvhdu"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 animate-bounce hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </main>
  );
};

export default Index;
