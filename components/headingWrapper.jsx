import React from 'react'

const HeadingWrapper = ({ icon: Icon, text, className = '' }) => {
    return (
        <div
            className={`inline-block px-6 py-2 rounded-full bg-purple-100 text-sm text-purple-600 ${className}`}
            data-aos="fade-up"
            data-aos-delay="0"
        >
            <div className="flex items-center gap-3">
                {Icon && <Icon className="h-4 w-4 text-blue-500 hidden md:block" />}
                <span className="text-sm font-medium text-blue-500">{text}</span>
            </div>
        </div>
    )
}

export default HeadingWrapper
