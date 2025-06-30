 
import { useEffect, useState } from 'react'
import FloatingFormToggle from './contactFixedButton'

export default function HeroObserver() {
  const [showFloating, setShowFloating] = useState(false)

  useEffect(() => {
    const heroElement = document.getElementById('hero-section')
    if (!heroElement) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloating(!entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(heroElement)

    return () => observer.disconnect()
  }, [])

  return showFloating ? <FloatingFormToggle animate={true}/> : null
}
