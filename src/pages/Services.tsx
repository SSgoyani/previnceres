
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    id: 'store-setup',
    title: 'Shopify Store Setup',
    description: 'End-to-end Shopify store setup by experts who understand eCommerce best practices.',
    features: [
      'Brand identity integration',
      'Product catalog setup',
      'Payment gateway configuration',
      'Shipping & tax setup',
      'Store launch preparation'
    ]
  },
  {
    id: 'theme-customization',
    title: 'Theme Customization',
    description: 'Tailor-made designs that reflect your brand identity and engage your customers.',
    features: [
      'Custom homepage layouts',
      'Product page optimization',
      'Mobile-responsive design',
      'Custom sections and features',
      'Brand consistency across all pages'
    ]
  },
  {
    id: 'speed-optimization',
    title: 'Speed Optimization',
    description: 'Lightning-fast stores that provide an exceptional shopping experience and boost SEO.',
    features: [
      'Image optimization',
      'Code minification',
      'Third-party script management',
      'Browser caching setup',
      'Core Web Vitals improvement'
    ]
  },
  {
    id: 'app-development',
    title: 'Custom App Development',
    description: 'Custom solutions built specifically for your unique business requirements.',
    features: [
      'Private app development',
      'Integration with external systems',
      'Custom functionality',
      'Process automation',
      'Performance optimization'
    ]
  },
  // {
  //   id: 'cro',
  //   title: 'Conversion Rate Optimization',
  //   description: 'Strategic improvements to maximize your store\'s conversion rate and revenue.',
  //   features: [
  //     'Data-driven analysis',
  //     'A/B testing implementation',
  //     'Checkout optimization',
  //     'User journey refinement',
  //     'Ongoing performance monitoring'
  //   ]
  // },
  {
    id: 'migration',
    title: 'Shopify Plus Migration',
    description: 'Seamless migration to Shopify Plus for growing businesses ready to scale.',
    features: [
      'Data migration',
      'Custom checkout experiences',
      'Workflow automation',
      'Multi-store architecture',
      'Script editor customizations'
    ]
  }
];

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsLoaded(true);
    // Make sure the page starts at the top
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - increased height to 50vh consistent with other pages */}
        <section className="bg-gradient-to-r from-shopify-100 to-shopify-50 h-[50vh] flex items-center overflow-hidden relative">
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 10 }).map((_, i) => (
              <div 
                key={i}
                className="absolute bg-shopify-500 rounded-full opacity-10"
                style={{
                  width: `${Math.random() * 60 + 20}px`,
                  height: `${Math.random() * 60 + 20}px`,
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
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-shopify-500 block mb-2">
                  Expert Shopify Services
                </span>
                <span className="block">Tailored to Your Business</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our comprehensive range of Shopify services designed to help your eCommerce business grow and succeed.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Services List */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {servicesList.map((service) => (
                <motion.div 
                  key={service.id} 
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="service-card p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group bg-white border border-gray-100 relative overflow-hidden"
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  {/* Decorative background element */}
                  <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-shopify-50 opacity-50 transition-all duration-500 group-hover:scale-150"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-1 bg-shopify-500 mr-4"></div>
                      <h3 className="text-2xl font-bold group-hover:text-shopify-500 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-8 text-lg">
                      {service.description}
                    </p>
                    
                    {/* Always visible features list with improved spacing and bold titles */}
                    <ul className="space-y-5 mb-8">
                      {service.features.map((feature, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-center"
                          initial={{ opacity: 0.8, x: -5 }}
                          animate={{ 
                            opacity: 1, 
                            x: 0,
                            transition: { duration: 0.3, delay: index * 0.05 }
                          }}
                        >
                          <div className="bg-shopify-100 rounded-full p-1.5 mr-4">
                            <Check size={16} className="text-shopify-500" />
                          </div>
                          <span className="text-gray-700"><span className="font-bold">{feature.split(':')[0]}</span>{feature.includes(':') ? `: ${feature.split(':')[1]}` : ''}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* Removed Learn More button as requested */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-shopify-500 to-shopify-700 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Elevate Your Shopify Store?
                </h2>
                
                <p className="text-xl text-white/90 mb-10">
                  Let's discuss how our services can help your business grow.
                </p>
                
                <Button 
                  asChild
                  className="bg-white text-shopify-500 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg px-8 py-6 text-lg"
                >
                  <Link to="/careers">Get in Touch</Link>
                </Button>
                
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div 
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                    whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <p>Client Satisfaction</p>
                  </motion.div>
                  <motion.div 
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                    whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-4xl font-bold mb-2">30+</div>
                    <p>Projects Completed</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Animation keyframes */}
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
