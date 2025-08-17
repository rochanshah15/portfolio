
import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation({ threshold: 0.1 });

  const projects = [
    {
      title: "BookMyBox",
      description: "Full-stack web application built with React, Django-REST, and Sqlite. Features include user authentication, payment integration, dashboards and more.",
      technologies: ["React", "Django-REST", "Sqlite", "Razorpay"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      github: "https://github.com/rochanshah15/BookMyBox",
      live: "#"
    },
    {
      title: "EasyPDF",
      description: "An intuitive application for editing, merging, splitting, and converting PDF files, simplifying your document workflow.",
      technologies: ["HTML", "CSS", "JS", "FLASK", "CLERK AUTH"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      github: "https://github.com/rochanshah15/EasyPDF",
      live: "https://easypdf-k8ne.onrender.com"
    },
    {
      title: "Saarthi-AI assistant",
      description: "A voice-activated AI personal assistant designed to automate tasks, answer queries, and manage your digital life [JARVIS].",
      technologies: ["Python", "Libraries", "APIs"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      github: "https://github.com/rochanshah15/JARVIS-AI-ASSISTANT",
      live: "#"
    },
    {
      title: "HackMate",
      description: "A comprehensive platform to organize hackathon events, find teammates with matching skills, and build innovative projects.",
      technologies: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432",
      github: "https://github.com/rochanshah15/HackMate",
      live: "#"
    },
    {
      title: "Roamantics",
      description: "An interactive frontend for a travel planner, showcasing curated tours and breathtaking destinations to help users visualize and craft their perfect vacation itinerary.",
      technologies: ["HTML", "TAILWIND CSS", "JS"],
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432",
      github: "https://github.com/rochanshah15/Roamantics",
      live: "#"
    },
    {
      title: "HotelEase",
      description: "A comprehensive hotel management system to handle bookings, customer inquiries, and room management.",
      technologies: ["Java", "DataStructures", "PostgreSQL", "XAMPP"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
      github: "https://github.com/rochanshah15/HOTELEASE",
      live: "#"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-white dark:bg-gray-900 transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`} 
      id="projects"
    >
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-in slide-in-from-top-5 duration-700">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 animate-in slide-in-from-left-5 duration-700 delay-300"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-in fade-in duration-700 delay-500">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>
        
        <div 
          ref={projectsRef}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${
            projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-blue-900/5 dark:hover:shadow-blue-900/10 transition-all duration-500 overflow-hidden transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 ${
                projectsVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${600 + index * 200}ms`,
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
                  {project.github && project.github !== "#" ? (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                      aria-label="View GitHub repository"
                    >
                      <Github size={20} className="text-gray-700 dark:text-gray-300" />
                    </a>
                  ) : (
                    <div className="p-2 bg-gray-300/50 dark:bg-gray-600/50 rounded-full cursor-not-allowed opacity-50">
                      <Github size={20} className="text-gray-500 dark:text-gray-400" />
                    </div>
                  )}
                  {project.live && project.live !== "#" ? (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} className="text-gray-700 dark:text-gray-300" />
                    </a>
                  ) : (
                    <div className="p-2 bg-gray-300/50 dark:bg-gray-600/50 rounded-full cursor-not-allowed opacity-50">
                      <ExternalLink size={20} className="text-gray-500 dark:text-gray-400" />
                    </div>
                  )}
                </div>
                
                {/* Shimmer effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer group-hover:animate-shimmer z-10 pointer-events-none"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 cursor-default transform hover:scale-105 transition-all duration-300"
                      style={{ transitionDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 animate-in fade-in duration-700 ${
          projectsVisible ? 'opacity-100' : 'opacity-0'
        }`} style={{ animationDelay: '1200ms' }}>
          <a 
            href="https://github.com/rochanshah15" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <Code2 size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
