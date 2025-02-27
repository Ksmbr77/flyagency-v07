
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-16 relative bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Que tal receber um <span className="text-primary-DEFAULT">diagnóstico gratuito</span> do seu negócio?
            </h2>
            <p className="text-gray-600">
              Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas
            </p>
          </div>

          <form className="space-y-6 animate-fade-in [animation-delay:200ms]">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent transition-all duration-300"
                  placeholder="Seu e-mail profissional"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent transition-all duration-300"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent transition-all duration-300 resize-none"
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
