import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RouterContext = createContext(null);

export const RouterProvider = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingPath, setPendingPath] = useState(null);
  const [displayPath, setDisplayPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
      setDisplayPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigate = (to) => {
    if (to === path) return;
    setPendingPath(to);
    setIsTransitioning(true);
  };

  const handleAnimationComplete = () => {
    if (isTransitioning && pendingPath) {
      // Swap path behind the curtain
      window.history.pushState({}, '', pendingPath);
      setPath(pendingPath);
      setDisplayPath(pendingPath);
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Let the curtain slide out of view
      setTimeout(() => {
        setIsTransitioning(false);
        setPendingPath(null);
      }, 100);
    }
  };

  return (
    <RouterContext.Provider value={{ path: displayPath, navigate }}>
      {children}
      
      {/* Premium SVG Curved Page Transition Curtain */}
      <AnimatePresence>
        {isTransitioning && (
          <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center">
            
            {/* The SVG curve curtain */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-auto"
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <motion.path
                initial={{ d: "M 0 100 Q 50 100 100 100 L 100 100 L 0 100 Z" }}
                animate={{ d: "M 0 0 Q 50 -20 100 0 L 100 100 L 0 100 Z" }}
                exit={{ d: "M 0 0 Q 50 0 100 0 L 100 0 L 0 0 Z" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                onAnimationComplete={handleAnimationComplete}
                fill="#141414"
              />
            </svg>

            {/* Glowing Brand text or loader centered overlay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="relative z-10 flex flex-col items-center justify-center gap-y-4 pointer-events-none select-none"
            >
              <div className="text-3xl md:text-4xl font-display font-black tracking-wider text-white">
                CREATIVO<span className="text-[#FF0055]">CODE</span>
              </div>
              <div className="w-12 h-1 bg-[#FF0055] rounded-full animate-pulse"></div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

export const Link = ({ href, children, ...props }) => {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    // If it's an external link or a hash anchor, let the browser handle it
    if (href.startsWith('http') || href.startsWith('#')) {
      return;
    }
    e.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};
