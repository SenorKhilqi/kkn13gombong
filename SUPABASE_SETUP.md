# Setup Supabase Database

## 1. Buat Project di Supabase
- Buka https://supabase.com
- Buat project baru
- Salin URL dan Anon Key ke file `.env.local`

## 2. Buat Tabel di SQL Editor

### Tabel Users
```sql
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index untuk performa
CREATE INDEX idx_users_username ON users(username);
```

### Tabel News
```sql
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

-- Index untuk performa
CREATE INDEX idx_news_slug ON news(slug);
CREATE INDEX idx_news_created_at ON news(created_at DESC);
CREATE INDEX idx_news_author_id ON news(author_id);
```

## 3. Setup Storage untuk Upload Gambar

### Buat Storage Bucket
1. Buka Supabase Dashboard → Storage
2. Klik "Create a new bucket"
3. Nama bucket: `news-images`
4. Public bucket: **YES** (centang)
5. Klik "Create bucket"

### Set Storage Policies (Optional)
Jika ingin membatasi akses upload, tambahkan policy:

```sql
-- Allow public read access
CREATE POLICY "Public read access" ON storage.objects
  FOR SELECT USING (bucket_id = 'news-images');

-- Allow authenticated upload (optional, karena kita handle di server)
CREATE POLICY "Authenticated upload" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'news-images');

-- Allow delete for uploaded files
CREATE POLICY "Allow delete" ON storage.objects
  FOR DELETE USING (bucket_id = 'news-images');
```

**Note:** Karena upload dilakukan dari server dengan service role, policy bisa dinonaktifkan.

## 4. Buat Admin User Default (Optional)
Jalankan setelah aplikasi berjalan, atau insert manual dengan password hash dari bcrypt.

## 5. Row Level Security (RLS)
Untuk keamanan tambahan, aktifkan RLS:

```sql
-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;

-- Policy untuk news (public read, authenticated write)
CREATE POLICY "News are viewable by everyone" ON news
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert news" ON news
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated users can update news" ON news
  FOR UPDATE USING (true);

CREATE POLICY "Authenticated users can delete news" ON news
  FOR DELETE USING (true);
```



