import React, { useRef } from 'react';
import Clock from './Clock';
import { Link } from './Router';
import { useScroll, useTransform, useSpring } from 'framer-motion';

const ContactSection = () => {
  const sectionRef = useRef(null);
  
  // Track scroll progress within this section to drive the animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Apply spring smoothing to the scroll progress to make clock rotation glide
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map smooth scroll progress of the section to rotation angle (0 to 360 degrees)
  const scrollRotation = useTransform(smoothProgress, [0.1, 0.9], [0, 360]);

  return (
    <section ref={sectionRef} className="w-full relative h-[250dvh] bg-[#141414] overflow-visible my-32 md:my-40">
      
      {/* Sticky container that locks in place inside the viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Main Content Grid (Clock + Contact Form Details) */}
        <div className="max-w-4xl w-full px-6 flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24 relative z-10">
          
          {/* Clock Portal */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#FF0055] p-6 shadow-2xl shadow-[#FF0055]/20 flex flex-col justify-center items-center relative my-16 md:my-8">
            <div className="w-full h-full relative">
              <Clock scrollRotation={scrollRotation} />
            </div>
            {/* Decorative labels */}
            <div className="absolute -bottom-8 flex flex-col items-center text-center select-none w-max">
              <h4 className="font-display font-bold text-white text-2xl">Time's ticking</h4>
              <p className="text-stone-500 text-sm mt-0.5">(Let's talk)</p>
            </div>
          </div>

          {/* Text and Call to Action */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-y-6 max-w-md mt-8 md:mt-0">
            <h2 className="font-display font-black text-white text-5xl md:text-6xl leading-tight">
              Still waiting <br />
              <span className="text-[#FF0055]">to start?</span>
            </h2>
            <p className="text-stone-400 font-light text-lg leading-relaxed">
              Outpace your competitors with premium design, interactive storytelling, and flawless execution.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Link
                href="/contact-us"
                className="bg-[#FF0055] hover:bg-[#ff1f6d] hover:scale-105 active:scale-95 transition-all duration-300 text-white font-bold rounded-full text-xl px-10 py-4 flex items-center justify-center cursor-pointer shadow-lg shadow-[#FF0055]/30 select-none"
              >
                Say Hello
              </Link>
              <Link
                href="/projects"
                className="border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 text-white font-bold rounded-full text-xl px-8 py-4 flex items-center justify-center cursor-pointer select-none"
              >
                View Work
              </Link>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;

