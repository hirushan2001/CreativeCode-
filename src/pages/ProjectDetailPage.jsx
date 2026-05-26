import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WorkTogetherMarquee from '../components/WorkTogetherMarquee';
import { Link } from '../components/Router';
import { motion } from 'framer-motion';
import { projectsDetailsData } from '../data/projectsData';

const ProjectDetailPage = ({ projectUid }) => {
  const project = projectsDetailsData[projectUid];

  if (!project) {
    return (
      <div className="bg-[#141414] min-h-screen text-white font-sans flex flex-col justify-between select-none">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
          <h1 className="text-4xl font-display font-bold text-red-500 mb-4">Project Not Found</h1>
          <p className="text-stone-400 mb-8 max-w-md font-light">The case study you are looking for does not exist or has not been configured.</p>
          <Link href="/projects" className="bg-[#FF0055] text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-all">Back to Projects</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#141414] min-h-screen text-white font-sans flex flex-col justify-between select-none relative overflow-x-hidden"
    >
      <Navbar />

      <div className="font-sans text-white flex flex-col gap-y-28 pt-10 lg:pt-20">

        {/* ── Hero Section ──────────────────────────────────────── */}
        <section className="w-full mt-[-200px]">
          <div className="flex flex-col gap-8 items-center pt-[150px]" style={{ background: project.hero_gradient }}>

            {/* Title row */}
            <div className="flex lg:items-center lg:justify-between project-page-layout flex-col lg:flex-row justify-start items-start gap-y-5 gap-x-14 max-lg:py-10 max-sm:mt-8">
              <div className="flex flex-col gap-3 w-fit">
                <h1 className="text-white font-display font-bold w-fit text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                  {project.title}
                </h1>
                <h1 className="text-white font-display text-xl md:text-2xl lg:text-3xl w-fit font-light opacity-90">
                  {project.subtitle}
                </h1>
              </div>
              {project.icon && (
                <img
                  src={project.icon}
                  alt=""
                  className="w-28 md:w-36 lg:w-40 max-lg:hidden object-contain"
                />
              )}
            </div>

            {/* Large Mockup */}
            {project.hero_mockup && (
              <div className="lg:px-12 overflow-hidden w-full flex md:aspect-auto aspect-[1.2]">
                <div className="overflow-hidden lg:rounded-3xl h-[90vh] w-full" style={{ transform: 'translateZ(0)' }}>
                  <img
                    src={project.hero_mockup}
                    alt={project.title}
                    className="w-full h-full object-cover scale-100"
                    style={{ backfaceVisibility: 'hidden', perspective: '1000px' }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Overview Grid */}
          <div className="mt-20 sm:mt-28 flex flex-col lg:grid grid-cols-6 project-page-layout gap-x-36 gap-y-16">
            <div className="flex flex-col gap-10 col-span-4">
              <h3 className="text-white font-semibold text-4xl md:text-6xl lg:text-6xl">
                Project Overview
              </h3>
              <p className="font-sans text-xl md:text-3xl leading-loose text-[#C0C0C0]">
                {project.overview}
              </p>
            </div>

            <div className="col-span-2 text-2xl flex gap-8 flex-col max-lg:flex-row max-lg:justify-between max-md:flex-col">
              <div className="flex flex-col gap-y-10">
                {project.industry && (
                  <div>
                    <h6 className="text-xl mb-1 text-gray-500">Industry</h6>
                    <p>{project.industry}</p>
                  </div>
                )}
                {project.deliverables && project.deliverables.length > 0 && (
                  <div>
                    <h6 className="text-xl mb-1 text-gray-500">Deliverables</h6>
                    <ul className="list-none space-y-2">
                      {project.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.visit_url && (
                  <a
                    href={project.visit_url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: project.theme_color || '#FF0055' }}
                    className="px-8 flex items-center gap-1 py-4 rounded-full w-full justify-center sm:w-fit h-fit hover:brightness-125 transition-all duration-200"
                  >
                    Visit Site
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mb-0.5 w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          <hr className="mx-6 md:mx-16 sm:mx-24 my-16 md:my-24 opacity-20" />
        </section>

        {/* ── Client Overview ──────────────────────────────────────── */}
        {project.client_overview && (
          <section className="w-full">
            <div className="flex flex-col gap-y-5 lg:gap-y-7 mt-16 lg:mt-28">
              <div className="lg:grid flex flex-col grid-cols-6 project-page-layout gap-x-36 gap-y-8">
                <h3 className="text-white font-semibold text-4xl col-span-2">Client Overview</h3>
                <p className="font-sans text-xl md:text-2xl leading-relaxed text-[#C0C0C0] col-span-4">
                  {project.client_overview}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── The Problem ─────────────────────────────────────────── */}
        {project.problem && (
          <section className="w-full">
            <div className="flex flex-col gap-y-5 lg:gap-y-7">
              <div className="lg:grid flex flex-col grid-cols-6 project-page-layout gap-x-36 gap-y-8">
                <h3 className="text-white font-semibold text-4xl col-span-2">The problem</h3>
                <p className="font-sans text-xl md:text-2xl leading-relaxed text-[#C0C0C0] col-span-4">
                  {project.problem}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── Our Solution ────────────────────────────────────────── */}
        {project.solution && (
          <section className="w-full">
            <div className="flex flex-col gap-y-5 lg:gap-y-7 mb-16 lg:mb-28">
              <div className="lg:grid flex flex-col grid-cols-6 project-page-layout gap-x-36 gap-y-8">
                <h3 className="text-white font-semibold text-4xl col-span-2">Our Solution</h3>
                <p className="font-sans text-xl md:text-2xl leading-relaxed text-[#C0C0C0] col-span-4 whitespace-pre-line">
                  {project.solution}
                </p>
              </div>
              {project.solution_mockup && (
                <div className="lg:px-12 overflow-hidden w-full flex mt-10">
                  <div className="overflow-hidden h-full lg:rounded-3xl w-full" style={{ transform: 'translateZ(0)' }}>
                    <img
                      src={project.solution_mockup}
                      alt="Our Solution Mockup"
                      className="w-full h-full object-cover scale-100"
                      style={{ backfaceVisibility: 'hidden', perspective: '1000px' }}
                    />
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── Design System ──────────────────────────────────────── */}
        {project.colors && project.colors.length > 0 && (
          <section className="flex flex-col gap-1 project-page-layout">
            {/* Header row */}
            <div className="flex flex-row gap-x-10 items-center">
              <h4 className="text-white font-semibold text-4xl col-span-2 whitespace-nowrap">The Design System</h4>
              <hr className="opacity-20 w-full" />
            </div>

            {/* Colors */}
            <div className="flex flex-col gap-3 lg:basis-1/2">
              <h5 className="text-white my-6 font-semibold text-3xl md:text-4xl lg:text-5xl lg:mt-16">Colors</h5>

              {/* Split into two halves: first half = Primary, second half = Secondary */}
              {(() => {
                const mid = Math.ceil(project.colors.length / 2);
                const primary = project.colors.slice(0, mid);
                const secondary = project.colors.slice(mid);
                return (
                  <div className="flex flex-col gap-y-8 gap-x-8 lg:grid lg:grid-cols-2">
                    <div className="flex flex-col gap-3">
                      <h6 className="font-sans text-2xl text-[#C0C0C0]">Primary Colors</h6>
                      <div className="flex flex-wrap flex-col gap-4">
                        {primary.map((color) => {
                          const isDark = parseInt(color.hex.replace('#',''), 16) < 0x888888 * 3;
                          return (
                            <div
                              key={color.hex}
                              className="h-28 justify-start flex flex-row items-center gap-4 px-10 rounded-full duration-300 border border-transparent hover:border-white group"
                              style={{ backgroundColor: color.hex, minWidth: '200px', width: '10%' }}
                            >
                              <div
                                className="rounded-full w-0 h-0 block opacity-10 duration-300 group-hover:w-8 group-hover:h-8"
                                style={{ backgroundColor: isDark ? '#ffffff' : '#000000' }}
                              />
                              <div className="flex flex-col gap-1">
                                <p className={`opacity-70 ${isDark ? 'text-white' : 'text-black'}`}>{color.name}</p>
                                <p className={isDark ? 'text-white' : 'text-black'}>{color.hex}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {secondary.length > 0 && (
                      <div className="flex flex-col gap-3">
                        <h6 className="font-sans text-2xl text-[#C0C0C0]">Secondary Colors</h6>
                        <div className="flex flex-wrap flex-col gap-4">
                          {secondary.map((color) => {
                            const isDark = parseInt(color.hex.replace('#',''), 16) < 0x888888 * 3;
                            return (
                              <div
                                key={color.hex}
                                className="h-28 justify-start flex flex-row items-center gap-4 px-10 rounded-full duration-300 border border-transparent hover:border-white group"
                                style={{ backgroundColor: color.hex, minWidth: '200px', width: '10%' }}
                              >
                                <div
                                  className="rounded-full w-0 h-0 block opacity-10 duration-300 group-hover:w-8 group-hover:h-8"
                                  style={{ backgroundColor: isDark ? '#ffffff' : '#000000' }}
                                />
                                <div className="flex flex-col gap-1">
                                  <p className={`opacity-70 ${isDark ? 'text-white' : 'text-black'}`}>{color.name}</p>
                                  <p className={isDark ? 'text-white' : 'text-black'}>{color.hex}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          </section>
        )}

        {/* ── Typography ─────────────────────────────────────────── */}
        {project.typography && project.typography.length > 0 && (
          <section className="project-page-layout -mt-14">
            <div className="flex flex-col gap-3 lg:basis-1/2">
              <h5 className="text-white my-6 font-semibold text-3xl md:text-4xl lg:text-5xl lg:mt-16">Typography</h5>
              <div className="flex flex-col gap-y-3">
                {project.typography.map((typo, idx) => (
                  <div key={typo.name} className="flex flex-col gap-y-3">
                    <div className="flex">
                      <div className="grid stack-parent w-full">
                        {/* Font name overlaid on left */}
                        <div className="stack-child w-full h-full flex flex-col gap-y-3 justify-center items-start -translate-y-7">
                          <h6 className="font-sans text-2xl text-[#C0C0C0] hidden first:flex">
                            {idx === 0 ? 'Primary Typo' : 'Secondary Typo'}
                          </h6>
                          <p className="text-white font-semibold text-6xl sm:text-7xl md:text-8xl w-fit">{typo.name}</p>
                        </div>
                        {/* Font image on the right */}
                        <div className="stack-child w-full h-fit flex justify-end items-center py-5">
                          <img
                            src={typo.image}
                            alt={typo.name}
                            className="w-48 sm:w-64 md:w-96 h-fit mx-5 lg:mx-10 opacity-75 translate-y-5 sm:translate-y-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Final Output ────────────────────────────────────────── */}
        {project.final_output && (
          <section className="flex flex-col gap-y-10 w-screen">
            <h5 className="text-white font-semibold text-5xl md:text-6xl lg:text-5xl project-page-layout">The Final Output</h5>
            <div className="lg:px-12 overflow-hidden w-full flex mt-10">
              <div className="overflow-hidden lg:rounded-3xl w-full h-fit" style={{ transform: 'translateZ(0)' }}>
                <img
                  src={project.final_output}
                  alt="The Final Output"
                  className="w-full h-full object-cover scale-100"
                  style={{ backfaceVisibility: 'hidden', perspective: '1000px' }}
                />
              </div>
            </div>
          </section>
        )}

        {/* ── Client Feedback ──────────────────────────────────────── */}
        {project.feedback_text && (
          <section className="project-page-layout flex flex-col gap-y-10">
            <h5 className="text-white font-semibold text-5xl md:text-6xl lg:text-5xl">Client Feedback</h5>
            <div className="rounded-3xl bg-[#1B1D20] gap-3 xl:gap-6 flex-col lg:flex-row flex group p-10">
              {/* Logo — desktop */}
              {project.feedback_logo && (
                <div className="hidden lg:block">
                  <img
                    src={project.feedback_logo}
                    alt={project.feedback_company}
                    className="rounded-xl object-cover object-center w-16 lg:w-28 aspect-square"
                  />
                </div>
              )}
              <div className="flex flex-col gap-y-5 mx-auto w-full">
                <p className="text-gray-500 text-2xl lg:text-3xl leading-relaxed">
                  <span className="text-3xl lg:text-4xl align-baseline pr-1">&quot;</span>
                  <span>{project.feedback_text}</span>
                  <span className="text-3xl lg:text-4xl align-baseline pl-1">&quot;</span>
                </p>
                <div className="flex gap-4">
                  {/* Logo — mobile */}
                  {project.feedback_logo && (
                    <div className="lg:hidden">
                      <img
                        src={project.feedback_logo}
                        alt={project.feedback_company}
                        className="rounded-xl object-cover object-center w-16 aspect-square"
                      />
                    </div>
                  )}
                  <div className="flex flex-col lg:flex-row gap-x-1.5 text-lg">
                    <p className="text-white">{project.feedback_author},</p>
                    <p className="text-gray-400">{project.feedback_company}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <WorkTogetherMarquee />
      <Footer />
    </motion.div>
  );
};

export default ProjectDetailPage;
