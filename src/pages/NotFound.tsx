
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-8xl font-bold text-shopify-500 mb-4 animate-bounce">404</h1>
            <h2 className="text-3xl font-bold mb-6">Oops! This page doesn't exist.</h2>
            <p className="text-xl text-gray-600 mb-8">
              The page you're looking for might have been removed, had its name changed,
              or is temporarily unavailable.
            </p>
            
            <div className="mb-8">
              <div className="max-w-md mx-auto flex">
                <input
                  type="text"
                  placeholder="Search for content..."
                  className="flex-grow px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-shopify-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-shopify-500 hover:bg-shopify-600 text-white px-6 py-3 rounded-r-md transition-colors"
                >
                  <Search size={20} />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/" 
                className="bg-shopify-500 hover:bg-shopify-600 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center"
              >
                <Home size={20} className="mr-2" />
                Return to Home
              </Link>
              <Link 
                to="/contact" 
                className="border border-shopify-500 text-shopify-500 hover:bg-shopify-50 px-6 py-3 rounded-md transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
