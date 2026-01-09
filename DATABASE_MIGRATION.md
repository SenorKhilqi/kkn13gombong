# Database Migration - Menambahkan Kolom published_date

## Perubahan Database

Untuk mendukung fitur tanggal publikasi berita, Anda perlu menambahkan kolom `published_date` ke tabel `news` di Supabase.

## SQL Migration

Jalankan query SQL berikut di Supabase SQL Editor:

```sql
-- Menambahkan kolom published_date ke tabel news
ALTER TABLE news 
ADD COLUMN published_date DATE;

-- (Opsional) Set nilai default untuk data yang sudah ada
UPDATE news 
SET published_date = DATE(created_at) 
WHERE published_date IS NULL;
```

## Langkah-langkah di Supabase Dashboard

1. Buka Supabase Dashboard Anda
2. Pilih project Anda
3. Klik menu **SQL Editor** di sidebar
4. Klik **New query**
5. Copy dan paste SQL query di atas
6. Klik **Run** untuk mengeksekusi query
7. Verifikasi perubahan dengan melihat struktur tabel di menu **Table Editor**

## Verifikasi

Setelah menjalankan migration, pastikan:
- Kolom `published_date` muncul di tabel `news`
- Tipe data kolom adalah `DATE`
- Data berita yang sudah ada memiliki nilai `published_date` (dari langkah opsional di atas)

## Rollback (jika diperlukan)

Jika perlu membatalkan perubahan:

```sql
ALTER TABLE news 
DROP COLUMN published_date;
```
