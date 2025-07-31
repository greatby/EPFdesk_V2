import { useRef, useState } from "react";
import {
  ChevronDownIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
  CalendarDaysIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { epfServices, plansEpfManagement, whyEpfDesk } from "../../utils/data";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { epfDeskServices, epfDeskStatergy } from "../../utils/data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import VerticalCarousel from "./verticalCarousel";
import StickyScrollSections from './scrollSyncComponent'


const EPFSlider = () => {
  const sliderRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  const scroll = (direction) => {
    const container = sliderRef.current;
    const scrollAmount = 320;
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Flatten items with title and icon
  const allItems = epfDeskStatergy.flatMap((section) =>
    section.items.map((item, index) => ({
      title: section.title,
      icon: section.icon,
      content: item,
      id: `${section.title}-${index}`,
    }))
  );

  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Unlock the Strategic Value of Your HR Team
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Our EPFDesk services ensure employee support is handled with care—so
            HR can focus on what matters.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Card Slider */}
        <div
          ref={sliderRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-1"
        >
          {allItems.map((item, index) => {
            const Icon = item.icon;
            return (
              // <motion.div
              //   key={item.id}
              //   id={`card-${index}`}
              //   className={`min-w-[280px] max-w-xs flex-shrink-0 snap-start border rounded-2xl bg-white hover:shadow-md transition p-0 cursor-pointer ${
              //     activeCard === index ? "ring-2 ring-cyan-400" : ""
              //   }`}
              //   onClick={() => {
              //     const container = sliderRef.current;
              //     const cardEl = document.getElementById(`card-${index}`);
              //     setActiveCard(index);
              //     if (container && cardEl) {
              //       const left = cardEl.offsetLeft - 16;
              //       container.scrollTo({ left, behavior: "smooth" });
              //     }
              //   }}
              //   initial={{ opacity: 0, y: 20 }}
              //   animate={{ opacity: 1, y: 0 }}
              //   transition={{ duration: 0.3, delay: index * 0.05 }}
              // >
              //   <div className="flex flex-col h-full rounded-2xl overflow-hidden">
              //     {/* Gradient Header with Icon + Title */}
              //     <div className="bg-gradient-to-tr from-blue-400 via-cyan-300 to-teal-300 h-32 flex items-center justify-center px-4 text-center">
              //       <div>
              //         <Icon className="w-8 h-8 text-white mx-auto mb-2" />
              //         {/* <h4 className="text-white font-semibold text-sm leading-snug">
              //           {item.title}
              //         </h4> */}
              //       </div>
              //     </div>

              //     {/* Body Content */}
              //     <div className="p-5">
              //       <p className="text-lg text-gray-700 leading-relaxed">
              //         {item.content.includes(":") ? (
              //           <>
              //             <strong>{item.content.split(":")[0]}:</strong>{" "}
              //             {item.content.split(":").slice(1).join(":")}
              //           </>
              //         ) : (
              //           item.content
              //         )}
              //       </p>
              //     </div>
              //   </div>
              // </motion.div>
              <motion.div
                key={item.id}
                id={`card-${index}`}
                className={`min-w-[280px] max-w-xs flex-shrink-0 snap-start border rounded-2xl bg-white hover:shadow-md transition p-0 cursor-pointer ${
                  activeCard === index ? "ring-2 ring-cyan-400" : ""
                }`}
                onClick={() => {
                  const container = sliderRef.current;
                  const cardEl = document.getElementById(`card-${index}`);
                  setActiveCard(index);
                  if (container && cardEl) {
                    const left = cardEl.offsetLeft - 16;
                    container.scrollTo({ left, behavior: "smooth" });
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex flex-col h-full rounded-2xl overflow-hidden">
                  {/* ✨ Fancy Gradient Header with floating bubbles */}
                  <div className="relative bg-gradient-to-br from-[#a18cd1] to-[#fbc2eb] h-32 px-4 py-6 flex items-center justify-center text-center">
                    {/* Bubbles */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute w-4 h-4 rounded-full bg-[#ff6b6b] opacity-20 top-[20%] left-[20%] animate-bounce"></div>
                      <div className="absolute w-5 h-5 rounded-full bg-[#4ecdc4] opacity-20 bottom-[20%] right-[25%] animate-bounce delay-200"></div>
                      <div className="absolute w-6 h-6 rounded-full bg-[#ffe66d] opacity-20 bottom-[35%] left-[30%] animate-bounce delay-300"></div>
                    </div>

                    {/* Icon in white circle */}
                    <div className="z-10">
                      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-full bg-white shadow text-2xl text-cyan-600">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-white font-semibold text-sm leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {item.content.includes(":") ? (
                        <>
                          <strong>{item.content.split(":")[0]}:</strong>{" "}
                          {item.content.split(":").slice(1).join(":")}
                        </>
                      ) : (
                        item.content
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
const EPFStackTabs = ({ epfServices }) => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Tabs - Left */}
          <div className="space-y-4">
            {epfServices.map((item, index) => {
              const isActive = index === active;
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className={`flex items-center justify-between border rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-white border-indigo-600 shadow-sm"
                      : "bg-gray-100 border-transparent"
                  }`}
                >
                  <h6 className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </h6>
                  <div className="rounded-full p-2 bg-indigo-600">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Panel - Items List */}
          <div className="rounded-xl bg-white shadow-md p-6 border min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="list-disc pl-5 space-y-3 text-sm text-gray-700">
                  {epfServices[active].items.map((point, i) => (
                    <li key={i}>
                      {point.includes(":") ? (
                        <>
                          <strong>{point.split(":")[0]}:</strong>
                          {point.split(":").slice(1).join(":")}
                        </>
                      ) : (
                        point
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const AlternatingFeatureCards = ({ cards }) => {
  const bgColors = [
    "bg-indigo-50",
    "bg-teal-50",
    "bg-purple-50",
    "bg-yellow-50",
  ];

  return (
    <section className="px-4 py-16 max-w-7xl mx-auto space-y-24">
      {cards.map((card, idx) => {
        const isEven = idx % 2 === 1;
        const bgColor = bgColors[idx % bgColors.length];

        return (
          <motion.div
            key={idx}
            className={`flex flex-col lg:flex-row ${
              isEven ? "lg:flex-row-reverse" : ""
            } items-center gap-10`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Title */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
            </div>

            {/* Animated Feature List */}
            <motion.div
              className={`lg:w-1/2 w-full rounded-xl shadow-md p-6 ${bgColor}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <div className="space-y-4">
                {card.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>
                      {feature.includes(":") ? (
                        <>
                          <strong>{feature.split(":")[0]}:</strong>
                          {feature.split(":").slice(1).join(":")}
                        </>
                      ) : (
                        feature
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default function EPFdeskServices({ plans }) {
  return (
    <section className="py-8 px-4 md:px-12">
      <div className="space-y-4 mx-auto">
        {/* <EPFSlider epfServices={epfDeskStatergy} /> */}
        <h2 className="text-3xl sm:text-5xl text-center font-bold mb-10 text-gray-900">
            Unlock the Strategic Value of Your HR Team
          </h2>
          <p className="text-[1.4rem] text-center text-gray-600 mt-2">
            Our EPFDesk services ensure employee support is handled with care—so
            HR can focus on what matters.
          </p>
         <StickyScrollSections items={plansEpfManagement}/>
      </div>
    </section>
  );
}
