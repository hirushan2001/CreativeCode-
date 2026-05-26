import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { Link, useRouter } from './Router';

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
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>
      )
    },
    {
      name: 'twitter',
      href: 'https://x.com/CreativoCode',
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </svg>
      )
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/creativo_code',
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0281 2.00098C14.1535 2.00284 14.7238 2.00879 15.2166 2.02346L15.4107 2.02981C15.6349 2.03778 15.8561 2.04778 16.1228 2.06028C17.1869 2.10944 17.9128 2.27778 18.5503 2.52528C19.2094 2.77944 19.7661 3.12278 20.3219 3.67861C20.8769 4.23444 21.2203 4.79278 21.4753 5.45028C21.7219 6.08694 21.8903 6.81361 21.9403 7.87778C21.9522 8.14444 21.9618 8.36564 21.9697 8.58989L21.976 8.78397C21.9906 9.27672 21.9973 9.8471 21.9994 10.9725L22.0002 11.7182C22.0003 11.8093 22.0003 11.9033 22.0003 12.0003L22.0002 12.2824L21.9996 13.0281C21.9977 14.1535 21.9918 14.7238 21.9771 15.2166L21.9707 15.4107C21.9628 15.6349 21.9528 15.8561 21.9403 16.1228C21.8911 17.1869 21.7219 17.9128 21.4753 18.5503C21.2211 19.2094 20.8769 19.7661 20.3219 20.3219C19.7661 20.8769 19.2069 21.2203 18.5503 21.4753C17.9128 21.7219 17.1869 21.8903 16.1228 21.9403C15.8561 21.9522 15.6349 21.9618 15.4107 21.9697L15.2166 21.976C14.7238 21.976 13.0281 21.9994L12.2824 22.0002C12.1913 22.0003 12.0973 22.0003 12.0003 22.0003L11.7182 22.0002L10.9725 21.9996C9.8471 21.9977 9.27672 21.9918 8.78397 21.9771L8.58989 21.9707C8.36564 21.9628 8.14444 21.9528 7.87778 21.9403C6.81361 21.8911 6.08861 21.7219 5.45028 21.4753C4.79194 21.2211 4.23444 20.8769 3.67861 20.3219C3.12278 19.7661 2.78028 19.2069 2.52528 18.5503C2.27778 17.9128 2.11028 17.1869 2.06028 16.1228C2.0484 15.8561 2.03871 15.6349 2.03086 15.4107L2.02457 15.2166C2.00994 14.7238 2.00327 14.1535 2.00111 13.0281L2.00098 10.9725C2.00284 9.8471 2.00879 9.27672 2.02346 8.78397L2.02981 8.58989C2.03778 8.36564 2.04778 8.14444 2.06028 7.87778C2.10944 6.81278 2.27778 6.08778 2.52528 5.45028C2.77944 4.79194 3.12278 4.23444 3.67861 3.67861C4.23444 3.12278 4.79278 2.78028 5.45028 2.52528C6.08778 2.27778 6.81278 2.11028 7.87778 2.06028C8.14444 2.0484 8.36564 2.03871 8.58989 2.03086L8.78397 2.02457C9.27672 2.00994 9.8471 2.00327 10.9725 2.00111L13.0281 2.00098ZM12.0003 7.00028C9.23738 7.00028 7.00028 9.23981 7.00028 12.0003C7.00028 14.7632 9.23981 17.0003 12.0003 17.0003C14.7632 17.0003 17.0003 14.7607 17.0003 12.0003C17.0003 9.23738 14.7607 7.00028 12.0003 7.00028ZM12.0003 9.00028C13.6572 9.00028 15.0003 10.3429 15.0003 12.0003C15.0003 13.6572 13.6576 15.0003 12.0003 15.0003C10.3434 15.0003 9.00028 13.6576 9.00028 12.0003C9.00028 10.3434 10.3429 9.00028 12.0003 9.00028ZM17.2503 5.50028C16.561 5.50028 16.0003 6.06018 16.0003 6.74943C16.0003 7.43867 16.5602 7.99944 17.2503 7.99944C17.9395 7.99944 18.5003 7.43954 18.5003 6.74943C18.5003 6.06018 17.9386 5.49941 17.2503 5.50028Z"/>
        </svg>
      )
    },
    {
      name: 'linkedin',
      href: 'https://lk.linkedin.com/company/creativo-code',
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.698 5.823h3.438v10.323h-3.438v-10.323zM2.438 0.854c-1.167 0-1.938 0.771-1.938 1.782 0 0.989 0.74 1.781 1.896 1.781h0.021c1.198 0 1.948-0.792 1.938-1.781-0.011-1.011-0.74-1.782-1.917-1.782zM12.552 5.583c-1.829 0-2.643 1.002-3.094 1.709v-1.469h-3.427c0 0 0.042 0.969 0 10.323h3.427v-5.761c0-0.312 0.032-0.615 0.114-0.843 0.251-0.615 0.812-1.25 1.762-1.25 1.238 0 1.738 0.948 1.738 2.333v5.521h3.428v-5.917c0-3.167-1.688-4.646-3.948-4.646z"/>
        </svg>
      )
    },
    {
      name: 'tiktok',
      href: 'https://www.tiktok.com/@creativo_code',
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
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
