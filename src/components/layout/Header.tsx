import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="flex items-center space-x-2"
            aria-label="Canta"
          >
            <img 
              src={`${import.meta.env.BASE_URL}Canta Logo.png`}
              alt="Canta VC Logo" 
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#about" isScrolled={isScrolled}>About</NavLink>
            <NavLink href="#focus" isScrolled={isScrolled}>Focus</NavLink>
            <NavLink href="#portfolio" isScrolled={isScrolled}>Portfolio</NavLink>
            <NavLink href="#team" isScrolled={isScrolled}>Team</NavLink>
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden focus:outline-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-5 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#focus" onClick={() => setIsMenuOpen(false)}>Focus</MobileNavLink>
            <MobileNavLink href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</MobileNavLink>
            <MobileNavLink href="#team" onClick={() => setIsMenuOpen(false)}>Team</MobileNavLink>
            <a
              href="#contact"
              className="block px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-center transition-all duration-300 hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

const NavLink = ({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) => (
  <a
    href={href}
    className={`font-medium transition-all duration-300 hover:scale-105 ${
      isScrolled ? 'text-slate-800 hover:text-primary-600' : 'text-white hover:text-primary-200'
    }`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode; 
  onClick: () => void 
}) => (
  <a
    href={href}
    className="block px-4 py-2 text-slate-800 hover:bg-slate-50 rounded-lg transition-all duration-300 hover:text-primary-600"
    onClick={onClick}
  >
    {children}
  </a>
);