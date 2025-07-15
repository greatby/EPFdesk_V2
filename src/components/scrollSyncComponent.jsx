import React, { useState, useRef, useEffect } from "react";
const data = [
  {
    title: "Expertise",
    description:
      "Our team combines deep portal expertise with on-ground EPFO office experience and proven audit handling capabilities.",
  },
  {
    title: "Compliance",
    description:
      "We track and implement regulatory changes in real time to ensure you’re always compliant without lifting a finger.",
  },
  {
    title: "Automation",
    description:
      "Our platform automates all filings, follow-ups, and escalations, reducing delays and manual dependencies.",
  },
  {
    title: "Support",
    description:
      "Get expert human support when automation isn't enough — we handle edge cases and exceptions manually.",
  },
];

const StickyScrollSections = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const index = parseInt(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex max-w-6xl mx-auto px-4 md:px-10 py-16 h-full">
      {/* Left Column (Sticky Title) */}
      <div className="w-1/3 hidden md:block">
        <div className="sticky top-32">
          <h2 className="text-3xl font-bold text-gray-800">
            {data[activeIndex].title}
          </h2>
        </div>
      </div>

      {/* Right Column (Scrollable Content) */}
      <div className="w-full md:w-2/3 flex flex-col gap-40">
        {data.map((item, index) => (
          <section
            key={index}
            data-index={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="min-h-screen flex items-center"
          >
            <div>
              {/* Mobile title */}
              <h3 className="text-2xl font-semibold text-gray-800 md:hidden mb-2">
                {item.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default StickyScrollSections;
