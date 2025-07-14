import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    name: "Richa Maheshwari",
    title: "Manager, Delhi",
    org: "Large Multinational Company",
    message:
      "EPFDesk.com has transformed our Gurgaon operations by handling all statutory compliance seamlessly, allowing my team to focus on strategic initiatives rather than portal management. Having a dedicated compliance partner who ensures our employees' EPFO and ESIC requirements are met without any hassle has been invaluable for our productivity and peace of mind.",
    bgColor: "#eafce9",
  },
  {
    name: "Adarsh Hoizal",
    title: "",
    org: "Large Staffing Company",
    message:
      "Managing statutory compliance for our workforce across multiple states was a nightmare until we partnered with EPFDesk.com – their pan-India support has streamlined our entire compliance process. With hundreds of employees joining and leaving monthly, having EPFDesk handle all EPFO, ESIC, PT, and LWF requirements has transformed our operations from reactive firefighting to proactive business growth.",
    bgColor: "#fffae6",
  },
  {
    name: "Amith Chitrapur",
    title: "Chartered Accountant",
    org: "Multiple Clients Across India",
    message:
      "As an auditor managing large clients nationwide, I need seamless multi-state compliance support – EPFDesk.com delivers exactly that for all my clients' complex statutory requirements. Their expertise in handling intricate EPFO, ESIC, PT, and LWF compliance across different states has eliminated my biggest operational headache.",
    bgColor: "#f8f0ff",
  },
  {
    name: "Neeta",
    title: "Director",
    org: "Technical Services Company",
    message:
      "With our teams spread across India handling large contracts subject to strict audits, EPFDesk.com has been instrumental in maintaining our 100% audit success rate. As we scale nationwide, they seamlessly handle new state registrations, employee linking, and all statutory compliance requirements.",
    bgColor: "#fceff1",
  },
];

const TestimonialSlider = () => {
  const [isReady, setIsReady] = useState(false);
  const paginationRef = useRef(null);

  useEffect(() => {
    setIsReady(true);
  }, []);
  // const cardRefs = useRef([]);

  // const scroll = (direction) => {
  //   const container = containerRef.current;
  //   const scrollAmount = container.offsetWidth / 1.2;
  //   container.scrollBy({
  //     left: direction === "left" ? -scrollAmount : scrollAmount,
  //     behavior: "smooth",
  //   });
  // };

  // const scrollToCard = (index) => {
  //   const container = containerRef.current;
  //   const card = cardRefs.current[index];
  //   if (container && card) {
  //     const cardOffsetLeft = card.offsetLeft;
  //     container.scrollTo({
  //       left: cardOffsetLeft - 16, // adjust padding offset
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <section className="w-full py-12">
      <h4 className="px-8 text-3xl font-bold mb-4">
        Trusted by a growing number of HR departments in India
      </h4>
      {/* <div className="relative">
        <div
          ref={containerRef}
          className="flex overflow-x-auto gap-6 px-8 py-4 scroll-smooth no-scrollbar overflow-y-hidden"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onClick={() => scrollToCard(index)}
              className="cursor-pointer bg-white min-w-[90%] md:min-w-[340px] lg:min-w-[400px] h-auto rounded-xl p-6 flex flex-col justify-between shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700 text-base leading-relaxed mb-4">"{slide.message}"</p>
              <div className="mt-6">
                <p className="text-lg font-semibold text-gray-900">{slide.name}</p>
                {slide.title && <p className="text-sm text-gray-600">{slide.title}</p>}
                <p className="text-sm font-medium text-blue-600">{slide.org}</p>
              </div>
            </div>
          ))}
        </div>

      
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
        >
          <FaChevronLeft className="size-5 text-gray-600" />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
        >
          <FaChevronRight className="size-5 text-gray-600" />
        </button>
      </div> */}
      <div className="max-w-7xl mx-auto px-4 py-4 overflow-hidden">
        <div
          ref={paginationRef}
          className="custom-swiper-pagination mt-6 flex justify-center gap-2"
        />

        {isReady && (
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
            }}
            breakpoints={{
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 1.4 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                <div className="flex flex-col justify-between h-full w-full bg-white rounded-xl p-3 shadow hover:shadow-lg transition min-h-[320px]">
                  <p
                    className="text-gray-700 text-base rounded-xl p-4 leading-relaxed mb-4"
                    style={{ backgroundColor: slide.bgColor }}
                  >
                    "{slide.message}"
                  </p>
                  <div className="mt-auto">
                    <p className="text-lg font-semibold text-gray-900">
                      {slide.name}
                    </p>
                    {slide.title && (
                      <p className="text-sm text-gray-600">{slide.title}</p>
                    )}
                    <p className="text-sm font-medium text-blue-600">
                      {slide.org}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default TestimonialSlider;
