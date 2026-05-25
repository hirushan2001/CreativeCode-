import React from 'react';
import Navbar from './components/Navbar';
import MultiplayerCursors from './components/MultiplayerCursors';
import Hero from './components/Hero';
import Services from './components/Services';
import ClientMarquee from './components/ClientMarquee';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Technologies from './components/Technologies';
import ContactSection from './components/ContactSection';
import WorkTogetherMarquee from './components/WorkTogetherMarquee';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

// Pages
import ProjectsPage from './pages/ProjectsPage';
import JoinUsPage from './pages/JoinUsPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';

// Router
import { RouterProvider, useRouter } from './components/Router';
import { SmoothScrollProvider } from './components/SmoothScroll';

function AppContent() {
  const { path } = useRouter();

  if (path === '/projects') {
    return <ProjectsPage />;
  }

  if (path === '/join-us') {
    return <JoinUsPage />;
  }

  if (path === '/blogs') {
    return <BlogsPage />;
  }

  if (path === '/contact-us') {
    return <ContactPage />;
  }

  // Home Page
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#141414] min-h-screen text-white font-sans selection:bg-custom-primaryPurple/35 selection:text-white select-none relative overflow-x-clip"
    >
      
      {/* Dynamic simulated cursors flying over page content */}
      {/* <MultiplayerCursors /> */}

      {/* Main Header / Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services lists (expandable grid) */}
      <Services />

      {/* Client Scrolling Track */}
      <ClientMarquee />

      {/* Portfolio Projects Grid */}
      <Projects />

      {/* Testimonials Review Slider */}
      <Testimonials />

      {/* Technologies Stagger Grid */}
      <Technologies />

      {/* Animated Call to Action / Contact */}
      <ContactSection />

      {/* Infinite Scrolling Work Together Marquee */}
      <WorkTogetherMarquee />

      {/* Footer Details */}
      <Footer />

    </motion.div>
  );
}

function App() {
  return (
    <RouterProvider>
      <SmoothScrollProvider>
        <AppContent />
      </SmoothScrollProvider>
    </RouterProvider>
  );
}

export default App;

