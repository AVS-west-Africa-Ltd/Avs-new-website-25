// app/api/send-email/route.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    // Log the receiving of formData
    console.log('FormData received:', Object.fromEntries(formData.entries()));
    
    // Extract file if it exists
    const file = formData.get('file') as File | null;
    
    // Extract form data
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const lookingFor = formData.get('lookingFor') as string;
    const message = formData.get('message') as string;
    const subscribed = formData.get('subscribed') === 'true';
    
    // Log the email config we're using (remove sensitive info in production)
    console.log('Email config:', {
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      secure: process.env.EMAIL_SERVER_SECURE,
      user: process.env.EMAIL_SERVER_USER ? '✓ Set' : '✗ Missing',
      pass: process.env.EMAIL_SERVER_PASSWORD ? '✓ Set' : '✗ Missing',
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO
    });
    
    // Validate required env vars
    if (!process.env.EMAIL_SERVER_HOST || 
        !process.env.EMAIL_SERVER_USER || 
        !process.env.EMAIL_SERVER_PASSWORD || 
        !process.env.EMAIL_FROM || 
        !process.env.EMAIL_TO) {
      throw new Error('Missing required email configuration');
    }
    
    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
      secure: process.env.EMAIL_SERVER_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });
    
    // Verify connection
    await transporter.verify().catch(err => {
      console.error('Transporter verification failed:', err);
      throw new Error(`SMTP connection failed: ${err.message}`);
    });
    
    // Format email content
    const emailSubject = `Contact Form Submission from ${firstName} ${lastName}`;
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Looking For:</strong> ${lookingFor}</p>
      <p><strong>Subscribed to Updates:</strong> ${subscribed ? 'Yes' : 'No'}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;
    
    // Prepare email options
    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: emailSubject,
      html: htmlContent,
      replyTo: email,
    };
    
    // If file exists, attach it
    if (file) {
      console.log('Attaching file:', file.name, file.size);
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      mailOptions.attachments = [
        {
          filename: file.name,
          content: buffer,
        },
      ];
    }
    
    console.log('Sending email...');
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', info.messageId);
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: info.messageId
    });
  } catch (error) {
    // Detailed error logging
    console.error('Error sending email:', error);
    
    // Return descriptive error
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email', 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}