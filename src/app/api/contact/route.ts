import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Некорректный email адрес'),
  service: z.string().min(1, 'Выберите услугу'),
  message: z.string().min(10, 'Сообщение должно содержать минимум 10 символов'),
})

// In-memory storage for demo (replace with database in production)
const submissions: Array<{
  id: string
  name: string
  email: string
  service: string
  message: string
  createdAt: Date
}> = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validationResult = contactSchema.safeParse(body)

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map((err) => err.message)
      return NextResponse.json(
        { error: errors.join(', ') },
        { status: 400 }
      )
    }

    const { name, email, service, message } = validationResult.data

    // Create submission record
    const submission = {
      id: crypto.randomUUID(),
      name,
      email,
      service,
      message,
      createdAt: new Date(),
    }

    // Store submission (in production, save to database)
    submissions.push(submission)

    // Log the submission (for demo purposes)
    console.log('New contact form submission:', submission)

    // In production, you would send an email here using Resend or similar service
    // Example with Resend:
    /*
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: 'CodexAI <noreply@codexai.ru>',
        to: ['team@codexai.ru'],
        subject: `Новая заявка от ${name}`,
        html: `
          <h2>Новая заявка с сайта</h2>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Услуга:</strong> ${service}</p>
          <p><strong>Сообщение:</strong></p>
          <p>${message}</p>
        `,
      })
    }
    */

    return NextResponse.json({
      success: true,
      message: 'Заявка успешно отправлена!',
      id: submission.id,
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Произошла ошибка при отправке заявки' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve submissions (for admin purposes)
export async function GET(request: NextRequest) {
  // In production, add authentication check here
  const { searchParams } = new URL(request.url)
  const limit = parseInt(searchParams.get('limit') || '10')

  return NextResponse.json({
    submissions: submissions.slice(-limit).reverse(),
    total: submissions.length,
  })
}
