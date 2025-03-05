
import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

type Question = {
  id: number;
  question: string;
  options: string[];
};

const questions: Question[] = [
  {
    id: 1,
    question: "Como você classificaria sua presença atual nas redes sociais?",
    options: [
      "Inexistente - Não tenho perfis profissionais",
      "Básica - Tenho perfis, mas não posto com frequência",
      "Intermediária - Posto regularmente, mas sem estratégia",
      "Avançada - Tenho uma estratégia definida e resultados constantes"
    ]
  },
  {
    id: 2,
    question: "Você já investiu em alguma forma de tráfego pago?",
    options: [
      "Nunca investi em anúncios",
      "Já fiz alguns anúncios, mas sem resultados",
      "Invisto regularmente com resultados moderados",
      "Tenho uma estratégia de anúncios bem estabelecida"
    ]
  },
  {
    id: 3,
    question: "Como você capta leads atualmente?",
    options: [
      "Não faço captação de leads",
      "Apenas por indicação/boca a boca",
      "Tenho formulários no site, mas sem automação",
      "Uso funis de vendas automatizados"
    ]
  },
  {
    id: 4,
    question: "Qual é o seu orçamento mensal para marketing digital?",
    options: [
      "Não tenho orçamento definido",
      "Menos de R$ 1.000",
      "Entre R$ 1.000 e R$ 5.000",
      "Mais de R$ 5.000"
    ]
  },
  {
    id: 5,
    question: "Qual é o principal objetivo do seu negócio com marketing digital?",
    options: [
      "Aumentar a visibilidade da marca",
      "Gerar mais leads qualificados",
      "Aumentar vendas diretas",
      "Fidelizar clientes existentes"
    ]
  }
];

const Diagnostico = () => {
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    business: ''
  });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: answer
    });
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({
      ...contact,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    if (!contact.name || !contact.email || !contact.phone || !contact.business) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }
    
    // Build message with diagnosis results
    let message = `Diagnóstico completo para ${contact.name} da empresa ${contact.business}:\n\n`;
    message += `Email: ${contact.email}\n`;
    message += `Telefone: ${contact.phone}\n\n`;
    message += `RESULTADOS DO DIAGNÓSTICO:\n`;
    
    Object.keys(answers).forEach((questionId) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      message += `${question?.question}: ${answers[parseInt(questionId)]}\n`;
    });
    
    // Format message for WhatsApp (URL encode)
    const encodedMessage = encodeURIComponent(message);
    
    // Redirect to WhatsApp with diagnosis data
    window.open(`https://wa.link/44ujfg`, '_blank');
    
    // Store data in localStorage for future reference
    localStorage.setItem('diagnosticData', JSON.stringify({
      contact,
      answers,
      date: new Date().toISOString()
    }));
    
    toast({
      title: "Diagnóstico enviado!",
      description: "Em breve entraremos em contato com sua análise personalizada."
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-primary-dark/80 to-black text-white transition-colors duration-300">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto neo-blur rounded-2xl border border-primary-DEFAULT/30 shadow-xl shadow-primary-DEFAULT/10 p-8 md:p-12">
          {!showResult ? (
            <>
              <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Diagnóstico <span className="bg-gradient-to-r from-primary-light to-primary-neon bg-clip-text text-transparent">Digital</span>
                  </h2>
                  <div className="text-sm text-gray-300">
                    Pergunta {currentQuestion + 1} de {questions.length}
                  </div>
                </div>
                
                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <div 
                    className="bg-gradient-to-r from-primary-DEFAULT to-primary-light h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
                  {questions[currentQuestion].question}
                </h3>
                
                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className={`w-full text-left p-4 rounded-lg border hover:shadow-md hover:shadow-primary-DEFAULT/20 transition-all duration-300 will-change-transform ${
                        answers[questions[currentQuestion].id] === option
                          ? 'bg-primary-DEFAULT/20 border-primary-DEFAULT text-white'
                          : 'bg-black/40 border-gray-700 text-gray-200 hover:border-primary-DEFAULT/50 hover:-translate-y-1'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between">
                {currentQuestion > 0 ? (
                  <button
                    onClick={handlePrevious}
                    className="flex items-center gap-2 text-gray-300 hover:text-primary-light transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Anterior
                  </button>
                ) : (
                  <div></div>
                )}
                
                <div className="text-sm text-gray-300">
                  {Object.keys(answers).length} de {questions.length} respondidas
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-10">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-primary-DEFAULT to-primary-light p-3 rounded-full">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  Diagnóstico <span className="bg-gradient-to-r from-primary-light to-primary-neon bg-clip-text text-transparent">Concluído!</span>
                </h2>
                <p className="text-gray-300">
                  Preencha seus dados para receber uma análise personalizada baseada em suas respostas.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={contact.name}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-primary-DEFAULT/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="business" className="block text-sm font-medium mb-2 text-gray-200">
                    Nome da empresa
                  </label>
                  <input
                    type="text"
                    id="business"
                    value={contact.business}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-primary-DEFAULT/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent transition-all duration-300"
                    placeholder="Nome da sua empresa"
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={contact.email}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-primary-DEFAULT/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent transition-all duration-300"
                      placeholder="Seu e-mail profissional"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-200">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={contact.phone}
                      onChange={handleContactChange}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-primary-DEFAULT/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-DEFAULT focus:border-transparent transition-all duration-300"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-DEFAULT to-primary-light hover:from-primary-light hover:to-primary-DEFAULT text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-primary-DEFAULT/30 transform hover:-translate-y-1 will-change-transform"
                >
                  Receber Análise Personalizada
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default Diagnostico;
