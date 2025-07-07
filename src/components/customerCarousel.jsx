import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

const carouselData = [
  {
    stat: "50%",
    description: "faster vulnerability detection",
    logo: "/images/customer_logos/cube-logo.png",
    bg: "bg-violet-100",
  },
  {
    stat: "13x",
    description: "faster security scanning",
    logo: "/images/customer_logos/caci-black-logo.svg",
    bg: "bg-purple-100",
  },
  {
    stat: "20x",
    description: "decrease in pipeline execution time with GitLab",
    logo: "/images/customer_logos/intuitive-machines.png",
    bg: "bg-violet-200",
  },
  {
    stat: "100",
    description: "fewer hours of developer downtime per month",
    logo: "/images/customer_logos/ally-bank-black.svg",
    bg: "bg-purple-200",
  },
  {
    stat: "6x",
    description: "faster time to market",
    logo: "/images/customer_logos/deutsche-telekom-black.svg",
    bg: "bg-green-100",
  },
];

export default function PerformanceCarousel() {
  const carouselRef = useRef(null);

  const scroll = (dir) => {
    const scrollAmount = 360;
    carouselRef.current?.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          One platform for teams of every size
        </h2>

        <div className="relative">
          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto no-scrollbar space-x-6 scroll-smooth px-2 pb-4"
          >
            {carouselData.map((item, i) => (
              <div
                key={i}
                className={`min-w-[280px] min-h-[370px] sm:min-w-[300px] md:min-w-[340px] max-w-[340px] rounded-2xl p-6 flex flex-col justify-between shadow-md ${item.bg}`}
              >
                <div>
                  <h3 className="text-3xl font-bold">{item.stat}</h3>
                  <p className="mt-2 text-base text-gray-700">{item.description}</p>
                </div>
                <img
                  src={item.logo}
                  alt="logo"
                  className="h-6 w-auto object-contain mt-6"
                />
              </div>
            ))}
          </div>

          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 left-[-28px] transform -translate-y-1/2 bg-white border shadow-md rounded-full p-2"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 right-[-28px] transform -translate-y-1/2 bg-white border shadow-md rounded-full p-2"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
