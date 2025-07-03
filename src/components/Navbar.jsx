import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { PlusGrid, PlusGridItem, PlusGridRow } from "./plus-grid";

const links = [
  { href: "/aboutUs", label: "About Us" },
  { href: "/company", label: "Join" },
   { href: "/resources", label: "Resources" },
  { href: "/login", label: "Sign In" },
];

const services = [
  { href: "/epf", label: "🏢 EPF Management" },
  { href: "/esic", label: "🏥 ESIC Compliance" },
  { href: "/lwf", label: "💼 Labour Welfare Fund" },
   { href: "/pt", label: "📄 Professional Tax" },
  // { href: "/employer", label: "💼 Employer" },
  // { href: "/employee", label: "👤 Employee" },
  // { href: "/link1", label: "📄 Link 1" },
  // { href: "/link2", label: "📌 Link 2" },
];

export default function Navbar({ banner }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header  className={`fixed z-[9999] w-full border-b px-5 backdrop-blur-md transition-colors duration-300 ${
        scrolled
          ? "bg-white border-gray-200"
          : "bg-transparent border-transparent"
      }`}>
      <PlusGrid>
        <PlusGridRow className="relative flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center">
            <PlusGridItem className="py-3">
              <Link to="/" title="Home">
                <img
                  src="/images/EPFdesk (1).svg"
                  alt="Logo"
                  width={150}
                  height={100}
                />
              </Link>
            </PlusGridItem>
          </div>

          {/* Center: Services Dropdown - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative group">
              <button className={`flex items-center gap-1 text-xl font-semibold ${scrolled ? "text-gray-800" : "text-white"} p-2 hover:bg-transparent text-black rounded-md`}>
                Services
                <ChevronDownIcon className="w-6 h-6 mt-1 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-1/2 top-full z-50 mt-3 w-[300px] -translate-x-1/2 rounded-[20px] border border-gray-200 bg-white shadow-[_0px_10px_50px_10px_#0000004d] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                <div className="grid grid-cols-1 ">
                  <div className="p-6 space-y-3">
                    <p className="text-xl font-semibold text-gray-500 uppercase tracking-wide">
                      Schemes
                    </p>
                    {services.slice(0, 4).map(({ href, label }) => (
                      <Link
                        key={href}
                        to={href}
                        className="block text-[18px] font-semibold rounded-md p-2 text-gray-700 hover:bg-gray-200"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                  {/* <div className="p-6 space-y-3">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Stakeholders
                    </p>
                    {services.slice(3).map(({ href, label }) => (
                      <Link
                        key={href}
                        to={href}
                        className="block text-base text-gray-700 hover:bg-gray-200 p-2 rounded-md"
                      >
                        {label}
                      </Link>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Nav Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                className={`text-xl font-semibold ${scrolled ? "text-gray-800" : "text-white"} hover:bg-gray-200 hover:text-gray-700 p-2 rounded-md`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 border rounded-md hover:bg-gray-100"
            >
              <Bars3Icon className={`h-6 w-6 ${!scrolled ? "text-white" : "text-gray-700"}`} />
            </button>
          </div>
        </PlusGridRow>
      </PlusGrid>

      {/* Mobile Menu Dialog */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-white p-4 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <img src="/images/EPFdesk (1).svg" alt="Logo" className="h-8" />
                <button onClick={() => setMobileMenuOpen(false)}>
                  <XMarkIcon className="h-6 w-6 text-gray-800" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    Services
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {services.map(({ href, label }) => (
                      <Link
                        key={href}
                        onClick={() => setMobileMenuOpen(false)}
                        to={href}
                        className="block text-sm text-gray-800 hover:text-blue-600"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  {links.map(({ href, label }) => (
                    <Link
                      key={href}
                      to={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm font-medium text-gray-800 hover:text-blue-600 py-2"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
