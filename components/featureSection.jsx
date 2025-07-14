import { LayoutWrapper } from "./layout-wrapper";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

import HeadingComponentWrapper from "./headingComponentWrapper";

import {
  Bot,
  Settings,
  ClipboardList,
  MessageCircleCode,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    title: "AI-Powered Agent",
    description:
      "Our intelligent agent joins every call, asks all your predefined questions, and meticulously logs each answer. It's like having an extra team member for every interview.",
    icon: <Bot className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Scripted & Fair Interviews",
    description:
      "Ensure consistency and fairness. Every candidate hears the exact same set of questions, perfectly aligned with your job requirements, guaranteeing unbiased and comparable results.",
    icon: <ClipboardList className="h-6 w-6 text-green-500" />,
  },
  {
    title: "Mock Interview Mode with AI Feedback",
    description:
      "Practice and perfect! Get instant AI feedback on your responses. Enjoy 15 free minutes daily to boost your confidence",
    icon: <MessageCircleCode className="h-6 w-6 text-purple-500" />,
  },
  {
    title: "Scale Hiring, Effortlessly",
    description:
      "Handle any volume, from a few interviews to thousands, without extra staff. Focus on talent, not logistics",
    icon: <MessageSquare className="h-6 w-6 text-pink-500" />, // ✅ Fixed
  },
];



const FeatureSection = () => {
  return (
    <LayoutWrapper id="learn-more">
      <div>
        <HeadingComponentWrapper
          icon={Settings}
          first="Features"
          second="Your Complete Hub for Smarter Interviews."
          third="The unified platform designed for Recruiters, HR Agencies, and Motivated Candidates."
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Gradient Background Blur */}
          <div
            className="opacity-70 blur-2xl absolute w-[70%] h-[100%] bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 rounded-3xl pointer-events-none"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "-1",
            }}
          />

          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="spectacledcoder-gradient-card"
                data-aos="fade-up"
                data-aos-delay={`${600 + index * 100}`} // staggered delay
                data-aos-duration="600"
              >
                <Card className="spectacledcoder-content-card group relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all hover:shadow-xl">
                  <CardHeader className="pb-2">
                    <div className="mb-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 p-2 w-fit">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-200">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default FeatureSection;
