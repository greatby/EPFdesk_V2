 

import React, { useRef } from 'react'



const CardSlider = () => {
  const testimonials = [
  {
    title: 'Human Handled.',
    img: '/images/doodle_1_optimized.webp',
    description: [
      `Your employees don’t get automated replies or confusing menus.
They talk to real PF experts — people who understand how EPFO works. We answer,
guide, fix, and follow up. Every case is human handled, not machine deflected. That
means better outcomes and calmer people`,
    ],
  },
  {
    title: 'Working Abroad, get EPF done in India.',
    img: '/images/doodle_2_optimized.webp',
    description: [
      `Employees outside India struggle the most
with PF claims and withdrawals. We act as your local liaison - visiting EPFOs, filing
grievances, and fixing issues even for NRIs. No VPN, no travel, no agent chasing.
Just real resolution, across borders.`,
    ],
  },
  {
    title: 'One Team on your side.',
    img: '/images/doodle_3_optimized.webp',
    description: [
      `PF grievance redressal is often delayed by blame games
between employers, employees, and EPFO. We eliminate that. Your employee raises
a ticket - we investigate, escalate, and resolve it directly with EPFO. No bouncing
back to HR. No confusion about who’s responsible. Just one team, accountable
until it’s done`,
    ],
  },
  {
    title: 'Your EPF India Network.',
    img: '/images/doodle_4_optimized.webp',
    description: [
      `Most PF issues can only be resolved by visiting local EPFO
offices — but your employees are remote or overseas. Our network covers EPFO
offices across India. We physically represent your case when required. No more
asking employees to take time off to fix their PF. We go where your people can’t.`,
    ],
  },
  {
    title: 'EPF Withdrawal Issues.',
    img: '/images/doodle_5_optimized.webp',
    description: [
      `You don’t need to
deploy a tool, train
your HR, or change
your workflows.
We work via a secure
link your team and
employees can access
anytime.
Raise a ticket. Get
updates. Track
progress.
Everything handled by
our backend
operations — no tech
lift for you.
Go live in less than a
day.`,
    ],
  },
  {
    title: 'Go live just now.',
    img: '/images/doodle_6_optimized.webp',
    description: [
      `You don’t need to deploy a tool, train your HR, or change your
workflows. We work via a secure link your team and employees can access anytime.
Raise a ticket. Get updates. Track progress. Everything handled by our backend
operations — no tech lift for you. Go live in less than a day.`,
    ],
  },
  // {
  //   title: 'Name / DOB / Gender Mismatch',
  //   img: '/images/doodle_7_optimized.webp',
  //   description: [
  //     'Personal details not matching Aadhaar',
  //     'Problems during claim or KYC due to incorrect info',
  //     'Need for joint declaration and employer support',
  //   ],
  // },
  // {
  //   title: 'Grievance Filing & Escalation',
  //   img: '/images/doodle_5_optimized.webp',
  //   description: [
  //     'Lack of response from EPFO',
  //     'Escalating unresolved tickets',
  //     'Confusion about how to use EPFiGMS (grievance portal)',
  //   ],
  // },
  // {
  //   title: 'Linking Issues',
  //   img: '/images/doodle_9_optimized.webp',
  //   description: [
  //     'Aadhaar not linking with UAN',
  //     'Mobile number update or email update',
  //     'Linking multiple PF accounts under one UAN',
  //   ],
  // },
  // {
  //   title: 'Taxation & TDS Confusion',
  //   img: '/images/doodle_1_optimized.webp',
  //   description: [
  //     'Why TDS was deducted on PF withdrawal',
  //     'How to file Form 15G/H',
  //     'How PF interest is taxed',
  //   ],
  // },
]
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].offsetWidth + 16 // card + gap
      scrollRef.current.scrollBy({ left: direction === 'next' ? cardWidth : -cardWidth, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full">
      {/* Card container */}
      <div
        ref={scrollRef}
        className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-10"
      >
        {testimonials.map(({ img, title, description }, index) => (
          <div
            key={index}
            className="flex w-72 shrink-0 snap-start flex-col rounded-2xl bg-white shadow"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={title}
                className="absolute inset-0 h-full w-full rounded-2xl object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col p-4">
              <p className="text-sm leading-snug text-gray-700">
                <strong className="font-semibold text-black">{title}</strong>{' '}
                {Array.isArray(description) ? description.join('. ') + '.' : description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Buttons */}
      <div className="absolute bottom-2 right-2 flex gap-2">
        <button
          onClick={() => scroll('prev')}
          className="rounded-full bg-gray-800 px-3 py-2 text-white hover:bg-gray-700"
        >
          ←
        </button>
        <button
          onClick={() => scroll('next')}
          className="rounded-full bg-gray-800 px-3 py-2 text-white hover:bg-gray-700"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default CardSlider
