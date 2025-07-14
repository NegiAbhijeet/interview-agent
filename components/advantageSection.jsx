import React from 'react';
import { CalendarClock, Users, DollarSign } from 'lucide-react';
import { LayoutWrapper } from './layout-wrapper';

const AdvantageSection = () => {
    const features = [
        {
            icon: <CalendarClock className="w-8 h-8 text-white" />,
            title: "Screen 16x More Candidates",
            description:
                "Engage top talent anytime, including nights and weekends, without scheduling conflicts.",
        },
        {
            icon: <Users className="w-8 h-8 text-white" />,
            title: "Hire 91% Faster",
            description:
                "Interview multiple candidates simultaneously, effortlessly scaling your screening process.",
        },
        {
            icon: <DollarSign className="w-8 h-8 text-white" />,
            title: "Interview 93% Cheaper",
            description:
                "Maximize your top-of-funnel with automated reminders and follow-ups, engaging more candidates for less.",
        },
    ];

    return (
        <LayoutWrapper>
            <section className="py-16">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
                        Extra Edge Advantages for Recruiters
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-start space-y-4">
                                {feature.icon}
                                <h3 className="text-xl font-semibold text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-white text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </LayoutWrapper>
    );
};

export default AdvantageSection;
