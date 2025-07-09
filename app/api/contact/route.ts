import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, gradeLevel, interests, academicGoals, hearAbout } = body

    // Validate required fields
    if (!fullName || !email || !gradeLevel) {
      return NextResponse.json(
        { error: 'Missing required fields: fullName, email, and gradeLevel are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create transporter - reusable SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Verify connection configuration (optional but recommended)
    await transporter.verify()

    // Format interests for display
    const interestsList = interests.length > 0 ? interests.join(', ') : 'None specified'

    // Email content with better formatting
    const mailOptions = {
      from: `"College Consult" <${process.env.EMAIL_USER}>`,
      to: "ramssarma@gmail.com, nishantg2706@gmail.com",
      subject: `New College Consult Application - ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d97706; border-bottom: 2px solid #d97706; padding-bottom: 10px;">
            New College Consult Application
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Student Information</h3>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Grade Level:</strong> ${gradeLevel}</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Interests & Goals</h3>
            <p><strong>Areas of Interest:</strong> ${interestsList}</p>
            <p><strong>Academic Goals:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #d97706;">
              ${academicGoals || 'Not provided'}
            </p>
            <p><strong>How they heard about us:</strong> ${hearAbout || 'Not provided'}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="text-align: center; color: #6b7280; font-style: italic;">
            This email was sent from the College Consult website contact form on ${new Date().toLocaleString()}
          </p>
        </div>
      `,
      text: `
New College Consult Application

Student Information:
- Full Name: ${fullName}
- Email: ${email}
- Grade Level: ${gradeLevel}

Areas of Interest: ${interestsList}

Academic Goals:
${academicGoals || 'Not provided'}

How they heard about us: ${hearAbout || 'Not provided'}

Submitted on: ${new Date().toLocaleString()}
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    
    console.log('Message sent: %s', info.messageId)

    return NextResponse.json({ 
      message: 'Application submitted successfully',
      messageId: info.messageId 
    }, { status: 200 })
    
  } catch (error) {
    console.error('Error sending email:', error)
    
    // More specific error messages
    if (error.code === 'EAUTH') {
      return NextResponse.json(
        { error: 'Email authentication failed. Please check email credentials.' },
        { status: 500 }
      )
    } else if (error.code === 'ECONNECTION') {
      return NextResponse.json(
        { error: 'Failed to connect to email server. Please try again later.' },
        { status: 500 }
      )
    } else {
      return NextResponse.json(
        { error: 'Failed to send application. Please try again or contact us directly.' },
        { status: 500 }
      )
    }
  }
}