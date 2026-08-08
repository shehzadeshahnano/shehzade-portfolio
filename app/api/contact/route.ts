import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactFormData

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { message: 'All fields are required', success: false },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { message: 'Invalid email address', success: false },
        { status: 400 }
      )
    }

    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        message:
          'Thank you for your message! I will get back to you soon.',
        success: true,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        message: 'An error occurred while processing your request',
        success: false,
      },
      { status: 500 }
    )
  }
}
