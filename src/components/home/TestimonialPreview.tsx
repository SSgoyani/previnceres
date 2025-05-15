
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The team helped us revamp our entire store with custom theme implementation. We've seen impressive improvements in page speed and user engagement since the redesign.",
    author: "Toysikart",
    position: "Theme Customization and PageSpeed"
  },
  {
    quote: "Excellent service setting up our Shopify store from scratch. The attention to detail and customer-focused approach made the entire process smooth and efficient.",
    author: "KKTrendz",
    position: "Store Setup"
  }
];

const TestimonialPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-shopify-50 relative">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-shopify-200">
        <Quote size={120} className="opacity-20" />
      </div>
      <div className="absolute bottom-10 right-10 text-shopify-200 transform rotate-180">
        <Quote size={120} className="opacity-20" />
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't take our word for it – hear from some of our satisfied clients.
          </p>
          <div className="w-20 h-1 bg-shopify-500 mx-auto mt-6"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg relative"
              initial={{ opacity: 0, y: 30, rotateY: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            >
              <div className="absolute top-8 left-8 text-shopify-300">
                <Quote size={40} />
              </div>
              
              <p className="text-lg italic text-gray-700 mb-6 pt-10 pl-8">{testimonial.quote}</p>
              
              <div className="flex items-center border-t border-gray-100 pt-6">
                <div>
                  <h4 className="font-bold text-lg">{testimonial.author}</h4>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button asChild variant="outline" className="border-2 border-shopify-500 hover:bg-shopify-50 text-shopify-500 px-8 py-3 rounded-md transition-all duration-300 hover:shadow-md">
            <Link to="/testimonials" className="flex items-center">
              View All Testimonials <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialPreview;
