import HeadingWrapper from "@/components/headingWrapper"
const HeadingComponentWrapper = ({ first, second, third, icon }) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <HeadingWrapper icon={icon} text={first} />

            <h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
            >
                {second}
            </h2>

            <p
                className="max-w-[900px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
            >
                {third}
            </p>
        </div>
    )
}

export default HeadingComponentWrapper
