import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
// import { image } from 'html2canvas/dist/types/css/types/image'
import { useEffect, useState } from "react";

const cards = [
  {
    title: 'Unified Data',
    description: 'Pay employees and contractors in a few clicks.',
    image: '/images/67db42e6490940b072a7aeac_Run Payroll-p-500.webp',
    color: {
      bg: 'bg-rose-100',
      border: 'border-rose-200',
      raw: '#ffe4e6',
      stroke: '#ffe4e6'
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Peace of mind for every pay cycle.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            With a unified employee record, your payroll information is always up to date.
            Lattice calculates payroll and tracks deductions and contributions so you don’t have to.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67db49b01109f51c7bb212c2_a9ba4cd2bfdef51480350a75b0569f4e_feat-image-payroll-unified-data.webp"
          alt="Unified Data Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    )
  },
  {
    title: 'Tax Compliance',
    description: 'Auto-calculate & file all payroll taxes.',
    image: '/images/67db431bc50e51569725f6a0_Tax compliance.webp',
    color: {
      bg: 'bg-yellow-100',
      border: 'border-yellow-200',
      raw: '#fef9c3',
      stroke: '#fef9c3'
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Simplify compliance with worry-free withholdings.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Lattice files taxes on your behalf, and gives you all the data you need for reporting and auditing.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc43c71f563ef421a38eaa_a44c8c1ae5b22c26ebccb00e1b2b04f0_feat-image-payroll-tax-compliance.webp"
          alt="Tax Compliance Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    )
  },
  {
    title: 'Employee Self Service',
    description: 'Reduce HR admin burden.',
    image: '/images/67db434ac50e515697262a2b_Employee self service-p-500.webp',
    color: {
      bg: 'bg-blue-100',
      border: 'border-blue-200',
      raw: '#dbeafe',
      stroke: '#dbeafe'
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Empower employees with an easy, intuitive platform.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Let employees view and manage paystubs, bank accounts, and tax documents without asking HR.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e5669a66ad33bbfbabf4a3_feat-image-employee-self-service.webp"
          alt="Employee Self Service Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    )
  },
  {
    title: 'Time Tracking',
    description: 'Track, approve, and sync hours to payroll.',
    image: '/images/67db437a17d3aaef94ed34ad_Time tracking.webp',
    color: {
      bg: 'bg-green-100',
      border: 'border-green-200',
      raw: '#dcfce7',
      stroke: '#dcfce7'
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Get time back with built-in time tracking.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Cut down on manual data entry and errors with fast time card entry, review, and approval—synced automatically to payroll.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67e2b51dfb00d11fe21ace11_feat-image-time-tracking.webp"
          alt="Time Tracking Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    )
  },
  {
    title: 'Integrations',
    description: 'Connect Payroll to your favorite third-party apps.',
    image: '/images/67db439ff5e0bea132971dd4_Integrations.webp',
    color: {
      bg: 'bg-purple-100',
      border: 'border-purple-200',
      raw: '#f3e8ff',
      stroke: '#f3e8ff'
    },
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ensure every system works together seamlessly.
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Lattice Payroll integrates with your preferred third-party apps, like benefits, 401(k), and more.
          </p>
        </div>
        <img
          src="https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/67dc42fb273047112e42863a_cc3ed45b7dc81f77e5b48e5f03f5f3e1_feat-image-payroll-integrations.webp"
          alt="Integrations Visual"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    )
  }
];

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export default function FeatureTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLargeScreen = useMediaQuery("(min-width: 1000px)");
  const activeColor =
    activeIndex !== -1 ? cards[activeIndex].color : { border: "", raw: "#fff" };

  return (
    <section className="my-8 bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {isLargeScreen ? (
          <>
            {/* Desktop Tabs */}
            <div className="relative mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {cards.map((card, i) => {
                const isActive = activeIndex === i;
                const color = card.color;

                return (
                  <div
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    style={
                      isActive
                        ? {
                            "--tab-color-background": color.raw,
                            "--tab-color-border": color.stroke,
                          }
                        : {}
                    }
                    className={`relative cursor-pointer rounded-[18px] border border-[#0000001c] px-4 py-3 shadow-[0px_0px_6px_#0000001c] transition-all ${
                      isActive
                        ? `z-20 -mb-4 rounded-b-none ${color.bg} border-0 shadow-none`
                        : "bg-white hover:shadow"
                    }`}
                  >
                    <img
                      src={card.image}
                      alt="dummy"
                      srcSet=""
                      className="rounded-[20px]"
                    />

                    <h4 className="mt-1 text-[1rem] font-semibold">
                      {card.title}
                    </h4>
                    <p className="mt-1 text-[0.9rem] text-gray-600">
                      {card.description}
                    </p>

                    {/* {isActive && (
                      <div className="feature-tab-corners">
                        {i !== 0 && (
                          <div className="feature-tab-corner is-right"></div>
                        )}
                        <div
                          className="middleContent"
                          style={{ backgroundColor: color.raw }}
                        ></div>
                        {i !== cards.length - 1 && (
                          <div className="feature-tab-corner is-left"></div>
                        )}
                      </div>
                    )} */}
                    {isActive && (
                      <div
                        key={`corners-${i}`} // forces re-render on tab switch
                        className="feature-tab-corners"
                        style={{
                          "--tab-color-background": color.raw,
                          "--tab-color-border": color.stroke,
                        }}
                      >
                        {i !== 0 && (
                          <div className="feature-tab-corner is-right"></div>
                        )}
                        <div
                          className="middleContent"
                          style={{ backgroundColor: color.raw }}
                        ></div>
                        {i !== cards.length - 1 && (
                          <div className="feature-tab-corner is-left"></div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Content Panel */}
            <div
              className={`relative rounded-t-none rounded-b-2xl p-6 md:p-10 ${activeColor.border}`}
              style={{ backgroundColor: activeColor.raw }}
            >
              {cards[activeIndex]?.content}
            </div>
          </>
        ) : (
          <div className="flex flex-wrap items-start justify-between gap-4">
            {cards.map((card, i) => {
              const isActive = activeIndex === i;
              const color = card.color;

              return (
                <div
                  key={i}
                  className={clsx(
                    "overflow-hidden rounded-xl border transition",
                    color.border,
                    "flex-1",
                    "w-full basis-full",
                    "md:max-w-[calc(50%-0.5rem)] md:basis-[calc(50%-0.5rem)]"
                  )}
                  style={{
                    backgroundColor: isActive ? color.raw : "white",
                  }}
                >
                  <button
                    className="w-full px-4 py-3 text-left"
                    onClick={() => setActiveIndex(isActive ? -1 : i)}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 [@media(min-width:540px)]:flex-row">
                      <img
                        src={card.image}
                        alt="dummy"
                        className="h-48 flex-shrink-0 rounded-[20px] object-cover [@media(min-width:540px)]:h-36 [@media(min-width:540px)]:w-58"
                      />
                      <div className="flex-1">
                        <h4 className="mt-1 text-[1rem] font-semibold">
                          {card.title}
                        </h4>
                        <p className="mt-1 text-[0.9rem] text-gray-600">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden px-4 pt-2 pb-4 text-sm text-gray-700"
                      >
                        {card.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
