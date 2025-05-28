// app/api/send-startup-form/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {

    async function sendConfirmationEmail(
        transporter: nodemailer.Transporter,
        recipientEmail: string,
        founderName: string,
        startupName: string,
        email: string
      ) {

        const htmlContent = `
<html>
  <head>
    <style>
      body {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        color: #333333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        text-align: center;
        margin-bottom: 30px;
      }
      .logo {
        max-width: 180px;
        margin-bottom: 25px;
      }
      h2 {
        color: #1a2e55;
        font-size: 22px;
        margin-bottom: 20px;
        font-weight: 600;
      }
      .content {
        background-color: #ffffff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      }
      p {
        margin-bottom: 16px;
        font-size: 15px;
      }
      strong {
        color: #1a2e55;
      }
      .signature {
        margin-top: 30px;
        border-top: 1px solid #eeeeee;
        padding-top: 20px;
      }
      .footer {
        margin-top: 40px;
        font-size: 12px;
        color: #888888;
        text-align: center;
      }
      a {
        color: #3b82f6;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <img src="https://avswebsiteupdate.vercel.app/assets/AVSLogo.png" alt="Aventure Studio Logo" class="logo">
    </div>
    
    <div class="content">
      <h2>Thank you for your submission, ${founderName}!</h2>
      
      <p>We've successfully received your application for <strong>${startupName}</strong> and it's now in our review queue.</p>
      
      <p>Our investment team will carefully evaluate your submission and respond to <a href="mailto:${email}">${email}</a> within 5-7 business days.</p>
      
      <p>Should we need any additional information, we'll reach out directly.</p>
      
      <div class="signature">
        <p>Best regards,</p>
        <p><strong>The Aventure Studio Team</strong></p>
      </div>
    </div>
    
    <div class="footer">
      <p>This email confirms receipt of your application via the Aventure Studio platform</p>
      <p>&copy; ${new Date().getFullYear()} Aventure Studio. All rights reserved.</p>
      <p><a href="https://aventurestud.io">aventurestud.io</a> | <a href="mailto:hello@aventurestud.io">hello@aventurestud.io</a></p>
    </div>
  </body>
</html>
`;

const textContent = `
Thank you for your submission, ${founderName}!

We've successfully received your application for ${startupName} and it's now in our review queue.

Our investment team will carefully evaluate your submission and respond to ${email} within 5-7 business days. Should we need any additional information, we'll reach out directly.

Best regards,
The Aventure Studio Team

---
This email confirms receipt of your application via the Aventure Studio platform
© ${new Date().getFullYear()} Aventure Studio
aventurestud.io | hello@aventurestud.io
`;
        const mailOptions = {
          from: `"Aventure Studio" <${process.env.EMAIL_USER || "idris@aventurestud.io"}>`,
          to: recipientEmail,
          subject: `We've received your submission for ${startupName}`,
          html: htmlContent,
           text: textContent, 
         
        };
      
        return transporter.sendMail(mailOptions);
      }
  try {
    const formData = await req.formData();
    
    // Extract form fields
    const founderName = formData.get('founderName') as string;
    const email = formData.get('email') as string;
    const startupName = formData.get('startupName') as string;
    const website = formData.get('website') as string;
    const description = formData.get('description') as string;
    const problem = formData.get('problem') as string;
    const customers = formData.get('customers') as string;
    const revenue = formData.get('revenue') as string;
    const notes = formData.get('notes') as string;
    const startupStage = formData.get('startupStage') as string;
    const existingFunding = formData.get('existingFunding') as string;
    const support = formData.get('supportType') as string;
    
    // Extract file if exists
    const file = formData.get('file') as File | null;

    // Configure transporter (same as your working code)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAILEMAIL_USER ,
        pass: process.env.GMAILEMAIL_PASS, //"uzam xobg qgqs aewa",
      },
      tls: {
        rejectUnauthorized: false,
      },
      connectionTimeout: 10000,
    });

    // Email content
    const emailSubject = `New Startup Submission from ${founderName}`;
    
    const textContent = `
Founder: ${founderName}
Email: ${email}
Startup Name: ${startupName}
Website: ${website}
Startup Stage: ${startupStage}
Funding: ${existingFunding}
Support Needed: ${support}

Description: ${description}
Problem: ${problem}
Customers: ${customers}
Revenue Model: ${revenue}
Notes: ${notes}
    `;

    // HTML version (optional but recommended)
    // const emailSubject = `New Startup Submission from ${founderName}`;

    const htmlContent = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
            color: #333;
            line-height: 1.6;
          }
          .container {
            max-width: 640px;
            margin: 40px auto;
            background-color: #fff;
            border-radius: 8px;
            padding: 0;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            overflow: hidden;
            border: 1px solid #e1e4e8;
          }
          .header {
            background: linear-gradient(135deg, #fefefe 0%, #ddd 100%);
            padding: 32px 40px;
            text-align: center;
            color: black;
          }
          .header h1 {
            margin: 0 0 8px 0;
            font-size: 24px;
            font-weight: 600;
            letter-spacing: 0.5px;
          }
          .header p {
            margin: 0;
            opacity: 0.9;
            font-size: 15px;
          }
          .logo {
            max-width: 180px;
            margin-bottom: 20px;
          }
          .content {
            padding: 32px 40px;
          }
          .section {
            margin-bottom: 28px;
          }
          .section h3 {
            color: #1a2e55;
            margin: 0 0 12px 0;
            font-size: 18px;
            font-weight: 600;
            padding-bottom: 6px;
            border-bottom: 1px solid #e1e4e8;
          }
          .field-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 16px;
          }
          .field {
            margin-bottom: 12px;
          }
          .field strong {
            display: block;
            font-weight: 500;
            color: #555;
            font-size: 14px;
            margin-bottom: 4px;
          }
          .field-value {
            font-size: 15px;
            color: #222;
            line-height: 1.5;
          }
          .text-content {
            background-color: #f8fafc;
            padding: 16px;
            border-radius: 6px;
            border-left: 3px solid #3b82f6;
            font-size: 15px;
          }
          .footer {
            text-align: center;
            font-size: 13px;
            color: #666;
            padding: 24px 40px;
            background-color: #f8f9fa;
            border-top: 1px solid #e1e4e8;
          }
          .fotologo {
            width: 140px;
            margin-bottom: 16px;
            opacity: 0.8;
          }
          a {
            color: #3b82f6;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://avswebsiteupdate.vercel.app/assets/AVSLogo.png" alt="Aventure Studio Logo" class="logo">
            <h1>New Startup Application</h1>
            <p>Submitted via Aventure Studio Portal</p>
          </div>
          
          <div class="content">
            <div class="section">
              <h3>Founder Information</h3>
              <div class="field-group">
                <div class="field">
                  <strong>Founder Name</strong>
                  <div class="field-value">${founderName}</div>
                </div>
                <div class="field">
                  <strong>Email</strong>
                  <div class="field-value"><a href="mailto:${email}">${email}</a></div>
                </div>
              </div>
              <div class="field-group">
                <div class="field">
                  <strong>Startup Name</strong>
                  <div class="field-value">${startupName}</div>
                </div>
                <div class="field">
                  <strong>Website</strong>
                  <div class="field-value"><a href="${website}" target="_blank">${website}</a></div>
                </div>
              </div>
            </div>
            
            <div class="section">
              <h3>Business Overview</h3>
              <div class="field-group">
                <div class="field">
                  <strong>Development Stage</strong>
                  <div class="field-value">${startupStage}</div>
                </div>
                <div class="field">
                  <strong>Current Funding</strong>
                  <div class="field-value">${existingFunding}</div>
                </div>
              </div>
              <div class="field">
                <strong>Support Requested</strong>
                <div class="field-value">${support}</div>
              </div>
            </div>
            
            <div class="section">
              <h3>Business Proposition</h3>
              <div class="field">
                <strong>Company Description</strong>
                <div class="text-content">${description.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="field">
                <strong>Problem Being Solved</strong>
                <div class="text-content">${problem.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="field">
                <strong>Target Market</strong>
                <div class="text-content">${customers.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="field">
                <strong>Revenue Model</strong>
                <div class="text-content">${revenue.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            
            ${notes ? `
            <div class="section">
              <h3>Additional Notes</h3>
              <div class="text-content">${notes.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
          </div>
          
          <div class="footer">
            <img src="https://avswebsiteupdate.vercel.app/assets/AVSLogo.png" alt="Aventure Studio Logo" class="fotologo"/>
            <p>This application was submitted via the Aventure Studio platform</p>
            <p>© ${new Date().getFullYear()} Aventure Studio. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
    `;
    

    // Prepare mail optionshello@aventurestud.io,jt@aventurestud.io,dm@aventurestud.io,
    const mailOptions: nodemailer.SendMailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL || "hello@aventurestud.io,jt@aventurestud.io,dm@aventurestud.io,idris@aventurestud.io",
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
      replyTo: email,
    };

    // Handle file attachment if exists
    if (file) {
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

    // Send email
    const info = await transporter.sendMail(mailOptions);

     const confirmationEmailPromise = sendConfirmationEmail(
        transporter,
        email,
        founderName,
        startupName,
        email
    
      );
  
      // Wait for both emails to send
      const [teamResult, confirmationResult] = await Promise.all([
        info,
        confirmationEmailPromise
      ]);
  
      console.log('Both emails sent successfully');
      
    return NextResponse.json({ 
      success: true, 
      message: "Startup form submitted successfully!",
    //   messageId: info.messageId
      messageIds: {
        team: info.messageId,
        confirmation: confirmationResult.messageId
      }
    });

  } catch (error) {
    console.error('Error submitting startup form:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to submit startup form", 
        error: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}