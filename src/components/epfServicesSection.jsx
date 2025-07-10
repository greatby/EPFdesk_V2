import { useState } from "react";
import {
  ChevronDownIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
  CalendarDaysIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { epfServices,whyEpfDesk } from "../../utils/data";



function EPFAccordion({epfServices}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      
      <div className="space-y-4">
        {epfServices?.map((section, i) => {
          const Icon = section.icon;
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden transition"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-6 h-6 text-indigo-600" />
                  <span className="text-lg font-medium">{section.title}</span>
                </div>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[500px] p-5 pt-0" : "max-h-0"
                }`}
              >
                <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const plans = [
  {
    title: "Startups (1-50 employees)",
    features: [
      "Basic EPF setup and registration",
      "Simple monthly filing process",
      "Employee onboarding support",
      "Growth-ready compliance framework",
    ],
    price: "₹2,999/month",
  },
  {
    title: "SMEs (51-200 employees)",
    features: [
      "Advanced payroll integration",
      "Bulk employee processing",
      "Dedicated account manager",
      "Priority support channel",
    ],
    price: "₹9,999/month",
  },
  {
    title: "Mid-tier Companies (201-1000)",
    features: [
      "Multi-location compliance management",
      "Custom reporting and analytics",
      "API integration capabilities",
      "Real-time compliance dashboard",
    ],
    price: "₹24,999/month",
  },
  {
    title: "Enterprises (1000+ employees)",
    features: [
      "White-label employee portal",
      "Advanced automation workflows",
      "Dedicated compliance team",
      "SLA-backed service guarantees",
    ],
    price: "Custom pricing",
  },
];

export default function EPFServicesSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-[#f8f7ff]">
      <div className="space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
        Complete EPF Services We Provide
      </h2>
        <EPFAccordion epfServices={epfServices}/>
        <h2 className="text-3xl font-bold text-center mb-10">
        Why Companies Trust EPFDesk.com
      </h2>
      <EPFAccordion epfServices={whyEpfDesk}/>
      </div>

      <h2 className="text-3xl font-bold mt-20 mb-8 text-center">
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
      </div>
    </section>
  );
}
