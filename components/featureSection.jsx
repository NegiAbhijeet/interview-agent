import { LayoutWrapper } from "./layout-wrapper";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  CheckCircle,
  Edit3,
  Clock,
  MessageSquare,
  Settings,
} from "lucide-react";
import HeadingWrapper from "./headingWrapper";

const features = [
  {
    title: "AI-Powered Agent",
    description:
      "Joins the call, asks every question for you, records and logs each answer.",
    icon: CheckCircle,
  },
  {
    title: "Scripted Interviews",
    description:
      "Every candidate hears the same set of questions that match your job requirement, so results stay fair.",
    icon: Edit3,
  },
  {
    title: "Mock Interview Mode",
    description:
      "Candidates get instant practice with AI feedback and 15 free minutes that refill daily.",
    icon: Clock,
  },
  {
    title: "Searchable Transcript",
    description:
      "A time-stamped transcript and short summary land in your inbox when the call ends.",
    icon: MessageSquare,
  },
];

const FeatureSection = () => {
  return (
    <LayoutWrapper id="learn-more">
      <div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <HeadingWrapper icon={Settings} text="Features" />


            <h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              Everything you need for smarter interviews
            </h2>

            <p
              className="max-w-[900px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
            >
              One platform for Recruiters, HR Agencies, and Motivated Candidates.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 mt-12 gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
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
            const Icon = feature.icon;
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
                      <Icon className="h-6 w-6 text-purple-600" />
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
