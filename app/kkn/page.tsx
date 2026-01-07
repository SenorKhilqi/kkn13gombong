export default function KKNPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Kuliah Kerja Nyata (KKN)</h1>
          <p className="text-lg text-gray-600 mb-4">Desa Gombong, Kecamatan Ciawi</p>
          <div className="w-20 h-1 bg-[#437118] mx-auto"></div>
        </div>

        {/* Intro Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl border border-[#437118]/20 mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-[#437118]">🎓</span> Tentang KKN di Desa Gombong
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Desa Gombong secara rutin menerima mahasiswa KKN dari berbagai universitas untuk melaksanakan program pengabdian masyarakat. 
            Program KKN di desa ini memberikan kesempatan bagi mahasiswa untuk mengaplikasikan ilmu pengetahuan dan berkontribusi langsung 
            dalam pembangunan desa serta pemberdayaan masyarakat.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dengan kondisi geografis yang strategis dan masyarakat yang ramah, Desa Gombong menjadi lokasi yang ideal untuk pelaksanaan 
            berbagai program KKN yang bermanfaat bagi kedua belah pihak.
          </p>
        </section>

        {/* Program Unggulan */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-[#437118]">⭐</span> Program Unggulan KKN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Program 1 */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#437118]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍🏫</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Pendidikan & Pengajaran</h3>
              <p className="text-gray-600 text-sm">
                Bimbingan belajar untuk siswa SD dan SMP, pelatihan bahasa Inggris, komputer, dan literasi digital untuk masyarakat desa.
              </p>
            </div>

            {/* Program 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#437118]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Kesehatan Masyarakat</h3>
              <p className="text-gray-600 text-sm">
                Penyuluhan kesehatan, pemeriksaan kesehatan gratis, program stunting, gizi balita, dan edukasi pola hidup sehat.
              </p>
            </div>

            {/* Program 3 */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#437118]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Pertanian & Ekonomi</h3>
              <p className="text-gray-600 text-sm">
                Pelatihan pertanian modern, pengembangan UMKM, pemasaran digital produk lokal, dan diversifikasi pertanian.
              </p>
            </div>

            {/* Program 4 */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#437118]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Lingkungan Hidup</h3>
              <p className="text-gray-600 text-sm">
                Program penghijauan, pengelolaan sampah, bank sampah, pembuatan kompos, dan edukasi lingkungan untuk anak-anak.
              </p>
            </div>

            {/* Program 5 */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#437118]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Teknologi & Informasi</h3>
              <p className="text-gray-600 text-sm">
                Pembuatan website desa, sistem informasi administrasi, media sosial desa, dan pelatihan teknologi bagi perangkat desa.
              </p>
            </div>

            {/* Program 6 */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#437118] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#437118]/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Seni & Budaya</h3>
              <p className="text-gray-600 text-sm">
                Pelatihan seni tari, musik tradisional, kerajinan tangan, dan dokumentasi budaya lokal serta revitalisasi tradisi desa.
              </p>
            </div>
          </div>
        </section>

        {/* Kegiatan Rutin */}
        <section className="mb-10 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-[#437118]">📅</span> Kegiatan Rutin KKN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Minggu Pertama: Orientasi</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Perkenalan dengan aparat desa dan tokoh masyarakat</li>
                    <li>• Survey lokasi dan identifikasi masalah</li>
                    <li>• Penyusunan program kerja bersama masyarakat</li>
                    <li>• Sosialisasi program ke masyarakat</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Minggu 2-5: Pelaksanaan</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Implementasi program kerja utama</li>
                    <li>• Kegiatan pemberdayaan masyarakat</li>
                    <li>• Monitoring dan evaluasi berkala</li>
                    <li>• Kolaborasi dengan organisasi desa</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Minggu 6-7: Finalisasi</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Penyelesaian program yang belum selesai</li>
                    <li>• Serah terima hasil program ke desa</li>
                    <li>• Penyusunan laporan akhir</li>
                    <li>• Dokumentasi dan publikasi kegiatan</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Minggu Terakhir: Penarikan</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Acara perpisahan dengan masyarakat</li>
                    <li>• Presentasi hasil program KKN</li>
                    <li>• Penyerahan kenang-kenangan</li>
                    <li>• Evaluasi dan testimoni</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fasilitas */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-[#437118]">🏘️</span> Fasilitas untuk Peserta KKN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-200">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="font-semibold text-gray-900 mb-2">Posko KKN</h3>
              <p className="text-sm text-gray-600">Tempat tinggal yang layak dan aman untuk mahasiswa</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center border border-green-200">
              <div className="text-4xl mb-3">🍽️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Dapur</h3>
              <p className="text-sm text-gray-600">Fasilitas memasak lengkap untuk kebutuhan sehari-hari</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center border border-purple-200">
              <div className="text-4xl mb-3">📶</div>
              <h3 className="font-semibold text-gray-900 mb-2">Internet</h3>
              <p className="text-sm text-gray-600">Akses WiFi untuk kebutuhan komunikasi dan kerja</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl text-center border border-orange-200">
              <div className="text-4xl mb-3">🚻</div>
              <h3 className="font-semibold text-gray-900 mb-2">MCK</h3>
              <p className="text-sm text-gray-600">Kamar mandi dan toilet yang bersih dan memadai</p>
            </div>
          </div>
        </section>

        {/* Manfaat KKN */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-[#437118]">🎯</span> Manfaat Program KKN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Untuk Mahasiswa */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <span>👨‍🎓</span> Untuk Mahasiswa
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#437118] font-bold">✓</span>
                  <span>Mengaplikasikan ilmu yang dipelajari di kampus</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#437118] font-bold">✓</span>
                  <span>Meningkatkan kepekaan sosial dan empati</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#437118] font-bold">✓</span>
                  <span>Mengembangkan soft skills dan leadership</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#437118] font-bold">✓</span>
                  <span>Membangun networking dengan berbagai pihak</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#437118] font-bold">✓</span>
                  <span>Pengalaman hidup bermasyarakat yang berharga</span>
                </li>
              </ul>
            </div>

            {/* Untuk Desa */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <span>🏘️</span> Untuk Desa
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#437118] font-bold">✓</span>
                  <span>Bantuan tenaga untuk program pembangunan desa</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#437118] font-bold">✓</span>
                  <span>Transfer pengetahuan dan teknologi baru</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#437118] font-bold">✓</span>
                  <span>Peningkatan kualitas SDM masyarakat</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#437118] font-bold">✓</span>
                  <span>Percepatan pembangunan infrastruktur</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#437118] font-bold">✓</span>
                  <span>Peningkatan branding dan promosi desa</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Universitas yang Pernah KKN */}
        <section className="mb-10 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-[#437118]">🎓</span> Universitas yang Pernah KKN di Desa Gombong
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Universitas Siliwangi',
              'Universitas Tasikmalaya',
              'UIN Sunan Gunung Djati',
              'UNSIL Tasikmalaya',
              'IAIN Tasikmalaya',
              'Universitas Perjuangan',
              'Universitas Garut',
              'Universitas Galuh',
              'Institut Teknologi Bandung',
              'Universitas Padjadjaran',
              'Universitas Pendidikan Indonesia',
              'Politeknik Negeri Bandung'
            ].map((univ, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:shadow-md transition-shadow"
              >
                <p className="text-sm font-medium text-gray-700">{univ}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kontak & Pendaftaran */}
        <section className="bg-[#437118] text-white p-8 rounded-xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Tertarik untuk KKN di Desa Gombong?</h2>
            <p className="mb-6 text-green-50">
              Hubungi kami untuk informasi lebih lanjut tentang program KKN, jadwal, dan persyaratan yang diperlukan. 
              Kami siap menyambut mahasiswa untuk berkontribusi dalam pembangunan Desa Gombong.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kontak"
                className="px-8 py-3 bg-white text-[#437118] rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
              >
                Hubungi Kami
              </a>
              <a 
                href="tel:+62123456789"
                className="px-8 py-3 bg-[#375e14] text-white rounded-lg font-medium hover:bg-[#2d4d10] transition-colors inline-block"
              >
                📞 Telepon
              </a>
            </div>
          </div>
        </section>

        {/* Testimoni (Optional - dapat ditambahkan nanti) */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-[#437118]">💬</span> Testimoni Alumni KKN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#437118] rounded-full flex items-center justify-center text-white font-bold">
                  AS
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ahmad Suryadi</h4>
                  <p className="text-sm text-gray-600">Universitas Siliwangi 2024</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">
                "Pengalaman KKN di Desa Gombong sangat berkesan. Masyarakatnya ramah dan terbuka dengan program yang kami bawa. 
                Fasilitasnya juga mendukung untuk pelaksanaan kegiatan."
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#437118] rounded-full flex items-center justify-center text-white font-bold">
                  SR
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Siti Rahmawati</h4>
                  <p className="text-sm text-gray-600">UIN Bandung 2024</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">
                "Desa Gombong memiliki potensi besar untuk dikembangkan. Aparat desanya sangat kooperatif dan mendukung setiap 
                program yang kami jalankan. Sukses selalu untuk Desa Gombong!"
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#437118] rounded-full flex items-center justify-center text-white font-bold">
                  BP
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Budi Prasetyo</h4>
                  <p className="text-sm text-gray-600">UNSIL 2023</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">
                "Suasana desa yang sejuk dan asri membuat kami betah. Program yang kami jalankan mendapat respon positif dari 
                masyarakat. Terima kasih Desa Gombong atas pengalamannya!"
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
