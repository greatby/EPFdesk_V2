import React from "react";

// const horizontalCards = [
//   {
//     title: "Discover",
//     subtitle: "Uncover new possibilities and opportunities",
//     icon: "🔍",
//     bubble: "Discover!",
//     gradient: "from-[#ff9a9e] to-[#fecfef]",
//     bgs: ["bg-[#ff6b6b]", "bg-[#4ecdc4]"],
//   },
//   {
//     title: "Focus",
//     subtitle: "Channel your energy toward what matters most",
//     icon: "🎯",
//     bubble: "Focus!",
//     gradient: "from-[#a18cd1] to-[#fbc2eb]",
//     bgs: ["bg-[#d299c2]", "bg-[#ff6b6b]"],
//   },
//   {
//     title: "Collaborate",
//     subtitle: "Work together to achieve amazing results",
//     icon: "🤝",
//     bubble: "Collaborate!",
//     gradient: "from-[#ffecd2] to-[#fcb69f]",
//     bgs: ["bg-[#4ecdc4]", "bg-[#ffe66d]"],
//   },
//   {
//     title: "Innovate",
//     subtitle: "Create breakthrough solutions and ideas",
//     icon: "💡",
//     bubble: "Innovate!",
//     gradient: "from-[#d4fc79] to-[#96e6a1]",
//     bgs: ["bg-[#ff6b6b]", "bg-[#4ecdc4]"],
//   },
//   {
//     title: "Empower",
//     subtitle: "Unleash potential in yourself and others",
//     icon: "⚡",
//     bubble: "Empower!",
//     gradient: "from-[#84fab0] to-[#8fd3f4]",
//     bgs: ["bg-[#d299c2]", "bg-[#ff6b6b]"],
//   },
//   {
//     title: "Impact",
//     subtitle: "Make a difference that matters in the world",
//     icon: "🌍",
//     bubble: "Impact!",
//     gradient: "from-[#f093fb] to-[#f5576c]",
//     bgs: ["bg-[#4ecdc4]", "bg-[#ffe66d]"],
//   },
// ];

const HorizontalCards = ({cardsData,link}) => {
  return (
    <div className="space-y-6">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className={`relative rounded-2xl h-auto md:h-[440px] shadow-md p-6 flex flex-col lg:flex-row items-center gap-8 bg-gradient-to-br ${card.gradient}`}
        >
          {/* Animated BG bubbles */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute w-5 h-5 rounded-full opacity-20 bg-[#ff6b6b] top-[20%] left-[20%] animate-bounce"></div>
            <div className="absolute w-4 h-4 rounded-full opacity-20 bg-[#4ecdc4] bottom-[20%] right-[20%] animate-bounce delay-200"></div>
            <div className="absolute w-6 h-6 rounded-full opacity-20 bg-[#ffe66d] bottom-[30%] left-[30%] animate-bounce delay-300"></div>
          </div>

          {/* Icon bubble */}
          <div className="relative z-10 w-full lg:w-1/2 p-2 flex justify-center">
            <div className="relative">
              {card.bgs.map((bg, i) => (
                <div
                  key={i}
                  className={`absolute ${bg} rounded-full ${
                    i === 0 ? "w-14 h-14 top-0 right-0" : "w-10 h-10 bottom-0 left-0"
                  } opacity-30`}
                />
              ))}
              <div className="z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-lg">
                {card.icon}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center z-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              {card.title}
            </h2>
            <p className="text-[1.3rem] font-semibold text-gray-700 mb-5">
              {card.subtitle}
            </p>
            <div className="w-full md:w-[60%]">
              <button
                style={{
                  backgroundColor: "#ccffe4",
                  backgroundImage: "linear-gradient(180deg, #e6f9ee, #c4f5db)",
                  color: "#007a7a",
                }}
                className="px-6 py-3 text-[1.2rem] font-semibold rounded-xl transition w-fit"
              onClick={() => link(card.link)}>
                Learn more about {card.title}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCards;
