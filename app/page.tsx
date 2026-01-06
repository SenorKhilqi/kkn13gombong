import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import NewsCard from '@/components/NewsCard';
import { News } from '@/types';

export default async function Home() {
  // Fetch latest news
  const { data: latestNews } = await supabase
    .from('news')
    .select(`
      *,
      author:users(username)
    `)
    .order('created_at', { ascending: false })
    .limit(3);

  const news = (latestNews || []) as News[];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#437118]/10 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8 animate-fade-in">
              <img 
                src="/images/logo/logo.png" 
                alt="Logo Desa Gombong" 
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Selamat Datang di
              <span className="block text-[#437118] mt-2">Desa Gombong</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Portal informasi dan layanan digital untuk masyarakat desa.
              Mewujudkan desa yang lebih maju dan terhubung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/profil"
                className="px-8 py-3 bg-[#437118] text-white rounded-lg font-medium hover:bg-[#375e14] transition-colors"
              >
                Profil Desa
              </Link>
              <Link
                href="/news"
                className="px-8 py-3 bg-white text-[#437118] border-2 border-[#437118] rounded-lg font-medium hover:bg-[#437118]/10 transition-colors"
              >
                Berita Terkini
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Berita Terkini</h2>
            <Link
              href="/news"
              className="text-[#437118] hover:text-[#375e14] font-medium flex items-center gap-1"
            >
              Lihat Semua
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item) => (
                <NewsCard key={item.id} news={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-500">Belum ada berita tersedia</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#437118]/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#437118]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Profil Desa
              </h3>
              <p className="text-gray-600">
                Kenali lebih dekat tentang sejarah, visi, misi, dan struktur
                pemerintahan desa kami.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Berita Desa
              </h3>
              <p className="text-gray-600">
                Dapatkan informasi terkini tentang kegiatan, program, dan
                pengumuman penting desa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Hubungi Kami
              </h3>
              <p className="text-gray-600">
                Ada pertanyaan atau saran? Hubungi kami melalui berbagai saluran
                komunikasi yang tersedia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
