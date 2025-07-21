import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const FloatingCircles = () => (
  <>
    <div className="absolute w-5 h-5 bg-[#ff6b6b] rounded-full top-[20%] left-[20%] opacity-20 animate-float" />
    <div className="absolute w-4 h-4 bg-[#4ecdc4] rounded-full top-[70%] right-[20%] opacity-20 animate-float delay-2000" />
    <div className="absolute w-6 h-6 bg-[#ffe66d] rounded-full bottom-[30%] left-[30%] opacity-20 animate-float delay-4000" />
  </>
);

const LargeCardSlider = ({ cardsData }) => {
  const { subTitle, cards } = cardsData;
  const paginationRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <>
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-12">
        {subTitle}
      </h2>
      <div className="px-4 sm:px-6 lg:px-8 relative">
        <FloatingCircles />
        <div className="relative z-10 max-w-7xl py-2 mx-auto overflow-hidden">
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
                el: swiperRef.current,
              }}
              // pagination={{ clickable: true }}
              breakpoints={{
                480: { slidesPerView: 1.2 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3 },
              }}
              className="!overflow-visible"
              // onSwiper={() => {
              //   setTimeout(() => {
              //     if (paginationRef.current) {
              //       paginationRef.current.classList.remove("hidden");
              //     }
              //   }, 100);
              // }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {cards.map(({ title, subtitle, icon, bubble, bg }, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`relative ${bg} h-[440px] p-10 rounded-3xl shadow-xl transition hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center`}
                    onClick={(e) => {
                      const card = e.currentTarget;
                      const clickX = e.clientX;
                      const { left, width } = card.getBoundingClientRect();
                      const relativeX = clickX - left;

                      if (relativeX < width / 2) {
                        swiperRef.current?.slidePrev(); // Clicked left
                      } else {
                        swiperRef.current?.slideNext(); // Clicked right
                      }
                    }}
                  >
                    <div className="absolute inset-0 pointer-events-none">
                      <FloatingCircles />
                    </div>

                    {/* Speech Bubble */}
                    <div className="absolute top-4 right-4 bg-white/90 text-gray-800 rounded-xl px-3 py-1 text-xs font-semibold shadow-md opacity-0 scale-95 transition-all hover:opacity-100 hover:scale-100">
                      {bubble}
                    </div>

                    {/* Icon */}
                    <div className="relative w-40 h-40 mb-4">
                      <div className="absolute top-[-12px] right-[-12px] w-20 h-20 rounded-full bg-[#ff6b6b] opacity-30" />
                      <div className="absolute bottom-[-8px] left-[-8px] w-16 h-16 rounded-full bg-[#4ecdc4] opacity-30" />
                      <div className="absolute top-[30px] left-[30px] w-24 h-24 rounded-[25px] bg-[#ffe66d] opacity-30 rotate-45" />
                      <div className="relative w-[100px] h-[100px] mx-auto rounded-full bg-white flex items-center justify-center text-5xl shadow-md z-10">
                        {icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center max-w-xs">
                      <h3 className="text-3xl font-bold mb-2">{title}</h3>
                      <p className="text-base opacity-90 leading-relaxed">
                        {subtitle}
                      </p>
                      <div className="mt-6 w-20 h-2 rounded-full bg-white/30 mx-auto overflow-hidden">
                        <div className="h-full bg-white/80 animate-progress rounded-full" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div
            ref={swiperRef}
            className="custom-swiper-pagination mt-6 flex justify-center gap-2"
          />
        </div>
      </div>
    </>
  );
};

export default LargeCardSlider;
