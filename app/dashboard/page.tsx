import { redirect } from 'next/navigation';
import { getAuthUser } from '@/lib/auth';

export default async function DashboardPage() {
  const user = await getAuthUser();

  if (!user) {
    redirect('/login');
  }

  if (user.role === 'admin') {
    redirect('/dashboard/admin');
  }

  // Jika user biasa, redirect ke home
  redirect('/');
}
