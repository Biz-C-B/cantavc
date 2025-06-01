import React from 'react';
import { useInView } from '../utils/useInView';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export const Team = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Meet the Partners
          </h2>
          <p className="text-lg text-slate-600">
            Our team combines deep expertise in healthcare technology, venture capital, and company building to support the next generation of healthcare innovators.
          </p>
        </div>

        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}
        >
          <TeamMember 
            name="Alex"
            title="Partner"
            bio="PhD in machine learning and neuroscience from UCL, founder of CoMind Technologies and Zedsen Limited. Alex brings deep expertise in medical technology innovation and entrepreneurship, with strong connections in the UK biomedical community."
            image={`${import.meta.env.BASE_URL}Alex Profile.jpg`}
          />
          
          <TeamMember 
            name="Steven"
            title="Partner"
            bio="CFA Charterholder with over 10 years of VC investing experience, primarily in climate technology. Steven has invested in businesses now worth >£2 billion with a passion for mathematics and software."
            image={`${import.meta.env.BASE_URL}Steven Profile.png`}
          />
        </div>
      </div>
    </section>
  );
};

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  image: string;
}

const TeamMember = ({ name, title, bio, image }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center grayscale transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-center space-x-4">
              <SocialButton icon={<Linkedin className="h-4 w-4" />} />
              <SocialButton icon={<Twitter className="h-4 w-4" />} />
              <SocialButton icon={<Mail className="h-4 w-4" />} />
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-1">{name}</h3>
        <p className="text-primary-600 font-medium mb-3">{title}</p>
        <p className="text-slate-600 text-sm">{bio}</p>
      </div>
    </div>
  );
};

const SocialButton = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <button className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors duration-300">
      {icon}
    </button>
  );
};