import { supabase } from '@/lib/supabase';
import { News } from '@/types';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const { data: newsData } = await supabase
    .from('news')
    .select(`
      *,
      author:users(username)
    `)
    .eq('slug', slug)
    .single();

  if (!newsData) {
    notFound();
  }

  const news = newsData as News;

  const formattedDate = format(new Date(news.created_at), 'dd MMMM yyyy', {
    locale: id,
  });

  return (
    <div className="py-16 bg-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8 group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Kembali ke Berita
        </Link>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {news.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime={news.created_at}>{formattedDate}</time>
            {news.author && (
              <>
                <span>•</span>
                <span>oleh {news.author.username}</span>
              </>
            )}
          </div>
        </header>

        {/* Image */}
        {news.image_url && (
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src={news.image_url}
              alt={news.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {news.content}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">Bagikan berita ini:</p>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
              Facebook
            </button>
            <button className="px-4 py-2 bg-sky-500 text-white text-sm rounded-lg hover:bg-sky-600 transition-colors">
              Twitter
            </button>
            <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
              WhatsApp
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
