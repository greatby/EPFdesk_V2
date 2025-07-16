import React from "react";

const pastelCards = [
  {
    title: "Precision contribution calculation",
    subtitle: `We perform accurate "ESIC calculation on salary" using the "current ESIC contribution rate employer and employee" (e.g., Employer: 3.25%, Employee: 0.75%) and the "ESIC wage ceiling current" (₹21,000 for general employees, ₹25,000 for persons with disabilities).`,
    icon: "🎨",
    bubble: "Create!",
    bg: "from-[#a8e6cf] to-[#dcedc1]",
  },
  {
    title: "Correct wage component inclusion",
    subtitle: `We meticulously identify and include all applicable "salary components for ESIC wages" (Basic, DA, HRA, CCA, production incentive, night shift, meal/food allowance), ensuring "ESIC is deducted on gross salary, not just basic."`,
    icon: "🌱",
    bubble: "Grow!",
    bg: "from-[#ffd3a5] to-[#fd9853]",
  },
  {
    title: "Exemption management",
    subtitle: `We accurately identify and manage "exemptions from ESIC contributions for low-wage employees" (e.g., daily wage up to ₹176), optimizing your deductions while remaining compliant.`,
    icon: "🤝",
    bubble: "Connect!",
    bg: "from-[#a8edea] to-[#fed6e3]",
  },
  {
    title: "Timely payment facilitation",
    subtitle: `We generate accurate "ESIC challan online" and support "how to pay ESIC contribution online," guaranteeing deposits are made well before the "Monthly ESIC return filing deadline"`,
    icon: "✨",
    bubble: "Dream!",
    bg: "from-[#d299c2] to-[#fef9d7]",
  },
//   {
//     title: "Explore",
//     subtitle: "Discover new horizons",
//     icon: "🚀",
//     bubble: "Explore!",
//     bg: "from-[#89f7fe] to-[#66a6ff]",
//   },
//   {
//     title: "Inspire",
//     subtitle: "Light up the world",
//     icon: "💡",
//     bubble: "Inspire!",
//     bg: "from-[#fdbb2d] to-[#22c1c3]",
//   },
];

const PastelCards = () => {
  return (
    <div className="min-h-screen px-6 py-12">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {pastelCards.map((card, i) => (
          <div
            key={i}
            className={`relative bg-gradient-to-br ${card.bg} p-10 rounded-3xl shadow-xl transform transition hover:-translate-y-2 hover:shadow-2xl`}
          >
            {/* Floating background bubbles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute bg-[#ff6b6b] w-5 h-5 rounded-full top-[20%] left-[20%] opacity-20 animate-float delay-0" />
              <div className="absolute bg-[#4ecdc4] w-4 h-4 rounded-full top-[70%] right-[20%] opacity-20 animate-float delay-2000" />
              <div className="absolute bg-[#ffe66d] w-6 h-6 rounded-full bottom-[30%] left-[30%] opacity-20 animate-float delay-4000" />
            </div>

            {/* Speech bubble */}
            <div className="absolute top-3 right-3 bg-white/90 rounded-xl px-3 py-1 text-xs font-medium text-gray-700 shadow-md opacity-0 scale-95 transition hover:opacity-100 hover:scale-100">
              {card.bubble}
            </div>

            {/* Icon */}
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute w-12 h-12 bg-[#ff6b6b] top-0 right-0 rounded-full opacity-30" />
              <div className="absolute w-8 h-8 bg-[#4ecdc4] bottom-0 left-0 rounded-full opacity-30" />
              <div className="relative w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center text-4xl shadow-lg z-10">
                {card.icon}
              </div>
            </div>

            {/* Text content */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-700 opacity-80">{card.subtitle}</p>

              <div className="mt-4 h-2 w-16 bg-white/30 rounded-full mx-auto overflow-hidden">
                <div className="h-full bg-white/80 rounded-full animate-progress" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastelCards;
