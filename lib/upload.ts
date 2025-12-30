'use server';

import { supabase } from '@/lib/supabase';
import { getAuthUser } from '@/lib/auth';

const MAX_FILE_SIZE = 1024 * 1024; // 1 MB
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const BUCKET_NAME = 'news-images';

export interface UploadResult {
  success: boolean;
  message: string;
  url?: string;
}

export async function uploadImage(formData: FormData): Promise<UploadResult> {
  try {
    // Check authentication
    const user = await getAuthUser();
    if (!user || user.role !== 'admin') {
      return { success: false, message: 'Unauthorized' };
    }

    const file = formData.get('image') as File;
    
    if (!file) {
      return { success: false, message: 'Tidak ada file yang dipilih' };
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return {
        success: false,
        message: 'Ukuran file terlalu besar. Maksimal 1 MB',
      };
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return {
        success: false,
        message: 'Format file tidak didukung. Gunakan JPG, PNG, atau WebP',
      };
    }

    // Generate unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${fileName}`;

    // Convert File to ArrayBuffer then to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, buffer, {
        contentType: file.type,
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      console.error('Upload error:', error);
      return {
        success: false,
        message: 'Gagal mengupload gambar',
      };
    }

    // Get public URL
    const { data: publicUrlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath);

    return {
      success: true,
      message: 'Gambar berhasil diupload',
      url: publicUrlData.publicUrl,
    };
  } catch (error) {
    console.error('Upload error:', error);
    return {
      success: false,
      message: 'Terjadi kesalahan saat mengupload',
    };
  }
}

export async function deleteImage(imageUrl: string): Promise<boolean> {
  try {
    const user = await getAuthUser();
    if (!user || user.role !== 'admin') {
      return false;
    }

    // Extract filename from URL
    const urlParts = imageUrl.split('/');
    const fileName = urlParts[urlParts.length - 1];

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([fileName]);

    if (error) {
      console.error('Delete error:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Delete error:', error);
    return false;
  }
}
