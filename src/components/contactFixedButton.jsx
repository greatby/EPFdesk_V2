 

import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function FloatingFormToggle({ animate = true }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <>
        <div
          className={`fixed right-6 bottom-6 z-50 flex flex-col gap-3 transition-all duration-500 ease-in-out sm:flex-row ${animate ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} `}
        >
          <button
            onClick={() => {
              const phone = '919591773588'
              const text = encodeURIComponent('Hi, I need help with EPFdesk.')
              window.open(`https://wa.me/${phone}?text=${text}`, '_blank')
            }}
            className="flex h-[50px] w-[165px] cursor-pointer items-center gap-2 rounded-[16px] bg-[rgb(209,244,112)] p-4 text-black shadow-lg transition hover:bg-[rgb(209,244,112)]"
          >
            <IoLogoWhatsapp className="size-6" /> WhatsApp
          </button>

          <button
            onClick={() => setIsOpen(true)}
            className="flex h-[50px] w-[165px] cursor-pointer items-center gap-2 rounded-[16px] bg-[rgb(209,244,112)] p-4 text-black shadow-lg transition hover:bg-[rgb(209,244,112)]"
          >
            <EnvelopeIcon className="size-6" /> Contact Sales
          </button>
        </div>
      </>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-end bg-black/30"
          onClick={() => setIsOpen(false)} 
        >
          <div
            className="h-[80vh] w-full max-w-[500px] translate-y-0 overflow-y-auto bg-[#f5f5f5] p-6 shadow-lg transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="mx-[-25px] mb-4 flex items-center justify-between border-b border-b-gray-200 px-[23px] pb-[23px]">
              <h2 className="text-xl font-semibold">Contact Us</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-2xl leading-none text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
            </div>

            <form className="mx-auto max-w-2xl space-y-6 py-2">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="First and last name"
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Work email
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Company size
                  </label>
                  <select className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm">
                    <option>Number of employees</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-200</option>
                    <option>201-500</option>
                    <option>500+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Message <span className="text-gray-500">(optional)</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project, needs, and timeline."
                  className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                ></textarea>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Where did you find us?{' '}
                  <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="How did you hear about us?"
                  className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded cursor-pointer bg-black py-2 text-sm font-medium text-white hover:bg-gray-900"
              >
                Contact sales
              </button>

              <p className="mt-2 text-xs text-gray-500">
                By submitting this form, you confirm that you have read and
                understood Workforce&apos;s {''}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                . This site is protected by {''}
                <a href="#" className="underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#" className="underline">
                  Terms of Service
                </a>{' '}
                apply.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
