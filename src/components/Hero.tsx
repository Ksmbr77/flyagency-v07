
import { ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-DEFAULT/5 to-secondary-DEFAULT/5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h4 className="text-primary-DEFAULT font-medium tracking-wide animate-fade-in [animation-delay:200ms]">
            BEM-VINDO À FLY AGENCY
          </h4>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight animate-fade-in [animation-delay:400ms]">
            A partir de agora, seu maior problema será ter{' '}
            <span className="bg-gradient-to-r from-[#7100FF] to-[#8833FF] bg-clip-text text-transparent">
              clientes demais
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in [animation-delay:600ms]">
            Tenha acesso a estratégias avançadas de marketing digital para escalar seu negócio com tráfego pago, automação e produção de conteúdo profissional.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:800ms] pb-8">
            <ScrollLink 
              to="contato"
              smooth={true}
              duration={500}
              className="purple-gradient hover:opacity-90 text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 group hover:shadow-lg hover:shadow-primary-DEFAULT/20 hover-shine transform hover:scale-105 cursor-pointer"
            >
              Agendar Consultoria Gratuita
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </ScrollLink>
            <ScrollLink
              to="cases"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-primary-DEFAULT transition-colors duration-300 flex items-center gap-2 group cursor-pointer"
            >
              Tenha um diagnóstico exclusivo para o seu negócio em até 30 min
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
