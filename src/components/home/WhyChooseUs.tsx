
import { Shield, Zap, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: Shield,
    title: 'Expert Team',
    description: 'Our team consists of certified Shopify experts with years of experience in eCommerce.'
  },
  {
    icon: Zap,
    title: 'Performance Focused',
    description: 'We prioritize speed and conversion optimization to maximize your store\'s potential.'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Ongoing support and maintenance to keep your store running smoothly and securely.'
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: 'Our work has helped businesses increase conversions and revenue consistently.'
  }
];

const WhyChooseUs = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-shopify-100 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-shopify-100 rounded-full opacity-30 transform translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering exceptional eCommerce experiences that drive results.
          </p>
          <div className="w-20 h-1 bg-shopify-500 mx-auto mt-6"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-shopify-500"
            >
              <div className="relative mb-6">
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-shopify-100 rounded-lg transform rotate-12"></div>
                <div className="relative z-10 bg-white w-16 h-16 rounded-lg shadow-md flex items-center justify-center">
                  <feature.icon className="text-shopify-500" size={32} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link 
            to="/about"
            className="inline-flex items-center text-shopify-500 font-bold hover:text-shopify-600 transition-all duration-300"
          >
            Learn more about our team
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
