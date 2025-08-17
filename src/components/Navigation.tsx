
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };
    
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Add smooth scroll animation
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      scrolled || isOpen 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg dark:bg-gray-900/95 border-b border-gray-200/20 dark:border-gray-700/30' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-2 animate-in slide-in-from-left-5 duration-700">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
              <Code2 className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Shah Rochan</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 animate-in slide-in-from-right-5 duration-700">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-all duration-300 relative group cursor-pointer transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </button>
            ))}
            <div className="ml-2 animate-in fade-in duration-700 delay-500">
              <ThemeToggle />
            </div>
            <button 
              onClick={() => handleNavClick('#contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-full font-medium hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base hover:from-blue-700 hover:to-purple-700 animate-in slide-in-from-bottom-5 delay-300"
              style={{ animationDuration: '700ms' }}
            >
              Reach out
            </button>
          </div>
          
          <div className="md:hidden flex items-center gap-2 sm:gap-3 animate-in slide-in-from-right-5 duration-700">
            <ThemeToggle />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:scale-110"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                />
                <X 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isOpen 
              ? 'max-h-96 opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 -translate-y-4'
          } overflow-hidden`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="border-t border-gray-200/50 dark:border-gray-700/50 mt-2"></div>
          <div className="py-4 space-y-1 bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl rounded-b-lg">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-all duration-300 py-3 px-4 text-base rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transform hover:translate-x-2 animate-in slide-in-from-left-5 ${
                  isOpen ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: isOpen ? `${index * 100 + 200}ms` : '0ms',
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <button 
                onClick={() => handleNavClick('#contact')}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base animate-in slide-in-from-bottom-5 ${
                  isOpen ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: isOpen ? '700ms' : '0ms',
                  transitionDelay: isOpen ? '300ms' : '0ms'
                }}
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
