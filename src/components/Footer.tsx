'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Send } from 'lucide-react'

const footerLinks = {
  navigation: [
    { label: 'Главная', href: '#home' },
    { label: 'Услуги', href: '#services' },
    { label: 'Портфолио', href: '#portfolio' },
    { label: 'О нас', href: '#about' },
    { label: 'Контакты', href: '#contact' },
  ],
  services: [
    { label: 'Веб-разработка', href: '#services' },
    { label: 'AI интеграции', href: '#services' },
    { label: 'Мобильные приложения', href: '#services' },
    { label: 'UI/UX дизайн', href: '#services' },
  ],
  company: [
    { label: 'Блог', href: '#' },
    { label: 'Карьера', href: '#' },
    { label: 'Партнёрам', href: '#' },
    { label: 'Политика конфиденциальности', href: '#' },
  ],
}

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Send, href: '#', label: 'Telegram' },
]

export function Footer() {
  return (
    <footer className="relative bg-dark/95 border-t border-white/10 pt-20 pb-8">
      <div className="container">
        <div className="grid lg:grid-cols-[1.5fr_2fr] gap-16 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <path
                    d="M20 4L36 12V28L20 36L4 28V12L20 4Z"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 12L28 16V24L20 28L12 24V16L20 12Z"
                    fill="url(#gradient2)"
                  />
                  <defs>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-2xl font-bold">
                Codex<span className="gradient-text">AI</span>
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Создаём digital-продукты нового поколения с использованием AI и современных технологий.
            </p>
          </motion.div>

          {/* Links */}
          <div className="grid sm:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-semibold mb-6">Навигация</h4>
              <ul className="space-y-4">
                {footerLinks.navigation.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold mb-6">Услуги</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-semibold mb-6">Компания</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} CodexAI. Все права защищены.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:border-transparent transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
