import React, { useState, useEffect, useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { motion, useScroll, useTransform, useMotionValue, useInView } from 'framer-motion';

// Desktop Card Component
const TestimonialCard = ({ testimonial, classNames }) => {
  return (
    <div className={`bg-white rounded-3xl h-auto min-w-[400px] w-[25dvw] p-10 flex flex-col justify-between gap-y-10 text-black shadow-xl border border-stone-100 ${classNames}`}>
      <p className="text-stone-800 font-semibold text-lg leading-relaxed select-none">
        “{testimonial.review}”
      </p>
      <div className="flex flex-row justify-between items-center text-black border-t border-stone-200/80 pt-6 mt-auto">
        <div className="flex flex-col text-left">
          <p className="text-[1.5rem] font-bold text-stone-900 leading-tight select-none">
            {testimonial.name}
          </p>
          <p className="text-[1.05rem] text-stone-500 font-light mt-1 select-none">
            {testimonial.role}
          </p>
        </div>
        {testimonial.img && (
          <img
            src={testimonial.img}
            width={80}
            height={80}
            alt={testimonial.name}
            className="w-20 h-20 aspect-square rounded-full object-cover border border-stone-100"
          />
        )}
      </div>
    </div>
  );
};

// Mobile Card Component (Image on Left, Text/Role on Right, flex-wrap)
const MobileTestimonialCard = ({ testimonial, classNames }) => {
  return (
    <div className={`${classNames} px-4 text-black`}>
      <div className="bg-white rounded-3xl h-auto w-full px-5 py-8 flex flex-col gap-y-10 shadow-xl border border-stone-100">
        <p className="text-stone-800 font-semibold text-lg leading-relaxed select-none">
          “{testimonial.review}”
        </p>
        <div className="flex flex-row flex-wrap justify-between items-center border-t border-stone-200/80 pt-6 mt-auto gap-4">
          {testimonial.img && (
            <img
              src={testimonial.img}
              width={80}
              height={80}
              alt={testimonial.name}
              className="w-20 h-20 aspect-square rounded-full object-cover border border-stone-100"
            />
          )}
          <div className="flex flex-col text-right">
            <p className="text-[1.5rem] font-bold text-stone-900 leading-tight select-none">
              {testimonial.name}
            </p>
            <p className="text-[1.05rem] text-stone-500 font-light mt-1 select-none">
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Desktop Slider Component with mouse-follow "Drag me" badge
const TestimonialSlider = ({ testimonials }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 2,
      spacing: 15
    },
    breakpoints: {
      "(min-width: 1300px)": {
        slides: {
          perView: 3,
          spacing: 20
        }
      }
    }
  });

  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const wrapperRef = useRef(null);
  const cursorRef = useRef(null);

  const handleMouseMove = (e) => {
    setIsHovering(true);
    let { clientX, clientY } = e;
    if (!wrapperRef.current || !cursorRef.current) return;
    let { left, top } = wrapperRef.current.getBoundingClientRect();
    let { width, height } = cursorRef.current.getBoundingClientRect();
    cursorX.set(clientX - left - width / 2);
    cursorY.set(clientY - top - height / 2);
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovering(false)}
      className="cursor-none h-fit w-full flex flex-row mt-40 relative py-5 gap-x-10 select-none"
    >
      {/* Custom Follower "Drag me" */}
      <motion.div
        animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0.6 }}
        transition={{ duration: 0.2 }}
        ref={cursorRef}
        style={{
          x: cursorX,
          y: cursorY,
          transition: "transform 300ms cubic-bezier(0.5, 1, 0.89, 1)"
        }}
        className="pointer-events-none absolute w-28 h-28 p-2 bg-black rounded-full z-[399] flex items-center justify-center shadow-2xl"
      >
        <div className="w-full h-full grid place-items-center text-white text-xl font-display font-medium uppercase tracking-wider">
          Drag me
        </div>
      </motion.div>

      {/* Slider container with overflow-hidden */}
      <div className="overflow-hidden w-full px-10 text-white dark:text-black">
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t, idx) => (
            <TestimonialCard
              key={idx}
              testimonial={t}
              classNames="keen-slider__slide"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Mobile Slider Component with auto-drag-indicator loop
const MobileTestimonialSlider = ({ testimonials }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1,
      spacing: 20
    }
  });

  const mobileViewRef = useRef(null);
  const isInView = useInView(mobileViewRef, { once: true, amount: 0.5 });

  return (
    <div ref={mobileViewRef} className="w-full h-fit relative">
      {/* Automated Drag Me Indicator for mobile */}
      {isInView && (
        <motion.div
          animate={{ x: ["60dvw", "20dvw", "60dvw"], opacity: [1, 0, 0] }}
          transition={{ duration: 2, repeat: 2, repeatType: "loop", ease: "easeInOut" }}
          className="pointer-events-none absolute top-[15dvh] w-20 h-20 p-2 bg-[#8354fd]/30 rounded-full z-[47] flex items-center flex-row"
        >
          <div className="w-full h-full grid place-items-center text-white whitespace-nowrap text-xs z-[49] font-display font-medium uppercase tracking-wider">
            Drag me
          </div>
          <div className="h-20 aspect-[2/1] bg-gradient-to-r from-[#8354fd]/30 from-0% to-transparent to-99% rounded-l-full block -translate-x-16 z-[48]" />
        </motion.div>
      )}

      <div ref={sliderRef} className="keen-slider mt-10">
        {testimonials.map((t, idx) => (
          <MobileTestimonialCard
            key={idx}
            testimonial={t}
            classNames="keen-slider__slide"
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef(null);
  const titleTextRef = useRef(null);
  
  // Track scroll progress within the entire section to match the original site's coordinate space
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const isInView = useInView(sectionRef, { once: true });

  // Transforms optimized for the page scrollable range (0.35 to 0.65)
  // ensuring animations complete fully before the user hits the bottom of the page.
  const storiesColor = useTransform(scrollYProgress, [0.35, 0.5], ["#8354fd", "#FF4A87"]);
  const storiesScale = useTransform(scrollYProgress, [0.35, 0.6], [1, 0.2]);
  const dotOpacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const storiesTranslateX = useTransform(scrollYProgress, [0.35, 0.6], [-60, 0]);
  const secondTitleOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const testimonials = [
    {
      name: "Sebastian P.",
      role: "Producer/Editor at Peacock",
      review: "I hired Creativos to make my complex, parallax website and they did an amazing job! They communicate very well and do everything possible to make sure you are satisfied. I highly recommend.",
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sebastian"
    },
    {
      name: "Klaidi",
      role: "FireFly Advocates",
      review: "I highly recommend CreativoCode for their exceptional work on a recent design project. They were very responsive, detail-oriented, and accommodating my requests throughout the process. The final design and prototype exceeded my expectations.",
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=Klaidi"
    },
    {
      name: "Tamanna B.",
      role: "Data Analyst",
      review: "Truly a huge thank you for the members of CreativoCode for all your hard work, patience and time you put in this. We are so happy with this site and design, we truly are so amazed by it 😍.",
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=Tamanna"
    },
    {
      name: "Palav Desai",
      role: "Graphic Designer",
      review: "Would definitely work with you again in the future. They were able to do what I was looking for and completed it in a reasonable amount of time and were very good at keeping me in the loop throughout the whole thing.",
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=Palav"
    },
    {
      name: "Heli Wijerathna",
      role: "Music Artist/Singer",
      review: "I'm absolutely thrilled with the digital agency's work on my singer's portfolio website. They were highly professional, responsive, and brought my vision to life in a way that exceeded my expectations. The design is visually stunning, and the seamless functionality makes it a joy to navigate.",
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=Heli"
    },
    {
      name: "N.U.W.K.Perera",
      role: "Managing Director of NexusAgro (Pvt) Ltd",
      review: "I am thrilled to share my experience working with CreativoCode, a remarkable web designing company. They designed and developed our spices selling website with utmost attractiveness and efficiency. Their expertise and attention to detail have been instrumental in helping us grow our business.",
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=Perera"
    },
    {
      name: "Haya Zarrin",
      role: "Graphics Designer",
      review: "Devin and his team have gone above and beyond to deliver quality work for us! We will continue our partnership in the future and look forward to the excellent communication, integrity and workmanship CreativoCode team provides.",
      img: "https://api.dicebear.com/7.x/adventurer/svg?seed=Haya"
    }
  ];

  // Mobile Render
  if (isMobile) {
    return (
      <section
        id="testimonials"
        ref={sectionRef}
        className="w-full h-auto my-2 px-5 xs:px-10 pt-20 flex flex-col bg-[#141414]"
      >
        <h2 className="font-display font-bold text-[#ff0055] text-3xl mb-2">
          Testimonials
        </h2>
        <h3 className="font-display font-bold text-white text-5xl tracking-tighter leading-10 mb-10">
          What they say about us?
        </h3>
        <MobileTestimonialSlider testimonials={testimonials} />
      </section>
    );
  }

  // Desktop Render
  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="w-full mt-36 lg:mt-20 flex flex-col items-center bg-[#141414]"
    >
      {/* Sticky Typography block (Pure block container, matching original CSS) */}
      <div
        ref={titleTextRef}
        className="h-[150dvh] text-center leading-[8rem] xl:leading-[10rem] text-white text-9xl xl:text-[10rem] font-display font-bold select-none mt-20 relative w-full"
      >
        <h6 className="w-full text-center">
          With data <br /> we craft
        </h6>
        
        {/* Pure Sticky Container (No Transform applied here to prevent sticky break) */}
        <div
          className="w-full flex justify-center sticky top-32 h-36 xl:h-44 -mb-10 z-10"
        >
          {isInView && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay: 0.4 }}
              style={{
                scale: storiesScale,
                x: storiesTranslateX
              }}
              className="flex flex-row items-center gap-5 justify-center w-fit h-fit"
            >
              <motion.span
                style={{ opacity: dotOpacity }}
                className="bg-custom-sectionTopicColor w-14 h-14 aspect-square rounded-full inline-block"
              />
              <motion.h6
                style={{ color: storiesColor }}
                className="font-display font-bold text-9xl xl:text-[10rem] leading-none"
              >
                Stories
              </motion.h6>
            </motion.div>
          )}
        </div>
      </div>

      {/* Subtext description */}
      <motion.h1
        style={{ opacity: secondTitleOpacity }}
        className="font-display font-bold text-white text-center text-4xl lg:text-5xl xl:text-6xl max-w-4xl px-6 leading-tight select-none mt-10"
      >
        Of online wonders <br /> we brought to life.
      </motion.h1>

      {/* Testimonials Slider */}
      <TestimonialSlider testimonials={testimonials} />
    </section>
  );
};

export default Testimonials;
