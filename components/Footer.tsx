import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Desa Digital</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Portal informasi dan layanan digital untuk masyarakat desa.
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
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/profil"
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  Profil Desa
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  Berita
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors"
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
              <li>📍 Jl. Gombong, Desa Gombong, Ciawi, Kab. Tasikmalaya</li>
              <li>📞 (021) 1234-5678</li>
              <li>✉️ desagombong2018@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Desa Digital. All rights reserved. BY Khilqi alfa
        </div>
      </div>
    </footer>
  );
}
