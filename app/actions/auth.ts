'use server';

import { supabase } from '@/lib/supabase';
import { hashPassword, verifyPassword } from '@/lib/password';
import { setAuthCookie, removeAuthCookie } from '@/lib/auth';
import { AuthResponse } from '@/types';
import { redirect } from 'next/navigation';

export async function registerAction(
  username: string,
  password: string
): Promise<AuthResponse> {
  try {
    // Validasi input
    if (!username || username.length < 3) {
      return {
        success: false,
        message: 'Username harus minimal 3 karakter',
      };
    }

    if (!password || password.length < 6) {
      return {
        success: false,
        message: 'Password harus minimal 6 karakter',
      };
    }

    // Cek apakah username sudah ada
    const { data: existingUser } = await supabase
      .from('users')
      .select('id')
      .eq('username', username)
      .single();

    if (existingUser) {
      return {
        success: false,
        message: 'Username sudah digunakan',
      };
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Insert user baru
    const { data: newUser, error } = await supabase
      .from('users')
      .insert({
        username,
        password_hash: passwordHash,
        role: 'user',
      })
      .select('id, username, role, created_at')
      .single();

    if (error || !newUser) {
      return {
        success: false,
        message: 'Gagal membuat akun',
      };
    }

    // Set cookie
    await setAuthCookie(newUser);

    return {
      success: true,
      message: 'Registrasi berhasil',
      user: newUser,
    };
  } catch (error) {
    console.error('Register error:', error);
    return {
      success: false,
      message: 'Terjadi kesalahan pada server',
    };
  }
}

export async function loginAction(
  username: string,
  password: string
): Promise<AuthResponse> {
  try {
    // Validasi input
    if (!username || !password) {
      return {
        success: false,
        message: 'Username dan password harus diisi',
      };
    }

    // Cari user berdasarkan username
    const { data: user, error } = await supabase
      .from('users')
      .select('id, username, password_hash, role, created_at')
      .eq('username', username)
      .single();

    if (error || !user) {
      return {
        success: false,
        message: 'Username atau password salah',
      };
    }

    // Verifikasi password
    const isValidPassword = await verifyPassword(password, user.password_hash);

    if (!isValidPassword) {
      return {
        success: false,
        message: 'Username atau password salah',
      };
    }

    // Set cookie
    const userWithoutHash = {
      id: user.id,
      username: user.username,
      role: user.role,
      created_at: user.created_at,
    };

    await setAuthCookie(userWithoutHash);

    return {
      success: true,
      message: 'Login berhasil',
      user: userWithoutHash,
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      message: 'Terjadi kesalahan pada server',
    };
  }
}

export async function logoutAction() {
  await removeAuthCookie();
  redirect('/');
}
