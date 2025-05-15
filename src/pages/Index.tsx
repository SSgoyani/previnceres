
import Hero from '@/components/home/Hero';
import ServicesHighlight from '@/components/home/ServicesHighlight';
import StatsSection from '@/components/home/StatsSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialPreview from '@/components/home/TestimonialPreview';
import ProcessSection from '@/components/home/ProcessSection';
import CTASection from '@/components/home/CTASection';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();

  // Scroll to top when component mounts or location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <div id="services-section">
          <ServicesHighlight />
        </div>
        <StatsSection />
        <WhyChooseUs />
        <TestimonialPreview />
        <ProcessSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
