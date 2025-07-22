import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
} from "@/components/ui/card";
import { LayoutWrapper } from "./layout-wrapper";
import HeadingComponentWrapper from "./headingComponentWrapper";
import { ShieldCheck } from "lucide-react";
import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";

const testimonials = [
    {
        name: "Rahul Mehra",
        role: "Talent Acquisition Lead, NovaTech",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        quote:
            "Our phone screens dropped from thirty minutes to five. We spend the extra time closing offers.",
        glowColor: "purple",
    },
    {
        name: "Miguel Torres",
        role: "Recruitment Operations Manager, StellarWorks",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        quote:
            "Interview insights are instant, and we’ve eliminated subjective bias. It’s a game-changer for our team.",
        glowColor: "blue",
    },
    {
        name: "Alex Garcia",
        role: "Software Engineer Candidate",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        quote:
            "15 free practice minutes a day let me fine-tune my answers. I walked into the real interview ready and confident.",
        glowColor: "green",
    },
    {
        name: "Arjun Verma",
        role: "HR Consultant, BrightHire Solutions",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        quote:
            "Scheduling AI-led screenings is seamless. It saves us time and delivers consistent results.",
        glowColor: "yellow",
    },
];

export default function TestimonialCards() {
    return (
        <LayoutWrapper>
            <section className="w-full flex flex-col items-center justify-center relative">
                <HeadingComponentWrapper
                    icon={ShieldCheck}
                    first="Trusted by leading Recruiters & Job Seekers"
                    second="What They’re Saying"
                    third="Real voices sharing how AI Interview Agent transforms the hiring journey"
                />

                <div className="w-full max-w-7xl mx-auto">
                    <GlowingCards className="flex flex-wrap gap-3">
                        {testimonials.map((testimonial, index) => {
                            const sizeClass =
                                index === 1 || index === 2
                                    ? "w-full md:basis-1/2 lg:basis-1/2"
                                    : "w-full md:basis-1/2 lg:basis-1/4";

                            return (
                                <GlowingCard
                                    data-aos="fade-up"
                                    data-aos-delay={200 + index * 100}
                                    key={index}
                                    glowColor={testimonial.glowColor}
                                    className={`min-h-[230px] ${sizeClass} flex flex-col p-0`}
                                >
                                    <CardHeader className="flex items-center space-x-4 p-6 pb-3">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <CardTitle className="text-base text-center">{testimonial.name}</CardTitle>
                                            <CardDescription className="text-sm text-muted-foreground text-center">
                                                {testimonial.role}
                                            </CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex flex-col flex-grow p-6 pt-0">
                                        <blockquote className="text-sm text-muted-foreground italic text-center">
                                            “{testimonial.quote}”
                                        </blockquote>
                                    </CardContent>
                                </GlowingCard>
                            );
                        })}
                    </GlowingCards>
                </div>
            </section>
        </LayoutWrapper>
    );
}
