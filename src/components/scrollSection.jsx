 

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollSection({
  children,
  animationType = 'fade-up',
  className = '',
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])
  const xPositive = useTransform(scrollYProgress, [0, 1], [50, 0])
  const xNegative = useTransform(scrollYProgress, [0, 1], [-50, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])


  const motionStyle = {
    opacity,
    y: animationType === 'fade-up' ? y : undefined,
    x:
      animationType === 'slide-left'
        ? xPositive
        : animationType === 'slide-right'
        ? xNegative
        : undefined,
    scale: animationType === 'zoom-in' ? scale : undefined,
  }

  return (
    <section
      ref={ref}
      className={`${className}`}
    >
      <motion.div style={motionStyle} className="">
        {children}
      </motion.div>
    </section>
  )
}
