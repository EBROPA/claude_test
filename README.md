# CodexAI - Website

Modern, animated website for CodexAI web studio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Modern dark theme with gradient accents
- Smooth scroll animations with Framer Motion
- Responsive design for all devices
- Interactive portfolio filter
- Contact form with validation
- API routes for form handling
- Optimized for Vercel deployment

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Validation:** Zod
- **Email:** Resend (optional)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/     # Contact form API
│   │   └── health/      # Health check API
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── About.tsx        # About section
│   ├── BackgroundAnimation.tsx
│   ├── Contact.tsx      # Contact form section
│   ├── Footer.tsx
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Portfolio.tsx    # Portfolio section
│   ├── Services.tsx     # Services section
│   └── Testimonials.tsx # Testimonials section
├── hooks/
│   ├── useCountUp.ts    # Number counter hook
│   └── useScrollAnimation.ts
└── lib/
    └── utils.ts         # Utility functions
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
RESEND_API_KEY=your_resend_api_key  # Optional: for email sending
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get submissions (admin)
- `GET /api/health` - Health check

## License

MIT
