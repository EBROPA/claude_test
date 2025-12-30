import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const viewport: Viewport = {
  themeColor: '#6366f1',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'CodexAI - Инновационная веб-студия',
    template: '%s | CodexAI',
  },
  description: 'Создаём digital-продукты нового поколения с использованием AI и современных технологий. Веб-разработка, мобильные приложения, AI интеграции.',
  keywords: [
    'веб-студия',
    'разработка сайтов',
    'AI',
    'искусственный интеллект',
    'React',
    'Next.js',
    'мобильные приложения',
    'веб-разработка',
    'UI/UX дизайн',
    'создание сайтов',
  ],
  authors: [{ name: 'CodexAI Team', url: 'https://codexai.ru' }],
  creator: 'CodexAI',
  publisher: 'CodexAI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://codexai.ru',
    siteName: 'CodexAI',
    title: 'CodexAI - Инновационная веб-студия',
    description: 'Превращаем идеи в цифровые шедевры. Веб-разработка, AI интеграции, мобильные приложения.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CodexAI - Веб-студия',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodexAI - Инновационная веб-студия',
    description: 'Превращаем идеи в цифровые шедевры',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://codexai.ru',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
