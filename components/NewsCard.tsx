import { News } from '@/types';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { id } from 'date-fns/locale';

interface NewsCardProps {
  news: News;
}

export default function NewsCard({ news }: NewsCardProps) {
  const timeAgo = formatDistanceToNow(new Date(news.created_at), {
    addSuffix: true,
    locale: id,
  });

  return (
    <Link
      href={`/news/${news.slug}`}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      {/* Image */}
      <div className="aspect-video bg-gradient-to-br from-[#437118]/10 to-blue-100 overflow-hidden">
        {news.image_url ? (
          <img
            src={news.image_url}
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#437118] transition-colors line-clamp-2 mb-2">
          {news.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {news.content.substring(0, 150)}...
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{timeAgo}</span>
          {news.author && (
            <span className="text-gray-400">oleh {news.author.username}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
