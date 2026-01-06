export default function SekolahPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-6 animate-fade-in">
            <img 
              src="/images/logo/logo.png" 
              alt="Logo Desa Gombong" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fasilitas Pendidikan</h1>
          <div className="w-20 h-1 bg-[#437118] mx-auto mb-4"></div>
          <p className="text-gray-600">
            Sekolah Dasar dan Lembaga Pendidikan di Desa Gombong
          </p>
        </div>

        {/* Sekolah Dasar */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-[#437118]">🏫</span> Sekolah Dasar (SD)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-[#437118]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🏫</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">SDN 1 Gombong</h3>
                  <p className="text-gray-600 mb-3">Sekolah Dasar Negeri 1 Gombong</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📍 Dusun Gombong</p>
                    <p>👨‍🎓 Status: Negeri</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🏫</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">SDN 2 Gombong</h3>
                  <p className="text-gray-600 mb-3">Sekolah Dasar Negeri 2 Gombong</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📍 Dusun Bugel</p>
                    <p>👨‍🎓 Status: Negeri</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🏫</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">SDN 3 Gombong</h3>
                  <p className="text-gray-600 mb-3">Sekolah Dasar Negeri 3 Gombong</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📍 Dusun Pocol</p>
                    <p>👨‍🎓 Status: Negeri</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🏫</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">SDN Karamasantana</h3>
                  <p className="text-gray-600 mb-3">Sekolah Dasar Negeri Karamasantana</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📍 Dusun Karamasantana</p>
                    <p>Tidak dinamai SDN Gombong karena SDN Karamasantana dibangun di atas tanah wakaf dari warga bukan tanah dari pemerintah.</p>
                    <p>👨‍🎓 Status: Negeri</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Madrasah */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-[#437118]">📚</span> Madrasah
          </h2>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#437118]/20 rounded-full mb-4">
                <span className="text-4xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">9 Madrasah</h3>
              <p className="text-gray-600">
                Lembaga pendidikan Islam yang tersebar di berbagai dusun di Desa Gombong
              </p>
            </div>
          </div>
        </section>

        {/* Mushola */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-[#437118]">🕌</span> Mushola
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
                <span className="text-4xl">🕌</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">16 Mushola</h3>
              <p className="text-gray-600">
                Tempat ibadah dan pembelajaran keagamaan yang tersebar di seluruh wilayah desa
              </p>
            </div>
          </div>
        </section>

        {/* Pondok Pesantren */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-[#437118]">🎓</span> Pondok Pesantren
          </h2>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-4">
                <span className="text-4xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">3 Pondok Pesantren</h3>
              <p className="text-gray-600">
                Lembaga pendidikan Qurani yang mencetak generasi berakhlak mulia dan menguasai ilmu agama
              </p>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <a 
            href="/profil" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#437118] text-white font-medium rounded-lg hover:bg-[#375e14] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Profil Desa
          </a>
        </div>
      </div>
    </div>
  );
}
