import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { Link, useRouter } from './Router';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa6';

const Navbar = () => {
  const { path } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 50;
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
    } else {
      document.body.style.overflow = 'unset';
      if (window.lenis) window.lenis.start();
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (window.lenis) window.lenis.start();
    };
  }, [mobileMenuOpen]);

  const menuItems = [
    { name: 'Projects', href: '/projects', id: 'projects-link' },
    { name: 'Join us', href: '/join-us', id: 'join-us-link' },
    { name: 'Blogs', href: '/blogs', id: 'portal-link' }
  ];

  const mobileMenuItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Join us', href: '/join-us' },
    { name: 'Contact us', href: '/contact-us' },
    { name: 'Blogs', href: '/blogs', isGradient: true }
  ];

  const socialLinks = [
    {
      name: 'facebook',
      href: 'https://www.facebook.com/TheCreativocode',
      icon: <FaFacebookF className="w-6 h-6" />
    },
    {
      name: 'twitter',
      href: 'https://x.com/CreativoCode',
      icon: <FaXTwitter className="w-6 h-6" />
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/creativo_code',
      icon: <FaInstagram className="w-6 h-6" />
    },
    {
      name: 'linkedin',
      href: 'https://lk.linkedin.com/company/creativo-code',
      icon: <FaLinkedinIn className="w-6 h-6" />
    },
    {
      name: 'tiktok',
      href: 'https://www.tiktok.com/@creativo_code',
      icon: <FaTiktok className="w-6 h-6" />
    }
  ];

  // Motion variants for drawer entry and staggered children
  const drawerVariants = {
    closed: {
      x: '100%',
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.04,
        staggerDirection: -1
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.06,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    closed: {
      y: 20,
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: 'easeOut'
      }
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -110 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex w-full items-center justify-between py-0 px-4 sm:py-5 2xs:px-5 xs:px-12 md:px-16 lg:px-24 top-0 sticky z-[99] bg-transparent"
      >
        <div className="w-full flex items-center justify-between relative">

          {/* Logo container */}
          <div id="logo-container" className="flex items-center">
            <Link href="/" className="cursor-pointer block text-white hover:opacity-80 transition-opacity duration-300">
              <Logo className="lg:w-36 lg:h-12 w-28 h-10 active:scale-95 duration-300" />
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-x-10 font-display text-lg">
            {menuItems.map((item) => {
              const isActive = path === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  id={item.id}
                  className={`relative transition-colors duration-300 cursor-pointer font-medium group ${
                    isActive ? 'text-[#FF0055]' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  {/* Active underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#FF0055] rounded-full transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Let's talk CTA */}
          <div className="hidden md:block" id="contact-button">
            <Link
              href="/contact-us"
              className="group relative flex items-center justify-center w-36 h-12 bg-[#FF0055] hover:bg-[#ff1f6d] active:scale-95 transition-all duration-500 rounded-full font-semibold text-white tracking-wide text-base overflow-hidden cursor-pointer shadow-lg"
            >
              {/* Text: slides to the right on hover */}
              <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out group-hover:translate-x-full group-hover:opacity-0">
                Let's talk
              </span>
              {/* Waving hand: slides in from the left to the center on hover */}
              <span className="absolute inset-0 flex items-center justify-center -translate-x-full opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
                <span className="inline-block animate-wave origin-bottom-left">
                  <span className="inline-block scale-x-[-1] text-3xl">👋</span>
                </span>
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-40 text-white cursor-pointer hover:opacity-80 active:scale-95 transition-all"
            aria-label="Toggle menu"
          >
            <span className="h-0.5 w-6 bg-white"></span>
            <span className="h-0.5 w-6 bg-white"></span>
            <span className="h-0.5 w-6 bg-white"></span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={drawerVariants}
            style={{ willChange: 'transform' }}
            className="fixed inset-0 z-[100] bg-[#000000] md:hidden flex flex-col justify-between px-6 py-6 xs:px-12 xs:py-12"
          >
            {/* Header: Logo and Close button */}
            <div className="flex w-full items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="cursor-pointer block text-white hover:opacity-80 transition-opacity duration-300"
              >
                <Logo className="w-28 h-10 active:scale-95 duration-300" />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:opacity-80 active:scale-95 duration-300 p-2 -mr-2 cursor-pointer"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-y-6 my-auto pl-2">
              {mobileMenuItems.map((item) => {
                const isActive = path === item.href;
                return (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-display font-bold text-5xl tracking-tight transition-all duration-300 block ${
                        item.isGradient
                          ? 'bg-gradient-to-r from-[#FF0055] via-[#a855f7] to-[#8354fd] bg-clip-text text-transparent w-fit'
                          : isActive
                          ? 'text-[#FF0055]'
                          : 'text-white hover:text-[#FF0055]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Media Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-x-6 pl-2"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-[#FF0055] transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
