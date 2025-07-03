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
    <div className="relative" id="hero-section">
      {/* <Container className="relative">
        <div className="px-4" id="hero-section">
          <div className="mx-auto mt-24 mb-6 w-full space-y-4 text-center md:mx-auto md:w-[75%] lg:w-[75%]">
            <p className="text-black-600 text-3xl font-bold sm:text-5xl">
              Complete EPFO Compliance Made Simple
            </p>
            <h1 className="text-[20px] font-bold text-gray-900 sm:text-[20px]">
              Stop struggling with monthly EPF filings. Let our expert team
              handle all your EPFO, ESIC, PT & LWF compliance while you focus on
              growing your business.
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
      </Container> */}
      <section className="bg-[#1d3d3c] py-20 px-6 md:px-12">
      <div className=" w-full md:max-w-2xl lg:max-w-2xl text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#f8f7ff] mb-10">
          Complete EPFO Compliance Made Simple
        </h1>
        <p className="text-lg sm:text-xl text-[#f8f7ff] mb-10">
          Stop struggling with monthly EPF filings. Let our expert team handle all your EPFO, ESIC, PT & LWF compliance while you focus on growing your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 bg-[#beb4fd] text-[#1d3d3c] rounded-[4rem] text-base font-semibold hover:bg-[#beb4fd] transition">
            Start Free Consultation
          </button>
          <button className="px-6 py-3 bg-[#46c9c900] border border-gray-300 text-[#f8f7ff] rounded-[4rem] text-base font-semibold hover:bg-gray-100 hover:text-gray-500 transition">
            Explore Services
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}
