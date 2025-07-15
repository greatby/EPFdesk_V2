// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";



// const LatticeSlider = ({slides}) => {

//   const { sectionTitle, sectionSubtitle, items } = slides;
//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 overflow-hidden">
//         <h2 className="text-3xl font-bold text-center mb-16">
//          {sectionTitle}
//         </h2>
//         <h3 className="text-2xl font-bold mb-8 text-center md:text-left">
//          {sectionSubtitle}
//         </h3>

//         <Swiper
//           modules={[Pagination]}
//           spaceBetween={16}
//           slidesPerView={1}
//           pagination={{
//             clickable: true,
//             el: ".custom-swiper-pagination",
//           }}
//           breakpoints={{
//             480: { slidesPerView: 1.2 },
//             640: { slidesPerView: 1.4 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="!overflow-visible"
//         >
//           {items.map((slide, index) => (
//             <SwiperSlide key={index} className="!h-auto">
//               <div className="w-full sm:w-[320px] md:w-[360px] lg:w-[386px] mx-auto bg-gray-50 rounded-xl overflow-hidden shadow-md h-full flex flex-col">
//                 <div className="aspect-square bg-gray-100 overflow-hidden">
//                   <img
//                     src={slide.img}
//                     alt={slide.alt}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-4 flex-1">
//                   <h3 className="text-lg font-semibold mb-2">{slide.title}</h3>
//                   <p className="text-sm text-gray-600">{slide.desc}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Pagination Dots */}
//         <div className="custom-swiper-pagination mt-6 flex justify-center gap-2" />
//       </div>
//     </section>
//   );
// };

// export default LatticeSlider;


import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const LatticeSlider = ({ slides }) => {
  const [isReady, setIsReady] = useState(false);
  const paginationRef = useRef(null);
  const { sectionTitle, sectionSubtitle, items } = slides;

  useEffect(() => {
    // Wait for pagination div to be in the DOM
    if (paginationRef.current) {
      setIsReady(true);
    }
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-16">{sectionTitle}</h2>
        <h3 className="text-2xl font-bold mb-8 text-center md:text-left">
          {sectionSubtitle}
        </h3>

        {/* Render Swiper only after paginationRef is mounted */}
        {isReady && (
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            breakpoints={{
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 1.4 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {items.map((slide, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="w-full sm:w-[320px] md:w-[360px] lg:w-[386px] mx-auto bg-gray-50 rounded-xl overflow-hidden shadow-md h-full flex flex-col">
                  <div className="aspect-square w-full bg-gray-100 overflow-hidden">
                    <img
                      src={slide.img}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="text-[1.5rem] font-semibold mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-[1.1rem] text-gray-600">{slide.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Ref for pagination bullets */}
        <div
          ref={paginationRef}
          className="custom-swiper-pagination mt-6 flex justify-center gap-2"
        />
      </div>
    </section>
  );
};

export default LatticeSlider;
