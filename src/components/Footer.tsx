'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Send, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  navigation: [
    { label: 'Главная', href: '/' },
    { label: 'Услуги', href: '/services' },
    { label: 'Проекты', href: '/work' },
    { label: 'О нас', href: '/about' },
    { label: 'Контакты', href: '/contact' },
  ],
  services: [
    { label: 'Веб-разработка', href: '/services#web' },
    { label: 'Мобильные приложения', href: '/services#mobile' },
    { label: 'AI интеграции', href: '/services#ai' },
    { label: 'UI/UX дизайн', href: '/services#design' },
  ],
  company: [
    { label: 'Блог', href: '/blog' },
    { label: 'Карьера', href: '/careers' },
    { label: 'Политика конфиденциальности', href: '/privacy' },
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
    <footer className="relative border-t border-white/5">
      {/* Main Footer */}
      <div className="container py-20">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
                <div className="relative w-full h-full bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L18.5 7 12 9.5 5.5 7 12 4.5zM4 8.5l7 3.5v7l-7-3.5v-7zm9 10.5v-7l7-3.5v7l-7 3.5z"/>
                  </svg>
                </div>
              </div>
              <span className="text-xl font-display font-bold">
                Codex<span className="gradient-text">AI</span>
              </span>
            </Link>
            <p className="text-white/50 leading-relaxed mb-8 max-w-xs">
              Digital-студия полного цикла. Создаём продукты, которые меняют правила игры.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="mailto:hello@codexai.ru"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5" />
                <span>hello@codexai.ru</span>
              </a>
              <a
                href="tel:+79991234567"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+7 999 123-45-67</span>
              </a>
              <div className="flex items-center gap-3 text-white/40">
                <MapPin className="w-5 h-5" />
                <span>Москва, Россия</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/30 mb-6">
              Навигация
            </h4>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/30 mb-6">
              Услуги
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/30 mb-6">
              Компания
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="flex items-center gap-3 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} CodexAI. Все права защищены.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/30">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
              <span>Сделано с ❤️ в Москве</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
