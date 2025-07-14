import {
  CalendarDaysIcon,
  ScaleIcon,
  PhoneIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const challenges = [
  {
    icon: <CalendarDaysIcon className="w-8 h-8 text-blue-600" />,
    title: "Monthly Compliance Panic",
    description:
      "You're racing against monthly EPFO & ESIC deadlines, juggling multiple state-wise portals for EPF, ESIC, PT, and LWF instead of growing your business – turning you into a full-time compliance officer rather than the innovator you set out to be.",
    bgColor: "#eafce9",
  },
  {
    icon: <ScaleIcon className="w-8 h-8 text-blue-600" />,
    title: "Employee Frustration & HR Burnout",
    description:
      "Unresolved EPF & ESIC Issues impact employee morale and productivit y, leading to increased HR Workload from queries.",
    bgColor: "#fffae6",
  },
  {
    icon: <PhoneIcon className="w-8 h-8 text-blue-600" />,
    title: "Statutory penalties and audit risk.",
    description:
      "Non-compliance with EPFO, ESIC, and other statutory requirements can trigger penalties up to 100% of dues, plus interest and potential audit risks that could cripple your business finances.",
    bgColor: "#f8f0ff",
  },
  {
    icon: <PencilSquareIcon className="w-8 h-8 text-blue-600" />,
    title: "The Cost of Lost Productivity and Focus.",
    description:
      "HR and Finance teams spend hours on employee linking, KYC approvals, and portal data entry instead of focusing on talent development, financial strategy, and business growth that actually drives revenue.",
    bgColor: "#fceff1",
  },
];

// const FlipCard = ({ item }) => {
//   const [flipped, setFlipped] = useState(false);

//   return (
//     <div className="group [perspective:1000px]">
//       <div
//         className={`flip-card-inner h-64 w-full rounded-2xl relative transition-transform duration-500 ${
//           flipped ? "rotate-y-180" : "group-hover:rotate-y-180"
//         }`}
//         onClick={() => setFlipped((prev) => !prev)}
//       >
//         {/* Front */}
//         <div
//           className="flip-card-front absolute inset-0 p-6 rounded-2xl shadow-sm"
//           style={{ backgroundColor: item.bgColor }}
//         >
//           <div className="mb-4">{item.icon}</div>
//           <h3 className="text-[2rem] leading-tight font-bold text-gray-800">{item.title}</h3>
//         </div>

//         {/* Back */}
//         <div
//           className="flip-card-back absolute inset-0 p-6 rounded-2xl shadow-md"
//           style={{ backgroundColor: item.bgColor }}
//         >
//           <p className="text-gray-700 text-[17px]">{item.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

const FlipCard = ({ item }) => {
  return (
    <div className="">
      <div className="bg-white rounded-[1.2rem] p-2 border shadow-md border-[#37415124] flex items-center justify-center h-full">
        <div
          className="rounded-[1.2rem] p-3 flex flex-col justify-start min-h-[300px] w-full"
          style={{ backgroundColor: item.bgColor }}
        >
          {/* Optional Icon */}
          <div className="mb-4 text-4xl">{item.icon}</div>

          <h3 className="text-xl md:text-[2rem] font-bold text-gray-800 mb-3 leading-tight">
            {item.title}
          </h3>
          <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};
const HrChallenges = () => {
  return (
    <section className={`bg-white px-6 md:px-12`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-[2.5rem] font-bold text-gray-900 text-center">
          Stuck in the Maze, We’ll guide you out.
        </h2>
        <p className="text-gray-600 text-lg text-center mt-4 max-w-2xl mx-auto">
          Every HR department faces these compliance nightmares. You're not
          alone.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {challenges.map((item, index) => (
            <FlipCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HrChallenges;
