import { LayoutWrapper } from "./layout-wrapper";
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

import HeadingComponentWrapper from "./headingComponentWrapper";
import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";

import {
  Bot,
  Settings,
  ClipboardList,
  MessageCircleCode,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    title: "Mock Interview Mode with AI Feedback",
    description:
      "Practice and perfect! Get instant AI feedback on your responses. Enjoy 15 free minutes daily to boost your confidence",
    icon: <MessageCircleCode className="h-6 w-6 text-purple-500" />,
    glowColor: "#8b5cf6",
    colSpan: "sm:col-span-8", // wide
  },

  {
    title: "Scripted & Fair Interviews",
    description:
      "Ensure consistency and fairness. Every candidate hears the exact same set of questions, perfectly aligned with your job requirements, guaranteeing unbiased and comparable results.",
    icon: <ClipboardList className="h-6 w-6 text-green-500" />,
    glowColor: "#10b981",
    colSpan: "sm:col-span-8", // wide
  },
  {
    title: "AI-Powered Agent",
    description:
      "Our intelligent agent joins every call, asks all your predefined questions, and meticulously logs each answer. It's like having an extra team member for every interview.",
    icon: <Bot className="h-6 w-6 text-blue-500" />,
    glowColor: "#3b82f6",
    colSpan: "sm:col-span-4", // narrow
  },
  {
    title: "Scale Hiring, Effortlessly",
    description:
      "Handle any volume, from a few interviews to thousands, without extra staff. Focus on talent, not logistics.",
    icon: <MessageSquare className="h-6 w-6 text-pink-500" />,
    glowColor: "#ec4899",
    colSpan: "sm:col-span-4", // narrow
  },
];



const FeatureSection = () => {
  return (
    <LayoutWrapper>
      <div className="flex flex-col items-center relative">
        <HeadingComponentWrapper
          icon={Settings}
          first="Features"
          second="Your Complete Hub for Smarter Interviews."
          third="The unified platform designed for Recruiters, HR Agencies, and Motivated Candidates."
        />

        <div className="w-full max-w-7xl mx-auto">
          <GlowingCards className="flex flex-wrap gap-3">
            {features.map((feature, index) => {
              // Responsive size: big for index 1 & 2 on lg, else 25%
              const sizeClass =
                index === 1 || index === 2
                  ? 'w-full md:basis-1/2 lg:basis-1/2' // Big cards
                  : 'w-full md:basis-1/2 lg:basis-1/4'; // Small cards

              return (
                <GlowingCard
                  data-aos="fade-up"
                  data-aos-delay={600 + index * 200}
                  key={index}
                  glowColor={feature.glowColor}
                  className={`min-h-[230px] ${sizeClass} flex flex-col p-0`}
                >
                  <CardHeader>{feature.icon}</CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <CardTitle className="mb-2">{feature.title}</CardTitle>
                    <CardDescription className="flex-grow">{feature.description}</CardDescription>
                  </CardContent>
                </GlowingCard>
              );
            })}
          </GlowingCards>
        </div>


      </div>
    </LayoutWrapper>
  );
};

export default FeatureSection;
