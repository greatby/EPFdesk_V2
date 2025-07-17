import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
// import { image } from 'html2canvas/dist/types/css/types/image'
import { useEffect, useState } from "react";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export default function FeatureTabs({ cards }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLargeScreen = useMediaQuery("(min-width: 1000px)");
  const activeColor =
    activeIndex !== -1 ? cards[activeIndex].color : { border: "", raw: "#fff" };

  return (
    <section className=" bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {isLargeScreen ? (
          <>
            {/* Desktop Tabs */}
            <div className="relative mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {cards.map((card, i) => {
                const isActive = activeIndex === i;
                const color = card.color;

                return (
                  <div
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    style={
                      isActive
                        ? {
                            "--tab-color-background": color.raw,
                            "--tab-color-border": color.stroke,
                          }
                        : {}
                    }
                    className={`relative cursor-pointer rounded-[18px] border border-[#0000001c] px-4 py-3 shadow-[0px_0px_6px_#0000001c] transition-all ${
                      isActive
                        ? `z-20 -mb-4 rounded-b-none ${color.bg} border-0 shadow-none`
                        : "bg-white hover:shadow"
                    }`}
                  >
                    {/* <img
                      src={card.image}
                      alt="dummy"
                      srcSet=""
                      className="rounded-[20px]"
                    /> */}
                    <div className="relative w-20 h-20 mx-auto mb-3">
                      {/* Background layers */}
                      <div className="absolute w-16 h-16 rounded-full bg-rose-200 opacity-40 top-[-12%] right-[-20%]" />
                      <div className="absolute w-14 h-14 rounded-full bg-lime-200 opacity-40 bottom-[-16%] left-[10%]" />
                      <div className="absolute w-12 h-12 bg-cyan-200 opacity-40 rounded-[20px] top-[58%] left-[90%]" />
                      {/* Icon Circle */}
                      <div className="relative w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl z-10">
                        {/* You can use card.icon as emoji or image */}
                        {card.image}
                      </div>
                    </div>

                    <h4 className="mt-1 text-[1rem] font-semibold">
                      {card.title}
                    </h4>
                    {/* <p className="mt-1 text-[0.9rem] text-gray-600">
                      {card.description}
                    </p> */}

                    {/* {isActive && (
                      <div className="feature-tab-corners">
                        {i !== 0 && (
                          <div className="feature-tab-corner is-right"></div>
                        )}
                        <div
                          className="middleContent"
                          style={{ backgroundColor: color.raw }}
                        ></div>
                        {i !== cards.length - 1 && (
                          <div className="feature-tab-corner is-left"></div>
                        )}
                      </div>
                    )} */}
                    {isActive && (
                      <div
                        key={`corners-${i}`} // forces re-render on tab switch
                        className="feature-tab-corners"
                        style={{
                          "--tab-color-background": color.raw,
                          "--tab-color-border": color.stroke,
                        }}
                      >
                        {i !== 0 && (
                          <div className="feature-tab-corner is-right"></div>
                        )}
                        <div
                          className="middleContent"
                          style={{ backgroundColor: color.raw }}
                        ></div>
                        {i !== cards.length - 1 && (
                          <div className="feature-tab-corner is-left"></div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Content Panel */}
            <div
              className={`relative rounded-t-none rounded-b-2xl p-6 md:p-10 ${activeColor.border}`}
              style={{ backgroundColor: activeColor.raw }}
            >
              {cards[activeIndex]?.content}
            </div>
          </>
        ) : (
          <div className="flex flex-wrap items-start justify-between gap-4">
            {cards.map((card, i) => {
              const isActive = activeIndex === i;
              const color = card.color;

              return (
                <div
                  key={i}
                  className={clsx(
                    "overflow-hidden rounded-xl border transition",
                    color.border,
                    "flex-1",
                    "w-full basis-full",
                    "md:max-w-[calc(50%-0.5rem)] md:basis-[calc(50%-0.5rem)]"
                  )}
                  style={{
                    backgroundColor: isActive ? color.raw : "white",
                  }}
                >
                  <button
                    className="w-full px-4 py-3 text-left"
                    onClick={() => setActiveIndex(isActive ? -1 : i)}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 [@media(min-width:540px)]:flex-row">
                      {/* <img
                        src={card.image}
                        alt="dummy"
                        className="h-48 flex-shrink-0 rounded-[20px] object-cover [@media(min-width:540px)]:h-36 [@media(min-width:540px)]:w-58"
                      /> */}
                      <div className="relative w-20 h-20 mx-auto mb-3">
                        {/* Background layers */}
                        <div className="absolute w-16 h-16 rounded-full bg-rose-200 opacity-40 top-[-12%] right-[-20%]" />
                        <div className="absolute w-14 h-14 rounded-full bg-lime-200 opacity-40 bottom-[-16%] left-[10%]" />
                        <div className="absolute w-12 h-12 bg-cyan-200 opacity-40 rounded-[20px] top-[58%] left-[90%]" />
                        {/* Icon Circle */}
                        <div className="relative w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl z-10">
                          {/* You can use card.icon as emoji or image */}
                          {card.image}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="mt-1 text-[1rem] font-semibold">
                          {card.title}
                        </h4>
                        <p className="mt-1 text-[0.9rem] text-gray-600">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden px-4 pt-2 pb-4 text-sm text-gray-700"
                      >
                        {card.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
