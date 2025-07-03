import { useState } from "react";
import {
  ShieldCheckIcon,
  PhoneArrowUpRightIcon,
  Cog6ToothIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  {
    title: "100% COMPLIANCE GUARANTEE:",
    subtitle: "Never miss another deadline.",
    description:
      "We ensure all your EPF, ESIC, PT & LWF filings are accurate and on time.",
    icon: <ShieldCheckIcon className="w-5 h-5 text-white" />,
    color: "bg-blue-700",
    image: "/images/solution-1.png",
  },
  {
    title: "DEDICATED EMPLOYEE HELPDESK:",
    subtitle: "Let employees call us directly.",
    description:
      "We resolve EPF queries so your day isn’t interrupted.",
    icon: <PhoneArrowUpRightIcon className="w-5 h-5 text-white" />,
    color: "bg-teal-600",
    image: "/images/solution-2.png",
  },
  {
    title: "AUTOMATED PROCESSING:",
    subtitle: "Integrated with your payroll.",
    description:
      "Automatic salary updates, joiner/exits, and filings.",
    icon: <Cog6ToothIcon className="w-5 h-5 text-white" />,
    color: "bg-purple-600",
    image: "/images/solution-3.png",
  },
  {
    title: "REAL-TIME DASHBOARD:",
    subtitle: "Track compliance in real time.",
    description:
      "Get full visibility into your employee filings, data, and reports.",
    icon: <ChartBarSquareIcon className="w-5 h-5 text-white" />,
    color: "bg-rose-600",
    image: "/images/solution-4.png",
  },
];

const ComplianceStackTabs = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Your Complete Compliance Solution
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          We handle everything so you can focus on strategic HR initiatives.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Tabs - Left */}
          <div className="space-y-4">
            {solutions.map((item, index) => {
              const isActive = index === active;
              return (
                <div
                  key={index}
                  onClick={() => setActive(index)}
                  className={`group relative border rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-white border-blue-600 shadow-md"
                      : "bg-gray-100 border-transparent"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h6 className="text-sm font-semibold text-gray-800 uppercase">
                        {item.title}
                      </h6>
                      <p className="text-sm text-gray-600 font-medium mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className={`rounded-full p-2 shrink-0 ${item.color}`}>
                      {item.icon}
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-600 mt-4">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Custom border lines like line-top-2 / line-bottom-2 */}
                  {/* <div className="absolute top-0 left-4 right-4 h-[1px] bg-gray-300 group-hover:bg-blue-600" /> */}
                  {/* <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gray-300 group-hover:bg-blue-600" /> */}
                </div>
              );
            })}
          </div>

          {/* Right Panel */}
          <div className="rounded-xl bg-white shadow-md p-6 border min-h-[300px] flex items-center justify-center">
            <img
              src={solutions[active].image}
              alt={solutions[active].title}
              className="w-full h-auto object-contain rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceStackTabs;
