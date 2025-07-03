import React from "react";
import EPFManagementCarousel from "./epfmanagementCarousel";
import EPFServicesSection from "./epfServicesSection";
import EPFComplianceROI from "./epfComplianceROI";
import FadeInWhenVisible from "./fadeInWhenVisible";
import LWFServicesSection from "./lwfServicesSection";
import LWFComplianceROI from "./lwfcompliance";

function Hero() {
  return (
    <div className="relative">
      <section className="bg-[#1d3d3c] py-20 px-6 md:px-12">
        <div className=" w-full md:max-w-2xl lg:max-w-2xl text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#f8f7ff] mb-10">
            Labour Welfare Fund Management & Compliance
          </h1>
          <p className="text-lg sm:text-xl text-[#f8f7ff] mb-10">
            Complete LWF compliance for applicable states and employee
            categories. Ensure proper contributions and avoid penalties with our
            expert management.
          </p>
        </div>
      </section>
    </div>
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
      <FadeInWhenVisible>
        <LWFComplianceROI/>
      </FadeInWhenVisible>
    </>
  );
};

export default LabourWelfareFund;
