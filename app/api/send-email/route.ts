

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
    
    // Configure Nodemailer transporter - using your existing settings
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "idris@aventurestud.io", // Use process.env.EMAIL_USER in production
    //     pass: "uzam xobg qgqs aewa", // Use process.env.EMAIL_PASSWORD in production
    //   },
    // });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use true for port 465
      auth: {
        user: "idris@aventurestud.io", // move to process.env.EMAIL_USER in prod
        pass: "uzam xobg qgqs aewa",   // move to process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 10000, // optional but helpful (10 sec)
    });
    
    
    // Format email content with proper HTML
    const emailSubject = `AVS Contact form submission from ${firstName} ${lastName}`;
    
    // HTML email version
    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h2 { color: #2a2a2a; border-bottom: 1px solid #eee; padding-bottom: 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; }
            .message-box { background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-top: 20px; }
            .footer { margin-top: 30px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>A Venture Studio New Contact Form Submission</h2>
            
            <div class="field">
              <span class="label">From:</span> ${firstName} ${lastName}
            </div>
            
            <div class="field">
              <span class="label">Email:</span> ${email}
            </div>
            
            <div class="field">
              <span class="label">Phone:</span> ${phone}
            </div>
            
            <div class="field">
              <span class="label">Looking For:</span> ${lookingFor || 'Not specified'}
            </div>
            
            <div class="field">
              <span class="label">Subscribed to Updates:</span> ${subscribed ? 'Yes' : 'No'}
            </div>
            
            <div class="message-box">
              <h3>Message:</h3>
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div class="footer">
              <p>This email was sent from the Aventure Studio contact</p>
            </div>
          </div>
        </body>
      </html>
    `;
    
    // Plain text version as fallback
    const textContent = `
 A Venture Studio New Contact Form Submission

From: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Looking For: ${lookingFor || 'Not specified'}
Subscribed to Updates: ${subscribed ? 'Yes' : 'No'}

Message:
${message}

This email was sent from the Aventure Studio contact form.
    `;
    
    // Prepare email options
    const mailOptions: nodemailer.SendMailOptions = {
      from: email,
      to: "hello@aventurestud.io,jt@aventurestud.io,idris@aventurestud.io", // Use process.env.RECIPIENT_EMAIL in production
      subject: emailSubject,
      text: textContent, // Plain text version
      html: htmlContent,  // HTML version
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
          encoding: 'base64',
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
      message: "Message sent successfully! We will contact you soon",
      messageId: info.messageId
    });
  } catch (error) {
    // Detailed error logging
    console.error('Error sending email:', error);
    
    // Return descriptive error
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to send email", 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}