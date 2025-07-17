import React from "react";
import EPFManagementCarousel from "./epfmanagementCarousel";
import EPFServicesSection from "./epfServicesSection";
import EPFComplianceROI from "./epfComplianceROI";
import FadeInWhenVisible from "./fadeInWhenVisible";
import FaqAccordion from "./faqAccordian";
import { epfManagementFaq, slides, epfDeskData, epfDeskMiddletabsData, heroSlides } from "../../utils/data";
import EPFdeskServices from "./epfDeskServices";
import ESCIServicesSection from "./esciServicesSection";
import { plansEpfDesk, epfDeskFaq,epfDeskPlustabs } from "../../utils/data";
import LatticeSlider from "./latticeSlider";
import ResourcesGrid from "./resourceGrid";
import PlusTabsSection from "./plusTabsSection";
import MiddlePanelTabs from "./middlePanelTabs";
import HeroSection from "./linksHeroSection";

function Hero() {
  return (
    <HeroSection slide={heroSlides[1]} />
  );
}

const EPFDesk = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <LatticeSlider slides={slides[0]}/>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ResourcesGrid data={epfDeskData}/>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <PlusTabsSection tabsData={epfDeskPlustabs}/>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <MiddlePanelTabs tabsData={epfDeskMiddletabsData}/>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <EPFdeskServices plans={plansEpfDesk} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <FaqAccordion faqs={epfDeskFaq} />
      </FadeInWhenVisible>
    </>
  );
};

export default EPFDesk;
