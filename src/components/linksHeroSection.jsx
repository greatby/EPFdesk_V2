// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="hero-section hero-1" id="hero-1">
//       <div className="hero-bg-animation">
//         <div className="floating-shape circle"></div>
//         <div className="floating-shape square"></div>
//         <div className="floating-shape circle"></div>
//         <div className="floating-shape square"></div>
//         <div className="floating-shape triangle"></div>
//         <div className="floating-shape triangle"></div>
//       </div>

//       <div className="particle-system">
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={i}
//             className="particle"
//             style={{
//               left: `${(i + 1) * 10}%`,
//               animationDelay: `${(i % 4) * 2}s`,
//             }}
//           ></div>
//         ))}
//       </div>

//       <div className="hero-content">
//         <div className="hero-icon-massive">🚀</div>
//         <h1 className="hero-title-massive">
//           {" "}
//           ESIC Compliance: Effortless Management for Employee Well-being &
//           Business Protection
//         </h1>
//         <p className="hero-subtitle-massive">
//           Master ESIC compliance with EPFDesk.com. We handle registration,
//           accurate contributions, monthly filings & ensure all employee
//           benefits. Avoid penalties, achieve 99.9% accuracy, and empower your
//           HR.
//         </p>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// heroSlides.js

import React from "react";

const HeroSection = ({ slide }) => {
  const { gradientClass, icon, title, subtitle } = slide;

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden animate-gradientShift`}
      style={{
         backgroundImage: gradientClass,
        backgroundSize: "200% 200%",
        backgroundPosition: "0% 50%",
      }}
    >
      {/* Floating Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden hero-bg-animation">
        <div className="floating-shape circle left-[10%] w-20 h-20"></div>
        <div className="floating-shape square left-[20%] w-28 h-28"></div>
        <div className="floating-shape circle left-[70%] w-16 h-16"></div>
        <div className="floating-shape square left-[80%] w-24 h-24"></div>
        <div className="floating-shape triangle left-[50%]"></div>
        <div className="floating-shape triangle left-[30%]"></div>
      </div>

      {/* Particles */}
      <div className="particle-system absolute top-0 left-0 w-full h-full z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${(i + 1) * 10}%`,
              animationDelay: `${(i % 4) * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="hero-content relative z-20 text-center text-white px-6 max-w-4xl">
        <div className="hero-icon-massive mx-auto mb-10">{icon}</div>
        <h1 className="hero-title-massive">{title}</h1>
        <p className="hero-subtitle-massive mb-8">{subtitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;
