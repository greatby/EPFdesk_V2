import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  DocumentTextIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

const services = [
  {
    title: "EPF",
    description:
      "Reclaim up to 90% of your HR's time spent on EPF administration. We meticulously handle monthly employee additions/deletions, precise challan creation, and all employer approvals, ensuring flawless compliance and freeing your teams for strategic growth.",
    icon: <BriefcaseIcon className="w-8 h-8 text-indigo-600" />,
    img: "/images/Horizontal.png",
    link: "/epf",
    bgColor: "#eafce9",
    textClr: "#0b5d32",
  },
  {
    title: "EPFdesk",
    description:
      "Say goodbye to endless employee EPF queries. Our unique EPF Desk platform offers a direct, transparent channel for your workforce to resolve all their EPF issues. Our on-ground experts handle everything from status updates to complex EPFO interactions, allowing your HR to focus on core employee engagement.",
    icon: <BriefcaseIcon className="w-8 h-8 text-indigo-600" />,
    img: "/images/Horizontal.png",
    link: "/epfDesk",
    bgColor: "#fffae6",
    textClr: "#fca326bd",
  },
  {
    title: "ESIC",
    description:
      "Navigate the complexities of Employee State Insurance with ease. We meticulously handle all monthly ESIC contributions, filings, and regulatory updates, ensuring your complete adherence and freeing your team from this critical statutory burden.",
    icon: <UserGroupIcon className="w-8 h-8 text-teal-600" />,
    img: "/images/Horizontal.png",
    link: "/esic",
    bgColor: "#f8f0ff",
    textClr: "#0b5cad",
  },
  {
    title: "PT",
    description:
      "Eliminate the headaches of varying state-specific Professional Tax laws. We provide accurate calculation, timely remittance, and meticulous filing for all applicable states, guaranteeing your PT compliance is always precise and penalty-free.",
    icon: <DocumentTextIcon className="w-8 h-8 text-rose-600" />,
    img: "/images/Horizontal.png",
    link: "/pt",
    bgColor: "#fff",
    textClr: "#000",
  },
  {
    title: "LWF",
    description:
      "Ensure flawless adherence to Labour Welfare Fund obligations across all your locations. We manage the diverse state-specific rates and periodic filings for LWF, simplifying this often-overlooked statutory requirement for your business.",
    icon: <BuildingOffice2Icon className="w-8 h-8 text-amber-600" />,
    img: "/images/Horizontal.png",
    link: "/lwf",
    bgColor: "#f8f0ff",
    textClr: "#5943b6",
  },
];

const ServiceCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const handleNavigation = (link) => {
    // Scroll to the top of the page before navigating
    window.scrollTo(0, 0);
    // Navigate to the target link
    navigate(link);
  };
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 w-full md:w-[75%] lg:w-[75%] mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">
            Transform Compliance Chaos Into Strategic Advantage
          </h2>
          <p className="text-gray-600 mt-3 text-xl">
            EPFDesk.com frees your HR and Finance teams to focus on what they do
            best: driving growth, developing talent, and building the future of
            your organization.
          </p>
        </div>

        {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                    onClick={() => handleNavigation(service.link)}
                    className="inline-block px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Learn more...
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col lg:flex-row items-center gap-8"
            >
              {/* Left Image / Illustration */}
              <div className="w-full lg:w-1/2 bg-white p-2 rounded-2xl flex justify-center">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full max-w-md rounded-2xl object-contain"
                />
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-lg font-semibold text-gray-500 mb-5">
                  {service.description}
                </p>
                <div className="w-full md:w-[60%] lg:w-[60%] mx-auto">
                  <button
                    onClick={() => handleNavigation(service.link)}
                    style={{
                      backgroundColor: "#ccffe4",
                      backgroundImage:
                        "linear-gradient(180deg, #e6f9ee, #c4f5db)",
                      color: "#007a7a",
                    }}
                    className="px-6 py-3 text-base font-medium rounded-xl transition w-fit"
                  >
                    Learn more about {service.title}
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
