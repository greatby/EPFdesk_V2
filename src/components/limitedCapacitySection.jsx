const strategicCards = [
  {
    title: "The True Cost of Waiting",
    description:
      "Every day spent managing EPF, ESIC, PT, or LWF manually drains strategic resources, increases audit risk, and delays business growth.",
    icon: "⏳",
    image: "/images/bj7.png",
    gradient: "from-[#d4fc79] to-[#96e6a1]",
    bgs: ["bg-[#ff6b6b]", "bg-[#4ecdc4]"],
  },
  {
    title: "Expert-Led Capacity",
    description:
      "Our specialized legal, process, and field teams are finite resources. We allocate them carefully to uphold our gold-standard compliance services.",
    icon: "👩‍⚖️",
    gradient: "from-[#ffecd2] to-[#fcb69f]",
    bgs: ["bg-[#ffe66d]", "bg-[#4ecdc4]"],
  },
  {
    title: "Your Strategic Advantage Awaits",
    description:
      "EPFDesk isn’t just a vendor — we’re a partner. Secure your onboarding slot now to turn compliance into a strategic edge.",
    icon: "🚀",
    gradient: "from-[#84fab0] to-[#8fd3f4]",
    bgs: ["bg-[#d299c2]", "bg-[#ff6b6b]"],
  },
];

const LimitedCapacitySection = () => {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Secure Your Spot for Uncompromising Quality
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            At EPFDesk.com, our dedication to unparalleled service quality and
            meticulous compliance is non-negotiable. We limit onboarding
            capacity to ensure every client receives expert attention and
            flawless execution.
          </p>
        </div>

        {/* <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🕒 The True Cost of Waiting
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Every day spent managing EPF, ESIC, PT, or LWF manually drains
              strategic resources, increases audit risk, and delays business
              growth.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              👥 Expert-Led Capacity
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our specialized legal, process, and field teams are finite
              resources. We allocate them carefully to uphold our gold-standard
              compliance services.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🚀 Your Strategic Advantage Awaits
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              EPFDesk isn’t just a vendor — we’re a partner. Secure your
              onboarding slot now to turn compliance into a strategic edge.
            </p>
          </div>
        </div> */}

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto p-6">
          
          <div className="bg-[#eafce9] rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col md:flex-row items-center gap-6">
            <img
              src="/images/bj7.png"
              alt="Main Banner"
              className="rounded-xl w-full md:w-1/2 object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                The True Cost of Waiting{" "}
              
              </h3>
              <p className="text-md text-gray-600">
                Every day spent managing EPF, ESIC, PT, or LWF manually drains
                strategic resources, increases audit risk, and delays business
                growth.
              </p>
            </div>
          </div>

         
          <div className="flex flex-col gap-6">
         
            <div className="bg-[#fffae6] rounded-2xl shadow-md hover:shadow-lg transition p-6 flex items-center gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  Expert-Led Capacity
                </h3>
                <p className="text-md text-gray-600">
                  Our specialized legal, process, and field teams are finite
                  resources. We allocate them carefully to uphold our
                  gold-standard compliance services.
                </p>
              </div>
              
            </div>

           
            <div className="bg-[#f8f0ff] rounded-2xl shadow-md hover:shadow-lg transition p-6 flex items-center gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  Your Strategic Advantage Awaits{" "}
                
                </h3>
                <p className="text-md text-gray-600">
                  EPFDesk isn’t just a vendor — we’re a partner. Secure your
                  onboarding slot now to turn compliance into a strategic edge.
                </p>
              </div>
             
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto p-6">
          {/* Left Big Card */}
          <div
            className={`relative flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-br ${strategicCards[0].gradient}`}
          >
            {/* Animated bubbles */}
            <div className="absolute inset-0 pointer-events-none">
              {strategicCards[0].bgs.map((bg, i) => (
                <div
                  key={i}
                  className={`absolute rounded-full opacity-20 ${bg} animate-bounce ${
                    i === 0
                      ? "w-5 h-5 top-[20%] left-[20%]"
                      : "w-6 h-6 bottom-[30%] right-[30%]"
                  }`}
                ></div>
              ))}
            </div>

            {/* Image */}
            <img
              src={strategicCards[0].image}
              alt="Main Visual"
              className="rounded-xl w-full md:w-1/2 object-cover z-10"
            />

            {/* Text */}
            <div className="flex-1 z-10">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center text-2xl w-12 h-12 rounded-full bg-white shadow">
                  {strategicCards[0].icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {strategicCards[0].title}
                </h3>
              </div>
              <p className="text-white/90 text-md">
                {strategicCards[0].description}
              </p>
            </div>
          </div>

          {/* Right Two Small Cards */}
          <div className="flex flex-col gap-6">
            {strategicCards.slice(1).map((card, idx) => (
              <div
                key={idx}
                className={`relative flex items-center gap-4 p-6 rounded-3xl shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-br ${card.gradient}`}
              >
                {/* Animated bubbles */}
                <div className="absolute inset-0 pointer-events-none">
                  {card.bgs.map((bg, i) => (
                    <div
                      key={i}
                      className={`absolute rounded-full opacity-20 ${bg} animate-bounce ${
                        i === 0
                          ? "w-4 h-4 top-[25%] left-[25%]"
                          : "w-6 h-6 bottom-[20%] right-[20%]"
                      }`}
                    ></div>
                  ))}
                </div>

                {/* Icon */}
                <div className="z-10 flex items-center justify-center text-2xl w-12 h-12 rounded-full bg-white shadow shrink-0">
                  {card.icon}
                </div>

                {/* Text */}
                <div className="flex-1 z-10">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {card.title}
                  </h3>
                  <p className="text-white/90 text-md">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
            If you're ready to unlock HR efficiency and transform compliance
            chaos into a competitive edge, act now. We prioritize depth over
            volume — and capacity is limited.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LimitedCapacitySection;
