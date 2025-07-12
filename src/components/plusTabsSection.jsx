import { useState } from "react";
import {
  MdBarChart,
  MdLoop,
  MdFavorite,
  MdAttachMoney,
  MdNature,
} from "react-icons/md";

const tabs = [
  {
    id: "analytics",
    label: "Dedicated EPF Specialists",
    icon: <MdBarChart size={20} />,
    description:
      "See how Analytics connects with the rest of the Lattice platform.",
    content: (
      <>
        <img
          src="/images/64c26163c9caf11765b87eb4_plus-image-grow-analytics.webp"
          alt="Analytics"
          className="w-full rounded-xl mb-4"
        />
        <p>
          Our team comprises seasoned professionals who take full ownership of
          each employee query, specializing in accurate resolutions for issues
          like "Why is my EPF passbook not updated?" or "What to do if employer
          is not depositing PF?
        </p>
      </>
    ),
    link: "/analytics",
  },
  {
    id: "performance",
    label: "Direct EPFO Communication Channels",
    icon: <MdLoop size={20} />,
    content: (
      <>
        <img
          src="/images/64c26162737387d05fad07da_plus-image-analytics-performance-p-800.webp"
          alt="Performance"
          className="w-full rounded-xl mb-4"
        />
        <p>
          We utilize established channels for faster resolution and
          documentation exchange with the Employees' Provident Fund Organisation
          (EPFO), eliminating the need for your HR to act as a middleman.
        </p>
      </>
    ),
    link: "/performance",
  },
  {
    id: "engagement",
    label: "Complex Case Management",
    icon: <MdFavorite size={20} />,
    content: (
      <>
        <img
          src="/images/64c26162748ef5824d744011_plus-image-engagement-analytics.webp"
          alt="Engagement"
          className="w-full rounded-xl mb-4"
        />
        <p>
          {" "}
          Our expertise extends to intricate cases such as inter-company EPF
          transfers, legacy account merging, pension payment processing, and
          resolving discrepancies in contribution claims.
        </p>
      </>
    ),
    link: "/engagement",
  },
  {
    id: "compensation",
    label: "Complete Resolution Lifecycle",
    icon: <MdAttachMoney size={20} />,
    content: (
      <>
        <img
          src="/images/64c26162ef42896c99021d82_plus-image-compensation-analytics.webp"
          alt="Compensation"
          className="w-full rounded-xl mb-4"
        />
        <p>
          We manage the entire resolution journey, from the initial query
          submission to final settlement or problem closure, including necessary
          employer attestation for EPF transfer claims and approval of online
          EPF claims from an employer's perspective.
        </p>
      </>
    ),
    link: "/compensation",
  },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const current = tabs.find((tab) => tab.id === activeTab);

  return (
    <>
      <div class="mb-8 pt-16">
        <h2 class="max-w-7xl mx-auto px-4 text-3xl font-bold">
          Expert-Led Resolution & Direct EPFO Liaison
        </h2>
      </div>
      <section className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Vertical Tabs */}
        <div className="flex flex-col gap-4 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left shadow transition-all border ${
                activeTab === tab.id
                  ? "bg-gradient-to-br from-teal-50 to-cyan-100 border-teal-400"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              <div className="text-teal-600">{tab.icon}</div>
              <span className="font-medium text-sm">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Right: Content Area */}
        <div className="rounded-xl bg-gradient-to-br from-white to-cyan-50 p-6 shadow border border-teal-100">
          <div className="mb-4">{current.content}</div>
          {/* <p className="mt-4 text-gray-800 font-medium">
            {current.description}
          </p> */}
        </div>
      </section>
    </>
  );
}
