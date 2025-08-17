
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Index = () => {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer 
        ref={footerRef}
        className={`bg-gray-100 dark:bg-gray-950 py-6 sm:py-8 border-t border-gray-200 dark:border-gray-800 transition-all duration-700 ${
          footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2 sm:mb-0">
          © 2025 Shah Rochan. Crafted with ❤️ using React, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 mt-2">
            <span className="text-xs text-gray-500 dark:text-gray-500">•</span>
            <span className="text-xs text-gray-500 dark:text-gray-500 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Privacy Policy</span>
            <span className="text-xs text-gray-500 dark:text-gray-500">•</span>
            <span className="text-xs text-gray-500 dark:text-gray-500 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Terms of Service</span>
            <span className="text-xs text-gray-500 dark:text-gray-500">•</span>
            <span className="text-xs text-gray-500 dark:text-gray-500 cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
