// import { ChevronUpIcon } from "@heroicons/react/24/outline";
// import { useEffect, useState } from "react";
// import { useNavigate, Link, useLocation } from "react-router-dom";

// export default function Footer() {
//   const navigate = useNavigate();
//   const [showScroll, setShowScroll] = useState(false);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScroll(window.scrollY > 300);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   // const handleScrollToTop = (link) => {
//   //   // Scroll to top before navigating
//   //   window.scrollTo({ top: 0, behavior: "smooth" });

//   //   // If it's an internal link, navigate to that page
//   //   if (link.startsWith("/")) {
//   //     navigate(link);
//   //   } else {
//   //     // Otherwise, for external links, just open the link in a new tab
//   //     window.open(link, "_blank");
//   //   }
//   // };

//   return (
//     <footer
//       className="z-[9999] w-full border-t border-solid border-t-[#11110d1a] bg-[#ffffffa8] backdrop-blur-[3px]"
//       id="footer-section"
//     >
//       <div className="bg-white px-4 py-12 text-sm text-gray-700 sm:px-6 lg:px-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//           {/* Company Description */}
//           <div>
//             <h4 className="text-lg flex flex-col font-semibold mb-3 text-gray-900">
//               EPFdesk.com
//               <a
//                 href="mailto:hello@epfdesk.com"
//                 className="text-[1rem] font-medium hover:underline"
//               >
//                 hello@epfdesk.com
//               </a>

//             </h4>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h5 className="text-lg font-semibold text-gray-500 uppercase mb-2">
//               Quick Links
//             </h5>
//             <ul className="space-y-3 text-[1rem] columns-1 md:columns-2">
//                <li>
//                 <Link to="/epfDesk">EPFDesk</Link>
//               </li>
//               <li>
//                 <Link to="/epf">EPFO</Link>
//               </li>

//               <li>
//                 <Link to="/esic">ESIC</Link>
//               </li>
//                 <li>
//                 <Link to="/posh">POSH</Link>
//               </li>
//                <li>
//                 <Link to="/lwf">LWF</Link>
//               </li>
//               <li>
//                 <Link to="/pt">PT</Link>
//               </li>

//               {/* <li>
//                 <Link to="/labour">License & Registration</Link>
//               </li> */}

//               <li>
//                 <Link to="/about">About Us</Link>
//               </li>
//               {/* <li>
//                 <a
//                   href="https://jobs-zeta-two.vercel.app/"
//                   onClick={() =>
//                     handleScrollToTop("https://jobs-zeta-two.vercel.app/")
//                   }
//                 >
//                   Jobs
//                 </a>
//               </li> */}
//             </ul>
//           </div>
//         </div>

//         {/* Trust Signals (visible on all pages) */}

//         {/* Scroll To Top */}

//       </div>
//        <div className="mt-12 border-t pt-6 text-center text-xs text-gray-500 space-y-1">
//           <p>© 2025 EPFdesk.com All rights reserved.</p>
//         </div>
//          {showScroll && (
//           <div className="my-8 flex justify-center">
//             <button
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               className="flex cursor-pointer items-center gap-2 rounded-full bg-gray-700 px-4 py-2 text-white transition hover:bg-gray-600 dark:bg-gray-300 dark:text-black dark:hover:bg-gray-200"
//             >
//               <ChevronUpIcon className="size-5" />
//               Back to Top
//             </button>
//           </div>
//         )}
//     </footer>
//   );
// }

import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
export default function Footer() {
  const navigate = useNavigate();
  const [showScroll, setShowScroll] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer
      className="z-[9999] w-full border-t border-solid border-t-[#11110d1a] bg-[#ffffffa8] backdrop-blur-[3px]"
      id="footer-section"
    >
      <div className="bg-white px-4 py-12 text-sm text-gray-700 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Company Description */}
          <div>
            <h4 className="text-2xl flex flex-col font-bold mb-3 text-gray-900">
              EPFdesk.com
              {/* <a
                href="mailto:hello@epfdesk.com"
                className="text-[1rem] font-medium hover:underline"
              >
                hello@epfdesk.com
              </a> */}
            </h4>

            {/* Social Links */}
            <div className="flex gap-7 mt-4">
              <div className="flex flex-col gap-5">
                <a
                  href="https://www.instagram.com/epfdesk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-pink-600 transition"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/epfdesk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-sky-500 transition"
                >
                  <FaXTwitter className="w-6 h-6" />
                </a>
              </div>
              <div className="flex flex-col gap-5">
                <a
                  href="https://www.linkedin.com/company/108133988/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-700 transition"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.youtube.com/@epfdesk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-red-700 transition"
                >
                  <FaYoutube className="w-6 h-6" />
                </a>
              </div>
              <div className="flex flex-col gap-5">
                <a
                  href="mailto:hello@epfdesk.com"
                  className="text-gray-500 hover:text-blue-700 transition"
                >
                  <IoMail className="w-6 h-6" />
                </a>
                <a
                  onClick={() => {
                    const phone = "919243188888";
                    const text = encodeURIComponent(
                      "Hi, I need help with EPFdesk."
                    );
                    window.open(
                      `https://wa.me/${phone}?text=${text}`,
                      "_blank"
                    );
                  }}
                  className="text-gray-500 hover:text-green-700 transition cursor-pointer"
                >
                  <IoLogoWhatsapp className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold text-gray-500 uppercase mb-2">
              Quick Links
            </h5>
            <ul className="space-y-3 text-[1rem] columns-1 md:columns-2">
              <li>
                <Link to="/epfDesk">EPFDesk</Link>
              </li>
              <li>
                <Link to="/epf">EPFO</Link>
              </li>
              <li>
                <Link to="/esic">ESIC</Link>
              </li>
              <li>
                <Link to="/posh">POSH</Link>
              </li>
              <li>
                <Link to="/lwf">LWF</Link>
              </li>
              <li>
                <Link to="/pt">PT</Link>
              </li>
              {/* <li>
                <Link to="https://1rsk.com/">1RSK</Link>
              </li> */}
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-6 text-center text-xs text-gray-500 space-y-1">
          <p>© 2025 EPFdesk.com All rights reserved.</p>
        </div>

        {/* Scroll To Top */}
        {showScroll && (
          <div className="my-8 flex justify-center">
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
