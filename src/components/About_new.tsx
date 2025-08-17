import React from 'react';
import { GraduationCap, Code, Users, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: highlightsRef, isVisible: highlightsVisible } = useScrollAnimation({ threshold: 0.1 });

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Computer Engineering - Expected 2027"
    },
    {
      icon: Code,
      title: "Focus",
      description: "Data Science & Full-Stack Development"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Active in tech communities and coding clubs"
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Open source contributor"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-white dark:bg-gray-900 transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`} 
      id="about"
    >
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`flex items-center justify-center gap-4 mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a href="dp.jpg" target="_blank" rel="noopener noreferrer" className="group">
            <div className="w-28 h-28 md:w-36 md:h-36 overflow-hidden rounded-full border-4 border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-purple-600 relative">
              <img 
                src="dp.jpg" 
                alt="Shah Rochan" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </a>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-in slide-in-from-right-5 duration-700">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-2 animate-in slide-in-from-left-5 duration-700 delay-300"></div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={contentRef}
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300">
            I'm a Computer Engineering student at LJU with a strong interest in software development, data structures, algorithms, and web technologies. I've built a variety of projects including management systems, database apps, and embedded systems, which have strengthened my practical skills. I'm particularly passionate about AI, ML, and data science, and constantly seek to learn and grow in these areas. Known for being curious, friendly, and collaborative, I enjoy working with others to bring innovative ideas to life. I studied at BEST HIGH SCHOOL and am always eager to explore new opportunities and challenges in tech. Let's connect and create something impactful together!
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300">
              My journey in tech started with curiosity about how software works, and has evolved into 
              a commitment to creating efficient, scalable, and user-friendly applications. I believe 
              in writing clean code, following best practices, and continuous learning.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'Team Collaboration', 'Quick Learner', 'Leadership'].map((trait, index) => (
                <span 
                  key={trait} 
                  className={`px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 cursor-default transform hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom-3 ${
                    contentVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    animationDelay: `${800 + index * 100}ms`,
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
          
          <div 
            ref={highlightsRef}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-500 ${
              highlightsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className={`p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group cursor-default animate-in fade-in slide-in-from-bottom-5 ${
                  highlightsVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${600 + index * 150}ms`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                  <item.icon className="text-white transition-transform duration-300 group-hover:scale-110" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
