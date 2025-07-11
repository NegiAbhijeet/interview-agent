"use client";
import ContactForm from '@/components/contact-form'
import CtaSection from '@/components/ctaSection'
import React from 'react'

const page = () => {
  return (
    <section className="relative overflow-hidden text-white mt-[10%]">
       <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
                  Get in touch with our Hiring Experts.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Questions on pricing, security, or setup? We reply within one business day.
                </p>
              </div>
            </div>
          </div>
        </section>
            <ContactForm />
        <CtaSection />
        
    </section>
  )
}

export default page
