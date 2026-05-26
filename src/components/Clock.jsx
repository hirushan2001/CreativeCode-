import React, { useState } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';

const Clock = ({ scrollRotation }) => {
  // Initialize time synchronously on mount so it's never null during transform setup
  const [time] = useState(() => {
    const now = new Date();
    return {
      seconds: 6 * now.getSeconds(),
      minutes: 6 * now.getMinutes(),
      hours: 30 * now.getHours()
    };
  });

  // Fallback motion value if scrollRotation is not passed
  const fallbackScrollRotation = useMotionValue(0);
  const rotation = scrollRotation || fallbackScrollRotation;

  // Transform scroll rotation proportionally for each hand (speed reduced for a calmer effect):
  // - Second hand spins 3 times (3 * 360 = 1080 deg)
  // - Minute hand spins 0.3 times (108 deg, or ~18 mins passing)
  // - Hour hand spins proportionally slower (~9 deg)
  const secRotate = useTransform(rotation, r => time.seconds + r * 3);
  const minRotate = useTransform(rotation, r => time.minutes + r * 0.3);
  const hourRotate = useTransform(rotation, r => time.hours + r * 0.025);

  return (
    <div className="w-full h-full relative grid stack-parent place-items-center select-none pointer-events-none">
      {/* Center Pin */}
      <div className="w-5 h-5 stack-child bg-white rounded-full z-50"></div>

      {/* Hour Hand */}
      <motion.div
        style={{ rotate: hourRotate }}
        className="w-[60%] aspect-square rounded-full stack-child z-[40] flex justify-center items-start"
      >
        <div className="bg-white h-[51%] w-3 rounded-xl origin-bottom"></div>
      </motion.div>

      {/* Minute Hand */}
      <motion.div
        style={{ rotate: minRotate }}
        className="w-[75%] aspect-square rounded-full stack-child z-[41] flex justify-center items-start"
      >
        <div className="bg-white h-[51%] w-2 rounded-xl origin-bottom"></div>
      </motion.div>

      {/* Second Hand */}
      <motion.div
        style={{ rotate: secRotate }}
        className="w-[90%] aspect-square rounded-full stack-child z-[42] flex justify-center items-start"
      >
        <div className="bg-white h-[51%] w-1 rounded-xl origin-bottom"></div>
      </motion.div>
    </div>
  );
};

export default Clock;

