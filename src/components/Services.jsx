import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const servicesData = [
    {
      id: 1,
      name: "UI/UX Design",
      list: ["Figma", "Prototyping", "Wire-frame", "Creative Design"]
    },
    {
      id: 2,
      name: "Web Development",
      list: ["Backend development", "Frontend Development", "No Code Development", "Maintenance"]
    },
    {
      id: 3,
      name: "Brand Identity Design",
      list: ["Logo Design", "Brand Guideline", "Typography", "Color Palette"]
    },
    {
      id: 4,
      name: "Product Engineering",
      list: ["E-commerce Solutions", "MVP Development", "SaaS Development"]
    }
  ];

  return (
    <section 
      id="services-section"
      className="mx-6 sm:mx-12 md:mx-16 lg:mx-24 mt-20 rounded-t-3xl pt-20 pb-40 px-10 lg:px-24"
      style={{ backgroundColor: 'rgba(25, 25, 55, 1)' }}
    >
      {/* Small Section Header */}
      <div className="text-2xl flex flex-row gap-1.5 justify-start items-center text-custom-sectionTopicColor mb-10">
        <span className="h-2 rounded-md w-2 bg-custom-sectionTopicColor"></span>
        <h2 className="font-display font-medium tracking-wide">Services</h2>
      </div>

      {/* Main Title */}
      <div className="mb-16">
        <h3 className="font-display text-white text-4xl lg:text-5xl tracking-tight font-semibold">
          How do we help Our Clients?
        </h3>
      </div>

      {/* Accordion / Services list */}
      <div className="flex flex-col">
        {servicesData.map((service, index) => {
          const isHovered = hoveredId === service.id;
          return (
            <div
              key={service.id}
              className="flex flex-col pt-8 pb-6 border-b border-stone-500/30 relative cursor-pointer group"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-y-4">
                {/* Title */}
                <h4 className={`font-display text-3xl lg:text-4xl transition-colors duration-300 ${
                  isHovered ? 'text-[#cdb0e4]' : 'text-white'
                }`}>
                  {service.name}
                </h4>

                {/* Arrow indicator */}
                <motion.div
                  animate={{ rotate: isHovered ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block text-stone-400 group-hover:text-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </motion.div>
              </div>

              {/* Expanding tags area */}
              <motion.div
                initial={false}
                animate={{
                  height: isHovered ? 'auto' : 0,
                  opacity: isHovered ? 1 : 0,
                  marginTop: isHovered ? 16 : 0
                }}
                transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
                className="overflow-hidden flex flex-wrap gap-2"
              >
                {service.list.map((tag) => (
                  <span
                    key={tag}
                    className="py-1.5 px-4 bg-white/5 border border-white/10 rounded-full text-sm text-[#e6c3f1] font-light shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Animated bottom highlight border */}
              <motion.div
                className="absolute bottom-0 left-0 h-[1.5px] bg-[#cdb0e4]"
                initial={{ width: 0 }}
                animate={{ width: isHovered ? '100%' : 0 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
