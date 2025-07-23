import React from "react";
import { CalendarClock, Users, DollarSign, Lightbulb } from "lucide-react";
import { LayoutWrapper } from "./layout-wrapper";
import {
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";// adjust import path as needed
import HeadingComponentWrapper from "./headingComponentWrapper";

const AdvantageSection = () => {
  const features = [
    {
      icon: <CalendarClock className="w-8 h-8 text-[#8b5cf6]" />,
      title: "Screen 16x More Candidates",
      description:
        "Engage top talent anytime, including nights and weekends, without scheduling conflicts.",
      glowColor: "#8b5cf6",
    },
    {
      icon: <Users className="w-8 h-8 text-[#10b981]" />,
      title: "Hire 91% Faster",
      description:
        "Interview multiple candidates simultaneously, effortlessly scaling your screening process.",
      glowColor: "#10b981",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#3b82f6]" />,
      title: "Interview 93% Cheaper",
      description:
        "Maximize your top of funnel with automated reminders and follow ups, engaging more candidates for less.",
      glowColor: "#3b82f6",
    },
  ];

  return (
    <LayoutWrapper>
      <div className="w-full max-w-7xl mx-auto text-center">


        <HeadingComponentWrapper
          icon={Lightbulb}
          second="Extra Edge Advantages for Recruiters"

        />
        <GlowingCards className="flex flex-wrap gap-4">
          {features.map((feature, index) => {
            // Make index 0 and 1 => 50% width, index 2 => 100% width on large screens
            const sizeClass =
              "w-full md:w-1/2 lg:w-1/2"; // half width

            return (
              <GlowingCard
                key={index}
                data-aos="fade-up"
                data-aos-delay={600 + index * 200}
                glowColor={feature.glowColor}
                className={`min-h-[230px] ${sizeClass} flex flex-col p-0`}
              >
                <CardHeader>{feature.icon}</CardHeader>
                <CardContent className="flex flex-col flex-grow px-4 pb-4">
                  <CardTitle className="mb-2 ">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="flex-grow  text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </GlowingCard>
            );
          })}
        </GlowingCards>

      </div>
    </LayoutWrapper>
  );
};

export default AdvantageSection;
