// import React, { useEffect, useRef, useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const slides = [
//   {
//     name: "Richa Maheshwari",
//     title: "Manager, Delhi",
//     org: "Large Multinational Company",
//     message:
//       "EPFDesk.com has transformed our Gurgaon operations by handling all statutory compliance seamlessly, allowing my team to focus on strategic initiatives rather than portal management. Having a dedicated compliance partner who ensures our employees' EPFO and ESIC requirements are met without any hassle has been invaluable for our productivity and peace of mind.",
//     bgColor: "#eafce9",
//   },
//   {
//     name: "Adarsh Hoizal",
//     title: "",
//     org: "Large Staffing Company",
//     message:
//       "Managing statutory compliance for our workforce across multiple states was a nightmare until we partnered with EPFDesk.com – their pan-India support has streamlined our entire compliance process. With hundreds of employees joining and leaving monthly, having EPFDesk handle all EPFO, ESIC, PT, and LWF requirements has transformed our operations from reactive firefighting to proactive business growth.",
//     bgColor: "#fffae6",
//   },
//   {
//     name: "Amith Chitrapur",
//     title: "Chartered Accountant",
//     org: "Multiple Clients Across India",
//     message:
//       "As an auditor managing large clients nationwide, I need seamless multi-state compliance support – EPFDesk.com delivers exactly that for all my clients' complex statutory requirements. Their expertise in handling intricate EPFO, ESIC, PT, and LWF compliance across different states has eliminated my biggest operational headache.",
//     bgColor: "#f8f0ff",
//   },
//   {
//     name: "Neeta",
//     title: "Director",
//     org: "Technical Services Company",
//     message:
//       "With our teams spread across India handling large contracts subject to strict audits, EPFDesk.com has been instrumental in maintaining our 100% audit success rate. As we scale nationwide, they seamlessly handle new state registrations, employee linking, and all statutory compliance requirements.",
//     bgColor: "#fceff1",
//   },
// ];

// const TestimonialSlider = () => {
//   const [isReady, setIsReady] = useState(false);
//   const paginationRef = useRef(null);
//   const containerRef = useRef(null)

//   useEffect(() => {
//     // Wait for pagination div to be in the DOM
//     if (paginationRef.current) {
//       setIsReady(true);
//     }
//   }, []);
//   // const cardRefs = useRef([]);

//   // const scroll = (direction) => {
//   //   const container = containerRef.current;
//   //   const scrollAmount = container.offsetWidth / 1.2;
//   //   container.scrollBy({
//   //     left: direction === "left" ? -scrollAmount : scrollAmount,
//   //     behavior: "smooth",
//   //   });
//   // };

//   // const scrollToCard = (index) => {
//   //   const container = containerRef.current;
//   //   const card = cardRefs.current[index];
//   //   if (container && card) {
//   //     const cardOffsetLeft = card.offsetLeft;
//   //     container.scrollTo({
//   //       left: cardOffsetLeft - 16, // adjust padding offset
//   //       behavior: "smooth",
//   //     });
//   //   }
//   // };

//   return (
//     <section className="w-full py-12">
//       <h4 className="px-8 text-3xl font-bold mb-4">
//         Trusted by a growing number of HR departments in India
//       </h4>
//       {/* <div className="relative">
//         <div
//           ref={containerRef}
//           className="flex overflow-x-auto gap-6 px-8 py-4 scroll-smooth no-scrollbar overflow-y-hidden"
//         >
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               ref={(el) => (cardRefs.current[index] = el)}
//               onClick={() => scrollToCard(index)}
//               className="cursor-pointer bg-white min-w-[90%] md:min-w-[340px] lg:min-w-[400px] h-auto rounded-xl p-6 flex flex-col justify-between shadow hover:shadow-lg transition"
//             >
//               <p className="text-gray-700 text-base leading-relaxed mb-4">"{slide.message}"</p>
//               <div className="mt-6">
//                 <p className="text-lg font-semibold text-gray-900">{slide.name}</p>
//                 {slide.title && <p className="text-sm text-gray-600">{slide.title}</p>}
//                 <p className="text-sm font-medium text-blue-600">{slide.org}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-2 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
//         >
//           <FaChevronLeft className="size-5 text-gray-600" />
//         </button>

//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-2 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
//         >
//           <FaChevronRight className="size-5 text-gray-600" />
//         </button>
//       </div> */}
//       <div className="max-w-7xl md:max-w-[105rem] lg:max-w-[105rem] mx-auto px-4 py-4 overflow-hidden">
//         {isReady && (
//           <Swiper
//             modules={[Pagination]}
//             spaceBetween={16}
//             slidesPerView={1}
//             pagination={{
//               clickable: true,
//               el: paginationRef.current,
//             }}
//             breakpoints={{
//               480: { slidesPerView: 1.2 },
//               640: { slidesPerView: 1.4 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//               1326: { slidesPerView: 3 },
//               1400: { slidesPerView: slides.length },
//             }}
//             className="!overflow-visible"
//           >
//             {slides.map((slide, index) => (
//               <SwiperSlide key={index} className="!h-auto flex">
//                 <div className="flex flex-col justify-between h-full w-full bg-white rounded-xl p-3 shadow hover:shadow-lg transition min-h-[320px]">
//                   <p
//                     className="text-gray-700 text-lg rounded-xl min-h-[320px] p-4 leading-relaxed mb-4"
//                     style={{ backgroundColor: slide.bgColor }}
//                   >
//                     "{slide.message}"
//                   </p>
//                   <div className="mt-auto px-1">
//                     <p className="text-xl font-semibold text-gray-900">
//                       {slide.name}
//                     </p>
//                     {slide.title && (
//                       <p className="text-md text-gray-600">{slide.title}</p>
//                     )}
//                     <p className="text-md font-medium text-blue-600">
//                       {slide.org}
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         )}

