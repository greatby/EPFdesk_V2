import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    percent: "50%",
    text: "faster vulnerability detection",
    logo: "cube.",
    bg: "bg-violet-100",
  },
  {
    percent: "13x",
    text: "faster security scanning",
    logo: "CACI",
    bg: "bg-purple-100",
  },
  {
    percent: "20x",
    text: "decrease in pipeline execution time with GitLab",
    logo: "INTUITIVE MACHINES",
    bg: "bg-blue-100",
  },
  {
    percent: "100",
    text: "fewer hours of developer downtime per month",
    logo: "ally",
    bg: "bg-violet-100",
  },
  {
    percent: "6x",
    text: "faster time to market",
    logo: "T-Mobile",
    bg: "bg-green-100",
  },
];

const TestimonialSlider = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth / 1.2;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-12">
      {/* <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
        One platform for teams of every size
      </h2> */}
      <div className="relative">
        {/* Scrollable Container */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-6 px-8 py-4 scroll-smooth no-scrollbar overflow-y-hidden"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${slide.bg} min-w-[90%] md:min-w-[340px] lg:min-w-[320px] h-[280px] md:h-[300px] lg:h-[370px] rounded-xl p-6 flex flex-col justify-between transform transition-transform duration-300 hover:scale-[1.05] hover:shadow-md`}
            >
              <div>
                <div className="text-[4rem] font-bold">{slide.percent}</div>
                <p className=" text-[2rem] font-normal leading-[1.125] text-gray-700">{slide.text}</p>
              </div>
              <div className="mt-6 font-bold text-xl">{slide.logo}</div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
        >
          <FaChevronLeft className="size-6" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
        >
          <FaChevronRight className="size-6" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;
