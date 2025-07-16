import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const StickyStackedSections = ({ items }) => {
  const [visibleCards, setVisibleCards] = useState({});
  const [scrollDir, setScrollDir] = useState("down");

  // Flatten all cards into a flat array once
  const flatCards = items.cards.flatMap((card, sectionIdx) =>
    card.features.map((feature, featureIdx) => {
      const [title, ...descParts] = feature.split(":");
      const desc = descParts.join(":").trim();
      return {
        sectionIdx,
        featureIdx,
        title: title.trim(),
        desc,
      };
    })
  );

  // Refs for each card
  const allCardRefs = useRef([]);
  allCardRefs.current = flatCards.map(
    (_, i) => allCardRefs.current[i] || React.createRef()
  );

  // Track scroll direction
  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currY = window.scrollY;
      setScrollDir(currY > lastY ? "down" : "up");
      lastY = currY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Observe visibility of each card
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updated = {};
        entries.forEach((entry) => {
          const index = entry.target.dataset.globalidx;
          updated[index] = entry.isIntersecting;
        });
        setVisibleCards((prev) => ({ ...prev, ...updated }));
      },
      { threshold: 0.5 }
    );

    allCardRefs.current.forEach(
      (ref) => ref.current && observer.observe(ref.current)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 py-20">
      {items.cards.map((card, sectionIdx) => (
        <div
          key={sectionIdx}
          className="flex flex-col md:flex-row items-start gap-10 relative mb-40"
        >
          {/* Left sticky title */}
          <div className="w-full md:w-1/2 sticky top-32 h-fit pr-8">
            <h2 className="text-5xl font-bold text-gray-900">{card.title}</h2>
          </div>

          {/* Right column */}
          <div className="w-full md:w-1/2 relative pl-10">
            {/* <div className="absolute left-[26px] top-0 bottom-0 w-px bg-gray-200 z-0" /> */}
            <div className="relative z-10 space-y-12">
              {card.features.map((feature, featureIdx) => {
                const globalIdx = flatCards.findIndex(
                  (f) =>
                    f.sectionIdx === sectionIdx && f.featureIdx === featureIdx
                );
                const ref = allCardRefs.current[globalIdx];
                const visible = visibleCards[globalIdx];
                const isLast = globalIdx === flatCards.length - 1;

                const controls = useAnimation();

                useEffect(() => {
                  if (!ref.current) return;
                  if (visible) {
                    controls.start({
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6 },
                    });
                  } else {
                    controls.start({
                      opacity: 0,
                      x: scrollDir === "down" ? 40 : -40,
                    });
                  }
                }, [visible, scrollDir]);

                return (
                  <div
                    key={globalIdx}
                    ref={ref}
                    data-globalidx={globalIdx}
                    className="relative"
                  >
                    {/* Dot */}
                    {/* Dot */}
                    <div
                      className={`absolute -left-[26px] top-6 w-3 h-3 rounded-full z-10 transition-all duration-300 ${
                        visible
                          ? "bg-[#8bf0ba] shadow-[0_0_0_4px_rgba(139,240,186,0.32)]"
                          : "bg-gray-300"
                      }`}
                    />

                    {/* Connector line */}
                    {!isLast && (
                      <div
                        className={`absolute -left-[20px] top-8 w-px h-[calc(100%+9.5rem)] z-0 transition-all duration-300 ${
                          visible ? "bg-[#c4f5db]" : "bg-gray-300"
                        }`}
                      />
                    )}

                    {/* Card */}
                    {/* <div className="rounded-3xl card-animate border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                      <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                        {flatCards[globalIdx].title}
                      </h4>
                      <p className="text-lg text-gray-700">
                        {flatCards[globalIdx].desc}
                      </p>
                    </div> */}
                    <div className="rounded-2xl border card-animate border-gray-100 bg-white p-8 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out group ml-3">
                      <h4 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                        {flatCards[globalIdx].title}
                      </h4>
                      <p className="text-[1.1rem] font-semibold text-gray-500 leading-relaxed">
                        {flatCards[globalIdx].desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyStackedSections;
