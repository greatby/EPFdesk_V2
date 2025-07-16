import React from "react";
import FadeInWhenVisible from "./fadeInWhenVisible";
import ESICComplianceCarousel from "./esicCompaliancecarousel";
import ESCIServicesSection from "./esciServicesSection";
import { plans, esicFaq } from "../../utils/data";
import FaqAccordion from "./faqAccordian";
import StickyScrollSections from "./scrollSyncComponent";

function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[#a8e6cf] h-[80vh] to-[#dcedc1] p-10 transform transition ">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute bg-[#ff6b6b] w-5 h-5 rounded-full top-[20%] left-[20%] opacity-20 animate-float delay-0"></div>
        <div class="absolute bg-[rgb(78,205,196)] w-4 h-4 rounded-full top-[70%] right-[20%] opacity-20 animate-float delay-2000"></div>
        <div class="absolute bg-[#ffe66d] w-6 h-6 rounded-full bottom-[30%] left-[30%] opacity-20 animate-float delay-4000"></div>
      </div>
      <div class="relative w-24 h-24 mx-auto mb-6">
        <div class="absolute w-12 h-12 bg-[#ff6b6b] top-[45px] right-0 rounded-full opacity-30"></div>
        <div class="absolute w-8 h-8 bg-[#4ecdc4] bottom-[-40px] left-0 rounded-full opacity-30"></div>
        {/* <div class="relative w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center text-4xl shadow-lg z-10">
          🎨
        </div> */}
      </div>
      <section className="absolute top-0 bottom-0 left-0 right-0 pt-32 px-6 md:px-12">
        <div className=" w-full md:max-w-2xl lg:max-w-3xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-10">
            ESIC Compliance: Effortless Management for Employee Well-being &
            Business Protection
          </h1>
          <p className="text-lg sm:text-xl text-black mb-10">
            Master ESIC compliance with EPFDesk.com. We handle registration,
            accurate contributions, monthly filings & ensure all employee
            benefits. Avoid penalties, achieve 99.9% accuracy, and empower your
            HR.
          </p>
        </div>
      </section>
    </div>
  );
}

const ESICCompliance = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <ESICComplianceCarousel />
      </FadeInWhenVisible> */}
      <FadeInWhenVisible>
        <ESCIServicesSection plans={plans} />
      </FadeInWhenVisible>
      <StickyScrollSections items={plans} />
      <FadeInWhenVisible>
        <FaqAccordion faqs={esicFaq} />
      </FadeInWhenVisible>
    </>
  );
};

export default ESICCompliance;
