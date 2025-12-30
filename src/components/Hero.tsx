'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Rocket, Play, ChevronDown } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useCountUp } from '@/hooks/useCountUp'

const stats = [
  { value: 150, label: 'Проектов' },
  { value: 50, label: 'Клиентов' },
  { value: 5, label: 'Лет опыта' },
]

function StatItem({ value, label }: { value: number; label: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })
  const { count, startAnimation } = useCountUp(value, 2000)

  useEffect(() => {
    if (inView) startAnimation()
  }, [inView, startAnimation])

  return (
    <div ref={ref} className="text-center">
      <span className="block text-4xl md:text-5xl font-extrabold gradient-text">
        {count}+
      </span>
      <span className="text-sm text-white/50 uppercase tracking-wider mt-1">
        {label}
      </span>
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
              <span className="text-sm text-white/70">Создаём будущее уже сегодня</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8"
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="block"
              >
                Превращаем
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block gradient-text"
              >
                идеи в цифровые
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block"
              >
                шедевры
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed"
            >
              Мы — команда экспертов, создающих инновационные веб-решения
              с использованием передовых технологий и искусственного интеллекта
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <Link href="#contact" className="btn btn-primary text-base px-8 py-4">
                <span>Обсудить проект</span>
                <Rocket className="w-5 h-5" />
              </Link>
              <Link href="#portfolio" className="btn btn-outline text-base px-8 py-4">
                <span>Смотреть работы</span>
                <Play className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-12"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-12">
                  <StatItem value={stat.value} label={stat.label} />
                  {index < stats.length - 1 && (
                    <div className="w-px h-12 bg-white/10" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Code Window */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl opacity-50 animate-pulse" />

              {/* Code Window */}
              <div className="relative bg-dark-card border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Window Header */}
                <div className="flex items-center gap-16 px-5 py-4 bg-black/30 border-b border-white/10">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-white/50">codexai.js</span>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm leading-loose">
                  <pre className="text-white/90">
                    <code>
                      <span className="code-keyword">const</span>{' '}
                      <span className="code-variable">createMagic</span>{' '}
                      <span className="text-white/60">=</span>{' '}
                      <span className="code-keyword">async</span>{' '}
                      <span className="text-white/60">{`() => {`}</span>
                      {'\n'}
                      {'  '}
                      <span className="code-keyword">const</span>{' '}
                      <span className="code-variable">idea</span>{' '}
                      <span className="text-white/60">=</span>{' '}
                      <span className="code-keyword">await</span>{' '}
                      <span className="code-function">getYourVision</span>
                      <span className="text-white/60">();</span>
                      {'\n'}
                      {'  '}
                      <span className="code-keyword">const</span>{' '}
                      <span className="code-variable">design</span>{' '}
                      <span className="text-white/60">=</span>{' '}
                      <span className="code-function">applyCreativity</span>
                      <span className="text-white/60">(idea);</span>
                      {'\n'}
                      {'  '}
                      <span className="code-keyword">const</span>{' '}
                      <span className="code-variable">code</span>{' '}
                      <span className="text-white/60">=</span>{' '}
                      <span className="code-function">buildWithPassion</span>
                      <span className="text-white/60">(design);</span>
                      {'\n\n'}
                      {'  '}
                      <span className="code-keyword">return</span>{' '}
                      <span className="code-function">deliverExcellence</span>
                      <span className="text-white/60">(code);</span>
                      {'\n'}
                      <span className="text-white/60">{`};`}</span>
                      {'\n\n'}
                      <span className="code-comment">{`// Готовы к запуску? 🚀`}</span>
                      {'\n'}
                      <span className="code-function">createMagic</span>
                      <span className="text-white/60">();</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/50 bounce-soft"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 relative">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-primary rounded-full scroll-wheel" />
        </div>
        <span className="text-xs">Листайте вниз</span>
      </motion.div>
    </section>
  )
}
