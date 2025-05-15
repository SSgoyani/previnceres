
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes and scroll to top
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to top when route changes
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`w-full bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img src="/lovable-uploads/logo-no-background.png" alt="Previnceres Logo" className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`nav-link font-medium hover:text-shopify-500 transition-colors ${isActive('/') ? 'text-shopify-500' : 'text-gray-800'}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`nav-link font-medium hover:text-shopify-500 transition-colors ${isActive('/services') ? 'text-shopify-500' : 'text-gray-800'}`}
          >
            Services
          </Link>
          <Link 
            to="/case-studies" 
            className={`nav-link font-medium hover:text-shopify-500 transition-colors ${isActive('/case-studies') ? 'text-shopify-500' : 'text-gray-800'}`}
          >
            Case Studies
          </Link>
          <Link 
            to="/testimonials" 
            className={`nav-link font-medium hover:text-shopify-500 transition-colors ${isActive('/testimonials') ? 'text-shopify-500' : 'text-gray-800'}`}
          >
            Testimonials
          </Link>
          <Link 
            to="/about" 
            className={`nav-link font-medium hover:text-shopify-500 transition-colors ${isActive('/about') ? 'text-shopify-500' : 'text-gray-800'}`}
          >
            About Us
          </Link>
        </nav>

        {/* Contact Button - redirect to careers page */}
        <div className="hidden md:block">
          <Button 
            asChild
            className={`transition-all duration-300 transform hover:scale-105 ${isActive('/careers') ? 'bg-shopify-600' : 'bg-shopify-500 hover:bg-shopify-600'}`}
          >
            <Link to="/careers">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-white w-full pb-4 pt-2 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container flex flex-col space-y-4">
          <Link 
            to="/" 
            className={`font-medium py-2 transition-colors ${isActive('/') ? 'text-shopify-500' : 'text-gray-800 hover:text-shopify-500'}`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`font-medium py-2 transition-colors ${isActive('/services') ? 'text-shopify-500' : 'text-gray-800 hover:text-shopify-500'}`}
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link 
            to="/case-studies" 
            className={`font-medium py-2 transition-colors ${isActive('/case-studies') ? 'text-shopify-500' : 'text-gray-800 hover:text-shopify-500'}`}
            onClick={toggleMenu}
          >
            Case Studies
          </Link>
          <Link 
            to="/testimonials" 
            className={`font-medium py-2 transition-colors ${isActive('/testimonials') ? 'text-shopify-500' : 'text-gray-800 hover:text-shopify-500'}`}
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
          <Link 
            to="/about" 
            className={`font-medium py-2 transition-colors ${isActive('/about') ? 'text-shopify-500' : 'text-gray-800 hover:text-shopify-500'}`}
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link 
            to="/careers" 
            className="font-medium text-white bg-shopify-500 hover:bg-shopify-600 py-2 px-4 rounded text-center mt-2"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
