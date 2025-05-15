import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
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
                <span className="text-shopify-500 block mb-2">Privacy Policy</span>
                <span className="block">How We Protect Your Information</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                We are committed to protecting your privacy and providing transparency about our practices.
              </p>
            </motion.div>
          </div>
        </motion.section>
        
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-shopify-900 prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700">
              <p className="text-gray-600 mb-8 text-sm">Last Updated: May 13, 2025</p>
              
              <h2 className="text-2xl md:text-3xl">Introduction</h2>
              <p className="mb-6">
                Previnceres ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
              
              <h2 className="text-2xl md:text-3xl">Information We Collect</h2>
              <p className="mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-shopify-500 font-semibold mr-2">•</span>
                  <div><span className="font-semibold">Identity Data</span> includes first name, last name, username or similar identifier.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-shopify-500 font-semibold mr-2">•</span>
                  <div><span className="font-semibold">Contact Data</span> includes billing address, delivery address, email address and telephone numbers.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-shopify-500 font-semibold mr-2">•</span>
                  <div><span className="font-semibold">Technical Data</span> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-shopify-500 font-semibold mr-2">•</span>
                  <div><span className="font-semibold">Usage Data</span> includes information about how you use our website, products and services.</div>
                </li>
              </ul>
              
              <h2 className="text-2xl md:text-3xl">How We Use Your Information</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul>
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
              
              <h2 className="text-2xl md:text-3xl">Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
              
              <h2 className="text-2xl md:text-3xl">Data Retention</h2>
              <p>
                We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
              </p>
              
              <h2 className="text-2xl md:text-3xl">Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul>
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
              
              <h2 className="text-2xl md:text-3xl">Changes to This Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "last updated" date at the top of this privacy policy.
              </p>
              
              <h2 className="text-2xl md:text-3xl">Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p className="mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-shopify-500">
                Email: <span className="font-semibold">services@previnceres.com</span><br />
                Or visit our <a href="/contact" className="text-shopify-500 hover:text-shopify-600 underline">contact page</a>.
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

export default PrivacyPolicy;
