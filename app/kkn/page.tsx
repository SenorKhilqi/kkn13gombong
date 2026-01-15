export default function KKNPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#437118]/90 to-[#2d5010]/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">KKN 13</h1>
            <p className="text-2xl mb-2">Kuliah Kerja Nyata</p>
            <p className="text-lg mb-4">
              Pemberdayaan Masyarakat di Bidang UMKM<br />
              Desa Gombong, Kecamatan Ciawi, Kabupaten Tasikmalaya
            </p>
            <div className="inline-block bg-white/20 px-6 py-2 rounded-full mb-6">
              <span className="text-lg font-medium">Desember 2025 - Januari 2026</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="#tentang" className="px-8 py-3 bg-white text-[#437118] rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Pelajari Lebih Lanjut
              </a>
              <a href="#program" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                Lihat Program
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Section */}
      <section className="py-16 bg-white" id="tentang">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tentang KKN 13</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Program pengabdian masyarakat yang berfokus pada pemberdayaan UMKM lokal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Pemberdayaan Masyarakat</h3>
              <p className="text-gray-700 text-center">
                Meningkatkan kapasitas dan keterampilan masyarakat dalam mengembangkan usaha mikro, kecil, dan menengah.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Pendampingan Berkelanjutan</h3>
              <p className="text-gray-700 text-center">
                Memberikan pendampingan dan bimbingan teknis kepada pelaku UMKM untuk meningkatkan daya saing usaha.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Kolaborasi Komunitas</h3>
              <p className="text-gray-700 text-center">
                Membangun jejaring dan kerjasama antar pelaku UMKM untuk saling mendukung dan berkembang bersama.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-[#437118] to-[#2d5010] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">20</div>
              <div className="text-lg">Anggota Tim</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-lg">Program Kerja</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">2</div>
              <div className="text-lg">Bulan Pengabdian</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1</div>
              <div className="text-lg">Desa Dampingan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Kerja Section */}
      <section className="py-16 bg-gray-50" id="program">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Kerja</h2>
          </div>

          <div className="space-y-6">
            <article className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#437118] text-white rounded-lg flex items-center justify-center text-2xl font-bold">
                  01
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">SIGOMBONG (Sistem Incinerator & Bak Sampah Gombong Bersih dan Kinclong)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Pembuatan Incinerator dan Bak Sampah berbasis Hebel sebagai bentuk penanggulangan sederhana permasalahan sampah di Desa Gombong
                  </p>
                </div>
              </div>
            </article>

            <article className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#437118] text-white rounded-lg flex items-center justify-center text-2xl font-bold">
                  02
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">SIGOn (Sistem Gombong Online)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Digitalisasi Pembaharuan Website merupakan program kerja yang bertujuan memperbarui dan mengembangkan website desa yang sebelumnya 
                    masih sederhana agar menjadi lebih informatif, menarik, dan mudah diakses. Program ini meliputi perbaikan tampilan, penyusunan ulang struktur informasi, serta penyajian konten berbasis digital guna mendukung transparansi informasi dan pelayanan kepada masyarakat.
                  </p>
                </div>
              </div>
            </article>

            <article className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#437118] text-white rounded-lg flex items-center justify-center text-2xl font-bold">
                  03
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Ruang Bermain Edukatif</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ruang Bermain Edukatif adalah program bimbingan belajar selama liburan dengan konsep belajar sambil bermain. Program ini dilaksanakan oleh mahasiswa FKIP di 6 dusun Desa Gombong dengan materi IPAS, Bahasa, dan Matematika untuk menciptakan suasana belajar yang menyenangkan.
                  </p>
                </div>
              </div>
            </article>

            <article className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#437118] text-white rounded-lg flex items-center justify-center text-2xl font-bold">
                  04
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Program KAREDOK SAPANCI</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Program KAREDOK SAPANCI bertujuan meningkatkan derajat kesehatan masyarakat melalui skrining kesehatan, edukasi, dan pemantauan berkelanjutan. Dalam kegiatan ini, mahasiswa KKN Universitas Siliwangi berperan memberikan edukasi tentang stunting dan Pemberian Makanan Tambahan (PMT) bagi balita guna meningkatkan pengetahuan masyarakat mengenai pencegahan stunting.
                  </p>
                </div>
              </div>
            </article>

            <article className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#437118] text-white rounded-lg flex items-center justify-center text-2xl font-bold">
                  05
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">GERAI SAH</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Program kerja pembuatan Sertifikasi Halal dan NIB bertujuan membantu UMKM memperoleh legalitas usaha dan jaminan kehalalan produk. Melalui program ini, mahasiswa KKN melakukan sosialisasi, pendataan UMKM, serta pendampingan teknis mulai dari persiapan dokumen, pembuatan akun OSS, hingga pendaftaran NIB dan sertifikasi halal secara daring.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Tim Anggota Section */}
      <section className="py-16 bg-white" id="anggota">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Anggota</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berkenalan dengan anggota KKN 13 yang berdedikasi untuk pemberdayaan UMKM Desa Gombong
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Koordes */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/fauzy.jpeg" 
                  alt="Fauzy Pahrurozy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Fauzy Pahrurozy</h3>
                <p className="text-sm text-gray-600 mb-2">Teknik Sipil / Fakultas Teknik</p>
                <span className="inline-block px-3 py-1 bg-[#437118] text-white text-sm font-medium rounded-full">KOORDES</span>
              </div>
            </article>

            {/* Wakordes */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/sabiq.jpg" 
                  alt="Sabiq Fauzuddin" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Sabiq Fauzuddin</h3>
                <p className="text-sm text-gray-600 mb-2">Pendidikan Jasmani / FKIP</p>
                <span className="inline-block px-3 py-1 bg-[#437118] text-white text-sm font-medium rounded-full">WAKORDES</span>
              </div>
            </article>

            {/* Bendahara 1 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/dhanil.jpg" 
                  alt="Dhanil Setiawan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Dhanil Setiawan</h3>
                <p className="text-sm text-gray-600 mb-2">Pendidikan Fisika / FKIP</p>
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">BENDAHARA</span>
              </div>
            </article>

            {/* Bendahara 2 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/rengganis.jpg" 
                  alt="Rengganis Kusumah Dewi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Rengganis Kusumah Dewi</h3>
                <p className="text-sm text-gray-600 mb-2">Pendidikan Biologi / FKIP</p>
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">BENDAHARA</span>
              </div>
            </article>

            {/* Sekretaris 1 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/kaysha.jpg" 
                  alt="Kaysa Hasnah Mumtaaza" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Kaysa Hasnah Mumtaaza</h3>
                <p className="text-sm text-gray-600 mb-2">Ekonomi Syariah / Fakultas Agama Islam</p>
                <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">SEKRETARIS</span>
              </div>
            </article>

            {/* Sekretaris 2 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/rifka.jpg" 
                  alt="Rifka Azkia Fadilah" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Rifka Azkia Fadilah</h3>
                <p className="text-sm text-gray-600 mb-2">Pendidikan Sejarah / FKIP</p>
                <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">SEKRETARIS</span>
              </div>
            </article>

            {/* Humas 1 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/khilqi.jpg" 
                  alt="Muhamad Khilqi Alfadillah" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Muhamad Khilqi Alfadillah</h3>
                <p className="text-sm text-gray-600 mb-2">Informatika / Fakultas Teknik</p>
                <span className="inline-block px-3 py-1 bg-pink-600 text-white text-sm font-medium rounded-full">HUMAS</span>
                <a 
                  href="https://khilqialfa.my.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block mt-3 text-sm text-[#437118] hover:text-[#2d5010] font-medium hover:underline transition-colors"
                >
                  Lihat Selengkapnya →
                </a>
              </div>
            </article>

            {/* Humas 2 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/siti_nurkamila.jpg" 
                  alt="Siti Nurkamila" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Siti Nurkamila</h3>
                <p className="text-sm text-gray-600 mb-2">Pendidikan Indonesia / FKIP</p>
                <span className="inline-block px-3 py-1 bg-pink-600 text-white text-sm font-medium rounded-full">HUMAS</span>
              </div>
            </article>

            {/* Pubdok 1 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/nadwa.jpg" 
                  alt="Nadwa Syauha Naajil Sofwan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Nadwa Syauha Naajil Sofwan</h3>
                <p className="text-sm text-gray-600 mb-2">Sistem Informasi / Fakultas Teknik</p>
                <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">PUBDOK</span>
              </div>
            </article>

            {/* Pubdok 2 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/bilqis.jpg" 
                  alt="Bilqisti Mahdania" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Bilqisti Mahdania</h3>
                <p className="text-sm text-gray-600 mb-2">Gizi / Fakultas Kesehatan</p>
                <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">PUBDOK</span>
              </div>
            </article>

            {/* Pubdok 3 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/nabila.jpeg" 
                  alt="Nabila" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Nabila As Syifa</h3>
                <p className="text-sm text-gray-600 mb-2">Kesehatan Masyarakat / FIK</p>
                <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">PUBDOK</span>
              </div>
            </article>

            {/* Acara 1 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/nafisa.jpg" 
                  alt="Nafisa Az-Zulfa" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Nafisa Az-Zulfa</h3>
                <p className="text-sm text-gray-600 mb-2">Pendidikan Matematika / FKIP</p>
                <span className="inline-block px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full">ACARA</span>
              </div>
            </article>

            {/* Acara 2 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/ruby.jpg" 
                  alt="Rubby Aziz Zaura Kamal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Rubby Aziz Zaura Kamal</h3>
                <p className="text-sm text-gray-600 mb-2">Ekonomi Syariah / Fakultas Agama Islam</p>
                <span className="inline-block px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full">ACARA</span>
              </div>
            </article>

            {/* Acara 3 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/silvia.jpg" 
                  alt="Silvia Tazkiatu Shofwah" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Silvia Tazkiatu Shofwah</h3>
                <p className="text-sm text-gray-600 mb-2">Pendidikan Geografi / FKIP</p>
                <span className="inline-block px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full">ACARA</span>
              </div>
            </article>

            {/* Konsumsi 1 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/yesi.jpg" 
                  alt="Yesi Resina Septiani" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Yesi Resina Septiani</h3>
                <p className="text-sm text-gray-600 mb-2">Pendidikan Masyarakat / FKIP</p>
                <span className="inline-block px-3 py-1 bg-teal-600 text-white text-sm font-medium rounded-full">KONSUMSI</span>
              </div>
            </article>

            {/* Konsumsi 2 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/syahla.jpeg" 
                  alt="Syahla" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Nur Azmi Syahla Wahyudin</h3>
                <p className="text-sm text-gray-600 mb-2">Kesehatan Masyarakat / FIK</p>
                <span className="inline-block px-3 py-1 bg-teal-600 text-white text-sm font-medium rounded-full">KONSUMSI</span>
              </div>
            </article>

            {/* Konsumsi 3 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/zelika.jpeg" 
                  alt="Zelika" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Zelika</h3>
                <p className="text-sm text-gray-600 mb-2">Pendidikan Bahasa Inggris / FKIP</p>
                <span className="inline-block px-3 py-1 bg-teal-600 text-white text-sm font-medium rounded-full">KONSUMSI</span>
              </div>
            </article>

            {/* Deklog 1 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/candra.jpg" 
                  alt="Candra Gunawan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Candra Gunawan</h3>
                <p className="text-sm text-gray-600 mb-2">Ilmu Politik / FISIP</p>
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">DEKLOG</span>
              </div>
            </article>

            {/* Deklog 2 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/saparudin.jpg" 
                  alt="Saparudin Nugraha" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Saparudin Nugraha</h3>
                <p className="text-sm text-gray-600 mb-2">Pendidikan Jasmani / FKIP</p>
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">DEKLOG</span>
              </div>
            </article>

            {/* Deklog 3 */}
            <article className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img 
                  src="/images/foto/nurdyansah.jpeg" 
                  alt="Nurdyansah" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">Nurdyansah</h3>
                <p className="text-sm text-gray-600 mb-2">Pendidikan Ekonomi / FKIP</p>
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">DEKLOG</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100" id="kontak">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ingin tahu lebih lanjut tentang program KKN 13? Jangan ragu untuk menghubungi kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Lokasi</h4>
              <p className="text-gray-700">Desa Gombong, Kecamatan Ciawi<br />Kabupaten Tasikmalaya, Jawa Barat</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="font-bold text-lg text-gray-900 mb-2">WhatsApp</h4>
              <p className="text-gray-700">+62 821-1008-1755</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Periode</h4>
              <p className="text-gray-700">Desember 2025 - Januari 2026</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://wa.me/6282110081755" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/kkn13.gombong?igsh=djY0bml5anEwbW53" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 bg-pink-500 hover:bg-pink-600 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@kkn.13_gombong?_r=1&_t=ZS-92BI6ubSZZR" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
