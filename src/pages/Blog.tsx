
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Clock, Tag, Search, BookOpen } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '10 Essential Shopify Apps to Boost Conversions',
    excerpt: 'Increase your store\'s conversion rate with these must-have Shopify apps that enhance the customer experience.',
    category: 'conversion-optimization',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    author: 'Alex Thompson',
    date: 'May 05, 2025',
    readTime: '8 min read'
  },
  {
    id: 2,
    title: 'How to Speed Up Your Shopify Store in 5 Steps',
    excerpt: 'Follow these proven techniques to significantly improve your Shopify store\'s loading speed and user experience.',
    category: 'speed-optimization',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    author: 'Jordan Riley',
    date: 'May 01, 2025',
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'Ultimate Guide to Shopify Theme Customization',
    excerpt: 'Learn how to customize your Shopify theme to create a unique brand experience that stands out from competitors.',
    category: 'theme-customization',
    image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    author: 'Mia Zhang',
    date: 'April 28, 2025',
    readTime: '10 min read'
  },
  {
    id: 4,
    title: 'Migrating to Shopify Plus: What You Need to Know',
    excerpt: 'Considering a move to Shopify Plus? This comprehensive guide covers all the benefits and considerations.',
    category: 'shopify-plus',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    author: 'Ethan Williams',
    date: 'April 22, 2025',
    readTime: '9 min read'
  },
  {
    id: 5,
    title: 'Best Practices for Setting Up Your First Shopify Store',
    excerpt: 'Starting your first Shopify store? Follow these best practices to ensure a smooth launch and future success.',
    category: 'store-setup',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    author: 'Alex Thompson',
    date: 'April 15, 2025',
    readTime: '7 min read'
  },
  {
    id: 6,
    title: 'Custom Shopify App Development: When and Why',
    excerpt: 'Discover when building a custom Shopify app makes sense for your business and how to approach the development process.',
    category: 'app-development',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    author: 'Jordan Riley',
    date: 'April 10, 2025',
    readTime: '8 min read'
  }
];

const categories = [
  { value: 'all', label: 'All Topics' },
  { value: 'store-setup', label: 'Store Setup' },
  { value: 'theme-customization', label: 'Theme Customization' },
  { value: 'speed-optimization', label: 'Speed Optimization' },
  { value: 'app-development', label: 'App Development' },
  { value: 'conversion-optimization', label: 'Conversion Optimization' },
  { value: 'shopify-plus', label: 'Shopify Plus' }
];

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    // Filter by category
    const matchesCategory = activeFilter === 'all' || post.category === activeFilter;
    
    // Filter by search query
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-shopify-100 to-shopify-50 py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-shopify-500 block mb-2">
                  Shopify Insights
                </span>
                <span className="block">Latest Tips & Resources</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Discover expert advice, strategies, and success stories to help your Shopify store thrive.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shopify-500 focus:border-transparent"
                />
                <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Categories Filter */}
        <section className="py-6 bg-white border-b">
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
        
        {/* Blog Posts Grid */}
        <section className="py-16 bg-white">
          <div className="container">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <div 
                    key={post.id} 
                    className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md group"
                  >
                    <div className="overflow-hidden h-48">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="bg-shopify-100 text-shopify-700 text-xs px-2 py-1 rounded">
                          {categories.find(cat => cat.value === post.category)?.label || post.category}
                        </span>
                        <span className="text-gray-500 text-xs ml-auto flex items-center">
                          <Clock size={14} className="mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-shopify-500 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">
                          By {post.author} • {post.date}
                        </span>
                        <a 
                          href={`/blog/${post.id}`} 
                          className="flex items-center text-shopify-500 font-medium hover:text-shopify-600"
                        >
                          <BookOpen size={16} className="mr-1" />
                          Read
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-2xl text-gray-500">No articles found matching your criteria.</p>
                <button 
                  onClick={() => {setActiveFilter('all'); setSearchQuery('');}}
                  className="mt-4 text-shopify-500 hover:text-shopify-600"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-shopify-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                Get the latest Shopify tips, trends, and insights delivered straight to your inbox.
              </p>
              
              <form className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shopify-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-shopify-500 hover:bg-shopify-600 text-white px-6 py-3 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
