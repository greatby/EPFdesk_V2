// export default function Slide({ title, desc, bg = "bg-white" }) {
//   return (
//     <section className={`w-full h-screen snap-start ${bg}`}>
//       <div className="flex flex-col lg:flex-row items-center justify-center h-full max-w-7xl mx-auto px-6 py-12">
//         {/* Title Left Column */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center h-full">
//           <h2 className="text-3xl sm:text-4xl font-bold text-center lg:text-left">
//             {title}
//           </h2>
//         </div>

//         {/* Description Right Column */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center h-full">
//           <p className="text-lg text-gray-600 text-center lg:text-left max-w-lg">
//             {desc}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
import { CheckCircleIcon } from '@heroicons/react/24/solid';
export default function Slide({ title, heading, body, image, bg = 'bg-white' }) {
  return (
    <section className={`w-full h-screen snap-start ${bg}`}>
      <div className="flex flex-col lg:flex-row items-center justify-center h-full max-w-7xl mx-auto px-6 py-12 gap-8">
        {/* Title Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center h-full space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-left">{title}</h2>
          <p className="text-lg text-gray-600 text-left max-w-md">{heading}</p>
        </div>

        {/* Features Right Column */}
        <div className="w-full lg:w-1/2 flex items-center justify-center h-full">
          <div className="max-w-lg w-full space-y-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6">
            <ul className="space-y-4 text-left text-gray-700">
              {body.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            {image && <img src={image} alt={title} className="rounded-xl w-full h-auto object-cover" />}
          </div>
        </div>
      </div>
    </section>
  );
}