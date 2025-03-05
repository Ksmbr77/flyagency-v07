
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const Diagnostico = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to external form
    window.location.href = 'https://form.respondi.app/eODFSoBX';
    
    // Fallback if redirect doesn't work
    const timeout = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-primary-dark/80 to-black text-white flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary-DEFAULT mx-auto mb-4" />
        <h1 className="text-2xl font-semibold">Redirecionando para o diagnóstico digital...</h1>
        <p className="mt-2 text-gray-400">Por favor, aguarde um momento.</p>
      </div>
    </div>
  );
};

export default Diagnostico;
