'use server';

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  // Validasi
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: 'Semua field harus diisi',
    };
  }

  // Validasi email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Format email tidak valid',
    };
  }

  try {
    // Kirim email menggunakan fetch ke API route
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || 'Gagal mengirim pesan',
      };
    }

    return {
      success: true,
      message: 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.',
    };
  }
}
