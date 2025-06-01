import React from 'react';
import { useInView } from '../utils/useInView';
import { ExternalLink } from 'lucide-react';

export const Portfolio = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">Our Partners</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Leadership Team
          </h2>
          <p className="text-lg text-slate-600">
            Meet our founding partners who bring together deep expertise in healthcare technology and venture capital.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Alex Antrobus</h3>
              <p className="text-slate-600">Medical technology entrepreneur and AI researcher with a track record of successful healthcare startups.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Steven Bolleurs</h3>
              <p className="text-slate-600">Experienced venture capital investor with a strong background in scaling technology companies.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="#team" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            Learn more about our team
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};