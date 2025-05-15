
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsLoaded(true);
  }, []);

  const scrollToContent = () => {
    const servicesSection = document.querySelector('#services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-shopify-100 to-shopify-50 h-screen flex items-center relative overflow-hidden">
      {/* Decorative particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-shopify-500 rounded-full opacity-10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 hero-text">
            <span 
              className={`block transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
              style={{ transitionDelay: '0.2s' }}
            >
              Build Smarter.
            </span>
            <span 
              className={`block transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
              style={{ transitionDelay: '0.4s' }}
            >
              Sell Better.
            </span>
            <span 
              className={`text-shopify-500 block transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
              style={{ transitionDelay: '0.6s' }}
            >
              Shopify Solutions Tailored for You.
            </span>
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.8s' }}
          >
            We help businesses create stunning, high-converting Shopify stores that drive revenue and create exceptional customer experiences.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '1s' }}
          >
            <Button asChild className="bg-shopify-500 hover:bg-shopify-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg text-white font-medium rounded-md px-8 py-6 text-lg">
              <Link to="/careers" className="flex items-center">
                Request a Quote <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="border-2 border-shopify-500 text-shopify-500 hover:bg-shopify-50 transform transition-transform duration-300 hover:scale-105 font-medium rounded-md px-8 py-6 text-lg">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Removed floating arrow button as requested */}
      
      <style>
        {`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
        }
        `}
      </style>
    </section>
  );
};

export default Hero;
