import React from "react";
import EPFManagementCarousel from "./epfmanagementCarousel";
import EPFServicesSection from "./epfServicesSection";
import EPFComplianceROI from "./epfComplianceROI";
import FadeInWhenVisible from "./fadeInWhenVisible";
import FaqAccordion from "./faqAccordian";
import { epfManagementFaq } from "../../utils/data";
import EPFdeskServices from "./epfDeskServices";
import ESCIServicesSection from "./esciServicesSection";
import { plansEpfDesk } from "../../utils/data";

function Hero() {
  return (
    <div className="relative">
      <section className="pt-32 px-6 md:px-12">
        <div className=" w-full md:max-w-2xl lg:max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-10">
            EPFDesk: Your Direct Line to Effortless EPF Solutions & Support
          </h1>
          <p className="text-lg sm:text-xl text-black mb-10">
            EPFDesk empowers your employees with instant EPF query resolution.
            Check balance, track claims, update KYC & more – all issues handled
            by our experts. Free your HR team from daily EPF queries.
          </p>
        </div>
      </section>
    </div>
  );
}

const EPFDesk = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <EPFdeskServices />
      </FadeInWhenVisible>
       <FadeInWhenVisible>
              <ESCIServicesSection plans={plansEpfDesk}/>
            </FadeInWhenVisible>
    </>
  );
};

export default EPFDesk;
