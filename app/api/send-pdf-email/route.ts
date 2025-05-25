// /app/api/send-pdf-email/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { base64Pdf, userEmail } = await req.json();

    // Convert base64 to Buffer
    const pdfBuffer = Buffer.from(base64Pdf.split(",")[1], "base64");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || "idris@aventurestud.io",
        pass: process.env.EMAIL_PASS || "uzam xobg qgqs aewa",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const emailSubject = `📄 New Business Canvas PDF Submission`;

    const htmlContent = `
    <html>
      <head>
        <style>
          body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background-color: #f8f9fa;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: auto;
            padding: 30px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .logo {
            max-width: 140px;
            margin-bottom: 10px;
          }
          .title {
            font-size: 22px;
            font-weight: 600;
            color: #2a2a2a;
          }
          .details {
            margin-top: 20px;
            font-size: 15px;
            line-height: 1.6;
          }
          .details strong {
            color: #2a2a2a;
          }
          .footer {
            margin-top: 40px;
            text-align: center;
            font-size: 13px;
            color: #999;
          }
          a {
            color: #3b82f6;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img class="logo" src="https://avswebsiteupdate.vercel.app/assets/AVSLogo.png" alt="AVS Logo" />
            <div class="title">New Business Canvas Submission</div>
          </div>
          <div class="details">
            <p><strong>A new Business Canvas PDF</strong> has been submitted via the application.</p>
            ${userEmail ? `<p><strong>User Email:</strong> <a href="mailto:${userEmail}">${userEmail}</a></p>` : ''}
            <p>The PDF file is attached to this email.</p>
          </div>
          <div class="footer">
            <p>This message was sent via the AVS Business Canvas App</p>
            <p>
              <a href="https://aventurestud.io">aventurestud.io</a> |
              <a href="mailto:hello@aventurestud.io">hello@aventurestud.io</a>
            </p>
          </div>
        </div>
      </body>
    </html>
    `;

    const textContent = `
New Business Canvas PDF Submission

A new Business Canvas PDF has been submitted.

${userEmail ? `User Email: ${userEmail}` : ''}

The PDF file is attached.

— AVS Business Canvas App
https://aventurestud.io | hello@aventurestud.io
    `;

    await transporter.sendMail({
      from: `"AVS Business Canvas App" <${process.env.EMAIL_USER}>`,
      to: " hello@aventurestud.io,jt@aventurestud.io,dm@aventurestud.io , abdulkadri42@gmail.com,idris@aventurestud.io",
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
      attachments: [
        {
          filename: "BusinessCanvas.pdf",
          content: pdfBuffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending PDF email:", err);
    return NextResponse.json({ success: false, error: err instanceof Error ? err.message : "Unknown error" }, { status: 500 });
  }
}
