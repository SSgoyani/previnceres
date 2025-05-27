import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <motion.section 
          className="bg-gradient-to-r from-shopify-100 to-shopify-50 py-16 md:py-24 h-[40vh] flex items-center overflow-hidden relative"
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
                <span className="text-shopify-500 block mb-2">Terms of Service</span>
                <span className="block">Our Agreement With You</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Please read these terms carefully before engaging with our services.
              </p>
            </motion.div>
          </div>
        </motion.section>
        
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-shopify-900 prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700">
              <p className="text-gray-600 mb-8 text-sm">Last Updated: May 13, 2025</p>
              
              <h2 className="text-2xl md:text-3xl">1. Introduction</h2>
              <p className="mb-6">
                These Terms of Service ("Terms") govern your use of previnceres.com (the "Website") and the services offered by Previnceres ("we," "our," or "us"). By accessing our Website or using our services, you agree to be bound by these Terms.
              </p>
              
              <h2 className="text-2xl md:text-3xl">2. Services</h2>
              <p className="mb-6">
                We provide Shopify development and design services including store setup, theme customization, speed optimization, custom app development, conversion rate optimization, and migration services. The specific services to be provided will be outlined in a separate service agreement.
              </p>
              
              <h2 className="text-2xl md:text-3xl">3. Client Responsibilities</h2>
              <p className="mb-4">
                As a client, you are responsible for:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-shopify-500 font-semibold mr-2">•</span>
                  <div>Providing accurate and timely information required for the completion of services.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-shopify-500 font-semibold mr-2">•</span>
                  <div>Reviewing and approving work at designated project milestones.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-shopify-500 font-semibold mr-2">•</span>
                  <div>Providing necessary access to your Shopify store and other platforms as required for the completion of services.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-shopify-500 font-semibold mr-2">•</span>
                  <div>Ensuring that you have all necessary rights to any content or materials you provide to us.</div>
                </li>
              </ul>
              
              <h2 className="text-2xl md:text-3xl">4. Intellectual Property</h2>
              <p>
                Upon full payment of all invoices, you will own the final deliverables created specifically for your project, except for:
              </p>
              <ul>
                <li>Third-party materials which remain the property of their respective owners.</li>
                <li>Our pre-existing tools, code libraries, or methodologies which remain our property.</li>
                <li>Open-source components which are subject to their respective licenses.</li>
              </ul>
              
              <br/>
              <h2 className="text-2xl md:text-3xl">5. Payment Terms</h2>
              <p>
                Payment terms will be specified in your service agreement. In general:
              </p>
              <ul>
                <li>A non-refundable deposit may be required before work commences.</li>
                <li>Payment milestones may be set throughout the project.</li>
                <li>Final payment is due before the final deliverables are transferred or deployed.</li>
              </ul>
              
              <br/>
              <h2 className="text-2xl md:text-3xl">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul>
                <li>Your use or inability to use our services;</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein;</li>
                <li>Any interruption or cessation of transmission to or from our services;</li>
                <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services.</li>
              </ul>
              
              <br/>
              <h2 className="text-2xl md:text-3xl">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the new Terms on the Website. Your continued use of the Website or our services after such modifications will constitute your acknowledgment of the modified Terms.
              </p>
              
              <br/>
              <h2 className="text-2xl md:text-3xl">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
              </p>
              
              <br/>
              <h2 className="text-2xl md:text-3xl">9. Contact Us</h2>
              <p className="mb-2">
                If you have any questions about these Terms, please contact us at:
              </p>
              <br/>
              <p className="mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-shopify-500">
                Email: <span className="font-semibold">services@previnceres.com</span><br />
                Or visit our <Link to="/contact" className="text-shopify-500 hover:text-shopify-600 underline">contact page</Link>.
              </p>
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

export default TermsOfService;
