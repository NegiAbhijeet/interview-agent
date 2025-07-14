import HeadingWrapper from "@/components/headingWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Target, Rocket, Users, Search, Lightbulb, TrendingUp, Sparkles,
    Flame,
    Zap,
    AlarmClock,
} from "lucide-react";
import 'aos/dist/aos.css';
import { LayoutWrapper } from "./layout-wrapper";
import HeadingComponentWrapper from "./headingComponentWrapper";

export default function CategorySection() {
    const cardData = [
        {
            type: "Empowering Recruiters",
            icon: <Users className="h-7 w-7 text-blue-400" />,
            badgeColor: "blue",
            title: "Unlock Your Next Great Hire. Faster.",
            description: "Streamline your recruitment with intelligent AI and unmatched efficiency.",
            items: [
                {
                    icon: <Flame className="h-5 w-5 text-yellow-400" />,
                    title: "Ignite Recruiter Productivity",
                    desc: "Increase recruiter output by up to 10x. Nova's automated screening lets your team focus solely on engaging perfect-fit candidates.",
                    color: "purple",
                },
                {
                    icon: <Target className="h-5 w-5 text-purple-400" />,
                    title: "Never Miss Top Talent",
                    desc: "Engage every candidate with live, two-way conversations at scale, ensuring you never miss a great hire with smart scheduling.",
                    color: "purple",
                },
                {
                    icon: <Lightbulb className="h-5 w-5 text-orange-400" />,
                    title: "Invest Smarter, Hire Better",
                    desc: "Pinpoint top talent from day one with smart filtering and compatibility scoring.",
                    color: "orange",
                },
            ],
        },
        {
            type: "Own Your Next Interview",
            icon: <Search className="h-7 w-7 text-purple-400" />,
            badgeColor: "purple",
            title: "Don't Just Apply. Dominate. Your Next Interview Awaits.",
            description: "Unlock personalized preparation tools and ace every opportunity.",
            items: [
                {
                    icon: <Zap className="h-5 w-5 text-orange-400" />,
                    title: "Pinpoint & Power Up Your Weaknesses",
                    desc: "Uncover your exact weak points with Nova's AI feedback – never miss a perfect answer again.",
                    color: "blue",
                },
                {
                    icon: <AlarmClock className="h-5 w-5 text-red-400" />,
                    title: "Practice Like a Pro, For Free",
                    desc: "Practice daily with Nova's AI for 15 free minutes, getting expert feedback to instantly refine your answers.",
                    color: "violet",
                },
                {
                    icon: <Rocket className="h-5 w-5 text-purple-400" />,
                    title: "Grab Your Next Opportunity with Unshakeable Confidence",
                    desc: "Unlock unstoppable confidence for every interview – don't get left behind.",
                    color: "purple",
                },
            ]
            ,
        },
    ];

    return (
        <LayoutWrapper>
            <section className="min-h-screen w-full py-20 relative overflow-hidden">
                <div className="mx-auto relative z-10">
                    {/* Section Header */}
                    <HeadingComponentWrapper
                        icon={Sparkles}
                        first="The Dual Solution You Didn't Know You Needed."
                        second="Perfect Match for Everyone."
                        third="Whether you're shaping a team or crafting your career, dive into the seamless experience our platform offers."
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
                                                    {section.type}
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
