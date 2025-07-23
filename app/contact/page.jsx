"use client";
import ContactForm from '@/components/contact-form'
import CtaSection from '@/components/ctaSection'
import React from 'react'

const page = () => {
  return (
    <section className="relative overflow-hidden text-white mt-[10%]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1
              className="text-4xl md:text-6xl font-normal leading-tight text-black"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="600"
            >
              <span className='text-gradient'>Contact</span> with our Hiring Experts.
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              className="mt-6 max-w-4xl mx-auto text-2xl font-light text-gray-700"
            >
              Questions on pricing, security, or setup? We reply within one business day.

            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  )
}

export default page
