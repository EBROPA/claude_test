'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ShoppingCart, Bot, Heart, Building, BarChart3, Car } from 'lucide-react'

const categories = ['all', 'web', 'app', 'ai']
const categoryLabels: Record<string, string> = {
  all: 'Все',
  web: 'Веб-сайты',
  app: 'Приложения',
  ai: 'AI проекты',
}

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Современный интернет-магазин',
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB'],
    icon: ShoppingCart,
    gradient: 'from-indigo-500 to-purple-500',
    large: false,
  },
  {
    id: 2,
    title: 'AI Assistant',
    description: 'Корпоративный AI-помощник',
    category: 'ai',
    tags: ['GPT-4', 'Python', 'FastAPI'],
    icon: Bot,
    gradient: 'from-pink-500 to-rose-500',
    large: true,
  },
  {
    id: 3,
    title: 'HealthTrack App',
    description: 'Мобильное приложение для здоровья',
    category: 'app',
    tags: ['React Native', 'Firebase'],
    icon: Heart,
    gradient: 'from-cyan-500 to-blue-500',
    large: false,
  },
  {
    id: 4,
    title: 'Corporate Portal',
    description: 'Корпоративный портал',
    category: 'web',
    tags: ['Vue.js', 'Laravel'],
    icon: Building,
    gradient: 'from-emerald-500 to-teal-500',
    large: false,
  },
  {
    id: 5,
    title: 'Analytics Dashboard',
    description: 'AI-аналитика данных',
    category: 'ai',
    tags: ['Python', 'TensorFlow', 'D3.js'],
    icon: BarChart3,
    gradient: 'from-orange-500 to-amber-500',
    large: false,
  },
  {
    id: 6,
    title: 'AutoRent App',
    description: 'Сервис аренды автомобилей',
    category: 'app',
    tags: ['Flutter', 'Node.js', 'PostgreSQL'],
    icon: Car,
    gradient: 'from-violet-500 to-purple-500',
    large: true,
  },
]

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  )

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-badge mb-4">Портфолио</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Наши <span className="gradient-text">проекты</span>
          </h2>
          <p className="text-lg text-white/60">
            Каждый проект — это уникальная история успеха
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-primary/50'
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  project.large ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                {/* Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-110`}
                />

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon
                    className={`text-white/30 ${project.large ? 'w-32 h-32' : 'w-20 h-20'}`}
                  />
                </div>

                {/* Overlay */}
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[300px] p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                    <p className="text-white/70 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-primary to-secondary rounded-full text-white hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
