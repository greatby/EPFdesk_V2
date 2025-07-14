import React, { useState } from 'react';

const FaqAccordion = ({ faqs, title = 'Frequently Asked Questions' }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md transition-all duration-300 bg-white"
          >
            <button
              onClick={() => toggle(index)}
              className={`w-full flex justify-between items-center text-left px-4 py-3 font-medium transition-colors duration-300 focus:outline-none ${
                openIndex === index ? 'text-indigo-600' : 'text-gray-900'
              }`}
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="text-base">{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 text-indigo-600' : 'text-gray-400'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id={`faq-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out px-4 text-gray-700 text-sm ${
                openIndex === index ? 'max-h-[500px] py-2' : 'max-h-0'
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqAccordion;
