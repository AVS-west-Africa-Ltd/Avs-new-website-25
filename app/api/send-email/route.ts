

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

    // const transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: 587,
    //   secure: false, // Use true for port 465
    //   auth: {
    //     user: "idris@aventurestud.io", // move to process.env.EMAIL_USER in prod
    //     pass: "uzam xobg qgqs aewa",   // move to process.env.EMAIL_PASS
    //   },
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // Use true for port 465
      auth: {
        user: "8dee4f001@smtp-brevo.com", // move to process.env.EMAIL_USER in prod
        pass: "Rcmy6HBtK8wFXCSk",   // move to process.env.EMAIL_PASS
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
          body { 
            font-family: 'Helvetica Neue', Arial, sans-serif; 
            line-height: 1.6; 
            color: #333333;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
          }
          .container { 
            max-width: 600px; 
            margin: 0 auto; 
            padding: 30px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .logo {
            max-width: 150px;
            margin-bottom: 20px;
          }
 .fotologo {
            width: 140px;
            margin-bottom: 16px;
            opacity: 0.9;
          }
          h1 {
            color: #2a2a2a;
            font-size: 24px;
            margin-bottom: 5px;
          }
          .subtitle {
            color: #666666;
            font-size: 16px;
            margin-bottom: 30px;
          }
          .divider {
            border-top: 1px solid #eeeeee;
            margin: 25px 0;
          }
          .field { 
            margin-bottom: 15px;
            display: flex;
          }
          .label { 
            font-weight: 600;
            color: #444444;
            min-width: 120px;
          }
          .value {
            flex: 1;
          }
          .message-box { 
            background-color: #f9f9f9; 
            padding: 20px; 
            border-radius: 6px; 
            margin-top: 25px;
            border-left: 4px solid #3b82f6;
          }
          .message-title {
            font-weight: 600;
            margin-bottom: 10px;
            color: #2a2a2a;
          }
          .footer { 
            margin-top: 40px; 
            font-size: 13px; 
            color: #999999;
            text-align: center;
          }
          .signature {
            margin-top: 30px;
            color: #444444;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://avswebsiteupdate.vercel.app/assets/AVSLogo.png" alt="Aventure Studio Logo" class="logo">
            <h1>New Contact Submission</h1>
            <p class="subtitle">You've received a new message through the contact form</p>
          </div>
          
          <div class="divider"></div>
          
          <div class="field">
            <span class="label">From:</span>
            <span class="value">${firstName} ${lastName}</span>
          </div>
          
          <div class="field">
            <span class="label">Email:</span>
            <span class="value"><a href="mailto:${email}">${email}</a></span>
          </div>
          
          <div class="field">
            <span class="label">Phone:</span>
            <span class="value"><a href="tel:${phone}">${phone}</a></span>
          </div>
          
          <div class="field">
            <span class="label">Interest:</span>
            <span class="value">${lookingFor || 'Not specified'}</span>
          </div>
          
          <div class="field">
            <span class="label">Subscribed:</span>
            <span class="value">${subscribed ? '✅ Yes' : '❌ No'}</span>
          </div>
          
          <div class="message-box">
            <div class="message-title">Message:</div>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div class="divider"></div>
          
          <div class="footer">
            <p>This message was sent via the Aventure Studio contact form</p>
            <p class="signature">
              Best regards,<br>
              <strong>The Aventure Studio Team</strong>

            </p>
            <div>
              <img src="https://avswebsiteupdate.vercel.app/assets/AVSLogo.png" alt="Aventure Studio Logo" class="fotologo">

            </div>
            <p>
              <small>
              <a href="https://aventurestud.io" style="color: #3b82f6;">aventurestud.io</a> | 
                <a href="mailto:hello@aventurestud.io" style="color: #3b82f6;">hello@aventurestud.io</a>
              </small>
            </p>
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
    
    // Prepare email options hello@aventurestud.io,jt@aventurestud.io,dm@aventurestud.io,
    const mailOptions: nodemailer.SendMailOptions = {
      from: '"Aventure Studio" <idris@aventurestud.io>',
      to: "hello@aventurestud.io,jt@aventurestud.io,dm@aventurestud.io,idris@aventurestud.io", // Use process.env.RECIPIENT_EMAIL in production
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