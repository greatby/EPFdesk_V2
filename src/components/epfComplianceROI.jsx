import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

const monthlyTasks = [
  "ECR generation and validation",
  "Contribution calculation verification",
  "Employee addition/deletion processing",
  "Salary revision updates",
  "Monthly return filing",
  "Payment reconciliation",
];

const annualTasks = [
  "Annual return preparation",
  "Interest reconciliation",
  "Compliance certificate renewal",
  "Audit trail maintenance",
  "Regulatory updates implementation",
];

const AnimatedCounter = ({ from = 0, to = 0, suffix = "" }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 1.6,
      ease: "easeOut",
    });

    const unsubscribe = rounded.on("change", (latest) => {
      setDisplay(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [to]);

  return (
    <span className="text-green-700 font-bold text-xl">
      {display.toLocaleString()} {suffix}
    </span>
  );
};

export default function EPFComplianceROI() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Column: Checklists */}
      <div>
        <h2 className="text-4xl font-bold mb-8 text-gray-900">
          EPF Compliance Made Simple
        </h2>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Monthly Tasks We Handle:
          </h3>
          <ul className="space-y-3 text-lg text-gray-700">
            {monthlyTasks.map((task, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Annual Tasks We Handle:
          </h3>
          <ul className="space-y-3 text-lg text-gray-700">
            {annualTasks.map((task, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column: ROI Box */}
      <div className="bg-gray-50 p-10 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          🧮 Calculate Your Savings
        </h2>

        <div className="space-y-10 text-lg text-gray-800">
          <div>
            <h4 className="font-semibold text-xl mb-2">⏱ Time Savings:</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Manual EPF processing: 40 hours/month</li>
              <li>With EPFdesk: 2 hours/month</li>
              <li>
                Time Saved: <AnimatedCounter from={0} to={38} suffix="hrs/month" />
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-2">💸 Cost Savings:</h4>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>In-house EPF expert salary: ₹50,000/month</li>
              <li>Penalty risk mitigation: ₹10,000/month</li>
              <li>Our service cost: Starting ₹2,999/month</li>
              <li>
                Net Savings: <AnimatedCounter from={0} to={57000} suffix="₹/month" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
