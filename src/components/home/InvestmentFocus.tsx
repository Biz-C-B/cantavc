import React from 'react';
import { useInView } from '../utils/useInView';
import { Brain, Dna, Stethoscope, Database } from 'lucide-react';

export const InvestmentFocus = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="focus" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">Investment Focus</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Areas Where We Invest
          </h2>
          <p className="text-lg text-slate-600">
            We focus on breakthrough technologies at the intersection of artificial intelligence and healthcare that have the potential to transform patient outcomes.
          </p>
        </div>

        <div 
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-2 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}
        >
          <FocusCard 
            icon={<Brain className="h-10 w-10 text-[#125425]" />}
            title="AI Diagnostics"
            description="AI-powered diagnostic platforms that enhance accuracy and speed in disease detection, medical imaging analysis, and early intervention opportunities."
            color="from-primary-400 to-primary-600"
          />
          
          <FocusCard 
            icon={<Dna className="h-10 w-10 text-[#125425]" />}
            title="Personalised Therapeutics"
            description="Advanced therapeutic solutions that leverage AI to create tailored treatment plans, drug development, and precision medicine approaches."
            color="from-primary-400 to-primary-600"
          />
          
          <FocusCard 
            icon={<Stethoscope className="h-10 w-10 text-[#125425]" />}
            title="Clinical Workflow"
            description="Intelligent systems that streamline healthcare delivery, optimize clinical decision-making, and improve patient care coordination."
            color="from-primary-400 to-primary-600"
          />
          
          <FocusCard 
            icon={<Database className="h-10 w-10 text-[#125425]" />}
            title="Biodata Platforms"
            description="Innovative platforms that harness biological data through AI to unlock insights in genomics, proteomics, and systems biology."
            color="from-primary-400 to-primary-600"
          />
        </div>
      </div>
    </section>
  );
};

interface FocusCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FocusCard = ({ icon, title, description, color }: FocusCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className={`w-16 h-16 rounded-full mb-6 bg-primary-100 flex items-center justify-center`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
      <div className={`h-1 w-full bg-gradient-to-r ${color}`}></div>
    </div>
  );
};