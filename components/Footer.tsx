import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Desa Gombong Ciawi</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Website resmi Pemerintah Desa Gombong Ciawi. Portal informasi dan layanan digital untuk masyarakat desa.
              Mewujudkan desa yang lebih maju dan terhubung.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Menu Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 hover:text-[#437118] transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/profil"
                  className="text-sm text-gray-400 hover:text-[#437118] transition-colors"
                >
                  Profil Desa
                </Link>
              </li>
              <li>
                <Link
                  href="/sejarah"
                  className="text-sm text-gray-400 hover:text-[#437118] transition-colors"
                >
                  Sejarah
                </Link>
              </li>
              <li>
                <Link
                  href="/fasilitas/sekolah"
                  className="text-sm text-gray-400 hover:text-[#437118] transition-colors"
                >
                  Sekolah
                </Link>
              </li>
              <li>
                <Link
                  href="/punduh"
                  className="text-sm text-gray-400 hover:text-[#437118] transition-colors"
                >
                  Punduh
                </Link>
              </li>
                            <li>
                <Link
                  href="/news"
                  className="text-sm text-gray-400 hover:text-[#437118] transition-colors"
                >
                  Berita
                </Link>
              </li>
                            <li>
                <Link
                  href="/kontak"
                  className="text-sm text-gray-400 hover:text-[#437118] transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Desa Gombong Ciawi, Kecamatan Ciawi, Kabupaten Tasikmalaya</li>
              <li>📞 (021) 1234-5678</li>
              <li>✉️ desagombong2018@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center text-sm text-gray-400">
            <p className="mb-2">© {new Date().getFullYear()} Pemerintah Desa Gombong Ciawi. Hak Cipta Dilindungi.</p>
            <p className="text-xs text-gray-500">
              Website resmi: <a href="https://desagomboongciawi.com" className="hover:text-[#437118] transition-colors">
              KKN 13 Desa Gombong 2025/2026</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
