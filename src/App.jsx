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

// Pages
import ProjectsPage from './pages/ProjectsPage';
import JoinUsPage from './pages/JoinUsPage';
import BlogsPage from './pages/BlogsPage';

// Router
import { RouterProvider, useRouter } from './components/Router';

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

  // Home Page
  return (
    <div className="bg-[#141414] min-h-screen text-white font-sans selection:bg-custom-primaryPurple/35 selection:text-white select-none relative overflow-x-clip">
      
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

    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;

