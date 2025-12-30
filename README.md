# Website Desa - Next.js Application

Portal informasi dan layanan digital untuk masyarakat desa. Aplikasi web modern yang dibangun dengan Next.js, TypeScript, Tailwind CSS, dan Supabase.

## 🚀 Fitur Utama

### Halaman Publik
- **Beranda**: Hero section dengan berita terkini
- **Profil Desa**: Informasi lengkap tentang desa (sejarah, visi misi, struktur)
- **Berita**: List dan detail berita desa
- **Kontak**: Informasi kontak dan form pesan

### Autentikasi
- Register dan Login manual (username + password)
- Password hashing dengan bcrypt
- Session management menggunakan JWT & HTTP-only cookies
- Role-based access (user & admin)

### Dashboard Admin
- Statistik website (total berita, users)
- CRUD Berita Desa:
  - Tambah berita baru
  - Edit berita
  - Hapus berita
  - Auto-generate slug dari judul

### UI/UX Modern
- Desain minimalis dan clean
- Responsive design (mobile-friendly)
- Warna netral dengan accent green/blue
- Smooth transitions dan hover effects
- Sticky navbar
- Card-based layout

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: JWT + bcrypt
- **Date Formatting**: date-fns

## 🛠️ Setup & Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Supabase

#### Buat Project di Supabase
1. Buka [https://supabase.com](https://supabase.com)
2. Buat project baru
3. Salin `URL` dan `anon key`

#### Setup Database
Jalankan SQL berikut di Supabase SQL Editor:

```sql
-- Tabel Users
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_users_username ON users(username);

-- Tabel News
CREATE TABLE news (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  author_id UUID REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX idx_news_slug ON news(slug);
CREATE INDEX idx_news_created_at ON news(created_at DESC);
CREATE INDEX idx_news_author_id ON news(author_id);
```

### 3. Environment Variables

Copy `.env.example` ke `.env.local` dan isi dengan credentials Supabase Anda:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Struktur Folder

```
my-app/
├── app/
│   ├── actions/          # Server Actions
│   │   ├── auth.ts       # Login, Register, Logout
│   │   └── news.ts       # CRUD Berita
│   ├── dashboard/
│   │   └── admin/        # Admin Dashboard
│   ├── login/            # Halaman Login
│   ├── register/         # Halaman Register
│   ├── news/             # List & Detail Berita
│   ├── profil/           # Profil Desa
│   ├── kontak/           # Kontak
│   ├── layout.tsx        # Root Layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global Styles
├── components/
│   ├── Navbar.tsx        # Navigation Bar
│   ├── Footer.tsx        # Footer
│   └── NewsCard.tsx      # Card Berita
├── lib/
│   ├── supabase.ts       # Supabase Client
│   ├── auth.ts           # JWT & Cookie Management
│   └── password.ts       # Password Hashing
├── types/
│   ├── database.ts       # Database Types
│   └── index.ts          # Common Types
├── middleware.ts         # Route Protection
└── .env.local            # Environment Variables
```

## 🔐 Membuat Admin User

Setelah registrasi user pertama, update role menjadi admin di Supabase:

```sql
UPDATE users
SET role = 'admin'
WHERE username = 'your_username';
```

## 🎨 Routing

### Public Routes
- `/` - Home
- `/profil` - Profil Desa
- `/news` - List Berita
- `/news/[slug]` - Detail Berita
- `/kontak` - Kontak
- `/login` - Login
- `/register` - Register

### Protected Routes (Admin Only)
- `/dashboard/admin` - Dashboard Admin
- `/dashboard/admin/news/create` - Tambah Berita
- `/dashboard/admin/news/edit/[id]` - Edit Berita

## 🔒 Security Features

- Password hashing dengan bcrypt (10 rounds)
- JWT token dengan expiry 7 hari
- HTTP-only cookies
- Server-side authentication check
- Middleware untuk route protection
- Input validation

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel --prod
```

Jangan lupa set environment variables di Vercel Dashboard.

---

Dibuat dengan ❤️ menggunakan Next.js dan Supabase

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
