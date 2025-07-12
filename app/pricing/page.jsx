"use client";
import { LayoutWrapper } from "@/components/layout-wrapper";
import CtaSection from "@/components/ctaSection";
import ContactForm from "@/components/contact-form"
import FaqSection from "@/components/FaqSection"
import PricingPlans from "@/components/pricingPlans"
const page = () => {
    return (
        <section className="relative overflow-hidden text-white mt-[10%]">
            <section className="w-full py-12 ">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                                Simple, Transparent Pricing
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-300 md:text-sm/relaxed lg:text-md/relaxed xl:text-lg/relaxed">
                                Pick the plan that matches your hiring or preparation needs. Recruiters pay only for minutes beyond your free fifteen. Candidates always start with 15 free minutes each day. Cancel anytime.                </p>
                        </div>
                    </div>
                </div>
            </section>
            <LayoutWrapper>
                <PricingPlans />
            </LayoutWrapper>
            <ContactForm heading={"Ready to Purchase?"} description={"Reach out directly using the form below — our team will respond within 24 hours to help you get started."} />
            <FaqSection />
            <LayoutWrapper>
                <CtaSection />
            </LayoutWrapper>
        </section>
    )
}

export default page
