import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  DocumentTextIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Elevating Employer EPF Management",
    description:
      "Reclaim up to 90% of your HR's time spent on EPF administration. We meticulously handle monthly employee additions/deletions, precise challan creation, and all employer approvals, ensuring flawless compliance and freeing your teams for strategic growth.",
    icon: <BriefcaseIcon className="w-8 h-8 text-indigo-600" />,
    link: "/epf",
  },
  {
    title: "Effortless ESIC Management",
    description:
      "Navigate the complexities of Employee State Insurance with ease. We meticulously handle all monthly ESIC contributions, filings, and regulatory updates, ensuring your complete adherence and freeing your team from this critical statutory burden.",
    icon: <UserGroupIcon className="w-8 h-8 text-teal-600" />,
    link: "/esic",
  },
  {
    title: "Precision Professional Tax (PT) Compliance",
    description:
      "Eliminate the headaches of varying state-specific Professional Tax laws. We provide accurate calculation, timely remittance, and meticulous filing for all applicable states, guaranteeing your PT compliance is always precise and penalty-free.",
    icon: <DocumentTextIcon className="w-8 h-8 text-rose-600" />,
    link: "/pt",
  },
  {
    title: "Seamless Labour Welfare Fund (LWF) Adherence",
    description:
      "Ensure flawless adherence to Labour Welfare Fund obligations across all your locations. We manage the diverse state-specific rates and periodic filings for LWF, simplifying this often-overlooked statutory requirement for your business.",
    icon: <BuildingOffice2Icon className="w-8 h-8 text-amber-600" />,
    link: "/lwf",
  },
];

const ServiceCards = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 w-full md:w-[60%] lg:w-[60%] mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">
            Transform Compliance Chaos Into Strategic Advantage
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            EPFDesk.com frees your HR and Finance teams to focus on what they do
            best: driving growth, developing talent, and building the future of
            your organization.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group border rounded-2xl p-6 bg-gray-50 hover:bg-white hover:shadow-md transition h-full"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto pt-4">
                  <button
                    onClick={() => navigate(service.link)}
                    className="inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Learn more...
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
