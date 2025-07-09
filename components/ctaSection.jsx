import React from 'react';

const CtaSection = () => {
  return (
    <div className="relative w-full rounded-[2rem] overflow-hidden text-white p-10 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">
      {/* Radial Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute max-w-[1000px] w-[70%] h-[600px] bg-purple-500 opacity-40 blur-2xl rounded-full top-[-200px] left-1/2 transform -translate-x-1/2" />
      </div>

      {/* Texture Overlay using SVG */}
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
        <div className="inline-block px-4 py-2 rounded-full border border-white/40 text-sm font-medium backdrop-blur-sm bg-white/10">
          👋 Hi! I'm Alex. Are you ready to start hiring?
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">Let’s chat</h2>
        <p className="text-lg text-white/80">Questions? Curious? Connect with us.</p>
        <div className="flex justify-center gap-4 pt-4 flex-wrap">
          <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">
            Get Demo &nbsp;&#8594;
          </button>
          <button className="bg-white/10 border border-white/30 text-white font-medium px-6 py-3 rounded-full backdrop-blur-sm flex items-center gap-2 hover:bg-white/20 transition">
            ▶ View 5 min demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
