import React from 'react';
import Clock from './Clock';

const ContactSection = () => {
  return (
    <section className="w-full bg-[#141414] pt-32 pb-32 overflow-hidden relative flex flex-col items-center">
      
      {/* Main Content Grid (Clock + Contact Form Details) - Rendered First */}
      <div className="max-w-4xl w-full px-6 flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24 relative z-10">
        
        {/* Clock Portal */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#FF0055] p-6 shadow-2xl shadow-[#FF0055]/20 flex flex-col justify-center items-center relative">
          <div className="w-full h-full relative">
            <Clock />
          </div>
          {/* Decorative labels */}
          <div className="absolute -bottom-8 flex flex-col items-center text-center select-none">
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
            <a
              href="#contact"
              className="bg-[#FF0055] hover:bg-[#ff1f6d] hover:scale-105 active:scale-95 transition-all duration-300 text-white font-bold rounded-full text-xl px-10 py-4 flex items-center justify-center cursor-pointer shadow-lg shadow-[#FF0055]/30 select-none"
            >
              Say Hello
            </a>
            <a
              href="#projects"
              className="border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 text-white font-bold rounded-full text-xl px-8 py-4 flex items-center justify-center cursor-pointer select-none"
            >
              View Work
            </a>
          </div>
        </div>

      </div>

    </section>
  );
};

export default ContactSection;

