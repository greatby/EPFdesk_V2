import { useState } from "react";
import {
  ChevronDownIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
  CalendarDaysIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  epfManagementPlans,
  epfoGridData,
  epfoMiddletabsData,
  epfoPlustabs,
  epfServices,
  horizontalCardsEpfo,
  largeCardsEpfo,
  pastelCardsEpfo,
  slidesEpfo,
  verticalCardsEpfo,
  whyEpfDesk,
} from "../../utils/data";
import LatticeSlider from "./latticeSlider";
import ResourcesGrid from "./resourceGrid";
import MiddlePanelTabs from "./middlePanelTabs";
import PlusTabsSection from "./plusTabsSection";
import FadeInWhenVisible from "./fadeInWhenVisible";
import VerticalAndHorizontalCards from "./verticalAndHorizontalCards";
import LargeCardSlider from "./largeCards";
import PastelCardSlider from "./pastelCardSlider";
import StickyScrollSections from "./scrollSyncComponent";

function EPFAccordion({ epfServices }) {
  // const [openIndex, setOpenIndex] = useState(null);

  // const toggle = (index) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  return (
    // <section className="max-w-4xl mx-auto px-4 py-12">

    //   <div className="space-y-4">
    //     {epfServices?.map((section, i) => {
    //       const Icon = section.icon;
    //       const isOpen = openIndex === i;
    //       return (
    //         <div
    //           key={i}
    //           className="border border-gray-200 rounded-xl overflow-hidden transition"
    //         >
    //           <button
    //             onClick={() => toggle(i)}
    //             className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
    //           >
    //             <div className="flex items-center space-x-3">
    //               <Icon className="w-6 h-6 text-indigo-600" />
    //               <span className="text-lg font-medium">{section.title}</span>
    //             </div>
    //             <ChevronDownIcon
    //               className={`w-5 h-5 text-gray-500 transform transition-transform ${
    //                 isOpen ? "rotate-180" : ""
    //               }`}
    //             />
    //           </button>

    //           <div
    //             className={`transition-all duration-500 ease-in-out overflow-hidden ${
    //               isOpen ? "max-h-[500px] p-5 pt-0" : "max-h-0"
    //             }`}
    //           >
    //             <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
    //               {section.items.map((item, idx) => (
    //                 <li key={idx}>{item}</li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </section>
    <section className=" mx-auto px-4 py-12">
      <div className="space-y-8">
        {epfServices?.map((section, i) => {
          const Icon = section.icon;

          return (
            <div key={i} className="space-y-6">
              {/* Title Section */}
              <div className="flex items-center space-x-3">
                <Icon className="w-6 h-6 text-indigo-600" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  {section.title}
                </h3>
              </div>

              {/* Cards for each item */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="border p-6 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition"
                  >
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function EPFServicesSection() {
  return (
    <section className="py-8 px-4 md:px-12">
      <div className="space-y-4 mx-auto">
        {/* <h2 className="text-3xl font-bold text-center mb-10">
        Complete EPF Services We Provide
      </h2>
        <EPFAccordion epfServices={epfServices}/> */}
        <FadeInWhenVisible>
          {/* <LatticeSlider slides={slidesEpfo} /> */}
          <VerticalAndHorizontalCards
            verticalCards={verticalCardsEpfo}
            horizontalCards={horizontalCardsEpfo}
          />
        </FadeInWhenVisible>
        {/* <FadeInWhenVisible>
          <ResourcesGrid data={epfoGridData} />
        </FadeInWhenVisible> */}
        <FadeInWhenVisible>
          {/* <MiddlePanelTabs tabsData={epfoMiddletabsData} /> */}
          <LargeCardSlider cardsData={largeCardsEpfo} />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          {/* <PlusTabsSection tabsData={epfoPlustabs} /> */}
          <PastelCardSlider cardsData={pastelCardsEpfo} />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <h2 className="text-3xl sm:text-5xl text-center font-bold text-gray-900">
            Comprehensive Employer EPF Compliance Services
          </h2>
          <StickyScrollSections items={epfManagementPlans} />
        </FadeInWhenVisible>
        {/* <EPFAccordion epfServices={whyEpfDesk}/> */}
      </div>

      {/* <h2 className="text-3xl font-bold mt-20 mb-8 text-center">
        Tailored for Your Industry
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, idx) => (
          <div key={idx} className="border p-6 rounded-xl shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
            <ul className="text-sm space-y-2 mb-4 list-disc list-inside">
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <p className="font-bold text-indigo-600">{plan.price}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
}
