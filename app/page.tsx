"use client";
import CategorySection from "@/components/categorySection";
import InterviewShowcase from "@/components/InterviewShowcase";
import Testimonials from "@/components/Testimonials";
import FeatureSection from "@/components/featureSection";
import GradientButton from "@/components/buttons/GradientButton";
import NormalButton from "@/components/buttons/normalButton";
import { LayoutWrapper } from "@/components/layout-wrapper";

export default function Page() {
  return (
    <section className="relative overflow-hidden text-white">
      <LayoutWrapper removePadding={true}>
        <div className="text-center min-h-screen z-10 flex flex-col items-center justify-center relative overflow-hidden">
          <h1
            className="text-4xl md:text-6xl font-normal leading-tight text-black"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            Meet <span className=" bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">Nova</span>.
            <br />
            <span className="text-black font-normal">
              Your Interview Assistant.
            </span>
          </h1>

          <div
            className="mt-6 max-w-4xl mx-auto text-2xl font-light text-gray-700"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="600"
          >
            Nova is built for everyone in the interview ecosystem giving recruiters powerful tools and candidates a clear path to success.        </div>

          <div
            className="mt-8 flex items-center gap-4 justify-center w-full"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="600"
          >
            <div
              data-aos="zoom-in-up"
              data-aos-delay="700"
              data-aos-duration="600"
            >
              <GradientButton text="Start for free" />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-delay="1000"
              data-aos-duration="600"
            >
              <NormalButton text='Get a Demo' link={"https://calendly.com/saurabhdocsightai-com/30min"} isOpenNextTab={true} />
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
      </LayoutWrapper>
      <InterviewShowcase />

      <FeatureSection />

      <CategorySection />

      <Testimonials />

    </section>
  );
}
