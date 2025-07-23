import HeadingWrapper from "@/components/headingWrapper";

const HeadingComponentWrapper = ({ first, second, third, icon }) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <HeadingWrapper icon={icon} text={first} />

            <h2
                className="text-3xl font-bold sm:text-4xl md:text-5xl text-gradient leading-tight pb-1 overflow-visible"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
            >
                {second}
            </h2>

            <p
                className="max-w-[900px] mx-auto text-gray-900/80 text-xl leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
            >
                {third}
            </p>
        </div>
    );
};

export default HeadingComponentWrapper;
