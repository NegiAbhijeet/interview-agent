import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { CheckCircle, Puzzle } from "lucide-react";
import { LayoutWrapper } from "./layout-wrapper"; // adjust if needed
import HeadingWrapper from "./headingWrapper";

export default function FeatureSectionStyled() {
    const features = [
        {
            type: "Interviewees",
            icon: <CheckCircle className="h-7 w-7 text-blue-400" />,
            badgeColor: "blue",
            title: "Tools built to help you succeed.",
            description: "Optimize your prep with personalized, data-driven insights.",
            items: [
                {
                    icon: <CheckCircle className="h-5 w-5 text-indigo-400" />,
                    title: "AI-Powered Mock Interviews",
                    desc: "Simulate real interview scenarios with intelligent feedback.",
                    color: "indigo",
                },
                {
                    icon: <CheckCircle className="h-5 w-5 text-teal-400" />,
                    title: "Real-Time Feedback",
                    desc: "Instant response analysis to improve performance on the fly.",
                    color: "teal",
                },
            ],
        },
        {
            type: "Interviewers",
            icon: <CheckCircle className="h-7 w-7 text-purple-400" />,
            badgeColor: "purple",
            title: "Streamline your interviewing process.",
            description: "Make interviewing faster and more insightful with built-in tools.",
            items: [
                {
                    icon: <CheckCircle className="h-5 w-5 text-indigo-400" />,
                    title: "Video Conferencing",
                    desc: "Built-in conferencing to host seamless remote interviews.",
                    color: "indigo",
                },
                {
                    icon: <CheckCircle className="h-5 w-5 text-teal-400" />,
                    title: "Performance Analytics",
                    desc: "Detailed analytics for better post-interview evaluations.",
                    color: "teal",
                },
            ],
        },
    ];

    return (
        <LayoutWrapper>
            <section className="min-h-screen w-full py-20 relative overflow-hidden">
                <div className="mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <HeadingWrapper icon={Puzzle} text="Core Capabilities" />

                        <h2
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Designed for Success
                        </h2>
                        <p
                            className="max-w-[900px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            Our platform blends powerful features with intuitive design to help both interviewers and interviewees excel.
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
                        {features.map((section, idx) => (
                            <div
                                key={idx}
                                className="spectacledcoder-gradient-card w-full"
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
