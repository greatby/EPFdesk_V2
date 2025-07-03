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
    title: "Andhra Pradesh LWF",
    icon: ClipboardDocumentCheckIcon,
    items: [
      "Applicability: All establishments",
      "Employee contribution: ₹10-20/month",
      "Employer contribution: ₹20-40/month",
      "Based on salary slabs",
    ],
  },
  {
    title: "Karnataka LWF",
    icon: UsersIcon,
    items: [
      "Applicability: Establishments with 5+ employees",
      "Employee contribution: ₹6-10/month",
      "Employer contribution: ₹12-20/month",
      "Industry-specific variations",
    ],
  },
  {
    title: "Punjab LWF",
    icon: CalendarDaysIcon,
    items: [
      "Applicability: All establishments",
      "Flat contribution rates",
      "Quarterly payment system",
      "Specific compliance requirements",
    ],
  },
  {
    title: "Haryana LWF",
    icon: UserCircleIcon,
    items: [
      "Applicability: Manufacturing and commercial establishments",
      "Salary-based contribution slabs",
      "Monthly payment requirements",
      "Annual return filing",
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
      <h2 className="text-3xl font-bold text-center mb-10">LWF Management Across States</h2>
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
    title: "Registration & Setup",
    features: [
      "State-wise LWF registration",
      "Establishment code generation",
      "Employee category verification",
      "Contribution calculation setup"
    ],
 
  },
  {
    title: "Monthly Processing",
    features: [
      "Accurate contribution calculation",
      "Employee and employer deductions",
      "Payment processing and reconciliation",
      "Compliance status tracking"
    ],
 
  },
  {
    title: "Annual Compliance",
    features: [
      "Annual return preparation",
      "State-wise filing requirements",
      "Penalty mitigation",
      "Compliance certificate generation"
    ],

  },
  {
    title: "Advisory Services",
    features: [
      "State-specific updates",
      "Applicability assessment",
      "Optimization strategies",
      "Multi-state coordination"
    ],

  }
];

export default function LWFServicesSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-[#f8f7ff]">
      <div className="space-y-4 max-w-3xl mx-auto">
        <EPFAccordion />
      </div>

      <h2 className="text-3xl font-bold mt-20 mb-8 text-center">Complete LWF Management Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
