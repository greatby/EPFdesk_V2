import FadeInWhenVisible from "./fadeInWhenVisible";
import Hero from "./hero";
import CardSection from "./infoCard";
import Testimonials from "./testimonials";
import TestimonialsV2 from "./testimonials";
import FooterPromoSection from "./footerPromoSection";
import HeroObserver from "./heroObserver";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <div className="mx-auto px-4 mt-10 w-full space-y-4 text-center md:mt-[255px] md:w-[72%]">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">
            Stuck in the Maze? We&apos;ll guide you out.
          </h1>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible type="zoom-in" delay={0.1}>
        <CardSection />
      </FadeInWhenVisible>
      <FadeInWhenVisible type="slide-left" delay={0.2}>
        <Testimonials />
      </FadeInWhenVisible>
      <FadeInWhenVisible type="slide-right" delay={0.3}>
        <TestimonialsV2 />
      </FadeInWhenVisible>
      <FadeInWhenVisible type="fade-up" delay={0.4}>
        <FooterPromoSection />
      </FadeInWhenVisible>
    
      <HeroObserver />
    </>
  );
}
