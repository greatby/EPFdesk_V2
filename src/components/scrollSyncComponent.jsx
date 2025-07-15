import React, { useEffect, useRef, useState } from "react";
import { HiCheck } from "react-icons/hi";

const StickyStackedSections = ({ items }) => {
  const refs = useRef([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = parseInt(entry.target.dataset.idx);
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveIdx(idx);
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 py-20 space-y-40">
      {items.cards.map((card, i) => (
        <div
          key={i}
          data-idx={i}
          ref={(el) => (refs.current[i] = el)}
          className="h-[100vh] flex flex-col md:flex-row items-start gap-10"
        >
          {/* Sticky Left Title inside this section */}
          <div className="w-full md:w-1/2 sticky top-32 h-fit">
            <h2
              className={`text-5xl font-bold text-gray-900 transition-all duration-700 ease-in-out ${
                i === activeIdx
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-0"
              }`}
            >
              {card.title}
            </h2>
          </div>

          {/* Scrollable Right Content */}
          <div className="w-full md:w-1/2">
            <div className=" p-6">
              <ul className="space-y-4">
                {card.features.map((feature, j) => {
                  const [boldPart, ...rest] = feature.split(":");
                  return (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-gray-800 text-base leading-relaxed"
                    >
                      <HiCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span>
                        <strong>{boldPart}:</strong>
                        {rest.length > 0 && <span>{rest.join(":")}</span>}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyStackedSections;
