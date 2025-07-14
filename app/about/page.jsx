"use client";
import { CheckCircle, Users, Zap, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutWrapper } from "@/components/layout-wrapper";
import CtaSection from "@/components/ctaSection";
import AboutFeatureCardsSection from "@/components/AboutFeatureCardsSection"
import HeadingWrapper from "@/components/headingWrapper";
import AdvantageSection from "@/components/advantageSection"
const features = [
    {
        type: "Job Seekers",
        icon: <CheckCircle className="h-7 w-7 text-blue-400" />,
        badgeColor: "blue",
        items: [
            {
                icon: <CheckCircle className="h-5 w-5 text-indigo-400" />,
                title: "Your Next Opportunity Awaits",
                desc: "This is your moment to master every interview.",
                color: "indigo",
            },
            {
                icon: <CheckCircle className="h-5 w-5 text-orange-400" />,
                title: "Practice for Perfection",
                desc: "Get instant AI feedback daily to pinpoint weaknesses and build unshakeable confidence.",
                color: "indigo",
            },
            {
                icon: <CheckCircle className="h-5 w-5 text-teal-400" />,
                title: "Be Unignorable",
                desc: "Stop guessing and start excelling to secure your dream job or internship.",
                color: "teal",
            },
        ],
    },
    {
        type: "Recruiting Teams",
        icon: <CheckCircle className="h-7 w-7 text-purple-400" />,
        badgeColor: "purple",
        items: [
            {
                icon: <CheckCircle className="h-5 w-5 text-indigo-400" />,
                title: "Stop Wasting Time: Start Winning Talent",
                desc: "Revolutionize hiring by eliminating busywork, bias, and endless hours.",
                color: "indigo",
            },
            {
                icon: <CheckCircle className="h-5 w-5 text-orange-400" />,
                title: "Strategic Advantage",
                desc: "Slash screening time, gain crystal-clear data, and handle hundreds & thousands of interviews with unprecedented speed.",
                color: "indigo",
            },
            {
                icon: <CheckCircle className="h-5 w-5 text-teal-400" />,
                title: "Don't Get Left Behind",
                desc: "Access the insights and efficiency top teams are already leveraging.",
                color: "teal",
            },
        ],
    },
];



const page = () => {
    return (
        <section className="relative overflow-hidden text-white">
            <LayoutWrapper>
                <section className="w-full ">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-400"
                                    data-aos="fade-up"
                                    data-aos-delay="0"
                                    data-aos-duration="600">
                                    About AI Interview Agent
                                </h1>
                                <p
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    data-aos-duration="600"
                                    className="mx-auto max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Nova revolutionizes first-round interviews by eliminating manual screening
                                    and unconscious bias. Our intelligent agent(Nova) asks scripted questions,
                                    precisely scores every response, and delivers clear, actionable reports
                                    within minutes. This means recruiters can hire faster with data-backed
                                    decisions, while job seekers can practice daily for free to sharpen their
                                    skills and boost their confidence. It's the future of talent acquisition,
                                    simplified.                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutWrapper>
            <LayoutWrapper>
                {/* Mission Section */}
                <section className="w-full ">
                    <div className="mx-auto">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="space-y-4">

                                <div className="inline-block px-6 py-2 rounded-full mb-4 bg-purple-100 text-sm text-purple-600"
                                    data-aos="fade-up"
                                    data-aos-delay="0"
                                    data-aos-duration="600">
                                    Our Mission
                                </div>
                                <h2
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    data-aos-duration="600"
                                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
                                    Revolutionizing Interview Preparation
                                </h2>
                                <p
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    data-aos-duration="600"
                                    className="text-gray-300 md:text-xl/relaxed">
                                    We're revolutionizing talent discovery and preparation. Our vision is to
                                    redefine first-round interviews, creating a seamless and equitable
                                    experience. We empower recruiting teams with rapid, objective
                                    assessments for data-driven hires, while equipping job seekers with tools
                                    to master interviews and confidently seize their future. This is building a
                                    smarter, fairer future for talent worldwide.                                </p>

                            </div>
                            <div className="flex items-center justify-end">
                                <div className="relative w-full max-w-[550px]">
                                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-teal-500 opacity-20 blur-xl"></div>
                                    <img
                                        src="/image2.png?height=550&width=550"
                                        alt="Interview Preparation Illustration"
                                        width={550}
                                        height={550}
                                        className="relative rounded-2xl shadow-2xl object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutWrapper>
            <LayoutWrapper>
                {/* Who We Serve Section */}
                <section className="w-full ">
                    <div className="">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                            <div className="space-y-2">
                                <HeadingWrapper icon={Users} text="Who We Serve" />

                                <h2
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    data-aos-duration="600"
                                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                                >
                                    Your Edge in Talent.
                                </h2>
                                <p
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    data-aos-duration="600"
                                    className="max-w-[900px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                                >
                                    Unlock Unprecedented Efficiency & Opportunity.
                                </p>
                            </div>
                        </div>
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
            {/* Features Section */}
            <AboutFeatureCardsSection />
            <AdvantageSection />

            <LayoutWrapper>
                <CtaSection />
            </LayoutWrapper>
        </section>
    )
}

export default page
