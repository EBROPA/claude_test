'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CTASection } from '@/components/sections/CTASection'
import {
  Sparkles,
  Target,
  Heart,
  Zap,
  Users,
  Trophy,
  Linkedin,
  Github,
  Mail,
  ArrowRight
} from 'lucide-react'

const stats = [
  { value: '150+', label: 'Проектов' },
  { value: '50+', label: 'Клиентов' },
  { value: '7', label: 'Лет опыта' },
  { value: '15', label: 'Экспертов' },
]

const values = [
  {
    icon: Sparkles,
    title: 'Инновации',
    description: 'Используем передовые технологии и подходы для создания уникальных решений',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    title: 'Результат',
    description: 'Фокусируемся на бизнес-целях клиента и измеримых показателях успеха',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Heart,
    title: 'Страсть',
    description: 'Каждый проект — это возможность создать что-то выдающееся',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'Скорость',
    description: 'Быстрая разработка без потери качества благодаря отлаженным процессам',
    color: 'from-emerald-500 to-teal-500',
  },
]

const team = [
  {
    name: 'Александр Петров',
    role: 'CEO & Founder',
    description: '15 лет в IT. Ex-Yandex, Ex-Google. Визионер и стратег.',
    avatar: 'АП',
    color: 'from-blue-600 to-indigo-600',
    social: { linkedin: '#', github: '#', email: 'alex@codexai.ru' },
  },
  {
    name: 'Мария Козлова',
    role: 'CTO',
    description: 'Архитектор систем. 12 лет разработки. ML/AI эксперт.',
    avatar: 'МК',
    color: 'from-purple-600 to-pink-600',
    social: { linkedin: '#', github: '#', email: 'maria@codexai.ru' },
  },
  {
    name: 'Дмитрий Волков',
    role: 'Lead Designer',
    description: 'Создаёт интерфейсы, которые влюбляют с первого клика.',
    avatar: 'ДВ',
    color: 'from-orange-500 to-amber-500',
    social: { linkedin: '#', github: '#', email: 'dmitry@codexai.ru' },
  },
  {
    name: 'Елена Смирнова',
    role: 'Project Manager',
    description: 'Держит все проекты под контролем. Сертифицированный PMP.',
    avatar: 'ЕС',
    color: 'from-emerald-500 to-teal-500',
    social: { linkedin: '#', github: '#', email: 'elena@codexai.ru' },
  },
  {
    name: 'Андрей Новиков',
    role: 'Senior Developer',
    description: 'Full-stack маг. React, Node.js, Python. 8+ лет опыта.',
    avatar: 'АН',
    color: 'from-red-500 to-rose-500',
    social: { linkedin: '#', github: '#', email: 'andrey@codexai.ru' },
  },
  {
    name: 'Ольга Федорова',
    role: 'AI Engineer',
    description: 'Превращает данные в интеллект. PhD в Machine Learning.',
    avatar: 'ОФ',
    color: 'from-cyan-500 to-blue-500',
    social: { linkedin: '#', github: '#', email: 'olga@codexai.ru' },
  },
]

const milestones = [
  { year: '2017', title: 'Основание', description: 'Начали как небольшая команда энтузиастов' },
  { year: '2019', title: 'Первый крупный клиент', description: 'Партнёрство с Fortune 500 компанией' },
  { year: '2021', title: 'AI направление', description: 'Запустили отдел искусственного интеллекта' },
  { year: '2023', title: 'Международный рынок', description: 'Вышли на европейский и азиатский рынки' },
  { year: '2024', title: 'Топ-10 студий', description: 'Вошли в рейтинг лучших веб-студий России' },
]

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <main className="relative min-h-screen noise">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl" />
          </motion.div>
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="section-badge mb-6">О компании</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
              Мы создаём <span className="gradient-text">будущее</span> digital
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mb-12">
              CodexAI — это команда passionate экспертов, объединённых миссией
              создавать цифровые продукты, которые меняют правила игры.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="section-badge mb-6">Наши ценности</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Что нас <span className="gradient-text">движет</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                <p className="text-white/50">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 relative overflow-hidden" ref={containerRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="section-badge mb-6">Наш путь</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              История <span className="gradient-text">успеха</span>
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex items-center gap-8 mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="card p-6 inline-block">
                    <div className="text-2xl font-display font-bold gradient-text mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-white/50">{milestone.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="relative z-10 w-4 h-4 rounded-full bg-primary glow flex-shrink-0" />

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="section-badge mb-6">Команда</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Люди, которые <span className="gradient-text">творят магию</span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Наша сила — в людях. Каждый член команды — эксперт в своей области
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8 group"
              >
                {/* Avatar */}
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                  <span className="text-3xl font-display font-bold text-white">
                    {member.avatar}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold mb-1">{member.name}</h3>
                <div className="text-primary mb-4">{member.role}</div>
                <p className="text-white/50 mb-6">{member.description}</p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.github}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-32 relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-badge mb-6">Почему мы</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
                Выбирайте <span className="gradient-text">лучших</span>
              </h2>

              <div className="space-y-6">
                {[
                  { icon: Trophy, title: 'Топ-10 студий России', desc: 'По версии ведущих рейтингов' },
                  { icon: Users, title: 'Команда экспертов', desc: '15+ специалистов с опытом 5-15 лет' },
                  { icon: Zap, title: 'Быстрый старт', desc: 'Начинаем работу в течение 24 часов' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-white/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn btn-primary mt-10 group">
                Начать проект
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative Card Stack */}
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                <div className="absolute inset-8 card p-8 flex flex-col justify-center items-center text-center">
                  <div className="text-8xl font-display font-bold gradient-text mb-4">7+</div>
                  <div className="text-xl text-white/70">Лет создаём<br/>digital-продукты</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
