import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const verticalCards = [
  {
    title: "Monthly ESIC return filing",
    subtitle: `We manage the entire \"ESIC return filing process\" with 100% accuracy and punctuality before the 15th of the following month deadline.`,
    icon: "📚",
    bubble: "Learn!",
    bg: "bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]",
  },
  {
    title: "Employee data updates & IP Management",
    subtitle: `We handle \"how to update employee details in ESIC portal by employer,\" ensuring accurate records for your workforce, including \"generating ESIC Code number\" (17-digit ID) and managing \"ESIC login for insured person\" access.`,
    icon: "🔨",
    bubble: "Build!",
    bg: "bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]",
  },
  {
    title: "Employer Portal Navigation",
    subtitle: `We expertly manage all interactions on the \"ESIC employer login portal,\" ensuring accurate data reflection, complete submissions, and efficient grievance management (like EPFiGMS)`,
    icon: "🌟",
    bubble: "Shine!",
    bg: "bg-gradient-to-br from-[#a8edea] to-[#fed6e3]",
  },
  {
    title: "Contribution Period Tracking",
    subtitle: `We meticulously track \"ESIC Contribution Period vs. Cash Benefit Period\" to maintain continuous coverage for your employees, even if salaries briefly exceed the ceiling.`,
    icon: "🦋",
    bubble: "Transform!",
    bg: "bg-gradient-to-br from-[#d299c2] to-[#fef9d7]",
  },
];

const horizontalCards = [
  {
    title: "Complete ESIC registration process",
    subtitle: `We guide you through and meticulously handle all steps for \"ESIC registration process online India,\" including online application, documentation, and swift ESIC code allocation.`,
    icon: "🔍",
    bubble: "Discover!",
    bg: "bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]",
  },
  {
    title: "Precise applicability assessment",
    subtitle: `We accurately determine \"Who is eligible for ESIC registration?\" based on employee count (e.g., 10+ or 20+ depending on state) and wage limits, ensuring correct and ongoing coverage without a hitch.`,
    icon: "🎯",
    bubble: "Focus!",
    bg: "bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]",
  },
  {
    title: "Rapid average response time (e.g., 2-4 hours) for client queries",
    subtitle:
      "Ensuring your concerns are addressed promptly by dedicated specialists, improving your operational efficiency.",
    icon: "🤝",
    bubble: "Collaborate!",
    bg: "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]",
  },
  {
    title: "Required documentation compilation",
    subtitle: `We assist in gathering and submitting all \"documents required for ESIC registration,\" streamlining the initial setup within statutory time limits.`,
    icon: "💡",
    bubble: "Innovate!",
    bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
  },
  {
    title: "Coverage continuity management",
    subtitle: `We advise on crucial aspects like the \"once covered, always covered\" rule, ensuring compliance even if the number of employees temporarily goes below the minimum limit.`,
    icon: "⚡",
    bubble: "Empower!",
    bg: "bg-gradient-to-br from-[#84fab0] to-[#8fd3f4]",
  },
];

const FloatingCircles = () => (
  <>
    <div className="absolute w-5 h-5 bg-[#ff6b6b] rounded-full top-[20%] left-[20%] opacity-20 animate-float" />
    <div className="absolute w-4 h-4 bg-[#4ecdc4] rounded-full top-[70%] right-[20%] opacity-20 animate-float delay-2000" />
    <div className="absolute w-6 h-6 bg-[#ffe66d] rounded-full bottom-[30%] left-[30%] opacity-20 animate-float delay-4000" />
  </>
);

const CardSlider = ({ cards }) => {
  const paginationRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 relative">
      <FloatingCircles />
      <div className="relative z-10 max-w-7xl py-6 mx-auto overflow-hidden">
        {isReady && (
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            breakpoints={{
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
            onSwiper={() => {
              setTimeout(() => {
                if (paginationRef.current) {
                  paginationRef.current.classList.remove("hidden");
                }
              }, 100);
            }}
          >
            {cards.map(({ title, subtitle, icon, bubble, bg }, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`relative ${bg} min-h-[380px] h-full p-10 rounded-3xl shadow-xl transition hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center`}
                >
                  <div className="absolute inset-0 pointer-events-none">
                    <FloatingCircles />
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 rounded-xl px-3 py-1 text-xs font-semibold text-gray-700 shadow-md opacity-0 scale-95 transition hover:opacity-100 hover:scale-100">
                    {bubble}
                  </div>
                  <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-md z-10 mb-4">
                    {icon}
                  </div>
                  <div className="text-center text-gray-800">
                    <h3 className="text-xl font-bold mb-1">{title}</h3>
                    <p className="text-sm opacity-80">{subtitle}</p>
                    <div className="mt-4 h-2 w-16 bg-white/30 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-white/80 rounded-full animate-progress" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div ref={paginationRef} className="custom-swiper-pagination mt-6 flex justify-center gap-2" />
      </div>
    </div>
  );
};

const VerticalAndHorizontalCards = () => {
  return (
    <div className="min-h-screen px-4">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Comprehensive ESIC Compliance Management Services
        </h1>
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
          ESIC Registration & Applicability Management
        </h2>
        <CardSlider cards={horizontalCards} />

        <h2 className="text-3xl pt-16 font-extrabold text-center text-gray-800 mb-12">
          Seamless Monthly Filings & Employee Data Management
        </h2>
        <CardSlider cards={verticalCards} />
      </div>
    </div>
  );
};

export default VerticalAndHorizontalCards;
