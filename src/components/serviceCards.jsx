import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  DocumentTextIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "EPF Management",
    description:
      "Complete EPFO compliance including monthly returns, annual filings, employee registrations, transfers, and withdrawals.",
    icon: <BriefcaseIcon className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "ESIC Management",
    description:
      "Full ESIC compliance including registrations, monthly contributions, medical benefits, and claim processing.",
    icon: <UserGroupIcon className="w-8 h-8 text-teal-600" />,
  },
  {
    title: "Professional Tax",
    description:
      "State-wise PT registrations, monthly deductions, annual returns, and compliance across all Indian states.",
    icon: <DocumentTextIcon className="w-8 h-8 text-rose-600" />,
  },
  {
    title: "Labour Welfare Fund",
    description:
      "LWF registrations, contributions, and compliance management for applicable states and employee categories.",
    icon: <BuildingOffice2Icon className="w-8 h-8 text-amber-600" />,
  },
];

const ServiceCards = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Compliance Services</h2>
          <p className="text-gray-600 mt-3 text-lg">
            End-to-end statutory compliance handled by experts
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group border rounded-2xl p-6 bg-gray-50 hover:bg-white hover:shadow-md transition"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-4">
                {service.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
