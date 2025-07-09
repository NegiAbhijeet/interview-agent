// components/ComingSoon.jsx
import React from "react";

export default function ComingSoon() {
  return (
    <section className="relative h-[45vh] w-full flex items-center justify-center overflow-hidden">
 
      <div className="absolute inset-0 bg-black opacity-20 z-[-1]" />

      {/* Content */}
      <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl p-6 md:p-10 flex flex-col items-center justify-center text-center max-w-xl mx-4 text-white">
        <h1 className="text-4xl font-semibold mb-4">Launching Soon</h1>
        <p className="text-sm md:text-base mb-6">
          We’re working hard to bring you something amazing! Stay in the loop.
        </p>

        {/* Email input */}
        <div className="w-full max-w-md flex flex-col gap-2 items-center">
          <p className="text-xs">Enter your email to get notified</p>
          <div className="flex w-full gap-2 mt-1">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-md bg-white/20 text-white border border-white placeholder-white outline-none"
            />
            <button className="px-4 py-2 bg-white text-sky-800 font-medium rounded-md hover:bg-gray-100 transition">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
