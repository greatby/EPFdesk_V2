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
    title: "Registration & Setup",
    icon: ClipboardDocumentCheckIcon,
    items: [
      "Employer ESIC registration and code generation",
      "Employee ESIC registration and IP number allocation",
      "Coverage verification and benefit calculation",
      "Dependent registration and family coverage",
    ],
  },
  {
    title: "Monthly Compliance",
    icon: UsersIcon,
    items: [
      "ESIC contribution calculation (4.75% employer + 1.75% employee)",
      "Monthly challan generation and payment",
      "Return filing and reconciliation",
      "Wage ceiling compliance verification",
    ],
  },
  {
    title: "Claim Processing:",
    icon: CalendarDaysIcon,
    items: [
      "Medical reimbursement claim processing",
      "Sickness benefit claim assistance",
      "Maternity benefit processing",
      "Disability benefit claim support",
    ],
  },
  {
    title: "Employee Services",
    icon: UserCircleIcon,
    items: [
      "ESIC card generation and dispatch",
      "Medical coverage verification",
      "Hospital empanelment information",
      "Benefit eligibility checking",
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
      <h2 className="text-3xl font-bold text-center mb-10">Comprehensive ESIC Services</h2>
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
    title: "Manufacturing Companies",
    features: [
      "High-risk industry compliance",
      "Accident claim processing",
      "Disability benefit management",
      "Safety protocol integration"
    ],
  },
  {
    title: "IT & Service Companies",
    features: [
      "Employee wellness programs",
      "Maternity benefit optimization",
      "Dependent coverage management",
      "Health checkup coordination"
    ],
 
  },
  {
    title: "Retail & Hospitality",
    features: [
      "Multi-location compliance",
      "Seasonal worker management",
      "Medical emergency support",
      "Coverage optimization"
    ],
  
  },
    {
    title: "Legal Benefits",
    features: [
      "Avoid penalties up to ₹25,000 per violation",
      "Prevent prosecution under ESIC Act",
      "Maintain good standing with authorities",
      "Ensure audit readiness"
    ],
  
  },
 
];

export default function ESCIServicesSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-[#f8f7ff]">
      <div className="space-y-4 max-w-3xl mx-auto">
        <EPFAccordion />
      </div>

      <h2 className="text-3xl font-bold mt-20 mb-8 text-center">ESIC Solutions for Every Business</h2>

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
