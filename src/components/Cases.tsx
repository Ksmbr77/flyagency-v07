
import { Star, ArrowRight } from 'lucide-react';

const cases = [
  {
    name: "Boné & Cia",
    description: "Aumento de 320% nas vendas online com funis automatizados e gestão de tráfego",
    image: "/lovable-uploads/24ab6c89-a75d-40a9-bf14-0f80b2e4f7dc.png",
    results: ["320% mais vendas", "Funis automatizados", "ROI positivo"]
  },
  {
    name: "Ótica Boa Luz",
    description: "Crescimento de 180% na captação de leads com campanhas personalizadas",
    image: "/lovable-uploads/f665838d-bacb-4cd1-9e19-33ca780cebd5.png",
    results: ["180% mais leads", "Google Ads otimizado", "Automação de vendas"]
  },
  {
    name: "Oral Saúde",
    description: "Expansão de 250% no agendamento de consultas com estratégias avançadas",
    image: "/lovable-uploads/94c69708-fe55-4061-b264-068810becad7.png",
    results: ["250% mais agendamentos", "Marketing digital", "Presença online"]
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
            Resultados reais de clientes que transformaram seus negócios com nossas soluções
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.name}
              className="glass p-8 rounded-2xl hover:translate-y-[-4px] transition-all duration-300 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={caseItem.image}
                  alt={caseItem.name}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="flex gap-1 text-primary-DEFAULT mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">{caseItem.name}</h3>
              <p className="text-gray-300 mb-6">{caseItem.description}</p>
              
              <div className="space-y-2 mb-6">
                {caseItem.results.map((result) => (
                  <div key={result} className="flex items-center gap-2 text-primary-light">
                    <div className="w-2 h-2 bg-primary-DEFAULT rounded-full" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-primary-DEFAULT/20 hover:bg-primary-DEFAULT text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group">
                Ver Case Completo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
