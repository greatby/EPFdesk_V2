import {
  CalendarDaysIcon,
  ScaleIcon,
  PhoneIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const challenges = [
  {
    icon: <CalendarDaysIcon className="w-8 h-8 text-blue-600" />,
    title: "Monthly Filing Deadlines",
    description:
      "Constantly missing EPFO deadlines leading to penalties and legal notices. Last-minute scrambles every month.",
  },
  {
    icon: <ScaleIcon className="w-8 h-8 text-blue-600" />,
    title: "Complex Compliance Rules",
    description:
      "Ever-changing EPF, ESIC, PT rules are impossible to track. One mistake can cost thousands in penalties.",
  },
  {
    icon: <PhoneIcon className="w-8 h-8 text-blue-600" />,
    title: "Employee Query Overload",
    description:
      "Hundreds of employee calls about PF balance, withdrawals, transfers eating up your productive time.",
  },
  {
    icon: <PencilSquareIcon className="w-8 h-8 text-blue-600" />,
    title: "Manual Data Entry Errors",
    description:
      "Salary changes, new joiners, exits – manual entries lead to costly mistakes and audit issues.",
  },
];

const HrChallenges = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          HR Challenges We Solve
        </h2>
        <p className="text-gray-600 text-lg text-center mt-4 max-w-2xl mx-auto">
          Every HR department faces these compliance nightmares. You're not alone.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-indigo-50 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HrChallenges;
