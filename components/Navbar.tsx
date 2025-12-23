
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Воронка', href: '#funnel' },
    { name: 'Кейсы', href: '#cases' },
    { name: 'Контакты', href: '#contact' }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12",
        scrolled ? "bg-brand-black/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-black tracking-tighter flex items-center gap-1">
          PRO<span className="text-brand-accent italic">BOOST</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-brand-accent transition-all duration-300"
          >
            Обсудить проект
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-brand-black border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-black uppercase tracking-tight"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
