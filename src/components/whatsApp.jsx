 
import { useEffect, useRef, useState } from 'react'
import { FaRegEnvelope } from 'react-icons/fa6'
import { IoLogoWhatsapp } from 'react-icons/io'

const LinkButtons = () => {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      <div className="my-5 flex flex-row lg: items-center justify-center gap-2 md:flex-row">
        <button
          onClick={() => {
            const phone = '919591773588'
            const text = encodeURIComponent('Hi, I need help with EPFdesk.')
            window.open(`https://wa.me/${phone}?text=${text}`, '_blank')
          }}
          className="flex h-[50px] w-[155px] cursor-pointer items-center gap-2 rounded-[16px] bg-[rgb(209,244,112)] p-4 text-black shadow-lg transition hover:bg-[rgb(209,244,112)]"
        >
          <IoLogoWhatsapp className="size-5" /> WhatsApp
        </button>

        <button
          onClick={() => setIsOpen(true)}
          className="flex h-[50px] w-[155px] cursor-pointer items-center justify-center gap-2 rounded-[16px] bg-[rgb(209,244,112)] p-3 text-black shadow-lg transition hover:bg-[rgb(209,244,112)]"
        >
          <FaRegEnvelope size={18} /> Contact Sales
        </button>
      </div>
      {/* <div className="my-2 text-center text-[20px] font-bold text-black">
        <p>Get started in 24 hours</p>
      </div> */}
      {isOpen && (
        <div className="animate-fadeIn fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 backdrop-blur-sm ">
          <div
            ref={modalRef}
            className="animate-slideUp relative mx-4 w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl transition-all duration-300 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-4 cursor-pointer text-[40px] text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>

            <form className="space-y-6 py-2">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 text-left block text-sm font-medium">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="First and last name"
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-1 text-left block text-sm font-medium">
                    Work email
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-1 text-left block text-sm font-medium">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-1 text-left block text-sm font-medium">
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
                <label className="mb-1 text-left block text-sm font-medium">
                  Message <span className="text-gray-500">(optional)</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project, needs, and timeline."
                  className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm"
                ></textarea>
              </div>

              <div>
                <label className="mb-1 text-left block text-sm font-medium">
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

export default LinkButtons
