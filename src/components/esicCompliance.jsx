import React from "react";
import FadeInWhenVisible from "./fadeInWhenVisible";
import ESICComplianceCarousel from "./esicCompaliancecarousel";
import ESCIServicesSection from "./esciServicesSection";
import { plans,esicFaq } from "../../utils/data";
import FaqAccordion from "./faqAccordian";
import StickyScrollSections from "./scrollSyncComponent";

function Hero() {
  return (
    <div className="relative">
      <section className=" pt-32 px-6 md:px-12">
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
      {/* <StickyScrollSections items={plans}/> */}
      <FadeInWhenVisible>
        <FaqAccordion faqs={esicFaq} />
      </FadeInWhenVisible>
    </>
  );
};

export default ESICCompliance;
