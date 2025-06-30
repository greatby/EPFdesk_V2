 
import { useState } from 'react'
import { Container } from './container'
import { Heading } from './text'

const testimonials = [
  {
    name: 'Client A',
    role: 'Product Manager',
    quote:
      'This platform has revolutionized our workflow and boosted productivity.',
     img: '/images/WhatsApp  img 2025-06-12 at 15.14.38 (1).jpeg',
  },
  {
    name: 'Client B',
    role: 'Lead Developer',
    quote:
      'Excellent support and clean UI. Highly recommend for fast-paced teams.',
     img: '/images/WhatsApp  img 2025-06-12 at 15.14.38.jpeg',
  },
  {
    name: 'Client C',
    role: 'UX Designer',
    quote: 'The intuitive design tools help our team collaborate effortlessly.',
     img: '/images/WhatsApp  img 2025-06-12 at 15.14.38 (1).jpeg',
  },
]

export default function TestimonialTabs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { name, role, quote,  img } = testimonials[activeIndex]

  return (
    <>
      <Container>
        <Heading as="h3" className="mt-2 mb-[20px]">
          Testimonials
        </Heading>
      </Container>
      <div className="mx-auto w-full max-w-5xl p-6">
        <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition md:flex-row">
          <div className="h-60 w-full md:h-auto md:w-1/3">
            <img
              src={ img}
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-center p-6 md:w-2/3">
            <p className="mb-4 text-lg text-gray-700 italic">“{quote}”</p>
            <div>
              <h4 className="text-xl font-semibold">{name}</h4>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 border-t border-gray-200 pt-4">
          {testimonials.map((author, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative cursor-pointer px-4 py-2 text-sm font-medium transition ${
                activeIndex === idx
                  ? 'border-t-2 border-blue-600 text-blue-600'
                  : 'border-t-2 border-transparent text-gray-500 hover:text-blue-600'
              }`}
            >
              {author.name}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
