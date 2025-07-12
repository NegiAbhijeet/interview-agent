import HeadingWrapper from "@/components/headingWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Target, Rocket, Users, Search, Lightbulb, TrendingUp, Sparkles,
} from "lucide-react";
import { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LayoutWrapper } from "./layout-wrapper";

export default function CategorySection() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const cardData = [
        {
            type: "Companies",
            icon: <Users className="h-7 w-7 text-blue-400" />,
            badgeColor: "blue",
            title: "Don't miss your next great hire.",
            description: "Streamline your recruitment process with intelligent matching",
            items: [
                {
                    icon: <Target className="h-5 w-5 text-purple-400" />,
                    title: "Never miss top interview opportunities again.",
                    desc: "Smart notifications and automated scheduling",
                    color: "purple",
                },
                {
                    icon: <Rocket className="h-5 w-5 text-purple-400" />,
                    title: "Increase recruitment productivity by up to 10x.",
                    desc: "AI-powered candidate screening and matching",
                    color: "purple",
                },
                {
                    icon: <TrendingUp className="h-5 w-5 text-orange-400" />,
                    title: "Invest smart: connect only with the right-fit candidates.",
                    desc: "Advanced filtering and compatibility scoring",
                    color: "orange",
                },
            ],
        },
        {
            type: "Candidates",
            icon: <Search className="h-7 w-7 text-purple-400" />,
            badgeColor: "purple",
            title: "Don't miss your next interview.",
            description: "Ace every interview with personalized preparation tools",
            items: [
                {
                    icon: <Lightbulb className="h-5 w-5 text-blue-400" />,
                    title: "Get actionable insights into your weak points.",
                    desc: "Detailed performance analytics and improvement tips",
                    color: "blue",
                },
                {
                    icon: <Users className="h-5 w-5 text-violet-400" />,
                    title: "Practice with in-depth mock interviews by domain experts.",
                    desc: "Real-time feedback from industry professionals",
                    color: "violet",
                },
                {
                    icon: <Target className="h-5 w-5 text-purple-400" />,
                    title: "Grab your next job interview with confidence.",
                    desc: "Personalized coaching and confidence building",
                    color: "purple",
                },
            ],
        },
    ];

    return (
        <LayoutWrapper>
            <section className="min-h-screen w-full py-20 relative overflow-hidden" ref={sectionRef}>
                <div className="mx-auto relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <HeadingWrapper icon={Sparkles} text="Dual Solutions" />

                        <h2
                            ref={headingRef}
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Perfect Match for Everyone
                        </h2>

                        <p
                            ref={paragraphRef}
                            className="max-w-[900px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            Whether you're hiring or job hunting, we've got the tools to make it seamless
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-7xl mx-auto relative">
                        <div
                            className="opacity-70 blur-2xl absolute w-[70%] h-[100%] bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 rounded-3xl pointer-events-none"
                            style={{
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                zIndex: "-1",
                            }}
                        />
                        {cardData.map((section, idx) => (
                            <div
                                key={idx}
                                className="spectacledcoder-gradient-card"
                                data-aos="fade-up"
                                data-aos-delay={600 + idx * 200}
                            >
                                <Card className="spectacledcoder-content-card group relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all hover:shadow-xl">
                                    <CardHeader className="relative z-10 py-6 px-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`p-3 rounded-xl bg-gradient-to-br from-${section.badgeColor}-500/20 to-${section.badgeColor}-500/20 border border-${section.badgeColor}-500/30`}>
                                                {section.icon}
                                            </div>
                                            <div>
                                                <span className={`text-sm font-semibold text-${section.badgeColor}-400 uppercase tracking-wider block`}>
                                                    For {section.type}
                                                </span>
                                                <div className={`w-12 h-0.5 bg-gradient-to-r from-${section.badgeColor}-500 to-${section.badgeColor}-500 mt-1`} />
                                            </div>
                                        </div>
                                        <CardTitle className="text-xl md:text-2xl font-bold text-white leading-tight mb-3">
                                            {section.title}
                                        </CardTitle>
                                        <p className="text-slate-400 text-base">{section.description}</p>
                                    </CardHeader>

                                    <CardContent className="relative z-10 space-y-4 pb-4">
                                        <div className="space-y-2">
                                            {section.items.map((item, itemIdx) => (
                                                <div
                                                    key={itemIdx}
                                                    className="flex items-start gap-5 group/item p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:translate-x-2"

                                                >
                                                    <div className={`p-2.5 rounded-lg bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-500/20 border border-${item.color}-500/30 mt-1`}>
                                                        {item.icon}
                                                    </div>
                                                    <div>
                                                        <p className="text-white font-semibold text-base leading-relaxed mb-1">
                                                            {item.title}
                                                        </p>
                                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </LayoutWrapper>
    );
}
