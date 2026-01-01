export default function SejarahPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Sejarah Desa Gombong</h1>
          <p className="text-lg text-gray-600 mb-4">Kecamatan Ciawi, Kabupaten Tasikmalaya</p>
          <div className="w-20 h-1 bg-[#437118] mx-auto"></div>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {/* Asal Usul */}
          <section className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-amber-600">🏛️</span> Asal Usul Penduduk
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Menurut cerita dan beberapa catatan sejarah Desa, penghuni Desa Gombong berasal dari keturunan <strong>Mataram (Jawa Tengah)</strong>. Mereka adalah Suku Jawa, sebagaimana kita ketahui dalam buku sejarah Kerajaan Mataram mengalami masa jayanya ketika pemerintahan <strong>Sultan Agung (1615-1645)</strong>. Pengaruh Islam pada waktu itu sudah tertanam dengan baik di kalangan penduduk.
              </p>
              <p>
                Kira-kira pada <strong>abad ke-18</strong>, seorang Bupati Mataram dengan beberapa orang pengiringnya pergi meloloskan diri keluar kerajaan, karena kekuasaan Mataram makin terdesak akibat penjajahan Belanda. Beliau pergi dengan tujuan mencari tempat yang lebih aman tanpa sepengetahuan keluarga dan pembesar-pembesar setempat.
              </p>
            </div>
          </section>

          {/* Perjalanan ke Cimenga */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-[#437118]">🗺️</span> Perjalanan ke Cimenga
            </h2>
            <div className="bg-white border-2 border-gray-200 p-6 rounded-xl space-y-4 text-gray-700 leading-relaxed">
              <p>
                Rombongan sampai di <strong>Cimenga</strong> (daerah Kuningan sekarang), yang pada waktu itu diperintah oleh seorang Bupati terkenal dengan nama istrinya yaitu <strong>Embah Dalem Cimenga</strong> atau sebutan <strong>Embah Buntit</strong>.
              </p>
              <p>
                Sesampainya di Cimenga, rombongan Bupati Mataram itu menyamar sebagai orang biasa dengan membawa berbagai macam kesenian dari Jawa Tengah. Berita ramainya datang kesenian tersebut sampai ke seluruh pelosok dan akhirnya diketahui oleh Embah Dalem, kemudian dipanggil untuk main di kedaleman.
              </p>
              <p>
                Pada waktu pertunjukan kesenian tersebut, seorang putri kedaleman turut menonton dan tertarik kepada Bupati Mataram, lalu akhirnya menikah. Dari pernikahan ini memperoleh <strong>enam orang anak</strong>: lima putra dan seorang putri.
              </p>
            </div>
          </section>

          {/* Embah Jidun - Nenek Moyang Gombong */}
          <section className="bg-[#437118]/10 p-8 rounded-xl border border-[#437118]/30">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-[#437118]">👤</span> Embah Jidun - Nenek Moyang Gombong
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Kelima putra tersebut (kecuali sang putri) turut membantu perang Pangeran Sumedang melawan Cirebon. Setelah perang selesai dan Sumedang menang, kelima putra tersebut tidak mau kembali ke Cimenga dan terus mengembara ke Daerah Priangan.
              </p>
              <p>
                Salah seorang dari kelima putra tersebut bernama <strong>Embah Jidun</strong> (nama panggilan dari anak cucunya, nama sebenarnya adalah <strong>Suradiwangsa</strong>) sampailah ke Desa Gombong. Beliau merupakan <strong>nenek moyang penduduk Gombong</strong>.
              </p>
              <p>
                Salah seorang putri Embah Jidun bernama <strong>Astrayuda</strong> pergi ke sebelah barat Desa Gombong dengan mendirikan <strong>Kampung Pocol</strong>. Embah Jidun meninggal di kampung tersebut dan dimakamkan di sebuah tempat keramat bernama <strong>Cikujang</strong> di Kampung Nagaraherang Desa Sukahening sebelah timur laut Desa Gombong.
              </p>
            </div>
          </section>

          {/* Asal Nama Gombong */}
          <section className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">🎋</span> Asal Nama "Gombong"
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Perkataan <strong>"Gombong"</strong> menurut sejarah Desa setempat, karena Desa tersebut asalnya merupakan sebuah hutan bambu yang besar dan benar-benar banyak di tempat itu. Kata <em>Gombong</em> artinya pohon bambu yang besar, begitu pula menurut pengakuan orang-orang Jawa. Sebelum datangnya Embah Jidun, Desa Gombong merupakan sebuah tegalan yang ditumbuhi rumpun-rumpun bambu dan diselingi beberapa selokan kecil.
            </p>
          </section>

          {/* Timeline Kepemimpinan */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-[#437118]">📜</span> Perjalanan Kepemimpinan Desa Gombong
            </h2>
            
            {/* Timeline Container */}
            <div className="space-y-6">
              {/* Masa Awal - Huru Hara */}
              <div className="border-l-4 border-red-500 pl-6 pb-6">
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Masa Huru Hara (~1850)</h3>
                  <p className="text-gray-700 mb-3">
                    Sejak abad ke-19 (sekitar tahun 1850), masyarakat Desa mengalami kerusakan akhlak yang mengakibatkan huru hara. Keributan-keributan di bidang pencurian, perampokan, pembunuhan, dan penganiayaan terjadi di antara penduduk.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <div>
                        <p className="font-medium text-gray-900">Astrapraja (Pak Kuwu)</p>
                        <p className="text-sm text-gray-600">Hampir kalah terhadap penjahat</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <div>
                        <p className="font-medium text-gray-900">Adiwana (Pak Manten)</p>
                        <p className="text-sm text-gray-600">Melanjutkan usaha keamanan, namun belum berhasil</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-red-600 font-bold">•</span>
                      <div>
                        <p className="font-medium text-gray-900">Raden Karta</p>
                        <p className="text-sm text-gray-600">Memegang jabatan hanya 1 hari karena diprotes masyarakat</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Haji Abdul Rahim */}
              <div className="border-l-4 border-yellow-500 pl-6 pb-6">
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-yellow-600 text-white text-sm font-semibold rounded-full">1882 - 1889</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Haji Abdul Rahim</h3>
                  <p className="text-gray-700">
                    Memegang tampuk pimpinan selama 7 tahun. Kejahatan masih terus merajalela walaupun sudah diadakan berbagai usaha. Hampir setiap hari Desa Gombong digeledah oleh Polisi dari kecamatan demi ketertiban.
                  </p>
                </div>
              </div>

              {/* Haji Dahlan */}
              <div className="border-l-4 border-[#437118] pl-6 pb-6">
                <div className="bg-[#437118]/10 p-6 rounded-xl border border-[#437118]/30">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[#437118] text-white text-sm font-semibold rounded-full">1889 - 1919</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Haji Dahlan</h3>
                  <p className="text-gray-700 mb-3">
                    Mempunyai sifat sabar dan penuh kasih sayang terhadap masyarakat, bahkan terhadap penjahat. Beliau menjadikan penjahat sebagai pembantunya, termasuk Astradiwangsa (kepala penjahat dari empat bersaudara).
                  </p>
                  <p className="text-gray-700">
                    Beliau sangat percaya terhadap keramat-keramat, terutama Embah Agung Tapa. Menjadi orang yang paling disegani sehingga penjahat-penjahat tunduk kepadanya. Memiliki putra tunggal bernama <strong>Tanuwijaya</strong> yang dipesantrenkan di Cirebon, Sumedang, dan Banten.
                  </p>
                </div>
              </div>

              {/* Tanuwijaya */}
              <div className="border-l-4 border-blue-500 pl-6 pb-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">1919 - 1926</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Tanuwijaya</h3>
                  <p className="text-gray-700">
                    Calon tunggal yang terpilih setelah ayahnya berhenti. Melanjutkan usaha menumpas kejahatan dengan ilmu tinggi dan kekuatan jiwa yang dimiliki. Kejahatan dapat ditumpas dan semakin menurun, akhirnya dapat dikikis habis. Meninggal di usia 39 tahun setelah memimpin selama 9 tahun.
                  </p>
                </div>
              </div>

              {/* Iyon Tanuwijaya - Masa Jaya */}
              <div className="border-l-4 border-purple-500 pl-6 pb-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-300 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">1926 - 1965</span>
                    <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">⭐ MASA JAYA</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Iyon Tanuwijaya</h3>
                  <p className="text-gray-700 mb-2">
                    Putra sulung Tanuwijaya. Memiliki sifat hampir sama seperti ayahnya. <strong>Desa Gombong mengalami masa jayanya</strong> dengan banyak kemajuan yang dicapai.
                  </p>
                  <p className="text-gray-700">
                    Masyarakat kembali ke dalam keadaan tentram dan damai. Memegang tampuk pimpinan selama <strong>40 tahun</strong> - merupakan jabatan paling lama! Berhenti pada 20 April 1965 karena lanjut usia.
                  </p>
                </div>
              </div>

              {/* Yusup Tanuwijaya */}
              <div className="border-l-4 border-indigo-500 pl-6 pb-6">
                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-semibold rounded-full">1966 - 1977</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Yusup Tanuwijaya</h3>
                  <p className="text-gray-700">
                    Adik Iyon Tanuwijaya, sebelumnya menjabat sebagai juru tulis. Pemilihan dilakukan pada 19 Mei 1966 dengan calon tunggal. Memegang jabatan selama 12 tahun.
                  </p>
                </div>
              </div>

              {/* Idi Sumawijaya & Pemekaran */}
              <div className="border-l-4 border-orange-500 pl-6 pb-6">
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-orange-600 text-white text-sm font-semibold rounded-full">1977 - 1980</span>
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">PEMEKARAN</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Idi Sumawijaya (Periode 1)</h3>
                  <p className="text-gray-700 mb-3">
                    Menjabat selama 3 tahun. Pada masa kepemimpinannya, Desa Gombong dimekarkan menjadi 2 Desa:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border-2 border-[#437118]/50">
                      <h4 className="font-semibold text-[#437118] mb-2">Desa Gombong</h4>
                      <p className="text-sm text-gray-700 mb-2">Kepala Desa: Idi Sumawijaya</p>
                      <p className="text-sm text-gray-600">5 Dusun: Gombong, Sukamandi, Bugel, Karamasantana, Pocol (sekarang 6 dengan Pananyung)</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
                      <h4 className="font-semibold text-blue-800 mb-2">Desa Kertamukti</h4>
                      <p className="text-sm text-gray-700 mb-2">Kepala Desa: Ahmad</p>
                      <p className="text-sm text-gray-600">4 Dusun: Cibuyut, Mulyarasa, Jamilega, Sukamaju (sekarang 5 Dusun)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Idi Sumawijaya Periode 2 */}
              <div className="border-l-4 border-teal-500 pl-6 pb-6">
                <div className="bg-teal-50 p-6 rounded-xl border border-teal-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-teal-600 text-white text-sm font-semibold rounded-full">1978 - 1984</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Idi Sumawijaya (Periode 2)</h3>
                  <p className="text-gray-700">
                    Terpilih kembali melalui pemilihan dengan 4 calon. Beliau pernah menjabat sebelumnya sebagai juru tulis.
                  </p>
                </div>
              </div>

              {/* Oko Sukmaja */}
              <div className="border-l-4 border-cyan-500 pl-6 pb-6">
                <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-cyan-600 text-white text-sm font-semibold rounded-full">1984 - 1993</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Oko Sukmaja</h3>
                  <p className="text-gray-700">
                    Memegang kelungguhan selama 9 tahun.
                  </p>
                </div>
              </div>

              {/* Warka Dipura */}
              <div className="border-l-4 border-lime-500 pl-6 pb-6">
                <div className="bg-lime-50 p-6 rounded-xl border border-lime-200">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-lime-600 text-white text-sm font-semibold rounded-full">1993 - 2001</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Warka Dipura</h3>
                  <p className="text-gray-700">
                    Berasal dari Kampung Pocol. Memegang kelungguhan selama 8 tahun.
                  </p>
                </div>
              </div>

              {/* Jamali */}
              <div className="border-l-4 border-[#437118] pl-6">
                <div className="bg-[#437118]/10 p-6 rounded-xl border border-[#437118]/30">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[#437118] text-white text-sm font-semibold rounded-full">2001 - 2006</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Jamali</h3>
                  <p className="text-gray-700">
                    Berasal dari Kampung Pananyung. Memegang pemerintahan selama 5 tahun.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Catatan Penutup */}
          <section className="bg-gradient-to-r from-[#437118] to-blue-600 text-white p-8 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-3">📖 Warisan Sejarah</h3>
            <p className="leading-relaxed max-w-3xl mx-auto">
              Perjalanan panjang Desa Gombong dari masa huru hara hingga menjadi desa yang tentram dan damai merupakan bukti kegigihan para pemimpin dan masyarakatnya. Dari keturunan Mataram hingga kini, nilai-nilai gotong royong dan keislaman tetap terjaga sebagai identitas Desa Gombong.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
