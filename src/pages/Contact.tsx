
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
});

const [isSubmitting, setIsSubmitting] = useState(false);
const [result, setResult] = useState('');

// Scroll to top when component mounts
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setResult('Sending...');

  const web3FormData = new FormData();
  web3FormData.append('access_key', 'eba07d3e-3519-4a74-bc35-c4e00a88ff45');
  web3FormData.append('name', formData.name);
  web3FormData.append('email', formData.email);
  web3FormData.append('company', formData.company);
  web3FormData.append('subject', formData.subject);
  web3FormData.append('message', formData.message);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: web3FormData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form submitted successfully.');
      toast.success('Thank you for your message! We will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
    } else {
      console.error('Error:', data);
      setResult(data.message);
    }
  } catch (error) {
    console.error('Submission failed:', error);
    setResult('Something went wrong. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
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
                <span className="text-shopify-500 block mb-2">
                  Contact Us
                </span>
                <span className="block">Let's Start a Conversation</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
              </p>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Contact Information Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Contact Details */}
              <div className="lg:col-span-4">
                <motion.div 
                  className="bg-shopify-50 p-8 rounded-xl h-full flex flex-col"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-lg mr-4 shadow-sm">
                        <MapPin className="text-shopify-500" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Our Location</h3>
                        <p className="text-gray-600">Bengaluru, Karnataka, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-lg mr-4 shadow-sm">
                        <Mail className="text-shopify-500" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                        <a href="mailto:services@previnceres.com" className="text-gray-600 hover:text-shopify-500 transition-colors">services@previnceres.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white p-3 rounded-lg mr-4 shadow-sm">
                        <Clock className="text-shopify-500" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                        <p className="text-gray-600">Monday to Friday:<br/><b>10:00 AM - 7:00 PM IST</b></p><br/>
                        <p className="text-gray-600">Saturday & Sunday:<br/><b>Closed</b></p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-8">
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your project or inquiry..."
                        required
                        className="w-full min-h-[150px]"
                      />
                    </div>
                    
                    <div>
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-shopify-500 hover:bg-shopify-600 text-white px-8 py-3 rounded-md transition-all duration-300 w-full md:w-auto"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        {/* <section className="py-16 bg-shopify-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Find Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're based in Bengaluru, Karnataka, India. Feel free to reach out to us!
              </p>
            </div>
            
            <motion.div 
              className="mx-auto max-w-5xl rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://maps.googleapis.com/maps/api/staticmap?center=Bengaluru,Karnataka,India&zoom=12&size=1200x500&maptype=roadmap&markers=color:red%7CBengaluru,Karnataka,India&key=AIzaSyAF7udKVz0I2cCnUwxGPcQ0X81sLEUKuKw" 
                alt="Map of Bengaluru, Karnataka, India" 
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </section> */}
        
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

export default Contact;
