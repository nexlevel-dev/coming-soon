// ComingSoon.jsx
import { useEffect, useState } from "react";

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4f46e5,transparent_45%),radial-gradient(circle_at_bottom_left,#06b6d4,transparent_45%)] animate-pulse opacity-60"></div>

      <div className="absolute w-56 h-56 md:w-72 md:h-72 bg-purple-600/30 rounded-full blur-3xl animate-ping delay-1000"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 md:w-64 md:h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div
        className={`relative z-10 w-[90%] max-w-xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl text-center transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-widest bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-md">
          NexLevel
        </h1>

        <p className="mt-3 sm:mt-4 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed px-2">
          Something futuristic is coming.
          <br className="hidden sm:block" />
          <span className="text-cyan-400">Get ready to level up.</span>
        </p>

        {/* Loader */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <div className="w-10 h-10 sm:w-14 sm:h-14 border-4 border-gray-600 border-t-cyan-300 rounded-full animate-spin"></div>
        </div>

        <p className="mt-6 sm:mt-8 text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()} NexLevel. All rights reserved.
        </p>
      </div>
    </div>
  );
}
