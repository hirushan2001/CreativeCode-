import React, { useState } from 'react';
import Logo from './Logo';
import SelectorBox from './SelectorBox';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Projects', href: '#projects-section', id: 'projects-link' },
    { name: 'Join us', href: '#', id: 'join-us-link' },
    { name: 'Blogs', href: '#', id: 'portal-link' }
  ];

  return (
    <>
      <nav className="w-full flex items-center justify-between py-6 px-6 sm:px-12 md:px-16 lg:px-24 sticky top-0 z-[99] bg-[#141414]/80 backdrop-blur-md border-b border-white/5">
        <div className="w-full flex items-center justify-between relative">
          
          {/* Logo container */}
          <div id="logo-container" className="flex items-center">
            <SelectorBox borderColor="border-custom-selectorBorder/50" className="p-1">
              <a href="/" className="cursor-pointer block text-white hover:text-custom-primaryPurple transition-colors duration-300">
                <Logo className="lg:w-36 lg:h-12 w-28 h-10 active:scale-95 duration-300" />
              </a>
            </SelectorBox>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-x-8 font-display text-lg text-white">
            {menuItems.map((item) => (
              <div key={item.name} id={item.id} className="relative">
                <SelectorBox borderColor="border-custom-selectorBorder/40" className="p-0.5 active:scale-95 transition-transform duration-300">
                  <a
                    href={item.href}
                    className="px-4 py-1 text-center tracking-tight text-white hover:text-custom-primaryPurple brightness-90 hover:brightness-100 transition-all duration-300 cursor-pointer block"
                  >
                    {item.name}
                  </a>
                </SelectorBox>
              </div>
            ))}
          </div>

          {/* Contact Let's talk CTA */}
          <div className="hidden md:block" id="contact-button">
            <SelectorBox borderColor="border-custom-selectorBorder/50" className="p-0.5">
              <a
                href="#contact"
                className="flex items-center justify-center px-6 py-2.5 bg-[#FF0055] hover:bg-[#ff1f6d] active:scale-95 transition-all duration-300 rounded-full font-semibold text-white tracking-wide text-base leading-none shadow-lg cursor-pointer"
              >
                Let’s talk
              </a>
            </SelectorBox>
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
      </nav>

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
