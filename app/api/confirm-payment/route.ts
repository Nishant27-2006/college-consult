import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import nodemailer from 'nodemailer'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function POST(request: NextRequest) {
  try {
    const { paymentIntentId, formData } = await request.json()

    // Retrieve the payment intent to verify it was successful
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)

    if (paymentIntent.status !== 'succeeded') {
      return NextResponse.json(
        { error: 'Payment was not successful' },
        { status: 400 }
      )
    }

    // Send confirmation email to business
    const packagePrice = formData.packageType === 'starter' ? '$300' : '$450'
    const packageHours = formData.packageType === 'starter' ? '5 hours' : '10 hours'

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🎉 NEW PAID SIGNUP - ${formData.fullName} - ${formData.packageType.toUpperCase()} Package`,
      html: `
        <h2>New Paid Signup Received!</h2>
        <h3>Payment Details:</h3>
        <p><strong>Payment Status:</strong> PAID ✅</p>
        <p><strong>Payment Amount:</strong> ${packagePrice}</p>
        <p><strong>Stripe Payment ID:</strong> ${paymentIntentId}</p>
        
        <h3>Customer Information:</h3>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Grade Level:</strong> ${formData.gradeLevel}</p>
        
        <h3>Package Details:</h3>
        <p><strong>Package:</strong> ${formData.packageType.toUpperCase()} Package</p>
        <p><strong>Price:</strong> ${packagePrice}</p>
        <p><strong>Consulting Hours:</strong> ${packageHours}</p>
        
        <h3>Interests:</h3>
        <p>${formData.interests.length > 0 ? formData.interests.join(', ') : 'None specified'}</p>
        
        <h3>Academic Goals:</h3>
        <p>${formData.academicGoals || 'None specified'}</p>
        
        <h3>How They Heard About Us:</h3>
        <p>${formData.hearAbout || 'Not specified'}</p>
        
        <h3>Additional Information:</h3>
        <p>${formData.additionalInfo || 'None provided'}</p>
        
        <p><strong>Action Required:</strong> Contact the customer within 24 hours to schedule their free consultation!</p>
      `
    }

    await transporter.sendMail(mailOptions)

    // Send confirmation email to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: `Welcome to College Consult! Your ${formData.packageType.toUpperCase()} Package Confirmation`,
      html: `
        <h2>Welcome to College Consult, ${formData.fullName}!</h2>
        
        <p>Thank you for choosing College Consult! We're excited to help you achieve your college dreams.</p>
        
        <h3>Your Package Details:</h3>
        <p><strong>Package:</strong> ${formData.packageType.toUpperCase()} Package</p>
        <p><strong>Price:</strong> ${packagePrice}</p>
        <p><strong>Consulting Hours:</strong> ${packageHours}</p>
        <p><strong>Payment Status:</strong> CONFIRMED ✅</p>
        
        <h3>What's Next?</h3>
        <p>1. We'll contact you within 24 hours to schedule your free consultation</p>
        <p>2. During the consultation, we'll discuss your goals and create a personalized plan</p>
        <p>3. We'll begin working together to build your path to college success</p>
        
        <h3>Contact Information:</h3>
        <p>Email: colllegeconsult@gmail.com</p>
        <p>We're here to support you every step of the way!</p>
        
        <p>Best regards,<br>The College Consult Team</p>
      `
    }

    await transporter.sendMail(customerMailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error confirming payment:', error)
    return NextResponse.json(
      { error: 'Failed to confirm payment' },
      { status: 500 }
    )
  }
}