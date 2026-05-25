import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Individual Tech Card with V-shaped vertical translation relative to center
const TechCard = ({ name, svg, yOffset, index }) => {
  const cardRef = useRef(null);
  
  // Total tools is 14. Center columns are 4 (first row) and 11 (second row).
  // Calculate distance from center column
  const centerCol = index < 8 ? 4 : 11;
  const distance = Math.abs(index - centerCol);

  // Speed factor based on distance from center
  let speedFactor = 0.1; // Column 4 & 11 (distance 0)
  if (distance === 3) {
    speedFactor = 0.7; // Column 1 & 7
  } else if (distance === 2) {
    speedFactor = 0.5; // Column 2 & 6
  } else if (distance === 1) {
    speedFactor = 0.3; // Column 3 & 5
  }

  // Multiply section scroll offset by speed factor
  const cardY = useTransform(yOffset, (val) => val * speedFactor);

  return (
    <motion.div
      ref={cardRef}
      style={{ y: cardY }}
      className="flex flex-col justify-center items-center p-6 border border-white/5 bg-white/2 rounded-2xl aspect-square gap-y-4 hover:border-custom-selectorBorder hover:bg-white/5 hover:shadow-lg transition-colors duration-300 select-none group w-28 h-28"
    >
      <div className="w-12 h-12 flex items-center justify-center text-white">
        {svg}
      </div>
    </motion.div>
  );
};

