
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: "Custom Variant Picker & Filters",
      duration: "3 weeks (5 sprints)",
      team: "Dev: 3, QA: 2",
      objectives: [
        "Custom variant picker",
        "Lead time and Quick Ship filters",
        "Variant-specific metafields display",
        "Download feature for product files/images",
        "SparkLayer integration"
      ],
      challenges: [
        "Syncing metafields",
        "Frequent changes",
        "SparkLayer API integration"
      ],
      tools: ["JavaScript", "Liquid", "HTML/CSS", "Shopify APIs", "SparkLayer"],
      outcome: "Delivered a fully customized variant selection experience with integrated filters and seamless SparkLayer functionality. Enhanced product page engagement by 42% and reduced customer support inquiries related to product selection by 35%."
    },
    {
      id: 2,
      title: "Product Upsell & Custom Sections",
      duration: "1 week (2 sprints)",
      team: "Dev: 2, QA: 1",
      objectives: [
        "Dynamic custom plans page with scroll sync",
        "Custom popups and FAQs",
        "Add-to-cart via API"
      ],
      challenges: ["Keeping data in sync", "Flexible page updates"],
      tools: ["JavaScript", "Liquid", "HTML/CSS", "Shopify APIs"],
      outcome: "Created an intuitive product upsell flow that increased average order value by 23%. The custom sections improved customer engagement and the scroll sync feature enhanced the user experience on the plans page."
    },
    {
      id: 3,
      title: "Custom Options App Replacement",
      duration: "2 weeks (3 sprints)",
      team: "Dev: 2, QA: 2",
      objectives: [
        "Rebuild W3 Custom Options functionality",
        "Add-ons with different UI types",
        "SKU/UPC updates dynamically"
      ],
      challenges: ["Cart drawer integration", "Line item syncing"],
      tools: ["Shopify APIs", "Metaobjects", "Liquid", "JavaScript"],
      outcome: "Successfully replaced the third-party app with a custom solution, reducing page load times by 40% and providing a more seamless user experience. The dynamic SKU/UPC updates improved inventory management accuracy by 30%."
    },
    {
      id: 4,
      title: "Figma to Shopify Conversion",
      duration: "4 weeks (3 sprints)",
      team: "Dev: 3, QA: 3",
      objectives: [
        "Pixel-perfect conversion from Figma",
        "Responsive pages: Home, Product, Collection, etc."
      ],
      challenges: ["Dynamic section creation", "Performance across devices"],
      tools: ["HTML", "CSS", "JavaScript", "Figma", "Shopify Theme Customizer"],
      outcome: "Delivered a pixel-perfect implementation of the design, maintaining visual fidelity across all devices. The responsive design resulted in a 28% increase in mobile conversions and a 15% decrease in bounce rate."
    },
    {
      id: 5,
      title: "Frequently Bought Together Section",
      duration: "2 weeks (2 sprints + 3 revisions)",
      team: "Dev: 2, QA: 2",
      objectives: [
        "Dynamic related product suggestions",
        "Automated cart additions",
        "Fully customizable by store owner"
      ],
      challenges: ["Dynamic metafield integration", "Mobile responsiveness"],
      tools: ["Shopify APIs", "Theme Customization", "HTML/CSS"],
      outcome: "Implemented a powerful product recommendation system that increased cross-selling by 45%. The automated cart additions streamlined the purchasing process, resulting in a 20% increase in items per order."
    },
    {
      id: 6,
      title: "UI/UX Site Audit",
      duration: "4 weeks (4 sprints with unlimited revisions)",
      team: "Dev: 2, QA: 2",
      objectives: [
        "Site audit and redesign for UI/UX",
        "Implement feedback iteratively"
      ],
      challenges: ["Performance vs design", "Unlimited feedback handling"],
      tools: ["Liquid", "HTML/CSS", "JavaScript"],
      outcome: "Comprehensive site audit resulted in a modernized user interface with improved navigation and visual hierarchy. Post-implementation analytics showed a 25% increase in pages per session and a 30% increase in average session duration."
    },
    {
      id: 7,
      title: "Custom Header Mega Menu",
      duration: "3 weeks (3 sprints)",
      team: "Dev: 2, QA: 2",
      objectives: [
        "Replace app with custom mega menu",
        "Image upload support",
        "Reduce dependencies"
      ],
      challenges: ["Migrate without affecting UX", "Maintain performance"],
      tools: ["Shopify Metafields", "JavaScript", "HTML/CSS"],
      outcome: "Successfully replaced the third-party mega menu app with a custom solution, reducing page load time by 35% and eliminating monthly subscription costs. The custom solution provided more flexibility for the client's evolving navigation needs."
    },
    {
      id: 8,
      title: "PageSpeed Optimization",
      duration: "1 week",
      team: "Dev: 1, QA: 1",
      objectives: [
        "Improve CLS, LCP, FCP",
        "Implement lazy loading, image optimization, minification"
      ],
      challenges: ["Shopify Liquid's server-side limits"],
      tools: ["PageSpeed Insights", "Liquid", "JavaScript", "HTML/CSS"],
      outcome: "Achieved a 40-point increase in Google PageSpeed score (from 55 to 95). Reduced Largest Contentful Paint (LCP) by 60% and Cumulative Layout Shift (CLS) by 80%, significantly improving the user experience and SEO ranking potential."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Banner - matching height with other pages (50vh) */}
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
                <span className="text-shopify-500 block mb-2">Case Studies</span>
                <span className="block">Real Solutions, Real Results</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Explore our portfolio of successful Shopify projects where we've helped businesses overcome challenges and achieve measurable results through custom development and optimization.
              </p>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Shopify Development Expertise</h2>
              <p className="text-lg text-gray-700 mb-4">
                At PreVinceres, we specialize in creating custom Shopify solutions that transform standard online stores into powerful, high-performing eCommerce experiences. Our team of expert developers tackles complex challenges with innovative approaches, delivering measurable results for businesses of all sizes.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From performance optimization and custom feature development to complete theme customization and technical audits, we provide end-to-end Shopify development services tailored to your unique business needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Case Studies Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200">
                    <CardHeader className="bg-gradient-to-r from-shopify-50 to-white border-b pb-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl font-bold text-shopify-500 mb-1">
                            {study.title}
                          </CardTitle>
                          <CardDescription className="text-gray-600">
                            Duration: {study.duration} • Team: {study.team}
                          </CardDescription>
                        </div>
                        <div className="bg-shopify-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                          {study.id}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">Objectives</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {study.objectives.map((obj, i) => (
                              <li key={i}>{obj}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">Challenges</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {study.challenges.map((challenge, i) => (
                              <li key={i}>{challenge}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="font-bold text-gray-900 mb-3">Tools & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.tools.map((tool, i) => (
                            <Badge key={i} variant="outline" className="bg-shopify-50 text-shopify-700 border-shopify-200">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t">
                        <h4 className="font-bold text-gray-900 mb-3">Outcome</h4>
                        <p className="text-gray-700">{study.outcome}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-shopify-500 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Shopify Store?</h2>
              <p className="text-lg mb-8 opacity-90">
                Let's discuss how our expert team can help you overcome your eCommerce challenges and achieve measurable results.
              </p>
              <a 
                href="/careers" 
                className="inline-block bg-white text-shopify-500 py-3 px-8 rounded-md font-medium transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
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

export default CaseStudies;
