
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }
    
    // Store data in localStorage for future reference
    localStorage.setItem('contactData', JSON.stringify({
      ...formData,
      date: new Date().toISOString()
    }));
    
    // Redirect to WhatsApp
    window.open(`https://wa.link/r4rqk9`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    toast({
      title: "Mensagem enviada!",
      description: "Em breve entraremos em contato."
    });
  };

  return (
    <section id="contato" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-primary-dark/20 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto neo-blur rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Que tal receber um <span className="text-primary-DEFAULT">diagnóstico gratuito</span> do seu negócio?
            </h2>
            <p className="text-gray-300 mb-6">
              Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas
            </p>
            <p className="text-gray-400 text-sm">Entre em contato diretamente:</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in [animation-delay:200ms]">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-primary-DEFAULT/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent transition-all duration-300"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-primary-DEFAULT/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent transition-all duration-300"
                  placeholder="Seu e-mail profissional"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-primary-DEFAULT/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent transition-all duration-300"
                placeholder="(00) 00000-0000"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-primary-DEFAULT/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Como podemos ajudar seu negócio?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-DEFAULT hover:bg-primary-light text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-primary-DEFAULT/20"
            >
              Agendar Consultoria Gratuita
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
