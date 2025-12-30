'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CTASection } from '@/components/sections/CTASection'
import { ArrowUpRight } from 'lucide-react'

const categories = ['Все', 'Веб', 'Мобильные', 'AI', 'E-commerce']

const projects = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'Веб',
    description: 'Аналитическая платформа для управления инвестиционным портфелем с AI-рекомендациями',
    results: { metric: '+340%', label: 'конверсия' },
    color: 'from-blue-600 to-cyan-500',
    tags: ['React', 'Node.js', 'AI', 'D3.js'],
    year: '2024',
  },
  {
    id: 2,
    title: 'HealthCare App',
    category: 'Мобильные',
    description: 'Телемедицина нового поколения с видео-консультациями и AI-диагностикой',
    results: { metric: '4.9★', label: 'рейтинг' },
    color: 'from-emerald-500 to-teal-500',
    tags: ['React Native', 'Python', 'ML', 'WebRTC'],
    year: '2024',
  },
  {
    id: 3,
    title: 'Premium Marketplace',
    category: 'E-commerce',
    description: 'Маркетплейс премиум-товаров с персонализацией на основе AI',
    results: { metric: '₽2B', label: 'оборот' },
    color: 'from-purple-500 to-pink-500',
    tags: ['Next.js', 'GraphQL', 'AWS', 'Stripe'],
    year: '2023',
  },
  {
    id: 4,
    title: 'AI Content Studio',
    category: 'AI',
    description: 'Платформа для генерации и редактирования контента с помощью AI',
    results: { metric: '50K+', label: 'пользователей' },
    color: 'from-orange-500 to-amber-500',
    tags: ['OpenAI', 'Next.js', 'Prisma', 'Vercel'],
    year: '2024',
  },
  {
    id: 5,
    title: 'Logistics Platform',
    category: 'Веб',
    description: 'Система управления логистикой для крупного ритейлера',
    results: { metric: '-30%', label: 'расходы' },
    color: 'from-red-500 to-rose-500',
    tags: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
    year: '2023',
  },
  {
    id: 6,
    title: 'Crypto Wallet',
    category: 'Мобильные',
    description: 'Безопасный криптовалютный кошелёк с поддержкой DeFi',
    results: { metric: '200K+', label: 'скачиваний' },
    color: 'from-indigo-500 to-violet-500',
    tags: ['Flutter', 'Web3', 'Solidity', 'Firebase'],
    year: '2024',
  },
]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('Все')

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'Все' || project.category === activeCategory
  )

  return (
    <main className="relative min-h-screen noise">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="section-badge mb-6">Портфолио</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
              Проекты, которые <span className="gradient-text">работают</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              Не просто красивые интерфейсы, а инструменты для достижения бизнес-целей. Каждый проект — это история успеха.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="container">
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link href={`/work/${project.id}`} className="group block">
                    <div className="card overflow-hidden">
                      {/* Image Placeholder */}
                      <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.color}`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-8xl font-display font-bold text-white/10">
                            {String(project.id).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Year Badge */}
                        <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-sm">
                          {project.year}
                        </div>

                        {/* Arrow */}
                        <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight className="w-5 h-5 text-white transition-transform group-hover:rotate-45" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <span className="text-sm text-white/40 uppercase tracking-wider">
                              {project.category}
                            </span>
                            <h3 className="text-2xl font-display font-bold mt-1 group-hover:gradient-text transition-all">
                              {project.title}
                            </h3>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-display font-bold gradient-text">
                              {project.results.metric}
                            </div>
                            <div className="text-sm text-white/40">{project.results.label}</div>
                          </div>
                        </div>

                        <p className="text-white/60 mb-6">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full bg-white/5 text-sm text-white/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
