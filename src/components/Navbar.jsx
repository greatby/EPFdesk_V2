import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { PlusGrid, PlusGridItem, PlusGridRow } from "./plus-grid";
import { useLocation } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase"; 
import toast from 'react-hot-toast';

const links = [
  { href: "/epf", label: "EPFO" },
  { href: "/epfDesk", label: "EPFdesk" },
  { href: "/esic", label: "ESIC" },
   { href: "/posh", label: "POSH" },
    // { href: "/labour", label: "License & Registration" },
  { href: "/lwf", label: "LWF" },
  { href: "/pt", label: "PT" },
  { href: "/about", label: "About Us" },
  // { href: "https://jobs-zeta-two.vercel.app/", label: "Join" },
  // { href: "/res", label: "Resources" },
  // { href: "/login", label: "Sign In" },
];

// export default function Navbar({ banner }) {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleLogout = async () => {
//     await signOut(auth);
//     navigate("/");
//   };

//   return (
//     <header
//       className={`fixed z-50 w-full border-b pl-5 pr-10 backdrop-blur-md transition-colors duration-300 `}
//     >
//       <PlusGrid>
//         <PlusGridRow className="relative flex items-center justify-between h-[72px]">
//           {/* Logo */}
//           <div className="flex items-center">
//             <PlusGridItem className="py-3">
//               <Link to="/" title="Home">
//                 <img
//                   src="/images/EPFdesk (1).svg"
//                   alt="Logo"
//                   width={150}
//                   height={100}
//                 />
//               </Link>
//             </PlusGridItem>
//           </div>

//           {/* Right: Nav Links - Desktop */}

//           <div className="hidden md:flex items-center space-x-4">
//             {links.map(({ href, label }) => (
//               <Link
//                 key={href}
//                 to={href}
//                 className={`text-[18px] font-semibold  text-gray-800} hover:bg-gray-200 hover:text-gray-700 p-2 rounded-md`}
//               >
//                 {label}
//               </Link>
//             ))}
//           </div>

//           <div className="md:hidden">
//             <button
//               onClick={() => setMobileMenuOpen(true)}
//               className="p-2 border rounded-md hover:bg-gray-100"
//             >
//               {!mobileMenuOpen ? (
//                 <Bars3Icon
//                   className={`h-6 w-6 text-gray-700
//                 }`}
//                 />
//               ) : (
//                 <XMarkIcon
//                   className={`h-6 w-6 text-gray-700
//                 }`}
//                 />
//               )}
//             </button>
//           </div>
//         </PlusGridRow>
//       </PlusGrid>

//       {/* Mobile Menu Dialog */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <Dialog
//             open={mobileMenuOpen}
//             onClose={setMobileMenuOpen}
//             className="md:hidden"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 z-50 bg-white p-4 overflow-y-auto"
//             >
//               <div className="flex justify-between items-center mb-6">
//                 <img src="/images/EPFdesk (1).svg" alt="Logo" className="h-8" />
//                 <button onClick={() => setMobileMenuOpen(false)}>
//                   <XMarkIcon className="h-6 w-6 text-gray-800" />
//                 </button>
//               </div>

//               <div className="space-y-6 mt-10">
//                 <div className="">
//                   {links.map(({ href, label }) => (
//                     <Link
//                       key={href}
//                       to={href}
//                       onClick={() => setMobileMenuOpen(false)}
//                       className="block text-sm font-medium text-gray-800 hover:text-blue-600 py-2"
//                     >
//                       {label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </Dialog>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

export default function Navbar({ banner }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      toast.success("Logout successful!");
    } catch (err) {
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <header
      className={`fixed z-50 w-full border-b pl-3 pr-10 backdrop-blur-md transition-colors duration-300`}
    >
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                className="text-[18px] font-semibold text-gray-800 hover:bg-gray-200 hover:text-gray-700 p-2 rounded-md"
              >
                {label}
              </Link>
            ))}

            {user ? (
              <button
                onClick={handleLogout}
                className="text-[18px] font-semibold text-red-600 hover:text-red-800 p-2"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-[18px] font-semibold text-gray-800 hover:bg-gray-200 hover:text-gray-700 p-2 rounded-md"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border rounded-md hover:bg-gray-100"
            >
              {!mobileMenuOpen ? (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              ) : (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </PlusGridRow>
      </PlusGrid>

      {/* Mobile Nav */}
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

              <div className="space-y-6 mt-10">
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

                {user ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left text-red-600 hover:text-red-800 py-2"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-medium text-gray-800 hover:text-blue-600 py-2"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </header>
  );
}
