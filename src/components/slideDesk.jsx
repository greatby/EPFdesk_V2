"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRightIcon,ChevronLeftIcon} from '@heroicons/react/24/solid'
// import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer"

const slides = [
  {
    title: "\uD83C\uDFAF The Reality of HR Today",
    subtitle: "\uD83D\uDC49 You Run HR. Not a PF Helpdesk.",
    points: [
      "Endless PF questions from employees",
      "Delays, escalations, and reputation risk",
      "HR is stuck chasing EPFO, not building culture",
      "It\'s not scalable — and it\'s not what you were hired for",
    ],
    visual: "Overwhelmed HR inbox with PF tickets"
  },
  {
    title: "\uD83D\uDE80 What RSKEPF Does",
    subtitle: "\uD83D\uDC49 We Handle PF — So You Don’t Have To.",
    points: [
      "Dedicated helpdesk for PF grievance resolution",
      "Live ticket tracking for HR and employees",
      "Pan-India EPFO support — we even go physically, if needed",
      "No software, no setup. Just real human support."
    ],
    visual: "Three columns: PF Tickets | We Fix | You Relax"
  },
  {
    title: "\uD83E\uDDE0 Why This Matters",
    subtitle: "\uD83D\uDC49 PF Isn’t Just Admin. It’s Employee Trust.",
    points: [
      "PF issues affect morale, attrition, and employer brand",
      "A missed contribution or failed withdrawal = loss of trust",
      "RSKEPF keeps your people informed, and your team in control",
      "We work quietly in the background — you get the credit"
    ],
    visual: "Before/After: Confused employee → Smiling employee / HR inbox → Calm dashboard"
  },
  {
    title: "\uD83D\uDCC8 Trusted by Modern HR Teams",
    subtitle: "\uD83D\uDC49 Proven Support. Real Results.",
    points: [
      "\uD83E\uDDD1‍\uD83D\uDCBC 100+ Companies Supported",
      "\u2705 7,000+ PF Cases Resolved",
      "\uD83D\uDCC8 98% HR Satisfaction Score",
      "\uD83D\uDCB8 ₹0 Setup Cost"
    ],
    visual: "Logo wall, trust bar, or quote"
  },
  {
    title: "\uD83C\uDFAF Let’s Fix PF, Together",
    subtitle: "\uD83D\uDC49 Your HR Team Deserves a Backup.",
    points: [
      "Start a 14-day Pilot → We’ll handle real cases",
      "Book a 15-Minute Discovery Call",
      "Share your PF pain points — we’ll handle the rest"
    ],
    visual: "Human  img, CTA buttons",
    closing: "\"We chase PF issues, not your HR team.\""
  }
]

// const styles = StyleSheet.create({
//   page: { padding: 40, fontFamily: 'Helvetica' },
//   section: { marginBottom: 20 },
//   title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
//   heading: { fontSize: 14, marginBottom: 6 },
//   content: { marginLeft: 12, marginBottom: 6 },
//   quote: { fontStyle: 'italic', color: 'gray', marginTop: 10 },
// })

// const MyPDF = () => (
//   <Document>
//     {slides.map((slide, idx) => (
//       <Page key={idx} size="A4" style={styles.page}>
//         <View style={styles.section}>
//           <Text style={styles.title}>{slide.title}</Text>
//           <Text style={styles.heading}>{slide.heading}</Text>
//           {slide.points.map((point, i) => (
//             <Text key={i} style={styles.content}>• {point}</Text>
//           ))}
//           {slide.quote && <Text style={styles.quote}>{slide.quote}</Text>}
//         </View>
//       </Page>
//     ))}
//   </Document>
// )

export default function SlideDesk() {
  const [index, setIndex] = useState(0)
  const current = slides[index]

  return (
    <div className="bg-white px-4 py-10 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {current.title}
        </motion.h2>
        <h3 className="text-xl font-semibold text-gray-600">{current.subtitle}</h3>

        <ul className="space-y-2 text-left max-w-xl mx-auto">
          {current.points.map((point, i) => (
            <li key={i} className="flex items-center justify-center gap-2">
              {/* <span className="text-lg">\u2022</span> */}
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {current.visual && (
          <div className="mt-6 text-sm text-gray-400 italic">
            Visual: {current.visual}
          </div>
        )}

        {current.closing && (
          <blockquote className="text-xl italic text-gray-700 border-t pt-6 mt-8">
            {current.closing}
          </blockquote>
        )}

        <div className="flex justify-center gap-4 pt-10">
          <button
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            disabled={index === 0}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer disabled:cursor-default"
          >
            <ChevronLeftIcon className="size-6"/>
          </button>
          <button
            onClick={() => setIndex((i) => Math.min(i + 1, slides.length - 1))}
            disabled={index === slides.length - 1}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 cursor-pointer disabled:cursor-default"
          >
          <ChevronRightIcon className="size-6 "/>
          </button>
        {/* <PDFDownloadLink
          document={<MyPDF />}
          fileName="SlideDeck.pdf"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          {({ loading }) => (loading ? 'Preparing PDF...' : 'Download PDF')}
        </PDFDownloadLink> */}
        </div>
      </div>
    </div>
  )
}
