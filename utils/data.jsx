import {
  ChevronDownIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
  CalendarDaysIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  MdBarChart,
  MdLoop,
  MdFavorite,
  MdAttachMoney,
  MdNature,
} from "react-icons/md";
import {
  FaBook,
  FaGraduationCap,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";

export const epfServices = [
  {
    title: "Seamless Employee Lifecycle Management",
    icon: ClipboardDocumentCheckIcon,
    items: [
      `Monthly employee additions and deletions with immediate EPFO reflection: We precisely
manage your roster updates, ensuring compliance from day one for new hires and seamless
processing for exits. This addresses common employer queries about "How to add new
employee in EPF" and "deletion of member.`,
      `Automated UAN generation and linking for all new hires within 24 hours: Swift UAN allocation
and linking to Aadhaar streamline onboarding and prevent delays. This directly answers "How
to generate UAN for new employees" and "Linking Aadhaar with UAN by employer.`,
      `Complete employee data management and ongoing verification: We maintain pristine member
records, proactively correcting discrepancies and managing updates like name, DOB, and KYC
to mitigate future issues.`,
      `Expert coordination for exit formalities and final settlement processes: Ensuring smooth,
compliant EPF exits and seamless transfers for outgoing employees, simplifying the employer's
role in these crucial moments.`,
    ],
  },
  {
    title: "Automated Challan Generation & Payment Facilitation",
    icon: UsersIcon,
    items: [
      `Precision EPF challan creation validated against latest EPFO norms: Our system guarantees
accurate calculations for all employees, including complex scenarios like "EPF calculation for
salary above ₹15,000," and ensures correct "EPF contribution breakdown for employer and
employee.`,
      `Automated contribution calculation based on "basic wages" as per EPF Act: We accurately
determine taxable components and ensure correct inclusion of salary components (like
Dearness Allowance) for EPF, clarifying "What components of salary are included in EPF basic
wages?`,
      `Pre-submission validation to catch errors before filing: Our multi-layered checks identify
discrepancies before your "monthly EPF ECR online" filing, preventing costly mistakes and
addressing "errors in ECR filing and how to correct them.`,
      `Payment timeline management with timely reminders and alerts: We ensure your contributions
are remitted well before the "Monthly EPF return filing deadline" (15th of every month),
completely protecting you from "penalties for late EPF payment" and interest charges.`,
    ],
  },
  {
    title: "Expert Regulatory Filings & Approvals",
    icon: CalendarDaysIcon,
    items: [
      `Accurate and timely monthly ECR (Electronic Challan-cum-Return) filing: We manage your core
monthly submission with utmost precision, streamlining "How to file monthly EPF ECR online"
for your team.`,
      `Comprehensive handling of all employer approvals, declarations, and annexures: Ensuring
every required document, including "Nomination Form" and other necessary declarations, is
properly processed and uploaded.`,
      `Secure digital document management with ironclad audit trails: All filed records are securely
managed and easily retrievable, providing crucial support during any "EPFO audit process for
employers" and helping you "prepare for an EPF inspection" with confidence.`,
      `Proactive error detection and swift resubmission when needed: We identify and correct "errors
in ECR filing" promptly, ensuring continuous compliance and mitigating "legal consequences of
EPF non-compliance.`,
    ],
  },
  {
    title: "Proactive Regulatory Updates & Advisory",
    icon: UserCircleIcon,
    items: [
      `Continuous monitoring of all EPFO circulars, notifications, and "EPF & MP Act 1952 latest
amendments": Our experts are constantly updating their knowledge base, providing you with
real-time insights.`,
      `Impact analysis of new regulations on your specific business operations: We translate complex
legal jargon into actionable insights tailored to your organizational structure and workforce,
including the "New Social Security Code impact on EPF for employers.`,
      `Strategic recommendations for policy adaptations: We advise on necessary internal
adjustments to ensure seamless compliance with evolving laws, allowing you to strategically
adapt your HR and payroll policies ahead of time.`,
      `Advance notice of upcoming compliance requirements and deadlines: You're always prepared,
eliminating last-minute rushes and ensuring "best practices for EPF compliance in India.`,
    ],
  },
];

export const whyEpfDesk = [
  {
    title: "Unmatched Expertise & Zero-Error Accuracy",
    icon: ClipboardDocumentCheckIcon,
    items: [
      `Consistently high accuracy rate in EPF filings (e.g., 99.9%): Our multi-layered validation and
expert review process minimizes discrepancies, significantly reducing "interest on delayed EPF
contributions" for your business.`,
      `Zero audit failures across our client portfolio for 5+ years: A testament to our robust processes
and unwavering commitment to compliance integrity, offering true peace of mind.`,
      `Rapid average response time (e.g., 2-4 hours) for client queries: Ensuring your concerns are
addressed promptly by dedicated specialists, improving your operational efficiency.`,
      `100% deadline adherence for all submissions: Protecting you from "legal consequences of EPF
non-compliance" and preserving your organization's reputation.`,
    ],
  },
  {
    title: "Complete HR & Finance Team Liberation",
    icon: UsersIcon,
    items: [
      `Up to 90% reduction in compliance-related administrative tasks: Freeing up countless hours
previously spent on manual processing and follow-ups, directly translating to "measurable
productivity gains.`,
      `Accelerated new employee onboarding process (e.g., 80% faster): Streamlining your initial
employee setup by expertly managing all EPF complexities, allowing your HR to onboard
quickly.`,
      `100% elimination of penalty and interest risks: Direct financial savings and mitigation of "what
happens if employer does not deposit PF?" concerns, due to flawless and timely compliance.`,
      `Significant reduction in employee EPF queries reaching HR (e.g., 75%): Our integrated solutions,
including the EPF Desk for employees, offload individual queries, allowing HR to focus on
strategic initiatives.`,
    ],
  },
  {
    title: "Implementation & Support",
    icon: CalendarDaysIcon,
    items: [
      `Initial Consultation: A brief session to understand your current EPF setup and specific needs.`,
      `Secure Portal Integration: Our team manages the secure integration with relevant EPFO portals
and gathers necessary access details.`,
      `Brief Team Orientation: A quick, efficient orientation session with your relevant staff to ensure a
smooth handover.`,
      `Full Service Activation: Your EPF compliance is fully operational, seamlessly managed by
EPFDesk.com experts within 24 hours.`,
    ],
  },
  {
    title: "Dedicated Support Team",
    icon: UserCircleIcon,
    items: [
      `Dedicated Client Manager: A single point of contact who understands your specific account
and compliance needs, ensuring personalized service.`,
      `Monthly Compliance Reports & Insights: Regular updates on your compliance status and
performance.`,
      `Immediate Resolution of EPF-related Queries: Your dedicated manager ensures any questions
or issues are addressed promptly.`,
      `Proactive Communication on Regulatory Changes: You're informed of relevant updates,
ensuring continuous compliance.`,
    ],
  },
];

export const plans = {
  mainTitle:
    "Ensuring Employee Well-being: Comprehensive ESIC Benefits Management",
  cards: [
    {
      title: "Guaranteeing ESIC Benefits Access for Your Workforce",
      features: [
        `Full Medical Care Access: We ensure proper registration and contribution records
so employees can effortlessly access "ESIC medical benefits for family," and
locate "ESIC dispensary nearby"and "ESIC hospital list."`,
        `Robust Cash Benefits Eligibility: Our accurate contribution management means
employees are eligible for vital support like "ESIC sickness benefit eligibility"(70% wages), "ESIC maternity benefit rules" (100% wages), "ESIC disablement
benefit" (90% wages), and "ESIC unemployment allowance" under Atal Bimit
Vyakti Kalyan Yojana (ABVKY).`,
        `Comprehensive Additional Benefits: We manage data crucial for dependents to
access "ESIC dependent benefits," and ensure eligibility for "ESIC funeral
expenses" (₹15,000), "ESIC confinement expenses," and "ESIC vocational
rehabilitation.`,
        `Seamless Access Tools: We ensure accurate details for employees to "download
ESIC E-Pehchan card" and "check ESI registration of an employee online,"
facilitating their access to benefits.`,
      ],
    },
    {
      title: "Proven ESIC Expertise & Zero-Risk Compliance",
      features: [
        "99.9% Accuracy in ESIC Filings: Consistent 99.9% accuracy rate in all ESIC filings and contribution calculations, rigorously minimizing financial discrepancies and audit risks.",
        "Zero Audit Failures in 5+ Years: Zero audit failures across our client portfolio for 5+ years, a testament to our robust control environment and unwavering commitment to compliance integrity.",
        "Rapid Query Resolution (2–4 hrs): Rapid average response times (e.g., 2-4 hours) for all client queries and urgent matters, ensuring your concerns are addressed promptly by dedicated specialists.",
        "100% Deadline Adherence: 100% deadline adherence for all ESIC submissions, completely eliminating interest charges and 'legal consequences of ESIC non-compliance.'",
      ],
    },
    {
      title: "Complete HR & Finance Team Liberation",
      features: [
        "80% Reduction in ESIC Admin Time: Up to 80% reduction in administrative time typically spent on ESIC registration, calculation, and filing processes, directly enhancing operational efficiency.",
        "Elimination of ESIC Penalty Risks: 100% elimination of penalty and interest risks, leading to direct financial savings and complete protection from unforeseen costs.",
        "Protection from Legal & Reputational Risks: Complete protection from non-compliance legal consequences and reputational damage, ensuring your business's integrity.",
        "Strategic Resource Redirection: Strategic resource redirection toward talent development, advanced financial planning, and core business growth, maximizing your organization's potential.",
      ],
    },
    {
      title: "Rapid Implementation & Ongoing Support",
      features: [
        `Initial Consultation: A quick, efficient session to understand your current ESIC
setup, employee count, and specific organizational requirements.`,
        `Secure Data Integration: Our team securely accesses necessary payroll and
employee information via compliant channels for initial ESIC processing.`,
        `ESIC Portal Setup & Linkage: We manage the efficient setup and linkage with the
ESIC employer portal and other relevant online platforms.`,
        `Brief Team Orientation: A concise, practical orientation session for your relevant
HR and Finance staff to ensure a smooth operational handover and understanding
of our processes.`,
        `Full Service Activation: Your ESIC compliance is fully operational and seamlessly
managed by EPFDesk.com experts within 24-48 hours of successful onboarding.`,
      ],
    },
  ],
};

export const epfManagementFaq = [
  {
    question: "How quickly can we start using your EPF management services?",
    answer: `We pride ourselves on efficiency; your EPF compliance can be fully operational with EPFDesk.com within
24 hours of onboarding completion.`,
  },
  {
    question:
      "What happens to our existing EPF records and historical filings?",
    answer: `We perform a secure and meticulous migration of all your historical data and records, ensuring seamless
continuity with zero disruption to your ongoing operations or past records.`,
  },
  {
    question:
      "Do you handle EPF compliance for multi-state operations across India?",
    answer: `Absolutely. Our nationwide operational footprint and deep understanding of varying state-level nuances
enable us to manage EPF compliance effectively across all Indian states and territories, regardless of your
company's dispersed locations.`,
  },
  {
    question: "How do you ensure accuracy in EPF calculations and filings?",
    answer: `Our process involves a multi-layer validation system, automated checks against EPFO norms, and final
expert review by our compliance specialists, resulting in a 99.9% accuracy rate in all submissions.`,
  },
  {
    question: "What if there's an EPFO audit of our company?",
    answer: `You can rest assured. We provide complete audit support, including compiling all necessary
documentation, offering expert guidance, and providing representation as required, making your audit
process stress-free.`,
  },
  {
    question:
      "What's included in the monthly service fee for Employer EPF Management?",
    answer: `Our monthly service fee is comprehensive, covering all core EPF compliance activities, dedicated client
support, timely regulatory updates, ongoing data management, and full audit-ready documentation.`,
  },
  {
    question:
      "How do you handle urgent EPF queries or unforeseen issues that arise?",
    answer: `Our dedicated client managers and expert teams are committed to rapid response, ensuring same-day
resolution for all urgent matters and critical EPF-related issues.`,
  },
];

export const esicFaq = [
  {
    question: "Who needs to comply with ESIC regulations in India?",
    answer: `ESIC generally applies to establishments with 10 or more employees (or 20+ in some states)
where an employee's monthly wage does not exceed ₹21,000 (or ₹25,000 for persons with
disabilities). We can confirm your specific applicability.`,
  },
  {
    question: "What are the current ESIC contribution rates?",
    answer: `As per current regulations, the employer contributes 3.25% and the employee contributes
0.75% of gross monthly wages, up to the defined wage ceiling.`,
  },
  {
    question: "Which salary components are included in ESIC calculations?",
    answer: `ESIC contributions are calculated on gross wages, typically encompassing basic pay,
dearness allowance (DA), house rent allowance (HRA), city compensatory allowance (CCA),
production incentives, night shift allowance, and other applicable allowances.`,
  },
  {
    question: "What penalties apply for late ESIC payments or non-compliance?",
    answer: `Delays in ESIC contribution payment incur an interest rate of 12% per annum. Additionally,
damages ranging from 5% to 25% of the arrears may be imposed depending on the period of
delay. Non-registration or repeated non-compliance can lead to further legal actions.`,
  },
  {
    question: "How does EPFDesk ensure timely ESIC filing?",
    answer: `We manage your complete ESIC filing process, including accurate calculation, automated
challan generation, multi-layer validation, and guaranteed submission before the 15th-of-thefollowing-
month deadline.`,
  },
  {
    question:
      "Will our employees still be able to access their ESIC benefits seamlessly?",
    answer: `Our monthly service fee is comprehensive, covering all core EPF compliance activities, dedicated client
support, timely regulatory updates, ongoing data management, and full audit-ready documentation.`,
  },
  {
    question:
      "How do you handle urgent EPF queries or unforeseen issues that arise?",
    answer: `Absolutely. Our accurate and timely compliance ensures seamless access for your
employees to all their entitled ESIC benefits, including medical care, various cash benefits,
and social security entitlements.`,
  },
  {
    question: "Can you help with new company ESIC registration?",
    answer: `Yes, we provide comprehensive registration support, from initial applicability assessment
and documentation to successful ESIC code allocation, streamlining the entire setup process
for new establishments.`,
  },
  {
    question: "How do you handle multi-state ESIC compliance?",
    answer: `Our nationwide operational footprint and deep understanding of varied state-level ESIC
regulations enable us to manage compliance effectively across all Indian states and
territories, providing consistent support for multi-location businesses.`,
  },
];

export const lwfFaq = [
  {
    question: "Is Labour Welfare Fund (LWF) mandatory in all Indian states?",
    answer: `No, LWF is a state-specific contribution and is implemented by individual state
legislatures.8 It is currently mandatory in only about 16-20 states and union territories
across India, with rules varying significantly.`,
  },
  {
    question:
      "What are the typical LWF contribution rates and how often are they paid?",
    answer: `LWF rates vary widely by state (e.g., ₹6 to ₹60 total per employee).9 Contributions can
be deducted monthly, half-yearly (e.g., June & December), or annually (e.g., December),
depending on the specific state's LWF Act.10`,
  },
  {
    question: "Which employees are typically covered under the LWF Act?",
    answer: `Generally, LWF applies to all employees except those in managerial or supervisory
positions earning above a certain wage threshold, which varies by state. We ensure
accurate applicability for your workforce in each state.`,
  },
  {
    question:
      "What penalties can apply for LWF non-compliance or late payments?",
    answer: `Penalties for LWF non-compliance vary by state but can include monetary fines (e.g.,
₹500 to ₹5,000+), interest on unpaid amounts (e.g., 12-25% per annum), and even
imprisonment (up to 3-6 months) for repeated or willful defaults.`,
  },
  {
    question:
      "Do you handle LWF compliance for companies operating in multiple states?",
    answer: `Absolutely. Our nationwide operational footprint and deep expertise in state-specific
LWF Acts enable us to manage and ensure flawless compliance across all Indian states
where you operate.`,
  },
  {
    question:
      "How do you ensure accuracy in LWF calculations given state variations?",
    answer: `Our process involves meticulous tracking of each state's unique LWF Act, specific
rates, wage components, and frequencies. We use multi-layer validation and expert
review to ensure 99.9% accuracy for every contribution and filing.`,
  },
  {
    question: "Can LWF payments be made online?",
    answer: `Many states now offer online portals for LWF payments and return filings (e.g.,
Maharashtra, Gujarat, Haryana).11 We utilize these online systems where available to
streamline the process. For states requiring manual submission, we handle that as well.`,
  },
];

export const ptFaq = [
  {
    question: "Is Professional Tax (PT) mandatory in all Indian states?",
    answer: `No, Professional Tax is a state-specific tax levied by individual state governments. It is
currently applicable in approximately 18-20 states and Union Territories in India, and its
rules vary significantly from one state to another.`,
  },
  {
    question: "What are the typical PT rates and how often are they paid?",
    answer: `PT rates are based on a slab system tied to income, varying by state. The maximum
annual PT payable by an individual cannot exceed ₹2,500. Payment frequency also
varies: some states require monthly payments, others quarterly, half-yearly, or annually,
depending on the tax liability or type of registration.`,
  },
  {
    question: "Which employees are typically covered under Professional Tax?",
    answer: `Generally, Professional Tax applies to all salaried individuals and self-employed
professionals earning above a certain income threshold, which is set by each state. We
ensure accurate applicability for your specific workforce in each state.`,
  },
  {
    question:
      "What penalties apply for late Professional Tax payments or non-compliance?",
    answer: `Penalties for PT non-compliance vary significantly by state but commonly include
interest on delayed payments (e.g., 1% to 2% per month), fixed fines for late registration
(e.g., ₹5 to ₹1,000 per day), and penalties for late filing or non-payment (e.g., 10% to 50%
of the tax due).`,
  },
  {
    question:
      "Do you handle Professional Tax compliance for companies operating in multiple states?",
    answer: `Yes, absolutely. Our nationwide operational footprint and deep expertise in each
state's unique Professional Tax laws enable us to seamlessly manage and ensure
flawless PT compliance across all Indian states where your company operates.`,
  },
  {
    question:
      "How do you ensure accuracy in PT calculations and filings given state variations?",
    answer: `Our process involves meticulous tracking of each state's unique PT Act, specific slab
rates, wage components, and due dates. We use multi-layer validation and expert review
to ensure 99.9% accuracy for every contribution and filing, protecting you from
discrepancies.`,
  },
  {
    question: "Can Professional Tax payments be made online?",
    answer: `Most states now offer online portals for Professional Tax payments and return filings
(e.g., Maharashtra, Karnataka, West Bengal). We utilize these online systems where
available to streamline the process for maximum efficiency.`,
  },
];

export const epfDeskFaq = [
  {
    question: "How do our employees get access to the EPFDesk platform?",
    answer: `After company onboarding, employees receive secure login credentials or guided registration instructions for immediate
platform use via a dedicated portal link.`,
  },
  {
    question: "What specific EPF issues can employees resolve through EPFDesk?",
    answer: `Employees can raise tickets for virtually all EPF-related queries including balance checks, UAN activation, KYC updates,
withdrawals (partial/full), transfers, pension matters, passbook updates, and portal login issues.`,
  },
  {
    question: "Is there any cost to our employees for using EPFDesk?",
    answer: `No, the EPFDesk platform and all its support services are included as part of your company's partnership with
EPFDesk.com. There is no direct cost to individual employees.`,
  },
  {
    question:
      "How quickly are employee EPF issues typically resolved through EPFDesk?",
    answer: `While resolution times can vary based on complexity and EPFO processing, our expert teams prioritize speed and accuracy.
Employees can track real-time progress, with most common queries resolved within days.`,
  },
  {
    question: "Can employees still contact our internal HR for EPF matters?",
    answer: `While EPFDesk is designed to be the primary resolution channel for EPF queries, employees always retain the option to
contact your internal HR for company-specific policy questions or non-EPF related matters.`,
  },
  {
    question:
      "How does EPFDesk ensure the security and privacy of employee data?",
    answer: `We employ industry-standard data encryption, secure login protocols, and strict data privacy policies, ensuring complete
confidentiality and compliance with data protection regulations.`,
  },
  {
    question:
      "What happens if an employee's case requires visiting EPFO offices?",
    answer: `Our unique on-ground teams across India handle these situations. For cases requiring physical presence at EPFO offices,
our local experts manage all interactions directly, ensuring resolution without burdening your employee or HR.`,
  },
  {
    question:
      "Can the platform handle high volumes of employee queries for large companies?",
    answer: `Yes, our scalable platform and expert teams are specifically designed and equipped to handle high query volumes for
organizations of all sizes, from mid-sized companies to large enterprises seamlessly.`,
  },
];

export const epfDeskServices = [
  {
    title: "Secure & Intuitive Employee Access (24/7)",
    icon: ClipboardDocumentCheckIcon,
    items: [
      `Dedicated Member Login Portal: Provides secure, personalized employee access to the EPFDesk platform,
making it their central hub for all EPF matters.`,
      `User-Friendly Interface: Designed for clarity and ease of use, ensuring all employees, regardless of technical
skill, can effortlessly navigate and find solutions.`,
      `Mobile-Responsive Design: Guarantees seamless support availability on any device – desktop, tablet, or
smartphone – for ultimate convenience.`,
      `Instant Expert Access: Employees get immediate access to EPF expertise without needing HR intervention,
streamlining their journey from query to resolution.`,
    ],
  },
  {
    title: "Streamlined Query Management System",
    icon: UsersIcon,
    items: [
      `Guided Ticket Creation: Employees can easily log tickets for virtually all EPF issues. This includes common
queries like "How to check EPF balance online," "How to activate UAN," "How to update EPF KYC," and "EPF
withdrawal process.`,
      `Real-time Progress Tracking: Each submitted ticket comes with a clear, live progress bar, transparent status
updates, and estimated resolution timelines. Employees always know where their request stands, reducing
anxiety and eliminating the need for constant follow-ups.`,
      `Automated Notifications: Employees receive proactive updates via email or SMS as their ticket progresses
through the resolution stages, keeping them fully informed without having to manually check the portal.`,
      `Comprehensive Issue Coverage: Our system handles a vast range of concerns, from simple queries (e.g.,
"How to download EPF passbook") to more complex EPF transfer cases and pension-related inquiries.`,
    ],
  },
  {
    title: "Expert-Led Resolution & Direct EPFO Liaison",
    icon: CalendarDaysIcon,
    items: [
      `Dedicated EPF Specialists: Our team comprises seasoned professionals who take full ownership of each
employee query, specializing in accurate resolutions for issues like "Why is my EPF passbook not updated?"
or "What to do if employer is not depositing PF?"`,
      `Direct EPFO Communication Channels: We utilize established channels for faster resolution and
documentation exchange with the Employees' Provident Fund Organisation (EPFO), eliminating the need for
your HR to act as a middleman.`,
      `Complex Case Management: Our expertise extends to intricate cases such as inter-company EPF transfers,
legacy account merging, pension payment processing, and resolving discrepancies in contribution
claims.`,
      `Complete Resolution Lifecycle: We manage the entire resolution journey, from the initial query submission to
final settlement or problem closure, including necessary employer attestation for EPF transfer claims and
approval of online EPF claims from an employer's perspective.`,
    ],
  },
  {
    title: "Nationwide On-Ground Support for Unresolved Cases",
    icon: UserCircleIcon,
    items: [
      `Local Teams Across Major Metros: Unlike purely online services, our on-ground teams in key Indian cities
(including Delhi NCR, Mumbai, Bengaluru, Chennai, and Hyderabad, Pune) provide invaluable physical support where it
matters most.`,
      `In-Person EPFO Office Representation: For complex or unresolved cases that mandate direct interaction,
submission of physical documents, or follow-ups at regional EPFO offices, our local teams ensure swift and effective
resolution. This addresses queries related to "EPFO portal usage" and "employer's guide to EPFiGMS."`,
      `Physical Verification Assistance: When required by EPFO processes (e.g., for certain withdrawal claims or death
claim processing), our teams provide on-ground assistance for physical verification, bridging any logistical gaps.Guaranteed Case Closure: This unique capability ensures even the most challenging or bureaucratic EPF issues are
resolved efficiently, guaranteeing 100% issue resolution regardless of geographical or administrative complexities.`,
    ],
  },
];

export const epfDeskStatergy = [
  {
    title: "Complete HR Team Liberation",
    icon: ClipboardDocumentCheckIcon,
    items: [
      `Significant reduction (e.g., 80%) in daily EPF-related employee queries: Freeing up countless hours
previously spent on routine tasks.`,
      `Valuable HR bandwidth reclaimed (e.g., 15-20 hours monthly): Allowing your HR team to focus on strategic
initiatives like talent acquisition, employee development programs, and fostering a vibrant workplace culture.`,
      `Eliminated EPFO liaison requirement: Your HR team no longer needs to be the middleman for individual
employee EPF issues, reducing their administrative overhead.`,
      `Shift to Strategic Focus: Empowering HR to lead retention strategies, succession planning, and workplace
culture building.`,
    ],
  },
  {
    title: "Enhanced Employee Experience & Satisfaction",
    icon: UsersIcon,
    items: [
      `Instant expert access: Employees experience swift resolution, eliminating frustration associated with delayed
responses or unanswered questions.`,
      `Transparent resolution process: Builds confidence in how their EPF matters are managed, as they can track
progress in real-time.`,
      `Professional support quality: The consistent and expert support enhances the perception of employer care
and commitment to employee well-being.`,
      `Empowered workforce: Employees feel more in control and informed about their provident fund matters,
leading to increased satisfaction and morale.`,
    ],
  },
];

// export const plansEpfDesk = {
//   mainTitle:
//     "Simple Implementation & Ongoing Support",
//   cards: [
//     {
//       id:"01",
//       title: "24-Hour Platform Activation",
//         bg: 'bg-[#fceff1]',
//       desc: [
//         `Platform Setup & Configuration: Our team handles the swift setup of your company's EPFDesk portal,
// customizing access configuration as needed.`,
//         `Employee Credential Generation/Guided Registration: We facilitate the creation of secure login credentials
// or guide your employees through a simple self-registration process.`,
//         `Comprehensive Employee Onboarding Kit Delivery: We provide easy-to-understand usage guides, FAQs, and
// tutorials to ensure your employees can quickly adopt and benefit from the platform.`,
//         `Immediate Platform Availability: Your employees can begin raising tickets and accessing expert support
// within 24 hours of onboarding completion, experiencing instant value.`,
//       ],
//     },
//     {
//       id:"02",
//       title: "Seamless Integration & Proactive Management",
//       bg: 'bg-[#f0f4ff]',
//       desc: [
//         `Optional HR Dashboard: While we handle direct employee resolution, your HR team can access an optional
// dashboard to monitor common query trends (anonymized), view overall ticket resolution rates, and identify areas for
// internal communication.`,
//         `Dedicated Client Manager: You'll have an assigned client manager who serves as your single point of contact for
// organizational-level support, reporting needs, and any high-level strategic consultations.`,
//         `Continuous Platform Enhancement: We constantly enhance the EPFDesk platform based on user feedback, evolving
// EPFO processes, and emerging employee needs, ensuring your employees always have access to the best support.`,
//         `Scalable Solution: Our platform and expert teams are built to handle ever-increasing query volumes, seamlessly
// growing with your workforce from mid-sized companies to large enterprises.`,
//       ],
//     },
//     {
//       id:"03",
//       title: "Common Employee Issues We Resolve:",
//       bg: 'bg-[#e7fbe9]',
//       desc: [
//         `EPF balance checking and passbook updates: Including "How to check EPF balance online" and resolving "Why is
// my EPF passbook not updated?`,
//         `UAN activation, linking, and Aadhaar integration: Expert assistance with "How to activate UAN," "How to know
// your UAN," and managing "Common UAN login issues and solutions.`,
//         `KYC document updates and verification: Guidance and processing for "How to update EPF KYC"and other member
// profile corrections.`,
//         `EPF withdrawal claims (partial and full settlement): Navigating "EPF withdrawal rules" and assisting with "How
// to withdraw EPF online" and required documents.`,
// `EPF transfer between employers and states: Expertly managing the "EPF transfer process" to ensure seamless
// continuity of funds.`,
// `Pension-related queries and processing: Understanding "Understanding EPS benefits" and assisting with "How
// to get EPS Scheme Certificate."`,

//       ],
//     },
//     {
//       id:"04",
//       title: "Rapid Implementation & Ongoing Support",
//        bg: 'bg-[#fff7ed]',
//       desc: [
//         `Initial Consultation: A quick, efficient session to understand your current ESIC
// setup, employee count, and specific organizational requirements.`,
//         `Secure Data Integration: Our team securely accesses necessary payroll and
// employee information via compliant channels for initial ESIC processing.`,
//         `ESIC Portal Setup & Linkage: We manage the efficient setup and linkage with the
// ESIC employer portal and other relevant online platforms.`,
//         `Brief Team Orientation: A concise, practical orientation session for your relevant
// HR and Finance staff to ensure a smooth operational handover and understanding
// of our processes.`,
//         `Full Service Activation: Your ESIC compliance is fully operational and seamlessly
// managed by EPFDesk.com experts within 24-48 hours of successful onboarding.`,
//       ],
//     },
//   ],
// };

export const plansEpfDesk = {
  mainTitle: "Simple Implementation & Ongoing Support",
  cards: [
    {
      id: "01",
      title: "24-Hour Platform Activation",
      bg: "bg-[#fceff1]",
      heading: "Experience immediate productivity with same-day activation.",
      body: [
        "Platform Setup & Configuration: Our team handles the swift setup of your company's EPFDesk portal, customizing access configuration as needed.",
        "Employee Credential Generation/Guided Registration: We facilitate the creation of secure login credentials or guide your employees through a simple self-registration process.",
        "Comprehensive Employee Onboarding Kit Delivery: Easy-to-understand guides, FAQs, and tutorials.",
        "Immediate Platform Availability: Employees can begin accessing support within 24 hours of onboarding.",
      ],
      image: "https://dummyimage.com/600x400/fceff1/333&text=Activation",
    },
    {
      id: "02",
      title: "Seamless Integration & Proactive Management",
      bg: "bg-[#f0f4ff]",
      heading: "Scale confidently with expert-led integration.",
      body: [
        "Optional HR Dashboard for insights and anonymized trend data.",
        "Dedicated Client Manager for strategic guidance and support.",
        "Continuous Platform Enhancement based on feedback and compliance changes.",
        "Scalable to handle increased volumes as your workforce grows.",
      ],
      image: "https://dummyimage.com/600x400/f0f4ff/333&text=Integration",
    },
    {
      id: "03",
      title: "Common Employee Issues We Resolve:",
      bg: "bg-[#e7fbe9]",
      heading: "Relieve HR stress with our comprehensive support.",
      body: [
        "EPF balance and passbook update support.",
        "UAN activation, Aadhaar linking, and login help.",
        "KYC updates and profile corrections.",
        "Assistance with EPF withdrawal rules and documentation.",
        "Expert-managed EPF transfers between employers/states.",
        "Pension-related EPS benefits and certification guidance.",
      ],
      image: "https://dummyimage.com/600x400/e7fbe9/333&text=Support",
    },
    {
      id: "04",
      title: "Rapid Implementation & Ongoing Support",
      bg: "bg-[#fff7ed]",
      heading: "Quick setup and dependable ESIC compliance.",
      body: [
        "Initial Consultation to understand your requirements.",
        "Secure Data Integration for payroll and employee info.",
        "ESIC Portal Setup and configuration.",
        "Concise Orientation for HR and Finance teams.",
        "Full Service Activation within 24-48 hours.",
      ],
      image: "https://dummyimage.com/600x400/fff7ed/333&text=Implementation",
    },
  ],
};

export const dummyCards = [
  {
    title: "Seamless Employee Lifecycle Management",
    description: "Pay employees and contractors in a few clicks.",
    image: "/images/67db42e6490940b072a7aeac_Run Payroll-p-500.webp",
    color: {
      bg: "bg-rose-100",
      border: "border-rose-200",
      raw: "#ffe4e6",
      stroke: "#ffe4e6",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Peace of mind for every pay cycle.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            With a unified employee record, your payroll information is always
            up to date. Lattice calculates payroll and tracks deductions and
            contributions so you don’t have to.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67db49b01109f51c7bb212c2_a9ba4cd2bfdef51480350a75b0569f4e_feat-image-payroll-unified-data.webp"
          alt="Unified Data Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Tax Compliance",
    description: "Auto-calculate & file all payroll taxes.",
    image: "/images/67db431bc50e51569725f6a0_Tax compliance.webp",
    color: {
      bg: "bg-yellow-100",
      border: "border-yellow-200",
      raw: "#fef9c3",
      stroke: "#fef9c3",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Simplify compliance with worry-free withholdings.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Lattice files taxes on your behalf, and gives you all the data you
            need for reporting and auditing.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc43c71f563ef421a38eaa_a44c8c1ae5b22c26ebccb00e1b2b04f0_feat-image-payroll-tax-compliance.webp"
          alt="Tax Compliance Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Employee Self Service",
    description: "Reduce HR admin burden.",
    image: "/images/67db434ac50e515697262a2b_Employee self service-p-500.webp",
    color: {
      bg: "bg-blue-100",
      border: "border-blue-200",
      raw: "#dbeafe",
      stroke: "#dbeafe",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Empower employees with an easy, intuitive platform.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Let employees view and manage paystubs, bank accounts, and tax
            documents without asking HR.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e5669a66ad33bbfbabf4a3_feat-image-employee-self-service.webp"
          alt="Employee Self Service Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Time Tracking",
    description: "Track, approve, and sync hours to payroll.",
    image: "/images/67db437a17d3aaef94ed34ad_Time tracking.webp",
    color: {
      bg: "bg-green-100",
      border: "border-green-200",
      raw: "#dcfce7",
      stroke: "#dcfce7",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Get time back with built-in time tracking.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Cut down on manual data entry and errors with fast time card entry,
            review, and approval—synced automatically to payroll.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e2b51dfb00d11fe21ace11_feat-image-time-tracking.webp"
          alt="Time Tracking Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Integrations",
    description: "Connect Payroll to your favorite third-party apps.",
    image: "/images/67db439ff5e0bea132971dd4_Integrations.webp",
    color: {
      bg: "bg-purple-100",
      border: "border-purple-200",
      raw: "#f3e8ff",
      stroke: "#f3e8ff",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ensure every system works together seamlessly.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Lattice Payroll integrates with your preferred third-party apps,
            like benefits, 401(k), and more.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc42fb273047112e42863a_cc3ed45b7dc81f77e5b48e5f03f5f3e1_feat-image-payroll-integrations.webp"
          alt="Integrations Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
];

export const epfoCards = [
  {
    title: "Seamless Employee Lifecycle Management",
    description: "Pay employees and contractors in a few clicks.",
    image: "/images/67db42e6490940b072a7aeac_Run Payroll-p-500.webp",
    color: {
      bg: "bg-rose-100",
      border: "border-rose-200",
      raw: "#ffe4e6",
      stroke: "#ffe4e6",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Seamless Employee Lifecycle Management
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Streamline onboarding, exits, and EPF compliance with automated UAN
            generation, real-time roster updates, verified member records, and
            expert handling of exit formalities — ensuring smooth transitions
            and regulatory alignment throughout the employee journey.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67db49b01109f51c7bb212c2_a9ba4cd2bfdef51480350a75b0569f4e_feat-image-payroll-unified-data.webp"
          alt="Unified Data Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Automated EPF Challan Generation & Error-Free Payments",
    description: "Auto-calculate & file all payroll taxes.",
    image: "/images/67db431bc50e51569725f6a0_Tax compliance.webp",
    color: {
      bg: "bg-yellow-100",
      border: "border-yellow-200",
      raw: "#fef9c3",
      stroke: "#fef9c3",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Automated EPF Challan Generation & Error-Free Payments
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Ensure accurate, compliant EPF challan creation with automated
            wage-based calculations, real-time validation checks, and timely
            reminders — eliminating filing errors, ensuring on-time payments,
            and protecting you from penalties and interest charges.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc43c71f563ef421a38eaa_a44c8c1ae5b22c26ebccb00e1b2b04f0_feat-image-payroll-tax-compliance.webp"
          alt="Tax Compliance Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Expert EPF Filings, Approvals & Compliance Assurance",
    description: "Reduce HR admin burden.",
    image: "/images/67db434ac50e515697262a2b_Employee self service-p-500.webp",
    color: {
      bg: "bg-blue-100",
      border: "border-blue-200",
      raw: "#dbeafe",
      stroke: "#dbeafe",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Expert EPF Filings, Approvals & Compliance Assurance
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We handle all your monthly ECR filings, declarations, and approvals
            with precision—backed by secure digital records, audit-ready
            documentation, and proactive error correction—to ensure full EPFO
            compliance and peace of mind during audits or inspections.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e5669a66ad33bbfbabf4a3_feat-image-employee-self-service.webp"
          alt="Employee Self Service Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Proactive EPF Regulatory Updates & Strategic Advisory",
    description: "Track, approve, and sync hours to payroll.",
    image: "/images/67db437a17d3aaef94ed34ad_Time tracking.webp",
    color: {
      bg: "bg-green-100",
      border: "border-green-200",
      raw: "#dcfce7",
      stroke: "#dcfce7",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Proactive EPF Regulatory Updates & Strategic Advisory
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Stay ahead of compliance with real-time EPFO updates, personalized
            impact analysis, strategic policy guidance, and advance
            alerts—empowering your organization to adapt seamlessly to evolving
            EPF regulations and avoid last-minute surprises.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e2b51dfb00d11fe21ace11_feat-image-time-tracking.webp"
          alt="Time Tracking Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Stay Compliant with Confidence",
    description: "Connect Payroll to your favorite third-party apps.",
    image: "/images/67db439ff5e0bea132971dd4_Integrations.webp",
    color: {
      bg: "bg-purple-100",
      border: "border-purple-200",
      raw: "#f3e8ff",
      stroke: "#f3e8ff",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Compliant with Confidence
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We decode every EPFO circular and regulatory change for you—offering
            tailored guidance, compliance checklists, and strategic insights—so
            your organization is always prepared, always compliant, and never
            caught off-guard.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc42fb273047112e42863a_cc3ed45b7dc81f77e5b48e5f03f5f3e1_feat-image-payroll-integrations.webp"
          alt="Integrations Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
];

export const slides = [
  {
    sectionTitle: "Complete Employee EPF Support Platform",
    sectionSubtitle: "Secure & Intuitive Employee Access (24/7)",
    items: [
      {
        title: "Dedicated Member Login Portal",
        desc: "Provides secure, personalized employee access to the EPFDesk platform, making it their central hub for all EPF matters.",
        img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a5a96b10c0ffd35b7a_ui-ai-performance-summaries.webp",
        alt: "UI of AI Performance Summaries",
      },
      {
        title: "User-Friendly Interface",
        desc: "Designed for clarity and ease of use, ensuring all employees, regardless of technical skill, can effortlessly navigate and find solutions.",
        img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a04e4e2f6b5e249476_ui-ai-calibration.webp",
        alt: "UI of AI calibration",
      },
      {
        title: "Mobile-Responsive Design",
        desc: "Guarantees seamless support availability on any device – desktop, tablet, or smartphone – for ultimate convenience.",
        img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a1658dd9bc56ab8ab6_ui-ai-writing-assist.webp",
        alt: "UI of AI writing assistant",
      },
      {
        title: "Instant Expert Access",
        desc: "Employees get immediate access to EPF expertise without needing HR intervention, streamlining their journey from query to resolution.",
        img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a0062e7b6225cc312a_ui-ai-team-trends.webp",
        alt: "UI of AI team trends",
      },
      {
        title: "Coaching for when HR can’t be everywhere",
        desc: "71% of HR leaders don’t think they are effectively developing midlevel leaders.",
        img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a02bef6737c0c60f26_ui-ai-agent-context-2.webp",
        alt: "UI of AI agent context",
      },
    ],
  },
];

export const slidesEpfo = {
  sectionTitle: "Why Companies Trust EPFDesk.com",
  sectionSubtitle: "Unmatched Expertise & Zero-Error Accuracy",
  items: [
    {
      title: "Consistently high accuracy rate in EPF filings (e.g., 99.9%)",
      desc: `Our multi-layered validation and expert review process minimizes discrepancies, significantly reducing "interest on delayed EPF contributions" for your business`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a5a96b10c0ffd35b7a_ui-ai-performance-summaries.webp",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "Zero audit failures across our client portfolio for 5+ years",
      desc: "A testament to our robust processes and unwavering commitment to compliance integrity, offering true peace of mind.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a04e4e2f6b5e249476_ui-ai-calibration.webp",
      alt: "UI of AI calibration",
    },
    {
      title: "Rapid average response time (e.g., 2-4 hours) for client queries",
      desc: "Ensuring your concerns are addressed promptly by dedicated specialists, improving your operational efficiency.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a1658dd9bc56ab8ab6_ui-ai-writing-assist.webp",
      alt: "UI of AI writing assistant",
    },
    {
      title: "100% deadline adherence for all submissions",
      desc: `Protecting you from "legal consequences of EPF non-compliance" and preserving your organization's reputation.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a0062e7b6225cc312a_ui-ai-team-trends.webp",
      alt: "UI of AI team trends",
    },
  ],
};

export const epfDeskData = {
  title: "Streamlined Query Management System",
  largeCard: {
    title: "Guided Ticket Creation",
    desc: `Employees can easily log tickets for virtually all EPF issues. This includes common queries like "How to check EPF balance online," "How to activate UAN," "How to update EPF KYC," and "EPF withdrawal process."`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c253608b4895d67133ff5f_resource-ebook-how-to-build-hr-tech-stack.webp",
    tag: "ebook",
  },
  sideCards: [
    {
      title:
        "Each submitted ticket comes with a clear, live progress bar, transparent status updates, and estimated resolution timelines.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/655563b2ae20072b28778fee_65368988612a3c87e7bdae3e_360-review-questions.webp",
      tag: "Real-time Progress Tracking",
    },
    {
      title:
        "Employees receive proactive updates via email or SMS as their ticket progresses through the resolution stages",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c27b7d012add414872b674_resource-ebook-hr-guide-performance-management.webp",
      tag: "Automated Notifications",
    },
    {
      title: `Our system handles a vast range of concerns, from simple queries (e.g.,"How to download EPF passbook") to more complex EPF transfer cases and pension-related inquiries."`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Comprehensive Issue Coverage",
    },
  ],
};

export const epfoGridData = {
  title: "Complete HR & Finance Team Liberation",
  largeCard: {
    title: "Liberating HR & Finance Teams from Compliance Overload",
    desc: `Our platform handles end-to-end compliance and employee support, enabling your internal teams to focus on strategic priorities instead of repetitive administrative tasks.`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c253608b4895d67133ff5f_resource-ebook-how-to-build-hr-tech-stack.webp", // Replace with a relevant image
    tag: "HR Automation",
  },
  sideCards: [
    {
      title:
        "Up to 90% reduction in compliance-related admin tasks: freeing up hours spent on manual work, resulting in measurable productivity gains.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/655563b2ae20072b28778fee_65368988612a3c87e7bdae3e_360-review-questions.webp",
      tag: "Productivity Boost",
    },
    {
      title:
        "80% faster onboarding process: our team handles EPF complexities so HR can onboard new hires swiftly without delays.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c27b7d012add414872b674_resource-ebook-hr-guide-performance-management.webp",
      tag: "Fast Onboarding",
    },
    {
      title:
        "100% elimination of penalty & interest risks: Never worry about 'what if employer does not deposit PF' — we ensure flawless and timely compliance.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Penalty-Free Compliance",
    },
    {
      title:
        "75% reduction in employee queries to HR: EPF Desk enables self-service, reducing the burden on HR teams.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Query Deflection",
    },
  ],
};

export const epfDeskPlustabs = {
  title: "Expert-Led Resolution & Direct EPFO Liaison",
  tabs: [
    {
      id: "analytics",
      label: "Dedicated EPF Specialists",
      icon: <MdBarChart size={20} />,
      description:
        "See how Analytics connects with the rest of the Lattice platform.",
      content: (
        <>
          <img
            src="/images/64c26163c9caf11765b87eb4_plus-image-grow-analytics.webp"
            alt="Analytics"
            className="w-full rounded-xl mb-4"
          />
          <p>
            Our team comprises seasoned professionals who take full ownership of
            each employee query, specializing in accurate resolutions for issues
            like "Why is my EPF passbook not updated?" or "What to do if
            employer is not depositing PF?"
          </p>
        </>
      ),
      link: "/analytics",
    },
    {
      id: "performance",
      label: "Direct EPFO Communication Channels",
      icon: <MdLoop size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162737387d05fad07da_plus-image-analytics-performance-p-800.webp"
            alt="Performance"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We utilize established channels for faster resolution and
            documentation exchange with the Employees' Provident Fund
            Organisation (EPFO), eliminating the need for your HR to act as a
            middleman.
          </p>
        </>
      ),
      link: "/performance",
    },
    {
      id: "engagement",
      label: "Complex Case Management",
      icon: <MdFavorite size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162748ef5824d744011_plus-image-engagement-analytics.webp"
            alt="Engagement"
            className="w-full rounded-xl mb-4"
          />
          <p>
            Our expertise extends to intricate cases such as inter-company EPF
            transfers, legacy account merging, pension payment processing, and
            resolving discrepancies in contribution claims.
          </p>
        </>
      ),
      link: "/engagement",
    },
    {
      id: "compensation",
      label: "Complete Resolution Lifecycle",
      icon: <MdAttachMoney size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162ef42896c99021d82_plus-image-compensation-analytics.webp"
            alt="Compensation"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We manage the entire resolution journey, from the initial query
            submission to final settlement or problem closure, including
            necessary employer attestation for EPF transfer claims and approval
            of online EPF claims from an employer's perspective.
          </p>
        </>
      ),
      link: "/compensation",
    },
  ],
};

export const epfDeskMiddletabsData = {
  title: "Nationwide On-Ground Support for Unresolved Cases",
  tabs: [
    {
      id: "library",
      title: "Local Teams Across Major Metros",
      desc: "Unlike purely online services, our on-ground teams in key Indian cities (including Delhi NCR, Mumbai, Bengaluru, Chennai, and Hyderabad, Pune) provide invaluable physical support where it matters most.",
      icon: <FaBook />,
    },
    {
      id: "university",
      title: "In-Person EPFO Office Representation",
      desc: `For complex or unresolved cases that mandate direct interaction, submission of physical documents, or follow-ups at regional EPFO offices, our local teams ensure swift and effective resolution. This addresses queries related to "EPFO portal usage" and "employer's guide to EPFiGMS."`,
      icon: <FaGraduationCap />,
    },
    {
      id: "resources",
      title: "Physical Verification Assistance",
      desc: "When required by EPFO processes (e.g., for certain withdrawal claims or death claim processing), our teams provide on-ground assistance for physical verification, bridging any logistical gaps.",
      icon: <FaUsers />,
    },
    {
      id: "events",
      title: "Guaranteed Case Closure",
      desc: "This unique capability ensures even the most challenging or bureaucratic EPF issues are resolved efficiently, guaranteeing 100% issue resolution regardless of geographical or administrative complexities.",
      icon: <FaCalendarAlt />,
    },
  ],
};

export const epfoMiddletabsData = {
  title: "Implementation & Support",
  tabs: [
    {
      id: "library",
      title: "Initial Consultation",
      desc: "A brief session to understand your current EPF setup and specific needs.",
      icon: <FaBook />,
    },
    {
      id: "university",
      title: "Secure Portal Integration",
      desc: ` Our team manages the secure integration with relevant EPFO portals and gathers necessary access details.`,
      icon: <FaGraduationCap />,
    },
    {
      id: "resources",
      title: "Brief Team Orientation",
      desc: " A quick, efficient orientation session with your relevant staff to ensure a smooth handover.",
      icon: <FaUsers />,
    },
    {
      id: "events",
      title: "Full Service Activation",
      desc: "Your EPF compliance is fully operational, seamlessly managed by EPFDesk.com experts within 24 hours.",
      icon: <FaCalendarAlt />,
    },
  ],
};

export const epfoPlustabs = {
  title: "Dedicated Support Team",
  tabs: [
    {
      id: "analytics",
      label: "Dedicated Client Manager",
      icon: <MdBarChart size={20} />,
      description:
        "See how Analytics connects with the rest of the Lattice platform.",
      content: (
        <>
          <img
            src="/images/64c26163c9caf11765b87eb4_plus-image-grow-analytics.webp"
            alt="Analytics"
            className="w-full rounded-xl mb-4"
          />
          <p>
            A single point of contact who understands your specific account and
            compliance needs, ensuring personalized service.
          </p>
        </>
      ),
      link: "/analytics",
    },
    {
      id: "performance",
      label: "Monthly Compliance Reports & Insights",
      icon: <MdLoop size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162737387d05fad07da_plus-image-analytics-performance-p-800.webp"
            alt="Performance"
            className="w-full rounded-xl mb-4"
          />
          <p>Regular updates on your compliance status and performance.</p>
        </>
      ),
      link: "/performance",
    },
    {
      id: "engagement",
      label: "Immediate Resolution of EPF-related Queries",
      icon: <MdFavorite size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162748ef5824d744011_plus-image-engagement-analytics.webp"
            alt="Engagement"
            className="w-full rounded-xl mb-4"
          />
          <p>
            Your dedicated manager ensures any questions or issues are addressed
            promptly.
          </p>
        </>
      ),
      link: "/engagement",
    },
    {
      id: "compensation",
      label: "Proactive Communication on Regulatory Changes",
      icon: <MdAttachMoney size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162ef42896c99021d82_plus-image-compensation-analytics.webp"
            alt="Compensation"
            className="w-full rounded-xl mb-4"
          />
          <p>
            You're informed of relevant updates, ensuring continuous compliance.
          </p>
        </>
      ),
      link: "/compensation",
    },
  ],
};

export const slidesEsic = {
  sectionTitle: "Comprehensive ESIC Compliance Management Services",
  sectionSubtitle: "ESIC Registration & Applicability Management",
  items: [
    {
      title: "Complete ESIC registration process",
      desc: `We guide you through and meticulously handle all steps for "ESIC registration process online India," including online application, documentation, and swift ESIC code allocation.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a5a96b10c0ffd35b7a_ui-ai-performance-summaries.webp",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "Precise applicability assessment",
      desc: `We accurately determine "Who is eligible for ESIC registration?" based on employee count (e.g., 10+ or 20+ depending on state) and wage limits, ensuring correct and ongoing coverage without a hitch.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a04e4e2f6b5e249476_ui-ai-calibration.webp",
      alt: "UI of AI calibration",
    },
    {
      title: "Rapid average response time (e.g., 2-4 hours) for client queries",
      desc: "Ensuring your concerns are addressed promptly by dedicated specialists, improving your operational efficiency.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a1658dd9bc56ab8ab6_ui-ai-writing-assist.webp",
      alt: "UI of AI writing assistant",
    },
    {
      title: "Required documentation compilation",
      desc: `We assist in gathering and submitting all "documents required for ESIC registration," streamlining the initial setup within statutory time limits.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a0062e7b6225cc312a_ui-ai-team-trends.webp",
      alt: "UI of AI team trends",
    },
    {
      title: "Coverage continuity management",
      desc: `We advise on crucial aspects like the "once covered, always covered" rule, ensuring compliance even if the number of employees temporarily goes below the minimum limit.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a0062e7b6225cc312a_ui-ai-team-trends.webp",
      alt: "UI of AI team trends",
    },
  ],
};

export const esicPlustabs = {
  title: "Accurate ESIC Contribution Calculation & Payment",
  tabs: [
    {
      id: "analytics",
      label: "Precision contribution calculation",
      icon: <MdBarChart size={20} />,
      description:
        "See how Analytics connects with the rest of the Lattice platform.",
      content: (
        <>
          <img
            src="/images/64c26163c9caf11765b87eb4_plus-image-grow-analytics.webp"
            alt="Analytics"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We perform accurate "ESIC calculation on salary" using the "current
            ESIC contribution rate employer and employee" (e.g., Employer:
            3.25%, Employee: 0.75%) and the "ESIC wage ceiling current" (₹21,000
            for general employees, ₹25,000 for persons with disabilities).
          </p>
        </>
      ),
      link: "/analytics",
    },
    {
      id: "performance",
      label: "Correct wage component inclusion",
      icon: <MdLoop size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162737387d05fad07da_plus-image-analytics-performance-p-800.webp"
            alt="Performance"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We meticulously identify and include all applicable "salary
            components for ESIC wages" (Basic, DA, HRA, CCA, production
            incentive, night shift, meal/food allowance), ensuring "ESIC is
            deducted on gross salary, not just basic."
          </p>
        </>
      ),
      link: "/performance",
    },
    {
      id: "engagement",
      label: "Exemption management",
      icon: <MdFavorite size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162748ef5824d744011_plus-image-engagement-analytics.webp"
            alt="Engagement"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We accurately identify and manage "exemptions from ESIC
            contributions for low-wage employees" (e.g., daily wage up to ₹176),
            optimizing your deductions while remaining compliant.
          </p>
        </>
      ),
      link: "/engagement",
    },
    {
      id: "compensation",
      label: "Timely payment facilitation",
      icon: <MdAttachMoney size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162ef42896c99021d82_plus-image-compensation-analytics.webp"
            alt="Compensation"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We generate accurate "ESIC challan online" and support "how to pay
            ESIC contribution online," guaranteeing deposits are made well
            before the "Monthly ESIC return filing deadline"
          </p>
        </>
      ),
      link: "/compensation",
    },
  ],
};

export const esicGridData = {
  title: "Seamless Monthly Filings & Employee Data Management",
  largeCard: {
    title: "Monthly ESIC return filing",
    desc: ` We manage the entire "ESIC return filing process" with 100% accuracy and punctuality before the 15th of the following month deadline.`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c253608b4895d67133ff5f_resource-ebook-how-to-build-hr-tech-stack.webp", // Replace with a relevant image
    tag: "HR Automation",
  },
  sideCards: [
    {
      title: `We handle "how to update employee details in ESIC portal by employer," ensuring accurate records for your workforce, including "generating ESIC Code number" (17-digit ID) and managing "ESIC login for insured person" access.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/655563b2ae20072b28778fee_65368988612a3c87e7bdae3e_360-review-questions.webp",
      tag: "Employee data updates & IP Management",
    },
    {
      title: `We expertly manage all interactions on the "ESIC employer login portal," ensuring accurate data reflection, complete submissions, and efficient grievance management (like EPFiGMS)`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c27b7d012add414872b674_resource-ebook-hr-guide-performance-management.webp",
      tag: "Employer Portal Navigation",
    },
    {
      title: `We meticulously track "ESIC Contribution Period vs. Cash Benefit Period" to maintain continuous coverage for your employees, even if salaries briefly exceed the ceiling.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Contribution Period Tracking",
    },
  ],
};

export const esicMiddletabsData = {
  title: "Proactive Regulatory Updates & Risk Management",
  tabs: [
    {
      id: "library",
      title: "Continuous regulatory monitoring",
      desc: `Our dedicated experts meticulously monitor the latest "ESIC Act amendments," "ESIC circulars," and "ESIC contribution rate changes."`,
      icon: <FaBook />,
    },
    {
      id: "university",
      title: "Impact analysis & strategic advice",
      desc: `We translate complex legal updates into clear, actionable business insights tailored to your operations, ensuring you understand the "consequences of ESIC non-compliance.`,
      icon: <FaGraduationCap />,
    },
    {
      id: "resources",
      title: "Penalty prevention strategies",
      desc: `We implement proactive measures to safeguard against "what happens if employer does not pay ESIC contribution?" and other common non-compliance scenarios.`,
      icon: <FaUsers />,
    },
    {
      id: "events",
      title: "Audit readiness support",
      desc: " We provide complete assistance for any ESIC inspections or audits, ensuring you are fully prepared with complete documentation and expert representation.",
      icon: <FaCalendarAlt />,
    },
  ],
};

export const esciCards = [
  {
    title: "Guaranteeing ESIC Benefits Access for Your Workforce",
    description: "Pay employees and contractors in a few clicks.",
    image: "/images/67db42e6490940b072a7aeac_Run Payroll-p-500.webp",
    color: {
      bg: "bg-rose-100",
      border: "border-rose-200",
      raw: "#ffe4e6",
      stroke: "#ffe4e6",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Guaranteeing ESIC Benefits Access for Your Workforce
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We ensure accurate employee registration and contribution tracking,
            enabling seamless access to ESIC medical care, cash benefits, and
            support services. This includes eligibility for family medical
            treatment, sickness and maternity benefits, disablement and
            unemployment allowances, dependent and funeral benefits, as well as
            tools like the E-Pehchan card and online registration verification.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67db49b01109f51c7bb212c2_a9ba4cd2bfdef51480350a75b0569f4e_feat-image-payroll-unified-data.webp"
          alt="Unified Data Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Proven ESIC Expertise & Zero-Risk Compliance",
    description: "Auto-calculate & file all payroll taxes.",
    image: "/images/67db431bc50e51569725f6a0_Tax compliance.webp",
    color: {
      bg: "bg-yellow-100",
      border: "border-yellow-200",
      raw: "#fef9c3",
      stroke: "#fef9c3",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Proven ESIC Expertise & Zero-Risk Compliance
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We deliver 99.9% accuracy in ESIC filings, zero audit failures over
            5+ years, rapid 2–4 hour response times for client queries, and 100%
            on-time submissions—eliminating financial risks, penalties, and
            compliance-related legal exposure.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc43c71f563ef421a38eaa_a44c8c1ae5b22c26ebccb00e1b2b04f0_feat-image-payroll-tax-compliance.webp"
          alt="Tax Compliance Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Complete HR & Finance Team Liberation",
    description: "Reduce HR admin burden.",
    image: "/images/67db434ac50e515697262a2b_Employee self service-p-500.webp",
    color: {
      bg: "bg-blue-100",
      border: "border-blue-200",
      raw: "#dbeafe",
      stroke: "#dbeafe",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Complete HR & Finance Team Liberation
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Achieve up to 80% reduction in ESIC-related admin workload,
            eliminate penalties and legal risks, and redirect resources toward
            strategic initiatives—boosting efficiency, financial health, and
            business growth.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e5669a66ad33bbfbabf4a3_feat-image-employee-self-service.webp"
          alt="Employee Self Service Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Rapid Implementation & Ongoing Support",
    description: "Track, approve, and sync hours to payroll.",
    image: "/images/67db437a17d3aaef94ed34ad_Time tracking.webp",
    color: {
      bg: "bg-green-100",
      border: "border-green-200",
      raw: "#dcfce7",
      stroke: "#dcfce7",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Rapid Implementation & Ongoing Support
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            From initial consultation to full service activation, we ensure
            secure data integration, ESIC portal setup, and quick team
            orientation—enabling complete ESIC compliance within 24–48 hours.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e2b51dfb00d11fe21ace11_feat-image-time-tracking.webp"
          alt="Time Tracking Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "End-to-End ESIC Compliance, Accuracy & Employee Empowerment",
    description: "Connect Payroll to your favorite third-party apps.",
    image: "/images/67db439ff5e0bea132971dd4_Integrations.webp",
    color: {
      bg: "bg-purple-100",
      border: "border-purple-200",
      raw: "#f3e8ff",
      stroke: "#f3e8ff",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            End-to-End ESIC Compliance, Accuracy & Employee Empowerment
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We ensure complete ESIC compliance with 99.9% filing accuracy, zero
            audit failures, and 100% deadline adherence—eliminating penalties
            and legal risks. Our rapid response support, seamless onboarding,
            and secure data integration streamline operations by reducing admin
            workload up to 80%. From enabling access to medical and cash
            benefits to safeguarding your reputation and freeing up HR
            resources, EPFDesk delivers expert-led, full-service ESIC management
            within 24–48 hours.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc42fb273047112e42863a_cc3ed45b7dc81f77e5b48e5f03f5f3e1_feat-image-payroll-integrations.webp"
          alt="Integrations Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
];

export const lwfCards = [
  {
    title: "Facilitating Employee Access to LWF Welfare Schemes",
    description: "Pay employees and contractors in a few clicks.",
    image: "/images/67db42e6490940b072a7aeac_Run Payroll-p-500.webp",
    color: {
      bg: "bg-rose-100",
      border: "border-rose-200",
      raw: "#ffe4e6",
      stroke: "#ffe4e6",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Facilitating Employee Access to LWF Welfare Schemes
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We facilitate seamless access to Labour Welfare Fund (LWF)
            benefits—including medical care, educational scholarships, housing
            support, skill development programs, and social security
            schemes—ensuring worker well-being and family upliftment through
            state-backed initiatives.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67db49b01109f51c7bb212c2_a9ba4cd2bfdef51480350a75b0569f4e_feat-image-payroll-unified-data.webp"
          alt="Unified Data Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Why Companies Trust LWF Compliance with EPFDesk.com",
    description: "Auto-calculate & file all payroll taxes.",
    image: "/images/67db431bc50e51569725f6a0_Tax compliance.webp",
    color: {
      bg: "bg-yellow-100",
      border: "border-yellow-200",
      raw: "#fef9c3",
      stroke: "#fef9c3",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Why Companies Trust LWF Compliance with EPFDesk.com
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            With 99.9% accuracy in LWF filings, zero audit failures in 5+ years,
            and 100% on-time submissions, we eliminate penalties and legal risks
            across state regulations. Our expert team ensures rapid 2–4 hour
            response times, delivering reliable, state-compliant LWF management.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc43c71f563ef421a38eaa_a44c8c1ae5b22c26ebccb00e1b2b04f0_feat-image-payroll-tax-compliance.webp"
          alt="Tax Compliance Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Go Live with LWF Compliance in 24-48 Hours (Multi-State Ready)",
    description: "Reduce HR admin burden.",
    image: "/images/67db434ac50e515697262a2b_Employee self service-p-500.webp",
    color: {
      bg: "bg-blue-100",
      border: "border-blue-200",
      raw: "#dbeafe",
      stroke: "#dbeafe",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Go Live with LWF Compliance in 24-48 Hours (Multi-State Ready)
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            From initial assessment to full portal setup, we ensure secure data
            integration, multi-state board linkage, and quick HR
            orientation—enabling smooth, compliant LWF operations tailored to
            your organization’s footprint.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e5669a66ad33bbfbabf4a3_feat-image-employee-self-service.webp"
          alt="Employee Self Service Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Key Employer LWF Concerns We Resolve:",
    description: "Track, approve, and sync hours to payroll.",
    image: "/images/67db437a17d3aaef94ed34ad_Time tracking.webp",
    color: {
      bg: "bg-green-100",
      border: "border-green-200",
      raw: "#dcfce7",
      stroke: "#dcfce7",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Key Employer LWF Concerns We Resolve:
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We handle everything from determining LWF applicability and
            registration to accurate contribution calculations, timely filings,
            and remittance. Our expert team ensures audit readiness, digital
            compliance, and seamless coordination across multiple state-specific
            LWF regulations.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e2b51dfb00d11fe21ace11_feat-image-time-tracking.webp"
          alt="Time Tracking Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title:
      "Employee LWF Benefits Support We Ensure (by facilitating eligibility)",
    description: "Connect Payroll to your favorite third-party apps.",
    image: "/images/67db439ff5e0bea132971dd4_Integrations.webp",
    color: {
      bg: "bg-purple-100",
      border: "border-purple-200",
      raw: "#f3e8ff",
      stroke: "#f3e8ff",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Employee LWF Benefits Support We Ensure (by facilitating
            eligibility)
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Employees gain access to medical care, educational scholarships,
            emergency financial aid, marriage and funeral support, as well as
            opportunities for skill development and recreational
            activities—ensuring holistic well-being through Labour Welfare Fund
            provisions.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc42fb273047112e42863a_cc3ed45b7dc81f77e5b48e5f03f5f3e1_feat-image-payroll-integrations.webp"
          alt="Integrations Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
];

export const slideLWF = {
  sectionTitle: "Comprehensive Labour Welfare Fund Compliance Services",
  sectionSubtitle: "LWF Applicability & Registration Across India",
  items: [
    {
      title: "Precise applicability assessment",
      desc: ` We accurately determine "LWF applicability rules India" for your establishment in each state, considering factors like employee thresholds (which vary significantly by state) and industry type`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a5a96b10c0ffd35b7a_ui-ai-performance-summaries.webp",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "State-specific registration management",
      desc: `We guide you through and handle all steps for LWF registration with the respective State Labour Welfare Boards, ensuring timely and correct setup.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a04e4e2f6b5e249476_ui-ai-calibration.webp",
      alt: "UI of AI calibration",
    },
    {
      title: "Multi-state coverage analysis",
      desc: `We manage the complexities for companies with branches in various states, ensuring compliance where "LWF is mandatory" and where it is "not applicable" (e.g., states like Uttar Pradesh, Bihar which may not have LWF)`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a1658dd9bc56ab8ab6_ui-ai-writing-assist.webp",
      alt: "UI of AI writing assistant",
    },
    {
      title: "Required documentation compilation",
      desc: `We assist in gathering and submitting all necessary documents for LWF registration and ongoing compliance in each state.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a0062e7b6225cc312a_ui-ai-team-trends.webp",
      alt: "UI of AI team trends",
    },
  ],
};

export const lwfGridData = {
  title: "Accurate LWF Contribution Calculation & Payment",
  largeCard: {
    title: "Precision Contribution Calculation",
    desc: `We accurately determine "how much is the LWF contribution" for both employer and employee shares, navigating varying "LWF contribution rates by state" (e.g., Maharashtra, Karnataka, Delhi)`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c253608b4895d67133ff5f_resource-ebook-how-to-build-hr-tech-stack.webp", // Replace with a relevant image
    tag: "HR Automation",
  },
  sideCards: [
    {
      title: `We precisely identify "what salary components are included in LWF wages" and whether "LWF deduction is on gross salary or basic," aligning with each state's specific LWF Act.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/655563b2ae20072b28778fee_65368988612a3c87e7bdae3e_360-review-questions.webp",
      tag: "State-specific Wage Inclusion",
    },
    {
      title: `We track and ensure correct deduction based on the state's mandate – whether monthly, half-yearly, or annually, clarifying queries like "What is the frequency of LWF deduction?"`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c27b7d012add414872b674_resource-ebook-hr-guide-performance-management.webp",
      tag: "Deduction Frequency Management",
    },
    {
      title: ` We generate accurate LWF challans and support "online LWF payments" where available, ensuring deposits are made well before the varied "LWF due dates" for each state.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Timely Payment Facilitation",
    },
  ],
};

export const lwfPlustabs = {
  title: "Seamless LWF Returns & Data Management",
  tabs: [
    {
      id: "analytics",
      label: "State-Specific Return Filing",
      icon: <MdBarChart size={20} />,
      description:
        "See how Analytics connects with the rest of the Lattice platform.",
      content: (
        <>
          <img
            src="/images/64c26163c9caf11765b87eb4_plus-image-grow-analytics.webp"
            alt="Analytics"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We manage the entire "LWF return filing process" using the correct
            "LWF forms" (e.g., Form A, Form F, Form A-1, which vary by state)
            with accuracy and punctuality as per each state's deadline.
          </p>
        </>
      ),
      link: "/analytics",
    },
    {
      id: "performance",
      label: "Employee Data Management",
      icon: <MdLoop size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162737387d05fad07da_plus-image-analytics-performance-p-800.webp"
            alt="Performance"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We ensure all employee data relevant for LWF contributions is
            accurately maintained and updated, handling nuances like wage
            thresholds and employee categories for applicability in each state.
          </p>
        </>
      ),
      link: "/performance",
    },
    {
      id: "engagement",
      label: "Digital Record Keeping",
      icon: <MdFavorite size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162748ef5824d744011_plus-image-engagement-analytics.webp"
            alt="Engagement"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We maintain meticulous digital records of all LWF challans, payment
            receipts, and filed returns, creating a robust audit trail for
            future reference.
          </p>
        </>
      ),
      link: "/engagement",
    },
    {
      id: "compensation",
      label: "Online Portal Navigation",
      icon: <MdAttachMoney size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162ef42896c99021d82_plus-image-compensation-analytics.webp"
            alt="Compensation"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We expertly manage interactions with various State Labour Welfare
            Board online portals, ensuring accurate data reflection and complete
            submissions across diverse systems.
          </p>
        </>
      ),
      link: "/compensation",
    },
  ],
};

export const lwfMiddletabsData = {
  title: "Proactive LWF Regulatory Advisory & Risk Mitigation",
  tabs: [
    {
      id: "library",
      title: "Continuous Regulatory Monitoring",
      desc: `Our dedicated experts continuously monitor the highly fragmented "LWF Act states India" for any new amendments, circulars, or rate changes from each respective State Labour Welfare Board.`,
      icon: <FaBook />,
    },
    {
      id: "university",
      title: "Impact Analysis & Strategic Advice",
      desc: `We translate complex, state-specific legal updates into clear, actionable insights for your business operations, ensuring you understand the implications and "penalties for noncompliance with LWF.`,
      icon: <FaGraduationCap />,
    },
    {
      id: "resources",
      title: "Penalty Prevention Strategies",
      desc: `We implement proactive measures to safeguard against "what happens if employer does not pay ESIC contribution?" and other common non-compliance scenarios.`,
      icon: <FaUsers />,
    },
    {
      id: "events",
      title: "Audit Readiness Support",
      desc: " We provide complete assistance for any LWF inspections or audits, ensuring you are fully prepared with complete documentation and expert guidance.",
      icon: <FaCalendarAlt />,
    },
  ],
};

export const pfCards = [
  {
    title: "Unmatched PT Expertise & Zero-Risk Compliance Across States",
    description: "Pay employees and contractors in a few clicks.",
    image: "/images/67db42e6490940b072a7aeac_Run Payroll-p-500.webp",
    color: {
      bg: "bg-rose-100",
      border: "border-rose-200",
      raw: "#ffe4e6",
      stroke: "#ffe4e6",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Unmatched PT Expertise & Zero-Risk Compliance Across States
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            With 99.9% accuracy, zero audit failures over 5+ years, and 100%
            on-time PT filings, we eliminate penalties and audit risks across
            state jurisdictions. Our experts ensure fast 2–4 hour response times
            and seamless, compliant Professional Tax management.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67db49b01109f51c7bb212c2_a9ba4cd2bfdef51480350a75b0569f4e_feat-image-payroll-unified-data.webp"
          alt="Unified Data Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Complete HR & Finance Team Liberation",
    description: "Auto-calculate & file all payroll taxes.",
    image: "/images/67db431bc50e51569725f6a0_Tax compliance.webp",
    color: {
      bg: "bg-yellow-100",
      border: "border-yellow-200",
      raw: "#fef9c3",
      stroke: "#fef9c3",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Complete HR & Finance Team Liberation
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We reduce admin workload by up to 85%, eliminate penalties and legal
            risks across states, and protect your brand’s compliance reputation.
            Our streamlined PT management enables HR and Finance teams to focus
            on strategic growth instead of navigating complex state tax systems.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc43c71f563ef421a38eaa_a44c8c1ae5b22c26ebccb00e1b2b04f0_feat-image-payroll-tax-compliance.webp"
          alt="Tax Compliance Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Go Live with PT Compliance in 24-48 Hours (Multi-State Ready)",
    description: "Reduce HR admin burden.",
    image: "/images/67db434ac50e515697262a2b_Employee self service-p-500.webp",
    color: {
      bg: "bg-blue-100",
      border: "border-blue-200",
      raw: "#dbeafe",
      stroke: "#dbeafe",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Go Live with PT Compliance in 24-48 Hours (Multi-State Ready)
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            From initial consultation to full service activation within 24–48
            hours, we handle secure data integration, multi-state tax portal
            setup, and HR/Finance team orientation—ensuring seamless, compliant
            Professional Tax operations from day one.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e5669a66ad33bbfbabf4a3_feat-image-employee-self-service.webp"
          alt="Employee Self Service Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Dedicated Ongoing Support for Continuous Multi-State Adherence",
    description: "Track, approve, and sync hours to payroll.",
    image: "/images/67db437a17d3aaef94ed34ad_Time tracking.webp",
    color: {
      bg: "bg-green-100",
      border: "border-green-200",
      raw: "#dcfce7",
      stroke: "#dcfce7",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Dedicated Ongoing Support for Continuous Multi-State Adherence
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Get a dedicated client manager, timely compliance reports, rapid
            query resolution, and proactive regulatory updates—ensuring smooth,
            transparent, and fully informed Professional Tax management across
            all operating states.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e2b51dfb00d11fe21ace11_feat-image-time-tracking.webp"
          alt="Time Tracking Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
  {
    title: "Key Employer PT Concerns We Resolve",
    description: "Connect Payroll to your favorite third-party apps.",
    image: "/images/67db439ff5e0bea132971dd4_Integrations.webp",
    color: {
      bg: "bg-purple-100",
      border: "border-purple-200",
      raw: "#f3e8ff",
      stroke: "#f3e8ff",
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Key Employer PT Concerns We Resolve
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            We handle end-to-end Professional Tax compliance—from applicability
            assessment and state-wise registration to accurate contribution
            calculation, timely filings, and digital remittance. Our expert team
            ensures audit readiness, eliminates risks, and manages multi-state
            compliance seamlessly across PTEC and PTRC requirements.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc42fb273047112e42863a_cc3ed45b7dc81f77e5b48e5f03f5f3e1_feat-image-payroll-integrations.webp"
          alt="Integrations Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    ),
  },
];

export const ptPlustabs = {
  title: "PT Applicability & Registration Across India",
  tabs: [
    {
      id: "analytics",
      label: "Precise applicability assessment",
      icon: <MdBarChart size={20} />,
      description:
        "See how Analytics connects with the rest of the Lattice platform.",
      content: (
        <>
          <img
            src="/images/64c26163c9caf11765b87eb4_plus-image-grow-analytics.webp"
            alt="Analytics"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We accurately determine "Is professional tax mandatory in all states
            in India?" and identify "Which states have professional tax in
            India" relevant to your business operations. We assess applicability
            based on employee count, income thresholds, and specific state laws
            (e.g., in Maharashtra, Karnataka, West Bengal, Gujarat, Tamil Nadu,
            Telangana, Kerala)
          </p>
        </>
      ),
      link: "/analytics",
    },
    {
      id: "performance",
      label: "State-specific registration management",
      icon: <MdLoop size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162737387d05fad07da_plus-image-analytics-performance-p-800.webp"
            alt="Performance"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We guide you through and handle all steps for the "Professional tax
            registration online process," ensuring you obtain the correct
            Professional Tax Registration Certificate (PTRC) for employers or
            Professional Tax Enrollment Certificate (PTEC)for the establishment,
            within statutory timelines.
          </p>
        </>
      ),
      link: "/performance",
    },
    {
      id: "engagement",
      label: "Required documentation compilation",
      icon: <MdFavorite size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162748ef5824d744011_plus-image-engagement-analytics.webp"
            alt="Engagement"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We assist in gathering and submitting all necessary "documents
            required for professional tax registration," streamlining the
            initial setup for each applicable state.
          </p>
        </>
      ),
      link: "/engagement",
    },
    {
      id: "compensation",
      label: "Coverage analysis for evolving operations",
      icon: <MdAttachMoney size={20} />,
      content: (
        <>
          <img
            src="/images/64c26162ef42896c99021d82_plus-image-compensation-analytics.webp"
            alt="Compensation"
            className="w-full rounded-xl mb-4"
          />
          <p>
            We provide insights into "Professional tax enrollment certificate
            (PTEC) vs registration certificate (PTRC)" and manage compliance as
            your workforce or business locations change.
          </p>
        </>
      ),
      link: "/compensation",
    },
  ],
};

export const slidesPt = {
  sectionTitle: " Comprehensive Professional Tax Compliance Services",
  sectionSubtitle: "Accurate PT Contribution Calculation & Payment",
  items: [
    {
      title: "Precision Contribution Calculation",
      desc: `We accurately determine "how to calculate professional tax on salary" for both employer and employee shares, meticulously applying varying "Professional tax slab rates by state" (e.g., "Maharashtra professional tax slab," "Karnataka PT slab rates").`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a5a96b10c0ffd35b7a_ui-ai-performance-summaries.webp",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "Correct Wage Component Inclusion",
      desc: `We precisely identify whether "professional tax is deducted from gross salary or basic salary," aligning with each state's specific PT Act and ensuring accurate calculation against the "professional tax exemption limit" (minimum salary threshold).`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a04e4e2f6b5e249476_ui-ai-calibration.webp",
      alt: "UI of AI calibration",
    },
    {
      title: "Deduction Frequency Management",
      desc: "We track and ensure correct deduction based on the state's mandate, whether monthly, half-yearly, or annually, clarifying complex scenarios like higher February deductions in Maharashtra.",
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a1658dd9bc56ab8ab6_ui-ai-writing-assist.webp",
      alt: "UI of AI writing assistant",
    },
    {
      title: "Timely Payment Facilitation",
      desc: ` We generate accurate PT challans and support "how to pay professional tax online," ensuring deposits are made well before the varied "Professional tax due dates by state" (e.g., 20th of succeeding month in Karnataka, 15th in Gujarat)`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/681e27a0062e7b6225cc312a_ui-ai-team-trends.webp",
      alt: "UI of AI team trends",
    },
  ],
};

export const ptGridData = {
  title: "Seamless PT Returns & Data Management",
  largeCard: {
    title: "State-Specific Return Filing",
    desc: `We manage the entire "Professional tax return filing online"process, using the correct "PT return forms by state" (e.g., Form III for Maharashtra) with 100% accuracy and punctuality as per each state's varied deadlines.`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c253608b4895d67133ff5f_resource-ebook-how-to-build-hr-tech-stack.webp", // Replace with a relevant image
    tag: "HR Automation",
  },
  sideCards: [
    {
      title: `We ensure all employee data relevant for PT contributions is accurately maintained and updated, handling nuances like wage thresholds and employee categories for applicability in each state.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/655563b2ae20072b28778fee_65368988612a3c87e7bdae3e_360-review-questions.webp",
      tag: "Employee Data Management",
    },
    {
      title: `We maintain meticulous digital records of all PT challans, payment receipts, and filed returns, creating a robust audit trail for future reference and addressing queries about "Professional tax challan download.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c27b7d012add414872b674_resource-ebook-hr-guide-performance-management.webp",
      tag: "Digital Record Keeping",
    },
    {
      title: `We expertly manage interactions with various State Tax Department online portals (the "professional tax login portal state wise"), ensuring accurate data reflection and complete submissions across diverse systems.`,
      img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
      tag: "Online Portal Navigation",
    },
  ],
};

export const ptMiddletabsData = {
  title: "Proactive PT Regulatory Advisory & Risk Mitigation",
  tabs: [
    {
      id: "library",
      title: "Continuous regulatory monitoring",
      desc: `Our dedicated experts continuously monitor the highly fragmented Professional Tax Acts for any new amendments, circulars, or rate changes from each respective state.`,
      icon: <FaBook />,
    },
    {
      id: "university",
      title: "Impact Analysis & Strategic Advice",
      desc: `We translate complex, state-specific legal updates into clear, actionable insights for your business operations, ensuring you understand the implications and "consequences of not paying professional tax`,
      icon: <FaGraduationCap />,
    },
    {
      id: "resources",
      title: "Penalty prevention strategies",
      desc: ` We implement proactive measures to safeguard against "penalty for late professional tax payment" (which can be daily fines or percentage of tax due) and other forms of "legal action for PT non-compliance.`,
      icon: <FaUsers />,
    },
    {
      id: "events",
      title: "Audit readiness support",
      desc: " We provide complete assistance for any Professional Tax inspections or audits, ensuring you are fully prepared with complete documentation and expert guidance.",
      icon: <FaCalendarAlt />,
    },
  ],
};

export const slidesLanding = {
  // sectionTitle: "Why Companies Trust EPFDesk.com",
  // sectionSubtitle: "Unmatched Expertise & Zero-Error Accuracy",
  items: [
    {
      title: "Monthly Compliance Panic",
      desc: `You're racing against monthly EPFO & ESIC deadlines, juggling multiple state-wise portals for EPF, ESIC, PT, and LWF instead of growing your business – turning you into a full-time compliance officer rather than the innovator you set out to be.`,
      img: "/images/Test_Compliance.png",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "Employee Frustration & HR Burnout",
      desc: "Unresolved EPF & ESIC Issues impact employee morale and productivit y, leading to increased HR Workload from queries.",
      img: "/images/Audit_Ready.png",
      alt: "UI of AI calibration",
    },
    {
      title: "Statutory penalties and audit risk.",
      desc: "Non-compliance with EPFO, ESIC, and other statutory requirements can trigger penalties up to 100% of dues, plus interest and potential audit risks that could cripple your business finances.",
      img: "/images/Audit_Ready.png",
      alt: "UI of AI writing assistant",
    },
    {
      title: "The Cost of Lost Productivity and Focus.",
      desc: `HR and Finance teams spend hours on employee linking, KYC approvals, and portal data entry instead of focusing on talent development, financial strategy, and business growth that actually drives revenue.`,
      img: "/images/Audit_Ready.png",
      alt: "UI of AI team trends",
    },
  ],
};

export const slidesStacking = {
  // sectionTitle: "Why Companies Trust EPFDesk.com",
  // sectionSubtitle: "Unmatched Expertise & Zero-Error Accuracy",
  items: [
    {
      title: "Hands-on Government Expertise",
      desc: `Our team combines deep portal expertise with on-ground EPFO office experience, legal knowledge, and proven audit handling capabilities. From complex registrations and deregistrations to navigating ever-changing compliance procedures, our experts have mastered every aspect of statutory compliance.`,
      img: "/images/Audit_Ready.png",
      alt: "UI of AI Performance Summaries",
    },
    {
      title: "Nationwide Operational Footprint",
      desc: "Our offices across major metros and presence in almost all states ensure seamless statutory compliance support wherever your business operates. Your employees can access social security benefits without geographical barriers.",
      img: "/images/Audit_Ready.png",
      alt: "UI of AI calibration",
    },
    {
      title: "Proactive Regulatory Guidance",
      desc: "We monitor every update in EPFO, ESIC, PT, and LWF laws. Our team ensures your company is compliant before new mandates take effect—no surprises, no gaps.",
      img: "/images/Audit_Ready.png",
      alt: "UI of AI writing assistant",
    },
    {
      title: "Dedicated Client Managers",
      desc: `Your assigned manager becomes an extension of your team, managing all compliance obligations proactively so you can focus on growth. No missed deadlines, no stress—just total confidence.`,
      img: "/images/Audit_Ready.png",
      alt: "UI of AI team trends",
    },
  ],
};

export const heroSlides = [
 
  {
    id: 1,
    gradientClass:
      "linear-gradient(to bottom right, #818cf8, #a855f7, #6b21a8)",
    icon: "🚀",
    title:
      "ESIC Compliance: Effortless Management for Employee Well-being & Business Protection",
    subtitle:
      "Master ESIC compliance with EPFDesk.com. We handle registration, accurate contributions, monthly filings & ensure all employee benefits. Avoid penalties, achieve 99.9% accuracy, and empower your HR.",
  },
  {
    id: 2,
    gradientClass:
      "linear-gradient(to bottom right, #f472b6, #ec4899, #ef4444)",
    icon: "🎯",
    title: "EPFDesk: Your Direct Line to Effortless EPF Solutions & Support",
    subtitle:
      "EPFDesk empowers your employees with instant EPF query resolution. Check balance, track claims, update KYC & more – all issues handled by our experts. Free your HR team from daily EPF queries.",
  },
  {
    id: 3,
    gradientClass:
      "linear-gradient(to bottom right, #60a5fa, #38bdf8, #22d3ee)",
    icon: "⚡",
    title: "Labour Welfare Fund (LWF) Compliance: Navigating State Nuances for Flawless Adherence",
    subtitle:
      "Master LWF compliance across India with EPFDesk.com. We handle state-specific calculations, filings & ensure timely adherence. Avoid penalties, achieve 100% accuracy for LWF.",
  },
  {
    id: 4,
    gradientClass:
      "linear-gradient(to bottom right, #4ade80, #2dd4bf, #34d399)",
    icon: "🌟",
    title: "Professional Tax Compliance: Master Multi-State Nuances, Ensure Flawless Adherence",
    subtitle:
      "Master Professional Tax compliance across India with EPFDesk.com. We handle state-specific calculations, precise filings, and ensure timely adherence. Avoid penalties, achieve 100% accuracy for PT.",
  },
  {
    id: 5,
    gradientClass:
      "linear-gradient(to bottom right, #fb7185, #f9a8d4, #facc15)",
    icon: "🤝",
    title: "Employer EPF Management: Streamline Your Compliance & Unleash HR's Potential",
    subtitle:
      "Master employer EPF compliance with EPFDesk.com. We automate challans, manage filings & mitigate risks, freeing your HR & Finance teams for strategic growth. Expert-led solutions for Indian businesses.",
  },
  {
    id: 6,
    gradientClass:
      "linear-gradient(to bottom right, #a5f3fc, #f9a8d4, #fda4af)",
    icon: "👁️",
    title: "ENVISION",
    subtitle:
      "See the bigger picture and create solutions that make a meaningful impact on the world",
  },
];
