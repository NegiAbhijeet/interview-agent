"use client";
import { LayoutWrapper } from "@/components/layout-wrapper";
import FilledButtonWrapper from "@/components/filledButtonWrapper";
import CategorySection from "@/components/categorySection";
import InterviewShowcase from "@/components/InterviewShowcase";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/ctaSection";
import LaunchToast from "@/components/LaunchToast";
import OutlineButtonWrapper from "@/components/OutlineButtonWrapper";
import FeatureSection from "@/components/featureSection";

export default function Page() {
  return (
    <section className="relative overflow-hidden text-white">
      <LaunchToast />
      <LayoutWrapper>
        <div className="text-center z-10 text-white flex flex-col relative overflow-hidden pt-[10%]">
          <h1
            className="text-4xl md:text-6xl font-normal leading-tight text-gray-400"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="600"
          >
            Meet <span className="text-white font-light">Nova</span>.
            <br />
            <span className="text-gray-400 font-normal">
              Your Interview Assistant.
            </span>
          </h1>

          <div
            className="mt-6 max-w-3xl mx-auto text-2xl font-light text-gray-200"
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
              <FilledButtonWrapper className="bg-yellow-400 text-black hover:bg-yellow-400">
                Start for free
              </FilledButtonWrapper>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="1200"
              data-aos-duration="600"
            >
              <OutlineButtonWrapper>Get a Demo</OutlineButtonWrapper>
            </div>
          </div>

          <div
            className="mt-10"
            data-aos="zoom-in-up"
            data-aos-delay="1300"
            data-aos-duration="600"
          >
            <a
              href="#learn-more"
              className="text-gray-500 hover:text-white transition"
            >
              Learn more ↓
            </a>
          </div>
        </div>
      </LayoutWrapper>

      <InterviewShowcase />

      <FeatureSection />

      <CategorySection />

      <Testimonials />

      <CtaSection />
    </section>
  );
}
