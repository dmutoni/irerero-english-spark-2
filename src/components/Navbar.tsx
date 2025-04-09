
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-display font-bold text-irerero-blue">Irerero</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-irerero-blue font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-irerero-blue font-medium">
              About
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-irerero-blue font-medium">
              Features
            </Link>
            <Link to="/download" className="text-gray-700 hover:text-irerero-blue font-medium">
              Download
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-irerero-blue font-medium">
              Contact
            </Link>
            <Link to="/download" className="btn-primary">
              Get the App
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-irerero-blue focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-irerero-blue hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-irerero-blue hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/features" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-irerero-blue hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/download" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-irerero-blue hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-irerero-blue hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/download" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-irerero-blue text-white hover:bg-blue-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get the App
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
