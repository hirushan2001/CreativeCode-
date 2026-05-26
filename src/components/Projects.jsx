import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity, useInView } from 'framer-motion';
import { Link } from './Router';
import { homepageProjectsList as projectsData } from '../data/projectsData';

// Separate Card component to handle scroll-linked transforms cleanly
const ProjectCard = ({ gridArea, skewValue, cardSpeed, imgSrc, projectName, projectTags, link }) => {
  return (
    <motion.div
      style={{
        gridArea,
        y: cardSpeed,
        skewY: skewValue
      }}
      className="min-h-[350px] w-[27dvw] h-[40vh] lg:h-[60dvh] xl:h-[60dvh] 2xl:h-[70dvh] relative flex flex-col gap-y-3 transform-gpu will-change-transform"
    >
      <Link href={link || "#"} className="flex flex-col gap-y-3 w-full h-full group cursor-pointer">
        <div className="w-full h-full overflow-hidden rounded-2xl relative flex justify-start items-end bg-stone-900/50 shadow-lg force-rounded-clip">
          <img
            src={imgSrc}
            alt={projectName}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out absolute inset-0"
            loading="lazy"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full opacity-0 text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl z-30 relative text-left pl-3 lg:pl-5 pb-10 backdrop-blur-lg bg-[#00000031] flex items-end"
          >
            <div className="overflow-hidden py-1.5 flex justify-start font-display font-bold">
              {projectName}
            </div>
          </motion.div>
        </div>

        {/* Tags */}
        <ul className="text-white text-base md:text-lg xl:text-xl 2xl:text-2xl flex flex-wrap gap-x-2 font-display select-none">
          {projectTags.map((tag, idx) => (
            <React.Fragment key={tag}>
              {idx > 0 && <span className="text-stone-500 select-none">|</span>}
              <li className="text-stone-300 font-light">{tag}</li>
            </React.Fragment>
          ))}
        </ul>
      </Link>
    </motion.div>
  );
};

const ExploreCard = ({ gridArea, skewValue, cardSpeed }) => {
  return (
    <motion.div
      style={{
        gridArea,
        y: cardSpeed,
        skewY: skewValue
      }}
      className="group flex flex-col gap-y-3 min-h-[350px] w-[27dvw] h-[40vh] lg:h-[60dvh] xl:h-[60dvh] 2xl:h-[70dvh] transform-gpu will-change-transform"
    >
      <Link href="/projects" className="w-full h-full cursor-pointer">
        <div className="w-full h-full z-30 relative text-center bg-[#3600D1] hover:bg-[#430ce6] transition-colors duration-300 rounded-2xl flex flex-col justify-center items-center gap-y-7 px-4 shadow-lg force-rounded-clip">
          <p className="text-white text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-display font-bold leading-tight select-none">
            Explore <br /> More <br /> Projects
          </p>
          <div className="group-hover:scale-125 scale-75 duration-300 md:text-6xl lg:text-7xl text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-14 h-14 lg:w-16 lg:h-16">
              <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const titleInViewRef = useRef(null);

  // Check if title is in view (trigger letter scroll animation once)
  const isTitleInView = useInView(titleInViewRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Scroll state optimization to disable expensive rendering filters during scrolling
    let scrollTimeout;
    const handleScroll = () => {
      document.body.classList.add('is-scrolling');
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 150);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Smooth scroll progress spring (tuned for buttery smooth, lag-free response)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.1,
    restDelta: 0.001
  });

  // Title fade out synchronized with spring scroll progress to disappear before cards overlap
  const titleOpacity = useTransform(smoothProgress, [0.05, 0.32], [1, 0]);

  // Calculate velocity for the card skew-on-scroll effect
  const scrollVelocity = useVelocity(smoothProgress);
  
  // Map scroll progress velocity to raw skew angle (-8 to 8 deg)
  const rawSkew = useTransform(scrollVelocity, [-1.5, 1.5], [-8, 8]);

  // Smooth the skew angle using a spring to eliminate stepping jitter
  const skewValue = useSpring(rawSkew, {
    stiffness: 80,
    damping: 25,
    mass: 0.1
  });

  // Parallax offsets for each card in the grid
  const cardSpeed1 = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);
  const cardSpeed2 = useTransform(smoothProgress, [0, 1], ["-25%", "10%"]);
  const cardSpeed3 = useTransform(smoothProgress, [0, 1], ["0%", "-90%"]);
  const cardSpeed4 = useTransform(smoothProgress, [0, 1], ["70%", "-60%"]);
  const cardSpeed5 = useTransform(smoothProgress, [0, 1], ["0%", "10%"]);
  const cardSpeed6 = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);



  if (isMobile) {
    return (
      <section className="w-full py-20 px-6 bg-[#141414] flex flex-col items-center">
        <div className="text-center mb-12">
          <div className="text-lg flex flex-row gap-1.5 justify-center items-center text-custom-sectionTopicColor mb-2">
            <span className="h-2 rounded-md w-2 bg-custom-sectionTopicColor"></span>
            <h2 className="font-display font-medium tracking-wide">Projects</h2>
          </div>
          <h3 className="font-display text-white text-4xl font-extrabold tracking-tight">
            They Love Our Work
          </h3>
        </div>

        <div className="flex flex-col gap-y-12 w-full max-w-sm">
          {projectsData.map((project) => (
            <Link href={project.link || "#"} key={project.projectName} className="flex flex-col gap-y-3 w-full group cursor-pointer">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl relative bg-stone-900/50">
                <img
                  src={project.imgSrc}
                  alt={project.projectName}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out absolute inset-0"
                  loading="lazy"
                />
              </div>
              <h4 className="font-display text-white text-2xl font-bold group-hover:text-[#FF0055] transition-colors">{project.projectName}</h4>
              <ul className="text-stone-400 text-sm flex gap-x-2 flex-wrap">
                {project.projectTags.map((tag, idx) => (
                  <React.Fragment key={tag}>
                    {idx > 0 && <span>|</span>}
                    <li>{tag}</li>
                  </React.Fragment>
                ))}
              </ul>
            </Link>
          ))}

          {/* Mobile Explore Card */}
          <Link href="/projects" className="w-full aspect-[3/4] rounded-2xl bg-[#3600D1] hover:bg-[#430ce6] transition-colors duration-300 flex flex-col justify-center items-center gap-y-6 p-6 cursor-pointer group">
            <p className="text-white text-3xl font-display font-bold text-center">
              Explore <br /> More <br /> Projects
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-12 h-12 text-white group-hover:scale-125 transition-transform duration-300">
              <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
            </svg>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="projects-section"
      className="w-full min-h-[200dvh] lg:min-h-[250dvh] 2xl:min-h-[290dvh] grid stack-parent px-10 lg:px-14 xl:px-24 bg-[#141414]"
    >
      {/* Sticky topics and title section */}
      <div className="stack-child w-full z-10 relative max-w-[100dvw]">
        <motion.div
          style={{ opacity: titleOpacity }}
          className="w-full h-screen sticky top-0 flex flex-col items-center justify-center text-center pointer-events-none select-none"
        >
          <div className="text-2xl flex flex-row gap-1.5 justify-center items-center text-custom-sectionTopicColor mb-4">
            <span className="h-2 rounded-md w-2 bg-custom-sectionTopicColor"></span>
            <h2 className="font-display font-medium tracking-wide">Projects</h2>
          </div>
          <div ref={titleInViewRef} className="text-white text-8xl lg:text-9xl font-display font-bold leading-none select-none">
            <div className="overflow-hidden h-28 lg:h-36 flex justify-center z-10 relative">
              <h3>
                They love
              </h3>
            </div>
            <div className="overflow-hidden h-28 lg:h-36 flex justify-center z-10 relative mt-2">
              <h3>
                our work
              </h3>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Asymmetrical Parallax Card Columns */}
      <div className="stack-child w-full z-20 h-auto">
        <div className="w-full grid grid-cols-3 grid-rows-2 gap-y-10 pt-[100vh] pb-20">
          <ProjectCard
            gridArea={projectsData[0].gridArea}
            skewValue={skewValue}
            cardSpeed={cardSpeed1}
            projectName={projectsData[0].projectName}
            projectTags={projectsData[0].projectTags}
            imgSrc={projectsData[0].imgSrc}
            link={projectsData[0].link}
          />
          <ProjectCard
            gridArea={projectsData[1].gridArea}
            skewValue={skewValue}
            cardSpeed={cardSpeed2}
            projectName={projectsData[1].projectName}
            projectTags={projectsData[1].projectTags}
            imgSrc={projectsData[1].imgSrc}
            link={projectsData[1].link}
          />
          <ProjectCard
            gridArea={projectsData[2].gridArea}
            skewValue={skewValue}
            cardSpeed={cardSpeed3}
            projectName={projectsData[2].projectName}
            projectTags={projectsData[2].projectTags}
            imgSrc={projectsData[2].imgSrc}
            link={projectsData[2].link}
          />
          <ProjectCard
            gridArea={projectsData[3].gridArea}
            skewValue={skewValue}
            cardSpeed={cardSpeed4}
            projectName={projectsData[3].projectName}
            projectTags={projectsData[3].projectTags}
            imgSrc={projectsData[3].imgSrc}
            link={projectsData[3].link}
          />
          
          {/* Explore More Card */}
          <ExploreCard
            gridArea="2 / 2 / 3 / 3"
            skewValue={skewValue}
            cardSpeed={cardSpeed5}
          />

          <ProjectCard
            gridArea={projectsData[4].gridArea}
            skewValue={skewValue}
            cardSpeed={cardSpeed6}
            projectName={projectsData[4].projectName}
            projectTags={projectsData[4].projectTags}
            imgSrc={projectsData[4].imgSrc}
            link={projectsData[4].link}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
