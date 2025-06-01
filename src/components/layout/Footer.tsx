import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={`${import.meta.env.BASE_URL}Canta Logo.png`}
                alt="Canta VC Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-slate-300 mb-4">
              Investing in the future of AI-enabled health technology.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
              <SocialLink href="mailto:info@canta.vc" icon={<Mail size={20} />} />
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Site Map</h3>
            <ul className="space-y-2">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#focus">Investment Focus</FooterLink>
              <FooterLink href="#portfolio">Portfolio</FooterLink>
              <FooterLink href="#team">Team</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Focus Areas</h3>
            <ul className="space-y-2">
              <FooterLink href="#focus">AI Diagnostics</FooterLink>
              <FooterLink href="#focus">Precision Medicine</FooterLink>
              <FooterLink href="#focus">Digital Therapeutics</FooterLink>
              <FooterLink href="#focus">Remote Monitoring</FooterLink>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-slate-300 mb-4">United Kingdom</p>
            <a href="mailto:info@canta.vc" className="text-primary-400 hover:text-primary-300 transition-colors">
              info@canta.vc
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Canta Ventures. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="text-slate-300 hover:text-primary-400 transition-colors duration-300"
    >
      {children}
    </a>
  </li>
);