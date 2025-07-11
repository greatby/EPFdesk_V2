
import React, { useEffect, useRef, useState } from 'react'
import Slide from './slide'

const slideData = [
  {
    id: '01',
    title: 'Monthly Compliance Panic',
    desc: `You're racing against monthly EPFO & ESIC deadlines, juggling multiple state-wise portals for EPF, ESIC, PT, and LWF instead of growing your business – turning you into a full-time compliance officer rather than the innovator you set out to be.`,
    bg: 'bg-[#fceff1]',
   
  },
  {
    id: '02',
    title: 'Employee Frustration & HR Burnout',
    desc: 'Unresolved EPF & ESIC Issues impact employee morale and productivit y, leading to increased HR Workload from queries.',
    bg: 'bg-[#f0f4ff]',
   
  },
  {
    id: '03',
    title: 'Statutory penalties and audit risk.',
    desc: 'Non-compliance with EPFO, ESIC, and other statutory requirements can trigger penalties up to 100% of dues, plus interest and potential audit risks that could cripple your business finances.',
    bg: 'bg-[#e7fbe9]',
  },
  {
    id: '04',
    title: 'The Cost of Lost Productivity and Focus.',
    desc: 'HR and Finance teams spend hours on employee linking, KYC approvals, and portal data entry instead of focusing on talent development, financial strategy, and business growth that actually drives revenue.',
    bg: 'bg-[#fff7ed]',
  },
]


export default function VerticalCarousel() {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    const onScroll = () => {
      const scrollTop = container.scrollTop
      const slideHeight = window.innerHeight
      const index = Math.round(scrollTop / slideHeight)
      setActiveIndex(index)
    }

    container.addEventListener('scroll', onScroll)
    return () => container.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute top-6 left-6 z-10 hidden sm:flex flex-col space-y-2 text-sm font-medium">
        {slideData.map((_, idx) => (
          <span
            key={idx}
            className={`transition-colors ${
              activeIndex === idx ? 'text-black font-bold' : 'text-gray-400'
            }`}
          >
            {String(idx + 1).padStart(2, '0')}
          </span>
        ))}
      </div>

      <div
        ref={containerRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory
                   scrollbar-hide [scrollbar-width:none]
                   [&::-webkit-scrollbar]:hidden"
      >
        {slideData.map((slide, idx) => (
          <Slide key={slide.id || idx} {...slide} />
        ))}
      </div>
    </div>
  )
}


