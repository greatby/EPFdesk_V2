// HeroCarousel.jsx
import React, { useEffect, useState } from "react";

const heroData = [
  {
    gradient: "from-green-200 to-green-100",
    icon: "🎨",
    title: "Our Vision & Mission",
    subtitle:
      "Redefining HR & Labour Compliance: Simplicity, Security, Success for Every Indian Business.",
    speech: "Create!",
    cta1: "Start Creating",
    cta2: "Learn More",
  },
  {
    gradient: "from-orange-200 to-orange-300",
    icon: "🌱",
    title: "The EPFDesk Story",
    subtitle: (
      <p>
        <strong className="text-black">Born from Necessity:</strong> Our Journey
        to Simplify HR & Labour Compliance for Every Indian Business. Even as
        seasoned professionals navigating India's dynamic business landscape, we
        faced the same persistent headaches that plague countless enterprises:
        the labyrinthine complexities of HR and Labour compliance. We witnessed
        firsthand how precious hours, once dedicated to innovation and growth,
        were consumed by deciphering ever-changing regulations, managing
        mountains of paperwork, and the constant apprehension of non-compliance.
        It wasn't just about avoiding penalties; it was about the sheer drain on
        productivity and the mental burden it placed on businesses and their
        valuable employees. We realized that if even we, with our deep
        understanding of the regulatory environment, found it challenging, what
        about the rest of India's vibrant business community? This shared
        struggle ignited a powerful resolve within us. We envisioned a world
        where Indian businesses, regardless of their size, could operate with
        complete peace of mind, knowing their compliance was meticulously
        handled. A world where they could channel their energy entirely into
        what they do best – innovating, expanding, and creating opportunities –
        all while their employees thrived in a secure and compliant environment.
        This vision wasn't just a dream; it became our mission. We founded
        EPFDesk to transform the daunting world of HR and Labour compliance into
        a seamless, stress-free experience. We decided to take on the burden
        ourselves, so you don't have to. Our purpose is clear: to be the
        steadfast partner that empowers every Indian business to flourish,
        unburdened by compliance worries, and to contribute to a more productive
        and prosperous India for all.
      </p>
    ),
    speech: "Grow!",
    cta1: "Begin Growth",
    cta2: "Explore Path",
  },
  {
    gradient: "from-teal-200 to-pink-200",
    icon: "🤝",
    title: "Our Unmatched Expertise",
    subtitle: (
      <p>
        <strong className="text-black">Beyond Regulations:</strong> Deep Industry Insight, Proactive Strategies,
        Flawless Execution. At EPFDesk, our expertise transcends mere legal
        interpretation. We don't just read the labour laws; we intimately
        understand their practical implications, the nuances of their
        application across diverse industries, and their direct impact on both
        businesses and employees. Our team comprises seasoned legal minds, HR
        veterans, and compliance specialists who continuously track the dynamic
        regulatory landscape. This profound insight enables us to not only
        ensure meticulous adherence but also to foresee upcoming changes and
        proactively guide your business. From the intricate details of Provident
        Fund and ESI to complex industrial relations and contract labour
        management, our execution is rooted in precision, efficiency, and an
        unwavering commitment to minimizing risk and maximizing your operational
        peace of mind.
      </p>
    ),
    speech: "Connect!",
    cta1: "Join Community",
    cta2: "Meet People",
  },
  {
    gradient: "from-cyan-200 to-blue-400",
    icon: "🚀",
    title: "Why EPFDesk?",
    subtitle: `Your Peace of Mind, Our Relentless Pursuit: Partnering for a Compliant and Prosperous Future.
Choosing EPFDesk means choosing clarity in complexity. We transform the often-daunting obligations of EPF, ESI, and other labour contribution acts into streamlined, manageable processes. Our intuitive systems and expert guidance ensure that critical tasks – from accurate calculation and timely remittances to flawless documentation and statutory filings – are handled with effortless precision. We take on the burden of intricate regulations, allowing you to bypass the confusion and focus entirely on your core business growth, knowing your compliance is in the most reliable hands.`,
    speech: "Explore!",
    cta1: "Start Adventure",
    cta2: "See Features",
  },
  {
    gradient: "from-yellow-300 to-cyan-400",
    icon: "💡",
    title: "Our Commitment to You",
    subtitle: `Building Long-Term Relationships Through Transparency, Innovation, and Client-Centric Service.
Our relationship with you extends far beyond transactional compliance. We are dedicated to being a true partner, committed to your sustained success. This means we operate with unwavering transparency, ensuring you always understand our processes and your compliance status. We continuously innovate our solutions, leveraging technology and expertise to adapt to evolving regulations and your changing needs. Above all, our client-centric service ensures that your queries are addressed promptly, your concerns are heard, and your journey towards effortless labour and HR compliance is supported by a team that genuinely cares.`,
    speech: "Inspire!",
    cta1: "Share Vision",
    cta2: "Learn How",
  },
  {
    gradient: "from-pink-300 to-yellow-100",
    icon: "✨",
    title: "Connect With Us: Your Journey to Effortless Compliance Starts Here",
    subtitle: (
      <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          Have questions about EPF or any other HR & Labour compliance?
        </h2>
        <p className="text-gray-600">
          Ready to transform your business's approach to regulations? EPFDesk is
          strategically located to serve you across India. Reach out to us
          today, and let our experts guide you toward peace of mind and enhanced
          productivity, no matter where your business operates.
        </p>

        <div className="border-t text-left border-gray-200 pt-4">
          <h3 className="text-2xl font-semibold text-gray-900">Get in Touch</h3>
          <p className="text-gray-600">
            Mobile: <span className="font-medium">+919243188888</span>
          </p>
          <p className="text-gray-600">
            Email:{" "}
            <a href="mailto:hello@epfdesk.com" className="hover:underline">
              hello@epfdesk.com
            </a>
          </p>
        </div>

        <div className="border-t text-left border-gray-200 pt-4">
          <h3 className="text-2xl font-semibold text-gray-900">
            Our Offices & Pan-India Network
          </h3>
          <p className="text-gray-600">
            EPFDesk is proud to serve businesses across all states of India,
            supported by our robust network and strategically located offices in
            major metropolitan hubs.
          </p>

          <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
            <li>
              <strong>New Delhi, Delhi, India</strong>
            </li>
            <li>
              <strong>Mumbai, Maharashtra, India</strong>
            </li>
            <li>
              <strong>Hyderabad, Telangana, India</strong>
            </li>
            <li>
              <strong>Chennai, Tamil Nadu, India</strong>
            </li>
            <li>
              <strong>Bengaluru, Karnataka, India - </strong>
              62/63 Church Street, Karnataka, 560001
              <br />
            </li>
          </ul>
        </div>
      </div>
    ),
    speech: "Dream!",
    cta1: "Start Dreaming",
    cta2: "Get Inspired",
  },
];

