
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-white to-primary-light/20 dark:from-black dark:to-primary-dark/20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-DEFAULT/10 to-secondary-DEFAULT/10 dark:from-primary-dark/80 dark:to-black/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#9b87f5,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h4 className="text-primary-DEFAULT font-medium tracking-wide animate-fade-in [animation-delay:200ms]">
            BEM-VINDO À FLY AGENCY
          </h4>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight animate-fade-in [animation-delay:400ms]">
            Transformamos sua presença digital em{' '}
            <span className="text-primary-DEFAULT">resultados reais</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in [animation-delay:600ms]">
            Estratégias avançadas de marketing digital para escalar seu negócio com tráfego pago, automação e produção de conteúdo profissional.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:800ms]">
            <a 
              href="https://wa.link/jgvhdu"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-primary-DEFAULT hover:bg-primary-hover text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 group hover:shadow-lg hover:shadow-primary-DEFAULT/20 hover-shine"
            >
              Agendar Consultoria
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="text-gray-900 dark:text-white hover:text-primary-DEFAULT transition-colors duration-300 flex items-center gap-2 group">
              Ver Cases de Sucesso
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
