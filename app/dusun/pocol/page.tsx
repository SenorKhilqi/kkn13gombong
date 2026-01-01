export default function DusunPocolPage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full overflow-hidden bg-gray-100 mb-6">
            <img src="/images/aparatur/mastutinuraeni.png" alt="Mastuti Nuraeni" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dusun Pocol</h1>
          <p className="text-lg text-gray-600">Desa Gombong, Kecamatan Ciawi</p>
          <div className="w-20 h-1 bg-[#437118] mx-auto mt-4"></div>
        </div>

        {/* Kepala Dusun */}
        <div className="bg-gradient-to-br from-[#437118] to-blue-600 text-white p-8 rounded-xl shadow-lg mb-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-white flex-shrink-0">
              <img src="/images/aparatur/mastutinuraeni.png" alt="Mastuti Nuraeni" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-sm font-medium opacity-90 mb-1">Kepala Dusun</h2>
              <p className="text-2xl font-bold">Mastuti Nuraeni</p>
            </div>
          </div>
        </div>

        {/* Deskripsi */}
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tentang Dusun Pocol</h2>
          <p className="text-gray-700 leading-relaxed">
            Dusun Pocol merupakan salah satu dusun di Desa Gombong, Kecamatan Ciawi, Kabupaten Tasikmalaya. 
            Dusun ini dikenal dengan lingkungan yang asri dan masyarakat yang solid dalam kebersamaan.
          </p>
        </div>

        {/* Informasi Tambahan */}
        <div className="bg-white border-2 border-gray-200 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Informasi Wilayah</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-semibold text-gray-900">Lokasi</h3>
                <p className="text-gray-600">Desa Gombong, Kecamatan Ciawi, Kabupaten Tasikmalaya, Jawa Barat</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">👥</span>
              <div>
                <h3 className="font-semibold text-gray-900">Pemerintahan</h3>
                <p className="text-gray-600">Bagian dari Pemerintahan Desa Gombong di bawah Kepala Dusun Mastuti Nuraeni</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <a
            href="/profil"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#437118] text-white font-medium rounded-lg hover:bg-[#375e14] transition-colors"
          >
            ← Kembali ke Profil Desa
          </a>
        </div>
      </div>
    </div>
  );
}
