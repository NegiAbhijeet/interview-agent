"use client";
import { CheckCircle, Users, Zap, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutWrapper } from "@/components/layout-wrapper";
import CtaSection from "@/components/ctaSection";
import AboutFeatureCardsSection from "@/components/AboutFeatureCardsSection"
import HeadingWrapper from "@/components/headingWrapper";
const features = [
    {
        title: "Corporate Recruiters",
        description: "Slash screening time and deliver short lists in hours.",
        icon: Users,
    },
    {
        title: "HR Specialists",
        description: "Run consistent, compliant interviews and keep every record in one place.",
        icon: Zap,
    },
    {
        title: "Recruitment Agencies",
        description: "Handle hundreds of interviews at once and send branded, data-rich reports to clients.",
        icon: CheckCircle,
    },
    {
        title: "Candidates",
        description: "Practice daily, get feedback, and walk into real interviews with confidence.",
        icon: LineChart,
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
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-400">
                                    About <span className="text-white">NOVA</span>
                                </h1>
                                <p className="mx-auto max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Nova removes manual work from hiring and gives candidates a fair chance to shine. The platform asks scripted questions, scores every answer, and delivers a clear transcript within minutes. Hiring becomes faster, decisions are data-driven, and candidates benefit from instant feedback.
                                </p>
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

                                <div className="inline-block px-6 py-2 rounded-full mb-4 bg-purple-100 text-sm text-purple-600">
                                    Our Mission
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
                                    Revolutionizing Interview Preparation
                                </h2>
                                <p className="text-gray-300 md:text-xl/relaxed">
                                    Redefine first-round screening and preparation. Nova equips recruiters with objective, rapid assessments while giving every candidate the tools to improve.
                                </p>

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
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <HeadingWrapper icon={Users} text="Who We Serve" />

                                <h2
                                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                                >
                                    Built for Recruiters.
                                </h2>
                                <p
                                    className="max-w-[900px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                                >
                                    AI Interview Agent removes busywork and bias from early interviews, so hiring moves faster and decisions rest on clear data.

                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid grid-cols-1 mt-12 gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
                            {/* Background Blur */}
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
                                    <div key={index} className="spectacledcoder-gradient-card">
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
                </section>
            </LayoutWrapper>
            {/* Features Section */}
            <AboutFeatureCardsSection />

            <LayoutWrapper>
                <CtaSection />
            </LayoutWrapper>
        </section>
    )
}

export default page
