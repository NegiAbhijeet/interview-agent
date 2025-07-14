import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { CheckCircle, Puzzle } from "lucide-react";
import { LayoutWrapper } from "./layout-wrapper"; // adjust if needed
import HeadingComponentWrapper from "./headingComponentWrapper";

export default function FeatureSectionStyled() {
    const features = [
        {
            type: "Candidates",
            icon: <CheckCircle className="h-7 w-7 text-blue-400" />,
            badgeColor: "blue",
            title: "Master Your Moment. Own Your Future.",
            description: "Are you truly ready? Or will you miss out?",
            items: [
                {
                    icon: <CheckCircle className="h-5 w-5 text-indigo-400" />,
                    title: "Practice Daily, For Free",
                    desc: "Dive into unlimited AI mock interviews to sharpen your skills.",
                    color: "indigo",
                },
                {
                    icon: <CheckCircle className="h-5 w-5 text-teal-400" />,
                    title: "Transform Weaknesses",
                    desc: "Get instant feedback to convert weak spots into undeniable strengths.",
                    color: "teal",
                },
                {
                    icon: <CheckCircle className="h-5 w-5 text-emerald-400" />,
                    title: "Unshakeable Confidence",
                    desc: "Walk into every interview not just ready, but unstoppable.",
                    color: "emerald",
                },
            ],
        },
        {
            type: "Recruiters",
            icon: <CheckCircle className="h-7 w-7 text-purple-400" />,
            badgeColor: "purple",
            title: "Stop Guessing. Start Winning.",
            description: "Unlock a new era of hiring. Don't get left behind.",
            items: [
                {
                    icon: <CheckCircle className="h-5 w-5 text-indigo-400" />,
                    title: "Intelligent Screening",
                    desc: "Our AI screens candidates with unparalleled accuracy.",
                    color: "indigo",
                },
                {
                    icon: <CheckCircle className="h-5 w-5 text-teal-400" />,
                    title: "Data-Rich Decisions",
                    desc: "Get bias-free reports and crystal-clear insights for confident wins.",
                    color: "teal",
                },
                {
                    icon: <CheckCircle className="h-5 w-5 text-emerald-400" />,
                    title: "Eliminate Bias",
                    desc: "Secure the best fit, every time.",
                    color: "emerald",
                },
            ],
        },
    ];


    return (
        <LayoutWrapper>
            <section className="min-h-screen w-full py-20 relative overflow-hidden">
                <div className="mx-auto relative z-10">
                    {/* Header */}
                    <HeadingComponentWrapper
    icon={Puzzle}
    first="Your Unfair Advantage."
    second="Don't Just Compete, Dominate."
    third="Our platform gives you the unfair advantage. Powerful AI meets intuitive design to transform your interview game, whether you're hiring or getting hired."
  />
                    <div className="grid gap-4 lg:grid-cols-2 lg:gap-6 max-w-7xl mx-auto relative">
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
