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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto p-6">
          {/* Left Big Card */}
          <div className="bg-[#eafce9] rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col md:flex-row items-center gap-6">
            <img
              src="/images/bj7.png"
              alt="Main Banner"
              className="rounded-xl w-full md:w-1/2 object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                The True Cost of Waiting{" "}
                {/* <span className="text-gray-400 ml-1">›</span> */}
              </h3>
              <p className="text-md text-gray-600">
                Every day spent managing EPF, ESIC, PT, or LWF manually drains
                strategic resources, increases audit risk, and delays business
                growth.
              </p>
            </div>
          </div>

          {/* Right Two Small Cards */}
          <div className="flex flex-col gap-6">
            {/* Top Right Card */}
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
              {/* <img
                src="https://via.placeholder.com/80x80.png?text=Templates"
                alt="Toolkit"
                className="rounded-xl w-16 h-16 object-cover"
              /> */}
            </div>

            {/* Bottom Right Card */}
            <div className="bg-[#f8f0ff] rounded-2xl shadow-md hover:shadow-lg transition p-6 flex items-center gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  Your Strategic Advantage Awaits{" "}
                  {/* <span className="text-gray-400">›</span> */}
                </h3>
                <p className="text-md text-gray-600">
                  EPFDesk isn’t just a vendor — we’re a partner. Secure your
                  onboarding slot now to turn compliance into a strategic edge.
                </p>
              </div>
              {/* <img
                src="https://via.placeholder.com/80x80.png?text=Partners"
                alt="Partners"
                className="rounded-xl w-16 h-16 object-cover"
              /> */}
            </div>
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
