export default function ProfilPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Profil Desa Gombong</h1>
          <p className="text-lg text-gray-600 mb-4">Kecamatan Ciawi, Kabupaten Tasikmalaya</p>
          <div className="w-20 h-1 bg-[#1D2A62] mx-auto"></div>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {/* Sekapur Sirih */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-[#1D2A62]/20">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-[#1D2A62]">📜</span> Sekapur Sirih
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Desa Gombong merupakan potret desa agraris yang terletak di jantung Kecamatan Ciawi. Dengan luas wilayah mencapai <strong>597,14 Ha</strong>, desa ini berdiri sebagai wilayah yang strategis namun tetap mempertahankan keasrian alamnya.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Terletak di ketinggian <strong>1.950 m dpl</strong> dengan suhu rata-rata yang sejuk (<strong>26 °C</strong>), Desa Gombong menawarkan harmoni antara hamparan sawah yang luas dan pemukiman warga yang tertata.
            </p>
          </section>

          {/* Geografis & Administrasi */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-[#1D2A62]">🗺️</span> Geografis & Administrasi
            </h2>
            
            {/* Batas Wilayah */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Batas Wilayah</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-20 font-medium text-gray-700">Utara:</div>
                  <div className="text-gray-600">Desa Bugel (Kec. Ciawi) & Desa Geresik (Kec. Jamanis)</div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-20 font-medium text-gray-700">Timur:</div>
                  <div className="text-gray-600">Desa Geresik & Desa Karangsambung (Kec. Jamanis)</div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-20 font-medium text-gray-700">Selatan:</div>
                  <div className="text-gray-600">Sungai Cideres & Desa Kertamukti</div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-20 font-medium text-gray-700">Barat:</div>
                  <div className="text-gray-600">Desa Kertamukti (Kec. Ciawi) & Kawasan Hutan</div>
                </div>
              </div>
            </div>

            {/* Pembagian Wilayah */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#437118]/10 p-6 rounded-xl text-center border border-[#437118]/30">
                <div className="text-4xl font-bold text-[#437118] mb-2">6</div>
                <p className="text-gray-700 font-medium">Dusun</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl text-center border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">11</div>
                <p className="text-gray-700 font-medium">RW</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center border border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-2">35</div>
                <p className="text-gray-700 font-medium">RT</p>
              </div>
            </div>
          </section>

          {/* Kependudukan & Sosial */}
          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-[#1D2A62]">👥</span> Kependudukan & Sosial
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200 text-center">
                <p className="text-gray-600 mb-1">Total Penduduk</p>
                <p className="text-3xl font-bold text-gray-900">5.009</p>
                <p className="text-sm text-gray-500">jiwa</p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-blue-200 text-center">
                <p className="text-gray-600 mb-1">Laki-laki</p>
                <p className="text-3xl font-bold text-blue-600">2.518</p>
                <p className="text-sm text-gray-500">jiwa</p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-pink-200 text-center">
                <p className="text-gray-600 mb-1">Perempuan</p>
                <p className="text-3xl font-bold text-pink-600">2.491</p>
                <p className="text-sm text-gray-500">jiwa</p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-[#437118]/30 text-center">
                <p className="text-gray-600 mb-1">Kepala Keluarga</p>
                <p className="text-3xl font-bold text-[#437118]">1.770</p>
                <p className="text-sm text-gray-500">KK</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">Fasilitas Publik</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏫</span>
                  <div>
                    <p className="font-medium text-gray-900">4 Sekolah Dasar</p>
                    <p className="text-sm text-gray-600">Fasilitas Pendidikan</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🕌</span>
                  <div>
                    <p className="font-medium text-gray-900">12 Masjid</p>
                    <p className="text-sm text-gray-600">Tempat Ibadah</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <p className="font-medium text-gray-900">9 Madrasah</p>
                    <p className="text-sm text-gray-600">Pendidikan Islam</p>
                  </div>
                </div>
                 <div className="flex items-center gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <p className="font-medium text-gray-900">16 Muhsola</p>
                    <p className="text-sm text-gray-600">Pendidikan Islam</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <p className="font-medium text-gray-900">3 Pondok Pesantren</p>
                    <p className="text-sm text-gray-600">Pendidikan Qurani</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sumber Daya Ekonomi */}
          <section className="bg-[#437118]/10 p-8 rounded-xl border border-[#437118]/30">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-[#437118]">🌾</span> Sumber Daya Ekonomi
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Mayoritas masyarakat kami menggantungkan hidup pada sektor <strong>pertanian dan buruh tani</strong>. Oleh karena itu, arah kebijakan pembangunan Desa Gombong selalu menitikberatkan pada peningkatan sarana prasarana pertanian serta konektivitas jalan untuk memperlancar arus ekonomi warga.
            </p>
          </section>

          {/* Struktur Organisasi */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-[#1D2A62]">👔</span> Struktur Pemerintahan Desa
            </h2>

            {/* Pimpinan Desa */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Pimpinan Desa</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#1D2A62] to-[#15224d] text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-white flex-shrink-0">
                      <img src="/images/aparatur/tantantaofik.png" alt="Tantan Taofik Sutanto" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Kepala Desa</h4>
                      <p className="text-xl font-bold">Tantan Taofik Sutanto, S. T</p>
                      <p className="text-sm opacity-90 mt-1">Masa Bakti: 2007 - Sekarang</p>
                      <p className="text-xs opacity-80">(PJS 2007, Definitif 2008-2014 & 2015-2021)</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#437118] to-[#375e14] text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-white flex-shrink-0">
                      <img src="/images/aparatur/euissumyati.png" alt="Euis Sumyati" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Sekretaris Desa</h4>
                      <p className="text-xl font-bold">Euis Sumyati</p>
                      <p className="text-sm opacity-90 mt-1">Masa Bakti: 2016 - Sekarang</p>
                      <p className="text-xs opacity-80">(Pengalaman sejak 2006)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Staf Kasi & Kaur */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Staf Kepala Seksi & Kepala Urusan</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border-2 border-gray-200 p-4 rounded-xl hover:border-[#1D2A62] transition-colors">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden bg-gray-100">
                      <img src="/images/aparatur/yantiharyati.png" alt="Yanti Haryati" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Kasi Pemerintahan</h4>
                    <p className="text-gray-600 text-sm">Yanti Haryati</p>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 p-4 rounded-xl hover:border-blue-500 transition-colors">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden bg-gray-100">
                      <img src="/images/aparatur/antonpatoni.png" alt="Anton Patoni" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Kasi Pelayanan</h4>
                    <p className="text-gray-600 text-sm">Anton Patoni</p>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 p-4 rounded-xl hover:border-purple-500 transition-colors">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden bg-gray-100">
                      <img src="/images/aparatur/nanicuarni.png" alt="Nani Cuarni" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Kasi Kesejahteraan</h4>
                    <p className="text-gray-600 text-sm">Nani Cuarni</p>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 p-4 rounded-xl hover:border-yellow-500 transition-colors">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden bg-gray-100">
                      <img src="/images/aparatur/yayamuhidin.png" alt="Yaya Muhidin" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Kaur Keuangan</h4>
                    <p className="text-gray-600 text-sm">Yaya Muhidin, S. Kom</p>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 p-4 rounded-xl hover:border-[#1D2A62] transition-colors">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden bg-gray-100">
                      <img src="/images/aparatur/cindriania.png" alt="Cindri Ania" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Staff Desa</h4>
                    <p className="text-gray-600 text-sm">Cindri Ania</p>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 p-4 rounded-xl hover:border-blue-500 transition-colors">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden bg-gray-100">
                      <img src="/images/aparatur/rudiansyahapanditanjung.png" alt="Rudiansyah Apandi Tanjung" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Kaur Umum</h4>
                    <p className="text-gray-600 text-sm">Rudiansyah Apandi Tanjung</p>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 p-4 rounded-xl hover:border-purple-500 transition-colors">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden bg-gray-100">
                      <img src="/images/aparatur/nandanriadi.png" alt="Nandan Riadi" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Kaur Perencanaan</h4>
                    <p className="text-gray-600 text-sm">Nandan Riadi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kepala Dusun */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Kepala Kewilayahan (Kepala Dusun)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <a href="/dusun/gombong" className="bg-white border-2 border-gray-200 p-5 rounded-xl hover:shadow-lg hover:border-[#437118] transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <img src="/images/aparatur/dodynurwadi.png" alt="Dody Nurwadi" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dusun Gombong</h4>
                      <p className="text-gray-600 text-sm">Dody Nurwadi</p>
                    </div>
                  </div>
                </a>
                <a href="/dusun/sukamandi" className="bg-white border-2 border-gray-200 p-5 rounded-xl hover:shadow-lg hover:border-[#437118] transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <img src="/images/aparatur/titasholihatulmunirohhilmi.png" alt="Tita Sholihatul Muniroh Hilmi" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dusun Sukamandi</h4>
                      <p className="text-gray-600 text-sm">Tita Sholihatul Muniroh Hilmi, S.E</p>
                    </div>
                  </div>
                </a>
                <a href="/dusun/bugel" className="bg-white border-2 border-gray-200 p-5 rounded-xl hover:shadow-lg hover:border-[#437118] transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <img src="/images/aparatur/ruhimat.png" alt="Ruhimat" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dusun Bugel</h4>
                      <p className="text-gray-600 text-sm">Ruhimat</p>
                    </div>
                  </div>
                </a>
                <a href="/dusun/karamasantana" className="bg-white border-2 border-gray-200 p-5 rounded-xl hover:shadow-lg hover:border-[#437118] transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <img src="/images/aparatur/enjanghadihidayah.png" alt="Enjang Hadi Hidayah" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dusun Karamasantana</h4>
                      <p className="text-gray-600 text-sm">Enjang Hadi Hidayah</p>
                    </div>
                  </div>
                </a>
                <a href="/dusun/pocol" className="bg-white border-2 border-gray-200 p-5 rounded-xl hover:shadow-lg hover:border-[#437118] transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <img src="/images/aparatur/mastutinuraeni.png" alt="Mastuti Nuraeni" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dusun Pocol</h4>
                      <p className="text-gray-600 text-sm">Mastuti Nuraeni</p>
                    </div>
                  </div>
                </a>
                <a href="/dusun/pananyung" className="bg-white border-2 border-gray-200 p-5 rounded-xl hover:shadow-lg hover:border-[#437118] transition-all cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                      <img src="/images/aparatur/amatbongsor.png" alt="Amat Bongsor" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dusun Pananyung</h4>
                      <p className="text-gray-600 text-sm">Amat Bongsor</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Data Ringkas */}
          <section className="bg-gradient-to-r from-[#1D2A62] to-[#437118] text-white p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6 text-center">Data Ringkas Desa Gombong</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-sm opacity-90 mb-1">Luas Wilayah</p>
                <p className="text-3xl font-bold">597,14</p>
                <p className="text-sm opacity-80">Hektar</p>
              </div>
              <div className="text-center">
                <p className="text-sm opacity-90 mb-1">Ketinggian</p>
                <p className="text-3xl font-bold">1.950</p>
                <p className="text-sm opacity-80">m dpl</p>
              </div>
              <div className="text-center">
                <p className="text-sm opacity-90 mb-1">Jarak ke Kecamatan</p>
                <p className="text-3xl font-bold">15</p>
                <p className="text-sm opacity-80">Menit</p>
              </div>
              <div className="text-center">
                <p className="text-sm opacity-90 mb-1">Jarak ke Kabupaten</p>
                <p className="text-3xl font-bold">45</p>
                <p className="text-sm opacity-80">Menit</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
