import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, cubicBezier } from 'framer-motion';
import Clock from './Clock';

// 1. Text Blast / Letter Blasting Component
const BlastText = ({ scrollYProgress, firstTextOpacity, firstTextRotation, textBlast, blastAnimationEnd }) => {
  const [hasBlasted, setHasBlasted] = useState(false);

  // Listen to scrollYProgress change to hide the text once blasted
  useMotionValueEvent(scrollYProgress, "change", (val) => {
    if (val > blastAnimationEnd) {
      setHasBlasted(true);
    } else {
      setHasBlasted(false);
    }
  });

  // Calculate rotation speeds for specific letters
  const f = useTransform(firstTextRotation, val => 0.5 * val);
  const negF = useTransform(firstTextRotation, val => -0.5 * val);
  const g = useTransform(firstTextRotation, val => 0.7 * val);
  const j = useTransform(firstTextRotation, val => 0.3 * val);
  const negJ = useTransform(firstTextRotation, val => -0.3 * val);

  const transitionTimes = [0, 0.9, 1];
  const blastTransition = { duration: 1.5, times: transitionTimes };

  return (
    <motion.div
      style={{ opacity: hasBlasted ? 0 : 1 }}
      className="xl:text-10xl lg:text-9xl text-8xl -translate-y-10 flex flex-row gap-x-10 font-display font-extrabold uppercase tracking-widest leading-none select-none"
    >
      {/* Paragraph 1: "Break" */}
      <p className="flex flex-nowrap">
        <motion.span
          style={{ rotate: negF }}
          animate={textBlast ? { x: [null, "25dvw", "-15dvw"], scale: [null, 1.2, 2] } : { x: 0 }}
          transition={blastTransition}
          className="shadow-outline-text text-[#141414] text-center bg-blend-hue inline-block"
        >
          B
        </motion.span>
        <motion.span
          style={{ rotate: g }}
          animate={textBlast ? { x: [null, "23dvw", "-15dvw"], y: [null, "15dvh", "40dvh"], scale: [null, 1.2, 2] } : { x: 0 }}
          transition={blastTransition}
          className="shadow-outline-text text-[#141414] text-center bg-blend-hue inline-block"
        >
          r
        </motion.span>
        <motion.span
          style={{ rotate: j }}
          animate={textBlast ? { x: [null, "25dvw", "-40dvw"], y: [null, "20dvh", "40dvh"], scale: [null, 1.2, 2] } : { x: 0 }}
          transition={blastTransition}
          className="shadow-outline-text text-[#141414] text-center bg-blend-hue inline-block"
        >
          e
        </motion.span>
        <motion.span
          style={{ rotate: negF }}
          animate={textBlast ? { x: [null, "10dvw", "-5dvw"], y: [null, "-16dvh", "-50dvh"], scale: [null, 1.2, 2] } : { x: 0 }}
          transition={blastTransition}
          className="shadow-outline-text text-[#141414] text-center bg-blend-hue inline-block"
        >
          a
        </motion.span>
        <motion.span
          style={{ rotate: g }}
          animate={textBlast ? { x: [null, "11dvw", "11dvw"], y: [null, "-25dvh", "-50dvh"], scale: [null, 1.2, 2] } : { x: 0 }}
          transition={blastTransition}
          className="shadow-outline-text text-[#141414] text-center bg-blend-hue inline-block"
        >
          k
        </motion.span>
      </p>

      {/* Paragraph 2: "the" */}
      <p className="flex flex-nowrap">
        <motion.span
          style={{ rotate: negJ }}
          animate={textBlast ? { x: [null, "-1dvw", "0dvw"], y: [null, "5dvh", "60dvh"], scale: [null, 1.2, 2] } : { x: 0 }}
          transition={blastTransition}
          className="shadow-outline-text text-[#141414] text-center bg-blend-hue inline-block"
        >
          t
        </motion.span>
        <motion.span
          style={{ rotate: f }}
          animate={textBlast ? { x: [null, "-1dvw", "40dvw"], y: [null, "-7dvh", "-40dvh"], scale: [null, 1.2, 2] } : { x: 0 }}
          transition={blastTransition}
          className="shadow-outline-text text-[#141414] text-center bg-blend-hue inline-block"
        >
          h
        </motion.span>
        <motion.span
          style={{ rotate: g }}
          animate={textBlast ? { x: [null, "-5dvw", "30dvw"], y: [null, "6dvh", "50dvh"], scale: [null, 1.2, 2] } : { x: 0 }}
          transition={blastTransition}
          className="shadow-outline-text text-[#141414] text-center bg-blend-hue inline-block"
        >
          e
        </motion.span>
      </p>

      {/* Paragraph 3: "Mold" */}
      <p className="flex flex-nowrap">
        <motion.span
          style={{ rotate: negJ }}
          animate={textBlast ? { x: [null, "-10dvw", "5dvw"], y: [null, "-16dvh", "-50dvh"], scale: [null, 1.2, 2] } : { x: 0 }}
          transition={blastTransition}
          className="shadow-outline-text text-[#141414] text-center bg-blend-hue inline-block"
        >
          M
        </motion.span>
        <motion.span
          style={{ rotate: f }}
          animate={textBlast ? { x: [null, "-18dvw", "0dvw"], y: [null, "15dvh", "75dvh"], scale: [null, 1.2, 2] } : { x: 0 }}
          transition={blastTransition}
          className="shadow-outline-text text-[#141414] text-center bg-blend-hue inline-block"
        >
          o
        </motion.span>
        <motion.span
          style={{ rotate: g }}
          animate={textBlast ? { x: [null, "-22dvw", "20dvw"], y: [null, "0dvh", "30dvh"], scale: [null, 1.2, 2] } : { x: 0 }}
          transition={blastTransition}
          className="shadow-outline-text text-[#141414] text-center bg-blend-hue inline-block"
        >
          l
        </motion.span>
        <motion.span
          style={{ rotate: negJ }}
          animate={textBlast ? { x: [null, "-22dvw", "20dvw"], y: [null, "3dvh", "-10dvh"], scale: [null, 1.2, 2] } : { x: 0 }}
          transition={blastTransition}
          className="shadow-outline-text text-[#141414] text-center bg-blend-hue inline-block"
        >
          d
        </motion.span>
      </p>
    </motion.div>
  );
};

