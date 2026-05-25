import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Clock = () => {
  const [time, setTime] = useState(null);
  const [clockRotating, setClockRotating] = useState(false);

  // Track absolute scroll position in pixels
  const { scrollY } = useScroll();

  useEffect(() => {
    const now = new Date();
    // Sweeps to current time + 360 deg on mount
    setTime({
      seconds: 6 * now.getSeconds() + 360,
      minutes: 6 * now.getMinutes() + 360,
      hours: 30 * now.getHours() + 360
    });
  }, []);

  // Set up scroll-linked transforms mapping scrollY (pixels) to rotation degrees
  const c = useTransform(scrollY, t => 0.036 * t + (time ? time.seconds - 216 : 0));
  const d = useTransform(scrollY, t => 0.0006 * t + (time ? time.minutes - 3.6 : 0));
  const h = useTransform(scrollY, t => 0.0000096 * t + (time ? time.hours - 0.0576 : 0));

  if (!time) return null;

  return (
    <div className="w-full h-full relative grid stack-parent place-items-center select-none pointer-events-none">
      {/* Center Pin */}
      <div className="w-5 h-5 stack-child bg-white rounded-full z-50"></div>

      {/* Hour Hand */}
      <motion.div
        animate={{ rotate: time.hours }}
        transition={{ duration: 6, ease: [0.25, 1, 0.5, 1] }}
        style={{ rotate: clockRotating ? h : time.hours }}
        className="w-[60%] aspect-square rounded-full stack-child z-[40] flex justify-center items-start"
      >
        <div className="bg-white h-[51%] w-3 rounded-xl origin-bottom"></div>
      </motion.div>

      {/* Minute Hand */}
      <motion.div
        animate={{ rotate: time.minutes }}
        transition={{ duration: 6, ease: [0.25, 1, 0.5, 1] }}
        onAnimationComplete={() => setClockRotating(true)}
        style={{ rotate: clockRotating ? d : time.minutes }}
        className="w-[75%] aspect-square rounded-full stack-child z-[41] flex justify-center items-start"
      >
        <div className="bg-white h-[51%] w-2 rounded-xl origin-bottom"></div>
      </motion.div>

      {/* Second Hand */}
      <motion.div
        animate={{ rotate: time.seconds }}
        transition={{ duration: 6, ease: "linear" }}
        style={{ rotate: clockRotating ? c : time.seconds }}
        className="w-[90%] aspect-square rounded-full stack-child z-[42] flex justify-center items-start"
      >
        <div className="bg-white h-[51%] w-1 rounded-xl origin-bottom"></div>
      </motion.div>
    </div>
  );
};

export default Clock;
