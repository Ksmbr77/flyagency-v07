
import { Shield, Zap, Users, Video } from 'lucide-react';

const services = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Tráfego Pago",
    description: "Campanhas estratégicas em Google Ads, Meta Ads e TikTok Ads para maximizar seu retorno sobre o investimento e alcançar clientes qualificados."
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Automação e Funis",
    description: "Automatize suas vendas com funis inteligentes e Inteligência Artificial, convertendo leads em clientes de forma previsível."
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Marketing Estratégico",
    description: "Estratégias personalizadas de marketing digital para impulsionar e destacar sua marca na sua região."
  },
  {
    icon: <Video className="w-12 h-12" />,
    title: "Produção de Vídeos",
    description: "Conteúdo audiovisual profissional que engaja seu público e fortalece sua presença digital."
  }
];

const Services = () => {
  return (
    <section id="serviços" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nossas <span className="text-primary-DEFAULT">Soluções</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluções completas para impulsionar seu negócio no mundo digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white shadow-lg p-8 rounded-2xl hover:translate-y-[-4px] transition-all duration-300 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-primary-DEFAULT mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
