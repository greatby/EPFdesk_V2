import React from "react";
import EPFManagementCarousel from "./epfmanagementCarousel";
import EPFServicesSection from "./epfServicesSection";
import EPFComplianceROI from "./epfComplianceROI";
import FadeInWhenVisible from "./fadeInWhenVisible";
import LWFServicesSection from "./lwfServicesSection";
import LWFComplianceROI from "./lwfcompliance";
import FaqAccordion from "./faqAccordian";
import { heroSlides, lwfFaq } from "../../utils/data";
import HeroSection from "./linksHeroSection";

function Hero() {
  return (
    <HeroSection slide={heroSlides[2]} />
    // <div className="relative">
    //   <section className=" pt-32 px-6 md:px-12">
    //     <div className=" w-full md:max-w-2xl lg:max-w-3xl text-center mx-auto">
    //       <h1 className="text-4xl sm:text-5xl font-bold text-black mb-10">
    //         Labour Welfare Fund (LWF) Compliance: Navigating State Nuances for
    //         Flawless Adherence
    //       </h1>
    //       <p className="text-lg sm:text-xl text-black mb-10">
    //         Master LWF compliance across India with EPFDesk.com. We handle
    //         state-specific calculations, filings & ensure timely adherence.
    //         Avoid penalties, achieve 100% accuracy for LWF.
    //       </p>
    //     </div>
    //   </section>
    // </div>
  );
}

const LabourWelfareFund = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <LWFServicesSection />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <LWFComplianceROI />
      </FadeInWhenVisible> */}
      <FadeInWhenVisible>
        <FaqAccordion faqs={lwfFaq} />
      </FadeInWhenVisible>
    </>
  );
};

export default LabourWelfareFund;
