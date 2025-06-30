 

import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
// import {  img } from 'html2canvas/dist/types/css/types/ img'
import { useEffect, useState } from 'react'

const cards = [
  {
    title: 'Unified Data',
    description: 'Pay employees and contractors in a few clicks.',
     img: '/images/67db42e6490940b072a7aeac_Run Payroll-p-500.webp',
    color: {
      bg: 'bg-rose-100',
      border: 'border-rose-200',
      raw: '#ffe4e6',
      stroke: '#ffe4e6',
    },
    content: (
      <>
        <h2 className="text-2xl font-bold">Unified Data</h2>
        <p className="mt-2 text-gray-700">
          Centralize employee and contractor data for easy access and
          management.
        </p>
      </>
    ),
  },
  {
    title: 'Tax Compliance',
    description: 'Auto-calculate & file all payroll taxes.',
     img: '/images/67db431bc50e51569725f6a0_Tax compliance.webp',
    color: {
      bg: 'bg-yellow-100',
      border: 'border-yellow-200',
      raw: '#fef9c3',
      stroke: '#fef9c3',
    },
    content: (
      <>
        <h2 className="text-2xl font-bold">Tax Compliance</h2>
        <p className="mt-2 text-gray-700">
          Automatically manage tax calculations, filings, and compliance
          effortlessly.
        </p>
      </>
    ),
  },
  {
    title: 'Employee Self Service',
    description: 'Reduce HR admin burden.',
     img:
      '/images/67db434ac50e515697262a2b_Employee self service-p-500.webp',

    color: {
      bg: 'bg-blue-100',
      border: 'border-blue-200',
      raw: '#dbeafe',
      stroke: '#dbeafe',
    },
    content: (
      <>
        <h2 className="text-2xl font-bold">Employee Self Service</h2>
        <p className="mt-2 text-gray-700">
          Empower employees to manage their own details, pay history, and
          documents.
        </p>
      </>
    ),
  },
  {
    title: 'Time Tracking',
    description: 'Track, approve, and sync hours to payroll.',
     img: '/images/67db437a17d3aaef94ed34ad_Time tracking.webp',

    color: {
      bg: 'bg-green-100',
      border: 'border-green-200',
      raw: '#dcfce7',
      stroke: '#dcfce7',
    },
    content: (
      <>
        <h2 className="text-2xl font-bold">Time Tracking</h2>
        <p className="mt-2 text-gray-700">
          Simplify hour tracking with smart time cards and payroll sync.
        </p>
      </>
    ),
  },
  {
    title: 'Integrations',
    description: 'Connect Payroll to your favorite third-party apps.',
     img: '/images/67db439ff5e0bea132971dd4_Integrations.webp',

    color: {
      bg: 'bg-purple-100',
      border: 'border-purple-200',
      raw: '#f3e8ff',
      stroke: '#f3e8ff',
    },
    content: (
      <>
        <h2 className="text-2xl font-bold">Integrations</h2>
        <p className="mt-2 text-gray-700">
          Seamlessly integrate with tools like Slack, QuickBooks, and more.
        </p>
      </>
    ),
  },
]

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

export default function FeatureTabs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const isLargeScreen = useMediaQuery('(min-width: 1200px)')
  const activeColor = activeIndex !== -1 ? cards[activeIndex].color : { border: '', raw: '#fff' }

  return (
    <section className="my-8 bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {isLargeScreen ? (
          <>
            {/* Desktop Tabs */}
            <div className="relative mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {cards.map((card, i) => {
                const isActive = activeIndex === i
                const color = card.color

                return (
                  <div
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    style={
                      isActive
                        ? {
                            '--tab-color-background': color.raw,
                            '--tab-color-border': color.stroke,
                          }
                        : {}
                    }
                    className={`relative cursor-pointer rounded-[20px] border border-[#0000001c] px-4 py-3 shadow-[0px_0px_6px_#0000001c] transition-all ${
                      isActive
                        ? `z-20 -mb-4 rounded-b-none ${color.bg} border-0 shadow-none`
                        : 'bg-white hover:shadow'
                    }`}
                  >
                    <img
                      src={card. img}
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

                    {isActive && (
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
                    )}
                  </div>
                )
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
              const isActive = activeIndex === i
              const color = card.color

              return (
                <div
                  key={i}
                  className={clsx(
                    'overflow-hidden rounded-xl border transition',
                    color.border,
                    'flex-1',
                    'w-full basis-full',
                    'md:max-w-[calc(50%-0.5rem)] md:basis-[calc(50%-0.5rem)]',
                  )}
                  style={{
                    backgroundColor: isActive ? color.raw : 'white',
                  }}
                >
                  <button
                    className="w-full px-4 py-3 text-left"
                    onClick={() => setActiveIndex(isActive ? -1 : i)}
                  >
                    <div className="flex flex-col items-start justify-center gap-4 [@media(min-width:540px)]:flex-row">
                      <img
                        src={card. img}
                        alt="dummy"
                        className="h-48 w-full flex-shrink-0 rounded-[20px] object-cover [@media(min-width:540px)]:h-36 [@media(min-width:540px)]:w-58"
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
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden px-4 pt-2 pb-4 text-sm text-gray-700"
                      >
                        {card.content}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
