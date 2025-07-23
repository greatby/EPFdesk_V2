import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const PastelCardSlider = ({ cardsData }) => {
  const { subTitle, cards } = cardsData;
  const paginationRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <>
      <div className="mb-8 pt-8 sm:pt-12">
        <h2 className="max-w-7xl mx-auto text-center px-4 text-3xl font-bold">
          {subTitle}
        </h2>
        <section className=" px-6 py-12 sm:py-16">
          <div className="max-w-7xl py-4 mx-auto overflow-hidden">
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
                onSwiper={(swiper) => (paginationRef.current = swiper)}
              >
                {cards.map((card, i) => (
                  <SwiperSlide key={i} className="!h-auto flex">
                    <div
                      className={`flex flex-col w-full h-full bg-gradient-to-br ${card.bg} p-10 rounded-3xl shadow-xl transform transition hover:-translate-y-2 hover:shadow-2xl`}
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
                      {/* Floating bubbles */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute bg-[#ff6b6b] w-5 h-5 rounded-full top-[20%] left-[20%] opacity-20 animate-float" />
                        <div className="absolute bg-[#4ecdc4] w-4 h-4 rounded-full top-[70%] right-[20%] opacity-20 animate-float delay-2000" />
                        <div className="absolute bg-[#ffe66d] w-6 h-6 rounded-full bottom-[30%] left-[30%] opacity-20 animate-float delay-4000" />
                      </div>

                      {/* Speech bubble */}
                      {/* <div className="absolute top-3 right-3 bg-white/90 rounded-xl px-3 py-1 text-xs font-medium text-gray-700 shadow-md opacity-0 scale-95 transition hover:opacity-100 hover:scale-100">
                        {card.bubble}
                      </div> */}

                      {/* Icon */}
                      <div className="relative w-24 h-24 mx-auto mb-6">
                        <div className="absolute w-12 h-12 bg-[#ff6b6b] top-0 right-0 rounded-full opacity-30" />
                        <div className="absolute w-8 h-8 bg-[#4ecdc4] bottom-0 left-0 rounded-full opacity-30" />
                        <div className="relative w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center text-4xl shadow-lg z-10">
                          {card.icon}
                        </div>
                      </div>

                      {/* Text */}
                      <div className="text-center">
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">
                          {card.title}
                        </h3>
                        <p className="text-lg text-gray-700 opacity-80">
                          {card.subtitle}
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
        </section>
      </div>
    </>
  );
};

export default PastelCardSlider;
