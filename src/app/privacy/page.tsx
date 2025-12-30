'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BackgroundAnimation } from '@/components/BackgroundAnimation'

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen">
      <BackgroundAnimation />
      <Header />

      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Вернуться на главную</span>
            </Link>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Политика <span className="gradient-text">конфиденциальности</span>
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              {/* Content */}
              <div className="card p-8 md:p-12 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
                  <p className="text-white/70 leading-relaxed">
                    Настоящая Политика конфиденциальности определяет порядок обработки и защиты
                    персональных данных пользователей веб-сайта CodexAI. Мы уважаем вашу
                    конфиденциальность и обязуемся защищать ваши персональные данные.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Сбор информации</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Мы собираем следующую информацию:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>Имя и контактные данные (email, телефон)</li>
                    <li>Информация о проекте, указанная в форме обратной связи</li>
                    <li>Техническая информация (IP-адрес, тип браузера)</li>
                    <li>Cookies и данные аналитики</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Использование информации</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Собранная информация используется для:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>Связи с вами по вопросам вашего проекта</li>
                    <li>Улучшения качества наших услуг</li>
                    <li>Аналитики и статистики посещаемости</li>
                    <li>Отправки информационных материалов (с вашего согласия)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Защита данных</h2>
                  <p className="text-white/70 leading-relaxed">
                    Мы применяем современные методы защиты данных, включая шифрование SSL,
                    безопасное хранение на защищённых серверах и ограниченный доступ к
                    персональным данным только уполномоченным сотрудникам.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
                  <p className="text-white/70 leading-relaxed">
                    Наш сайт использует cookies для улучшения пользовательского опыта.
                    Вы можете отключить cookies в настройках браузера, однако это может
                    повлиять на функциональность сайта.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Ваши права</h2>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Вы имеете право:
                  </p>
                  <ul className="list-disc list-inside text-white/70 space-y-2">
                    <li>Запросить доступ к вашим персональным данным</li>
                    <li>Потребовать исправления неточных данных</li>
                    <li>Потребовать удаления ваших данных</li>
                    <li>Отозвать согласие на обработку данных</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Контакты</h2>
                  <p className="text-white/70 leading-relaxed">
                    По вопросам, связанным с обработкой персональных данных, вы можете
                    связаться с нами по email:{' '}
                    <a href="mailto:privacy@codexai.ru" className="text-primary hover:underline">
                      privacy@codexai.ru
                    </a>
                  </p>
                </section>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-white/50 text-sm">
                    Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
