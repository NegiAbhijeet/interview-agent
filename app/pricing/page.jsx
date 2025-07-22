"use client";
import { LayoutWrapper } from "@/components/layout-wrapper";
import ContactForm from "@/components/contact-form";
import FaqSection from "@/components/FaqSection";
import PricingPlans from "@/components/pricingPlans";

const page = () => {
  return (
    <section className="relative overflow-hidden text-white mt-[10%]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1
              className="text-4xl md:text-6xl font-normal leading-tight text-black"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="600"
            >
              Flexible Plans, Clear Costs.
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              className="mt-6 max-w-4xl mx-auto text-2xl font-light text-gray-700"
            >
              Both recruiters and candidates find their fit here.
            </p>
          </div>
        </div>
      </div>

      <LayoutWrapper>
        <PricingPlans />
      </LayoutWrapper>
      <ContactForm
        heading={"Ready to Purchase?"}
        description={
          "Reach out directly using the form below — our team will respond within 24 hours to help you get started."
        }
      />
      <FaqSection />
    </section>
  );
};

export default page;
