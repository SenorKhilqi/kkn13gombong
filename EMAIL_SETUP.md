# Panduan Setup Email untuk Form Kontak

## Instalasi Package
Pertama, install nodemailer:
```bash
npm install nodemailer
npm install -D @types/nodemailer
```

## Setup Gmail App Password

Untuk menggunakan Gmail sebagai email sender, Anda perlu membuat **App Password**:

1. Buka akun Google Anda: https://myaccount.google.com/
2. Pilih **Security** di menu sebelah kiri
3. Aktifkan **2-Step Verification** jika belum aktif
4. Setelah 2-Step Verification aktif, kembali ke halaman Security
5. Cari bagian **App passwords** (di bawah 2-Step Verification)
6. Klik **App passwords**
7. Pilih **Mail** sebagai app dan **Other** sebagai device
8. Masukkan nama: "Website Desa Gombong"
9. Klik **Generate**
10. Copy password 16 karakter yang muncul (format: xxxx xxxx xxxx xxxx)

## Konfigurasi Environment Variables

Buat file `.env.local` di root folder project Anda dengan isi:

```env
# Email Configuration
EMAIL_USER=senordkilki@gmail.com
EMAIL_PASSWORD=your-16-character-app-password-here

# Next.js Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Ganti `your-16-character-app-password-here` dengan App Password yang sudah Anda copy (tanpa spasi).

## Testing

1. Jalankan development server:
```bash
npm run dev
```

2. Buka halaman kontak: http://localhost:3000/kontak

3. Isi form dan klik "Kirim Pesan"

4. Pesan akan dikirim ke email: senordkilki@gmail.com

## Production Setup

Untuk deployment production, tambahkan environment variables berikut di hosting platform Anda (Vercel, Netlify, dll):

```
EMAIL_USER=senordkilki@gmail.com
EMAIL_PASSWORD=your-app-password
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

## Troubleshooting

### Error: "Invalid login"
- Pastikan 2-Step Verification sudah aktif
- Pastikan menggunakan App Password, bukan password Gmail biasa
- Pastikan tidak ada spasi di App Password

### Error: "Connection timeout"
- Periksa koneksi internet
- Pastikan Gmail tidak memblokir akses

### Email tidak masuk
- Periksa folder Spam di Gmail
- Pastikan EMAIL_USER sudah benar

## Alternative: Menggunakan Resend

Jika ingin menggunakan service email yang lebih modern (Resend), ikuti panduan ini:

1. Install Resend:
```bash
npm install resend
```

2. Daftar di https://resend.com dan dapatkan API Key

3. Ganti kode di `app/api/send-email/route.ts` dengan Resend implementation

Untuk sekarang, implementasi menggunakan Nodemailer + Gmail sudah cukup dan gratis.
