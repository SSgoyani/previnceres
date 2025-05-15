
import { Code, Rocket, Store, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    icon: Store,
    title: 'Theme Customization',
    description: 'Tailor-made designs that reflect your brand identity and engage your customers.',
    link: '/services#theme-customization'
  },
  {
    icon: Rocket,
    title: 'Speed Optimization',
    description: 'Lightning-fast stores that provide an exceptional shopping experience and boost SEO.',
    link: '/services#speed-optimization'
  },
  {
    icon: Store,
    title: 'Store Setup',
    description: 'End-to-end Shopify store setup by experts who understand eCommerce best practices.',
    link: '/services#store-setup'
  },
  {
    icon: Code,
    title: 'App Integration',
    description: 'Seamlessly connect your favorite tools and apps to enhance your Shopify store.',
    link: '/services#app-development'
  }
];

const ServicesHighlight = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  return (
    <section id="services-section" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-1/3 h-1 bg-gradient-to-r from-shopify-100 to-shopify-50"></div>
      <div className="absolute bottom-20 right-0 w-1/3 h-1 bg-gradient-to-r from-shopify-50 to-shopify-100"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive Shopify solutions to help your business thrive online.
          </p>
          <div className="w-20 h-1 bg-shopify-500 mx-auto mt-6"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                backgroundColor: "#f9fafb" 
              }}
              className="service-card bg-white rounded-lg border border-gray-200 transition-all duration-300"
            >
              <Link to={service.link} className="block p-8 rounded-lg h-full relative overflow-hidden flex flex-col">
                {/* Gradient background that slides in on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-shopify-50 via-white to-transparent z-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                
                {/* Icon container */}
                <div className="relative z-10 mb-6">
                  <motion.div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 bg-shopify-50 transition-colors"
                    whileHover={{ scale: 1.1, backgroundColor: "#ebf5ff" }}
                  >
                    <service.icon size={28} className="text-shopify-500" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <motion.div 
                    className="flex items-center text-shopify-500 font-medium mt-auto"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Learn More
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight size={16} className="ml-1" />
                    </motion.div>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.03, y: -3 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link 
              to="/services"
              className="inline-flex items-center bg-shopify-500 text-white py-3 px-8 rounded-md hover:bg-shopify-600 transition-all duration-300"
            >
              View All Services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