const HeroCarousel = () => {
  return (
    // <section className="w-full px-0 py-0">
    //   <div className="flex flex-col">
    //     <div className="mt-[4rem]">

    //     {heroData.map((data, index) => (
    //       <div
    //         key={index}
    //         className={`relative w-full min-h-[90vh] px-4 py-10 bg-gradient-to-br ${data.gradient}`}
    //       >
    //         {/* Floating bubbles */}
    //         <div className="absolute inset-0 pointer-events-none">
    //           {[...Array(5)].map((_, i) => (
    //             <div
    //               key={i}
    //               className={`absolute rounded-full opacity-20 animate-float${
    //                 i + 1
    //               }`}
    //               style={{
    //                 width: `${20 + i * 10}px`,
    //                 height: `${20 + i * 10}px`,
    //                 top: `${20 * i + 10}px`,
    //                 left: `${15 * i + 10}px`,
    //                 backgroundColor: [
    //                   "#ff6b6b",
    //                   "#4ecdc4",
    //                   "#ffe66d",
    //                   "#a8e6cf",
    //                   "#ffd3a5",
    //                 ][i],
    //               }}
    //             />
    //           ))}
    //         </div>

    //         {/* Content container */}
    //         <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-5xl mx-auto h-full">
    //           {/* Icon with decorative shapes */}
    //           <div className="relative w-36 h-36 mb-6">
    //             <div className="absolute w-16 h-16 bg-red-300 rounded-full -top-4 -right-4 opacity-30" />
    //             <div className="absolute w-12 h-12 bg-teal-300 rounded-full -bottom-4 -left-4 opacity-30" />
    //             <div className="absolute w-24 h-24 bg-yellow-200 rounded-[35px] rotate-45 top-10 left-10 opacity-30" />
    //             <div className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center text-[2.5rem] shadow-xl z-10">
    //               {data.icon}
    //             </div>
    //           </div>

    //           {/* Title and subtitle */}
    //           <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6">
    //             {data.title}
    //           </h1>

    //           <p className="text-base sm:text-[1.3rem] text-gray-700 opacity-80 whitespace-pre-line leading-relaxed px-4">
    //             {data.subtitle}
    //           </p>

    //           {/* Optional animated bar */}
    //           <div className="w-24 h-2 my-8 bg-white/30 rounded-full overflow-hidden">
    //             <div className="h-full bg-white/90 rounded-full animate-progress" />
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //     </div>
    //   </div>
    // </section>
    <section className="w-full px-0 py-0">
      <div className="flex flex-col">
        <div className="mt-[4rem]">
          {heroData.map((data, index) => (
            // <div
            //   key={index}
            //   className={`relative w-full min-h-[90vh] px-4 py-10 bg-gradient-to-br ${data.gradient}`}
            // >
            //   {/* Floating bubbles */}
            //   <div className="absolute inset-0 pointer-events-none">
            //     {[...Array(5)].map((_, i) => (
            //       <div
            //         key={i}
            //         className={`absolute rounded-full opacity-20 animate-float${i + 1}`}
            //         style={{
            //           width: `${20 + i * 10}px`,
            //           height: `${20 + i * 10}px`,
            //           top: `${20 * i + 10}px`,
            //           left: `${15 * i + 10}px`,
            //           backgroundColor: [
            //             "#ff6b6b",
            //             "#4ecdc4",
            //             "#ffe66d",
            //             "#a8e6cf",
            //             "#ffd3a5",
            //           ][i],
            //         }}
            //       />
            //     ))}
            //   </div>

            //   {/* Content centered both ways */}
            //   <div className="relative z-10 flex items-center justify-center h-full">
            //     <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-4">
            //       {/* Icon with decorative shapes */}
            //       <div className="relative w-36 h-36 mb-6">
            //         <div className="absolute w-16 h-16 bg-red-300 rounded-full -top-4 -right-4 opacity-30" />
            //         <div className="absolute w-12 h-12 bg-teal-300 rounded-full -bottom-4 -left-4 opacity-30" />
            //         <div className="absolute w-24 h-24 bg-yellow-200 rounded-[35px] rotate-45 top-10 left-10 opacity-30" />
            //         <div className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center text-[2.5rem] shadow-xl z-10">
            //           {data.icon}
            //         </div>
            //       </div>

            //       <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6">
            //         {data.title}
            //       </h1>

            //       <p className="text-base sm:text-[1.3rem] text-gray-700 opacity-80 whitespace-pre-line leading-relaxed">
            //         {data.subtitle}
            //       </p>

            //       <div className="w-24 h-2 my-8 bg-white/30 rounded-full overflow-hidden">
            //         <div className="h-full bg-white/90 rounded-full animate-progress" />
            //       </div>
            //     </div>
            //   </div>
            // </div>
            <div
              key={index}
              className={`relative w-full min-h-[90vh] px-4 py-10 bg-gradient-to-br ${data.gradient} flex items-center justify-center`}
            >
              {/* Floating bubbles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute rounded-full opacity-20 animate-float${
                      i + 1
                    }`}
                    style={{
                      width: `${20 + i * 10}px`,
                      height: `${20 + i * 10}px`,
                      top: `${20 * i + 10}px`,
                      left: `${15 * i + 10}px`,
                      backgroundColor: [
                        "#ff6b6b",
                        "#4ecdc4",
                        "#ffe66d",
                        "#a8e6cf",
                        "#ffd3a5",
                      ][i],
                    }}
                  />
                ))}
              </div>

              {/* ✅ Centered Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-5xl">
                <div className="relative w-36 h-36 mb-6">
                  <div className="absolute w-16 h-16 bg-red-300 rounded-full -top-4 -right-4 opacity-30" />
                  <div className="absolute w-12 h-12 bg-teal-300 rounded-full -bottom-4 -left-4 opacity-30" />
                  <div className="absolute w-24 h-24 bg-yellow-200 rounded-[35px] rotate-45 top-10 left-10 opacity-30" />
                  <div className="relative w-28 h-28 bg-white rounded-full flex items-center justify-center text-[2.5rem] shadow-xl z-10">
                    {data.icon}
                  </div>
                </div>

                <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6">
                  {data.title}
                </h1>

                <p className="text-base sm:text-[1.3rem] text-gray-700 opacity-80 whitespace-pre-line leading-relaxed px-4">
                  {data.subtitle}
                </p>

                <div className="w-24 h-2 my-8 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-white/90 rounded-full animate-progress" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
