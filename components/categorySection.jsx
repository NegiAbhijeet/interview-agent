import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import 'aos/dist/aos.css';
import { LayoutWrapper } from "./layout-wrapper";
import HeadingComponentWrapper from "./headingComponentWrapper";
import {
    Target,
    Briefcase,
    Filter,
    BarChart3,
    SearchCheck,
    ShieldCheck,
    Clock,
    Sparkles,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const cardData = [
    {
        type: "Empowering Recruiters",
        icon: <Briefcase className="h-7 w-7 text-blue-400" />, // Represents hiring/work
        badgeColor: "blue",
        title: "Unlock Your Next Great Hire. Faster.",
        description: "Streamline your recruitment with intelligent AI and unmatched efficiency.",
        items: [
            {
                icon: <BarChart3 className="h-5 w-5 text-yellow-400" />, // Represents productivity/growth
                title: "Ignite Recruiter Productivity",
                desc: "Increase recruiter output by up to 10x. Nova's automated screening lets your team focus solely on engaging perfect-fit candidates.",
                color: "purple",
            },
            {
                icon: <Target className="h-5 w-5 text-purple-400" />, // Accurate targeting of talent
                title: "Never Miss Top Talent",
                desc: "Engage every candidate with live, two-way conversations at scale, ensuring you never miss a great hire with smart scheduling.",
                color: "purple",
            },
            {
                icon: <Filter className="h-5 w-5 text-orange-400" />, // Represents filtering/smart screening
                title: "Invest Smarter, Hire Better",
                desc: "Pinpoint top talent from day one with smart filtering and compatibility scoring.",
                color: "orange",
            },
        ],
    },
    {
        type: "Own Your Next Interview",
        icon: <SearchCheck className="h-7 w-7 text-purple-400" />, // Represents smart job search
        badgeColor: "purple",
        title: "Don't Just Apply. Dominate. Your Next Interview Awaits.",
        description: "Unlock personalized preparation tools and ace every opportunity.",
        items: [
            {
                icon: <ShieldCheck className="h-5 w-5 text-orange-400" />, // Represents strength/weakness awareness
                title: "Pinpoint & Power Up Your Weaknesses",
                desc: "Uncover your exact weak points with Nova's AI feedback – never miss a perfect answer again.",
                color: "blue",
            },
            {
                icon: <Clock className="h-5 w-5 text-red-400" />, // Represents time-limited practice
                title: "Practice Like a Pro, For Free",
                desc: "Practice daily with Nova's AI for 15 free minutes, getting expert feedback to instantly refine your answers.",
                color: "violet",
            },
            {
                icon: <Sparkles className="h-5 w-5 text-purple-400" />, // Represents confidence and impact
                title: "Grab Your Next Opportunity with Unshakeable Confidence",
                desc: "Unlock unstoppable confidence for every interview – don't get left behind.",
                color: "purple",
            },
        ],
    },
];

export default function CategorySection() {
    return (
        <LayoutWrapper>
            <section className="min-h-screen w-full relative overflow-hidden">
                <div className="mx-auto relative z-10">
                    {/* Section Header */}
                    <HeadingComponentWrapper
                        icon={Sparkles}
                        first="The Dual Solution You Didn't Know You Needed."
                        second="Perfect Match for Everyone."
                        third="Whether you're shaping a team or crafting your career, dive into the seamless experience our platform offers."
                    />

                    <div className="grid gap-4 lg:grid-cols-2 lg:gap-6 max-w-7xl mx-auto relative">
                        {cardData.map((section, idx) => (
                            <FeatureCard key={idx} section={section} idx={idx} />
                        ))}
                    </div>
                </div>
            </section>
        </LayoutWrapper>
    );
}
