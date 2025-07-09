// components/InterviewShowcase.jsx

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const InterviewShowcase = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
  sectionRefs.current.forEach((ref, index) => {
    gsap.fromTo(
      ref,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: index * 0.6,
        repeat: -1,
        repeatDelay: 3, 
        yoyo: true,
        ease: 'power3.out',
        yoyoEase: 'power1.inOut' 
      }
    );
  });
}, []);


  return (
    <div className="w-[80%] mx-auto rounded-2xl h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 relative overflow-hidden">
      
      {/* Animated Sections (random positions) */}
      {/* Interview Score – Top Left */}
      <div className="absolute top-10 left-10" ref={(el) => (sectionRefs.current[0] = el)}>
        <div className="bg-white p-5 rounded-xl shadow-xl w-64 text-black font-semibold">
          <p className="text-lg mb-2">Interview Score</p>
          <div className="relative w-24 h-24 mx-auto mb-3">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="48" cy="48" r="40" stroke="#E5E7EB" strokeWidth="10" fill="none" />
              <circle cx="48" cy="48" r="40" stroke="#3B82F6" strokeWidth="10" fill="none" strokeDasharray="251.2" strokeDashoffset="25" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xl text-blue-600">93</div>
          </div>
          <p className="text-sm text-gray-600">Strong Python & JS knowledge</p>
        </div>
      </div>

      {/* Candidate Stats – Top Mid-Left */}
      <div className="absolute bottom-20 left-[25%]" ref={(el) => (sectionRefs.current[1] = el)}>
        <div className="bg-white p-5 rounded-xl shadow-xl w-64 text-black">
          <p className="font-bold mb-2">Candidate Insights</p>
          <div className="mb-3">
            <p className="text-sm">Total Interviewed: <span className="font-semibold">586</span></p>
            <p className="text-green-500 text-xs">+147% this month</p>
          </div>
          <div className="mb-1">
            <p className="text-sm">Completion Rate</p>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-indigo-500 rounded-full w-[85%]"></div>
            </div>
          </div>
          <div>
            <p className="text-sm">Success Rate</p>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-green-500 rounded-full w-[70%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Graph – Top Right */}
      <div className="absolute top-16 right-12" ref={(el) => (sectionRefs.current[2] = el)}>
        <div className="bg-white p-5 rounded-xl shadow-xl w-64 text-black">
          <p className="font-bold mb-2">Skill Graph</p>
          <div className="flex gap-1 items-end h-24">
            <div className="bg-blue-500 w-4 h-10"></div>
            <div className="bg-purple-500 w-4 h-16"></div>
            <div className="bg-blue-400 w-4 h-20"></div>
            <div className="bg-purple-400 w-4 h-14"></div>
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span>JS</span>
            <span>Py</span>
            <span>Comm</span>
            <span>FS</span>
          </div>
        </div>
      </div>

      {/* Main Image (centered but lower) */}
      <img
        src="/graphic-image.png"
        alt="Interview"
        className="w-[80%] rounded-xl shadow-2xl -z-1"
      />
    </div>
  );
};

export default InterviewShowcase;
