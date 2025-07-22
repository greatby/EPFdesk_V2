// HeroCarousel.jsx
import React, { useEffect, useState } from "react";

const heroData = [
  {
    gradient: "from-green-200 to-green-100",
    icon: "🎨",
    title: "Create",
    subtitle:
      "Turn your ideas into reality with our powerful creative tools and inspiring community",
    speech: "Create!",
    cta1: "Start Creating",
    cta2: "Learn More",
  },
  {
    gradient: "from-orange-200 to-orange-300",
    icon: "🌱",
    title: "Grow",
    subtitle:
      "Evolve beyond your limits and develop skills that will transform your future",
    speech: "Grow!",
    cta1: "Begin Growth",
    cta2: "Explore Path",
  },
  {
    gradient: "from-teal-200 to-pink-200",
    icon: "🤝",
    title: "Connect",
    subtitle:
      "Build meaningful relationships and collaborate with amazing people worldwide",
    speech: "Connect!",
    cta1: "Join Community",
    cta2: "Meet People",
  },
  {
    gradient: "from-pink-300 to-yellow-100",
    icon: "✨",
    title: "Dream",
    subtitle:
      "Imagine the impossible and make your wildest dreams come true with our platform",
    speech: "Dream!",
    cta1: "Start Dreaming",
    cta2: "Get Inspired",
  },
  {
    gradient: "from-cyan-200 to-blue-400",
    icon: "🚀",
    title: "Explore",
    subtitle:
      "Discover new horizons and embark on adventures that will change your perspective",
    speech: "Explore!",
    cta1: "Start Adventure",
    cta2: "See Features",
  },
  {
    gradient: "from-yellow-300 to-cyan-400",
    icon: "💡",
    title: "Inspire",
    subtitle:
      "Light up the world with your unique vision and motivate others to achieve greatness",
    speech: "Inspire!",
    cta1: "Share Vision",
    cta2: "Learn How",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const data = heroData[current];

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative px-0 py-0 sm:py-24">
      <div
        className={`relative w-full h-screen mt-[70px] md:mt-0 bottom-0 md:top-0 sm:h-[90vh] sm:max-w-5xl p-6 sm:p-10 rounded-none sm:rounded-[40px] shadow-2xl transition-all duration-500 bg-gradient-to-br ${data.gradient}`}
      >
        {/* Floating Circles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-20 animate-float${
                i + 1
              }`}
              style={{
                width: `${20 + i * 10}px`,
                height: `${20 + i * 10}px`,
                top: `${20 * i + 10}px`,
                left: `${15 * i + 10}px`,
                backgroundColor: [
                  "#ff6b6b",
                  "#4ecdc4",
                  "#ffe66d",
                  "#a8e6cf",
                  "#ffd3a5",
                ][i],
              }}
            />
          ))}
        </div>

        {/* Speech Bubble */}
        {/* <div className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-white/90 shadow-md text-sm font-semibold text-gray-700 scale-90 hover:scale-100 transition-all">
          {data.speech}
        </div> */}

        {/* Icon */}
        <div className="relative w-48 h-48 mx-auto mb-6">
          <div className="absolute w-20 h-20 bg-red-300 rounded-full -top-4 -right-4 opacity-30" />
          <div className="absolute w-16 h-16 bg-teal-300 rounded-full -bottom-4 -left-4 opacity-30" />
          <div className="absolute w-28 h-28 bg-yellow-200 rounded-[35px] rotate-45 top-10 left-10 opacity-30" />
          <div className="relative w-36 h-36 bg-white rounded-full flex items-center justify-center text-[4rem] shadow-xl z-10">
            {data.icon}
          </div>
        </div>

        <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
          {data.title}
        </h1>
        <p className="text-lg text-center text-gray-700 opacity-80 max-w-xl mx-auto mb-6">
          {data.subtitle}
        </p>

        {/* Progress */}
        <div className="w-32 h-2 bg-white/30 rounded-full mx-auto mb-4 overflow-hidden">
          <div className="h-full bg-white/90 rounded-full animate-progress" />
        </div>

        {/* CTAs */}
        {/* <div className="flex flex-wrap gap-4 justify-center mb-6">
          <a href="#" className="bg-white/90 border border-white px-6 py-3 rounded-full text-gray-700 font-semibold shadow hover:bg-white">
            {data.cta1}
          </a>
          <a href="#" className="border-2 border-white/70 bg-transparent px-6 py-3 rounded-full text-gray-800 font-semibold shadow hover:bg-white/20">
            {data.cta2}
          </a>
        </div> */}

        {/* Info cards */}
        {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-3 justify-center">
          <div className="bg-white/90 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow backdrop-blur border border-white/40">
            ✨ Free to Start
          </div>
          <div className="bg-white/90 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow backdrop-blur border border-white/40">
            🚀 Instant Setup
          </div>
          <div className="bg-white/90 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow backdrop-blur border border-white/40">
            💫 Amazing Results
          </div>
        </div> */}
      </div>

      {/* Navigation dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {heroData.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full cursor-pointer shadow border-2 transition-all ${
              current === idx
                ? "bg-gray-800 scale-125"
                : "bg-white border-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
