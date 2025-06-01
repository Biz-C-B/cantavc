import React from 'react';
import { useInView } from '../utils/useInView';
import { FileSearch, FileText, Banknote } from 'lucide-react';

export const HowItWorks = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-slate-600">
            Our streamlined investment process ensures efficient deployment of capital while maintaining rigorous due diligence standards.
          </p>
        </div>

        <div 
          ref={ref} 
          className={`relative max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 transform -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
              {/* Initial Review Phase */}
              <div className="relative group">
                <div className="absolute inset-0 bg-primary-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <FileSearch className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-slate-900">Deal Flow</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <ProcessStep
                      title="Deals Reviewed"
                      description="Comprehensive evaluation of incoming opportunities"
                    />
                    <ProcessStep
                      title="Deal Selected"
                      description="Rigorous selection based on our investment criteria"
                    />
                  </div>
                </div>
              </div>

              {/* Documentation Phase */}
              <div className="relative group">
                <div className="absolute inset-0 bg-primary-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-slate-900">Documentation</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <ProcessStep
                      title="Deal Memo"
                      description="Detailed investment thesis and analysis"
                    />
                    <ProcessStep
                      title="SPV Setup"
                      description="Special Purpose Vehicle establishment"
                    />
                  </div>
                </div>
              </div>

              {/* Closing Phase */}
              <div className="relative group">
                <div className="absolute inset-0 bg-primary-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Banknote className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-slate-900">Closing</h3>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <ProcessStep
                      title="Syndicate Commitment"
                      description="Investment commitments secured"
                    />
                    <ProcessStep
                      title="Investment Complete"
                      description="Capital deployed to portfolio company"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="absolute top-1/2 left-[28%] w-8 h-8 bg-primary-400 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-primary-400 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute top-1/2 right-[28%] w-8 h-8 bg-primary-400 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProcessStepProps {
  title: string;
  description: string;
}

const ProcessStep = ({ title, description }: ProcessStepProps) => {
  return (
    <div className="relative pl-6 border-l-2 border-primary-200">
      <h4 className="text-sm font-semibold text-slate-900 mb-1">{title}</h4>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
};