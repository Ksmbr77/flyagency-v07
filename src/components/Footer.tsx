import { Instagram, Youtube, Mail, Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer className="relative bg-primary-DEFAULT/5 dark:bg-primary-dark/50 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <img 
              src={theme === 'dark' 
                ? "/lovable-uploads/067f4b4e-c0c4-4d80-82f8-1aae9a5e7570.png"
                : "/lovable-uploads/67145fa2-5bf6-4117-be93-d48d0e1a722b.png"} 
              alt="Fly Agency Logo" 
              className="h-16"
            />
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/fly.agencyy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-DEFAULT transition-colors transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.youtube.com/@Fly_agency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-DEFAULT transition-colors transform hover:scale-110"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Serviços', 'Cases', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-DEFAULT transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Serviços</h4>
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
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-DEFAULT transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-4">
              <a 
                href="mailto:flyy.agc@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-DEFAULT transition-colors flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                flyy.agc@gmail.com
              </a>
              <a 
                href="tel:+5579998615349"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-DEFAULT transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (79) 99861-5349
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 pt-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Fly Agency. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>

      <a
        href="https://wa.link/jgvhdu"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 animate-bounce hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
};

export default Footer;
