import { useState } from "react";
import {
  ChevronDownIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
  CalendarDaysIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { epfServices,whyEpfDesk } from "../../utils/data";
import { epfDeskServices,epfDeskStatergy } from "../../utils/data";



function EPFAccordion({epfServices}) {


  return (
   
    <section className=" mx-auto px-4 py-12">
      <div className="space-y-8">
        {epfServices?.map((section, i) => {
          const Icon = section.icon;

          return (
            <div key={i} className="space-y-6">
              {/* Title Section */}
              <div className="flex items-center space-x-3">
                <Icon className="w-6 h-6 text-indigo-600" />
                <h3 className="text-2xl font-semibold text-gray-900">{section.title}</h3>
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



export default function EPFdeskServices() {
  return (
    <section className="py-16 px-4 md:px-12 bg-[#f8f7ff]">
      <div className="space-y-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
       Complete Employee EPF Support Platform
      </h2>
        <EPFAccordion epfServices={epfDeskServices}/>
        <h2 className="text-3xl font-bold text-center mb-10">
        Strategic Benefits for Your Organization
      </h2>
      <EPFAccordion epfServices={epfDeskStatergy}/>
      </div>
    </section>
  );
}
