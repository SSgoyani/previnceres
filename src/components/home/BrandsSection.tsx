
import { useEffect, useState } from 'react';

const BrandsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('brands-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Brand logos (you can replace these with actual brand SVGs/images)
  const brands = [
    { name: 'Brand 1', width: 'w-28', logo: 'https://cdn.shopify.com/s/files/1/0600/7048/5149/files/brands-logo-01.svg' },
    { name: 'Brand 2', width: 'w-32', logo: 'https://cdn.shopify.com/s/files/1/0600/7048/5149/files/brands-logo-02.svg' },
    { name: 'Brand 3', width: 'w-24', logo: 'https://cdn.shopify.com/s/files/1/0600/7048/5149/files/brands-logo-03.svg' },
    { name: 'Brand 4', width: 'w-28', logo: 'https://cdn.shopify.com/s/files/1/0600/7048/5149/files/brands-logo-04.svg' },
    { name: 'Brand 5', width: 'w-20', logo: 'https://cdn.shopify.com/s/files/1/0600/7048/5149/files/brands-logo-05.svg' }
  ];

  return (
    <section id="brands-section" className="py-16 bg-white">
      <div className="container">
    
        
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className={`h-12 ${brand.width} bg-gray-200 rounded-md opacity-70 hover:opacity-100 transition-all duration-500 flex items-center justify-center`}
              style={{ 
                opacity: isVisible ? 0.7 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
              }}
            >
              {/* Replace with actual brand logos */}
              <div className="font-bold text-gray-400 text-sm">{brand.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
