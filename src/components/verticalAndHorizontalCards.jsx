import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FloatingCircles = () => (
  <>
    <div className="absolute w-5 h-5 bg-[#ff6b6b] rounded-full top-[20%] left-[20%] opacity-20 animate-float" />
    <div className="absolute w-4 h-4 bg-[#4ecdc4] rounded-full top-[70%] right-[20%] opacity-20 animate-float delay-2000" />
    <div className="absolute w-6 h-6 bg-[#ffe66d] rounded-full bottom-[30%] left-[30%] opacity-20 animate-float delay-4000" />
  </>
);

// const CardSlider = ({ cards, }) => {
//   const paginationRef = useRef(null);
//   const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     setIsReady(true);
//   }, []);

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 relative">
//       <FloatingCircles />
//       <div className="relative z-10 max-w-7xl py-6 mx-auto overflow-hidden">
//         {isReady && (
//           <Swiper
//             modules={[Pagination]}
//             spaceBetween={24}
//             slidesPerView={1}
//             pagination={{
//               clickable: true,
//               el: paginationRef.current,
//             }}
//             breakpoints={{
//               480: { slidesPerView: 1.2 },
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//               1280: { slidesPerView: 3 },
//             }}
//             className="!overflow-visible"
//             onSwiper={() => {
//               setTimeout(() => {
//                 if (paginationRef.current) {
//                   paginationRef.current.classList.remove("hidden");
//                 }
//               }, 100);
//             }}
//           >
//             {cards.map(({ title, subtitle, icon, bubble, bg }, index) => (
//               <SwiperSlide key={index}>
//                 <div
//                   className={`relative ${bg} min-h-[380px] h-full p-10 rounded-3xl shadow-xl transition hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center`}
//                 >
//                   <div className="absolute inset-0 pointer-events-none">
//                     <FloatingCircles />
//                   </div>
//                   <div className="absolute top-3 right-3 bg-white/90 rounded-xl px-3 py-1 text-xs font-semibold text-gray-700 shadow-md opacity-0 scale-95 transition hover:opacity-100 hover:scale-100">
//                     {bubble}
//                   </div>
//                   <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-md z-10 mb-4">
//                     {icon}
//                   </div>
//                   <div className="text-center text-gray-800">
//                     <h3 className="text-xl font-bold mb-1">{title}</h3>
//                     <p className="text-sm opacity-80">{subtitle}</p>
//                     <div className="mt-4 h-2 w-16 bg-white/30 rounded-full mx-auto overflow-hidden">
//                       <div className="h-full bg-white/80 rounded-full animate-progress" />
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         )}
//         <div ref={paginationRef} className="custom-swiper-pagination mt-6 flex justify-center gap-2" />
//       </div>
//     </div>
//   );
// };

const CardSlider = ({ cards, paginationRef }) => {
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
            grabCursor={true}
            touchRatio={1}
            touchStartPreventDefault={false}
            pagination={{
              clickable: true,
              el: paginationRef?.current || undefined,
            }}
            breakpoints={{
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
            // onSwiper={() => {
            //   setTimeout(() => {
            //     if (paginationRef?.current) {
            //       paginationRef.current.classList.remove("hidden");
            //     }
            //   }, 100);
            // }}
            onSwiper={(swiper) => (paginationRef.current = swiper)}
          >
            {cards.map(({ title, subtitle, icon, bubble, bg }, index) => (
              <SwiperSlide key={index}>
                <div className="hidden">
                  bg-gradient-to-br from-[#ff9a9e] to-[#fecfef]
                  bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb]
                  bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]
                  bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]
                  bg-gradient-to-br from-[#84fab0] to-[#8fd3f4]
                  bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1]
                  bg-gradient-to-br from-[#ffd3a5] to-[#fd9853]
                  bg-gradient-to-br from-[#a8edea] to-[#fed6e3]
                  bg-gradient-to-br from-[#d299c2] to-[#fef9d7]
                  bg-gradient-to-br from-[#f093fb] to-[#f5576c]
                  bg-gradient-to-br from-[#ff6b6b] to-[#ffd93d]
                  bg-gradient-to-br from-[#43e97b] to-[#38f9d7]
                </div>

                <div
                  className={`relative ${bg}  h-[420px] p-10 rounded-3xl shadow-xl transition hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center`}
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
                  }}
                >
                  <div className="absolute inset-0 pointer-events-none">
                    <FloatingCircles />
                  </div>
                  {/* <div className="absolute top-3 right-3 bg-white/90 rounded-xl px-3 py-1 text-xs font-semibold text-gray-700 shadow-md opacity-0 scale-95 transition hover:opacity-100 hover:scale-100">
                        {bubble}
                      </div> */}
                  <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl shadow-md z-10 mb-4">
                    {icon}
                  </div>
                  <div className="text-center text-gray-800">
                    <h3 className="text-2xl font-bold mb-1">{title}</h3>
                    <p className="text-lg text-gray-600 line-clamp-6">
                      {subtitle}
                    </p>
                    <div className="mt-4 h-2 w-16 bg-white/30 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-white/80 rounded-full animate-progress" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div
          ref={paginationRef}
          className="custom-swiper-pagination mt-6 flex justify-center gap-2"
        />
      </div>
    </div>
  );
};

// const VerticalAndHorizontalCards = ({horizontalCards,verticalCards}) => {
//   const {mainSubtitleHor,cardsHor} = horizontalCards;
//   const {mainTitle,mainSubtitleVer,cardsVer} = verticalCards;
//   return (
//     <div className="min-h-screen px-4">
//       <div className="max-w-[1400px] mx-auto">
//         <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
//           {/* Comprehensive ESIC Compliance Management Services */}
//           {mainTitle}
//         </h1>
//         <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
//           {/* ESIC Registration & Applicability Management */}
//           {mainSubtitleVer}
//         </h2>
//         <CardSlider cards={cardsVer} />

//         <h2 className="text-3xl pt-16 font-extrabold text-center text-gray-800 mb-12">
//           {/* Seamless Monthly Filings & Employee Data Management */}
//           {mainSubtitleHor}
//         </h2>
//         <CardSlider cards={cardsHor} />
//       </div>
//     </div>
//   );
// };

const VerticalAndHorizontalCards = ({ horizontalCards, verticalCards }) => {
  const paginationRefVer = useRef(null);
  const paginationRefHor = useRef(null);
  const { mainSubtitleHor, cardsHor,subTextHor } = horizontalCards;
  const { mainTitle, mainSubtitleVer, cardsVer, subText } = verticalCards;

  return (
    <div className="min-h-screen px-4">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-4xl sm:text-5xl mt-16 font-extrabold text-center text-gray-800 mb-12">
          {mainTitle}
        </h1>
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          {mainSubtitleVer}
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-center px-4 text-[1.2rem] mb-8 text-gray-600 font-bold">
          {subText}
        </p>
        <CardSlider cards={cardsVer} paginationRef={paginationRefVer} />

        <h2 className="text-3xl pt-16 font-extrabold text-center text-gray-800 mb-6">
          {mainSubtitleHor}
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-center px-4 text-[1.2rem] mb-8 text-gray-600 font-bold">
          {subTextHor}
        </p>
        <CardSlider cards={cardsHor} paginationRef={paginationRefHor} />
      </div>
    </div>
  );
};

export default VerticalAndHorizontalCards;
