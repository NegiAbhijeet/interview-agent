"use client"

import { useEffect, useRef } from "react"
import { LayoutWrapper } from "@/components/layout-wrapper"
import FilledButtonWrapper from "@/components/filledButtonWrapper"
import gsap from "gsap"
import CategorySection from "@/components/categorySection"
import InterviewShowcase from "@/components/InterviewShowcase"
import Footer from "@/components/Footer"
import Testimonials from "@/components/Testimonials"
import CtaSection from "@/components/ctaSection"
import LaunchToast from "@/components/LaunchToast"
import OutlineButtonWrapper from "@/components/OutlineButtonWrapper"
import FeatureSection from "@/components/featureSection"

export default function Page() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const startRef = useRef(null)
  const demoRef = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.5,
      defaults: { ease: "power3.out", duration: 0.6 },
    });

    if (headingRef.current) {
      tl.from(headingRef.current, {
        scale: 1.2,
        opacity: 0,
      });
    }

    if (imageRef.current) {
      tl.from(
        imageRef.current,
        {
          x: 60,
          opacity: 0,
        },
        "<"
      );
    }

    if (paragraphRef.current) {
      tl.from(
        paragraphRef.current,
        {
          scale: 0.95,
          opacity: 0,
          y: 20,
        },
        "-=0.4"
      );
    }

    tl.from(
      [startRef.current, demoRef.current],
      {
        scale: 0.8,
        opacity: 0,
        stagger: 0.2,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    );
  }, []);




  return (
    <section className="relative overflow-hidden text-white">
      <LaunchToast />
      <LayoutWrapper>
        <div className="text-center z-10 text-white flex flex-col relative overflow-hidden pt-[10%]">
          <h1 ref={headingRef} className="text-4xl md:text-6xl font-normal leading-tight text-gray-400">
            Meet <span className="text-white font-light">Nova</span>.
            <br />
            <span className="text-gray-400 font-normal">Your Interview Assistant.</span>
          </h1>
          <div ref={paragraphRef} className="mt-6 max-w-3xl mx-auto text-2xl font-light text-gray-200">
            Hire faster and ace your interview
          </div>
          <div className="mt-8 flex items-center gap-4 justify-center w-full" ref={buttonsRef}>
            <div ref={startRef}>
              <FilledButtonWrapper>Start Screening</FilledButtonWrapper>
            </div>
            <div ref={demoRef}>
              <OutlineButtonWrapper>Get Demo</OutlineButtonWrapper>
            </div>
          </div>
          <div className="mt-10">
            <a href="#learn-more" className="text-gray-500 hover:text-white transition">Learn more ↓</a>
          </div>
        </div>
      </LayoutWrapper>

      <LayoutWrapper>
        <InterviewShowcase />
      </LayoutWrapper>

      <FeatureSection />

      <LayoutWrapper><CategorySection /></LayoutWrapper>
      <LayoutWrapper>
        <Testimonials />
      </LayoutWrapper>
      <LayoutWrapper>
        <CtaSection />
      </LayoutWrapper>
      <Footer />
    </section >
  )
}
