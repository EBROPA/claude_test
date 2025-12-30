'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, PenTool, Code2, Rocket, MessageSquare } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Брифинг',
    description: 'Погружаемся в ваш бизнес, изучаем цели, аудиторию и конкурентов. Формируем понимание задачи.',
    duration: '1-2 дня',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Концепция',
    description: 'Разрабатываем уникальную концепцию, определяем стилистику, структуру и ключевые точки взаимодействия.',
    duration: '3-5 дней',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Дизайн',
    description: 'Создаём детализированные макеты всех страниц с анимациями и интерактивными элементами.',
    duration: '1-2 недели',
  },
  {
    number: '04',
    icon: Code2,
    title: 'Разработка',
    description: 'Воплощаем дизайн в код с использованием современного стека технологий и лучших практик.',
    duration: '2-4 недели',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Запуск',
    description: 'Тестируем, оптимизируем и запускаем проект. Обеспечиваем поддержку после релиза.',
    duration: '2-3 дня',
  },
]

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-overlay opacity-50" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <span className="section-badge mb-6">Процесс</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Как мы создаём <span className="gradient-text">успешные</span> проекты
          </h2>
          <p className="text-xl text-white/60">
            Прозрачный процесс с понятными этапами и сроками. Вы всегда знаете, на каком этапе находится проект.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-px bg-white/10 hidden lg:block">
            <motion.div
              className="w-full bg-gradient-to-b from-primary to-secondary"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
                className="relative lg:grid lg:grid-cols-[80px_1fr] lg:gap-12 lg:py-12"
              >
                {/* Number Circle */}
                <div className="hidden lg:flex items-start justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-50" />
                    <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-2xl font-display font-bold">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="card p-8 lg:p-10 group hover:border-primary/30">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                      <step.icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="lg:hidden text-sm font-mono text-primary">{step.number}</span>
                        <span className="text-sm text-white/40">{step.duration}</span>
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                      <p className="text-white/60 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
