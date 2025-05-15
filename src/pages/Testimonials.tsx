
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonialsList = [
  {
    id: 1,
    quote: "The team helped us revamp our entire store with custom theme implementation. We've seen impressive improvements in page speed and user engagement since the redesign.",
    author: "Toysikart",
    position: "Theme Customization and PageSpeed",
    rating: 5,
    category: 'theme-customization'
  },
  {
    id: 2,
    quote: "Excellent service setting up our Shopify store from scratch. The attention to detail and customer-focused approach made the entire process smooth and efficient.",
    author: "KKTrendz",
    position: "Store Setup",
    rating: 5,
    category: 'store-setup'
  },
  {
    id: 3,
    quote: "Very responsive team that helped us resolve critical bugs in our buy now and add to cart functionality. The fixes were implemented quickly and our conversion rate improved immediately.",
    author: "Elezio",
    position: "Bug Resolution",
    rating: 5,
    category: 'app-development'
  },
  {
    id: 4,
    quote: "The custom app they built for our inventory management has saved us countless hours and improved accuracy. A game-changer for our operations.",
    author: "David Chen",
    position: "Operations Manager",
    rating: 5,
    category: 'app-development'
  },
  {
    id: 5,
    quote: "Our conversion rate increased by 28% after implementing their recommended optimizations. Data-driven decisions that really paid off.",
    author: "Amanda Rodriguez",
    position: "Digital Director",
    rating: 4,
    category: 'cro'
  },
  {
    id: 6,
    quote: "The migration to Shopify Plus was seamless. They handled everything from data transfer to custom checkout implementation without any downtime.",
    author: "Robert Miller",
    position: "eCommerce Manager",
    rating: 5,
    category: 'migration'
  }
];

const categories = [
  { value: 'all', label: 'All Testimonials' },
  { value: 'store-setup', label: 'Store Setup' },
  { value: 'theme-customization', label: 'Theme Customization' },
  { value: 'speed-optimization', label: 'Speed Optimization' },
  { value: 'app-development', label: 'App Development' },
  { value: 'cro', label: 'Conversion Optimization' },
  { value: 'migration', label: 'Shopify Plus Migration' }
];

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonialsList 
    : testimonialsList.filter(testimonial => testimonial.category === activeFilter);

  // Fixed the error here - removed the second argument
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - increased height to match other pages */}
        <motion.section 
          className="bg-gradient-to-r from-shopify-100 to-shopify-50 py-16 md:py-24 h-[50vh] flex items-center overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative elements like Services page */}
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
                <span className="text-shopify-500 block mb-2">
                  What Our Clients Say
                </span>
                <span className="block">Success Stories From Our Clients</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Don't just take our word for it — hear from the businesses we've helped succeed in the competitive world of eCommerce.
              </p>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveFilter(category.value)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    activeFilter === category.value
                      ? 'bg-shopify-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Grid */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial) => (
                <motion.div 
                  key={testimonial.id} 
                  className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-center mb-6">
                    <Quote size={36} className="text-shopify-200 opacity-50 group-hover:text-shopify-300 transition-colors" />
                  </div>
                  
                  <p className="text-gray-700 italic mb-6 text-center">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={`${
                          i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill={i < testimonial.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <h4 className="font-bold text-lg">{testimonial.author}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-shopify-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Our Success Stories?
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                Let's work together to create an exceptional Shopify experience for your business.
              </p>
              
              <a 
                href="/careers" 
                className="inline-block bg-shopify-500 hover:bg-shopify-600 text-white py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project Today
              </a>
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

export default Testimonials;
