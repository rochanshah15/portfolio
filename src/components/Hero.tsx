
import React from 'react';
import { Github, Linkedin, Mail, Instagram, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden px-4 sm:px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-400/10 dark:to-purple-400/10 animate-gradient-x"></div>
      <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-32 h-32 sm:w-72 sm:h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-32 h-32 sm:w-72 sm:h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-900 dark:to-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      
      <div className="container mx-auto text-center relative z-10 py-8 sm:py-16">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 space-y-4 sm:space-y-6">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight animate-in slide-in-from-left-8 duration-700">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0 animate-gradient-x">
              Shah Rochan
            </span>
          </h1>
          
          <div className="text-lg xs:text-xl sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 animate-in slide-in-from-right-8 duration-700 delay-300">
            <span className="inline-block">Computer Science Student</span>
          </div>
          
          <div className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-xs xs:max-w-sm sm:max-w-2xl mx-auto px-2 sm:px-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <span className="inline-block">
            Passionate about Software Engineering, Web Development, and Data Science, with a growing interest in Machine Learning.
            Driven to build innovative solutions that create real-world impact.
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700 pt-4 sm:pt-8">
            <a 
              href="/CV_ROCHAN_LJU - Copy.pdf"  
              download 
              className="w-full sm:w-auto max-w-xs sm:max-w-none group"
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base w-full relative overflow-hidden group-hover:from-blue-700 group-hover:to-purple-700">
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <Download size={18} className="sm:w-5 sm:h-5 group-hover:animate-bounce" />
                Download Resume
              </button>
            </a>
            
            <div className="flex gap-3 sm:gap-4">
              {[
                { href: "https://github.com/rochanshah15", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/rochan-shah-974766279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: Linkedin, label: "LinkedIn" },
                { href: "https://www.instagram.com/rochan_shah15?igsh=cDh6dWVtemNhb2pq", icon: Instagram, label: "Instagram" },
                { href: "https://mail.google.com/mail/?view=cm&fs=1&to=shahrochan05@gmail.com", icon: Mail, label: "Email" }
              ].map((social, index) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="p-2.5 sm:p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group animate-in zoom-in"
                  style={{ 
                    animationDelay: `${900 + index * 100}ms`,
                    animationDuration: '500ms'
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={20} className="sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="animate-bounce mt-8 sm:mt-12 animate-in fade-in duration-1000 delay-1000">
          <ArrowDown className="mx-auto text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer" size={28} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