// 2. Clock Portal Mask / Container
const ClockPortal = ({ scrollYProgress, blastAnimationEnd, clockVisibility, clockColor, clockScale, clockTextOpacity, clockTranslateX }) => {
  const [showHands, setShowHands] = useState(false);

  // Monitor scroll progression to mount clock hands when portal begins showing
  useMotionValueEvent(scrollYProgress, "change", (val) => {
    if (val > blastAnimationEnd - 0.1) {
      setShowHands(true);
    } else {
      setShowHands(false);
    }
  });

  return (
    <motion.div
      style={{
        scale: clockScale,
        x: clockTranslateX,
        opacity: clockVisibility
      }}
      className="shape-outside-circle w-fit rounded-full opacity-0 z-50 flex flex-col justify-end items-center relative"
    >
      {/* Circle container */}
      <div className="w-[40dvh] xl:w-[25dvw] flex justify-center">
        <motion.div
          style={{ backgroundColor: clockColor }}
          className="w-full aspect-square rounded-full shadow-[0_0_85px_rgba(255,0,85,0.15)] flex items-center justify-center p-6"
        >
          <AnimatePresence>
            {showHands && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full relative"
              >
                <Clock />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Floating clock subtext absolute container */}
      <div className="absolute translate-y-[250%] pointer-events-none select-none">
        <motion.div
          style={{ y: "-15vh", opacity: clockTextOpacity }}
          className="relative whitespace-nowrap opacity-0 w-full text-center text-white flex flex-col gap-2 xl:gap-3"
        >
          <span className="text-5xl xl:text-6xl font-display font-bold">
            Time is ticking...
          </span>
          <span className="text-xl xl:text-2xl text-[#cdb0e4] font-light">
            ( keep scrolling )
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

// 3. Main Page wrapper
const BreakMold = () => {
  const milestone = {
    breakTheMoldTextAppearing: { show: 0.5, hide: 0.7 },
    breakTheMoldTextBlastTrigger: { start: 0.2, end: 0.55 },
    breakTheMoldTextAnimation: { start: 0.2, end: 0.4 },
    startAppearingClock: { hidden: 0.5, visible: 0.55 },
    clockColorChange: { fromRed: 0.8, toPurple: 1.0 },
    clockScalingUpp: { scaleUp: 0.48, waitUntil: [0.58, 0.8], scaleDown: 0.98 },
    clockTextAppearing: { hide: 0.6, showUntil: [0.63, 0.8], hideAgain: 0.85 },
    dragClockToLeft: { start: 0.8, end: 0.96 },
    showContactText: { start: 0.9, end: 1 }
  };

  const containerRef = useRef(null);
  
  // Track scroll within this full-page 600vh portal block
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [textBlast, setTextBlast] = useState(false);
  const [isContactDisabled, setIsContactDisabled] = useState(true);

  // Monitor scroll velocity and milestones
  useMotionValueEvent(scrollYProgress, "change", (val) => {
    const prev = scrollYProgress.getPrevious();
    const diff = val - prev;

    // Trigger letters blast on scroll direction down/up past boundaries
    if (val > milestone.breakTheMoldTextBlastTrigger.start && diff > 0) {
      setTextBlast(true);
    }
    if (val < milestone.breakTheMoldTextBlastTrigger.end && diff < 0) {
      setTextBlast(false);
    }

    // Toggle contact button interactive states
    if (val > milestone.showContactText.start) {
      setIsContactDisabled(false);
    } else {
      setIsContactDisabled(true);
    }
  });

  // Calculate transforms
  const clockVisibility = useTransform(scrollYProgress, [milestone.startAppearingClock.hidden, milestone.startAppearingClock.visible], [0, 1]);
  const textOpacity = useTransform(scrollYProgress, [milestone.breakTheMoldTextAppearing.show, milestone.breakTheMoldTextAppearing.hide], [1, 0]);
  const textRotation = useTransform(scrollYProgress, [milestone.breakTheMoldTextAnimation.start, milestone.breakTheMoldTextAnimation.end], [0, 180]);
  
  const clockColor = useTransform(scrollYProgress, [milestone.clockColorChange.fromRed, milestone.clockColorChange.toPurple], ["#FF0055", "#4200FF"]);
  const clockScale = useTransform(scrollYProgress, [milestone.clockScalingUpp.scaleUp, milestone.clockScalingUpp.waitUntil[0], milestone.clockScalingUpp.waitUntil[1], milestone.clockScalingUpp.scaleDown], [1.5, 2, 2, 1.5]);
  const clockTranslateY = useTransform(scrollYProgress, [milestone.clockScalingUpp.scaleUp, milestone.clockScalingUpp.waitUntil[0], milestone.clockScalingUpp.waitUntil[1], milestone.clockScalingUpp.scaleDown], ["15vh", "10vh", "10vh", "10vh"]);
  
  const clockTextOpacity = useTransform(scrollYProgress, [milestone.clockTextAppearing.hide, milestone.clockTextAppearing.showUntil[0], milestone.clockTextAppearing.showUntil[1], milestone.clockTextAppearing.hideAgain], [0, 1, 1, 0]);
  
  const easeInOut = cubicBezier(0.45, 0, 0.55, 1);
  const clockTranslateX = useTransform(scrollYProgress, [milestone.dragClockToLeft.start, milestone.dragClockToLeft.end], ["0dvw", "-85dvw"], {
    ease: easeInOut
  });

  const ctaOpacity = useTransform(scrollYProgress, [milestone.showContactText.start, milestone.showContactText.end], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full h-[600vh] bg-[#141414]">
      {/* Sticky layout wrapper */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Child 1: Background Outlined Text Blast */}
        <div className="stack-child grid place-content-center z-0 w-full h-full overflow-hidden">
          <BlastText
            scrollYProgress={scrollYProgress}
            firstTextOpacity={textOpacity}
            firstTextRotation={textRotation}
            textBlast={textBlast}
            blastAnimationEnd={milestone.breakTheMoldTextBlastTrigger.end}
          />
        </div>

        {/* Child 2: Clock Portal Container */}
        <motion.div
          style={{ y: clockTranslateY, scale: 0.55 }}
          className="select-none pointer-events-none flex flex-col items-center gap-y-2 stack-child bg-blend-hue z-10"
        >
          <ClockPortal
            scrollYProgress={scrollYProgress}
            blastAnimationEnd={milestone.breakTheMoldTextBlastTrigger.end}
            clockVisibility={clockVisibility}
            clockColor={clockColor}
            clockScale={clockScale}
            clockTextOpacity={clockTextOpacity}
            clockTranslateX={clockTranslateX}
          />
        </motion.div>

        {/* Child 3: Reveal Final Contact Panel */}
        <div className="stack-child h-screen z-20 flex justify-center items-center flex-col pointer-events-none">
          <motion.div
            style={{ opacity: ctaOpacity }}
            className="flex flex-col gap-y-5 lg:gap-y-6 xl:gap-y-7 text-white max-w-2xl px-6 text-center items-center pointer-events-auto"
          >
            <p className="w-full text-center text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold tracking-tight leading-none">
              Still waiting <br /> to start?
            </p>
            <div className="flex flex-row justify-center items-end gap-5">
              <p className="text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold tracking-tight leading-none">
                Let's talk!
              </p>
            </div>
            
            <div className="w-full flex justify-center mt-6">
              <a
                href="#contact"
                className={`bg-[#FF0055] hover:bg-[#ff1f6d] active:scale-95 transition-all duration-300 text-white font-bold rounded-full text-xl h-12 px-6 lg:h-14 lg:px-8 lg:text-2xl xl:h-16 xl:px-10 xl:text-3xl flex items-center justify-center cursor-pointer shadow-lg shadow-[#FF0055]/30 ${
                  isContactDisabled ? "pointer-events-none opacity-50" : ""
                }`}
              >
                Say Hello
              </a>
            </div>
            <p className="text-xl text-[#cdb0e4] font-light max-w-md">
              Outpace competitors with captivating digital storytelling.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default BreakMold;
