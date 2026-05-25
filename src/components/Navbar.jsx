import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Show navbar if we are scrolling up or if we are close to the top of the page
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 50;
      
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const menuItems = [
    { name: 'Projects', href: '#projects-section', id: 'projects-link' },
    { name: 'Join us', href: '#', id: 'join-us-link' },
    { name: 'Blogs', href: '#', id: 'portal-link' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -110 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full flex items-center justify-between py-6 px-6 sm:px-12 md:px-16 lg:px-24 sticky top-0 z-[99] bg-[#141414]/85 backdrop-blur-md"
      >
        <div className="w-full flex items-center justify-between relative">
          
          {/* Logo container */}
          <div id="logo-container" className="flex items-center">
            <a href="/" className="cursor-pointer block text-white hover:opacity-80 transition-opacity duration-300">
              <Logo className="lg:w-36 lg:h-12 w-28 h-10 active:scale-95 duration-300" />
            </a>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-x-10 font-display text-lg text-stone-300">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-white transition-colors duration-300 cursor-pointer font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact Let's talk CTA */}
          <div className="hidden md:block" id="contact-button">
            <a
              href="#contact"
              className="group relative flex items-center justify-center w-36 h-12 bg-[#FF0055] hover:bg-[#ff1f6d] active:scale-95 transition-all duration-300 rounded-full font-semibold text-white tracking-wide text-base overflow-hidden cursor-pointer shadow-lg"
            >
              {/* Text: slides up on hover */}
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full">
                Let’s talk
              </span>
              {/* Waving hand: slides in from bottom on hover */}
              <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <span className="inline-block animate-wave text-2xl origin-bottom-right">👋</span>
              </span>
            </a>
          </div>

          {/* Mobile Hamburguer Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 text-white"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#141414] transition-all duration-500 md:hidden flex flex-col justify-center pl-10 gap-y-8 text-4xl ${
          mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="font-display font-bold text-white hover:text-[#FF0055] transition-colors duration-300"
          >
            {item.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMobileMenuOpen(false)}
          className="w-fit px-8 py-3 bg-[#FF0055] rounded-full font-bold text-white text-2xl hover:bg-[#ff1f6d] transition-all duration-300"
        >
          Let’s talk
        </a>
      </div>
    </>
  );
};

export default Navbar;
