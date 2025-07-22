import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { LayoutWrapper } from "./layout-wrapper"; // adjust if needed
import HeadingComponentWrapper from "./headingComponentWrapper";
import {
    Brain,
    Rocket,
    Sparkles,
    Lightbulb,
    ShieldCheck,
    BarChart,
    Puzzle,
    UserCheck,
    SearchCheck,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
    {
        type: "Candidates",
        icon: <Rocket className="h-7 w-7 text-blue-400" />, // Progress / Launching career
        badgeColor: "blue",
        title: "Master Your Moment. Own Your Future.",
        description: "Are you truly ready? Or will you miss out?",
        items: [
            {
                icon: <UserCheck className="h-5 w-5 text-indigo-400" />, // Practice-oriented
                title: "Practice Daily, For Free",
                desc: "Dive into unlimited AI mock interviews to sharpen your skills.",
                color: "indigo",
            },
            {
                icon: <Brain className="h-5 w-5 text-teal-400" />, // Learning/improvement
                title: "Transform Weaknesses",
                desc: "Get instant feedback to convert weak spots into undeniable strengths.",
                color: "teal",
            },
            {
                icon: <Sparkles className="h-5 w-5 text-emerald-400" />, // Confidence / self-assurance
                title: "Unshakeable Confidence",
                desc: "Walk into every interview not just ready, but unstoppable.",
                color: "emerald",
            },
        ],
    },
    {
        type: "Recruiters",
        icon: <SearchCheck className="h-7 w-7 text-purple-400" />, // Precision in recruiting
        badgeColor: "purple",
        title: "Stop Guessing. Start Winning.",
        description: "Unlock a new era of hiring. Don't get left behind.",
        items: [
            {
                icon: <Lightbulb className="h-5 w-5 text-indigo-400" />, // Smart AI screening
                title: "Intelligent Screening",
                desc: "Our AI screens candidates with unparalleled accuracy.",
                color: "indigo",
            },
            {
                icon: <BarChart className="h-5 w-5 text-teal-400" />, // Insight-driven hiring
                title: "Data-Rich Decisions",
                desc: "Get bias-free reports and crystal-clear insights for confident wins.",
                color: "teal",
            },
            {
                icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />, // Security/fairness
                title: "Eliminate Bias",
                desc: "Secure the best fit, every time.",
                color: "emerald",
            },
        ],
    },
];

export default function FeatureSectionStyled() {
    return (
        <LayoutWrapper>
            <section className="min-h-screen w-full relative overflow-hidden">
                <div className="mx-auto relative z-10">
                    {/* Header */}
                    <HeadingComponentWrapper
                        icon={Puzzle}
                        first="Your Unfair Advantage."
                        second="Don't Just Compete, Dominate."
                        third="Our platform gives you the unfair advantage. Powerful AI meets intuitive design to transform your interview game, whether you're hiring or getting hired."
                    />
                    <div className="grid gap-4 lg:grid-cols-2 lg:gap-6 max-w-7xl mx-auto relative">

                        {features.map((section, idx) => (
                            <FeatureCard
                                key={idx}
                                section={section}
                                idx={idx}
                                titleClass="text-xl md:text-2xl font-bold text-white leading-tight mb-3"
                                descClass="text-slate-400 text-base"
                            />
                        ))}
                    </div>

                </div>
            </section>
        </LayoutWrapper>
    );
}
