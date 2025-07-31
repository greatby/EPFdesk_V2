import React from "react";
import FadeInWhenVisible from "./fadeInWhenVisible";
import HeroSection from "./linksHeroSection";
import {
  heroSlides,
  horizontalCardsPosh,
  horizontalCardsPoshOne,
  largeCardsPosh,
  largeCardsPoshOne,
  pastelCardsPosh,
  plansPosh,
  poshFaq,
  verticalCardsPosh,
  verticalCardsPoshOne,
} from "../../utils/data";
import VerticalAndHorizontalCards from "./verticalAndHorizontalCards";
import LargeCardSlider from "./largeCards";
import PastelCardSlider from "./pastelCardSlider";
import StickyScrollSections from "./scrollSyncComponent";
import FaqAccordion from "./faqAccordian";

function Hero() {
  return <HeroSection slide={heroSlides[5]} />;
}

const Posh = () => {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <VerticalAndHorizontalCards
          horizontalCards={horizontalCardsPosh}
          verticalCards={verticalCardsPosh}
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <LargeCardSlider cardsData={largeCardsPosh} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl px-2 sm:text-5xl mt-16 font-extrabold text-center text-gray-800 mb-10">
            Your Definitive Solution: EPFdesk.com’s POSH Act Compliance Services
          </h1>
        </div>
        <PastelCardSlider cardsData={pastelCardsPosh} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <VerticalAndHorizontalCards
          horizontalCards={horizontalCardsPoshOne}
          verticalCards={verticalCardsPoshOne}
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <LargeCardSlider cardsData={largeCardsPoshOne} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <h2 className="text-3xl sm:text-5xl max-w-5xl px-2 mx-auto font-bold mt-16 mb-10 text-center">
          Why EPFdesk.com: Your Definitive Partner for POSH Act Compliance{" "}
        </h2>
        <p className="max-w-4xl mx-auto mt-6 text-center px-4 text-[1.3rem] mb-6 text-gray-600 font-bold">
          EPFdesk.com stands as India's premier choice for comprehensive POSH
          Act compliance, redefining workplace safety and legal integrity for
          mid-to-large enterprises.
        </p>
        <StickyScrollSections items={plansPosh} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <FaqAccordion faqs={poshFaq} />
      </FadeInWhenVisible>
    </>
  );
};

export default Posh;
