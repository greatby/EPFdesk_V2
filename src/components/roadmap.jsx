import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";

const roadmapData = [
  {
    title: "February → April 2025",
    items: [
      {
        name: "Goals UI/UX Updates",
        desc: "Improved functionality and ease-of-use for OKRs and Goals.",
        tags: ["OKRs & Goals"],
      },
      {
        name: "New Engagement Questions",
        desc: "Unlock deeper insights with powerful new features, including multi-select and skip logic questions.",
        tags: ["Engagement"],
      },
      {
        name: "HR Help Desk",
        desc: "Streamline answers and route HR inquiries like company policy and benefit questions.",
        tags: ["Lattice AI", "AI Agent"],
      },
      {
        name: "New Languages",
        desc: "Expand your global reach with new platform languages, including Portuguese, Swedish, Italian, Dutch, Danish, and Polish.",
        tags: ["Platform"],
      },
      {
        name: "IDPs & Career Growth Plans",
        desc: "Receive AI-powered recommendations for growth areas and action steps to support your team’s professional development.",
        tags: ["Lattice AI", "Grow"],
      },
      {
        name: "Review Packet Summaries",
        desc: "Quickly summarize performance reviews for unbiased calibration sessions.",
        tags: ["Lattice AI", "Performance"],
      },
      {
        name: "Payroll & Time Tracking",
        desc: "Manage people, pay, and performance in one place.",
        tags: ["Payroll"],
      },
    ],
  },
  {
    title: "Coming this summer",
    items: [
      {
        name: "Export to PPT",
        desc: "Export engagement survey results as presentation slides for easy and efficient sharing.",
        tags: ["Engagement"],
      },
      {
        name: "Writing Assistant 2.0",
        desc: "More visible, more concise, and more useful suggestions.",
        tags: ["Lattice AI", "Performance"],
      },
      {
        name: "Global PTO Calendar",
        desc: "Give HR leaders, managers, and employees shared visibility into time off for faster, frustration-free time management.",
        tags: ["HRIS"],
      },
      {
        name: "Performance Improvement Plans (PIPs)",
        desc: "Foster employee development and optimize potential to drive performance.",
        tags: ["Performance"],
      },
      {
        name: "More Goals UI/UX Updates",
        desc: "Continued improvements to functionality for OKRs and Goals.",
        tags: ["OKRs & Goals"],
      },
      {
        name: "Customer API & Integrations",
        desc: "Build the HR tech stack that’s right for your business.",
        tags: ["HRIS"],
      },
      {
        name: "Promotions in Calibrations",
        desc: "Access promotion information during calibration sessions for more informed decisions.",
        tags: ["Performance"],
      },
      {
        name: "Employee Health",
        desc: "Anticipate turnover risks and retain top talent before it’s too late.",
        tags: ["Platform"],
      },
      {
        name: "Proactive Insights",
        desc: "Surface performance risks and growth opportunities.",
        tags: ["Lattice AI", "AI Agent"],
      },
      {
        name: "Agent Integrations",
        desc: "Use the Lattice AI Agent right where you work — in Slack, Microsoft Teams, and more.",
        tags: ["Lattice AI", "AI Agent"],
      },
    ],
  },
  {
    title: "Coming later this year",
    items: [
      {
        name: "Succession Planning",
        desc: "Identify and nurture potential future leaders to fill critical roles.",
        tags: ["Performance"],
      },
      {
        name: "Coach",
        desc: "Deliver on-demand coaching and guidance.",
        tags: ["Lattice AI", "AI Agent"],
      },
      {
        name: "Meeting Assist",
        desc: "Capture meeting summaries, next steps, and action items.",
        tags: ["Lattice AI", "AI Agent"],
      },
      {
        name: "Lattice AI Agent Platform",
        desc: "Customize and deploy AI agents across the business.",
        tags: ["Lattice AI", "AI Agent"],
      },
    ],
  },
];

export default function Roadmap() {
  const [expanded, setExpanded] = useState(null);
  const [checked, setChecked] = useState({});

  const toggleExpand = (id) => setExpanded(expanded === id ? null : id);
  const toggleCheck = (id) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white">
      {roadmapData.map((sec, i) => (
        <div key={i} className="bg-white rounded-xl shadow-sm p-4 border">
          <h2 className="text-[1.5rem] font-bold mb-4">{sec.title}</h2>
          <div className="space-y-4">
            {sec.items.map((item, j) => {
              const id = `${i}-${j}`;
              const isOpen = expanded === id;
              const isChecked = checked[id];

              return (
                <div
                  key={id}
                  className={`border rounded-xl p-3 transition ${
                    isChecked
                      ? "bg-teal-50 border-teal-200"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  {/* Title Row */}
                  <div
                    className="flex justify-between items-start cursor-pointer"
                    onClick={() => toggleExpand(id)}
                  >
                    <div className="flex items-center gap-2">
                      {/* Checkbox */}
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCheck(id);
                        }}
                        className={`w-5 h-5 flex items-center justify-center rounded-md transition-all outline outline-1 text-white text-[10px] font-bold ${
                          isChecked
                            ? "bg-gradient-to-br from-[#1ab582] to-[#9dfc9d] outline-gray-200 cursor-default"
                            : "bg-white outline-sand-200 cursor-pointer"
                        }`}
                      >
                        {isChecked ? "✓" : ""}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                    </div>

                    {/* Chevron Icon */}
                    <span className="text-gray-400 text-lg">
                      {isOpen ? <HiChevronUp /> : <HiChevronDown />}
                    </span>
                  </div>

                  {/* Tags - Always visible under title */}
                  <div className="flex flex-wrap ml-6 mt-2 gap-2">
                    {item.tags.map((tag, k) => (
                      <span
                        key={k}
                        className="text-[10px] uppercase font-semibold px-2 py-1 rounded-full bg-green-100 text-green-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Accordion Content - Description */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[1rem] ml-6 font-semibold  text-gray-500 mt-2">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
