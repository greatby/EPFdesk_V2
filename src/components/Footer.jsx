import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className="z-[9999] w-full border-t border-solid border-t-[#11110d1a] bg-[#ffffffa8] px-5 backdrop-blur-[3px]"
      id="footer-section"
    >
      <div className="bg-white px-4 py-12 text-sm text-gray-700 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Company Description */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-gray-900">
              EPFdesk
            </h4>
            <p className="text-sm text-gray-600">
              India's most trusted EPFO compliance partner. Serving 5000+
              companies with 99.8% accuracy since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">
              Quick Links
            </h5>
            <ul className="space-y-2">
              <li>
                <Link to="/epf">EPF Management</Link>
              </li>
              <li>
                <Link to="/esic">ESIC Compliance</Link>
              </li>
              <li>
                <Link to="/pt">Professional Tax</Link>
              </li>
              <li>
                <Link to="/lwf">Labour Welfare Fund</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">
              Support
            </h5>
            <ul className="space-y-2">
              <li>
                <Link to="/help">Help Center</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <li>
                <Link to="/updates">Compliance Updates</Link>
              </li>
              <li>
                <Link to="/portal">Employee Portal</Link>
              </li>
              <li>
                <Link to="/knowledge">Knowledge Base</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">
              Contact
            </h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>📞 +91-9876543210</li>
              <li>📧 hello@epfdesk.com</li>
              <li>🏢 [Your Business Address]</li>
              <li>🕘 Mon-Sat 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Trust Signals (visible on all pages) */}
        <div className="mt-12 border-t pt-6 text-center text-xs text-gray-500 space-y-1">
          <p>
            "Trusted by 5000+ Companies" | "99.8% Filing Accuracy" | "24/7
            Employee Support"
          </p>
          <p>
            "Zero Penalty Guarantee" | "Certified EPF Professionals" | "10+
            Years Experience"
          </p>
        </div>

        {/* Scroll To Top */}
        {showScroll && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex cursor-pointer items-center gap-2 rounded-full bg-gray-700 px-4 py-2 text-white transition hover:bg-gray-600 dark:bg-gray-300 dark:text-black dark:hover:bg-gray-200"
            >
              <ChevronUpIcon className="size-5" />
              Back to Top
            </button>
          </div>
        )}
      </div>
    </footer>
  );
}
