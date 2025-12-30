'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Rocket } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#home', label: 'Главная' },
  { href: '#services', label: 'Услуги' },
  { href: '#portfolio', label: 'Портфолио' },
  { href: '#about', label: 'О нас' },
  { href: '#contact', label: 'Контакты' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
        isScrolled
          ? 'py-4 bg-dark/90 backdrop-blur-xl border-b border-white/10'
          : 'py-6'
      )}
    >
      <nav className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <motion.div
            className="w-10 h-10"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
              <path
                d="M20 4L36 12V28L20 36L4 28V12L20 4Z"
                stroke="url(#gradient1)"
                strokeWidth="2"
              />
              <path
                d="M20 12L28 16V24L20 28L12 24V16L20 12Z"
                fill="url(#gradient1)"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          <span className="text-2xl font-bold tracking-tight">
            Codex<span className="gradient-text">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 relative',
                  activeSection === link.href.replace('#', '')
                    ? 'text-white bg-white/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                )}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="hidden lg:flex btn btn-primary"
        >
          <span>Начать проект</span>
          <Rocket className="w-4 h-4" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-dark/95 backdrop-blur-xl border-b border-white/10"
          >
            <nav className="container py-6">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'block px-4 py-3 rounded-xl font-medium transition-all duration-300',
                        activeSection === link.href.replace('#', '')
                          ? 'text-white bg-white/10'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-4">
                  <Link
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn btn-primary w-full"
                  >
                    <span>Начать проект</span>
                    <Rocket className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
