import React, { useEffect } from 'react';
import { useInView } from '../utils/useInView';

export const AboutSection = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-800 rounded-lg text-sm font-medium mb-6">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Our Investment Philosophy
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We back exceptional founders building the next generation of AI-powered healthcare solutions in the UK.
          </p>
        </div>

        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Investment Thesis</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Canta focuses on pre-seed and seed-stage UK startups at the intersection of artificial intelligence and healthcare. We identify transformative companies with the potential to revolutionize healthcare delivery and patient outcomes.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-primary-100 flex items-center justify-center mt-1 transition-all duration-300 group-hover:bg-primary-200">
                  <span className="text-primary-600 text-sm font-bold">1</span>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Exceptional Teams</h4>
                  <p className="text-slate-600 leading-relaxed">We partner with founders who combine deep domain expertise in healthcare with proven technical capabilities in AI and machine learning.</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-primary-100 flex items-center justify-center mt-1 transition-all duration-300 group-hover:bg-primary-200">
                  <span className="text-primary-600 text-sm font-bold">2</span>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Strategic Markets</h4>
                  <p className="text-slate-600 leading-relaxed">We target high-growth opportunities where AI can create defensible advantages and significant barriers to entry, while maintaining flexibility for strategic pivots.</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-primary-100 flex items-center justify-center mt-1 transition-all duration-300 group-hover:bg-primary-200">
                  <span className="text-primary-600 text-sm font-bold">3</span>
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Validated Solutions</h4>
                  <p className="text-slate-600 leading-relaxed">We invest in solutions with demonstrated technical feasibility and clear paths to regulatory approval, backed by early clinical or commercial validation.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AI in healthcare research" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-primary-500/10 rounded-full z-0 animate-pulse"></div>
            <div className="absolute -top-8 -left-8 w-56 h-56 bg-primary-500/10 rounded-full z-0 animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};