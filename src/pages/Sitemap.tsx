
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Sitemap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainPages = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "Case Studies", path: "/case-studies" },
    { title: "Testimonials", path: "/testimonials" },
    { title: "About Us", path: "/about" },
    { title: "Careers/Contact", path: "/careers" }
  ];
  
  const services = [
    { title: "Shopify Store Setup", path: "/services#store-setup" },
    { title: "Theme Customization", path: "/services#theme-customization" },
    { title: "Speed Optimization", path: "/services#speed-optimization" },
    { title: "Custom App Development", path: "/services#app-development" },
    { title: "Conversion Rate Optimization", path: "/services#cro" },
    { title: "Shopify Plus Migration", path: "/services#migration" }
  ];
  
  const legal = [
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Terms of Service", path: "/terms-of-service" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <motion.section 
          className="bg-gradient-to-r from-shopify-100 to-shopify-50 py-16 md:py-24 h-[50vh] flex items-center overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative elements */}
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
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-shopify-500 block mb-2">Sitemap</span>
                <span className="block">Find Everything on Our Site</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Use this page to navigate through all the content on our website.
              </p>
            </motion.div>
          </div>
        </motion.section>
        
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div 
                  className="bg-shopify-50 p-8 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-bold mb-4 text-shopify-500">Main Pages</h2>
                  <ul className="space-y-2">
                    {mainPages.map((page, index) => (
                      <li key={index}>
                        <Link 
                          to={page.path} 
                          className="text-gray-700 hover:text-shopify-500 transition-colors flex items-center"
                        >
                          <span className="mr-2">→</span> {page.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div 
                  className="bg-shopify-50 p-8 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-bold mb-4 text-shopify-500">Our Services</h2>
                  <ul className="space-y-2">
                    {services.map((service, index) => (
                      <li key={index}>
                        <Link 
                          to={service.path} 
                          className="text-gray-700 hover:text-shopify-500 transition-colors flex items-center"
                        >
                          <span className="mr-2">→</span> {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div 
                  className="bg-shopify-50 p-8 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-bold mb-4 text-shopify-500">Legal Information</h2>
                  <ul className="space-y-2">
                    {legal.map((page, index) => (
                      <li key={index}>
                        <Link 
                          to={page.path} 
                          className="text-gray-700 hover:text-shopify-500 transition-colors flex items-center"
                        >
                          <span className="mr-2">→</span> {page.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-12 p-8 bg-white border border-gray-200 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl font-bold mb-4">Need Help Finding Something?</h2>
                <p className="text-gray-700 mb-4">
                  If you can't find what you're looking for on our website, please don't hesitate to contact us. Our team is here to help you with any questions or information you need.
                </p>
                <Link 
                  to="/careers" 
                  className="inline-block bg-shopify-500 hover:bg-shopify-600 text-white py-2 px-6 rounded-md transition-colors"
                >
                  Contact Us
                </Link>
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

export default Sitemap;
