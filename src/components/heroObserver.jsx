 
import { useEffect, useState } from 'react'
import FloatingFormToggle from './contactFixedButton'
import { useLocation } from 'react-router-dom'

export default function HeroObserver() {
  const [showFloating, setShowFloating] = useState(false)

  useEffect(() => {
    const heroElement = document.getElementById('footer-section')
    if (!heroElement) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloating(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(heroElement)

    return () => observer.disconnect()
  }, [])

   const isLandingPage = location.pathname === '/'

  return isLandingPage && showFloating ? <FloatingFormToggle animate={true}/> : null
}
