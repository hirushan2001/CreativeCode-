import React, { useEffect, useState, useRef } from 'react';
import Cursor from './Cursor';

const MultiplayerCursors = () => {
  const [positions, setPositions] = useState({
    ravindu: { x: 50, y: 30 },
    danny: { x: 400, y: 30 },
    manupa: { x: 500, y: 30 },
    suneth: { x: 600, y: 30 },
    nilusha: { x: 750, y: 35 },
    nayantha: { x: 820, y: 60 },
    devin: { x: 250, y: 350 },
    nayanthaHero: { x: 900, y: 500 },
    sunethSocial: { x: 1100, y: 600 }
  });

  const requestRef = useRef();
  const timeRef = useRef(0);

  // Colors mapping from original site module 70255
  const colors = {
    devin: "#8215EF",
    nayantha: "#DD2590",
    danny: "#6A7796",
    suneth: "#51AC65",
    ravindu: "#1570EF",
    manupa: "#1570EF",
    nilusha: "#15A1EF"
  };

  useEffect(() => {
    const updatePositions = (time) => {
      timeRef.current = time * 0.001; // convert to seconds
      const t = timeRef.current;

      // Find element positions on the page dynamically
      const logoEl = document.getElementById('logo-container');
      const projectsEl = document.getElementById('projects-link');
      const joinEl = document.getElementById('join-us-link');
      const blogsEl = document.getElementById('portal-link');
      const talkEl = document.getElementById('contact-button');
      const heroTextEl = document.getElementById('webDevelopWebsiteContainer');
      const socialEl = document.getElementById('sm-icon-container');

      setPositions(prev => {
        const next = { ...prev };

        // 1. Ravindu - hovers near logo
        if (logoEl) {
          const rect = logoEl.getBoundingClientRect();
          next.ravindu = {
            x: window.scrollX + rect.left + rect.width / 2 + Math.sin(t * 1.5) * 20 - 10,
            y: window.scrollY + rect.top + rect.height / 2 + Math.cos(t * 1.8) * 10
          };
        }

        // 2. Danny - hovers near Projects Link
        if (projectsEl) {
          const rect = projectsEl.getBoundingClientRect();
          next.danny = {
            x: window.scrollX + rect.left + rect.width / 2 + Math.cos(t * 1.2) * 25 + 10,
            y: window.scrollY + rect.top + rect.height / 2 + Math.sin(t * 1.5) * 12 + 15
          };
        }

        // 3. Manupa - hovers near Join Us Link
        if (joinEl) {
          const rect = joinEl.getBoundingClientRect();
          next.manupa = {
            x: window.scrollX + rect.left + rect.width / 2 + Math.sin(t * 1.6) * 30,
            y: window.scrollY + rect.top + rect.height / 2 + Math.cos(t * 1.1) * 10 + 10
          };
        }

        // 4. Suneth - hovers near Blogs Link
        if (blogsEl) {
          const rect = blogsEl.getBoundingClientRect();
          next.suneth = {
            x: window.scrollX + rect.left + rect.width / 2 + Math.cos(t * 2.0) * 15 - 5,
            y: window.scrollY + rect.top + rect.height / 2 + Math.sin(t * 1.4) * 8 + 10
          };
        }

        // 5. Nilusha - hovers near Let's Talk button
        if (talkEl) {
          const rect = talkEl.getBoundingClientRect();
          next.nilusha = {
            x: window.scrollX + rect.left + rect.width / 2 + Math.sin(t * 1.4) * 40 - 20,
            y: window.scrollY + rect.top + rect.height / 2 + Math.cos(t * 1.3) * 15 + 10
          };
        }

        // 6. Nayantha (Carrying hand) - floats near Let's talk
        if (talkEl) {
          const rect = talkEl.getBoundingClientRect();
          next.nayantha = {
            x: window.scrollX + rect.left + rect.width + 50 + Math.cos(t * 0.8) * 35,
            y: window.scrollY + rect.top + rect.height + 40 + Math.sin(t * 0.9) * 25
          };
        }

        // 7. Devin - floats in Hero Section area
        if (heroTextEl) {
          const rect = heroTextEl.getBoundingClientRect();
          next.devin = {
            x: window.scrollX + rect.left + rect.width / 4 + Math.sin(t * 0.5) * 150 - 50,
            y: window.scrollY + rect.top + rect.height * 2 + Math.cos(t * 0.6) * 80 + 100
          };
        }

        // 8. NayanthaHero - yellow cursor moving in hero area
        if (heroTextEl) {
          const rect = heroTextEl.getBoundingClientRect();
          next.nayanthaHero = {
            x: window.scrollX + rect.left + rect.width * 0.75 + Math.cos(t * 0.4) * 180 + 100,
            y: window.scrollY + rect.top + rect.height * 3 + Math.sin(t * 0.5) * 90 + 150
          };
        }

        // 9. SunethSocial - hovers near social buttons
        if (socialEl) {
          const rect = socialEl.getBoundingClientRect();
          next.sunethSocial = {
            x: window.scrollX + rect.left + Math.sin(t * 1.1) * 30 + 60,
            y: window.scrollY + rect.top + rect.height + 20 + Math.cos(t * 1.2) * 15
          };
        }

        return next;
      });

      requestRef.current = requestAnimationFrame(updatePositions);
    };

    requestRef.current = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-[999] overflow-hidden">
      {/* 1. Ravindu near logo */}
      <Cursor name="Ravindu" color={colors.ravindu} x={positions.ravindu.x} y={positions.ravindu.y} />

      {/* 2. Danny near Projects Link */}
      <Cursor name="Danny" color={colors.danny} x={positions.danny.x} y={positions.danny.y} />

      {/* 3. Manupa near Join Us */}
      <Cursor name="Manupa" color={colors.manupa} x={positions.manupa.x} y={positions.manupa.y} />

      {/* 4. Suneth near Blogs */}
      <Cursor name="Suneth" color={colors.suneth} x={positions.suneth.x} y={positions.suneth.y} />

      {/* 5. Nilusha near Let's Talk button */}
      <Cursor name="Nilusha" color={colors.nilusha} x={positions.nilusha.x} y={positions.nilusha.y} />

      {/* 6. Nayantha carrying hand waving */}
      <Cursor name="Nayantha" color={colors.nayantha} x={positions.nayantha.x} y={positions.nayantha.y} isWaving={true} />

      {/* 7. Devin floating in Hero */}
      <Cursor name="Devin" color={colors.devin} x={positions.devin.x} y={positions.devin.y} />

      {/* 8. Nayantha yellow cursor in Hero */}
      <Cursor name="Nayantha" color={colors.nayantha} x={positions.nayanthaHero.x} y={positions.nayanthaHero.y} />

      {/* 9. Suneth near social icons */}
      <Cursor name="Suneth" color={colors.suneth} x={positions.sunethSocial.x} y={positions.sunethSocial.y} />
    </div>
  );
};

export default MultiplayerCursors;
