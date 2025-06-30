// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const cardData = [
//   {
//     id: 1,
//     title: "GitLab Duo",
//     subtitle: "AI Chat in IDE",
//     description: "Accelerate development with contextual, conversational AI.",
//     color: "bg-[#e9ddff]",
//   },
//   {
//     id: 2,
//     title: "Platform",
//     subtitle: "Less time managing tools",
//     description: "Streamline delivery with DevSecOps intelligence.",
//     color: "bg-[#ffd6d6]",
//   },
//   {
//     id: 3,
//     title: "Security",
//     subtitle: "Security built in",
//     description: "Automated scans integrate into your pipelines.",
//     color: "bg-[#d6f4ff]",
//   },
//   {
//     id: 4,
//     title: "DevSecOps",
//     subtitle: "Unified workflows",
//     description: "Track CI/CD pipelines from commit to production.",
//     color: "bg-[#f6e0ff]",
//   },
// ];

// export default function StackedCards() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   return (
//     <section ref={containerRef} className="relative  bg-white">
//       <div className="sticky top-0 h-screen flex items-center justify-center">
//         {cardData.map((card, i) => {
//           const progress = useTransform(scrollYProgress, [0, 1], [0, cardData.length]);
//           const translateY = useTransform(progress, (latest) => {
//             const diff = i - latest;
//             return diff * 40; 
//           });
//           const opacity = useTransform(progress, (latest) => {
//             return i <= latest ? 1 : 0;
//           });

//           return (
//             <motion.div
//               key={card.id}
//               className={`absolute w-[80%] max-w-3xl rounded-xl shadow-2xl p-8 text-black ${card.color}`}
//               style={{
//                 translateY,
//                 opacity,
//                 zIndex: i + 1,
//               }}
//             >
//               <span className="text-sm font-semibold text-gray-600">{card.subtitle}</span>
//               <h2 className="text-2xl font-bold">{card.title}</h2>
//               <p className="mt-2">{card.description}</p>
//               <a href="#" className="mt-4 inline-block text-blue-600 underline">
//                 Learn more →
//               </a>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cardData = [
  {
    id: 1,
    title: "GitLab Duo",
    subtitle: "AI Chat in IDE",
    description: "Accelerate development with contextual, conversational AI.",
    color: "bg-[#e9ddff]",
  },
  {
    id: 2,
    title: "Platform",
    subtitle: "Less time managing tools",
    description: "Streamline delivery with DevSecOps intelligence.",
    color: "bg-[#ffd6d6]",
  },
  {
    id: 3,
    title: "Security",
    subtitle: "Security built in",
    description: "Automated scans integrate into your pipelines.",
    color: "bg-[#d6f4ff]",
  },
  {
    id: 4,
    title: "DevSecOps",
    subtitle: "Unified workflows",
    description: "Track CI/CD pipelines from commit to production.",
    color: "bg-[#f6e0ff]",
  },
];

export default function StackedCards() {
  return (
    <section className="wrapper relative bg-white">
      <div className="slp-container mx-auto px-4 max-w-5xl">
        <ul className="cards-container flex flex-col">
          {cardData.map((card, i) => (
            <Card key={card.id} card={card} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Card({ card, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 20%"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.li
      ref={ref}
      className={`card card-${index + 1} sticky top-[100px] mb-[-140px] z-[${10 - index}] rounded-2xl shadow-xl overflow-hidden ${card.color}`}
      style={{ scale, opacity }}
    >
      <div className="left-side p-8">
        <div className="pill text-sm font-semibold mb-2">{card.subtitle}</div>
        <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
        <p className="text-base">{card.description}</p>
        <a
          href="#"
          className="mt-6 inline-block text-blue-600 underline"
        >
          Learn more →
        </a>
      </div>
    </motion.li>
  );
}
