const largeCard = {
  title: "Guided Ticket Creation",
  desc: `Employees can easily log tickets for virtually all EPF issues. This includes common queries like "How to check EPF balance online," "How to activate UAN," "How to update EPF KYC," and "EPF withdrawal process."`,
  img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c253608b4895d67133ff5f_resource-ebook-how-to-build-hr-tech-stack.webp",
  tag: "ebook",
};

const sideCards = [
  {
    title:
      "Each submitted ticket comes with a clear, live progress bar, transparent status updates, and estimated resolution timelines.",
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/655563b2ae20072b28778fee_65368988612a3c87e7bdae3e_360-review-questions.webp",
    tag: "Real-time Progress Tracking",
  },
  {
    title:
      "Employees receive proactive updates via email or SMS as their ticket progresses through the resolution stages",
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/64c27b7d012add414872b674_resource-ebook-hr-guide-performance-management.webp",
    tag: "Automated Notifications",
  },
  {
    title: `Our system handles a vast range of concerns, from simple queries (e.g.,"How to download EPF passbook") to more complex EPF transfer cases and pension-related inquiries."`,
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/6839cdc7a0b99ab1240490f2_article-why-talent-reviews-are-important.jpg",
    tag: "Comprehensive Issue Coverage",
  },
];

const ResourcesGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Streamlined Query Management System
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Left Column: Big Card */}
          <a
            href="#"
            className="lg:col-span-2 flex flex-col rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white h-full"
          >
            <div className="bg-gray-100 overflow-hidden rounded-xl">
              <img
                src={largeCard.img}
                alt={largeCard.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* This was being hidden before */}
            <div className="p-5 flex flex-col flex-1">
              {/* <div className="mb-2 inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                {largeCard.tag}
              </div> */}
              <h3 className="text-xl font-semibold mb-2">{largeCard.title}</h3>
              <p className="text-sm text-gray-600">{largeCard.desc}</p>
            </div>
          </a>

          {/* Right Column: 3 Small Cards in 3 rows */}
          <div className="flex flex-col justify-start gap-6 h-full">
            {sideCards.map((card, idx) => (
              <a
                key={idx}
                href="#"
                className="flex gap-4 px-2 items-center bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <div className="w-24 h-24 flex-shrink-0  rounded-xl bg-gray-100 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pr-4 py-3">
                  <div className="mb-1 inline-block bg-gray-200 text-gray-800 text-xs px-2 py-0.5 rounded-full">
                    {card.tag}
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 leading-snug">
                    {card.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesGrid;
