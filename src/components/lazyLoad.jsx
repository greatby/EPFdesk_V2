 

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function LazyMotionWrapper({
  children,
  threshold = 0.2,
  delay = 0.1,
  duration = 0.5,
  animationType = 'fade-up',
}) {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])


  const animationVariants = {
    'fade-up': { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    'fade': { initial: { opacity: 0 }, animate: { opacity: 1 } },
    'slide-left': { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
    'slide-right': { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
    'zoom-in': { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 } },
  }

  const selected = animationVariants[animationType] || animationVariants['fade-up']

  return (
    <div ref={ref}>
      {visible ? (
        <motion.div
          initial={selected.initial}
          animate={selected.animate}
          transition={{ duration, delay, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      ) : null}
    </div>
  )
}


