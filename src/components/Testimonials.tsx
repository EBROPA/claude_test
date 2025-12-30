'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    content:
      'CodexAI превзошли все ожидания! Наш новый сайт принёс 200% рост конверсии уже в первый месяц. Рекомендую!',
    author: 'Алексей Козлов',
    role: 'CEO, TechStart',
    initials: 'АК',
  },
  {
    id: 2,
    content:
      'Профессиональная команда, которая понимает бизнес. AI-чатбот, который они создали, обрабатывает 80% обращений автоматически.',
    author: 'Мария Соколова',
    role: 'Director, FinanceHub',
    initials: 'МС',
  },
  {
    id: 3,
    content:
      'Отличное мобильное приложение! Пользователи в восторге от дизайна и удобства. Рейтинг в сторах — 4.9 звёзд.',
    author: 'Дмитрий Петров',
    role: 'Founder, FitLife',
    initials: 'ДП',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-badge mb-4">Отзывы</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Что говорят <span className="gradient-text">клиенты</span>
          </h2>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="card p-10 md:p-14"
              >
                {/* Quote Icon */}
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary to-secondary rounded-full mb-8">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl leading-relaxed text-white/90 mb-10">
                  {testimonials[currentIndex].content}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-primary to-secondary rounded-full text-white font-semibold text-lg">
                    {testimonials[currentIndex].initials}
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">
                      {testimonials[currentIndex].author}
                    </h5>
                    <span className="text-white/50">{testimonials[currentIndex].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-8 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:border-transparent transition-all duration-300"
              aria-label="Предыдущий"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-primary to-secondary'
                      : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Перейти к отзыву ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:border-transparent transition-all duration-300"
              aria-label="Следующий"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
