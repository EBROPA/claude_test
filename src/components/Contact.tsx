'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, Send, Github, Linkedin, Instagram, CheckCircle, Loader2 } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@codexai.ru',
    href: 'mailto:hello@codexai.ru',
  },
  {
    icon: Phone,
    label: 'Телефон',
    value: '+7 (999) 123-45-67',
    href: 'tel:+79991234567',
  },
  {
    icon: Send,
    label: 'Telegram',
    value: '@codexai_studio',
    href: 'https://t.me/codexai_studio',
  },
]

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

const serviceOptions = [
  { value: '', label: 'Выберите услугу' },
  { value: 'web', label: 'Веб-разработка' },
  { value: 'mobile', label: 'Мобильное приложение' },
  { value: 'ai', label: 'AI интеграция' },
  { value: 'design', label: 'UI/UX Дизайн' },
  { value: 'other', label: 'Другое' },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Произошла ошибка')
      }

      setIsSuccess(true)
      setFormData({ name: '', email: '', service: '', message: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge mb-4">Контакты</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Давайте <span className="gradient-text">создавать</span> вместе
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом,
              и мы ответим в течение 2 часов.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-10">
              {contactMethods.map((method) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 p-5 bg-dark-card border border-white/10 rounded-2xl hover:border-primary/50 transition-colors group"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-primary to-secondary rounded-xl text-white">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-sm text-white/50 mb-1">{method.label}</span>
                    <span className="font-medium group-hover:text-primary transition-colors">
                      {method.value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:border-transparent transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card p-8 md:p-10">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Оставить заявку</h3>
                <p className="text-white/60">Заполните форму и мы свяжемся с вами</p>
              </div>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-green-500/20 rounded-full">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-bold mb-3">Заявка отправлена!</h4>
                    <p className="text-white/60 mb-6">Мы свяжемся с вами в течение 2 часов</p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="btn btn-primary"
                    >
                      Отправить ещё
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Name */}
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder=" "
                        className="peer w-full px-0 py-4 bg-transparent border-b-2 border-white/10 focus:border-primary text-white placeholder-transparent transition-colors outline-none"
                      />
                      <label className="absolute left-0 top-4 text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs">
                        Ваше имя
                      </label>
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder=" "
                        className="peer w-full px-0 py-4 bg-transparent border-b-2 border-white/10 focus:border-primary text-white placeholder-transparent transition-colors outline-none"
                      />
                      <label className="absolute left-0 top-4 text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs">
                        Email
                      </label>
                    </div>

                    {/* Service */}
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-4 bg-transparent border-b-2 border-white/10 focus:border-primary text-white transition-colors outline-none appearance-none cursor-pointer"
                      >
                        {serviceOptions.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                            className="bg-dark text-white"
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <label className="absolute left-0 -top-1 text-xs text-white/50">
                        Тип услуги
                      </label>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder=" "
                        className="peer w-full px-0 py-4 bg-transparent border-b-2 border-white/10 focus:border-primary text-white placeholder-transparent transition-colors outline-none resize-none"
                      />
                      <label className="absolute left-0 top-4 text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs">
                        Расскажите о проекте
                      </label>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <p className="text-red-500 text-sm">{error}</p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full text-base py-4"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Отправка...</span>
                        </>
                      ) : (
                        <>
                          <span>Отправить заявку</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
