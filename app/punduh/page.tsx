import Link from 'next/link';
import Image from 'next/image';

const ketuaWilayah = [
  {
    name: "Dody Nurwadi",
    dusun: "Gombong",
    link: "/dusun/gombong",
    color: "from-blue-600 to-blue-800",
    image: "/images/aparatur/dodynurwadi.png"
  },
  {
    name: "Tita Sholihatul Muniroh Hilmi, S.E",
    dusun: "Sukamandi",
    link: "/dusun/sukamandi",
    color: "from-red-600 to-red-800",
    image: "/images/aparatur/titasholihatulmunirohhilmi.png"
  },
  {
    name: "Ruhimat",
    dusun: "Bugel",
    link: "/dusun/bugel",
    color: "from-[#437118] to-[#375e14]",
    image: "/images/aparatur/ruhimat.png"
  },
  {
    name: "Enjang Hadi Hidayah",
    dusun: "Karamasantana",
    link: "/dusun/karamasantana",
    color: "from-purple-600 to-purple-800",
    image: "/images/aparatur/enjanghadihidayah.png"
  },
  {
    name: "Mastuti Nuraeni",
    dusun: "Pocol",
    link: "/dusun/pocol",
    color: "from-teal-600 to-teal-800",
    image: "/images/aparatur/mastutinuraeni.png"
  },
  {
    name: "Amat Bongsor",
    dusun: "Pananyung",
    link: "/dusun/pananyung",
    color: "from-orange-600 to-orange-800",
    image: "/images/aparatur/amatbongsor.png"
  },
];

export default function PunduhPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-6">
            <img 
              src="/images/logo/logo.png" 
              alt="Logo Desa Gombong" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ketua Wilayah Dusun</h1>
          <div className="w-20 h-1 bg-[#437118] mx-auto mb-4"></div>
          <p className="text-gray-600">
            Daftar Ketua Wilayah dari Setiap Dusun di Desa Gombong
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 p-2">
                <img 
                  src="/images/logo/logo.png" 
                  alt="Logo Desa" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  Tentang Ketua Wilayah
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Setiap dusun di Desa Gombong dipimpin oleh seorang <strong>Ketua Wilayah</strong> yang 
                  bertanggung jawab atas koordinasi kegiatan dan pembangunan di wilayahnya masing-masing.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Klik pada kartu ketua wilayah untuk melihat informasi lengkap mengenai dusun tersebut, 
                  termasuk profil, fasilitas, dan kegiatan yang ada di setiap wilayah.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* List Ketua Wilayah */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-[#437118]">🏘️</span> Daftar Ketua Wilayah
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ketuaWilayah.map((ketua, index) => (
              <Link 
                key={index}
                href={ketua.link}
                className="group"
              >
                <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-xl transition-all h-full">
                  <div className={`bg-gradient-to-br ${ketua.color} p-6 text-white`}>
                    <div className="w-20 h-20 bg-white rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <img 
                        src={ketua.image} 
                        alt={ketua.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">{ketua.name}</h3>
                      <p className="text-sm opacity-90">Ketua Wilayah</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <span className="text-gray-400">📍</span>
                        <p className="text-sm text-gray-600">Dusun {ketua.dusun}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-gray-400">👥</span>
                        <p className="text-sm text-gray-600">Kepala Kewilayahan</p>
                      </div>
                      <div className="mt-4 text-center">
                        <span className="text-[#437118] text-sm font-medium group-hover:underline">
                          Klik untuk lihat detail dusun →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Peran & Tanggung Jawab */}
        <section className="bg-gradient-to-br from-[#437118]/10 to-green-50 p-8 rounded-xl border border-[#437118]/30">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-[#437118]">✨</span> Peran & Tanggung Jawab Ketua Wilayah
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Koordinasi Wilayah</h3>
                  <p className="text-gray-700 text-sm">Mengkoordinasikan seluruh kegiatan dan program di wilayah dusun masing-masing.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🤝</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Penghubung Masyarakat</h3>
                  <p className="text-gray-700 text-sm">Menjadi jembatan komunikasi antara warga dengan pemerintah desa.</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏗️</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Pembangunan Wilayah</h3>
                  <p className="text-gray-700 text-sm">Membantu merencanakan dan melaksanakan pembangunan di wilayahnya.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Administrasi Wilayah</h3>
                  <p className="text-gray-700 text-sm">Mengelola administrasi dan data penduduk di wilayah dusun.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link 
            href="/profil" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#437118] text-white font-medium rounded-lg hover:bg-[#375e14] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Profil Desa
          </Link>
        </div>
      </div>
    </div>
  );
}
