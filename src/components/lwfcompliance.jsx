import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

const monthlyRequirements = [
  "Contribution calculation verification",
  "Employee deduction processing",
  "Employer contribution payment",
  "Reconciliation and reporting",
];

const annualRequirements = [
  "Annual return preparation",
  "State-wise filing submission",
  "Compliance certificate renewal",
  "Audit trail maintenance",
];

const documentation = [
  "Employee master maintenance",
  "Salary and contribution records",
  "Payment proof and receipts",
  "Compliance certificates",
];

const benefits = [
  "State Expertise: Deep knowledge of state-specific LWF laws and requirements across all applicable states.",
  "Accurate Calculations: Precise contribution calculations based on current salary slabs and state-specific rules.",
  "Timely Compliance: Never miss LWF payment deadlines or annual filing requirements.",
  "Cost Optimization: Ensure you're not overpaying while maintaining full compliance with LWF regulations.",
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

export default function LWFComplianceROI() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Column: Compliance Checklist */}
      <div>
        <h2 className="text-4xl font-bold mb-8 text-gray-900">
          LWF Compliance Checklist
        </h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Monthly Requirements:
          </h3>
          <ul className="space-y-3 text-lg text-gray-700">
            {monthlyRequirements.map((task, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Annual Requirements:
          </h3>
          <ul className="space-y-3 text-lg text-gray-700">
            {annualRequirements.map((task, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1" />
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Documentation:</h3>
          <ul className="space-y-3 text-lg text-gray-700">
            {documentation.map((doc, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Column: ROI + Benefits */}
      <div className="bg-gray-50 p-10 rounded-3xl shadow-xl space-y-10">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
            💼 Why Choose Our LWF Management?
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
            {benefits.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
            📊 LWF Management ROI
          </h2>
          <div className="text-lg text-gray-800 space-y-4">
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Manual calculation errors: High risk</li>
              <li>Penalty exposure: ₹5,000-25,000 per violation</li>
              <li>Time investment: 5-10 hours/month</li>
              <li>Compliance risk: High</li>
            </ul>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>100% accurate calculations</li>
              <li>Zero penalty risk</li>
              <li>Time saved: <AnimatedCounter from={0} to={95} suffix="%" /></li>
              <li>Complete peace of mind</li>
            </ul>
          </div>
        </div>

        {/* <div>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
            💰 Pricing Structure
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
            <li>Single State LWF: ₹799/month</li>
            <li>Multi-State LWF (2-3 states): ₹1,999/month</li>
            <li>All Applicable States: ₹3,499/month</li>
            <li>Enterprise Solutions: Custom pricing</li>
          </ul>
        </div> */}
      </div>
    </section>
  );
}
