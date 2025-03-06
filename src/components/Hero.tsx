
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openDiagnosticForm = () => {
    window.location.href = 'https://form.respondi.app/eODFSoBX';
  };

  // Ref for the animated elements container
  const particlesRef = useRef<HTMLDivElement>(null);

  // Performance optimized particles effect
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const container = particlesRef.current;
    const particles: HTMLDivElement[] = [];
    const numParticles = window.innerWidth < 768 ? 15 : 30;
    
    // Create particles
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-primary-light/20 backdrop-blur-sm will-change-transform';
      
      // Random size between 4px and 20px
      const size = Math.random() * 16 + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random initial position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration between 15s and 30s
      const duration = Math.random() * 15 + 15;
      particle.style.animation = `float ${duration}s ease-in-out infinite`;
      particle.style.animationDelay = `-${Math.random() * duration}s`;
      
      container.appendChild(particle);
      particles.push(particle);
    }
    
    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  // Handle keyboard accessibility
  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <div 
      id="inicio" 
      className="min-h-[90vh] flex items-center relative overflow-hidden bg-gradient-to-b from-white via-primary-light/5 to-white dark:from-black dark:to-primary-dark/20 content-visibility-auto"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-DEFAULT/5 to-secondary-DEFAULT/5 dark:from-primary-dark/80 dark:to-black/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7100FF,transparent_50%)]" />
        <div ref={particlesRef} className="absolute inset-0 overflow-hidden" aria-hidden="true"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h4 className="text-primary-DEFAULT font-medium tracking-wide animate-fade-in [animation-delay:200ms]">
            BEM-VINDO À FLY AGENCY
          </h4>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight animate-fade-in [animation-delay:400ms] w-full tracking-normal sm:tracking-wide md:tracking-wide lg:tracking-wide">
            A partir de agora, seu maior problema será<br />
            <span className="bg-gradient-to-r from-[#7100FF] to-[#8833FF] bg-clip-text text-transparent">
              ter clientes demais
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in [animation-delay:600ms] leading-snug md:leading-normal sm:px-6 px-4">
            Tenha acesso a estratégias avançadas de marketing <span className="xs:hidden sm:inline"> </span><br className="hidden md:block" />
            para escalar seu negócio com tráfego pago, automação e conteúdo profissional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:800ms] pb-0">
            <button 
              onClick={scrollToContact}
              onKeyDown={(e) => handleKeyPress(e, scrollToContact)}
              className="purple-gradient hover:opacity-90 text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 group hover:shadow-lg hover:shadow-primary-DEFAULT/20 hover-shine transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT/50 focus:ring-offset-2 focus:ring-offset-black will-change-transform"
              aria-label="Agendar Consultoria Gratuita"
            >
              Agendar Consultoria Gratuita
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={openDiagnosticForm}
              onKeyDown={(e) => handleKeyPress(e, openDiagnosticForm)}
              className="text-gray-800 dark:text-white hover:text-primary-DEFAULT border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-black/30 px-6 py-3 rounded-full transition-all duration-300 text-sm md:text-base flex items-center gap-2 group hover:border-primary-DEFAULT focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT/50 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Tenha um diagnóstico exclusivo"
            >
              Tenha um diagnóstico exclusivo
              <ArrowRight className="group-hover:translate-x-1 transition-transform text-primary-DEFAULT" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
