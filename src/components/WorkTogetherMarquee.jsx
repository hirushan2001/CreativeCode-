import React from 'react';
import { motion } from 'framer-motion';

const WorkTogetherMarquee = () => {
  // Repeating marquee item structure
  const renderMarqueeItem = (key) => (
    <div key={key} className="inline-flex items-center gap-x-6 md:gap-x-10 mx-6 md:mx-10 select-none">
      <span>LET'S WORK TOGETHER!</span>
      <span className="inline-flex items-center justify-center bg-white text-[#141414] rounded-full w-14 h-14 md:w-20 md:h-20 align-middle shrink-0 group-hover:bg-[#FF0055] group-hover:text-white transition-colors duration-300">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-12 md:h-12 group-hover:rotate-45 transition-transform duration-300">
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
      </span>
    </div>
  );

  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-12 md:py-16 border-t border-white/5 bg-[#141414] cursor-pointer group select-none">
      <motion.div
        animate={{ x: [0, "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 60
        }}
        className="inline-flex items-center text-6xl md:text-8xl lg:text-[10rem] font-display font-black tracking-tighter text-white group-hover:text-[#cdb0e4] transition-colors duration-300 select-none w-fit"
      >
        {/* Render 10 items to ensure zero gaps on large monitors when translating by 50% */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => renderMarqueeItem(i))}
      </motion.div>
    </div>
  );
};

export default WorkTogetherMarquee;
