import React from "react";
import HeroSection from "./linksHeroSection";
import {
  heroSlides,
  horizontalCardsLabour,
  horizontalCardsLabourOne,
  labourFaq,
  largeCardsLabour,
  pastelCardsLabour,
  plansLabour,
  verticalCardsLabour,
  verticalCardsLabourOne,
} from "../../utils/data";
import FadeInWhenVisible from "./fadeInWhenVisible";
import VerticalAndHorizontalCards from "./verticalAndHorizontalCards";
import LargeCardSlider from "./largeCards";
import PastelCardSlider from "./pastelCardSlider";
import StickyScrollSections from './scrollSyncComponent'
import FaqAccordion from "./faqAccordian";

function Hero() {
  return <HeroSection slide={heroSlides[6]} />;
}

const LabourAndHR = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <VerticalAndHorizontalCards
          horizontalCards={horizontalCardsLabour}
          verticalCards={verticalCardsLabour}
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <LargeCardSlider cardsData={largeCardsLabour} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl sm:text-5xl mt-8 font-extrabold text-center text-gray-800 mb-12">
            Your Definitive Solution: Workforce Limited's Labour & HR
            Registrations & Licenses
          </h1>
        </div>
        <PastelCardSlider cardsData={pastelCardsLabour} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <VerticalAndHorizontalCards
          horizontalCards={horizontalCardsLabourOne}
          verticalCards={verticalCardsLabourOne}
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <h2 className="text-3xl sm:text-5xl max-w-5xl mx-auto font-bold my-8 text-center">
          Why Workforce Limited: Your Definitive Partner for Labour & HR
          Registrations{" "}
        </h2>
        <StickyScrollSections items={plansLabour} />
      </FadeInWhenVisible>
       <FadeInWhenVisible>
        <FaqAccordion faqs={labourFaq} />
      </FadeInWhenVisible>
    </>
  );
};

export default LabourAndHR;
