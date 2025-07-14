import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LayoutWrapper } from "./layout-wrapper";
import HeadingWrapper from "./headingWrapper";
import { ShieldCheck } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Mehra",
        role: "Talent Acquisition Lead, NovaTech",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        quote:
            "Our phone screens dropped from thirty minutes to five. We spend the extra time closing offers.",
    },
    {
        name: "Miguel Torres",
        role: "Recruitment Operations Manager, StellarWorks",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        quote:
            "Interview insights are instant, and we’ve eliminated subjective bias. It’s a game-changer for our team.",
    },
    {
        name: "Alex Garcia",
        role: "Software Engineer Candidate",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        quote:
            "15 free practice minutes a day let me fine-tune my answers. I walked into the real interview ready and confident.",
    },
    {
        name: "Arjun Verma",
        role: "HR Consultant, BrightHire Solutions",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        quote:
            "Scheduling AI-led screenings is seamless. It saves us time and delivers consistent results.",
    },
];

export default function Testimonials() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <LayoutWrapper>
            <section
                className="w-full min-h-screen flex flex-col items-center justify-center relative"
                ref={sectionRef}
            >
                {/* Gradient Background Bar */}
                <div className="flex flex-col items-center justify-center space-y-4 text-center py-12">
                    <div className="space-y-2">
                        <HeadingWrapper icon={ShieldCheck} text="Trusted by leading Recuriters & job seekers" />

                        <h2
                            ref={headingRef}
                            data-aos="fade-up"
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        >
                            The Future of Interviews? It's Already Here.
                        </h2>
                        <p
                            ref={paragraphRef}
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="max-w-[900px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                        >
                            Real stories prove AI Interview Agent is the secret you're missing!
                        </p>
                    </div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        <div
                            style={{
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                zIndex: "-1",
                            }}
                            className="opacity-70 blur-2xl absolute w-[70%] h-[130%] bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 rounded-3xl pointer-events-none"
                        />

                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="spectacledcoder-gradient-card"
                                ref={(el) => (cardRefs.current[index] = el)}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="spectacledcoder-content-card rounded-2xl p-6 shadow-xl flex flex-col justify-between bg-white/5 backdrop-blur-md border border-white/10">
                                    <p className="mb-4 text-sm text-gray-100">"{testimonial.quote}"</p>
                                    <div className="flex items-center mt-4">
                                        <img
                                            className="w-10 h-10 rounded-full mr-3"
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                        />
                                        <div className="text-left">
                                            <p className="font-semibold text-white">{testimonial.name}</p>
                                            <p className="text-sm text-gray-400">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </LayoutWrapper>
    );
}
