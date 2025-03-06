
import { Check, BarChart3, ArrowUpRight, TrendingUp, LineChart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    const currentElement = document.getElementById('chart-section');
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!canvasRef.current || !isVisible) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Ensure canvas dimensions match its display size
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    // Animation variables
    let animationFrameId: number;
    const years = ['2023', '2024', '2025'];
    const metrics = [
      { name: 'Leads', values: [45, 75, 95], color: '#8B5CF6' },
      { name: 'Conversões', values: [30, 65, 90], color: '#7A3B96' },
      { name: 'ROI', values: [20, 55, 85], color: '#D946EF' }
    ];
    
    // Chart settings
    const padding = { top: 40, right: 30, bottom: 60, left: 60 };
    const chartWidth = (canvas.width / dpr) - padding.left - padding.right;
    const chartHeight = (canvas.height / dpr) - padding.top - padding.bottom;
    const animationProgress = { value: 0 };
    
    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      
      // Draw background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      
      // Draw glow effect
      const gradient = ctx.createRadialGradient(
        canvas.width / dpr / 2, canvas.height / dpr / 2, 10,
        canvas.width / dpr / 2, canvas.height / dpr / 2, canvas.width / dpr / 2
      );
      gradient.addColorStop(0, 'rgba(114, 0, 255, 0.15)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      
      // Horizontal grid lines
      for (let i = 0; i <= 100; i += 20) {
        const y = padding.top + ((100 - i) / 100) * chartHeight;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(padding.left + chartWidth, y);
        ctx.stroke();
        
        // Y-axis labels
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${i}%`, padding.left - 10, y);
      }
      
      // Draw x-axis
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(padding.left, padding.top + chartHeight);
      ctx.lineTo(padding.left + chartWidth, padding.top + chartHeight);
      ctx.stroke();
      
      // X-axis labels (years)
      years.forEach((year, i) => {
        const x = padding.left + (i / (years.length - 1)) * chartWidth;
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '14px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(year, x, padding.top + chartHeight + 15);
      });
      
      // Chart title
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText('Crescimento de Performance Digital', canvas.width / dpr / 2, 15);
      
      // Draw data lines with animation
      metrics.forEach((metric, metricIndex) => {
        // Calculate points based on animation progress
        const currentProgress = Math.min(1, animationProgress.value * 3 - metricIndex);
        if (currentProgress <= 0) return;
        
        const points = years.map((_, i) => {
          const x = padding.left + (i / (years.length - 1)) * chartWidth;
          const maxValue = metric.values[i];
          const animatedValue = i < years.length - 1 
            ? maxValue 
            : maxValue * Math.min(1, currentProgress);
          const y = padding.top + ((100 - animatedValue) / 100) * chartHeight;
          return { x, y, value: animatedValue };
        });
        
        // Draw data line
        ctx.strokeStyle = metric.color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        points.forEach((point, i) => {
          if (i === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            // Only draw up to the current animation progress
            if (i === years.length - 1 && currentProgress < 1) {
              const prevPoint = points[i - 1];
              const xDiff = point.x - prevPoint.x;
              const yDiff = point.y - prevPoint.y;
              ctx.lineTo(prevPoint.x + xDiff * currentProgress, prevPoint.y + yDiff * currentProgress);
            } else {
              ctx.lineTo(point.x, point.y);
            }
          }
        });
        
        ctx.stroke();
        
        // Draw markers with animated appearance
        points.forEach((point, i) => {
          // Skip last point if animation not complete
          if (i === years.length - 1 && currentProgress < 1) return;
          
          // Marker outer circle
          ctx.beginPath();
          ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
          ctx.fillStyle = metric.color;
          ctx.fill();
          
          // Marker inner circle
          ctx.beginPath();
          ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = 'white';
          ctx.fill();
          
          // Value label
          ctx.fillStyle = 'white';
          ctx.font = 'bold 12px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
          ctx.fillText(`${Math.round(point.value)}%`, point.x, point.y - 10);
        });
      });
      
      // Draw legend
      const legendX = padding.left;
      const legendY = padding.top - 15;
      const legendSpacing = 100;
      
      metrics.forEach((metric, i) => {
        const x = legendX + i * legendSpacing;
        
        // Legend color box
        ctx.fillStyle = metric.color;
        ctx.fillRect(x, legendY, 12, 12);
        
        // Legend text
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(metric.name, x + 18, legendY + 6);
      });
      
      // Update animation progress
      if (animationProgress.value < 1) {
        animationProgress.value += 0.005;
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Add subtle breathing animation when main animation is complete
        setTimeout(() => {
          animationProgress.value = 0.98;
          animationFrameId = requestAnimationFrame(animate);
        }, 5000);
      }
    };
    
    // Start the animation
    animate();
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);
  
  return (
    <section id="sobre" className="py-20 relative contain-paint">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/20 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in content-visibility-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Transformamos sua presença digital em{' '}
              <span className="text-primary-DEFAULT">resultados</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-300 max-w-lg">
              Somos especialistas em marketing digital há 2 anos, focados em gerar resultados previsíveis e duradouros para o seu negócio. Nossa abordagem combina estratégia, criatividade e tecnologia.
            </p>

            <div className="space-y-4">
              {[
                { text: "Equipe especializada e dedicada", icon: <BarChart3 className="w-4 h-4 text-white" /> },
                { text: "Estratégias personalizadas para cada cliente", icon: <LineChart className="w-4 h-4 text-white" /> },
                { text: "Resultados mensuráveis e escaláveis", icon: <TrendingUp className="w-4 h-4 text-white" /> },
                { text: "Atendimento próximo e consultivo", icon: <ArrowUpRight className="w-4 h-4 text-white" /> }
              ].map((item, index) => (
                <div 
                  key={item.text} 
                  className="flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-[#7A3B96]/10 group relative overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                  aria-label={item.text}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7A3B96]/0 to-[#7A3B96]/0 group-hover:from-[#7A3B96]/5 group-hover:to-[#7A3B96]/10 transition-all duration-500 rounded-lg"></div>
                  <div className="bg-gradient-to-r from-[#7A3B96] to-[#8833FF] rounded-full p-1 flex-shrink-0 group-hover:scale-110 transition-transform relative z-10 shadow-lg shadow-[#7A3B96]/20 group-hover:shadow-[#7A3B96]/40 will-change-transform">
                    {item.icon || <Check className="w-4 h-4 text-white" />}
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base group-hover:text-[#7A3B96] transition-colors relative z-10 font-medium">{item.text}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7A3B96] to-[#8833FF] group-hover:w-full transition-all duration-500 will-change-transform"></div>
                </div>
              ))}
            </div>
          </div>

          <div id="chart-section" className="relative animate-fade-in [animation-delay:200ms] glass rounded-2xl p-6 overflow-hidden transform-gpu">
            <div className="aspect-video w-full relative z-20">
              <canvas 
                ref={canvasRef} 
                className="w-full h-full rounded-lg" 
                aria-label="Gráfico de crescimento de performance digital 2023-2025"
                role="img"
              ></canvas>
            </div>
            <div className="absolute inset-0 bg-[#7A3B96]/20 blur-3xl z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
