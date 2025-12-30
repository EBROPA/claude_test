'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Globe, Smartphone, Brain, Palette, Server, TrendingUp } from 'lucide-react'

const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Веб-разработка',
    shortDesc: 'Сайты и веб-приложения',
    description: 'Создаём высокопроизводительные веб-решения: от корпоративных сайтов до сложных SaaS-платформ. Next.js, React, TypeScript — используем современный стек.',
    features: ['Корпоративные сайты', 'E-commerce', 'SaaS платформы', 'Лендинги'],
    price: 'от 300 000 ₽',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Мобильные приложения',
    shortDesc: 'iOS и Android',
    description: 'Разрабатываем нативные и кроссплатформенные приложения. React Native и Flutter для быстрого выхода на рынок без потери качества.',
    features: ['iOS приложения', 'Android приложения', 'Кроссплатформа', 'PWA'],
    price: 'от 500 000 ₽',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI Интеграции',
    shortDesc: 'Искусственный интеллект',
    description: 'Внедряем AI в бизнес-процессы: чат-боты, автоматизация, аналитика данных. GPT, Claude, собственные ML-модели.',
    features: ['Чат-боты', 'Автоматизация', 'ML модели', 'Аналитика'],
    price: 'от 400 000 ₽',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'design',
    icon: Palette,
    title: 'UI/UX Дизайн',
    shortDesc: 'Интерфейсы и брендинг',
    description: 'Проектируем удобные интерфейсы на основе исследований пользователей. Figma, прототипы, дизайн-системы.',
    features: ['UX исследования', 'UI дизайн', 'Прототипы', 'Дизайн-системы'],
    price: 'от 150 000 ₽',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend & API',
    shortDesc: 'Серверная разработка',
    description: 'Строим надёжную серверную архитектуру для проектов любой сложности. Микросервисы, высокие нагрузки, интеграции.',
    features: ['API разработка', 'Микросервисы', 'Cloud', 'DevOps'],
    price: 'от 250 000 ₽',
    color: 'from-red-500 to-rose-500',
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Digital Маркетинг',
    shortDesc: 'Продвижение и аналитика',
    description: 'Комплексное продвижение digital-продуктов: SEO, контент-маркетинг, performance-маркетинг.',
    features: ['SEO', 'Контент', 'Performance', 'Аналитика'],
    price: 'от 100 000 ₽/мес',
    color: 'from-indigo-500 to-violet-500',
  },
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0].id)
  const activeData = services.find((s) => s.id === activeService)!

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
        >
          <div className="max-w-2xl">
            <span className="section-badge mb-6">Услуги</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Полный цикл <span className="gradient-text">разработки</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <span>Все услуги</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </Link>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-8">
          {/* Service List */}
          <div className="space-y-3">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveService(service.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group ${
                  activeService === service.id
                    ? 'bg-white/10 border border-white/20'
                    : 'hover:bg-white/5 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      activeService === service.id
                        ? `bg-gradient-to-br ${service.color}`
                        : 'bg-white/5 group-hover:bg-white/10'
                    }`}
                  >
                    <service.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-0.5">{service.title}</h3>
                    <p className="text-sm text-white/40">{service.shortDesc}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Service Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="card p-10 lg:p-12"
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${activeData.color}`}
              >
                <activeData.icon className="w-10 h-10" />
              </div>

              {/* Title & Price */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <h3 className="text-3xl font-display font-bold">{activeData.title}</h3>
                <span className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium">
                  {activeData.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                {activeData.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {activeData.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activeData.color}`} />
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="btn btn-primary"
              >
                <span>Заказать услугу</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
