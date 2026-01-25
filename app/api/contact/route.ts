import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  productInterest: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = contactSchema.parse(body)
    
    // Here you would typically:
    // 1. Send email notification
    // 2. Save to database
    // 3. Integrate with CRM
    
    console.log('Contact form submission:', validatedData)
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry. We will contact you within 24 hours.',
    })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }
    
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}