//         <div
//           ref={paginationRef}
//           className="custom-swiper-pagination mt-6 flex justify-center gap-2"
//         />
//       </div>
//     </section>
//   );
// };

// export default TestimonialSlider;

import React, { useRef, useEffect, useState } from "react";
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
      "EPFDesk.com has transformed our Gurgaon operations by handling all statutory compliance seamlessly, allowing my team to focus on strategic initiatives rather than portal management.",
    gradient: "from-[#eafce9] to-[#c8f7c5]",
    bgs: ["bg-[#a0d468]", "bg-[#4ecdc4]"],
    bubble: "Seamless!",
  },
  {
    name: "Adarsh Hoizal",
    title: "",
    org: "Large Staffing Company",
    message:
      "Managing statutory compliance for our workforce across multiple states was a nightmare until we partnered with EPFDesk.com – their pan-India support has streamlined everything.",
    gradient: "from-[#fffae6] to-[#fceabb]",
    bgs: ["bg-[#ffe66d]", "bg-[#ff6b6b]"],
    bubble: "Streamlined!",
  },
  {
    name: "Amith Chitrapur",
    title: "Chartered Accountant",
    org: "Multiple Clients Across India",
    message:
      "EPFDesk.com delivers seamless multi-state compliance support for all my clients. Their expertise in statutory regulations has eliminated my biggest operational headache.",
    gradient: "from-[#f8f0ff] to-[#ecdfff]",
    bgs: ["bg-[#d299c2]", "bg-[#a18cd1]"],
    bubble: "Reliable!",
  },
  {
    name: "Neeta",
    title: "Director",
    org: "Technical Services Company",
    message:
      "With our teams spread across India, EPFDesk.com has been instrumental in maintaining our 100% audit success rate with new registrations and linking done seamlessly.",
    gradient: "from-[#fceff1] to-[#ffd1dc]",
    bgs: ["bg-[#ff6b6b]", "bg-[#ffe66d]"],
    bubble: "Audit-Proof!",
  },
];

const TestimonialSlider = () => {
  const [isReady, setIsReady] = useState(false);
  const paginationRef = useRef(null);

  useEffect(() => {
    if (paginationRef.current) {
      setIsReady(true);
    }
  }, []);

  return (
    <section className="w-full py-12">
      <h4 className="px-8 text-4xl text-center font-bold mb-4">
        Trusted by a growing number of HR departments in India
      </h4>

      <div className="max-w-7xl mx-auto px-4 py-4 overflow-hidden">
        {isReady && (
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            grabCursor={true}
            touchRatio={1}
            touchStartPreventDefault={false}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1326: { slidesPerView: 3.2 },
              1400: { slidesPerView: slides.length },
            }}
            className="!overflow-visible"
             onSwiper={(swiper) => (paginationRef.current = swiper)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`relative h-full min-h-[320px] p-6 rounded-3xl shadow-xl bg-gradient-to-br ${slide.gradient} flex flex-col justify-between`}
                 onClick={(e) => {
                      const card = e.currentTarget;
                      const clickX = e.clientX;
                      const { left, width } = card.getBoundingClientRect();
                      const relativeX = clickX - left;

                      if (relativeX < width / 2) {
                        paginationRef.current?.slidePrev(); // Clicked left
                      } else {
                        paginationRef.current?.slideNext(); // Clicked right
                      }
                    }}>
                  {/* Floating bubbles */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute w-5 h-5 rounded-full opacity-20 bg-[#ff6b6b] top-[20%] left-[20%] animate-bounce" />
                    <div className="absolute w-4 h-4 rounded-full opacity-20 bg-[#4ecdc4] bottom-[20%] right-[20%] animate-bounce delay-200" />
                    <div className="absolute w-6 h-6 rounded-full opacity-20 bg-[#ffe66d] bottom-[30%] left-[30%] animate-bounce delay-300" />
                  </div>

                  {/* Content */}
                  <p className="text-gray-800 text-base leading-relaxed z-10 relative">
                    “{slide.message}”
                  </p>

                  {/* User Info */}
                  <div className="z-10 relative mt-6">
                    <p className="text-lg font-semibold text-gray-900">
                      {slide.name}
                    </p>
                    {slide.title && (
                      <p className="text-sm text-gray-700">{slide.title}</p>
                    )}
                    <p className="text-sm font-medium text-blue-700">
                      {slide.org}
                    </p>
                  </div>

                  {/* Bubble Tag */}
                  {/* {slide.bubble && (
                    <div className="absolute right-4 top-4 rounded-xl bg-white/80 px-3 py-1 text-xs font-semibold text-gray-800">
                      {slide.bubble}
                    </div>
                  )} */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Pagination */}
        <div
          ref={paginationRef}
          className="custom-swiper-pagination mt-6 flex justify-center gap-2"
        />
      </div>
    </section>
  );
};

export default TestimonialSlider;
