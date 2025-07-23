import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LayoutWrapper } from './layout-wrapper';
import { Lightbulb } from 'lucide-react';
import NormalButton from './buttons/normalButton';
import GradientButton from './buttons/GradientButton';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const CtaSection = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite message loop
      const messageTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      const messages = [
        "👋 Hi, I’m nova, are you ready for interview?",
        "💡 Ready to discover top talent?"
      ];

      messages.forEach((msg) => {
        messageTl.to(textRef.current, {
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

    return () => ctx.revert();
  }, []);


  return (
    <LayoutWrapper>
      <div
        ref={sectionRef}
        data-aos="fade-up"
        className="relative w-full rounded-[2rem] overflow-hidden text-white p-6 md:p-10 bg-gradient-to-r from-blue-400/60  to-pink-500/70"
      >
        {/* Radial Gradient Glow */}
        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="absolute max-w-4xl w-[70%] h-[600px] bg-purple-200 opacity-40 blur-2xl rounded-full top-[-200px] left-1/2 transform -translate-x-1/2" />
        </div> */}

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
          <div className='min-h-[50px]'>
            <div
              ref={textRef}
              className="inline-block px-4 py-2 rounded-full border border-white/40 text-sm font-medium backdrop-blur-sm bg-white/10 min-h-[2.5rem]"
            />
          </div>
          {/* <h2 className="text-4xl md:text-5xl font-bold">Let’s chat</h2> */}
          <p className="text-lg text-white/80 flex items-center justify-center"><span>Still Hiring the Old Way? You're Missing Out.&nbsp;</span><Lightbulb className='text-yellow-400' /></p>
          <div className="flex justify-center gap-4 pt-4 flex-wrap">
            <NormalButton text='Get a Demo' link={"https://calendly.com/saurabhdocsightai-com/30min"} className='min-w-[200px]' />

            <GradientButton text='▶ View 5 min demo' className='min-w-[200px]' />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default CtaSection;
