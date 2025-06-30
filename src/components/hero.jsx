import { useEffect, useRef } from "react";
import { Container } from "./container";
import LinkButtons from "./whatsApp";

function ZendeskHeroStack() {
  return (
    <div className="relative mb-[20px] w-full">
      <div className="relative mx-auto h-[250px] w-full sm:h-[350px] md:h-[450px] lg:h-[500px]">
        <img
          src="/images/hero_maze_optimized.webp"
          alt="App UI"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

export default function Hero({ setShowFloating }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloating(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, [setShowFloating]);
  return (
    <div className="relative">
      <Container className="relative">
        <div className="px-4" id="hero-section">
          <div className="mx-auto mt-24 mb-6 w-full space-y-4 text-center md:mx-auto md:w-[72%] lg:w-[72%]">
            <p className="text-black-600 text-[20px] font-bold">
              EPFdesk makes PF easy for you.
            </p>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">
              Let us handle all your EPF tasks and solve your employees actions
              while you focus on HR.
            </h1>
            <p className="text-black-600 text-[20px] font-bold">
              Trusted by a growing number of HR teams in India.
            </p>
          </div>
        </div>
        <div>
          <LinkButtons />
        </div>
        <div className="flex items-center justify-center">
          <ZendeskHeroStack />
        </div>
      </Container>
    </div>
  );
}
