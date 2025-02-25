
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "João Silva",
    company: "Tech Solutions",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "A Fly Agency transformou completamente nossa presença digital. Em apenas 3 meses, triplicamos nossas conversões."
  },
  {
    name: "Maria Santos",
    company: "Beauty Corp",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Profissionais excepcionais! Nossa ROI aumentou significativamente após implementar as estratégias sugeridas."
  },
  {
    name: "Pedro Costa",
    company: "Edu Tech",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Resultados impressionantes com as campanhas de tráfego pago. A equipe é muito atenciosa e profissional."
  }
];

const Cases = () => {
  return (
    <section id="cases" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary-dark/20 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Cases de <span className="text-primary-DEFAULT">Sucesso</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Conheça algumas histórias de clientes que transformaram seus negócios com nossas soluções
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass p-8 rounded-2xl hover:translate-y-[-4px] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex gap-1 text-primary-DEFAULT mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6">{testimonial.text}</p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
