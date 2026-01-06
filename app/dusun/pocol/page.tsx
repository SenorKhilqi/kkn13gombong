export default function DusunPocolPage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-6 animate-fade-in">
            <img 
              src="/images/logo/logo.png" 
              alt="Logo Desa Gombong" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full overflow-hidden bg-gray-100 mb-6">
            <img src="/images/aparatur/mastutinuraeni.png" alt="Mastuti Nuraeni" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dusun Pocol</h1>
          <p className="text-lg text-gray-600">Desa Gombong, Kecamatan Ciawi</p>
          <div className="w-20 h-1 bg-[#437118] mx-auto mt-4"></div>
        </div>

        {/* Deskripsi */}
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tentang Dusun Pocol</h2>
          <p className="text-gray-700 leading-relaxed">
            Dusun Pocol merupakan salah satu dusun di Desa Gombong, Kecamatan Ciawi, Kabupaten Tasikmalaya. 
            Dusun ini dikenal dengan lingkungan yang asri dan masyarakat yang solid dalam kebersamaan.
          </p>
        </div>

        {/* Statistik Penduduk */}
        <div className="bg-white border-2 border-[#437118] p-8 rounded-xl mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Data Kependudukan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">👨</span>
                <h3 className="text-lg font-semibold text-gray-900">Jumlah Laki-laki</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600">340 jiwa</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">👩</span>
                <h3 className="text-lg font-semibold text-gray-900">Jumlah Perempuan</h3>
              </div>
              <p className="text-3xl font-bold text-pink-600">338 jiwa</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">👥</span>
                <h3 className="text-lg font-semibold text-gray-900">Total Penduduk</h3>
              </div>
              <p className="text-3xl font-bold text-green-600">678 jiwa</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🏠</span>
                <h3 className="text-lg font-semibold text-gray-900">Total Kepala Keluarga</h3>
              </div>
              <p className="text-3xl font-bold text-orange-600">231 KK</p>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🗺️</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cakupan Wilayah</h3>
                <p className="text-gray-700">RW 001 (RT 001-003) dan RW 002 (RT 001-002)</p>
              </div>
            </div>
          </div>
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
