import React from "react";

const largeCards = [
  {
    title: "Continuous regulatory monitoring",
    subtitle: `Our dedicated experts meticulously monitor the latest "ESIC Act amendments," "ESIC circulars," and "ESIC contribution rate changes."`,
    icon: "🛡️",
    bubble: "Protect!",
    bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
  },
  {
    title: "Impact analysis & strategic advice",
    subtitle: `We translate complex legal updates into clear, actionable business insights tailored to your operations, ensuring you understand the "consequences of ESIC non-compliance.`,
    icon: "🔗",
    bubble: "Integrate!",
    bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
  },
  {
    title: "Penalty prevention strategies",
    subtitle: `We implement proactive measures to safeguard against "what happens if employer does not pay ESIC contribution?" and other common non-compliance scenarios.`,
    icon: "💼",
    bubble: "Consult!",
    bg: "bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]",
  },
  {
    title: "Audit readiness support",
    subtitle: `We provide complete assistance for any ESIC inspections or audits, ensuring you are fully prepared with complete documentation and expert representation`,
    icon: "🤖",
    bubble: "Automate!",
    bg: "bg-gradient-to-br from-[#43e97b] to-[#38f9d7]",
  },
];

const LargeCardsSection = () => {
  return (
    <>
      <h2 className="max-w-7xl text-center pt-12 mx-auto px-4 text-3xl font-bold">
        Proactive Regulatory Updates & Risk Management
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-10 py-20">
        {largeCards.map(({ title, subtitle, icon, bubble, bg }, index) => (
          <div
            key={index}
            className={`relative ${bg} text-white p-10 rounded-[32px] h-[500px] flex flex-col items-center justify-center shadow-2xl transition-all hover:-translate-y-2`}
          >
            {/* Floating Circles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-4 h-4 bg-[#ff6b6b] rounded-full top-[20%] left-[20%] opacity-20 animate-float" />
              <div className="absolute w-3 h-3 bg-[#4ecdc4] rounded-full top-[70%] right-[20%] opacity-20 animate-float delay-2000" />
              <div className="absolute w-5 h-5 bg-[#ffe66d] rounded-full bottom-[30%] left-[30%] opacity-20 animate-float delay-4000" />
            </div>

            {/* Speech Bubble */}
            <div className="absolute top-4 right-4 bg-white/90 text-gray-800 rounded-xl px-3 py-1 text-xs font-semibold shadow-md opacity-0 scale-95 transition-all hover:opacity-100 hover:scale-100">
              {bubble}
            </div>

            {/* Icon */}
            <div className="relative w-40 h-40 mb-6">
              <div className="absolute top-[-12px] right-[-12px] w-20 h-20 rounded-full bg-[#ff6b6b] opacity-30" />
              <div className="absolute bottom-[-8px] left-[-8px] w-16 h-16 rounded-full bg-[#4ecdc4] opacity-30" />
              <div className="absolute top-[30px] left-[30px] w-24 h-24 rounded-[25px] bg-[#ffe66d] opacity-30 rotate-45" />
              <div className="relative w-[100px] h-[100px] mx-auto rounded-full bg-white flex items-center justify-center text-5xl shadow-md z-10">
                {icon}
              </div>
            </div>

            {/* Title and Subtitle */}
            <div className="text-center max-w-xs">
              <h3 className="text-4xl font-bold mb-2">{title}</h3>
              <p className="text-base opacity-90 leading-relaxed">{subtitle}</p>
              <div className="mt-6 w-20 h-2 rounded-full bg-white/30 mx-auto overflow-hidden">
                <div className="h-full bg-white/80 animate-progress rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LargeCardsSection;
