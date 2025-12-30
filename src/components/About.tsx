'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Users, Shield } from 'lucide-react'
import {
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiAmazon,
  SiDocker,
  SiFigma,
  SiMongodb,
} from 'react-icons/si'

const features = [
  {
    icon: Lightbulb,
    title: 'Инновационный подход',
    description: 'Используем новейшие технологии и методологии',
  },
  {
    icon: Users,
    title: 'Команда экспертов',
    description: '20+ специалистов с опытом 5+ лет',
  },
  {
    icon: Shield,
    title: 'Гарантия качества',
    description: '100% соответствие требованиям и срокам',
  },
]

const techStack = [
  { icon: SiReact, name: 'React' },
  { icon: SiVuedotjs, name: 'Vue.js' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiPython, name: 'Python' },
  { icon: SiAmazon, name: 'AWS' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiFigma, name: 'Figma' },
  { icon: SiMongodb, name: 'MongoDB' },
]

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge mb-4">О компании</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Мы — <span className="gradient-text">CodexAI</span>
            </h2>

            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              Мы — команда увлечённых разработчиков, дизайнеров и стратегов, объединённых
              общей целью: создавать digital-продукты, которые меняют правила игры.
            </p>

            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Наш подход сочетает передовые технологии, включая искусственный интеллект,
              с глубоким пониманием бизнес-задач наших клиентов.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-primary to-secondary rounded-xl text-white flex-shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                    <p className="text-white/60">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-4 gap-5">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="group flex flex-col items-center gap-3 p-6 bg-dark-card border border-white/10 rounded-2xl hover:border-primary/50 transition-all duration-300"
                >
                  <tech.icon className="w-10 h-10 text-white/60 group-hover:text-primary transition-colors" />
                  <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
