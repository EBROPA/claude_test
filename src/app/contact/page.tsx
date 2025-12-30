'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowRight,
  Linkedin,
  Github,
  Instagram
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@codexai.ru',
    link: 'mailto:hello@codexai.ru',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    title: 'Телефон',
    value: '+7 (495) 123-45-67',
    link: 'tel:+74951234567',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: MapPin,
    title: 'Офис',
    value: 'Москва, ул. Тверская 1',
    link: 'https://maps.google.com',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Clock,
    title: 'Режим работы',
    value: 'Пн-Пт: 10:00 - 19:00',
    link: null,
    color: 'from-emerald-500 to-teal-500',
  },
]

const services = [
  'Веб-разработка',
  'Мобильные приложения',
  'AI интеграция',
  'UX/UI дизайн',
  'E-commerce',
  'Консалтинг',
]

const budgets = [
  'До 500K ₽',
  '500K - 1M ₽',
  '1M - 3M ₽',
  '3M - 5M ₽',
  'Более 5M ₽',
]

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [selectedService, setSelectedService] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formState, service: selectedService }),
      })

      if (response.ok) {
        setStatus('success')
        setFormState({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: '',
        })
        setSelectedService('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

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
            <span className="section-badge mb-6">Контакты</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
              Давайте создадим <span className="gradient-text">шедевр</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl">
              Расскажите о вашей идее, и мы превратим её в цифровой продукт,
              который поможет достичь ваших бизнес-целей.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-16">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Contact Cards */}
              <div className="space-y-4 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {item.link ? (
                      <a
                        href={item.link}
                        className="card p-6 flex items-center gap-4 group hover:border-primary/30"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white/40 text-sm mb-1">{item.title}</div>
                          <div className="font-medium group-hover:text-primary transition-colors">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="card p-6 flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white/40 text-sm mb-1">{item.title}</div>
                          <div className="font-medium">{item.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="card p-6"
              >
                <h3 className="font-display font-bold mb-4">Мы в соцсетях</h3>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
              >
                <MessageSquare className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-bold text-xl mb-2">Быстрый ответ</h3>
                <p className="text-white/50 mb-4">
                  Обычно мы отвечаем в течение 2 часов в рабочее время
                </p>
                <a
                  href="https://t.me/codexai"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Написать в Telegram
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="card p-8 lg:p-12">
                <h2 className="text-2xl font-display font-bold mb-8">Расскажите о проекте</h2>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4">Заявка отправлена!</h3>
                    <p className="text-white/60 mb-8">
                      Спасибо за интерес! Мы свяжемся с вами в ближайшее время.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn btn-outline"
                    >
                      Отправить ещё
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-white/50 mb-2">Ваше имя *</label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="input-premium"
                          placeholder="Иван Иванов"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-white/50 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="input-premium"
                          placeholder="ivan@company.ru"
                        />
                      </div>
                    </div>

                    {/* Phone & Company Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-white/50 mb-2">Телефон</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="input-premium"
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-white/50 mb-2">Компания</label>
                        <input
                          type="text"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="input-premium"
                          placeholder="ООО Компания"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm text-white/50 mb-3">Что вам нужно? *</label>
                      <div className="flex flex-wrap gap-2">
                        {services.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => setSelectedService(service)}
                            className={`px-4 py-2 rounded-full text-sm transition-all ${
                              selectedService === service
                                ? 'bg-primary text-white'
                                : 'bg-white/5 text-white/60 hover:bg-white/10'
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-sm text-white/50 mb-2">Примерный бюджет</label>
                      <select
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="input-premium appearance-none cursor-pointer"
                      >
                        <option value="">Выберите бюджет</option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm text-white/50 mb-2">Расскажите о проекте</label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        className="input-premium resize-none"
                        placeholder="Опишите вашу идею, цели и ожидания..."
                      />
                    </div>

                    {/* Error Message */}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                      >
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p>Произошла ошибка. Попробуйте ещё раз или свяжитесь с нами напрямую.</p>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading' || !selectedService}
                      className="btn btn-primary btn-lg w-full group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Отправка...
                        </>
                      ) : (
                        <>
                          Отправить заявку
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-white/30 text-sm">
                      Нажимая кнопку, вы соглашаетесь с{' '}
                      <a href="/privacy" className="text-primary hover:underline">
                        политикой конфиденциальности
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card overflow-hidden"
          >
            <div className="aspect-[21/9] bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-display font-bold mb-2">Москва, ул. Тверская 1</h3>
                <p className="text-white/50 mb-4">Бизнес-центр "Digital", 12 этаж</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Открыть карту
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
