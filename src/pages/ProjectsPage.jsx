import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WorkTogetherMarquee from '../components/WorkTogetherMarquee';
import { Link } from '../components/Router';
import { motion } from 'framer-motion';
import { projectsCatalogList } from '../data/projectsData';

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#141414] min-h-screen text-white font-sans flex flex-col justify-between select-none relative overflow-x-clip"
    >
      <Navbar />

      <main className="mt-16 md:mt-20 mx-auto max-w-[88rem] px-5 sm:px-10 md:px-16 lg:px-20 2xl:px-0 min-h-screen text-white w-full">
        
        {/* Header Titles */}
        <div className="flex flex-col gap-y-4 items-start select-none">
          <h1 className="text-4xl sm:text-6xl xl:text-7xl 2xl:text-8xl font-display font-bold leading-tight">
            <span className="text-[#FF0055]">Discover</span> our projects.
          </h1>
          <p className="text-xl md:text-2xl xl:text-3xl text-stone-400 font-light max-w-2xl leading-relaxed">
            Checkout our latest projects
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-20 mb-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 md:gap-10 w-full">
          {projectsCatalogList.map((project, index) => (
            <Link
              href={project.link}
              key={`${project.title}-${index}`}
              className="grid stack-parent rounded-3xl overflow-hidden group cursor-pointer relative border border-white/5 shadow-xl hover:shadow-[#FF0055]/5 transition-all duration-300 w-full"
              style={{ aspectRatio: "1581 / 2114" }}
            >
              {/* Card Image */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="stack-child object-cover object-center bg-no-repeat h-full w-full group-hover:scale-105 transition-transform duration-500 z-10"
              />
              
              {/* Hover overlay shadow */}
              <div className="stack-child flex flex-col justify-end bg-gradient-to-b from-transparent to-[#000000c4] to-80% z-20">
                <div className="pb-6 px-7 h-fit w-full flex flex-col gap-y-3">
                  <h3 className="text-xl sm:text-2xl -mb-2 text-white font-display font-bold">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 font-light">
                    {project.description}
                  </p>
                  
                  {/* Category tags */}
                  <ul className="flex flex-row flex-wrap gap-x-3 gap-y-4">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-violet-900 bg-white opacity-75 px-3 py-1.5 rounded-full whitespace-nowrap text-xs font-medium"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </main>

      <WorkTogetherMarquee />
      <Footer />
    </motion.div>
  );
};

export default ProjectsPage;
