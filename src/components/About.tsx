
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/20 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold">
              Transformamos sua presença digital em{' '}
              <span className="text-primary-DEFAULT">resultados</span>
            </h2>
            
            <p className="text-gray-300 text-lg">
              Somos especialistas em marketing digital focados em gerar resultados mensuráveis para o seu negócio. Nossa abordagem combina estratégia, criatividade e tecnologia.
            </p>

            <div className="space-y-4">
              {[
                "Equipe especializada e dedicada",
                "Estratégias personalizadas para cada cliente",
                "Resultados mensuráveis e escaláveis",
                "Atendimento próximo e consultivo"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="bg-primary-DEFAULT rounded-full p-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="glass rounded-2xl p-8 relative z-20">
              <img 
                src="/lovable-uploads/6bd99f5e-51de-4017-9443-ff4c6db07f6c.png" 
                alt="Fly Agency" 
                className="w-full rounded-lg"
              />
            </div>
            <div className="absolute inset-0 bg-primary-DEFAULT/20 blur-3xl z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
