"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const personalPlans = [
    {
        name: "Free",
        price: "$0",
        period: "/month",
        description: "Perfect for individuals getting started",
        icon: <Star className="w-6 h-6" />,
        features: ["Up to 5 projects", "10GB storage", "Basic support", "Standard templates", "Mobile app access"],
        buttonText: "Get Started",
        popular: false,
        gradient: "from-gray-50 to-white",
        borderColor: "border-gray-200",
        buttonStyle: "bg-gray-900 hover:bg-gray-800 text-white",
    },
    {
        name: "Starter",
        price: "$20",
        period: "/month",
        description: "Ideal for growing businesses and teams",
        icon: <Zap className="w-6 h-6" />,
        features: [
            "Unlimited projects",
            "100GB storage",
            "Priority support",
            "Premium templates",
            "Advanced analytics",
            "Team collaboration",
            "API access",
        ],
        buttonText: "Start Free Trial",
        popular: true,
        gradient: "from-blue-50 to-blue-100",
        borderColor: "border-blue-200",
        buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
        name: "Starter",
        price: "$20",
        period: "/month",
        description: "Ideal for growing businesses and teams",
        icon: <Zap className="w-6 h-6" />,
        features: [
            "Unlimited projects",
            "100GB storage",
            "Priority support",
            "Premium templates",
            "Advanced analytics",
            "Team collaboration",
            "API access",
        ],
        buttonText: "Start Free Trial",
        popular: true,
        gradient: "from-blue-50 to-blue-100",
        borderColor: "border-blue-200",
        buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    },
]

const businessPlans = [
    {
        name: "Professional",
        price: "$55",
        period: "/month",
        description: "Advanced features for power users",
        icon: <Crown className="w-6 h-6" />,
        features: [
            "Everything in Starter",
            "500GB storage",
            "24/7 dedicated support",
            "Custom integrations",
            "Advanced security",
            "White-label options",
            "Custom domains",
            "Priority processing",
        ],
        buttonText: "Upgrade Now",
        popular: false,
        recommended: true,
        gradient: "from-purple-50 to-purple-100",
        borderColor: "border-purple-200",
        buttonStyle: "bg-purple-600 hover:bg-purple-700 text-white",
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Tailored solutions for large organizations",
        icon: <Building2 className="w-6 h-6" />,
        features: [
            "Everything in Professional",
            "Unlimited storage",
            "Dedicated account manager",
            "Custom development",
            "SLA guarantee",
            "On-premise deployment",
            "Advanced compliance",
            "Custom training",
        ],
        buttonText: "Contact Sales",
        popular: false,
        gradient: "from-indigo-50 via-purple-50 to-pink-50",
        borderColor: "border-gradient-to-r from-indigo-200 to-purple-200",
        buttonStyle:
            "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white",
    },
    {
        name: "Starter",
        price: "$20",
        period: "/month",
        description: "Ideal for growing businesses and teams",
        icon: <Zap className="w-6 h-6" />,
        features: [
            "Unlimited projects",
            "100GB storage",
            "Priority support",
            "Premium templates",
            "Advanced analytics",
            "Team collaboration",
            "API access",
        ],
        buttonText: "Start Free Trial",
        popular: true,
        gradient: "from-blue-50 to-blue-100",
        borderColor: "border-blue-200",
        buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    },
]

export default function PricingPlans() {
    const [planType, setPlanType] = useState("personal")
    const plans = planType === "personal" ? personalPlans : businessPlans

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <div className="min-h-screen pb-16">
                    {/* Toggle Buttons */}
                    <div className="flex justify-center mt-10 space-x-2 p-1 bg-gray-100 rounded-full w-fit mx-auto">
                        <button
                            onClick={() => setPlanType("personal")}
                            className={`px-5 py-2 rounded-full transition-all duration-200 ${planType === "personal"
                                ? "bg-[#050d1a] text-white"
                                : "bg-transparent text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            Personal
                        </button>
                        <button
                            onClick={() => setPlanType("business")}
                            className={`px-5 py-2 rounded-full transition-all duration-200 ${planType === "business"
                                ? "bg-black text-white"
                                : "bg-transparent text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            Business
                        </button>
                    </div>

                    <div className="w-full text-center my-4">
                        <p className="text-gray-300 text-xl">
                            {
                                planType === "personal" ? "Boost confidence with 15 free practice minutes every day. Upgrade for unlimited access."
                                    :
                                    "4 x 15-minute free trials to get started. Beyond that, tailored plans are available."
                            }
                        </p>
                    </div>


                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch mt-12">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative bg-gradient-to-br ${plan.gradient} rounded-2xl border-2 ${plan.borderColor} p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col h-full ${plan.popular || plan.recommended ? "ring-2 ring-offset-2" : ""
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
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gray-100">
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
                    <div className="text-center mt-16">
                        <p className="text-gray-300 mb-6">All plans include a 14-day free trial. No credit card required.</p>
                        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-600" />
                                Cancel anytime
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-600" />
                                24/7 support
                            </div>
                            {/* <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-600" />
                                99.9% uptime
                            </div> */}
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-600" />
                                Money-back guarantee
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
