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
import { lwfCards, lwfGridData, lwfMiddletabsData, lwfPlustabs, slideLWF } from "../../utils/data";
import LatticeSlider from "./latticeSlider";
import ResourcesGrid from "./resourceGrid";
import PlusTabsSection from './plusTabsSection'
import MiddlePanelTabs from "./middlePanelTabs";

const epfServices = [
  {
    title: "LWF Applicability & Registration Across India",
    icon: ClipboardDocumentCheckIcon,
    items: [
      `Precise applicability assessment: We accurately determine "LWF
applicability rules India" for your establishment in each state, considering
factors like employee thresholds (which vary significantly by state) and
industry type.`,
      `State-specific registration management: We guide you through and handle
all steps for LWF registration with the respective State Labour Welfare
Boards, ensuring timely and correct setup.`,
      `Multi-state coverage analysis: We manage the complexities for companies
with branches in various states, ensuring compliance where "LWF is
mandatory" and where it is "not applicable" (e.g., states like Uttar Pradesh,
Bihar which may not have LWF).`,
      `Required documentation compilation: We assist in gathering and
submitting all necessary documents for LWF registration and ongoing
compliance in each state.`,
    ],
  },
  {
    title: "Accurate LWF Contribution Calculation & Payment",
    icon: UsersIcon,
    items: [
      `Precision Contribution Calculation: We accurately determine "how much is
the LWF contribution" for both employer and employee shares, navigating
varying "LWF contribution rates by state" (e.g., Maharashtra, Karnataka,
Delhi).`,
      `State-specific Wage Inclusion: We precisely identify "what salary
components are included in LWF wages" and whether "LWF deduction is on
gross salary or basic," aligning with each state's specific LWF Act.`,
      `Deduction Frequency Management: We track and ensure correct deduction
based on the state's mandate – whether monthly, half-yearly, or annually,
clarifying queries like "What is the frequency of LWF deduction?"`,
      `Timely Payment Facilitation: We generate accurate LWF challans and
support "online LWF payments" where available, ensuring deposits are made
well before the varied "LWF due dates" for each state.`,
    ],
  },
  {
    title: "Seamless LWF Returns & Data Management",
    icon: CalendarDaysIcon,
    items: [
      `State-Specific Return Filing: We manage the entire "LWF return filing
process" using the correct "LWF forms" (e.g., Form A, Form F, Form A-1, which
vary by state) with accuracy and punctuality as per each state's deadline.`,
      `Employee Data Management: We ensure all employee data relevant for LWF
contributions is accurately maintained and updated, handling nuances like
wage thresholds and employee categories for applicability in each state.`,
      `Digital Record Keeping: We maintain meticulous digital records of all LWF
challans, payment receipts, and filed returns, creating a robust audit trail for
future reference.`,
      `Online Portal Navigation: We expertly manage interactions with various
State Labour Welfare Board online portals, ensuring accurate data
reflection and complete submissions across diverse systems.`,
    ],
  },
  {
    title: "Proactive LWF Regulatory Advisory & Risk Mitigation",
    icon: UserCircleIcon,
    items: [
      `Continuous Regulatory Monitoring: Our dedicated experts continuously
monitor the highly fragmented "LWF Act states India" for any new
amendments, circulars, or rate changes from each respective State Labour
Welfare Board.`,
      `Impact Analysis & Strategic Advice: We translate complex, state-specific
legal updates into clear, actionable insights for your business operations,
ensuring you understand the implications and "penalties for noncompliance
with LWF.`,
      `Penalty Prevention Strategies: We implement proactive measures to
safeguard against "what happens if LWF is not deducted" or paid on time,
protecting your business from fines and legal repercussions (which vary by
state, e.g., imprisonment in some cases).`,
      `Audit Readiness Support: We provide complete assistance for any LWF
inspections or audits, ensuring you are fully prepared with complete
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
    //     Comprehensive Labour Welfare Fund Compliance Services
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
    title: "Facilitating Employee Access to LWF Welfare Schemes",
    features: [
      `Medical & Healthcare Support: Ensuring access to medical facilities, dental
care, and assistance for workers and their dependents where provided by the
state LWF board.`,
      `Educational Assistance: Facilitating eligibility for scholarships and financial
aid for workers' children, and supporting adult education programs.`,
      `Housing & Social Security: Ensuring access to housing schemes, financial
aid during emergencies, and other social security measures (e.g., marriage
assistance, funeral benefits, natural disaster relief).`,
      `Skill Development & Recreation: Supporting eligibility for vocational training,
skill upgradation programs, and access to recreational facilities like sports
clubs and cultural events.`,
    ],
  },
  {
    title: "Why Companies Trust LWF Compliance with EPFDesk.com",
    features: [
      `Consistent 99.9% accuracy rate in all LWF calculations and filings across
diverse state requirements, minimizing financial discrepancies and audit risks.`,
      `Zero audit failures across our client portfolio for LWF compliance over 5+
years, demonstrating our robust control environment and deep understanding
of state-specific acts.`,
      `Rapid average response times (e.g., 2-4 hours) for all client queries and
urgent matters, ensuring prompt resolution by specialists.`,
      `100% deadline adherence for all LWF submissions, completely eliminating
interest and penalties (which can vary, e.g., imprisonment in some states for
willful default).`,
    ],
  },
  {
    title: "Complete HR & Finance Team Liberation",
    features: [
      `Significant reduction (e.g., 85%) in administrative time typically spent on
understanding, calculating, and filing LWF returns for each applicable state.`,
      `Complete elimination of penalty and interest risks across all operating
states, leading to direct financial savings and peace of mind.`,
      `Protection from legal consequences and reputational damage related to
LWF non-compliance, ensuring business integrity.`,
      `Strategic resource redirection: Your HR and Finance teams are empowered
to focus on talent development, financial planning, and driving organizational
growth, rather than navigating disparate state LWF portals and forms.`,
    ],
  },
  {
    title: "Go Live with LWF Compliance in 24-48 Hours (Multi-State Ready)",
    features: [
      `Initial Consultation: A quick session to assess your current LWF setup,
employee count, and multi-state operational specifics.`,
      `Secure Data Integration: Our team securely accesses necessary payroll and
employee information via compliant channels for LWF processing.`,
      `State Board Portal Setup & Linkage: We manage the efficient setup and
linkage with various State Labour Welfare Board online portals.`,
      `Brief Team Orientation: A concise, practical orientation for your relevant HR/
Finance staff to ensure smooth operational handover.`,
    ],
  },
  {
    title: "Dedicated Ongoing Support for Continuous Multi-State Adherence",
    features: [
      `Dedicated Client Manager: Your single point of contact who understands
your specific account and multi-state compliance needs.`,
      `Monthly/Periodic Compliance Reports: Receive regular, clear updates on
your LWF status, contributions, and key metrics for each applicable state.`,
      `Immediate Query Resolution: Our team is committed to prompt responses,
ensuring any questions or issues related to your LWF compliance are
addressed swiftly.`,
      `Proactive Regulatory Updates: You'll receive timely notifications and expert
advice on new LWF rules, rate changes, or specific directives from each state,
ensuring you are always informed and compliant nationwide.`,
    ],
  },
  {
    title: "Key Employer LWF Concerns We Resolve:",
    features: [
      `Applicability & Registration: Determining "LWF applicability rules India" for your
establishment, "LWF registration process" with each State Labour Welfare Board,
and managing "coverage continuity" for changing workforces.`,
      `Contribution Management: Accurate "LWF contribution rates by state" (e.g.,
Maharashtra, Karnataka, Delhi), correct wage component inclusion, and handling
"monthly, half-yearly, or annual deductions" as per state law.`,
      `Filing & Remittance: Managing "LWF forms and deadlines India" (e.g., Form A,
Form F, Form A-1), ensuring "online LWF payments" where available, and
maintaining "digital record keeping.`,
      `Risk & Audit: Addressing "Labour Welfare Fund penalties non-compliance
India" (fines, interest, imprisonment) and providing "audit readiness support."`,
      `Multi-State Coordination: Seamlessly managing LWF compliance across multiple
states, understanding the nuances of "LWF Act states India."`,
    ],
  },
  {
    title:
      "Employee LWF Benefits Support We Ensure (by facilitating eligibility):",
    features: [
      `Medical & Health: Eligibility for medical facilities, including dental care.`,
      `Education: Access to scholarships and financial aid for children's education.`,
      `Financial Aid: Support during emergencies, marriage assistance, and funeral
benefits.`,
      `Skill Development & Recreation: Eligibility for vocational training and access to
recreational facilities where provided by the LWF Board.7`,
    ],
  },
];

export default function LWFServicesSection() {
  return (
    <section className="py-8 px-4 md:px-12">
      <div className="space-y-4 mx-auto">
        <h2 className="text-3xl font-bold my-8 text-center">
          Ensuring Employee Well-being: Comprehensive LWF Benefits Management
        </h2>
        <FadeInWhenVisible>
          <LatticeTabs cards={lwfCards} />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <LatticeSlider slides={slideLWF} />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <ResourcesGrid data={lwfGridData} />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <PlusTabsSection tabsData={lwfPlustabs}/>
        </FadeInWhenVisible>
         <FadeInWhenVisible>
          <MiddlePanelTabs tabsData={lwfMiddletabsData}/>
        </FadeInWhenVisible>
        {/* <EPFAccordion /> */}
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
