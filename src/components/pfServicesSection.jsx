import { useState } from "react";
import {
  ChevronDownIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
  CalendarDaysIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";


const epfServices = [
  {
    title: "Registration Services",
    icon: ClipboardDocumentCheckIcon,
    items: [
      "New establishment PT registration",
      "Multi-location registration management",
      "Certificate renewal and amendments",
      "Compliance verification",
    ],
  },
  {
    title: "Monthly Processing",
    icon: UsersIcon,
    items: [
      "State-wise PT calculation",
      "Salary slab verification",
      "Monthly deduction processing",
      "Payment and reconciliation",
    ],
  },
  {
    title: "Annual Compliance",
    icon: CalendarDaysIcon,
    items: [
      "Annual return preparation",
      "State-wise filing and submission",
      "Penalty mitigation",
      "Compliance certificate generation",
    ],
  },
  {
    title: "Advisory Services",
    icon: UserCircleIcon,
    items: [
      "State-specific rate updates",
      "Regulatory change notifications",
      "Optimization strategies",
      "Multi-state coordination",
    ],
  },
];

function EPFAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">End-to-End PT Management</h2>
      <div className="space-y-4">
        {epfServices.map((section, i) => {
          const Icon = section.icon;
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden transition">
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
    title: "Compliance Benefits",
    features: [
      "Avoid state-specific penalties",
      "Maintain multi-location compliance",
      "Prevent audit issues",
      "Ensure accurate deductions"
    ],
  },
  {
    title: "Operational Benefits",
    features: [
      "Simplified payroll processing",
      "Automated state-wise calculations",
      "Centralized compliance management",
      "Real-time status tracking"
    ],
  },
  
];

export default function PFServicesSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-[#f8f7ff]">
      <div className="space-y-4 max-w-3xl mx-auto">
        <EPFAccordion />
      </div>

      <h2 className="text-3xl font-bold mt-20 mb-8 text-center">Why Professional Tax Management Matters</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full md:w-[70%] lg:w-[70%] mx-auto gap-6">
        {plans.map((plan, idx) => (
          <div key={idx} className="border p-6 rounded-xl shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
            <ul className="text-sm space-y-2 mb-4 list-disc list-inside">
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            {/* <p className="font-bold text-indigo-600">{plan.price}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
