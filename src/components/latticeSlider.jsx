import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Dedicated Member Login Portal",
    desc: "Provides secure, personalized employee access to the EPFDesk platform, making it their central hub for all EPF matters.",
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a5a96b10c0ffd35b7a_ui-ai-performance-summaries.webp",
    alt: "UI of AI Performance Summaries",
  },
  {
    title: "User-Friendly Interface",
    desc: "Designed for clarity and ease of use, ensuring all employees, regardless of technical skill, can effortlessly navigate and find solutions.",
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a04e4e2f6b5e249476_ui-ai-calibration.webp",
    alt: "UI of AI calibration",
  },
  {
    title: "Mobile-Responsive Design",
    desc: "Guarantees seamless support availability on any device – desktop, tablet, or smartphone – for ultimate convenience.",
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a1658dd9bc56ab8ab6_ui-ai-writing-assist.webp",
    alt: "UI of AI writing assistant",
  },
  {
    title: "Instant Expert Access",
    desc: "Employees get immediate access to EPF expertise without needing HR intervention, streamlining their journey from query to resolution.",
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a0062e7b6225cc312a_ui-ai-team-trends.webp",
    alt: "UI of AI team trends",
  },
  {
    title: "Coaching for when HR can’t be everywhere",
    desc: "71% of HR leaders don’t think they are effectively developing midlevel leaders.",
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a02bef6737c0c60f26_ui-ai-agent-context-2.webp",
    alt: "UI of AI agent context",
  },
];

const LatticeSlider = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-16">
          Complete Employee EPF Support Platform
        </h2>
        <h3 className="text-2xl font-bold mb-8 text-center md:text-left">
          Secure & Intuitive Employee Access (24/7)
        </h3>

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
            <SwiperSlide key={index} className="!h-auto">
              <div className="w-full sm:w-[320px] md:w-[360px] lg:w-[386px] mx-auto bg-gray-50 rounded-xl overflow-hidden shadow-md h-full flex flex-col">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-1">
                  <h3 className="text-lg font-semibold mb-2">{slide.title}</h3>
                  <p className="text-sm text-gray-600">{slide.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="custom-swiper-pagination mt-6 flex justify-center gap-2" />
      </div>
    </section>
  );
};

export default LatticeSlider;
