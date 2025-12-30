import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'CodexAI - Инновационная веб-студия',
  description: 'Создаём digital-продукты нового поколения с использованием AI и современных технологий. Веб-разработка, мобильные приложения, AI интеграции.',
  keywords: 'веб-студия, разработка сайтов, AI, искусственный интеллект, React, Next.js, мобильные приложения',
  authors: [{ name: 'CodexAI Team' }],
  openGraph: {
    title: 'CodexAI - Инновационная веб-студия',
    description: 'Превращаем идеи в цифровые шедевры',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
