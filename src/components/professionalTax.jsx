import React from "react";
import EPFManagementCarousel from "./epfmanagementCarousel";
import EPFServicesSection from "./epfServicesSection";
import EPFComplianceROI from "./epfComplianceROI";
import FadeInWhenVisible from "./fadeInWhenVisible";
import PFCarousel from "./pfcarousel";
import PFServicesSection from "./pfServicesSection";
import FaqAccordion from "./faqAccordian";
import { heroSlides, ptFaq } from "../../utils/data";
import PastelCards from "./pastelCards";
import HeroSection from "./linksHeroSection";

function Hero() {
  return (
    <HeroSection slide={heroSlides[3]} />
    // <div className="relative">
    //   <section className=" pt-32 px-6 md:px-12">
    //     <div className=" w-full md:max-w-2xl lg:max-w-2xl text-center mx-auto">
    //       <h1 className="text-4xl sm:text-5xl font-bold text-black mb-10">
    //         Professional Tax Compliance: Master Multi-State Nuances, Ensure
    //         Flawless Adherence
    //       </h1>
    //       <p className="text-lg sm:text-xl text-black mb-10">
    //         Master Professional Tax compliance across India with EPFDesk.com. We
    //         handle state-specific calculations, precise filings, and ensure
    //         timely adherence. Avoid penalties, achieve 100% accuracy for PT.
    //       </p>
    //     </div>
    //   </section>
    // </div>
  );
}

const ProfessionalTax = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <PFCarousel />
      </FadeInWhenVisible> */}
      <FadeInWhenVisible>
        <PFServicesSection />
      </FadeInWhenVisible>
      {/* <PastelCards /> */}
      <FadeInWhenVisible>
        <FaqAccordion faqs={ptFaq} />
      </FadeInWhenVisible>
    </>
  );
};

export default ProfessionalTax;
