'use client';

import { News } from '@/types';
import { useState } from 'react';
import { deleteNews } from '@/app/actions/news';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import Link from 'next/link';

interface NewsTableProps {
  news: News[];
}

export default function NewsTable({ news }: NewsTableProps) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Yakin ingin menghapus berita "${title}"?`)) {
      return;
    }

    setDeletingId(id);
    const result = await deleteNews(id);
    setDeletingId(null);

    if (result.success) {
      router.refresh();
    } else {
      alert(result.message);
    }
  };

  if (news.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        Belum ada berita. Klik "Tambah Berita" untuk membuat berita pertama.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
              Judul
            </th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
              Penulis
            </th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
              Tanggal
            </th>
            <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {news.map((item) => (
            <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 px-4">
                <div className="font-medium text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-500">{item.slug}</div>
              </td>
              <td className="py-3 px-4 text-gray-600">
                {item.author?.username || '-'}
              </td>
              <td className="py-3 px-4 text-gray-600">
                {format(new Date(item.created_at), 'dd MMM yyyy', { locale: id })}
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center justify-end gap-2">
                  <Link
                    href={`/news/${item.slug}`}
                    target="_blank"
                    className="px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Lihat
                  </Link>
                  <Link
                    href={`/dashboard/admin/news/edit/${item.id}`}
                    className="px-3 py-1.5 text-sm text-[#437118] hover:bg-[#437118]/10 rounded-lg transition-colors"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id, item.title)}
                    disabled={deletingId === item.id}
                    className="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                  >
                    {deletingId === item.id ? 'Menghapus...' : 'Hapus'}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
