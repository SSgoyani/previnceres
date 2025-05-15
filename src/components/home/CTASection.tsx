
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });
    
    const section = document.getElementById('cta-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  return (
    <section id="cta-section" className="py-24 bg-shopify-500 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white opacity-10 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white opacity-5 transform -translate-x-1/3 translate-y-1/3"></div>
      
      {/* Abstract lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute h-px bg-white"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`, 
              width: `${Math.random() * 300 + 100}px`,
              transform: `rotate(${Math.random() * 360}deg)` 
            }}
          ></div>
        ))}
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to Transform Your Shopify Store?
          </motion.h2>
          
          <motion.p 
            className="text-xl opacity-90 mb-10"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's create a high-converting Shopify experience that will help your business grow.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild className="bg-white text-shopify-500 hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-lg px-8 py-6 text-lg">
              <Link to="/contact" className="flex items-center">
                Let's Talk <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-xl font-medium mb-6">Our Simple Process</h3>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-full border-2 border-white/60 flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <span className="text-lg">Discovery Call</span>
              </div>
              
              <div className="hidden md:block w-20 h-0.5 bg-white/30"></div>
              
              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-full border-2 border-white/60 flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <span className="text-lg">Custom Proposal</span>
              </div>
              
              <div className="hidden md:block w-20 h-0.5 bg-white/30"></div>
              
              <div className="flex flex-col items-center">
                <div className="h-14 w-14 rounded-full border-2 border-white/60 flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <span className="text-lg">Start Project</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
