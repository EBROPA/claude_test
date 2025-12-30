'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const cases = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'Веб-приложение',
    description: 'Аналитическая платформа для управления инвестициями с AI-рекомендациями',
    results: ['+340% конверсия', '50K+ пользователей'],
    image: '/cases/fintech.jpg',
    color: 'from-blue-600 to-cyan-500',
    tags: ['React', 'Node.js', 'AI'],
  },
  {
    id: 2,
    title: 'HealthCare App',
    category: 'Мобильное приложение',
    description: 'Телемедицина нового поколения с видео-консультациями и AI-диагностикой',
    results: ['4.9★ в сторах', '200K+ скачиваний'],
    image: '/cases/health.jpg',
    color: 'from-emerald-500 to-teal-500',
    tags: ['React Native', 'Python', 'ML'],
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    category: 'Веб-платформа',
    description: 'Маркетплейс премиум-товаров с персонализацией на основе AI',
    results: ['+180% продаж', '₽2B оборот'],
    image: '/cases/ecom.jpg',
    color: 'from-purple-500 to-pink-500',
    tags: ['Next.js', 'GraphQL', 'AWS'],
  },
]

export function CasesSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20"
        >
          <div className="max-w-2xl">
            <span className="section-badge mb-6">Портфолио</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Проекты, которые <span className="gradient-text">работают</span>
            </h2>
            <p className="text-xl text-white/60">
              Не просто красивые сайты, а инструменты для достижения бизнес-целей
            </p>
          </div>
          <Link
            href="/work"
            className="btn btn-outline"
          >
            <span>Все проекты</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid gap-8">
          {cases.map((caseItem, index) => (
            <CaseCard key={caseItem.id} caseData={caseItem} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseCard({ caseData, index }: { caseData: typeof cases[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1 }}
      style={{ scale }}
      className="group"
    >
      <Link href={`/work/${caseData.id}`}>
        <div className="relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${caseData.color} opacity-20`} />

          {/* Content */}
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <span className="text-sm text-white/50 uppercase tracking-wider mb-4 block">
                  {caseData.category}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 group-hover:gradient-text transition-all">
                  {caseData.title}
                </h3>
                <p className="text-lg text-white/60 mb-8 leading-relaxed">
                  {caseData.description}
                </p>

                {/* Results */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {caseData.results.map((result) => (
                    <span
                      key={result}
                      className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium"
                    >
                      {result}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {caseData.tags.map((tag) => (
                    <span key={tag} className="text-sm text-white/40">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <motion.div
                style={{ y }}
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${caseData.color} ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-display font-bold text-white/20">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
