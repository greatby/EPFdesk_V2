import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const services = [
  {
    title: "Hassle-Free Registration",
    description: `New employee ESIC registrations, IP number
generation, and coverage verification within 24 hours.`,
  },
  {
    title: "Automated Contribution Management",
    description:
      "Accurate ESIC contribution calculation, challan generation, and monthly return filing.",
  },
  {
    title: "Medical Claim Support",
    description:
      "End-to-end support for employee medical claims,reimbursements, and benefit processing.",
  },
  {
    title: "Disability & Maternity Benefits",
    description:
      "Complete assistance for disability claims,maternity benefits, and dependent coverage.",
  },
];

const ESICComplianceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);

  // Moves the carousel by one card per click (to the left)
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  // Moves the carousel by one card per click (to the right)
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    // Set the width of the carousel to be the number of cards times the width of each card
    setCarouselWidth(document.querySelector(".carousel-container").clientWidth);
  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto hidden md:flex flex-col md:flex-row items-center justify-between">
        {/* Left Column: Text and Buttons for Desktop */}
        <div className="w-full md:w-1/3 lg:w-1/3 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Complete ESIC Management Solutions
          </h2>
          <p className="text-gray-600 mb-8">
            End-to-end statutory compliance handled by experts.
          </p>

          {/* Prev and Next Buttons visible on Desktop */}
          <div className="hidden md:flex justify-center md:justify-start space-x-4">
            <button
              onClick={handlePrev}
              className="px-4 py-4 bg-gray-200 text-gray-700 rounded-full flex items-center space-x-2 hover:bg-gray-300"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-4 bg-gray-200 text-gray-700 rounded-full flex items-center space-x-2 hover:bg-gray-300"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Right Column: Cards for Desktop */}
        <div className="w-full overflow-x-hidden md:w-2/3">
          <div
            className="carousel-container flex transition-transform duration-500 snap-x snap-mandatory"
            style={{
              transform: `translateX(-${
                currentIndex * (carouselWidth / services.length)
              }px)`,
            }}
          >
            {services.concat(services).map((service, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 p-8 mx-4 flex flex-col justify-end items-start bg-indigo-50 rounded-2xl shadow-lg transition-all duration-300 snap-start"
                style={{
                  width: `${150 / services.length}%`,
                  height: "350px",
                }}
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile and Tablet: Thumb Cards Scrollable */}
      <div className="md:hidden mt-8">
        <div
          className="thumb-carousel-container flex space-x-4 overflow-x-auto snap-x snap-mandatory"
          style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 p-4 max-w-xs max-h-[400px] bg-indigo-50 rounded-2xl shadow-md cursor-pointer"
              onClick={() => setCurrentIndex(idx)} // Scroll the main carousel to selected card
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600 text-xs">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ESICComplianceCarousel;
