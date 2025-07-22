import { useEffect, useRef } from "react";
import { Container } from "./container";
import LinkButtons from "./whatsApp";
import RawMazeGame from "./mazeHero";

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
  const isMobile = useRef(false);

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
      <section className="bg-white pt-28 md:pt-32 lg:pt-32 pb-12 md:pb-10 lg:pb-10 px-6 md:px-12">
        <div className="flex flex-col md:flex-col lg:flex-col justify-center items-center max-w-7xl mx-auto gap-4">
          <div className="w-full md:w-2/3 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-8">
              Streamline EPFO, ESIC & PT Compliance Unlock HR potential
            </h1>
            <p className="text-lg sm:text-[1.5rem] text-gray-600 mb-2 md:mb-2 lg:mb-2">
              We Handle 90% of Your EPFO, ESIC, PT & LWF Compliance – Free HR &
              Finance Teams for Growth
            </p>
            <div className="flex flex-col gap-4 mb-2">
              <LinkButtons />
            </div>
            <p className="text-lg sm:text-[1.5rem] mb-5 text-gray-600">
              Go Live in 24 Hours – We Handle Complete EPFO, ESIC & PT Setup
            </p>
          </div>

          {/* <div className="w-full md:w-3/4">
            <img
              src="/images/hero_maze_optimized.webp"
              alt="EPFO Compliance Illustration"
              className="w-full h-auto object-contain"
            />
            <RawMazeGame/>
          </div> */}
          <div className="w-full md:w-3/4">
            {/* Show on desktop only */}
            <div className="hidden md:block">
              <RawMazeGame />
            </div>

            {/* Show on mobile/tablet only */}
            <div className="block md:hidden">
              <img
                src="/images/hero_maze_optimized.webp"
                alt="EPFO Compliance Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl mt-5 sm:mt-16 font-bold text-gray-900 text-center">
            Stuck in the Maze, We’ll guide you out.
          </h2>
          <p className="text-gray-600 text-[1.5rem] text-center mt-4 max-w-4xl mx-auto">
            Every HR department faces these compliance nightmares. You're not
            alone.
          </p>
        </div>
      </section>
      {/* <section className="relative min-h-screen flex items-center py-24 justify-center overflow-hidden bg-gradient-to-br from-indigo-400 to-purple-600 animate-[gradientShift_8s_ease_infinite]">
       
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-20 h-20 bg-white/20 rounded-full top-[80%] left-[10%] animate-[floatShape_20s_linear_infinite]"></div>
          <div className="absolute w-32 h-32 bg-white/20 rotate-45 top-[70%] left-[20%] animate-[floatShape_20s_linear_infinite_5s]"></div>
          <div className="absolute w-16 h-16 bg-white/20 rounded-full top-[60%] left-[70%] animate-[floatShape_20s_linear_infinite_10s]"></div>
          <div className="absolute w-24 h-24 bg-white/20 rotate-45 top-[50%] left-[80%] animate-[floatShape_20s_linear_infinite_15s]"></div>
        </div>

       
        <div className="absolute inset-0 z-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full animate-[particleFloat_8s_linear_infinite]"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

 
        <div className="relative z-10 text-center max-w-4xl px-4 text-white">
       
          <div className="w-72 h-72 mx-auto mb-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-xl animate-[iconPulse_3s_ease-in-out_infinite]">
            <div className="grid grid-cols-4 gap-2 w-44 h-44">
              {["🏢", "🏥", "💰", "⚖️", "📊", "🤝", "✅", "🚀"].map(
                (emoji, i) => (
                  <div
                    key={i}
                    className="bg-white/20 rounded-lg text-xl flex items-center justify-center animate-[mazeGlow_4s_ease-in-out_infinite]"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  >
                    {emoji}
                  </div>
                )
              )}
            </div>
          </div>

         
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-tight tracking-tight bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent animate-[titleGlow_2s_ease-in-out_infinite_alternate]">
            STREAMLINE COMPLIANCE
          </h1>
          <p className="mt-4 text-lg sm:text-xl opacity-90 font-light">
            Navigate the EPFO, ESIC & PT maze with confidence – We handle 90% of
            your compliance nightmares
          </p>

   
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <span className="text-4xl font-bold text-white block">90%</span>
              <span className="text-sm text-white/80">Compliance Handled</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <span className="text-4xl font-bold text-white block">24H</span>
              <span className="text-sm text-white/80">Setup Time</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <span className="text-4xl font-bold text-white block">0</span>
              <span className="text-sm text-white/80">Penalties</span>
            </div>
          </div>

    
           <div className="w-full md:w-3/4 mx-auto mt-10">
           
          </div>
            <RawMazeGame />
          
          <div className="mt-10 inline-block bg-white/10 border border-white/20 backdrop-blur-lg px-6 py-3 rounded-full text-sm">
            🛡️ Stuck in the Maze? We'll guide you out — 100% Compliance
            Guaranteed
          </div>

         
          <LinkButtons/>

         
        </div>
      </section> */}
    </div>
  );
}
