"use client";
import { LayoutWrapper } from "@/components/layout-wrapper";
import AboutFeatureCardsSection from "@/components/AboutFeatureCardsSection";
import HeadingComponentWrapper from "@/components/headingComponentWrapper";
import AdvantageSection from "@/components/advantageSection";
import {
  GraduationCap,
  Lightbulb,
  Bolt,
  ShieldCheck,
  BarChart,
  Rocket,
  SearchCheck,
  Users,
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    type: "Job Seekers",
    icon: <GraduationCap className="h-7 w-7 text-blue-400" />, // learning/growth
    badgeColor: "blue",
    items: [
      {
        icon: <SearchCheck className="h-5 w-5 text-indigo-400" />,
        title: "Your Next Opportunity Awaits",
        desc: "This is your moment to master every interview.",
        color: "indigo",
      },
      {
        icon: <Lightbulb className="h-5 w-5 text-orange-400" />,
        title: "Practice for Perfection",
        desc: "Get instant AI feedback daily to pinpoint weaknesses and build unshakeable confidence.",
        color: "orange",
      },
      {
        icon: <Rocket className="h-5 w-5 text-teal-400" />,
        title: "Be Unignorable",
        desc: "Stop guessing and start excelling to secure your dream job or internship.",
        color: "teal",
      },
    ],
  },
  {
    type: "Recruiting Teams",
    icon: <Users className="h-7 w-7 text-purple-400" />, // team-focused
    badgeColor: "purple",
    items: [
      {
        icon: <Bolt className="h-5 w-5 text-indigo-400" />,
        title: "Stop Wasting Time: Start Winning Talent",
        desc: "Revolutionize hiring by eliminating busywork, bias, and endless hours.",
        color: "indigo",
      },
      {
        icon: <BarChart className="h-5 w-5 text-orange-400" />,
        title: "Strategic Advantage",
        desc: "Slash screening time, gain crystal clear data, and handle hundreds & thousands of interviews with unprecedented speed.",
        color: "orange",
      },
      {
        icon: <ShieldCheck className="h-5 w-5 text-teal-400" />,
        title: "Don't Get Left Behind",
        desc: "Access the insights and efficiency top teams are already leveraging.",
        color: "teal",
      },
    ],
  },
];


const page = () => {
  return (
    <section className="relative overflow-hidden text-white mt-[100px] md:mt-[12%] lg-[10%]">

      <LayoutWrapper removePadding={true}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1
                className="text-4xl md:text-6xl font-normal leading-tight text-black"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="600"
              >
                About <span className="text-gradient">AI</span> Interview Agent
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                className="mt-6 max-w-4xl mx-auto text-2xl font-light text-gray-700"
              >
                Nova revolutionizes first round interviews by eliminating manual
                screening and unconscious bias. Our intelligent agent(Nova) asks
                scripted questions, precisely scores every response, and
                delivers clear, actionable reports within minutes. This means
                recruiters can hire faster with data backed decisions, while job
                seekers can practice daily for free to sharpen their skills and
                boost their confidence. It's the future of talent acquisition,
                simplified.            </p>
            </div>
          </div>
        </div>
      </LayoutWrapper>
      <LayoutWrapper>
        {/* Mission Section */}
        <section className="w-full ">
          <div className="mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <HeadingComponentWrapper
                  icon={Lightbulb}
                  first="Our Mission"
                  second="Revolutionizing Interview Preparation"
                  third="We're revolutionizing talent discovery and preparation. Our
                  vision is to redefine first round interviews, creating a
                  seamless and equitable experience. We empower recruiting teams
                  with rapid, objective assessments for data driven hires, while
                  equipping job seekers with tools to master interviews and
                  confidently seize their future. This is building a smarter,
                  fairer future for talent worldwide."
                />

              </div>
              <div className="flex items-center justify-end">
                <div className="relative w-full max-w-[550px]">
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-teal-500 opacity-20 blur-xl"></div>
                  <img
                    src="/image2.png?height=550&width=550"
                    alt="Interview Preparation Illustration"
                    width={550}
                    height={550}
                    className="relative rounded-2xl shadow-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutWrapper>
      <LayoutWrapper>
        {/* Who We Serve Section */}
        <section className="w-full ">
          <div className="">
            <HeadingComponentWrapper
              icon={Users}
              first="Who We Serve"
              second="Your Edge in Talent."
              third="Unlock Unprecedented Efficiency & Opportunity."
            />
            <div className="grid gap-4 lg:grid-cols-2 lg:gap-6 max-w-7xl mx-auto relative">

              {features.map((section, idx) => (
                <FeatureCard key={idx} section={section} idx={idx} />
              ))}
            </div>
          </div>
        </section>
      </LayoutWrapper>
      {/* Features Section */}
      <AboutFeatureCardsSection />
      <AdvantageSection />

    </section>
  );
};

export default page;
