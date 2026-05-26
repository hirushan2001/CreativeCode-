import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Individual Tech Card with V-shaped vertical translation relative to center
const TechCard = ({ name, iconUrl, yOffset, index }) => {
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
      className="flex flex-col justify-center items-center bg-[#181818] border border-[#242424] rounded-[1.75rem] aspect-square hover:border-[#FF0055]/30 hover:bg-[#1e1e1e] hover:shadow-lg transition-all duration-300 select-none group w-28 h-28"
    >
      <div className="w-18 h-18 flex items-center justify-center">
        <img
          src={iconUrl}
          alt={name}
          className={`w-18 h-18 object-contain group-hover:scale-110 transition-transform duration-300 ${
            name === "Framer Motion" ? "invert" : ""
          }`}
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};

const Technologies = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Base vertical translation from 100px to -100px across viewport scroll
  const yOffset = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const techs = [
    {
      name: "Nuxt",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
    },
    {
      name: "Blender",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg"
    },
    {
      name: "Webflow",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg"
    },
    {
      name: "Node.js",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "React",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
      name: "Vue",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
    },
    {
      name: "Next.js",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
    },
    {
      name: "Figma",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
    },
    {
      name: "Svelte",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg"
    },
    {
      name: "Framer Motion",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
    },
    {
      name: "Tailwind CSS",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
      name: "WordPress",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg"
    },
    {
      name: "MongoDB",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
    },
    {
      name: "Docker",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    }
  ];

  // Mobile Render
  if (isMobile) {
    return (
      <section className="w-full h-auto my-2 px-5 xs:px-10 pt-20">
        <h2 className="font-display text-[#ff0055] text-3xl">Tools</h2>
        <h3 className="font-display text-white text-5xl tracking-tighter leading-10">
          Technologies that we use
        </h3>
        <div className="flex flex-wrap flex-row gap-5 justify-center mt-20">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="flex justify-center items-center bg-[#181818] border border-[#242424] rounded-[1.5rem] w-24 h-24 xs:w-28 xs:h-28"
            >
              <img
                src={tech.iconUrl}
                alt={tech.name}
                className={`w-12 h-12 xs:w-14 xs:h-14 object-contain ${
                  tech.name === "Framer Motion" ? "invert" : ""
                }`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="h-[120vh] w-full px-10 flex flex-col justify-center items-center mt-40 bg-[#141414]">
      {/* Small header / topics */}
      <div className="text-2xl flex flex-row gap-1.5 justify-start items-center text-custom-sectionTopicColor select-none">
        <span className="h-2 rounded-md w-2 bg-custom-sectionTopicColor"></span>
        <h2 className="font-display">Technologies</h2>
      </div>

      {/* Toolbox Header */}
      <h3 ref={titleRef} className="text-white text-6xl sm:text-7xl lg:text-8xl mt-5 font-display font-bold leading-tight select-none text-center">
        Our tech <br /> toolbox
      </h3>

      {/* Grid containing chevron speed offset icons */}
<div className="grid grid-rows-2 grid-cols-7 mt-32 gap-y-6 lg:gap-y-10 xl:gap-y-12 gap-x-8 lg:gap-x-12 xl:gap-x-16">
        {techs.map((tech, idx) => (
          <TechCard
            key={tech.name}
            name={tech.name}
            iconUrl={tech.iconUrl}
            yOffset={yOffset}
            index={idx + 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
