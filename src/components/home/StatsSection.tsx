
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const stats = [
  { value: '30+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '3.5s', label: 'Average Store Load Time' }
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-shopify-600 to-shopify-500 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full opacity-5"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full opacity-5"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className={cn(
                "text-center p-8 rounded-lg backdrop-blur-sm",
                "bg-white/5 border border-white/10",
                "transform transition-all duration-300 hover:bg-white/10"
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">{stat.value}</h3>
              <div className="w-16 h-1 bg-white/60 mx-auto mb-4"></div>
              <p className="text-xl font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
