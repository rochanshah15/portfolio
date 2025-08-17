import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });
  
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) {
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(
        'service_rbqoepu',      // Your Service ID
        'template_j10de66',     // Your Template ID
        form.current, 
        'vGIRnQaLowt7o31fg'       // IMPORTANT: Replace with your Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setIsSent(true);
          setIsSubmitting(false);
          if (form.current) {
            form.current.reset(); // Reset form fields
          }
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSubmitting(false);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`} 
      id="contact"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-gradient-x"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full filter blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-400/20 rounded-full filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-in slide-in-from-top-5 duration-700">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 animate-in slide-in-from-left-5 duration-700 delay-300"></div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto animate-in fade-in duration-700 delay-500">
            Ready to start your next project or just want to chat about technology? I'd love to hear from you!
          </p>
        </div>
        
        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-1000 delay-300 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-8">
            <div className="animate-in slide-in-from-left-8 duration-700 delay-600">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "shahrochan05@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+91 9825327667" },
                  { icon: MapPin, label: "Location", value: "Ahmedabad, Gujarat" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 animate-in slide-in-from-left-5 ${
                      contentVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ 
                      animationDelay: `${800 + index * 150}ms`,
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="text-blue-400 group-hover:text-blue-300" size={24} />
                    </div>
                    <div>
                      <p className="text-blue-100 group-hover:text-white transition-colors duration-300">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-blue-200 transition-colors duration-300">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`animate-in slide-in-from-left-8 duration-700 ${
              contentVisible ? 'opacity-100' : 'opacity-0'
            }`} style={{ animationDelay: '1200ms' }}>
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { href: "https://github.com/rochanshah15", icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/rochan-shah-974766279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://x.com/rochan_shah15?t=ACslQ31CC7-ajcUS1cUaqA&s=09", icon: Twitter, label: "Twitter" },
                  { href: "https://www.instagram.com/rochan_shah15?igsh=cDh6dWVtemNhb2pq", icon: Instagram, label: "Instagram" }
                ].map((social, index) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    className={`w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:bg-blue-500/30 hover:scale-110 hover:rotate-12 transition-all duration-300 animate-in zoom-in ${
                      contentVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ 
                      animationDelay: `${1400 + index * 100}ms`,
                      transitionDelay: `${index * 50}ms`
                    }}
                    aria-label={social.label}
                  >
                    <social.icon className="text-blue-400 hover:text-blue-300 transition-colors duration-300" size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 animate-in slide-in-from-right-8 ${
            contentVisible ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '700ms' }}>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="animate-in slide-in-from-bottom-4 duration-500 delay-1000">
                  <input 
                    type="text" 
                    name="from_name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:bg-white/15 focus:outline-none transition-all duration-300 text-white placeholder-blue-200 hover:bg-white/15"
                    required
                  />
                </div>
                <div className="animate-in slide-in-from-bottom-4 duration-500 delay-1100">
                  <input 
                    type="email" 
                    name="from_email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:bg-white/15 focus:outline-none transition-all duration-300 text-white placeholder-blue-200 hover:bg-white/15"
                    required
                  />
                </div>
              </div>
              
              <div className="animate-in slide-in-from-bottom-4 duration-500 delay-1200">
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:bg-white/15 focus:outline-none transition-all duration-300 text-white placeholder-blue-200 hover:bg-white/15"
                  required
                />
              </div>
              
              <div className="animate-in slide-in-from-bottom-4 duration-500 delay-1300">
                <textarea 
                  rows={4}
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-blue-400 focus:bg-white/15 focus:outline-none transition-all duration-300 text-white placeholder-blue-200 resize-none hover:bg-white/15"
                  required
                ></textarea>
              </div>
              
              <div className="animate-in slide-in-from-bottom-4 duration-500 delay-1400">
                <button 
                  type="submit"
                  disabled={isSubmitting || isSent}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <Send size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  {isSubmitting ? 'Sending...' : isSent ? 'Message Sent!' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;