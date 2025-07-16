import React from "react";

const features = [
  {
    title: "Voice Modality",
    desc: "Rehearse tough conversations or ask questions on the go, just by speaking.",
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/683cc91d70932816281346f2_28afc43aec0c8fa23bb36a6181b664ad_QPR-voice-modality%20%281%29.webp",
    bg: "bg-pink-50",
  },
  {
    title: "Meeting Assist",
    desc: "Capture meeting summaries, next steps, and action items instantly.",
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/683cc99f2c5be804fb74956a_4b77f7f97b90c4804a7105ee21790321_QPR-meeting-assist%402x.webp",
    bg: "bg-yellow-50",
  },
  {
    title: "Coach",
    desc: "Tackle tough conversations and receive real-time, personalized career guidance.",
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/683cc9bb5b5bb0142bb91de7_4732b88a9559cc04ba793e55213db4b1_QPR-coach%402x.webp",
    bg: "bg-green-50",
  },
  {
    title: "Proactive Insights",
    desc: "Lead with clarity by surfacing potential risks, growth opportunities, and timely support prompts.",
    img: "https://cdn.prod.website-files.com/64ad6f1aef87635bd23449f1/683e06fd4d2e1dd03ebde412_qpr-summer-2025-proactive-insights%402x.webp",
    bg: "bg-purple-50",
  },
];

const FeatureCardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {features.map((item, idx) => (
        <div
          key={idx}
          className={`rounded-2xl overflow-hidden shadow-sm border border-gray-200 p-2 flex flex-col`}
        >
          <div className="aspect-[5/4] rounded-xl overflow-hidden mb-4">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="px-3">
            <h3 className="text-[1.6rem] font-semibold text-gray-900 mb-1">
            {item.title}
          </h3>
          <p className="text-[1rem] font-semibold text-gray-500">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCardGrid;
