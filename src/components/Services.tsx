'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Code2,
  Brain,
  Palette,
  Smartphone,
  Server,
  TrendingUp,
  ArrowRight,
  Check,
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Веб-разработка',
    description: 'Создаём современные веб-приложения любой сложности с использованием React, Vue, Next.js',
    features: ['SPA/PWA приложения', 'Корпоративные порталы', 'E-commerce решения'],
    featured: false,
  },
  {
    icon: Brain,
    title: 'AI Интеграции',
    description: 'Внедряем искусственный интеллект в ваши бизнес-процессы для максимальной эффективности',
    features: ['Чат-боты на GPT', 'Автоматизация', 'Аналитика данных'],
    featured: true,
  },
  {
    icon: Palette,
    title: 'UI/UX Дизайн',
    description: 'Разрабатываем интуитивные интерфейсы, которые влюбляют пользователей с первого клика',
    features: ['Прототипирование', 'Дизайн-системы', 'Анимации'],
    featured: false,
  },
  {
    icon: Smartphone,
    title: 'Мобильные приложения',
    description: 'Разрабатываем нативные и кроссплатформенные приложения для iOS и Android',
    features: ['React Native', 'Flutter', 'Swift / Kotlin'],
    featured: false,
  },
  {
    icon: Server,
    title: 'Backend & API',
    description: 'Строим надёжную серверную архитектуру для высоконагруженных проектов',
    features: ['Node.js / Python', 'Микросервисы', 'Cloud решения'],
    featured: false,
  },
  {
    icon: TrendingUp,
    title: 'SEO & Маркетинг',
    description: 'Продвигаем ваш бизнес в интернете и привлекаем целевую аудиторию',
    features: ['SEO оптимизация', 'Контент-маркетинг', 'Аналитика'],
    featured: false,
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-badge mb-4">Наши услуги</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Что мы <span className="gradient-text">создаём</span>
          </h2>
          <p className="text-lg text-white/60">
            Полный спектр digital-услуг для развития вашего бизнеса
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative card p-8 hover:-translate-y-2 ${
                service.featured
                  ? 'border-primary/50 bg-gradient-to-b from-primary/10 to-transparent'
                  : ''
              }`}
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute -top-3 right-6 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-semibold">
                  Популярное
                </div>
              )}

              {/* Top Border Gradient */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary to-secondary rounded-xl text-white">
                  <service.icon className="w-8 h-8" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/60 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/70 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold group/link"
              >
                <span>Подробнее</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
