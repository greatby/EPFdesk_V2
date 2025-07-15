import React from "react";
import { HiArrowRight } from "react-icons/hi";

const TestimonialAndCards = () => {
  return (
    <>
    <h2 className="max-w-7xl text-center mx-auto px-4 text-3xl font-bold">
     Proactive Regulatory Updates & Risk Management
        </h2>
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
      {/* Testimonial Card */}
      <div className="bg-yellow-50 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
        <div className="relative min-w-[240px] max-w-sm overflow-hidden rounded-lg">
          <img
            src="https://cdn.prod.website-files.com/64d227d0bd6695f39ef77395/64d22f612fd3bb4d67a6688f_633b594a3e70d05d3efda6ac_million-dollar-baby-cover-image.webp"
            alt="Testimonial"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-semibold mb-4 text-gray-900">Continuous regulatory monitoring</h3>
          <p className="text-[1.2rem] font-medium text-gray-600">
            Our dedicated experts meticulously monitor the latest "ESIC Act
            amendments," "ESIC circulars," and "ESIC contribution rate changes."
          </p>
        </div>
      </div>

      {/* Lower Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Impact analysis & strategic advice",
            desc: `We translate complex legal updates into clear, actionable business insights tailored to your operations, ensuring you understand the "consequences of ESIC non-compliance.`,
            img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/66d0b1fbb68c8fed4cce3126_portal-integrations.webp",
            link: "/integrations",
          },
          {
            title: "Penalty prevention strategies",
            desc: `We implement proactive measures to safeguard against "what happens if employer does not pay ESIC contribution?" and other common non-compliance scenarios.`,
            img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/66fbf44fb4b4a4f7e91a3093_portal-g2.webp",
            link: "/customer-experience",
          },
          {
            title: "Audit readiness support",
            desc: `We provide complete assistance for any ESIC inspections or audits, ensuring you are fully prepared with complete documentation and expert representation`,
            img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/66d0b1fb9486dc31b3c8c09f_portal-customers.webp",
            link: "/customers",
          },
        ].map((card, i) => (
          <a
            href={card.link}
            key={i}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
          >
            <div className="mb-4">
              <img
                src={card.img}
                alt={card.title}
                className="rounded-lg w-full object-cover"
              />
            </div>
            <h3 className="text-[1.4rem] font-semibold text-gray-800 mb-1">
              {card.title}
            </h3>
            <p className="text-[1rem] font-normal text-gray-600">{card.desc}</p>
          </a>
        ))}
      </div>
    </div>
    </>
  );
};

export default TestimonialAndCards;
