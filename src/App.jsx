import React from 'react';
import Navbar from './components/Navbar';
import MultiplayerCursors from './components/MultiplayerCursors';
import Hero from './components/Hero';
import Services from './components/Services';
import ClientMarquee from './components/ClientMarquee';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Technologies from './components/Technologies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#141414] min-h-screen text-white font-sans selection:bg-custom-primaryPurple/35 selection:text-white select-none relative overflow-x-clip">
      
      {/* Dynamic simulated cursors flying over page content */}
      <MultiplayerCursors />

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

      {/* Footer Details */}
      <Footer />

    </div>
  );
}

export default App;
