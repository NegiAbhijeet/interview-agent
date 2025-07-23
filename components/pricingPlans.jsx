"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const personalPlans = [
    {
        name: "Free Plan",
        price: "$0",
        period: "monthly",
        description: "15 minutes of practice interviews daily",
        icon: <Check className="w-6 h-6" />,
        features: [
            "15 minutes per day",
            "Daily reset",
            "No payment required",
            "Good for getting started"
        ],
        buttonText: "Start Free",
        popular: false,
        gradient: "from-green-50 to-white",
        borderColor: "border-green-200",
        buttonStyle: "bg-green-600 hover:bg-green-700 text-white",
    },
    {
        name: "Starter Practice",
        price: "$56",
        period: "one time",
        description: "1500 minutes (~100 interviews) with bonus",
        icon: <Star className="w-6 h-6" />,
        features: [
            "1500 minutes included",
            "70 interviews + 30 free",
            "$0.8 per interview",
            "Total: ~100 interviews",
            "Dedicated support"
        ],
        buttonText: "Buy Now",
        popular: true,
        gradient: "from-gray-50 to-white",
        borderColor: "border-gray-200",
        buttonStyle: "bg-gray-900 hover:bg-gray-800 text-white",
    },
    {
        name: "Interview Pro",
        price: "$80",
        period: "one time",
        description: "2700 minutes (~200 interviews) for serious prep",
        icon: <Zap className="w-6 h-6" />,
        features: [
            "2700 minutes included",
            "160 interviews + 40 free",
            "$0.5 per interview",
            "Total: ~200 interviews",
            "Login up to 5 accounts",
            "Dedicated support"
        ],
        buttonText: "Buy Now",
        popular: false,
        gradient: "from-blue-50 to-blue-100",
        borderColor: "border-blue-200",
        buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    },
];


const businessPlans = [
    {
        name: "Professional",
        price: "$400",
        period: "one time",
        description: "3,000 minutes (~200 interviews) for small teams",
        icon: <Zap className="w-6 h-6" />,
        features: [
            "3,000 minutes included",
            "$2 per interview",
            "1 Admin account",
            "5 HRs can be added",
            "24/7 Dedicated Support",
            "Cancel within 15 days"
        ],
        buttonText: "Get Started",
        popular: false,
        recommended: false,
        gradient: "from-gray-50 to-white",
        borderColor: "border-gray-200",
        buttonStyle: "bg-gray-900 hover:bg-gray-800 text-white",
    },
    {
        name: "Team Connect",
        price: "$1,800",
        period: "one time",
        description: "15,000 minutes (~1000 interviews) for growing teams",
        icon: <Star className="w-6 h-6" />,
        features: [
            "15,000 minutes included",
            "$1.8 per interview",
            "1 Admin account",
            "15 HRs can be added",
            "24/7 Dedicated Support",
            "Cancel within 21 days"
        ],
        buttonText: "Buy Now",
        popular: true,
        gradient: "from-blue-50 to-blue-100",
        borderColor: "border-blue-200",
        buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
        name: "Scale",
        price: "$7,500",
        period: "one time",
        description: "75,000 minutes (~5,000 interviews) for large teams",
        icon: <Crown className="w-6 h-6" />,
        features: [
            "75,000 minutes included",
            "$1.5 per interview",
            "3 Admin accounts",
            "50 HRs can be added",
            "Dedicated Support",
            "Cancel within 1 month"
        ],
        buttonText: "Buy Now",
        popular: false,
        gradient: "from-purple-50 to-purple-100",
        borderColor: "border-purple-200",
        buttonStyle: "bg-purple-600 hover:bg-purple-700 text-white",
    }
];




export default function PricingPlans() {
    const [planType, setPlanType] = useState("business")
    const plans = planType === "personal" ? personalPlans : businessPlans

    return (
        <div className="flex min-h-screen flex-col py-4 md:py-8 lg:py-12">
            <main className="flex-1">
                <div className="min-h-screen pb-16">
                    {/* Toggle Buttons */}
                    <div className="flex justify-center mt-10 space-x-2 p-1 bg-gray-400/50 rounded-full w-fit mx-auto"
                        data-aos="zoom-in-up"
                        data-aos-delay="400"
                    >
                        <button
                            onClick={() => setPlanType("business")}
                            className={`px-5 py-2 rounded-full transition-all duration-200 ${planType === "business"
                                ? "bg-black text-white"
                                : "bg-transparent text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            Recuriters
                        </button>
                        <button
                            onClick={() => setPlanType("personal")}
                            className={`px-5 py-2 rounded-full transition-all duration-200 ${planType === "personal"
                                ? "bg-[#050d1a] text-white"
                                : "bg-transparent text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            Candidates
                        </button>
                    </div>


                    <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto mt-12">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                // data-aos="fade-up"
                                // data-aos-delay={200 + index * 100}
                                className={`w-full sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[320px] relative bg-gradient-to-br ${plan.gradient} rounded-2xl border-2 ${plan.borderColor} p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col h-full min-h-[600px] ${plan.popular || plan.recommended ? "ring-2 ring-offset-2" : ""
                                    } ${plan.popular ? "ring-blue-500" : plan.recommended ? "ring-purple-500" : ""}`}
                            >
                                {/* Badges */}
                                {plan.popular && (
                                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1">
                                        Most Popular
                                    </Badge>
                                )}
                                {plan.recommended && (
                                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-1">
                                        Recommended
                                    </Badge>
                                )}

                                {/* Header */}
                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-purple-500">
                                        {plan.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                        <span className="text-gray-600">{plan.period}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 mt-0.5 text-green-600" />
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <div className="mt-auto">
                                    <Button
                                        className={`w-full py-3 font-semibold rounded-xl transition-all duration-200 ${plan.buttonStyle}`}
                                        size="lg"
                                    >
                                        {plan.buttonText}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>



                    {/* Bottom Section */}
                    {/* <div className="text-center mt-16">
                        <p className="text-gray-900/80 mb-6">All plans include a 14 day free trial. No credit card required.</p>
                        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-900/90">
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-600" />
                                Cancel anytime
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-600" />
                                24/7 support
                            </div>
           
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-600" />
                                Money back guarantee
                            </div>
                        </div>
                    </div> */}
                </div>
            </main>
        </div>
    )
}
