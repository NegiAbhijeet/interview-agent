import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { X } from "lucide-react";

const LaunchToast = () => {
  const [visible, setVisible] = useState(true);
  const toastRef = useRef(null);

  useEffect(() => {
    if (visible && toastRef.current) {
      gsap.fromTo(
        toastRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          delay: 1
        }
      );
    }
  }, [visible]);

  const handleClose = () => {
    if (toastRef.current) {
      gsap.to(toastRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setVisible(false),
      });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        ref={toastRef}
        className="relative max-w-sm w-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 text-white rounded-2xl shadow-xl px-6 py-5 overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 bg-white/10 hover:bg-white/20 text-white rounded-full p-1 backdrop-blur-sm transition"
          aria-label="Close toast"
        >
          <X size={16} />
        </button>

        {/* Header Row */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <h4 className="text-sm font-semibold">🚀 Don't Get Left Behind!</h4>
        </div>

        {/* Description */}
        <p className="text-xs text-white/80 leading-snug">
          The future of interviews is almost here. Get ready — you won't want to miss this!
        </p>
      </div>
    </div>
  );
};

export default LaunchToast;
