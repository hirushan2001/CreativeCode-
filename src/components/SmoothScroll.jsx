import React, { useEffect, createContext, useContext } from 'react';
import Lenis from 'lenis';

const SmoothScrollContext = createContext(null);

export const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom momentum scroll easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1.0,
      smoothTouch: false, // touch devices usually have their own smooth inertia scrolling
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Make lenis globally accessible
    window.lenis = lenis;

    // RAF loop
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Intercept clicks on links that are hash anchors and animate scroll
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const element = document.getElementById(targetId);
          if (element) {
            lenis.scrollTo(element, { offset: 0, duration: 1.2 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={null}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export const useSmoothScroll = () => useContext(SmoothScrollContext);
