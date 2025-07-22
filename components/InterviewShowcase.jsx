import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LayoutWrapper } from "./layout-wrapper";

gsap.registerPlugin(ScrollTrigger);

const InterviewShowcase = () => {
  const sectionRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const parentTimeline = gsap.fromTo(
      containerRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        onComplete: () => {
          // Start looping child animation after parent animation is done
          const loopTl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

          sectionRefs.current.forEach((ref, index) => {
            // Animate each section in with stagger
            loopTl.fromTo(
              ref,
              { opacity: 0, y: 60 },
              {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out",
              },
              index * 0.6 // stagger in
            );
          });

          const totalInDuration = sectionRefs.current.length * 0.6 + 1.2;

          // Add a pause after all have appeared
          loopTl.to({}, { duration: 2.5 }); // blank tween = pause

          sectionRefs.current.forEach((ref, index) => {
            // Animate each section out (no stagger needed unless you want)
            loopTl.to(
              ref,
              {
                opacity: 0,
                y: -20,
                duration: 0.5,
                ease: "power2.in",
              },
              "+=0" // immediately after the pause
            );
          });
        },
      }
    );
  }, []);

  return (
    <LayoutWrapper>
      <div
        ref={containerRef}
        className="w-[80%] mx-auto rounded-2xl h-[80vh] flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated Cards */}
        <div
          className="absolute top-10 left-10 opacity-0"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          {/* Interview Score Card */}
          <div className="bg-white p-5 rounded-xl shadow-xl w-64 text-black font-semibold">
            <p className="text-lg mb-2">Interview Score</p>
            <div className="relative w-24 h-24 mx-auto mb-3">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#E5E7EB"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#3B82F6"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="251.2"
                  strokeDashoffset="25"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl text-blue-600">
                93
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Strong Python & JS knowledge
            </p>
          </div>
        </div>

        {/* Candidate Stats */}
        <div
          className="absolute bottom-20 left-[25%] opacity-0"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <div className="bg-white p-5 rounded-xl shadow-xl w-64 text-black">
            <p className="font-bold mb-2">Candidate Insights</p>
            <div className="mb-3">
              <p className="text-sm">
                Total Interviewed: <span className="font-semibold">586</span>
              </p>
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

        {/* Graph */}
        <div
          className="absolute top-16 right-12 opacity-0"
          ref={(el) => (sectionRefs.current[2] = el)}
        >
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

        {/* Main image */}
        <img
          src="/hero-image.jpeg"
          alt="Interview"
          className="h-[100%] rounded-xl shadow-2xl -z-1"
        />
      </div>
    </LayoutWrapper>
  );
};

export default InterviewShowcase;
