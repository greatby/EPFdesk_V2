import {
  CalendarDaysIcon,
  ScaleIcon,
  PhoneIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const challenges = [
  {
    icon: <CalendarDaysIcon className="w-8 h-8 text-blue-600" />,
    title: "Monthly Compliance Panic",
    description:
      "You're racing against monthly EPFO & ESIC deadlines, juggling multiple state-wise portals for EPF, ESIC, PT, and LWF instead of growing your business – turning you into a full-time compliance officer rather than the innovator you set out to be.",
  },
  {
    icon: <ScaleIcon className="w-8 h-8 text-blue-600" />,
    title: "Employee Frustration & HR Burnout",
    description:
      "Unresolved EPF & ESIC Issues impact employee morale and productivit y, leading to increased HR Workload from queries.",
  },
  {
    icon: <PhoneIcon className="w-8 h-8 text-blue-600" />,
    title: "Statutory penalties and audit risk.",
    description:
      "Non-compliance with EPFO, ESIC, and other statutory requirements can trigger penalties up to 100% of dues, plus interest and potential audit risks that could cripple your business finances.",
  },
  {
    icon: <PencilSquareIcon className="w-8 h-8 text-blue-600" />,
    title: "The Cost of Lost Productivity and Focus.",
    description:
      "HR and Finance teams spend hours on employee linking, KYC approvals, and portal data entry instead of focusing on talent development, financial strategy, and business growth that actually drives revenue.",
  },
];

const HrChallenges = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Stuck in the Maze, We’ll guide you out.
        </h2>
        <p className="text-gray-600 text-lg text-center mt-4 max-w-2xl mx-auto">
          Every HR department faces these compliance nightmares. You're not
          alone.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-indigo-50 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HrChallenges;
