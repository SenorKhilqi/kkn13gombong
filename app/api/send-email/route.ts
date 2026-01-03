import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validasi
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    // Konfigurasi transporter untuk Gmail
    // Untuk Gmail, Anda perlu mengaktifkan "App Password" di Google Account
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'khilqialfadhillah@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'sywm lbgp wgyl txho', // App Password dari Gmail
      },
    });

    // HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #437118; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #437118; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Pesan Baru dari Website Desa Gombong</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Dari:</span> ${name}
              </div>
              <div class="field">
                <span class="label">Email:</span> ${email}
              </div>
              <div class="field">
                <span class="label">Subjek:</span> ${subject}
              </div>
              <div class="field">
                <span class="label">Pesan:</span>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            <div class="footer">
              <p>Email ini dikirim melalui form kontak website Desa Gombong.</p>
              <p>Waktu: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Kirim email
    await transporter.sendMail({
      from: `"Website Desa Gombong" <${process.env.EMAIL_USER || 'khilqialafadhillah@gmail.com'}>`,
      to: 'khilqialfadhillah@gmail.com',
      replyTo: email,
      subject: `[Kontak Website] ${subject}`,
      html: htmlContent,
      text: `Dari: ${name}\nEmail: ${email}\nSubjek: ${subject}\n\nPesan:\n${message}`,
    });

    return NextResponse.json(
      { message: 'Email berhasil dikirim' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Gagal mengirim email. Silakan coba lagi nanti.' },
      { status: 500 }
    );
  }
}
