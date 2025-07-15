import React from "react";
import { HiArrowRight } from "react-icons/hi";

const locations = [
  {
    title: "Precision contribution calculation",
    desc: `We perform accurate "ESIC calculation on salary" using the "current
            ESIC contribution rate employer and employee" (e.g., Employer:
            3.25%, Employee: 0.75%) and the "ESIC wage ceiling current" (₹21,000
            for general employees, ₹25,000 for persons with disabilities).`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/652d6e1c2b288c9515de3aef_icon-office-san-francisco.svg",
    cta: "See positions in SF",
  },
  {
    title: "Correct wage component inclusion",
    desc: `  We meticulously identify and include all applicable "salary
            components for ESIC wages" (Basic, DA, HRA, CCA, production
            incentive, night shift, meal/food allowance), ensuring "ESIC is
            deducted on gross salary, not just basic."`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67220e50b9bb6d5997a563ed_icon-office-new-york.svg",
    cta: "See positions in NYC",
  },
  {
    title: "Exemption management",
    desc: ` We accurately identify and manage "exemptions from ESIC
            contributions for low-wage employees" (e.g., daily wage up to ₹176),
            optimizing your deductions while remaining compliant.`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/652d6de40811d0c298c64838_icon-office-london.svg",
    cta: "See positions in London",
  },
  {
    title: "Timely payment facilitation",
    desc: `  We generate accurate "ESIC challan online" and support "how to pay
            ESIC contribution online," guaranteeing deposits are made well
            before the "Monthly ESIC return filing deadline"`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67220e2d744395702261be57_icon-office-remote.svg",
    cta: "See remote positions",
  },
];

const LocationCards = () => {
  return (
    <>
    <div className="mb-8 pt-16 text-center">
        <h2 className="max-w-7xl mx-auto px-4 text-3xl font-bold">
        Accurate ESIC Contribution Calculation & Payment
        </h2>
      </div>
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {locations.map((loc, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition"
        >
          <div>
            <img
              src={loc.img}
              alt={`Illustration of ${loc.title}`}
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-[1.3rem] font-semibold text-gray-900">{loc.title}</h3>
            <p className="text-[1rem] font-medium text-gray-600 mt-2">{loc.desc}</p>
          </div>
          {/* <button className="mt-6 inline-flex items-center gap-1 px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full hover:bg-green-200 transition">
            {loc.cta}
            <HiArrowRight className="w-4 h-4" />
          </button> */}
        </div>
      ))}
    </div>
    </>
  );
};

export default LocationCards;