const Technologies = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  
  // Check if title is in view for text split slide up animation
  const isTitleInView = useInView(titleRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Base vertical translation from 100px to -100px across viewport scroll
  const yOffset = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const techs = [
    {
      name: "Nuxt",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#00DC82] fill-current">
          <path d="M12 3.5l1.6 2.8 1.4-2.5L20 12.5H4L9 3.5l3 5.3zm-5.4 12.8L12 9.5l3.2 5.6c-.6.6-1.4.9-2.2.9H9.2c-.8 0-1.6-.3-2.2-.9z"/>
        </svg>
      )
    },
    {
      name: "Blender",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#e87d0d] fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.5 11.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm-5-3c-.8 0-1.5-.7-1.5-1.5S8.7 7.5 9.5 7.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
        </svg>
      )
    },
    {
      name: "Webflow",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#4353ff] fill-current">
          <path d="M12.42 20.65l5.24-11.83.6 1.77.29 2.55v7.51h5.45V8.5h-5.26l-3.3 8.4-1.92-5.4.15-3H8.38l-4.14 8.7 1.84.45h3.08v3h3.26z"/>
        </svg>
      )
    },
    {
      name: "Node.js",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#339933] fill-current">
          <path d="M12 2L4 6.5v9L12 20l8-4.5v-9L12 2zm6 12.3l-6 3.4-6-3.4V7.7l6-3.4 6 3.4v6.6zM9.5 9v4.5l2.5 1.5V11L9.5 9z"/>
        </svg>
      )
    },
    {
      name: "React",
      svg: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-10 h-10 text-[#61dafb] fill-none stroke-current" strokeWidth="1.2">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g>
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      )
    },
    {
      name: "Vue",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#41b883] fill-current">
          <path d="M12 19.5L20.8 4.2h-3.4L12 12.1l-5.4-7.9H3.2L12 19.5z"/>
        </svg>
      )
    },
    {
      name: "Next.js",
      svg: (
        <svg viewBox="0 0 180 180" className="w-10 h-10 text-white fill-current">
          <path d="M90 0a90 90 0 1 0 90 90A90 90 0 0 0 90 0M143.6 142l-51-65.7V125H80.5V59.4h11.9l49 63.3V59.4h12.2V142z"/>
        </svg>
      )
    },
    {
      name: "Figma",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
          <path d="M8 2c2.2 0 4 1.8 4 4v4h-4c-2.2 0-4-1.8-4-4s1.8-4 4-4z" className="text-[#F24E1E]"/>
          <path d="M16 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" className="text-[#FF7262]"/>
          <path d="M12 10h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4v-8z" className="text-[#1ABCFE]"/>
          <path d="M12 14v4c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4h4z" className="text-[#0ACF83]"/>
          <path d="M8 10c2.2 0 4 1.8 4 4v-4H8z" className="text-[#A259FF]"/>
        </svg>
      )
    },
    {
      name: "Svelte",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#ff3e00] fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.65 14.35H10.5V10.5h3.15v5.85z"/>
        </svg>
      )
    },
    {
      name: "Framer Motion",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-white fill-current">
          <path d="M0 0h12l12 12H12L0 24V12h12L0 0z"/>
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#38bdf8] fill-current">
          <path d="M12 6.09c-2.67 0-4.33 1.33-5 4 1-.67 2.17-.5 3.5.5.94.7 1.8 1.57 3.52 1.57 2.67 0 4.33-1.33 5-4-1 .67-2.17.5-3.5-.5-.94-.7-1.8-1.57-3.52-1.57zm-5 5.91c-2.67 0-4.33 1.33-5 4 1-.67 2.17-.5 3.5.5.94.7 1.8 1.57 3.52 1.57 2.67 0 4.33-1.33 5-4-1 .67-2.17.5-3.5-.5-.94-.7-1.8-1.57-3.52-1.57z"/>
        </svg>
      )
    },
    {
      name: "WordPress",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#21759b] fill-current">
          <path d="M12 .3C5.55.3.35 5.5.35 12S5.55 23.7 12 23.7 23.65 18.5 23.65 12c0-6.5-5.2-11.7-11.65-11.7zm5.55 17.5c-.1.35-.45.6-.9.6h-.05l-2.65-8.25-1.7 5.15 1.15 3.5H9.6L6.55 8.7h1.4l2.1 6.55 1.55-4.85-1.15-3.5h3.9l2.15 6.55zM12 1.8c5.6 0 10.2 4.6 10.2 10.2 0 1.25-.25 2.45-.7 3.55l-3.3-9.5c.35 0 .65.05.9.05.9 0 1.4-.45 1.4-1 0-.6-.6-1-1.6-1H14.1c-1 0-1.6.4-1.6 1 0 .55.5 1 .95 1 .25 0 .55-.05.75-.05l-1.9 5.5-1.9-5.5c.2 0 .5.05.75.05.45 0 .95-.45.95-1 0-.6-.5-1-1.5-1H5.45c-1 0-1.55.4-1.55 1 0 .55.5 1 .95 1 .3 0 .6-.05.85-.05l-3.35 9.5C1.85 14.25 1.8 13.15 1.8 12c0-5.6 4.6-10.2 10.2-10.2z"/>
        </svg>
      )
    },
    {
      name: "MongoDB",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#4db33d] fill-current">
          <path d="M12 2C9.5 5.5 8 9.5 8 13.5c0 3.5 1.5 6.5 4 8.5 2.5-2 4-5 4-8.5 0-4-1.5-8-4-11.5zm.5 17.5v-13h1v13h-1z"/>
        </svg>
      )
    },
    {
      name: "Docker",
      svg: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#2496ed] fill-current">
          <path d="M13.962 8.475h-2.444V6.03h2.444v2.445zM11.233 8.475H8.79V6.03h2.444v2.445zm0-2.731H8.79V3.3h2.444v2.444zm2.729 0h-2.444V3.3h2.444v2.444zm2.73 2.731H14.25V6.03h2.443v2.445zm-8.25 2.731H6.059V8.475h2.442v2.444zm2.73 0H8.79V8.475h2.444v2.444zm2.73 0h-2.444V8.475h2.444v2.444zm2.73 0H14.25V8.475h2.443v2.444zm2.728 0h-2.442V8.475h2.442v2.444zM22.347 12.4a8.04 8.04 0 0 0-4.015-1.258h-.129c-.066.002-.132.007-.197.012v2.408h-2.445V16h2.445c2.474 0 4.475-2.001 4.475-4.475 0-.462-.058-.91-.17-1.332L22.347 12.4z"/>
        </svg>
      )
    }
  ];

  return (
    <section ref={containerRef} className="h-[120vh] w-full px-10 flex flex-col justify-center items-center mt-40 bg-[#141414]">
      {/* Small header / topics */}
      <div className="text-2xl flex flex-row gap-1.5 justify-start items-center text-custom-sectionTopicColor select-none">
        <span className="h-2 rounded-md w-2 bg-custom-sectionTopicColor"></span>
        <h2 className="font-display">Technologies</h2>
      </div>

      {/* Toolbox Split Word Header */}
      <div ref={titleRef} className="text-white text-8xl lg:text-9xl mt-5 font-display font-bold leading-none select-none">
        <div className="overflow-hidden h-24 lg:h-32 flex justify-center z-10 relative text-center">
          {isTitleInView && (
            <motion.h3
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
            >
              Our tech
            </motion.h3>
          )}
        </div>
        <div className="overflow-hidden h-24 lg:h-32 flex justify-center z-10 relative text-center mt-1">
          {isTitleInView && (
            <motion.h3
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
            >
              toolbox
            </motion.h3>
          )}
        </div>
      </div>

      {/* Grid containing chevron speed offset icons */}
      <div className="grid grid-rows-2 grid-cols-7 mt-20 gap-y-4 lg:gap-y-6 xl:gap-y-8 gap-x-6 lg:gap-x-10 xl:gap-x-12">
        {techs.map((tech, idx) => (
          <TechCard
            key={tech.name}
            name={tech.name}
            svg={tech.svg}
            yOffset={yOffset}
            index={idx + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
