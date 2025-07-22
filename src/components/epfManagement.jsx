import React from "react";
import EPFManagementCarousel from "./epfmanagementCarousel";
import EPFServicesSection from "./epfServicesSection";
import EPFComplianceROI from "./epfComplianceROI";
import FadeInWhenVisible from "./fadeInWhenVisible";
import FaqAccordion from "./faqAccordian";
import { dummyCards, epfManagementFaq, epfoCards, epfServices, heroSlides, plans } from "../../utils/data";
import LatticeTabs from "./latticeTabs";
import HeroSection from "./linksHeroSection";


function Hero() {
  return (
    <HeroSection slide={heroSlides[4]} />
    // <div className="relative">
    //   <section className="pt-32 px-6 md:px-12">
    //     <div className=" w-full md:max-w-2xl lg:max-w-3xl mx-auto text-center">
    //       <h1 className="text-4xl sm:text-5xl font-bold text-black mb-10">
    //         Employer EPF Management: Streamline Your Compliance & Unleash HR's
    //         Potential
    //       </h1>
    //       <p className="text-lg sm:text-xl text-black mb-10">
    //         Master employer EPF compliance with EPFDesk.com. We automate
    //         challans, manage filings & mitigate risks, freeing your HR & Finance
    //         teams for strategic growth. Expert-led solutions for Indian
    //         businesses.
    //       </p>
    //     </div>
    //   </section>
    // </div>
  );
}

const EPFManagement = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <EPFManagementCarousel />
      </FadeInWhenVisible> */}
      <FadeInWhenVisible>
        <div>
          <h2 className="text-3xl sm:text-5xl mt-12 font-bold text-center">
            Complete EPF Services We Provide
          </h2>
          <LatticeTabs cards={epfoCards} />
        </div>
      </FadeInWhenVisible>
     
      <FadeInWhenVisible>
        <EPFServicesSection/>
      </FadeInWhenVisible>
      {/* <FadeInWhenVisible>
        <EPFComplianceROI />
      </FadeInWhenVisible> */}
      <FadeInWhenVisible>
        <FaqAccordion faqs={epfManagementFaq} />
      </FadeInWhenVisible>
    </>
  );
};

export default EPFManagement;
