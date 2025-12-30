'use client'

import { useState, useEffect, useRef } from 'react'

export function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start)
  const [isAnimating, setIsAnimating] = useState(false)
  const countRef = useRef(start)

  const startAnimation = () => {
    if (isAnimating) return
    setIsAnimating(true)

    const startTime = Date.now()
    const startValue = countRef.current

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart)

      setCount(currentCount)
      countRef.current = currentCount

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
        countRef.current = end
        setIsAnimating(false)
      }
    }

    requestAnimationFrame(animate)
  }

  return { count, startAnimation, isAnimating }
}
