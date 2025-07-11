"use client";
import { CheckCircle, Users, Zap, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutWrapper } from "@/components/layout-wrapper";
import CtaSection from "@/components/ctaSection";

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
        <section className="relative overflow-hidden text-white"><div className="pt-[10%]">
            <LayoutWrapper>
                <section className="w-full ">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-400">
                                    About <span className="text-white">NOVA</span>
                                </h1>
                                <p className="mx-auto max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    We remove manual work from hiring and give candidates a fair chance to shine. The platform asks scripted questions, scores every answer, and sends a clear transcript within minutes. HR teams hire faster, decisions rely on data, and candidates learn from instant feedback.                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutWrapper>
            <LayoutWrapper>
                {/* Mission Section */}
                <section className="w-full ">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="space-y-4">

                                <div className="inline-block px-6 py-2 rounded-full mb-4 bg-purple-100 text-sm text-purple-600">
                                    Our Mission
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
                                    Revolutionizing Interview Preparation
                                </h2>
                                <p className="text-gray-300 md:text-xl/relaxed">
                                    Redefine first-round screening and preparation. We equip HR teams and agencies with objective, rapid assessments while giving every candidate the tools to improve.
                                </p>

                            </div>
                            <div className="flex items-center justify-center">
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
            </LayoutWrapper><LayoutWrapper>
                {/* Who We Serve Section */}
                <section className="w-full ">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block px-6 py-2 rounded-full mb-4 bg-purple-100 text-sm text-purple-600">
                                    Who We Serve
                                </div>
                                <h2
                                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                                >
                                    Built for Recruiters, HR Teams, and Agencies
                                </h2>
                                <p
                                    className="max-w-[900px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                                >
                                    AI Interview Agent removes busywork and bias from early interviews, so hiring moves faster and decisions rest on clear data.

                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-6xl grid-cols-1 mt-12 gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
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
            </LayoutWrapper><LayoutWrapper>
                {/* Features Section */}
                <section className="w-full ">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block px-6 py-2 rounded-full mb-4 bg-purple-100 text-sm text-purple-600">
                                    Key Features
                                </div>
                                <h2
                                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                                >
                                    Designed for Success
                                </h2>
                                <p
                                    className="max-w-[900px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                                >
                                    Our platform combines powerful features with intuitive design to make interview preparation and conducting interviews effortless.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-gradient-to-r from-indigo-600/20 to-teal-500/20 p-2">
                                        <CheckCircle className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">AI-Powered Mock Interviews</h3>
                                        <p className="text-gray-600">
                                            Simulate real interview scenarios with AI-driven feedback to improve your performance.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-gradient-to-r from-indigo-600/20 to-teal-500/20 p-2">
                                        <CheckCircle className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Real-Time Feedback</h3>
                                        <p className="text-gray-600">
                                            Receive instant feedback on your answers to refine your responses and boost your confidence.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-gradient-to-r from-indigo-600/20 to-teal-500/20 p-2">
                                        <CheckCircle className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Scheduling Tools</h3>
                                        <p className="text-gray-600">
                                            Easily schedule interviews with integrated calendar tools and automated reminders.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-gradient-to-r from-indigo-600/20 to-teal-500/20 p-2">
                                        <CheckCircle className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Video Conferencing</h3>
                                        <p className="text-gray-600">
                                            Conduct interviews seamlessly with built-in video conferencing capabilities.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-gradient-to-r from-indigo-600/20 to-teal-500/20 p-2">
                                        <CheckCircle className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Performance Analytics</h3>
                                        <p className="text-gray-600">
                                            Track your progress and performance with detailed analytics and reports.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-gradient-to-r from-indigo-600/20 to-teal-500/20 p-2">
                                        <CheckCircle className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Export Report</h3>
                                        <p className="text-gray-600">
                                            Export the complete interview report in PDF format for easy sharing, review, or record keeping.                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutWrapper>

            <LayoutWrapper>
                <CtaSection />
            </LayoutWrapper>
        </div>
        </section>
    )
}

export default page
