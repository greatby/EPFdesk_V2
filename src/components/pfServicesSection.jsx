import { useState } from "react";
import {
  ChevronDownIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
  CalendarDaysIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import FadeInWhenVisible from "./fadeInWhenVisible";
import LatticeTabs from "./latticeTabs";
import { pfCards, ptGridData, ptMiddletabsData, ptPlustabs, slidesPt } from "../../utils/data";
import PlusTabsSection from "./plusTabsSection";
import LatticeSlider from "./latticeSlider";
import ResourcesGrid from "./resourceGrid";
import MiddlePanelTabs from "./middlePanelTabs";

const epfServices = [
  {
    title: "PT Applicability & Registration Across India",
    icon: ClipboardDocumentCheckIcon,
    items: [
      `Precise applicability assessment: We accurately determine "Is professional tax
mandatory in all states in India?" and identify "Which states have professional tax in India" relevant to your business operations. We assess applicability
based on employee count, income thresholds, and specific state laws (e.g., in
Maharashtra, Karnataka, West Bengal, Gujarat, Tamil Nadu, Telangana, Kerala).`,
      `State-specific registration management: We guide you through and handle all
steps for the "Professional tax registration online process," ensuring you
obtain the correct Professional Tax Registration Certificate (PTRC) for
employers or Professional Tax Enrollment Certificate (PTEC)for the
establishment, within statutory timelines.`,
      `Required documentation compilation: We assist in gathering and submitting
all necessary "documents required for professional tax registration,"
streamlining the initial setup for each applicable state.`,
      `Coverage analysis for evolving operations: We provide insights into
"Professional tax enrollment certificate (PTEC) vs registration certificate
(PTRC)" and manage compliance as your workforce or business locations
change.`,
    ],
  },
  {
    title: "Accurate PT Contribution Calculation & Payment",
    icon: UsersIcon,
    items: [
      `Precision Contribution Calculation: We accurately determine "how to calculate
professional tax on salary" for both employer and employee shares,
meticulously applying varying "Professional tax slab rates by state" (e.g.,
"Maharashtra professional tax slab," "Karnataka PT slab rates").`,
      `Correct Wage Component Inclusion: We precisely identify whether
"professional tax is deducted from gross salary or basic salary," aligning with
each state's specific PT Act and ensuring accurate calculation against the
"professional tax exemption limit" (minimum salary threshold).`,
      `Deduction Frequency Management: We track and ensure correct deduction
based on the state's mandate, whether monthly, half-yearly, or annually,
clarifying complex scenarios like higher February deductions in Maharashtra.`,
      `Timely Payment Facilitation: We generate accurate PT challans and support
"how to pay professional tax online," ensuring deposits are made well before the varied "Professional tax due dates by state" (e.g., 20th of succeeding
month in Karnataka, 15th in Gujarat).`,
    ],
  },
  {
    title: "Seamless PT Returns & Data Management",
    icon: CalendarDaysIcon,
    items: [
      `State-Specific Return Filing: We manage the entire "Professional tax return
filing online"process, using the correct "PT return forms by state" (e.g., Form III
for Maharashtra) with 100% accuracy and punctuality as per each state's varied
deadlines.`,
      `Employee Data Management: We ensure all employee data relevant for PT
contributions is accurately maintained and updated, handling nuances like
wage thresholds and employee categories for applicability in each state.`,
      `Digital Record Keeping: We maintain meticulous digital records of all PT
challans, payment receipts, and filed returns, creating a robust audit trail for
future reference and addressing queries about "Professional tax challan
download.`,
      `Online Portal Navigation: We expertly manage interactions with various State
Tax Department online portals (the "professional tax login portal state wise"),
ensuring accurate data reflection and complete submissions across diverse
systems.`,
    ],
  },
  {
    title: "Proactive PT Regulatory Advisory & Risk Mitigation",
    icon: UserCircleIcon,
    items: [
      `Continuous Regulatory Monitoring: Our dedicated experts continuously
monitor the highly fragmented Professional Tax Acts for any new
amendments, circulars, or rate changes from each respective state.`,
      `Impact Analysis & Strategic Advice: We translate complex, state-specific legal
updates into clear, actionable insights for your business operations, ensuring
you understand the implications and "consequences of not paying
professional tax.`,
      `Penalty Prevention Strategies: We implement proactive measures to
safeguard against "penalty for late professional tax payment" (which can be
daily fines or percentage of tax due) and other forms of "legal action for PT
non-compliance.`,
      `Audit Readiness Support: We provide complete assistance for any Professional
Tax inspections or audits, ensuring you are fully prepared with complete
documentation and expert guidance.`,
    ],
  },
];

function EPFAccordion() {
  // const [openIndex, setOpenIndex] = useState(null);

  // const toggle = (index) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  return (
    // <section className="max-w-4xl mx-auto px-4 py-12">
    //   <h2 className="text-3xl font-bold text-center mb-10">
    //     Comprehensive Professional Tax Compliance Services
    //   </h2>
    //   <div className="space-y-4">
    //     {epfServices.map((section, i) => {
    //       const Icon = section.icon;
    //       const isOpen = openIndex === i;
    //       return (
    //         <div
    //           key={i}
    //           className="border border-gray-200 rounded-xl overflow-hidden transition"
    //         >
    //           <button
    //             onClick={() => toggle(i)}
    //             className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
    //           >
    //             <div className="flex items-center space-x-3">
    //               <Icon className="w-6 h-6 text-indigo-600" />
    //               <span className="text-lg font-medium">{section.title}</span>
    //             </div>
    //             <ChevronDownIcon
    //               className={`w-5 h-5 text-gray-500 transform transition-transform ${
    //                 isOpen ? "rotate-180" : ""
    //               }`}
    //             />
    //           </button>

    //           <div
    //             className={`transition-all duration-500 ease-in-out overflow-hidden ${
    //               isOpen ? "max-h-[500px] p-5 pt-0" : "max-h-0"
    //             }`}
    //           >
    //             <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm">
    //               {section.items.map((item, idx) => (
    //                 <li key={idx}>{item}</li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </section>
    <section className=" mx-auto px-4 py-12">
      <div className="space-y-8">
        {epfServices?.map((section, i) => {
          const Icon = section.icon;

          return (
            <div key={i} className="space-y-6">
              {/* Title Section */}
              <div className="flex items-center space-x-3">
                <Icon className="w-6 h-6 text-indigo-600" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  {section.title}
                </h3>
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

const plans = [
  {
    title: "Unmatched PT Expertise & Zero-Risk Compliance Across States",
    features: [
      `Consistent 99.9% accuracy rate in all Professional Tax calculations and filings
across diverse state requirements, rigorously minimizing financial
discrepancies and audit risks.`,
      `Zero audit failures across our client portfolio for PT compliance over 5+ years,
demonstrating our robust control environment and deep understanding of
state-specific acts.`,
      `Rapid average response times (e.g., 2-4 hours) for all client queries and urgent
matters, ensuring prompt resolution by dedicated specialists.`,
      `100% deadline adherence for all Professional Tax submissions, completely
eliminating interest and penalties.`,
    ],
  },
  {
    title: "Complete HR & Finance Team Liberation",
    features: [
      `Significant reduction (e.g., 85%) in administrative time typically spent on
understanding, calculating, and filing Professional Tax returns for each
applicable state.`,
      `Complete elimination of penalty and interest risks across all operating states,
leading to direct financial savings and complete peace of mind.`,
      `Protection from legal consequences and reputational damage related to PT
non-compliance, ensuring business integrity.`,
      `Strategic resource redirection: Your HR and Finance teams are empowered to
focus on talent development, financial planning, and driving organizational
growth, rather than navigating disparate state tax portals and forms.`,
    ],
  },
  {
    title: "Go Live with PT Compliance in 24-48 Hours (Multi-State Ready)",
    features: [
      `Initial Consultation: A quick session to assess your current Professional Tax
setup, employee count, and multi-state operational specifics.`,
      `Secure Data Integration: Our team securely accesses necessary payroll and
employee information via compliant channels for PT processing.`,
      `State Tax Portal Setup & Linkage: We manage the efficient setup and linkage
with various State Tax Department online portals.`,
      `Brief Team Orientation: A concise, practical orientation for your relevant HR/
Finance staff to ensure smooth operational handover.`,
      `Full Service Activation: Your Professional Tax compliance is fully operational
and seamlessly managed by EPFDesk.com experts within 24-48 hours of
successful onboarding.`,
    ],
  },
  {
    title: "Dedicated Ongoing Support for Continuous Multi-State Adherence",
    features: [
      `Dedicated Client Manager: Your single point of contact who understands your
specific account and multi-state compliance needs.`,
      `Monthly/Periodic Compliance Reports: Receive regular, clear updates on your
Professional Tax status, contributions, and key metrics for each applicable
state.`,
      `Immediate Query Resolution: Our team is committed to prompt responses,
ensuring any questions or issues related to your Professional Tax compliance
are addressed swiftly.`,
      `Proactive Regulatory Updates: You'll receive timely notifications and expert
advice on new PT rules, rate changes, or specific directives from each state,
ensuring you are always informed and compliant nationwide.`,
    ],
  },
  {
    title: "Key Employer PT Concerns We Resolve:",
    features: [
      `Applicability & Registration: Determining "Professional tax applicability rules India"
for your establishment, "PT registration process" with each State Tax Department,
and distinguishing between "PTEC vs PTRC."`,
      `Contribution Management: Accurate "Professional tax slab rates by state" (e.g.,
Maharashtra, Karnataka, West Bengal), correct wage component inclusion, and
handling "monthly/quarterly/annual deductions."`,
      `Filing & Remittance: Managing "Professional tax forms and deadlines India" (e.g.,
Form III), ensuring "online PT payments," and maintaining "digital record keeping."`,
      `Risk & Audit: Addressing "Professional Tax penalties for non-compliance India"
(fines, interest, legal action) and providing "audit readiness support."`,
      `Multi-State Coordination: Seamlessly managing Professional Tax compliance
across multiple states, understanding the nuances of "Professional Tax Act states
India."`,
    ],
  },
  {
    title: "Employee PT Concerns We Support (via employer compliance):",
    features: [
      `Ensuring correct "Professional tax deduction from salary" based on state laws.`,
      `Clarifying "Professional tax exemption limit" for employees.`,
      `Ensuring transparent reporting of PT deductions on payslips.`,
    ],
  },
];

export default function PFServicesSection() {
  return (
    <section className="py-8 px-4 md:px-12">
      <div className="space-y-4 mx-auto">
        <h2 className="text-3xl font-bold my-8 text-center">
          Why Companies Trust Professional Tax Compliance with EPFDesk.com
        </h2>
        <FadeInWhenVisible>
          <LatticeTabs cards={pfCards} />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <LatticeSlider slides={slidesPt} />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <PlusTabsSection tabsData={ptPlustabs} />
        </FadeInWhenVisible>
         <FadeInWhenVisible>
          <ResourcesGrid data={ptGridData}/>
        </FadeInWhenVisible>
         <FadeInWhenVisible>
          <MiddlePanelTabs tabsData={ptMiddletabsData}/>
        </FadeInWhenVisible>
        {/* <EPFAccordion /> */}
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 w-full mx-auto gap-6">
        {plans.map((plan, idx) => (
          <div key={idx} className="border p-6 rounded-xl shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
            <ul className="text-sm space-y-2 mb-4 list-disc list-inside">
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          
          </div>
        ))}
      </div> */}
    </section>
  );
}
