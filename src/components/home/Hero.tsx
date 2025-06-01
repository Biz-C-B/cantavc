import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const button = buttonRef.current;
    
    if (heading) heading.classList.add('animate-fade-in');
    
    setTimeout(() => {
      if (paragraph) paragraph.classList.add('animate-fade-in');
    }, 200);
    
    setTimeout(() => {
      if (button) button.classList.add('animate-fade-in');
    }, 400);
  }, []);

  return (
    <section className="relative min-h-[600px] h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3683053/pexels-photo-3683053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/80"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 transition-opacity duration-1000"
          >
            Investing in AI-Powered <span className="text-primary-400">Health</span> Technology
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-8 sm:mb-10 opacity-0 transition-opacity duration-1000 delay-200 max-w-2xl"
          >
            Canta backs visionary founders transforming healthcare with artificial intelligence. We invest in the technologies that will define the next generation of healthcare innovation.
          </p>
          
          <div 
            ref={buttonRef}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 transition-opacity duration-1000 delay-400"
          >
            <a 
              href="#about" 
              className="px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 hover:bg-primary-700 text-white text-base sm:text-lg font-medium rounded-lg transition-all duration-300 flex items-center justify-center hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#contact" 
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent hover:bg-white/10 text-white text-base sm:text-lg font-medium rounded-lg border-2 border-white transition-all duration-300 flex items-center justify-center hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};