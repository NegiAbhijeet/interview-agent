import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Rocket, Users, Search, Lightbulb, TrendingUp, ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function CategorySection() {
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

            tl.from([headingRef.current, paragraphRef.current], {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            });

            tl.from(cardRefs.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            }, "+=0.2");
        }, sectionRef);

        return () => ctx.revert();
    }, []);
    return (
        <section className="min-h-screen w-full py-20  relative overflow-hidden" ref={sectionRef}>
            <div className=" mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-6 py-2 rounded-full mb-4 bg-purple-100 text-sm text-purple-600">
                        <div className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-blue-500" />
                            <span className="text-sm font-medium text-blue-500">Dual Solutions</span></div>
                    </div>

                    <h2
                        ref={headingRef}
                        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                    >
                        Perfect Match for Everyone
                    </h2>
                    <p
                        ref={paragraphRef}
                        className="max-w-[900px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    >
                        Whether you're hiring or job hunting, we've got the tools to make it seamless
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-7xl mx-auto relative">
                    {/* Left Column - For Companies */}
                    <div
                        className="opacity-70 blur-2xl absolute w-[70%] h-[100%] bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 rounded-3xl pointer-events-none"
                        style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: "-1",
                        }}
                    />
                    <div className="spectacledcoder-gradient-card" ref={(el) => (cardRefs.current[0] = el)}>
                        <Card className="spectacledcoder-content-card group relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all hover:shadow-xl">

                            <CardHeader className="relative z-10 py-6 px-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                                        <Users className="h-7 w-7 text-blue-400" />
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider block">
                                            For Companies
                                        </span>
                                        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mt-1" />
                                    </div>
                                </div>
                                <CardTitle className="text-xl md:text-2xl font-bold text-white leading-tight mb-3">
                                    Don't miss your next great hire.
                                </CardTitle>
                                <p className="text-slate-400 text-base">Streamline your recruitment process with intelligent matching</p>
                            </CardHeader>

                            <CardContent className="relative z-10 space-y-4 pb-4">
                                <div className="space-y-2">
                                    <div className="flex items-start gap-5 group/item p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:translate-x-2">
                                        <div className="p-2.5 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/20 border border-purple-500/30 mt-1">
                                            <Target className="h-5 w-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-base leading-relaxed mb-1">
                                                Never miss top interview opportunities again.
                                            </p>
                                            <p className="text-slate-400 text-sm">Smart notifications and automated scheduling</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group/item p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:translate-x-2">
                                        <div className="p-2.5 rounded-lg bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-500/30 mt-1">
                                            <Rocket className="h-5 w-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-base leading-relaxed mb-1">
                                                Increase recruitment productivity by up to 10x.
                                            </p>
                                            <p className="text-slate-400 text-sm">AI-powered candidate screening and matching</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group/item p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:translate-x-2">
                                        <div className="p-2.5 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 mt-1">
                                            <TrendingUp className="h-5 w-5 text-orange-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-base leading-relaxed mb-1">
                                                Invest smart: connect only with the right-fit candidates.
                                            </p>
                                            <p className="text-slate-400 text-sm">Advanced filtering and compatibility scoring</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="spectacledcoder-gradient-card" ref={(el) => (cardRefs.current[1] = el)}>
                        {/* Right Column - For Candidates */}
                        <Card className="spectacledcoder-content-card group relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all hover:shadow-xl">
                            <CardHeader className="relative z-10 py-6 px-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/20 border border-purple-500/30">
                                        <Search className="h-7 w-7 text-purple-400" />
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider block">
                                            For Candidates
                                        </span>
                                        <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-purple-500 mt-1" />
                                    </div>
                                </div>
                                <CardTitle className="text-xl md:text-2xl font-bold text-white leading-tight mb-3">
                                    Don't miss your next interview.
                                </CardTitle>
                                <p className="text-slate-400 text-md">Ace every interview with personalized preparation tools</p>
                            </CardHeader>

                            <CardContent className="relative z-10 space-y-4 pb-4">
                                <div className="space-y-2">
                                    <div className="flex items-start gap-5 group/item p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:translate-x-2">
                                        <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 mt-1">
                                            <Lightbulb className="h-5 w-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-base leading-relaxed mb-1">
                                                Get actionable insights into your weak points.
                                            </p>
                                            <p className="text-slate-400 text-sm">Detailed performance analytics and improvement tips</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group/item p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:translate-x-2">
                                        <div className="p-2.5 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 mt-1">
                                            <Users className="h-5 w-5 text-violet-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-base leading-relaxed mb-1">
                                                Practice with in-depth mock interviews by domain experts.
                                            </p>
                                            <p className="text-slate-400 text-sm">Real-time feedback from industry professionals</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5 group/item p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300 hover:translate-x-2">
                                        <div className="p-2.5 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-500/20 border border-purple-500/30 mt-1">
                                            <Target className="h-5 w-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-base leading-relaxed mb-1">
                                                Grab your next job interview with confidence.
                                            </p>
                                            <p className="text-slate-400 text-sm">Personalized coaching and confidence building</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">10k+</div>
                        <div className="text-slate-400 text-sm">Companies Trust Us</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">50k+</div>
                        <div className="text-slate-400 text-sm">Successful Hires</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">100k+</div>
                        <div className="text-slate-400 text-sm">Candidates Prepared</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">95%</div>
                        <div className="text-slate-400 text-sm">Success Rate</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
