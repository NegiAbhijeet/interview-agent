import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import FilledButtonWrapper from './filledButtonWrapper';
import OutlineButtonWrapper from "./OutlineButtonWrapper";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const CtaSection = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%', // Start when the top of section is 80% down viewport
          once: true,       // Optional: only trigger once
        },
      });

      const messages = [
        "👋 Hi! I'm Nova. Are you ready to start hiring?",
        "💡 Ready to discover top talent?"
      ];

      messages.forEach((msg) => {
        tl.to(textRef.current, {
          duration: 2,
          text: msg,
          ease: "power1.inOut",
        }).to(textRef.current, {
          duration: 0.5,
          delay: 1,
          text: "",
          ease: "power1.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full rounded-[2rem] overflow-hidden text-white p-10 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900"
    >
      {/* Radial Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute max-w-[1000px] w-[70%] h-[600px] bg-purple-500 opacity-40 blur-2xl rounded-full top-[-200px] left-1/2 transform -translate-x-1/2" />
      </div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        <div
          ref={textRef}
          className="inline-block px-4 py-2 rounded-full border border-white/40 text-sm font-medium backdrop-blur-sm bg-white/10 min-h-[2.5rem]"
        />
        <h2 className="text-4xl md:text-5xl font-bold">Let’s chat</h2>
        <p className="text-lg text-white/80">Questions? Curious? Connect with us.</p>
        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <OutlineButtonWrapper>Get Demo</OutlineButtonWrapper>
          <FilledButtonWrapper>▶ View 5 min demo</FilledButtonWrapper>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
