import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WorkTogetherMarquee from '../components/WorkTogetherMarquee';
import { motion } from 'framer-motion';

const JoinUsPage = () => {
  const benefits = [
    {
      title: "Launch Your Career 🚀",
      description: "Become part of a dynamic team where every day brings new challenges and opportunities for growth."
    },
    {
      title: "Innovate Together 💡",
      description: "Collaborate with like-minded individuals who are dedicated to pushing the boundaries of technology and design."
    },
    {
      title: "Unleash Your Creativity 🎨",
      description: "Work in an environment that celebrates creativity and encourages you to think outside the box."
    },
    {
      title: "Competitive Benefits 💼",
      description: "Enjoy competitive compensation, flexible work arrangements, and a supportive work culture that values work-life balance."
    }
  ];

  const jobs = [
    {
      title: "UI/UX Designer",
      link: "https://careers.creativo-code.com/opening/uiux-designer"
    },
    {
      title: "Creative Developer",
      link: "https://careers.creativo-code.com/opening/creative-developer"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#141414] min-h-screen text-white font-sans flex flex-col justify-between select-none relative overflow-x-clip"
    >
      <Navbar />

      <main className="mt-16 md:mt-20 mx-auto max-w-[88rem] px-5 sm:px-10 md:px-16 lg:px-20 2xl:px-0 text-white flex flex-col gap-y-16 md:gap-y-28 w-full">
        
        {/* Hero Area */}
        <div className="flex flex-col gap-y-6 items-start select-none">
          <h1 className="text-4xl sm:text-6xl xl:text-7xl 2xl:text-8xl font-display font-bold leading-tight">
            Be Part of <span className="text-[#FF0055] drop-shadow-md">Something Great!</span>
          </h1>
          <p className="text-xl md:text-2xl xl:text-3xl text-stone-300 font-light max-w-3xl leading-relaxed">
            At CreativoCode, we're not just building websites. We are crafting custom interactive storytelling experiences that help companies break the mold.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="flex flex-col gap-y-10 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white">
            Why Choose CreativoCode?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#23211D] py-10 px-8 rounded-2xl flex flex-col gap-y-5 border border-white/5 hover:border-amber-400/25 transition-all duration-300 shadow-lg"
              >
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-base md:text-lg text-stone-300 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunities List */}
        <div className="flex flex-col gap-y-10 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white">
            Current Opportunities to Shine:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-start w-full max-w-3xl">
            {jobs.map((job, index) => (
              <a
                key={index}
                href={job.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col justify-center items-center bg-[#F5F5F5] hover:bg-white text-black rounded-3xl w-full p-8 gap-y-3 cursor-pointer shadow-lg active:scale-98 hover:scale-[1.02] transition-all duration-300 font-display font-bold text-xl md:text-2xl text-center"
              >
                {job.title}
              </a>
            ))}
          </div>
        </div>

        {/* careers portal call */}
        <div className="flex flex-col gap-y-6 text-[#C0C0C0] max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Ready to Make Your Mark?
          </h2>
          <p className="text-lg md:text-2xl font-light leading-relaxed">
            Head over to our{' '}
            <a
              href="https://careers.creativo-code.com/"
              target="_blank"
              rel="noreferrer"
              className="text-rose-600 font-medium hover:text-rose-500 transition-colors duration-200 underline underline-offset-4"
            >
              careers portal
            </a>{' '}
            and apply to any open positions.
          </p>
        </div>

      </main>

      <WorkTogetherMarquee />
      <Footer />
    </motion.div>
  );
};

export default JoinUsPage;
