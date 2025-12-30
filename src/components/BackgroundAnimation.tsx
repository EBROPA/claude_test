'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function BackgroundAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Animated Background Spheres */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '-200px',
            right: '-200px',
          }}
          animate={{
            x: [0, 50, -30, -50, 0],
            y: [0, -50, 30, -30, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
            filter: 'blur(80px)',
            bottom: '-150px',
            left: '-150px',
          }}
          animate={{
            x: [0, -40, 60, 20, 0],
            y: [0, 40, -20, 50, 0],
            scale: [1, 0.9, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 5,
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: ['-50%', '-30%', '-70%', '-40%', '-50%'],
            y: ['-50%', '-70%', '-30%', '-60%', '-50%'],
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 10,
          }}
        />
      </div>

      {/* Cursor Glow Effect */}
      <motion.div
        className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-50"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid Pattern */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </>
  )
}
