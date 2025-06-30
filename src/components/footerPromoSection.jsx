 

import React from 'react'

const FooterPromoSection = () => {
  return (
  <section className="w-full px-4 py-12 sm:px-6 lg:px-12">
  <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
 
    <div className="w-full md:flex-1 flex justify-center md:justify-start">
      <img
        src="/images/Fotter.png"
        alt="Footer Illustration"
        className="w-full max-w-full h-auto object-contain"
      />
    </div>

 
    <div className="w-full md:flex-1 text-center md:text-left">
      <h2 className="text-2xl sm:text-3xl font-semibold leading-snug">
        Finally, a Way Out of the Maze.
        <br />
        Customize What You Need and Get Started Instantly.
      </h2>
    </div>
  </div>
</section>

  )
}

export default FooterPromoSection
