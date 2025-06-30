// // components/FadeInWhenVisible.tsx
//  

// import { motion, useAnimation } from 'framer-motion'
// import { useEffect, useRef } from 'react'
// import { useInView } from 'framer-motion'

// export default function FadeInWhenVisible({ children }) {
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })
//   const controls = useAnimation()

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible')
//     }
//   }, [inView, controls])

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//       variants={{
//         hidden: { opacity: 0, y: 40 },
//         visible: { opacity: 1, y: 0 },
//       }}
//     >
//       {children}
//     </motion.div>
//   )
// }

 

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

// Preset animation variants
const variantPresets = {
  'fade-up': {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-down': {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  'zoom-in': {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
}

export default function FadeInWhenVisible({
  children,
  type = 'fade-up',
  duration = 0.6,
  delay = 0,
  ease = 'easeOut',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  const selectedVariants = variantPresets[type] || variantPresets['fade-up']

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay, ease }}
      variants={selectedVariants}
    >
      {children}
    </motion.div>
  )
}

