'use server';

import { supabase } from '@/lib/supabase';
import { getAuthUser } from '@/lib/auth';
import { NewsFormData } from '@/types';
import { revalidatePath } from 'next/cache';
import { uploadImage, deleteImage } from '@/lib/upload';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function createNewsWithImage(formData: FormData) {
  try {
    const user = await getAuthUser();

    if (!user || user.role !== 'admin') {
      return { success: false, message: 'Unauthorized' };
    }

    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const publishedDate = formData.get('published_date') as string;
    const imageFile = formData.get('image') as File | null;
    const imageUrl = formData.get('image_url') as string;

    if (!title || !content) {
      return { success: false, message: 'Title dan content harus diisi' };
    }

    const slug = slugify(title);

    // Check if slug exists
    const { data: existing } = await supabase
      .from('news')
      .select('id')
      .eq('slug', slug)
      .single();

    if (existing) {
      return { success: false, message: 'Judul sudah digunakan, gunakan judul lain' };
    }

    let finalImageUrl = imageUrl || null;

    // Upload image if file is provided
    if (imageFile && imageFile.size > 0) {
      const uploadFormData = new FormData();
      uploadFormData.append('image', imageFile);
      
      const uploadResult = await uploadImage(uploadFormData);
      
      if (!uploadResult.success) {
        return { success: false, message: uploadResult.message };
      }
      
      finalImageUrl = uploadResult.url || null;
    }

    const { error } = await supabase.from('news').insert({
      title,
      slug,
      content,
      image_url: finalImageUrl,
      published_date: publishedDate || null,
      author_id: user.userId,
    });

    if (error) {
      console.error('Create news error:', error);
      return { success: false, message: 'Gagal membuat berita' };
    }

    revalidatePath('/news');
    revalidatePath('/');
    revalidatePath('/dashboard/admin');

    return { success: true, message: 'Berita berhasil dibuat' };
  } catch (error) {
    console.error('Create news error:', error);
    return { success: false, message: 'Terjadi kesalahan' };
  }
}

export async function updateNewsWithImage(id: string, formData: FormData) {
  try {
    const user = await getAuthUser();

    if (!user || user.role !== 'admin') {
      return { success: false, message: 'Unauthorized' };
    }

    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const publishedDate = formData.get('published_date') as string;
    const imageFile = formData.get('image') as File | null;
    const imageUrl = formData.get('image_url') as string;
    const oldImageUrl = formData.get('old_image_url') as string;

    if (!title || !content) {
      return { success: false, message: 'Title dan content harus diisi' };
    }

    const slug = slugify(title);

    // Check if slug exists (exclude current news)
    const { data: existing } = await supabase
      .from('news')
      .select('id')
      .eq('slug', slug)
      .neq('id', id)
      .single();

    if (existing) {
      return { success: false, message: 'Judul sudah digunakan, gunakan judul lain' };
    }

    let finalImageUrl = imageUrl || null;

    // Upload new image if file is provided
    if (imageFile && imageFile.size > 0) {
      const uploadFormData = new FormData();
      uploadFormData.append('image', imageFile);
      
      const uploadResult = await uploadImage(uploadFormData);
      
      if (!uploadResult.success) {
        return { success: false, message: uploadResult.message };
      }
      
      finalImageUrl = uploadResult.url || null;

      // Delete old image if exists and is from our storage
      if (oldImageUrl && oldImageUrl.includes('supabase')) {
        await deleteImage(oldImageUrl);
      }
    }

    const { error } = await supabase
      .from('news')
      .update({
        title,
        slug,
        content,
        image_url: finalImageUrl,
        published_date: publishedDate || null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id);

    if (error) {
      console.error('Update news error:', error);
      return { success: false, message: 'Gagal mengupdate berita' };
    }

    revalidatePath('/news');
    revalidatePath('/');
    revalidatePath('/dashboard/admin');
    revalidatePath(`/news/${slug}`);

    return { success: true, message: 'Berita berhasil diupdate' };
  } catch (error) {
    console.error('Update news error:', error);
    return { success: false, message: 'Terjadi kesalahan' };
  }
}

export async function deleteNews(id: string) {
  try {
    const user = await getAuthUser();

    if (!user || user.role !== 'admin') {
      return { success: false, message: 'Unauthorized' };
    }

    const { error } = await supabase.from('news').delete().eq('id', id);

    if (error) {
      console.error('Delete news error:', error);
      return { success: false, message: 'Gagal menghapus berita' };
    }

    revalidatePath('/news');
    revalidatePath('/');
    revalidatePath('/dashboard/admin');

    return { success: true, message: 'Berita berhasil dihapus' };
  } catch (error) {
    console.error('Delete news error:', error);
    return { success: false, message: 'Terjadi kesalahan' };
  }
}
