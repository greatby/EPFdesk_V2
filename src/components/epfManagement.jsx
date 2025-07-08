import React from "react";
import EPFManagementCarousel from "./epfmanagementCarousel";
import EPFServicesSection from "./epfServicesSection";
import EPFComplianceROI from "./epfComplianceROI";
import FadeInWhenVisible from "./fadeInWhenVisible";

function Hero() {
  return (
    <div className="relative">
      <section className="py-24 px-6 md:px-12">
        <div className=" w-full md:max-w-2xl lg:max-w-2xl text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-10">
            Complete EPF Management & EPFO Compliance Services.
          </h1>
          <p className="text-lg sm:text-xl text-black mb-10">
            End-to-end EPF compliance for your organization. From monthly
            filings to employee withdrawals - we handle it all with 100%
            accuracy.
          </p>
        </div>
      </section>
    </div>
  );
}

const EPFManagement = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <EPFManagementCarousel />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <EPFServicesSection />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <EPFComplianceROI />
      </FadeInWhenVisible>
    </>
  );
};

export default EPFManagement;
