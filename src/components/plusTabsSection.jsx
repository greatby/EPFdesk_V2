import { useState } from "react";
import {
  MdBarChart,
  MdLoop,
  MdFavorite,
  MdAttachMoney,
  MdNature,
} from "react-icons/md";



export default function ProductTabs({tabsData}) {
  const { title, tabs } = tabsData;
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const current = tabs.find((tab) => tab.id === activeTab);

  return (
    <>
      <div className="mb-8 pt-16">
        <h2 className="max-w-7xl mx-auto px-4 text-3xl font-bold">
          {title}
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
