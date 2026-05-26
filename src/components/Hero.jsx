import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SelectorBox from './SelectorBox';
import { Link } from './Router';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa6';

const Hero = () => {
  const words = [
    { highlight: "don't just", end: "develop websites." },
    { highlight: "thoughtfully", end: "design digital products." },
    { highlight: "passionately", end: "craft online experiences." }
  ];

  const [index, setIndex] = useState(0);
  const [isSelecting, setIsSelecting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start selection drag
      setIsSelecting(true);
      
      // Update word index mid-selection
      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsSelecting(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      name: 'facebook',
      href: 'https://www.facebook.com/TheCreativocode',
      icon: <FaFacebookF className="w-5 h-5" />
    },
    {
      name: 'twitter',
      href: 'https://x.com/CreativoCode',
      icon: <FaXTwitter className="w-5 h-5" />
    },
    {
      name: 'instagram',
      href: 'https://www.instagram.com/creativo_code',
      icon: <FaInstagram className="w-5 h-5" />
    },
    {
      name: 'linkedin',
      href: 'https://lk.linkedin.com/company/creativo-code',
      icon: <FaLinkedinIn className="w-5 h-5" />
    },
    {
      name: 'tiktok',
      href: 'https://www.tiktok.com/@creativo_code',
      icon: <FaTiktok className="w-5 h-5" />
    }
  ];

  return (
    <>
      <section
        id="desktop-hero"
        className="relative w-full h-[85dvh] hidden md:flex flex-col justify-center items-center overflow-hidden bg-[#141414]"
      >
        {/* Decorative grid pattern in background */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Main typographic container */}
        <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl px-6 text-center">
          
          {/* Sub-tag indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 py-1.5 px-4 bg-white/5 border border-white/10 rounded-full text-sm font-semibold tracking-wide text-[#cdb0e4] backdrop-blur-md shadow-inner"
          >
            Creative Design & Development Agency
          </motion.div>

          {/* Headline */}
          <h1 className="relative font-display text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-none flex flex-col items-center gap-y-3 select-none">
            {/* Line 1: We + Selected word */}
            <div className="relative inline-flex flex-row items-center justify-center whitespace-nowrap gap-x-4">
              <span className="text-white whitespace-nowrap">We</span>
              <div className="relative inline-block px-2 py-1 mx-1 overflow-visible whitespace-nowrap">
                <AnimatePresence>
                  {isSelecting && (
                    <motion.div
                      initial={{ width: 0, left: 0 }}
                      animate={{ width: "100%" }}
                      exit={{ width: 0, left: "100%" }}
                      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                      className="absolute inset-y-0 bg-custom-primaryPurple/35 border border-custom-selectorBorder/80 rounded-md z-0"
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10 text-[#cdb0e4] font-extrabold select-none whitespace-nowrap">
                  {words[index].highlight}
                </span>
              </div>
            </div>

            {/* Line 2: sentence end */}
            <div className="relative inline-flex flex-row items-center justify-center whitespace-nowrap">
              <span className="text-white font-medium whitespace-nowrap">
                {words[index].end}
              </span>
            </div>
          </h1>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 max-w-2xl text-lg md:text-xl text-stone-400 font-light leading-relaxed"
          >
            We build premium, interactive digital solutions. By merging design, engineering, motion, and storytelling, we elevate your product into an online masterpiece.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects-section"
              className="w-full sm:w-auto px-8 py-4 bg-custom-primaryPurple hover:bg-custom-primaryPurple/80 transition-all duration-300 text-white font-semibold rounded-full text-base tracking-wide shadow-lg shadow-custom-primaryPurple/20 text-center"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 text-white font-semibold rounded-full text-base tracking-wide text-center"
            >
              Get In Touch
            </a>
          </motion.div>

        </div>

        {/* Floating corner indicator boxes to mimic standard Figma editor dashboard */}
        <div className="absolute top-20 left-10 w-2 h-2 border border-white/20"></div>
        <div className="absolute top-20 right-10 w-2 h-2 border border-white/20"></div>
        <div className="absolute bottom-20 left-10 w-2 h-2 border border-white/20"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 border border-white/20"></div>

        {/* Floating Social Media Icons (Bottom Right) */}
        <div className="absolute right-6 sm:right-16 bottom-8 sm:bottom-12 z-20" id="sm-icon-container">
          <SelectorBox borderColor="border-custom-selectorBorder/40" className="p-0.5">
            <div className="flex items-center gap-x-4 bg-white/5 border border-white/5 py-2 px-4 rounded-full backdrop-blur-md">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-stone-400 hover:text-white transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </SelectorBox>
        </div>
      </section>

      {/* Mobile Hero */}
      <section
        id="mobile-hero"
        className="flex md:hidden flex-col justify-between w-full min-h-[82dvh] px-6 pt-12 pb-8 bg-[#141414] text-white"
      >
        {/* Top Text */}
        <div className="mt-4">
          <p className="text-stone-400 text-lg font-semibold tracking-tight">
            We don't just develop Websites
          </p>
        </div>

        {/* Headings */}
        <div className="flex flex-col mt-6 font-display font-bold">
          <h1 className="text-[12dvw] xs:text-5xl tracking-tight leading-[1.1] text-white">
            We Make
          </h1>
          <h1 className="text-[12dvw] xs:text-5xl tracking-tight leading-[1.1] text-white">
            creative
          </h1>
          <h1 className="text-[12dvw] xs:text-5xl tracking-tight leading-[1.1] bg-gradient-to-r from-[#FF0055] via-[#a855f7] to-[#8354fd] bg-clip-text text-transparent w-fit">
            Experiences
          </h1>
        </div>

        {/* Subtitle / Paragraph */}
        <div className="flex flex-col gap-y-1 font-medium text-base tracking-wide text-[#cdb0e4] mt-6">
          <p>Crafting Excellence in Every Line of Code;</p>
          <p>Welcome to CreativoCode.</p>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#FF0055] text-white font-bold rounded-full text-lg tracking-wide hover:bg-[#ff1f6d] active:scale-95 transition-all duration-300 shadow-lg shadow-[#FF0055]/20"
          >
            Let's talk
          </Link>
        </div>

        {/* Social Icons at the bottom */}
        <div className="flex items-center gap-x-6 mt-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#FF0055] transition-colors duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
