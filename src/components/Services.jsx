import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';

// Mobile Accordion Item
const MobileServiceItem = ({ title, list, id, currentAccordion, setCurrentAccordion }) => {
  const isOpen = currentAccordion === id;

  return (
    <div
      className="bg-[#1c1c1e] rounded-xl py-5 px-5 flex flex-col cursor-pointer transition-all duration-300"
      onClick={() => setCurrentAccordion(isOpen ? null : id)}
    >
      <div className="flex flex-row flex-nowrap justify-between items-center">
        <h4 className="font-display font-medium text-white text-2xl">{title}</h4>
        <motion.span
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.5 }}
          className="text-white flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="w-6 h-6"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="text-stone-400 text-sm text-left overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="pt-6 text-xl"
            >
              <ol className="flex flex-col gap-y-3 font-display">
                {list.map((item) => (
                  <li key={item} className="text-[#C1BCFA] flex items-center gap-2">
                    <span className="bg-[#C1BCFA] w-2 h-2 rounded-full inline-block"></span>
                    {item}
                  </li>
                ))}
              </ol>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Desktop Service Accordion Item with Word Cycle Animation
const DesktopServiceItem = ({ title, list, id, hoveringService, setHoveringService, showLastLine }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.2 });

  const [displayText, setDisplayText] = useState(title);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitionDone, setIsTransitionDone] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isHovered) {
      setIsTransitionDone(false);
      let s = 0;
      intervalId = setInterval(() => {
        if (s < list.length) {
          setDisplayText(list[s]);
          s++;
        } else {
          clearInterval(intervalId);
          setIsTransitionDone(true);
          setDisplayText(title);
        }
      }, 300);
    } else {
      setDisplayText(title);
      setIsTransitionDone(false);
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isHovered, list, title]);

  return (
    <div
      ref={itemRef}
      className="flex flex-col pt-5 lg:pt-10 items-start justify-start relative w-full"
      onMouseEnter={() => {
        if (isAnimationDone) {
          setHoveringService(id);
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        setHoveringService(0);
        setIsHovered(false);
      }}
    >
      <div className="lg:pb-2 overflow-hidden h-auto w-full">
        {isInView && (
          <div className="flex flex-col gap-y-3 w-full">
            {/* Title Split Slide Up animation */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
              onAnimationComplete={() => setIsAnimationDone(true)}
            >
              <span
                className={`bg-clip-text text-transparent inline-block font-display font-bold pb-1 text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl transition-all duration-300 ${
                  hoveringService === 0
                    ? 'bg-white'
                    : hoveringService === id
                    ? 'bg-gradient-to-r from-[#ff4885] to-[#8154ff]'
                    : 'bg-[#2D2B4F]'
                }`}
              >
                <h5>{displayText}</h5>
              </span>
            </motion.div>

            {/* Sub-items List (fades in after cycle finishes) */}
            <ul className="flex flex-row gap-6 flex-wrap font-display">
              {list.map((item, idx) => (
                <li key={item}>
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * idx, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <motion.div
                      animate={{ opacity: hoveringService === id && isTransitionDone ? 1 : 0 }}
                      transition={{ duration: isTransitionDone ? 0.4 : 0.1 }}
                      className="flex flex-row gap-2 items-center"
                    >
                      <span className="bg-[#C1BCFA] w-2 lg:w-2.5 h-2 lg:h-2.5 aspect-square rounded-full"></span>
                      <p className="text-[#C1BCFA] text-sm lg:text-base">{item}</p>
                    </motion.div>
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {showLastLine && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? "100%" : "0%" }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="h-[1px] w-full bg-stone-400/50 flex mt-6 lg:mt-8"
        />
      )}
    </div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const isTitleInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Scroll animations for expanding margins and padding (Desktop ONLY)
  const marginLeftRight = useTransform(scrollY, [300, 1000], ["3rem", "0rem"]);
  const paddingLeftRight = useTransform(scrollY, [300, 1000], ["0rem", "3rem"]);
  const backgroundColor = useTransform(scrollY, [1000, 1600], ["#191937", "#1D1C2C00"]);

  const [hoveringService, setHoveringService] = useState(0);
  const [currentAccordion, setCurrentAccordion] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Mobile Render
  if (isMobile) {
    return (
      <section className="flex flex-col px-5 xs:px-10 w-full h-auto mb-10 mt-20" id="services-section">
        <h2 className="font-display text-[#ff0055] text-3xl">Services</h2>
        <h3 className="font-display text-white text-5xl tracking-tighter leading-10 mt-3 mb-10">
          How do we help our clients?
        </h3>
        <div className="flex flex-col gap-3">
          {servicesData.map((service) => (
            <MobileServiceItem
              key={service.id}
              title={service.name}
              list={service.list}
              id={service.id}
              currentAccordion={currentAccordion}
              setCurrentAccordion={setCurrentAccordion}
            />
          ))}
        </div>
      </section>
    );
  }

  // Desktop Render
  return (
    <div ref={containerRef} className="w-full h-auto hidden md:flex overflow-hidden mt-[15dvh]">
      <motion.div
        style={{
          backgroundColor,
          marginLeft: marginLeftRight,
          marginRight: marginLeftRight,
          paddingLeft: paddingLeftRight,
          paddingRight: paddingLeftRight
        }}
        className="flex flex-col w-full pt-[15dvh] rounded-t-3xl pb-40 min-h-screen xl:min-h-[140dvh]"
      >
        {/* Small Topic Tag */}
        <div className="text-2xl flex flex-row gap-1.5 justify-start items-center text-custom-sectionTopicColor px-10 lg:px-24">
          <span className="h-2 rounded-md w-2 bg-custom-sectionTopicColor"></span>
          <h2 className="font-display">Services</h2>
        </div>

        {/* Title Split Word Header */}
        <div className="px-10 lg:px-24 mt-5">
          <div className="text-white text-4xl lg:text-5xl tracking-tight leading-[4rem] flex flex-col z-10 items-start gap-0">
            {isTitleInView && (
              <div className="overflow-hidden h-14 lg:h-14 flex z-10 relative mb-10">
                <motion.h3
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
                  className="font-display font-semibold"
                >
                  How do we help Our Clients?
                </motion.h3>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Accordions List */}
        <div className="px-10 lg:px-24 mt-8">
          <div className="flex flex-col w-full">
            {servicesData.map((service, index) => (
              <DesktopServiceItem
                key={service.id}
                title={service.name}
                list={service.list}
                id={service.id}
                hoveringService={hoveringService}
                setHoveringService={setHoveringService}
                showLastLine={servicesData.length - 1 > index}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
