 

import { useEffect, useState, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function LazyLoadWrapper({ modulePath, exportName = 'default', threshold = 0.1, delay = 0.1 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold })
  const [LoadedComponent, setLoadedComponent] = useState(null)

  useEffect(() => {
    if (inView && !LoadedComponent) {
      import(modulePath).then((mod) => {
        setLoadedComponent(() => mod[exportName])
      })
    }
  }, [inView, modulePath, LoadedComponent, exportName])

  return (
    <div ref={ref}>
      {LoadedComponent && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay }}
        >
          <Suspense fallback={null}>
            <LoadedComponent />
          </Suspense>
        </motion.div>
      )}
    </div>
  )
}
