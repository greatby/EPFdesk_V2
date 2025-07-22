import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import {useNavigate, Link ,useLocation} from "react-router-dom";

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

  // const handleScrollToTop = (link) => {
  //   // Scroll to top before navigating
  //   window.scrollTo({ top: 0, behavior: "smooth" });

  //   // If it's an internal link, navigate to that page
  //   if (link.startsWith("/")) {
  //     navigate(link);
  //   } else {
  //     // Otherwise, for external links, just open the link in a new tab
  //     window.open(link, "_blank");
  //   }
  // };

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
            {/* <p className="text-sm text-gray-600">
              India's most trusted EPFO compliance partner. Serving 5000+
              companies with 99.8% accuracy since 2020.
            </p> */}
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">
              Quick Links
            </h5>
            <ul className="space-y-2 columns-1 md:columns-2">
              <li>
                <Link to="/epf">
                  EPFO
                </Link>
              </li>
              <li>
                <Link
                  to="/epfDesk"
                 
                >
                  EPFDesk
                </Link>
              </li>
              <li>
                <Link to="/esic" >
                  ESIC
                </Link>
              </li>
              <li>
                <Link to="/pt" >
                  PT
                </Link>
              </li>
              <li>
                <Link to="/lwf" >
                  LWF
                </Link>
              </li>
              <li>
                <a
                  href="https://about-us-flame.vercel.app/"
                 
                >
                  About Us
                </a>
              </li>
              {/* <li>
                <a
                  href="https://jobs-zeta-two.vercel.app/"
                  onClick={() =>
                    handleScrollToTop("https://jobs-zeta-two.vercel.app/")
                  }
                >
                  Jobs
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Trust Signals (visible on all pages) */}
        <div className="mt-12 border-t pt-6 text-center text-xs text-gray-500 space-y-1">
          <p>© 2025 EPFdesk.com All rights reserved.</p>
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
// import { ChevronUpIcon } from "@heroicons/react/24/outline";
// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Footer() {
//   const [showScroll, setShowScroll] = useState(false);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setShowScroll(window.scrollY > 300);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return (
//     <footer className="relative w-full bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] px-4 py-12 sm:px-6 lg:px-12" id="footer-section">
//       {/* Floating Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//         <div className="absolute top-10 left-5 w-24 h-24 bg-[#ff6b6b] opacity-10 rounded-full animate-float" />
//         <div className="absolute top-2/3 right-8 w-20 h-20 bg-[#4ecdc4] opacity-10 rounded-full animate-float delay-2000" />
//         <div className="absolute bottom-16 left-16 w-32 h-32 bg-[#ffe66d] opacity-10 rounded-full animate-float delay-4000" />
//         <div className="absolute top-1/3 right-1/4 w-14 h-14 bg-[#a8e6cf] opacity-10 rounded-full animate-float delay-1000" />
//         <div className="absolute bottom-1/2 right-4 w-16 h-16 bg-[#ffd3a5] opacity-10 rotate-45 animate-float delay-3000" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16">
//         <div className="absolute inset-0 pointer-events-none z-0">
//           <div className="absolute top-10 left-16 w-4 h-4 bg-[#ff6b6b] rounded-full opacity-20 animate-float-slow" />
//           <div className="absolute top-[60%] right-10 w-5 h-5 bg-[#4ecdc4] rounded-full opacity-20 animate-float delay-2000" />
//           <div className="absolute bottom-12 left-24 w-6 h-6 bg-[#ffe66d] rounded-full opacity-10 animate-float-slow delay-3000" />
//           <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#a8e6cf] rounded-full opacity-20 animate-float delay-1000" />
//           <div className="absolute bottom-6 right-1/4 w-5 h-5 bg-[#ffd3a5] rounded-full opacity-10 animate-float-slow delay-4000" />
//         </div>
//         {/* Logo Section */}
//         <div className="text-center mb-12">
//           <div className="relative mx-auto w-24 h-24 mb-4">
//             <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#ff6b6b] rounded-full opacity-30" />
//             <div className="absolute -bottom-1 -left-1 w-10 h-10 bg-[#4ecdc4] rounded-full opacity-30" />
//             <div className="absolute top-6 left-6 w-16 h-16 bg-[#ffe66d] rotate-45 rounded-xl opacity-30" />
//             <div className="relative z-10 w-full h-full flex items-center justify-center rounded-full bg-gradient-to-br from-[#a8e6cf] to-[#dcedc1] shadow-lg text-4xl">
//               🏢
//             </div>
//           </div>
//           <h2 className="text-3xl font-bold text-gray-800">Compliance Flow</h2>
//           <p className="text-gray-500 mt-2">Navigate the compliance maze with confidence</p>
//           <div className="mt-4 w-24 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
//             <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-progress rounded-full" />
//           </div>
//         </div>

//         {/* Grid Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
//           {/* Company */}
//           <div>
//             <h3 className="text-lg font-bold text-gray-800 mb-4">🏢 Company</h3>
//             <p className="text-sm text-gray-600">Streamlining EPFO, ESIC & PT compliance for businesses across India.</p>
//             <p className="text-sm text-gray-600 mt-2 mb-1">📍 Bengaluru, India</p>
//             <p className="text-sm text-gray-600 mb-1">📞 +91 XXX XXX XXXX</p>
//             <p className="text-sm text-gray-600">📧 hello@epfdesk.com</p>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-bold text-gray-800 mb-4">🛠️ Services</h3>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li><Link to="/epf">🏢 EPFO Management</Link></li>
//               <li><Link to="/epfDesk">📊 EPFDesk Portal</Link></li>
//               <li><Link to="/esic">🏥 ESIC Compliance</Link></li>
//               <li><Link to="/lwf">⚖️ LWF Administration</Link></li>
//               <li><Link to="/pt">💰 Professional Tax</Link></li>
//               <li><a href="https://about-us-flame.vercel.app/">📖 About Us</a></li>
//             </ul>
//           </div>

       
//           {/* <div>
//             <h3 className="text-lg font-bold text-gray-800 mb-4">🎧 Support</h3>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li><a href="#">📚 Help Center</a></li>
//               <li><a href="#">💬 Live Chat</a></li>
//               <li><a href="#">📧 Contact Support</a></li>
//               <li><a href="#">📊 Status Page</a></li>
//             </ul>
//           </div>

         
//           <div>
//             <h3 className="text-lg font-bold text-gray-800 mb-4">🔒 Legal</h3>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li><a href="#">🔐 Privacy Policy</a></li>
//               <li><a href="#">📋 Terms of Service</a></li>
//               <li><a href="#">🛡️ Data Protection</a></li>
//               <li><a href="#">✅ Compliance</a></li>
//             </ul>
//           </div> */}
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
//           <p>&copy; 2025 EPFdesk. All rights reserved.</p>
//           <div className="flex space-x-4 text-lg">
//             <a href="#" aria-label="LinkedIn">💼</a>
//             <a href="#" aria-label="Twitter">🐦</a>
//             <a href="#" aria-label="Facebook">📘</a>
//             <a href="#" aria-label="YouTube">📺</a>
//             <a href="#" aria-label="Instagram">📷</a>
//           </div>
//         </div>

//         {/* Scroll to Top */}
//         {showScroll && (
//           <div className="mt-8 flex justify-center">
//             <button
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
//             >
//               <ChevronUpIcon className="w-5 h-5" />
//               Back to Top
//             </button>
//           </div>
//         )}
//       </div>
//     </footer>
//   );
// }
