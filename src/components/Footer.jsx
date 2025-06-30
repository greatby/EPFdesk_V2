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
    <footer className="z-[9999] w-full border-t border-solid border-t-[#11110d1a] bg-[#ffffffa8] px-5 backdrop-blur-[3px]">
      <div className="bg-white px-4 py-8 text-sm text-gray-700 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center items-start">
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
              Employer/Employee
            </p>
            <ul className="space-y-2">
              <li>
                <Link to="/epf">Employer EPF</Link>
              </li>
              <li>
                <Link to="/employee-epf"> Employee EPF</Link>
              </li>
              <li>
                <Link to="/esic"> ESIC</Link>
              </li>
              <li>
                <Link to="/lwf">LWF</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
              Explore
            </p>
            <ul className="space-y-2">
              <li>
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/company">Join</Link>
              </li>
              <li>
                <Link to="/login">Sign In</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

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
