import React from "react";
import EPFManagementCarousel from "./epfmanagementCarousel";
import EPFServicesSection from "./epfServicesSection";
import EPFComplianceROI from "./epfComplianceROI";
import FadeInWhenVisible from "./fadeInWhenVisible";
import PFCarousel from "./pfcarousel";
import PFServicesSection from "./pfServicesSection";

function Hero() {
  return (
    <div className="relative">
      <section className=" pt-32 px-6 md:px-12">
        <div className=" w-full md:max-w-2xl lg:max-w-2xl text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-10">
            State-wise Professional Tax Management Across India
          </h1>
          <p className="text-lg sm:text-xl text-black mb-10">
            Navigate complex PT regulations across all Indian states. We handle
            registrations, monthly deductions, annual returns, and compliance
            for your multi-location business.
          </p>
        </div>
      </section>
    </div>
  );
}

const ProfessionalTax = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <PFCarousel />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <PFServicesSection />
      </FadeInWhenVisible>
    
    </>
  );
};

export default ProfessionalTax;
