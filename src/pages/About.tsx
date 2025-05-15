
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Trophy, Heart, Target, Check, Users, Briefcase, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsLoaded(true);
    // Make sure page starts at the top
    window.scrollTo(0, 0);
  }, []);
  
  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      bio: "With over 15 years in eCommerce, Alex has helped hundreds of businesses scale their online presence through Shopify."
    },
    {
      name: "Jordan Riley",
      role: "Lead Developer",
      image: "https://randomuser.me/api/portraits/women/34.jpg",
      bio: "A certified Shopify Expert with expertise in custom theme development and app integration."
    },
    {
      name: "Mia Zhang",
      role: "UX Design Lead",
      image: "https://randomuser.me/api/portraits/women/58.jpg",
      bio: "Passionate about creating intuitive shopping experiences that convert visitors into loyal customers."
    },
    {
      name: "Ethan Williams",
      role: "CTO",
      image: "https://randomuser.me/api/portraits/men/19.jpg",
      bio: "Expert in eCommerce technologies with a focus on performance optimization and security."
    }
  ];

  const values = [
    {
      icon: Trophy,
      title: "Excellence",
      description: "We're committed to delivering exceptional quality in every project we undertake."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with transparency and honesty in all client relationships."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on metrics that matter and delivering tangible business outcomes."
    }
  ];

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with animation like homepage - updated height to 50vh */}
        <section className="bg-gradient-to-r from-shopify-100 to-shopify-50 py-16 md:py-24 h-[50vh] flex items-center overflow-hidden relative">
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
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-shopify-500 block mb-2">
                  Our Mission & Story
                </span>
                <span className="block">The Team Behind Your Success</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We're passionate Shopify experts dedicated to helping businesses succeed in the digital marketplace.
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Updated Mission & Vision Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Mission Card */}
              <motion.div 
                className="bg-white p-10 rounded-xl shadow-xl overflow-hidden relative border-t-4 border-shopify-500"
                variants={fadeInUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-shopify-50 rounded-full -mr-20 -mt-20 z-0"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-shopify-50 mb-6">
                    <Globe size={32} className="text-shopify-500" />
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    To empower businesses with exceptional Shopify solutions that drive growth, enhance customer experience, and maximize online potential.
                  </p>
                  
                  <p className="text-gray-700 mb-8">
                    We combine technical expertise with creative design to deliver stores that not only look beautiful but perform exceptionally well, helping our clients achieve their business goals.
                  </p>
                  
                  <div className="bg-shopify-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-4">Our Approach</h3>
                    <ul className="space-y-3">
                      {['Customer-focused design that drives conversions', 
                        'Performance optimization for faster loading times', 
                        'Strategic approach to eCommerce growth'].map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <div className="mt-1 mr-3">
                            <Check size={18} className="text-shopify-500" />
                          </div>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              {/* Vision Card */}
              <motion.div 
                className="bg-gradient-to-br from-shopify-500 to-shopify-600 text-white rounded-xl shadow-xl overflow-hidden relative"
                variants={fadeInUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="p-10 h-full flex flex-col relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                    <Briefcase size={32} className="text-white" />
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                  
                  <p className="text-white/90 text-lg leading-relaxed mb-8">
                    To be recognized as the premier Shopify development agency that consistently delivers exceptional eCommerce experiences through innovation, expertise, and dedication.
                  </p>
                  
                  <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm mb-8">
                    <h3 className="font-bold text-xl mb-4">Why Choose Us?</h3>
                    <ul className="space-y-3">
                      {['100% client satisfaction rate', 
                        'Tailored solutions for each unique business', 
                        'Ongoing support and strategic guidance'].map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 + 0.3, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <div className="mr-3 mt-1">
                            <Check size={18} className="text-white" />
                          </div>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <motion.div 
                      className="w-20 h-1 bg-white/50 mb-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: 80 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    
                    <motion.p 
                      className="text-xl italic font-light"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      "We don't just build stores. We build businesses."
                    </motion.p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/5 -mb-20 -ml-20"></div>
                <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-white/5"></div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  These principles guide everything we do and help us deliver exceptional results for our clients.
                </p>
                <div className="w-20 h-1 bg-shopify-500 mx-auto mt-6"></div>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { type: "spring", stiffness: 400 } }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-shopify-100 mb-6">
                    <value.icon size={32} className="text-shopify-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-shopify-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Work With Our Team?
                </h2>
                
                <p className="text-lg text-gray-700 mb-8">
                  Let's create a Shopify store that helps your business grow.
                </p>
                
                <Link 
                  to="/careers" 
                  className="inline-block bg-shopify-500 hover:bg-shopify-600 text-white py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
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

export default About;
