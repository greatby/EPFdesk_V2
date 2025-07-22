import React from 'react';


const MazeEscapeSection = () => {
  return (
    <section className="w-full bg-white px-6 py-12 sm:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-3xl font-bold text-gray-900 mb-4">
            Finally, a way out of the Maze.
          </h2>
          <p className=" text-[1.1rem] text-gray-700 mb-6">
            The time for complex, fragmented, and risky compliance management is over.
            <strong> EPFDesk.com</strong> offers the expert-led, seamless solutions your HR and Finance teams need to thrive.
            Experience true peace of mind and strategic focus, knowing your most critical obligations are handled with precision.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src='/images/Fotter-removebg-preview.png'
            alt="Escape the Maze"
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default MazeEscapeSection;
