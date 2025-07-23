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
        className="w-[90%] md:w-[80%] mx-auto rounded-2xl h-[80vh] md:h-[80vh] h-auto flex items-center justify-center relative overflow-hidden"
      >
        {/* Overlay Image 1 (Top Left) */}
        <div
          className="absolute top-5 left-5 opacity-0 md:block w-[80px] sm:w-[140px] md:w-[200px]"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <img src="/graph-1.png" alt="Interview Score" className="w-full h-auto rounded-xl" />
        </div>

        {/* Overlay Image 2 (Bottom Left) */}
        <div
          className="absolute bottom-10 left-[20%] opacity-0 md:block w-[80px] sm:w-[140px] md:w-[200px]"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <img src="/graph-2.png" alt="Candidate Insights" className="w-full h-auto rounded-xl" />
        </div>

        {/* Overlay Image 3 (Top Right) */}
        <div
          className="absolute top-10 right-5 opacity-0 md:block w-[80px] sm:w-[140px] md:w-[200px]"
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <img src="/graph-3.png" alt="Skill Graph" className="w-full h-auto rounded-xl" />
        </div>


        {/* Main image */}
        <img
          src="/hero-image.jpeg"
          alt="Interview"
          className="w-full object-contain rounded-xl shadow-2xl -z-1"
        />
      </div>

    </LayoutWrapper>
  );
};

export default InterviewShowcase;
