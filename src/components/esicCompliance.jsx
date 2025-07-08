import React from "react";
import FadeInWhenVisible from "./fadeInWhenVisible";
import ESICComplianceCarousel from "./esicCompaliancecarousel";
import ESCIServicesSection from "./esciServicesSection";

function Hero() {
  return (
    <div className="relative">
      <section className=" py-24 px-6 md:px-12">
        <div className=" w-full md:max-w-2xl lg:max-w-2xl text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-10">
            Complete ESIC Compliance & Medical Benefits Management.
          </h1>
          <p className="text-lg sm:text-xl text-black mb-10">
            Comprehensive ESIC management from registrations to claim
            processing. Ensure your employees get timely medical benefits while
            maintaining 100% compliance.
          </p>
        </div>
      </section>
    </div>
  );
}

const ESICCompliance = () => {
  return <>
        <FadeInWhenVisible>
          <Hero />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <ESICComplianceCarousel />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <ESCIServicesSection />
        </FadeInWhenVisible>
       
      </>
  
};

export default ESICCompliance;
