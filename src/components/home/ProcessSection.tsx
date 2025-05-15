
import { CheckCircle, Code, Rocket, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: CheckCircle,
    title: 'Discovery',
    description: 'We learn about your business, goals, and requirements to create a tailored solution.'
  },
  {
    icon: Code,
    title: 'Design & Development',
    description: 'Our team crafts a custom Shopify experience that aligns with your brand and objectives.'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'We thoroughly test and deploy your store, ensuring everything runs smoothly.'
  },
  {
    icon: Clock,
    title: 'Post-launch Support',
    description: 'Our relationship continues with ongoing support and optimization services.'
  }
];

const ProcessSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic approach to creating successful Shopify stores.
          </p>
          <div className="w-20 h-1 bg-shopify-500 mx-auto mt-6"></div>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={item} className="mb-16 last:mb-0">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="bg-shopify-500 w-16 h-16 rounded-full flex items-center justify-center text-white">
                      <step.icon size={32} />
                    </div>
                    
                    {index < steps.length - 1 && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 bg-shopify-100 h-16 mt-4"></div>
                    )}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-shopify-50 rounded-lg p-6 relative">
                    {/* Arrow pointing to the step */}
                    <div className="absolute top-4 -left-2 w-4 h-4 bg-shopify-50 transform rotate-45"></div>
                    
                    <h3 className="text-2xl font-bold mb-3 flex items-center">
                      <span className="text-shopify-500 mr-2">{index + 1}.</span> {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                  
                  {index === steps.length - 1 && (
                    <motion.div 
                      className="mt-6 ml-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <a 
                        href="/contact" 
                        className="inline-flex items-center text-shopify-500 font-medium hover:text-shopify-600"
                      >
                        Ready to get started?
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
