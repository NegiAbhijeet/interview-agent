import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
        },
      });

      // First animate heading and paragraph
      tl.from([headingRef.current, paragraphRef.current], {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Then animate cards
      tl.from(cardRefs.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      }, "+=0.2"); // optional delay between heading and cards
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <LayoutWrapper id="learn-more">
      <div ref={sectionRef}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block px-6 py-2 rounded-full mb-4 bg-purple-100 text-sm text-purple-600">
              Features
            </div>
            <h2
              ref={headingRef}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
            >
              Everything you need for smarter interviews
            </h2>
            <p
              ref={paragraphRef}
              className="max-w-[900px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
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
                ref={(el) => (cardRefs.current[index] = el)}
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
