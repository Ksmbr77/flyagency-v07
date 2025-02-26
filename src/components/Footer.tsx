
import { Instagram, Youtube, Mail, Phone, ArrowRight, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-primary-dark/50 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/6bd99f5e-51de-4017-9443-ff4c6db07f6c.png" 
              alt="Fly Agency Logo" 
              className="h-12"
            />
            <p className="text-gray-400">
              Transformamos sua presença digital em resultados reais com estratégias inovadoras de marketing.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/fly.agencyy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-DEFAULT transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/@Fly_agency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-DEFAULT transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Serviços', 'Cases', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-DEFAULT transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {[
                'Tráfego Pago',
                'Automação de Marketing',
                'Produção de Conteúdo',
                'Marketing Estratégico'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#serviços"
                    className="text-gray-400 hover:text-primary-DEFAULT transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-4">
              <a 
                href="mailto:contato@flyagency.com.br"
                className="text-gray-400 hover:text-primary-DEFAULT transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                contato@flyagency.com.br
              </a>
              <a 
                href="tel:+5500000000000"
                className="text-gray-400 hover:text-primary-DEFAULT transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (00) 0000-0000
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Fly Agency. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 animate-bounce"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
};

export default Footer;
