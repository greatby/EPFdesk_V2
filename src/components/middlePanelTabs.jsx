import React, { useState } from "react";
import {
  FaBook,
  FaGraduationCap,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";



const MiddlePanelTabs = ({tabsData}) => {
  const { title, tabs } = tabsData;
  const [activeTab, setActiveTab] = useState("library");
  const activeData = tabs.find((tab) => tab.id === activeTab);

  return (
    <>
      <div className="mb-6 pt-16">
        <h2 className="max-w-7xl mx-auto px-4 text-3xl font-bold">
        {title}
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">
          {/* Left Tabs */}
          <div className="space-y-4 md:col-span-1 flex flex-col">
            {tabs.slice(0, 2).map((tab) => (
              <div
                key={tab.id}
                className={`rounded-xl p-4 cursor-pointer border transition shadow-md hover:shadow-lg group
            ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 text-white shadow-lg"
                : "bg-white border border-gray-200 text-gray-800"
            }
          `}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`text-xl ${
                      activeTab === tab.id ? "text-white" : "text-primary"
                    }`}
                  >
                    {tab.icon}
                  </div>
                  <div
                    className={`font-semibold transition ${
                      activeTab === tab.id
                        ? "text-white"
                        : "group-hover:text-primary"
                    }`}
                  >
                    {tab.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Content */}
          <div className="md:col-span-3 w-full flex items-center justify-center order-first md:order-none">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#A7F0BA] via-[#72E3D6] to-[#84D1F1] flex items-center justify-center p-6 min-h-[200px]">
              {/* Optional blurred glow effect */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl z-0" />

              {/* Main content */}
              <div className="relative z-10 text-center text-white px-6">
                <p className="text-lg md:text-xl font-semibold leading-relaxed drop-shadow-md">
                  {activeData.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Tabs */}
          <div className="space-y-4 md:col-span-1 flex flex-col">
            {tabs.slice(2).map((tab) => (
              <div
                key={tab.id}
                className={`rounded-xl p-4 cursor-pointer border transition shadow-md hover:shadow-lg group
            ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400 text-white shadow-lg"
                : "bg-white border border-gray-200 text-gray-800"
            }
          `}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`text-xl ${
                      activeTab === tab.id ? "text-white" : "text-primary"
                    }`}
                  >
                    {tab.icon}
                  </div>
                  <div
                    className={`font-semibold transition ${
                      activeTab === tab.id
                        ? "text-white"
                        : "group-hover:text-primary"
                    }`}
                  >
                    {tab.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddlePanelTabs;
