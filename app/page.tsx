"use client";
import CategorySection from "@/components/categorySection";
import InterviewShowcase from "@/components/InterviewShowcase";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/ctaSection";
import FeatureSection from "@/components/featureSection";
import GradientButton from "@/components/buttons/GradientButton";
import NormalButton from "@/components/buttons/normalButton";

export default function Page() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* --- Dotted Grid Background (Furthest Behind) --- */}
      <div className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#000000_1px,transparent_1px)] dark:[background-image:radial-gradient(#ffffff_1px,transparent_1px)] -z-30 opacity-25"></div>

      {/* --- Radial Mask Overlay --- */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] -z-10"></div>

      <div className="text-center min-h-screen z-10 flex flex-col items-center justify-center relative overflow-hidden">
        <h1
          className="text-4xl md:text-6xl font-normal leading-tight text-black"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="600"
        >
          Meet <span className=" bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">Nova</span>.
          <br />
          <span className="text-black font-normal">
            Your Interview Assistant.
          </span>
        </h1>

        <div
          className="mt-6 max-w-3xl mx-auto text-2xl font-light text-gray-700"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="600"
        >
          Hire faster and ace your interview
        </div>

        <div
          className="mt-8 flex items-center gap-4 justify-center w-full"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="600"
        >
          <div
            data-aos="zoom-in-up"
            data-aos-delay="900"
            data-aos-duration="600"
          >
            <GradientButton text="Start for free" />
            {/* <FilledButtonWrapper className="bg-yellow-400 text-black hover:bg-yellow-400">
              Start for free
            </FilledButtonWrapper> */}
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="1200"
            data-aos-duration="600"
          >
            <NormalButton text="Get a Demo" />
          </div>
        </div>

        <div className="mt-10">
          <a
            href="#learn-more"
            className="text-gray-500 hover:text-white transition"
          >
            Learn more ↓
          </a>
        </div>
      </div>

      <InterviewShowcase />

      <FeatureSection />

      <CategorySection />

      <Testimonials />

      <CtaSection />
    </section>
  );
}
