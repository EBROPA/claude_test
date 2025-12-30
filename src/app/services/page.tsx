'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CTASection } from '@/components/sections/CTASection'
import { ArrowUpRight, Check, Globe, Smartphone, Brain, Palette, Server, TrendingUp } from 'lucide-react'
import dynamic from 'next/dynamic'

const FloatingShapes = dynamic(
  () => import('@/components/3d/FloatingShapes').then((mod) => mod.FloatingShapes),
  { ssr: false }
)

const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Веб-разработка',
    description: 'Создаём высокопроизводительные веб-решения любой сложности. От корпоративных сайтов до сложных SaaS-платформ.',
    features: [
      'Корпоративные сайты и порталы',
      'E-commerce и маркетплейсы',
      'SaaS платформы',
      'Высоконагруженные системы',
      'Progressive Web Apps',
      'Интеграции с CRM/ERP',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    price: 'от 300 000 ₽',
    timeline: 'от 4 недель',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Мобильные приложения',
    description: 'Разрабатываем нативные и кроссплатформенные приложения для iOS и Android с фокусом на UX.',
    features: [
      'iOS приложения (Swift)',
      'Android приложения (Kotlin)',
      'Кроссплатформенная разработка',
      'Интеграция с носимыми устройствами',
      'Офлайн-режим и синхронизация',
      'Push-уведомления',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    price: 'от 500 000 ₽',
    timeline: 'от 8 недель',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'ai',
    icon: Brain,
    title: 'AI Интеграции',
    description: 'Внедряем искусственный интеллект в бизнес-процессы для автоматизации и повышения эффективности.',
    features: [
      'Чат-боты и виртуальные ассистенты',
      'Автоматизация бизнес-процессов',
      'Предиктивная аналитика',
      'Компьютерное зрение',
      'Обработка естественного языка',
      'Рекомендательные системы',
    ],
    technologies: ['OpenAI GPT', 'Claude', 'Python', 'TensorFlow', 'LangChain'],
    price: 'от 400 000 ₽',
    timeline: 'от 6 недель',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'design',
    icon: Palette,
    title: 'UI/UX Дизайн',
    description: 'Проектируем интуитивные интерфейсы на основе исследований пользователей и лучших практик.',
    features: [
      'UX исследования и аудит',
      'Информационная архитектура',
      'Wireframes и прототипы',
      'UI дизайн',
      'Дизайн-системы',
      'Анимации и микроинтеракции',
    ],
    technologies: ['Figma', 'Framer', 'Principle', 'After Effects'],
    price: 'от 150 000 ₽',
    timeline: 'от 2 недель',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend & API',
    description: 'Строим надёжную серверную архитектуру для проектов любой сложности и нагрузки.',
    features: [
      'REST и GraphQL API',
      'Микросервисная архитектура',
      'Облачная инфраструктура',
      'DevOps и CI/CD',
      'Мониторинг и логирование',
      'Безопасность и аудит',
    ],
    technologies: ['Node.js', 'Python', 'Go', 'AWS', 'Docker', 'Kubernetes'],
    price: 'от 250 000 ₽',
    timeline: 'от 4 недель',
    color: 'from-red-500 to-rose-500',
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Digital Маркетинг',
    description: 'Комплексное продвижение digital-продуктов: от SEO до performance-маркетинга.',
    features: [
      'SEO оптимизация',
      'Контент-маркетинг',
      'Performance маркетинг',
      'SMM продвижение',
      'Email-маркетинг',
      'Аналитика и отчётность',
    ],
    technologies: ['Google Analytics', 'Яндекс.Метрика', 'Ahrefs', 'Semrush'],
    price: 'от 100 000 ₽/мес',
    timeline: 'постоянно',
    color: 'from-indigo-500 to-violet-500',
  },
]

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen noise">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <FloatingShapes />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="section-badge mb-6">Услуги</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
              Полный цикл <span className="gradient-text">digital-разработки</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              От идеи до запуска и поддержки. Создаём продукты, которые решают бизнес-задачи и приносят реальные результаты.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                className="scroll-mt-32"
              >
                <div className={`grid lg:grid-cols-2 gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-8`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                      {service.title}
                    </h2>

                    <p className="text-lg text-white/60 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link href="/contact" className="btn btn-primary">
                      <span>Заказать</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Card */}
                  <div className={`card p-8 lg:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/10">
                      <div>
                        <div className="text-sm text-white/40 mb-1">Стоимость</div>
                        <div className="text-3xl font-display font-bold">{service.price}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-white/40 mb-1">Сроки</div>
                        <div className="text-xl font-semibold">{service.timeline}</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-4">Что входит:</h3>
                    <ul className="space-y-3">
                      {service.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-white/70">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
