import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN I: PILIHAN GANDA (10 BUTIR SOAL: NO. 1 - 10)
  // Setiap butir bernilai skor 1 (Total skor PG = 10)
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Penjelajahan Samudra - Latar Belakang Jatuhnya Konstantinopel',
    difficulty: 'Mudah',
    text: 'Perhatikan narasi sejarah dan peta jalur perdagangan berikut!\n\nPada tahun 1453, Kota Konstantinopel yang merupakan pusat perdagangan rempah-rempah terbesar bagi bangsa Eropa berhasil ditaklukkan oleh Kesultanan Turki Utsmani di bawah pimpinan Sultan Muhammad Al-Fatih. Akibat peristiwa besar tersebut, bangsa-bangsa Eropa mengalami kesulitan besar memperoleh rempah-rempah karena jalur perdagangan ditutup dan harga rempah-rempah melambung sangat tinggi.\n\nFaktor utama yang mendorong bangsa-bangsa Eropa seperti Portugis, Spanyol, dan Belanda memulai penjelajahan samudra adalah...',
    imageSvg: `<svg viewBox="0 0 420 180" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyKonst" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0284c7"/>
          <stop offset="100%" stop-color="#38bdf8"/>
        </linearGradient>
      </defs>
      <rect width="420" height="180" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Peta Jalur Laut Tengah -->
      <path d="M20 70 Q120 40 220 80 T400 60 L400 170 L20 170 Z" fill="#e0f2fe"/>
      <!-- Daratan Eropa & Asia Kecil -->
      <path d="M30 40 Q80 20 140 35 Q180 50 160 85 Q110 80 50 60 Z" fill="#cbd5e1"/>
      <path d="M220 50 Q310 30 390 45 L390 90 Q300 85 240 70 Z" fill="#e2e8f0"/>
      <!-- Kota Konstantinopel (Ditutup / Silang Merah) -->
      <circle cx="215" cy="62" r="14" fill="#ef4444" fill-opacity="0.2"/>
      <circle cx="215" cy="62" r="8" fill="#ef4444"/>
      <line x1="205" y1="52" x2="225" y2="72" stroke="#ffffff" stroke-width="2.5"/>
      <line x1="225" y1="52" x2="205" y2="72" stroke="#ffffff" stroke-width="2.5"/>
      <!-- Rute Pelayaran Samudra Mengitari Afrika Menuju Nusantara -->
      <path d="M70 70 Q40 140 160 155 Q280 160 380 135" fill="none" stroke="#0284c7" stroke-width="3" stroke-dasharray="6 4"/>
      <polygon points="380,135 370,130 373,142" fill="#0284c7"/>
      <!-- Label Card -->
      <rect x="25" y="105" width="200" height="58" rx="8" fill="#ffffff" stroke="#94a3b8" stroke-width="1.2"/>
      <text x="35" y="125" font-size="11" font-weight="bold" fill="#0f172a">Konstantinopel Jatuh (1453)</text>
      <text x="35" y="141" font-size="9.5" fill="#ef4444" font-weight="bold">Jalur Dagang Laut Tengah Tertutup</text>
      <text x="35" y="155" font-size="9" fill="#475569">Mencari Kepulauan Rempah Nusantara</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Mencari jalur pelayaran langsung ke daerah penghasil rempah-rempah di kepulauan Nusantara' },
      { id: 'B', text: 'Membantu kerajaan-kerajaan di Asia untuk membangun armada kapal perang yang modern' },
      { id: 'C', text: 'Menyebarkan kebudayaan barat dan mendirikan universitas tinggi di Benua Asia' },
      { id: 'D', text: 'Melarikan diri dari bencana alam gunung meletus dan perang saudara di Eropa' },
    ],
    correctAnswer: 'A',
    explanation:
      'Jatuhnya Konstantinopel ke tangan Turki Utsmani (1453) memutus jalur perdagangan rempah-rempah bangsa Eropa. Hal ini memaksa bangsa Eropa seperti Portugis, Spanyol, dan Belanda mencari jalur laut langsung menuju kepulauan rempah-rempah di Nusantara.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Penjelajahan Samudra - Semboyan 3G (Gold, Glory, Gospel)',
    difficulty: 'Mudah',
    text: 'Perhatikan diagram semboyan penjelajahan samudra bangsa Barat berikut!\n\nPenjelajahan samudra bangsa-bangsa Eropa ke belahan dunia timur dipicu oleh tiga semboyan utama yang dikenal dengan istilah "3G" (Gold, Glory, Gospel).\n\nMakna dari semboyan "Glory" dalam tujuan penjelajahan samudra bangsa Eropa adalah...',
    imageSvg: `<svg viewBox="0 0 420 170" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="170" fill="#f8fafc" rx="10" stroke="#e2e8f0"/>
      <!-- Box 1: GOLD -->
      <rect x="25" y="45" width="110" height="80" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
      <circle cx="80" cy="72" r="16" fill="#f59e0b"/>
      <text x="80" y="77" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">$</text>
      <text x="80" y="105" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">GOLD</text>
      <text x="80" y="118" font-size="9" fill="#b45309" text-anchor="middle">Kekayaan/Emas</text>
      <!-- Box 2: GLORY -->
      <rect x="155" y="35" width="110" height="98" rx="10" fill="#fee2e2" stroke="#ef4444" stroke-width="2.5"/>
      <circle cx="210" cy="68" r="18" fill="#ef4444"/>
      <polygon points="210,56 214,64 223,65 216,72 218,80 210,75 202,80 204,72 197,65 206,64" fill="#ffffff"/>
      <text x="210" y="104" font-size="13" font-weight="extrabold" fill="#991b1b" text-anchor="middle">GLORY</text>
      <text x="210" y="122" font-size="9.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">Kejayaan &amp; Kuasa</text>
      <!-- Box 3: GOSPEL -->
      <rect x="285" y="45" width="110" height="80" rx="10" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/>
      <circle cx="340" cy="72" r="16" fill="#6366f1"/>
      <text x="340" y="78" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">+</text>
      <text x="340" y="105" font-size="12" font-weight="bold" fill="#3730a3" text-anchor="middle">GOSPEL</text>
      <text x="340" y="118" font-size="9" fill="#4338ca" text-anchor="middle">Penyebaran Agama</text>
      <text x="210" y="24" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Semboyan 3G Penjelajahan Samudra</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Mencari kejayaan, kemasyhuran, serta memperluas wilayah kekuasaan jajahan suatu negara' },
      { id: 'B', text: 'Mengumpulkan rempah-rempah dan logam mulia berupa emas serta perak sebanyak-banyaknya' },
      { id: 'C', text: 'Menyebarkan ajaran agama Nasrani/Kristen kepada penduduk di tanah jajahan' },
      { id: 'D', text: 'Menjalin persahabatan dagang yang adil dan menguntungkan kedua belah pihak secara damai' },
    ],
    correctAnswer: 'A',
    explanation:
      'Semboyan Glory bermakna mencari kejayaan, keharuman nama bangsa, serta memperluas daerah kekuasaan jajahan. Sementara Gold bermakna memburu kekayaan (rempah-rempah/emas), dan Gospel bermakna menyebarkan agama.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Penjelajahan Samudra - Ekspedisi Belanda ke Banten (1596)',
    difficulty: 'Sedang',
    text: 'Perhatikan ilustrasi kapal dagang dan catatan peristiwa sejarah berikut!\n\nPada bulan Juni 1596, empat kapal Belanda dengan 249 awak kapal berhasil berlabuh di Pelabuhan Banten setelah menempuh pelayaran panjang mengarungi Samudra Atlantik dan Samudra Hindia. Ekspedisi pertama Belanda ini sempat menimbulkan perselisihan dengan penguasa dan pedagang lokal karena sikap pemimpinnya yang kasar dan sombong.\n\nSiapakah nama pemimpin ekspedisi pelayaran Belanda pertama yang mendarat di Banten tersebut?',
    imageSvg: `<svg viewBox="0 0 420 175" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="seaBanten" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
      </defs>
      <rect width="420" height="175" fill="#f0f9ff" rx="10" stroke="#bae6fd"/>
      <!-- Laut Banten -->
      <rect x="0" y="100" width="420" height="75" fill="url(#seaBanten)"/>
      <!-- Kapal Layar Tradisional Belanda (Karavel / Galleon) -->
      <path d="M140 120 L280 120 L260 145 L160 145 Z" fill="#78350f" stroke="#451a03" stroke-width="1.5"/>
      <!-- Tiang Layar & Layar Putih Bergaris Merah -->
      <line x1="180" y1="50" x2="180" y2="120" stroke="#451a03" stroke-width="3"/>
      <line x1="240" y1="40" x2="240" y2="120" stroke="#451a03" stroke-width="3"/>
      <path d="M180 55 Q210 75 180 95 Z" fill="#ffffff" stroke="#94a3b8"/>
      <path d="M240 45 Q270 70 240 95 Z" fill="#ffffff" stroke="#94a3b8"/>
      <!-- Bendera Belanda (Merah Putih Biru) -->
      <rect x="240" y="32" width="22" height="4" fill="#ef4444"/>
      <rect x="240" y="36" width="22" height="4" fill="#ffffff"/>
      <rect x="240" y="40" width="22" height="4" fill="#2563eb"/>
      <!-- Info Box -->
      <rect x="20" y="18" width="160" height="52" rx="8" fill="#ffffff" fill-opacity="0.95" stroke="#cbd5e1" stroke-width="1.2"/>
      <text x="30" y="36" font-size="11" font-weight="bold" fill="#0f172a">Ekspedisi Banten (1596)</text>
      <text x="30" y="52" font-size="9" fill="#0284c7" font-weight="bold">4 Kapal Dagang Belanda</text>
      <text x="30" y="64" font-size="8.5" fill="#64748b">Awal Masuknya Belanda ke Jawa</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Cornelis de Houtman' },
      { id: 'B', text: 'Vasco da Gama' },
      { id: 'C', text: 'Afonso de Albuquerque' },
      { id: 'D', text: 'Jan Pieterszoon Coen' },
    ],
    correctAnswer: 'A',
    explanation:
      'Cornelis de Houtman adalah pemimpin ekspedisi penjelajah Belanda pertama yang tiba di Pelabuhan Banten pada tahun 1596. Keberhasilan ekspedisi ini membuka jalan bagi kapal-kapal dagang Belanda berikutnya hingga dibentuknya VOC pada tahun 1602.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Sistem Tanam Paksa - Latar Belakang & Tokoh Pencetus',
    difficulty: 'Mudah',
    text: 'Pada tahun 1830, Kerajaan Belanda mengalami krisis keuangan yang sangat parah hingga kas negara kosong dan terbebani hutang besar akibat membiayai Perang Diponegoro (1825–1830) di Jawa serta Perang Kemerdekaan Belgia di Eropa.\n\nUntuk mengatasi kebangkrutan tersebut, seorang Gubernur Jenderal Belanda menerapkan sistem "Cultuurstelsel" (Tanam Paksa). Siapakah nama tokoh Gubernur Jenderal pencetus sistem tersebut?',
    imageSvg: `<svg viewBox="0 0 420 170" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="170" fill="#f8fafc" rx="10" stroke="#cbd5e1"/>
      <!-- Neraca Keuangan Belanda Defisit -->
      <rect x="30" y="30" width="150" height="110" rx="8" fill="#fef2f2" stroke="#f87171" stroke-width="1.5"/>
      <text x="105" y="52" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">KAS BELANDA KOSONG</text>
      <text x="105" y="74" font-size="9.5" fill="#b91c1c" text-anchor="middle">• Biaya Perang Diponegoro</text>
      <text x="105" y="92" font-size="9.5" fill="#b91c1c" text-anchor="middle">• Perang Belgia di Eropa</text>
      <text x="105" y="122" font-size="10" font-weight="bold" fill="#7f1d1d" text-anchor="middle">Hutang Menumpuk</text>
      <!-- Panah Transformasi Kebijakan -->
      <path d="M190 85 L225 85" stroke="#475569" stroke-width="3"/>
      <polygon points="230,85 220,79 220,91" fill="#475569"/>
      <!-- Solusi Kolonial: Cultuurstelsel -->
      <rect x="235" y="30" width="155" height="110" rx="8" fill="#f0fdf4" stroke="#4ade80" stroke-width="1.5"/>
      <text x="312" y="52" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">SOLUSI: 1830</text>
      <text x="312" y="74" font-size="12" font-weight="extrabold" fill="#14532d" text-anchor="middle">CULTUURSTELSEL</text>
      <text x="312" y="94" font-size="9.5" fill="#15803d" text-anchor="middle">(Sistem Tanam Paksa)</text>
      <text x="312" y="122" font-size="9" font-weight="semibold" fill="#166534" text-anchor="middle">Tanaman Ekspor Komersial</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Johannes van den Bosch' },
      { id: 'B', text: 'Herman Willem Daendels' },
      { id: 'C', text: 'Thomas Stamford Raffles' },
      { id: 'D', text: 'C.Th. van Deventer' },
    ],
    correctAnswer: 'A',
    explanation:
      'Gubernur Jenderal Johannes van den Bosch memperkenalkan sistem Cultuurstelsel (Tanam Paksa) pada tahun 1830 untuk mengisi kembali kas Kerajaan Belanda yang terkuras habis akibat membiayai Perang Diponegoro dan Perang Belgia.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Sistem Tanam Paksa - Penyimpangan Praktik Lapangan',
    difficulty: 'Sedang',
    text: 'Perhatikan tabel perbandingan aturan resmi Tanam Paksa menurut Staatblad 1834 dengan praktik kenyataan di lapangan berikut!\n\nAturan Resmi: "Tanah yang disediakan untuk tanaman ekspor hanya seperlima (20%) dari tanah desa dan bebas pajak."\n\nDalam kenyataan di lapangan, terjadi penyimpangan yang sangat merugikan rakyat pribumi, yaitu...',
    imageSvg: `<svg viewBox="0 0 420 175" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="175" fill="#ffffff" rx="10" stroke="#e2e8f0"/>
      <!-- Kolom Kiri: Aturan Resmi Kertas -->
      <rect x="20" y="25" width="180" height="125" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-dasharray="4 3"/>
      <text x="110" y="48" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">ATURAN RESMI (HUKUM)</text>
      <text x="35" y="70" font-size="9" fill="#475569">• Lahan hanya 1/5 bagian desa</text>
      <text x="35" y="88" font-size="9" fill="#475569">• Bebas dari pajak tanah</text>
      <text x="35" y="106" font-size="9" fill="#475569">• Waktu kerja maks 66 hari</text>
      <text x="35" y="124" font-size="9" fill="#475569">• Gagal panen ditanggung Belanda</text>
      <!-- Kolom Kanan: Penyimpangan Nyata -->
      <rect x="220" y="25" width="180" height="125" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
      <text x="310" y="48" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">PRAKTIK NYATA (PENYIMPANGAN)</text>
      <text x="235" y="70" font-size="9" fill="#b91c1c" font-weight="bold">• Lahan diambil &gt; 1/2 tersubur</text>
      <text x="235" y="88" font-size="9" fill="#b91c1c" font-weight="bold">• Petani tetap ditarik pajak</text>
      <text x="235" y="106" font-size="9" fill="#b91c1c" font-weight="bold">• Kerja paksa sepanjang tahun</text>
      <text x="235" y="124" font-size="9" fill="#b91c1c" font-weight="bold">• Gagal panen beban petani</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Tanah yang diambil melebihi separuh bahkan tanah yang paling subur, dan petani tetap dipungut pajak tanah' },
      { id: 'B', text: 'Pemerintah kolonial memberikan ganti rugi uang tunai yang sangat besar kepada seluruh pemilik tanah' },
      { id: 'C', text: 'Petani hanya diperbolehkan menanam padi untuk memenuhi kebutuhan pangannya sendiri' },
      { id: 'D', text: 'Belanda menanggung seluruh biaya hidup keluarga petani selama masa tanam komoditas' },
    ],
    correctAnswer: 'A',
    explanation:
      'Penyimpangan terbesar Tanam Paksa dipicu oleh sistem "cultuurprocenten" (bonus persentase hasil bagi pejabat kolonial dan bupati). Akibatnya, pejabat memaksa rakyat menyerahkan lahan tersubur melebihi separuh tanah desa, bekerja sepanjang tahun, dan tetap menagih pajak tanah.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Sistem Tanam Paksa - Komoditas Ekspor Wajib & Dampak Kelaparan',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar komoditas tanaman wajib ekspor pada masa Tanam Paksa berikut!\n\nUntuk mendatangkan keuntungan besar di pasar Eropa, pemerintah kolonial mewajibkan rakyat menanam tanaman ekspor seperti kopi, teh, tembakau, tebu (gula), dan nila (tarum). Di daerah Cirebon (1844) serta Demak dan Grobogan (1849), pemaksaan penanaman tanaman ini mengakibatkan bencana kelaparan dan kematian massal yang mengerikan.\n\nPenyebab utama bencana kelaparan tersebut menimpa rakyat adalah...',
    imageSvg: `<svg viewBox="0 0 420 170" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="170" fill="#f8fafc" rx="10" stroke="#cbd5e1"/>
      <!-- Tanaman 1: Tebu (Gula) -->
      <rect x="25" y="30" width="115" height="110" rx="8" fill="#f0fdf4" stroke="#86efac"/>
      <path d="M70 120 L70 50 Q85 40 85 120" stroke="#15803d" stroke-width="4" fill="none"/>
      <path d="M85 80 Q105 70 110 85" stroke="#16a34a" stroke-width="2.5" fill="none"/>
      <text x="82" y="132" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">Tebu (Gula)</text>
      <!-- Tanaman 2: Nila / Tarum (Pewarna) -->
      <rect x="152" y="30" width="115" height="110" rx="8" fill="#eff6ff" stroke="#93c5fd"/>
      <circle cx="210" cy="70" r="22" fill="#2563eb" fill-opacity="0.2"/>
      <circle cx="210" cy="70" r="14" fill="#1d4ed8"/>
      <text x="210" y="132" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">Nila (Indigo)</text>
      <!-- Tanaman 3: Kopi & Tembakau -->
      <rect x="280" y="30" width="115" height="110" rx="8" fill="#fffbeb" stroke="#fcd34d"/>
      <ellipse cx="337" cy="70" rx="12" ry="16" fill="#78350f"/>
      <line x1="337" y1="56" x2="337" y2="84" stroke="#451a03" stroke-width="2"/>
      <text x="337" y="132" font-size="10" font-weight="bold" fill="#78350f" text-anchor="middle">Kopi &amp; Tembakau</text>
      <text x="210" y="20" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Komoditas Wajib Ekspor Tanam Paksa</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Tenaga dan sawah rakyat tersita habis untuk tanaman ekspor sehingga sawah padi terbengkalai dan gagal panen pangan' },
      { id: 'B', text: 'Adanya serangan hama belalang yang hanya memakan tanaman padi di seluruh Pulau Jawa' },
      { id: 'C', text: 'Rakyat menolak memakan beras dan lebih memilih mengonsumsi daun tembakau dan kopi' },
      { id: 'D', text: 'Pemerintah kolonial membakar seluruh lumbung padi milik desa untuk membangun rel kereta api' },
    ],
    correctAnswer: 'A',
    explanation:
      'Penanaman komoditas ekspor (terutama tebu dan nila) sangat rakus menyerap air, tanah sawah tersubur, dan menguras tenaga kerja rakyat sepanjang tahun. Akibatnya, tanaman padi rakyat tidak terurus hingga terjadi gagal panen pangan dan bencana kelaparan hebat di Cirebon dan Grobogan.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Politik Etis - Latar Belakang & Tulisan "Een Eereschuld"',
    difficulty: 'Mudah',
    text: 'Perhatikan kutipan artikel bersejarah berikut!\n\n"Berjuta-juta gulden kekayaan telah mengalir dari bumi Hindia Belanda untuk memakmurkan dan melunasi hutang Kerajaan Belanda. Kini sudah saatnya Belanda mengembalikan budi dan jasa tersebut demi kemakmuran rakyat pribumi!"\n\nPada tahun 1899, sebuah artikel terkenal berjudul "Een Eereschuld" (Hutang Kehormatan/Budi) dimuat dalam majalah Belanda De Gids. Tokoh pencetus artikel yang mendesak diberlakukannya Politik Etis tersebut adalah...',
    imageSvg: `<svg viewBox="0 0 420 170" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="170" fill="#fdfbf7" rx="10" stroke="#e2e8f0"/>
      <!-- Sampul Majalah De Gids 1899 -->
      <rect x="35" y="25" width="140" height="120" rx="4" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
      <rect x="45" y="35" width="120" height="20" fill="#0f172a"/>
      <text x="105" y="49" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">DE GIDS (1899)</text>
      <text x="105" y="78" font-size="11" font-weight="extrabold" fill="#b91c1c" text-anchor="middle">"Een Eereschuld"</text>
      <text x="105" y="94" font-size="9" fill="#475569" text-anchor="middle">(Hutang Kehormatan)</text>
      <line x1="55" y1="105" x2="155" y2="105" stroke="#cbd5e1"/>
      <text x="105" y="122" font-size="8.5" fill="#64748b" text-anchor="middle">Kritik Keras Kolonialisme</text>
      <!-- Panah ke Kebijakan -->
      <path d="M190 85 L225 85" stroke="#475569" stroke-width="3"/>
      <polygon points="230,85 220,79 220,91" fill="#475569"/>
      <!-- Hasil: Politik Etis 1901 -->
      <rect x="235" y="25" width="150" height="120" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
      <text x="310" y="50" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">PIDATO RATU 1901</text>
      <text x="310" y="75" font-size="13" font-weight="extrabold" fill="#0f172a" text-anchor="middle">POLITIK ETIS</text>
      <text x="310" y="98" font-size="9.5" fill="#0284c7" text-anchor="middle">• Irrigatie (Irigasi)</text>
      <text x="310" y="114" font-size="9.5" fill="#0284c7" text-anchor="middle">• Emigratie (Transmigrasi)</text>
      <text x="310" y="130" font-size="9.5" fill="#0284c7" text-anchor="middle">• Edukatie (Edukasi)</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Conrad Theodor van Deventer (C.Th. van Deventer)' },
      { id: 'B', text: 'Johannes van den Bosch' },
      { id: 'C', text: 'Cornelis de Houtman' },
      { id: 'D', text: 'J.P. Coen' },
    ],
    correctAnswer: 'A',
    explanation:
      'C.Th. van Deventer adalah tokoh politik humanis Belanda yang menulis artikel "Een Eereschuld" (Hutang Kehormatan) pada tahun 1899. Tulisan ini menyadarkan pemerintah Belanda untuk membalas budi rakyat Indonesia melalui Trias Van Deventer (Irigasi, Emigrasi, dan Edukasi).',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Politik Etis - Penyimpangan Program Irrigatie & Emigratie',
    difficulty: 'Sukar',
    text: 'Perhatikan skema pelaksanaan program Politik Etis berikut!\n\nTrias Van Deventer memuat tiga program: Irrigatie (pembangunan pengairan), Emigratie (pemindahan penduduk), dan Edukatie (pendidikan). Meskipun bertujuan mulia untuk membalas budi bangsa Indonesia, dalam pelaksanaannya Belanda kembali melakukan penyimpangan besar.\n\nPenyimpangan utama dari pelaksanaan program "Irrigatie" (irigasi) oleh penguasa kolonial adalah...',
    imageSvg: `<svg viewBox="0 0 420 175" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="175" fill="#f8fafc" rx="10" stroke="#cbd5e1"/>
      <!-- Bendungan & Saluran Irigasi -->
      <rect x="25" y="25" width="85" height="125" rx="6" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5"/>
      <text x="67" y="50" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">BENDUNGAN</text>
      <text x="67" y="65" font-size="9" fill="#0284c7" text-anchor="middle">KOLONIAL</text>
      <!-- Saluran Mengalir ke Perkebunan Belanda (Lancar) -->
      <path d="M110 55 L210 55" stroke="#0284c7" stroke-width="5"/>
      <rect x="210" y="30" width="185" height="48" rx="6" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
      <text x="302" y="50" font-size="9.5" font-weight="bold" fill="#15803d" text-anchor="middle">Perkebunan Tebu Milik Pengusaha Belanda</text>
      <text x="302" y="66" font-size="8.5" fill="#166534" text-anchor="middle">(Air Berlimpah &amp; Subur)</text>
      <!-- Saluran ke Sawah Petani Pribumi (Kering / Terputus) -->
      <path d="M110 115 L170 115" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 3"/>
      <rect x="210" y="95" width="185" height="48" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
      <text x="302" y="115" font-size="9.5" font-weight="bold" fill="#991b1b" text-anchor="middle">Sawah Rakyat Pribumi (Inlander)</text>
      <text x="302" y="131" font-size="8.5" fill="#b91c1c" text-anchor="middle">(Kering Kerontang &amp; Kurang Air)</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Saluran air yang dibangun hanya dialirkan ke perkebunan tebu dan tembakau milik pengusaha Belanda, sedangkan sawah rakyat tetap kekeringan' },
      { id: 'B', text: 'Air bendungan sengaja dicemari racun agar petani tidak dapat bercocok tanam sama sekali' },
      { id: 'C', text: 'Pemerintah kolonial melarang petani mengambil air sungai untuk keperluan mandi dan minum' },
      { id: 'D', text: 'Belanda membangun bendungan air laut asin yang mematikan seluruh tanaman di Pulau Jawa' },
    ],
    correctAnswer: 'A',
    explanation:
      'Penyimpangan pelaksanaan Irigasi adalah saluran air yang dibangun dengan uang rakyat hanya dialirkan untuk menyuburkan perkebunan-perkebunan besar milik pengusaha Belanda, sedangkan sawah milik petani pribumi tetap mengalami kekeringan.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Kondisi Sosial - Stratifikasi Sosial Masyarakat Masa Hindia Belanda',
    difficulty: 'Sedang',
    text: 'Perhatikan bagan piramida susunan pelapisan sosial (stratifikasi sosial) pada masa pemerintahan Hindia Belanda berikut!\n\nPemerintah kolonial Belanda memberlakukan pembagian kasta masyarakat secara diskriminatif berdasarkan ras dan keturunan menjadi tiga golongan.\n\nBerdasarkan bagan piramida tersebut, kedudukan bangsa pribumi (inlander) adalah...',
    imageSvg: `<svg viewBox="0 0 420 180" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="180" fill="#f8fafc" rx="10" stroke="#cbd5e1"/>
      <!-- Piramida Lapisan Sosial 3 Tingkat -->
      <!-- Puncak: Golongan I (Eropa) -->
      <polygon points="210,25 155,70 265,70" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="210" y="52" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">GOLONGAN I: EROPA</text>
      <text x="210" y="64" font-size="8" fill="#713f12" text-anchor="middle">(Belanda, Inggris, dsb)</text>
      <!-- Tengah: Golongan II (Timur Asing) -->
      <polygon points="155,70 265,70 315,115 105,115" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/>
      <text x="210" y="92" font-size="10" font-weight="bold" fill="#3730a3" text-anchor="middle">GOLONGAN II: TIMUR ASING</text>
      <text x="210" y="106" font-size="8.5" fill="#4338ca" text-anchor="middle">(Tionghoa, Arab, India - Pedagang Perantara)</text>
      <!-- Dasar: Golongan III (Pribumi) -->
      <polygon points="105,115 315,115 365,160 55,160" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
      <text x="210" y="137" font-size="11" font-weight="extrabold" fill="#991b1b" text-anchor="middle">GOLONGAN III: BUMIPUTERA / PRIBUMI</text>
      <text x="210" y="152" font-size="8.5" fill="#b91c1c" text-anchor="middle">(Rakyat Indonesia / Inlander - Lapisan Paling Bawah)</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Menempati kasta paling bawah (Golongan III) dengan beban kerja berat dan perlindungan hukum paling lemah' },
      { id: 'B', text: 'Menempati kasta tertinggi yang memegang kendali pemerintahan dan hukum di Hindia Belanda' },
      { id: 'C', text: 'Menempati posisi menengah khusus sebagai pedagang perantara dan pemungut pajak' },
      { id: 'D', text: 'Menduduki hak istimewa yang setara secara hukum dan pendidikan dengan bangsa Eropa' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dalam stratifikasi sosial kolonial Hindia Belanda, bangsa Eropa berada di puncak (Golongan I), bangsa Timur Asing di tengah (Golongan II), dan rakyat pribumi (inlander) ditempatkan di lapisan terbawah (Golongan III) dengan beban pajak dan diskriminasi hukum paling berat.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Kondisi Ekonomi & Pendidikan - Kerja Rodi & Dualisme Sekolah',
    difficulty: 'Sukar',
    text: 'Perhatikan narasi sejarah masa kolonial berikut!\n\nPada masa Gubernur Jenderal Daendels (1808–1811), ribuan rakyat Jawa dipaksa bekerja tanpa upah (kerja rodi) membangun Jalan Raya Pos Anyer–Panarukan sepanjang kurang lebih 1.000 km yang memakan banyak korban jiwa. Sementara dalam bidang pendidikan, Belanda menerapkan sistem dualisme diskriminatif: sekolah ELS khusus bagi anak Eropa, sekolah HIS bagi anak bangsawan pribumi, dan Sekolah Ongko Loro bagi rakyat jelata.\n\nTujuan utama pemerintah kolonial Belanda mendirikan sekolah bagi kalangan pribumi pada akhir abad ke-19 adalah...',
    imageSvg: `<svg viewBox="0 0 420 170" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="170" fill="#f8fafc" rx="10" stroke="#cbd5e1"/>
      <!-- Jalur Anyer Panarukan Daendels -->
      <line x1="40" y1="50" x2="380" y2="50" stroke="#94a3b8" stroke-dasharray="8 4" stroke-width="3"/>
      <circle cx="50" cy="50" r="7" fill="#ef4444"/>
      <text x="50" y="70" font-size="9" font-weight="bold" fill="#991b1b" text-anchor="middle">Anyer</text>
      <circle cx="370" cy="50" r="7" fill="#ef4444"/>
      <text x="370" y="70" font-size="9" font-weight="bold" fill="#991b1b" text-anchor="middle">Panarukan</text>
      <text x="210" y="38" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Jalan Raya Pos 1.000 KM (Kerja Rodi)</text>
      <!-- Dualisme Sekolah Kolonial -->
      <rect x="35" y="90" width="105" height="62" rx="6" fill="#fef9c3" stroke="#eab308"/>
      <text x="87" y="112" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">ELS</text>
      <text x="87" y="128" font-size="8" fill="#713f12" text-anchor="middle">Khusus Anak Eropa</text>
      <rect x="155" y="90" width="110" height="62" rx="6" fill="#dbeafe" stroke="#3b82f6"/>
      <text x="210" y="112" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">HIS</text>
      <text x="210" y="128" font-size="8" fill="#1e3a8a" text-anchor="middle">Anak Bangsawan/Priyayi</text>
      <rect x="280" y="90" width="110" height="62" rx="6" fill="#fee2e2" stroke="#ef4444"/>
      <text x="335" y="112" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">Sekolah Desa</text>
      <text x="335" y="128" font-size="8" fill="#7f1d1d" text-anchor="middle">Ongko Loro (3 Tahun)</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Mencetak tenaga juru tulis dan pegawai rendahan yang bisa membaca dan berhitung dengan upah gaji murah' },
      { id: 'B', text: 'Mencerdaskan seluruh rakyat Indonesia agar mampu memimpin bangsa sendiri dengan mandiri' },
      { id: 'C', text: 'Mempersiapkan kemerdekaan Republik Indonesia secara terencana dan bermartabat' },
      { id: 'D', text: 'Mendorong rakyat pribumi mendirikan pabrik industri senjata modern di Indonesia' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sekolah bumiputera yang dibuka pemerintah kolonial Belanda pada masa Politik Etis pada dasarnya bukan untuk memajukan bangsa, melainkan untuk memenuhi kebutuhan tenaga administrasi dan juru tulis rendahan di perkebunan dan kantor kolonial yang dibayar sangat murah.',
  },

  // =========================================================================
  // BAGIAN II: PILIHAN GANDA KOMPLEKS (5 BUTIR SOAL: NO. 11 - 15)
  // Siswa dapat memilih lebih dari 1 pilihan jawaban benar.
  // =========================================================================
  {
    id: 11,
    type: 'pgk',
    topic: 'Penjelajahan Samudra - Faktor Pendorong Ilmu Pengetahuan & Navigasi',
    difficulty: 'Sedang',
    text: 'Perhatikan stimulus penemuan ilmu pengetahuan dan teknologi maritim berikut!\n\nPenjelajahan samudra bangsa-bangsa Eropa pada abad ke-15 hingga ke-16 tidak terlepas dari pesatnya perkembangan ilmu pengetahuan dan penemuan teknologi maritim.\n\nManakah dari pernyataan berikut yang merupakan faktor penemuan teknologi dan pemikiran ilmu pengetahuan yang mendorong bangsa Eropa mampu berlayar melintasi samudra luas? (Pilihlah lebih dari satu jawaban yang benar!)',
    imageSvg: `<svg viewBox="0 0 420 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="160" fill="#f8fafc" rx="10" stroke="#cbd5e1"/>
      <!-- Kompas Magnetik -->
      <rect x="25" y="25" width="115" height="110" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
      <circle cx="82" cy="65" r="24" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <polygon points="82,45 87,65 82,60 77,65" fill="#ef4444"/>
      <polygon points="82,85 87,65 82,70 77,65" fill="#0284c7"/>
      <text x="82" y="112" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">Kompas Magnetik</text>
      <text x="82" y="125" font-size="8.5" fill="#64748b" text-anchor="middle">Penunjuk Arah Mata Angin</text>
      <!-- Kapal Karavel -->
      <rect x="152" y="25" width="115" height="110" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
      <path d="M170 85 L250 85 L240 100 L180 100 Z" fill="#78350f"/>
      <line x1="210" y1="45" x2="210" y2="85" stroke="#451a03" stroke-width="2"/>
      <path d="M210 50 Q230 65 210 80 Z" fill="#ffffff" stroke="#94a3b8"/>
      <text x="210" y="112" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">Kapal Karavel</text>
      <text x="210" y="125" font-size="8.5" fill="#64748b" text-anchor="middle">Mampu Lawan Angin</text>
      <!-- Teori Heliosentris Copernicus -->
      <rect x="280" y="25" width="115" height="110" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
      <circle cx="337" cy="65" r="12" fill="#f59e0b"/>
      <ellipse cx="337" cy="65" rx="26" ry="12" fill="none" stroke="#94a3b8" stroke-dasharray="3 2"/>
      <circle cx="360" cy="65" r="4" fill="#0284c7"/>
      <text x="337" y="112" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">Bumi Bulat</text>
      <text x="337" y="125" font-size="8.5" fill="#64748b" text-anchor="middle">Teori Heliosentris</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Ditemukannya kompas magnetik sebagai penunjuk arah mata angin di tengah lautan lepas' },
      { id: 'B', text: 'Diciptakannya kapal karavel dengan layar segitiga yang mampu berlayar menentang arah angin' },
      { id: 'C', text: 'Berkembangnya keyakinan teori Heliosentris (Copernicus) bahwa bentuk bumi itu bulat' },
      { id: 'D', text: 'Ditemukannya mesin pesawat terbang bermesin uap yang dapat memantau perairan samudra dari udara' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Faktor teknologi dan ilmu pengetahuan pendorong penjelajahan samudra adalah penemuan kompas magnetik, perahu karavel yang tangguh mengarungi ombak besar, dan pemikiran ilmiah bahwa bumi itu bulat (sehingga berlayar ke arah barat akan tembus ke timur). Pesawat terbang belum ditemukan pada masa itu.',
  },
  {
    id: 12,
    type: 'pgk',
    topic: 'Penjelajahan Samudra & VOC - Hak-Hak Istimewa (Hak Octrooi)',
    difficulty: 'Sedang',
    text: 'Pada tahun 1602, pemerintah Belanda mendirikan Vereenigde Oostindische Compagnie (VOC) untuk mencegah persaingan antarpedagang Belanda dan memonopoli perdagangan rempah-rempah di Nusantara. Oleh Parlemen Belanda, VOC diberi hak-hak istimewa luar biasa yang disebut "Hak Octrooi".\n\nManakah di antara wewenang berikut yang termasuk dalam Hak Octrooi VOC? (Pilihlah lebih dari satu jawaban yang benar!)',
    imageSvg: `<svg viewBox="0 0 420 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="160" fill="#f8fafc" rx="10" stroke="#cbd5e1"/>
      <!-- Lambang VOC Monogram -->
      <rect x="25" y="30" width="110" height="100" rx="8" fill="#1e293b"/>
      <circle cx="80" cy="70" r="32" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>
      <text x="80" y="78" font-size="22" font-weight="extrabold" fill="#fbbf24" text-anchor="middle">VOC</text>
      <text x="80" y="118" font-size="8.5" fill="#e2e8f0" text-anchor="middle">Berdiri 1602</text>
      <!-- Kartu Hak Octrooi -->
      <rect x="150" y="25" width="245" height="110" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="165" y="48" font-size="11" font-weight="bold" fill="#0f172a">HAK OCTROOI (HAK ISTIMEWA)</text>
      <text x="165" y="68" font-size="9" fill="#334155">• Hak monopoli perdagangan rempah</text>
      <text x="165" y="85" font-size="9" fill="#334155">• Hak mencetak dan mengedarkan uang sendiri</text>
      <text x="165" y="102" font-size="9" fill="#334155">• Hak memelihara angkatan perang sendiri</text>
      <text x="165" y="119" font-size="9" fill="#334155">• Hak menyatakan perang dan damai</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Hak untuk memonopoli seluruh perdagangan rempah-rempah di wilayah Nusantara' },
      { id: 'B', text: 'Hak untuk membentuk dan memiliki angkatan perang serta mendirikan benteng pertahanan sendiri' },
      { id: 'C', text: 'Hak untuk mencetak dan mengedarkan mata uang sendiri di wilayah jajahannya' },
      { id: 'D', text: 'Hak untuk menghapus seluruh agama lokal dan mewajibkan seluruh rakyat masuk sekolah Belanda' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Hak Octrooi VOC meliputi: hak monopoli dagang, hak mencetak uang sendiri, hak membentuk angkatan perang, mendirikan benteng, serta menyatakan perang dan perjanjian damai layaknya sebuah negara berdaulat. VOC tidak memiliki hak menghapus agama lokal.',
  },
  {
    id: 13,
    type: 'pgk',
    topic: 'Sistem Tanam Paksa - Penyebab Kelaparan & Cultuurprocenten',
    difficulty: 'Sukar',
    text: 'Sistem Tanam Paksa (Cultuurstelsel) menyebabkan penderitaan fisik, kemiskinan mendalam, serta bencana kelaparan hebat bagi rakyat Indonesia, terutama di Cirebon, Demak, dan Grobogan.\n\nFaktor-faktor yang menyebabkan penderitaan hebat rakyat tersebut adalah... (Pilihlah lebih dari satu jawaban yang benar!)',
    imageSvg: `<svg viewBox="0 0 420 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="160" fill="#f8fafc" rx="10" stroke="#cbd5e1"/>
      <rect x="25" y="25" width="370" height="110" rx="8" fill="#fef2f2" stroke="#f87171" stroke-width="1.5"/>
      <text x="210" y="48" font-size="12" font-weight="extrabold" fill="#991b1b" text-anchor="middle">DAMPAK CULTUURSTELSELS BAGI RAKYAT</text>
      <text x="45" y="72" font-size="9.5" fill="#7f1d1d">• Para pejabat tergiur bonus cultuurprocenten sehingga menekan rakyat tanpa batas</text>
      <text x="45" y="92" font-size="9.5" fill="#7f1d1d">• Petani bekerja melebihi waktu tanam padi demi menyelesaikan tanaman nila &amp; tebu</text>
      <text x="45" y="112" font-size="9.5" fill="#7f1d1d">• Kegagalan panen yang diakibatkan kekeringan tetap dibebankan ganti rugi kepada petani</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Adanya sistem "cultuurprocenten" (bonus uang bagi bupati dan pejabat kolonial yang berhasil menyetor hasil panen ekspor melampaui target)' },
      { id: 'B', text: 'Tenaga dan waktu petani terkuras habis untuk mengurus tanaman wajib sehingga sawah padi terbengkalai' },
      { id: 'C', text: 'Kerusakan dan kegagalan panen yang seharusnya ditanggung Belanda dalam praktiknya dibebankan kepada rakyat' },
      { id: 'D', text: 'Pemerintah Belanda membagikan emas secara cuma-cuma sehingga rakyat malas bekerja' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Penyebab penderitaan hebat rakyat adalah sistem cultuurprocenten yang membuat para pejabat berlomba-lomba memeras rakyat, tersitanya waktu petani hingga padi terbengkalai, dan beban ganti rugi gagal panen yang tetap ditimpakan kepada petani.',
  },
  {
    id: 14,
    type: 'pgk',
    topic: 'Politik Etis - Dampak Program Edukatie bagi Kebangkitan Nasional',
    difficulty: 'Sukar',
    text: 'Meskipun awalnya pemerintah kolonial Belanda membuka sekolah-sekolah hanya untuk memperoleh tenaga juru tulis dan pegawai murah, kebijakan "Edukatie" (pendidikan) dalam Politik Etis justru menjadi "bumerang" (senjata makan tuan) bagi penjajah Belanda.\n\nDampak positif keberadaan sekolah tersebut bagi perjuangan kemerdekaan bangsa Indonesia adalah... (Pilihlah lebih dari satu jawaban yang benar!)',
    imageSvg: `<svg viewBox="0 0 420 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="160" fill="#f8fafc" rx="10" stroke="#cbd5e1"/>
      <!-- Alur Edukatie Kolonial -->
      <rect x="25" y="30" width="115" height="100" rx="8" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
      <text x="82" y="55" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">EDUKATIE</text>
      <text x="82" y="75" font-size="8.5" fill="#0c4a6e" text-anchor="middle">Membuka Sekolah</text>
      <text x="82" y="90" font-size="8.5" fill="#0c4a6e" text-anchor="middle">HIS, MULO, STOVIA</text>
      <text x="82" y="112" font-size="8" fill="#0284c7" text-anchor="middle">Tujuan: Pegawai Murah</text>
      <!-- Panah Transformasi -->
      <path d="M150 80 L185 80" stroke="#475569" stroke-width="3"/>
      <polygon points="190,80 180,74 180,86" fill="#475569"/>
      <!-- Hasil Kaum Terpelajar & Kebangkitan -->
      <rect x="195" y="25" width="200" height="110" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <text x="295" y="48" font-size="11" font-weight="extrabold" fill="#065f46" text-anchor="middle">LAHIR KAUM TERPELAJAR</text>
      <text x="210" y="70" font-size="9" fill="#047857">• Terbentuk kesadaran persatuan nasional</text>
      <text x="210" y="88" font-size="9" fill="#047857">• Lahir Budi Utomo (1908) di STOVIA</text>
      <text x="210" y="106" font-size="9" fill="#047857">• Perjuangan berganti lewat diplomasi modern</text>
      <text x="210" y="124" font-size="8.5" font-weight="bold" fill="#065f46">• Menjadi Bumerang Bagi Belanda</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Melahirkan golongan cendekiawan / kaum terpelajar yang menyadari penindasan dan pentingnya persatuan nasional' },
      { id: 'B', text: 'Mendorong berdirinya organisasi-organisasi pergerakan nasional modern seperti Budi Utomo (1908) oleh para pemuda STOVIA' },
      { id: 'C', text: 'Mengubah strategi perjuangan bangsa yang awalnya bersifat kedaerahan bersenjata menjadi perjuangan diplomasi dan organisasi modern' },
      { id: 'D', text: 'Membuat seluruh rakyat Indonesia tunduk dan selamanya bersedia setia melayani Kerajaan Belanda' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Program edukasi melahirkan kaum terpelajar yang berpikir maju. Tokoh-tokoh seperti Dr. Soetomo dan mahasiswa STOVIA kemudian mendirikan Budi Utomo (1908), mengubah cara berjuang dari fisik kedaerahan menjadi organisasi modern demi kemerdekaan.',
  },
  {
    id: 15,
    type: 'pgk',
    topic: 'Kondisi Budaya & Bahasa - Akulturasi Peninggalan Masa Kolonial',
    difficulty: 'Sedang',
    text: 'Masa penjajahan Belanda selama berabad-abad meninggalkan jejak akulturasi dalam berbagai aspek kehidupan bangsa Indonesia, termasuk dalam bahasa, kuliner, dan arsitektur.\n\nManakah dari pernyataan berikut yang merupakan bukti nyata pengaruh peninggalan masa kolonial Belanda dalam bahasa dan budaya Indonesia saat ini? (Pilihlah lebih dari satu jawaban yang benar!)',
    imageSvg: `<svg viewBox="0 0 420 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="160" fill="#f8fafc" rx="10" stroke="#cbd5e1"/>
      <!-- Kosakata Serapan Belanda -->
      <rect x="25" y="25" width="175" height="110" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="112" y="48" font-size="10.5" font-weight="bold" fill="#1d4ed8" text-anchor="middle">KOSAKATA SERAPAN</text>
      <text x="40" y="68" font-size="9" fill="#334155">• Kantor (Kantoor)</text>
      <text x="40" y="85" font-size="9" fill="#334155">• Kulkas (Koelkast)</text>
      <text x="40" y="102" font-size="9" fill="#334155">• Handuk (Handdoek)</text>
      <text x="40" y="119" font-size="9" fill="#334155">• Kamar (Kamer), Sekolah, dsb</text>
      <!-- Kuliner & Bangunan -->
      <rect x="220" y="25" width="175" height="110" rx="8" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="307" y="48" font-size="10.5" font-weight="bold" fill="#b45309" text-anchor="middle">KULINER &amp; ARSITEKTUR</text>
      <text x="235" y="68" font-size="9" fill="#334155">• Perkedel (Frikadel)</text>
      <text x="235" y="85" font-size="9" fill="#334155">• Klappertaart &amp; Kastengel</text>
      <text x="235" y="102" font-size="9" fill="#334155">• Bangunan beratap tinggi &amp; jendela lebar</text>
      <text x="235" y="119" font-size="9" fill="#334155">(Gaya Arsitektur Indis)</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Banyaknya kosakata serapan bahasa Belanda dalam bahasa Indonesia sehari-hari, seperti: kantor, kulkas, handuk, kamar, dan buku' },
      { id: 'B', text: 'Pengaruh kuliner akulturasi seperti kue klappertaart, perkedel (frikadel), selat solo, dan kastengel' },
      { id: 'C', text: 'Gaya arsitektur bangunan kuno beratap tinggi, dinding tebal, dan jendela ventilasi besar (gaya arsitektur Indis)' },
      { id: 'D', text: 'Kewajiban seluruh anak sekolah di Indonesia saat ini untuk menggunakan bahasa Belanda sebagai bahasa pengantar resmi' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Pengaruh Belanda tampak pada kata serapan (kantor, kulkas, handuk, arloji), kuliner (perkedel, kastengel, klappertaart), dan arsitektur peninggalan gedung tua. Bahasa Belanda tidak menjadi bahasa pengantar wajib saat ini.',
  },

  // =========================================================================
  // BAGIAN III: PGK KATEGORI BENAR/SALAH (5 BUTIR SOAL: NO. 16 - 20)
  // Siswa merespon serangkaian pernyataan dengan pilihan Benar/Salah atau Sesuai/Tidak Sesuai
  // =========================================================================
  {
    id: 16,
    type: 'pgk_kategori',
    topic: 'Penjelajahan Samudra - Tokoh Pelayaran Bangsa Eropa',
    difficulty: 'Mudah',
    categoryType: 'benar_salah',
    text: 'Tentukan apakah pernyataan mengenai tokoh dan rute penjelajahan samudra bangsa Eropa ke dunia timur berikut Benar atau Salah!',
    statements: [
      {
        id: 's1',
        text: 'Vasco da Gama adalah pelaut asal Portugis yang berhasil menemukan jalur laut langsung ke Kalikut (India) dengan menyusuri pantai barat dan selatan Afrika.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Ferdinand Magellan dan Juan Sebastian Elcano memimpin armada Spanyol yang pertama kali berhasil mengelilingi dunia dan tiba di Kepulauan Maluku pada tahun 1521.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Cornelis de Houtman pertama kali mendarat di Kepulauan Raja Ampat Papua untuk memonopoli tambang emas.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 dan 2 Benar. Pernyataan 3 Salah karena Cornelis de Houtman mendarat pertama kali di Pelabuhan Banten (Jawa Barat) pada tahun 1596, bukan di Raja Ampat Papua.',
  },
  {
    id: 17,
    type: 'pgk_kategori',
    topic: 'Sistem Tanam Paksa - Kebijakan & Dampak Batig Slot',
    difficulty: 'Sedang',
    categoryType: 'sesuai_tidak',
    text: 'Tentukan apakah pernyataan mengenai pelaksanaan dan dampak finansial sistem Tanam Paksa (Cultuurstelsel) berikut Sesuai atau Tidak Sesuai dengan fakta sejarah!',
    statements: [
      {
        id: 's1',
        text: 'Sistem Tanam Paksa menghasilkan keuntungan raksasa bagi Belanda yang disebut "Batig Slot", sehingga kas Kerajaan Belanda menjadi surplus dan mampu melunasi seluruh hutang negaranya.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Di lapangan, jika hasil panen tanaman wajib melebihi nilai pajak tanah, kelebihan uang hasil panen tersebut selalu dikembalikan secara jujur dan utuh kepada petani.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Tanaman nila (tarum) dan tebu memerlukan banyak air dan waktu pengolahan yang panjang, sehingga mengakibatkan petani pribumi kehabisan waktu untuk merawat sawah padinya.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Sesuai (Batig Slot menghasilkan surplus dana besar bagi Belanda). Pernyataan 2 Tidak Sesuai karena kelebihan hasil panen hampir tidak pernah dikembalikan ke petani, melainkan diambil oleh pejabat kolonial. Pernyataan 3 Sesuai.',
  },
  {
    id: 18,
    type: 'pgk_kategori',
    topic: 'Politik Etis - Kritik Humaniter Buku Max Havelaar & Multatuli',
    difficulty: 'Sedang',
    categoryType: 'benar_salah',
    text: 'Tentukan apakah pernyataan terkait kritik tajam terhadap kekejaman penjajahan Belanda berikut Benar atau Salah!',
    statements: [
      {
        id: 's1',
        text: 'Eduard Douwes Dekker menggunakan nama samaran "Multatuli" yang memiliki arti mendalam: "Aku telah banyak menderita".',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Buku novel "Max Havelaar" terbit pada tahun 1860 dan berhasil membongkar kekejaman serta pemerasan bupati dan pejabat Belanda terhadap rakyat kecil di Lebak, Banten.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Pemerintah Kerajaan Belanda langsung memberikan kemerdekaan penuh bagi Indonesia seketika novel Max Havelaar selesai diterbitkan di Amsterdam.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 dan 2 Benar. Pernyataan 3 Salah karena penerbitan buku Max Havelaar memicu perdebatan politik etis dan penghapusan tanam paksa bertahap, namun Belanda tidak memberikan kemerdekaan kepada Indonesia.',
  },
  {
    id: 19,
    type: 'pgk_kategori',
    topic: 'Politik Etis - Analisis Tiga Program Trias Van Deventer',
    difficulty: 'Sedang',
    categoryType: 'sesuai_tidak',
    text: 'Tentukan apakah deskripsi implementasi ketiga program Politik Etis (Trias Van Deventer) berikut Sesuai atau Tidak Sesuai dengan kenyataan sejarah!',
    statements: [
      {
        id: 's1',
        text: 'Program Emigratie (transmigrasi) yang awalnya bertujuan memindahkan penduduk pulau Jawa yang padat ke luar Jawa pada kenyataannya dimanfaatkan Belanda untuk menyediakan kuli kontrak berupah murah di perkebunan Deli, Sumatra Timur.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Program Irrigatie (irigasi) berhasil membagi air secara adil dan merata sehingga sawah petani pribumi lebih subur daripada perkebunan tebu pengusaha Belanda.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Program Edukatie (pendidikan) membuka kesempatan bagi anak-anak pribumi untuk mengenyam pendidikan formal meskipun sistem pendidikannya masih dibeda-bedakan berdasarkan status sosial keturunan.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Sesuai (emigrasi dijadikan sarana mencari kuli kontrak murah di Deli). Pernyataan 2 Tidak Sesuai (irigasi diutamakan untuk perkebunan Belanda). Pernyataan 3 Sesuai.',
  },
  {
    id: 20,
    type: 'pgk_kategori',
    topic: 'Kondisi Sosial & Pendidikan - Stratifikasi Kolonial & STOVIA',
    difficulty: 'Sukar',
    categoryType: 'benar_salah',
    text: 'Tentukan apakah pernyataan terkait kondisi masyarakat dan pendidikan pada masa Hindia Belanda berikut Benar atau Salah!',
    statements: [
      {
        id: 's1',
        text: 'Warga keturunan Tionghoa dan Arab dikelompokkan oleh Belanda ke dalam Golongan Timur Asing (Vreemde Oosterlingen) yang sebagian besar berprofesi sebagai pedagang perantara.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'STOVIA (School tot Opleiding van Inlandsche Artsen) adalah sekolah kedokteran untuk anak-anak pribumi yang siswanya kemudian menjadi perintis berdirinya Budi Utomo tahun 1908.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Anak-anak rakyat jelata pribumi di pedesaan bebas bersekolah di ELS (Europeesche Lagere School) tanpa memandang status keturunan dan kemampuan bahasa Belanda.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 dan 2 Benar. Pernyataan 3 Salah karena ELS hanya diperuntukkan bagi anak-anak bangsa Eropa dan kalangan bangsawan tinggi bumiputera yang mahir bahasa Belanda.',
  },

  // =========================================================================
  // BAGIAN IV: MENJODOHKAN (5 BUTIR SOAL: NO. 21 - 25)
  // Setiap butir memuat 4 pasangan premis (kiri) dan pilihan (kanan).
  // =========================================================================
  {
    id: 21,
    type: 'menjodohkan',
    topic: 'Penjelajahan Samudra - Tokoh Pelaut & Rute/Prestasinya',
    difficulty: 'Sedang',
    text: 'Jodohkanlah nama tokoh penjelajah samudra bangsa Eropa di kolom kiri dengan rute pelayaran atau daerah penaklukannya di Nusantara pada kolom kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Afonso de Albuquerque (Portugis)',
        match: 'Menaklukkan Malaka (1511) dan tiba di Maluku (1512)',
      },
      {
        id: 'm2',
        premise: 'Cornelis de Houtman (Belanda)',
        match: 'Mendarat pertama kali di Pelabuhan Banten (1596)',
      },
      {
        id: 'm3',
        premise: 'Ferdinand Magellan & Elcano (Spanyol)',
        match: 'Mengelilingi bumi dan mendarat di Tidore Maluku (1521)',
      },
      {
        id: 'm4',
        premise: 'Vasco da Gama (Portugis)',
        match: 'Menemukan rute laut menyusuri Afrika hingga Kalikut India',
      },
    ],
    explanation:
      'Afonso de Albuquerque menaklukkan Malaka dan mengirim armada ke Maluku; Cornelis de Houtman memimpin ekspedisi Belanda ke Banten (1596); Magellan & Elcano berlayar mengelilingi dunia atas nama Spanyol hingga Tidore; Vasco da Gama menemukan rute laut Afrika ke India.',
  },
  {
    id: 22,
    type: 'menjodohkan',
    topic: 'Sistem Kolonial & VOC - Istilah Kebijakan Kolonial Belanda',
    difficulty: 'Mudah',
    text: 'Jodohkanlah istilah atau nama kebijakan pemerintah kolonial di kolom kiri dengan pengertian atau deskripsi yang tepat pada kolom kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Hak Octrooi',
        match: 'Hak istimewa VOC untuk mencetak uang, memiliki tentara, dan memonopoli dagang',
      },
      {
        id: 'm2',
        premise: 'Cultuurstelsel',
        match: 'Sistem kewajiban menanam tanaman komoditas ekspor bagi petani Jawa (1830)',
      },
      {
        id: 'm3',
        premise: 'Batig Slot',
        match: 'Surplus keuntungan kas Kerajaan Belanda hasil dari sistem Tanam Paksa',
      },
      {
        id: 'm4',
        premise: 'Kerja Rodi',
        match: 'Sistem kerja paksa tanpa upah untuk membangun infrastruktur jalan Daendels',
      },
    ],
    explanation:
      'Hak Octrooi adalah hak istimewa parlemen Belanda kepada VOC; Cultuurstelsel adalah Tanam Paksa (1830); Batig Slot adalah keuntungan berlebih kas Belanda; Kerja Rodi adalah kerja paksa tanpa upah.',
  },
  {
    id: 23,
    type: 'menjodohkan',
    topic: 'Politik Etis - Tiga Pilar Trias Van Deventer & Realitasnya',
    difficulty: 'Sedang',
    text: 'Jodohkanlah program Trias Van Deventer di kolom kiri dengan fakta penyimpangan atau realitas penerapannya di lapangan pada kolom kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Program Irrigatie (Irigasi)',
        match: 'Saluran air hanya mengalir ke perkebunan tebu/tembakau pengusaha Belanda',
      },
      {
        id: 'm2',
        premise: 'Program Emigratie (Transmigrasi)',
        match: 'Warga dipindahkan untuk menjadi kuli kontrak berupah murah di luar Jawa',
      },
      {
        id: 'm3',
        premise: 'Program Edukatie (Pendidikan)',
        match: 'Ditujukan mencetak tenaga juru tulis rendahan yang murah bagi kantor kolonial',
      },
      {
        id: 'm4',
        premise: 'Artikel "Een Eereschuld"',
        match: 'Gagasan moral Van Deventer bahwa Belanda berhutang budi pada rakyat Hindia',
      },
    ],
    explanation:
      'Irigasi menyimpang untuk perkebunan Belanda; Emigrasi menyimpang untuk buruh kuli kontrak di Deli; Edukasi awalnya demi pegawai murah; Een Eereschuld adalah tulisan yang melandasi Politik Etis.',
  },
  {
    id: 24,
    type: 'menjodohkan',
    topic: 'Kondisi Sosial & Sekolah - Kasta Golongan & Lembaga Pendidikan',
    difficulty: 'Sedang',
    text: 'Jodohkanlah golongan masyarakat dan nama sekolah kolonial di kolom kiri dengan kelompok siswa atau deskripsinya pada kolom kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Golongan Eropa',
        match: 'Lapisan kasta tertinggi pemegang kekuasaan hukum dan pemerintahan kolonial',
      },
      {
        id: 'm2',
        premise: 'Golongan Timur Asing',
        match: 'Masyarakat keturunan Tionghoa, Arab, dan India sebagai pedagang perantara',
      },
      {
        id: 'm3',
        premise: 'HIS (Hollandsch-Inlandsche School)',
        match: 'Sekolah dasar untuk anak-anak bumiputera kalangan bangsawan dan priyayi',
      },
      {
        id: 'm4',
        premise: 'STOVIA (Batavia)',
        match: 'Sekolah kedokteran bumiputera yang melahirkan tokoh perintis kebangkitan nasional',
      },
    ],
    explanation:
      'Golongan Eropa berada di lapisan I; Golongan Timur Asing di lapisan II; HIS adalah sekolah dasar khusus keturunan priyayi; STOVIA adalah sekolah dokter jawa tempat lahirnya pergerakan Budi Utomo.',
  },
  {
    id: 25,
    type: 'menjodohkan',
    topic: 'Sistem Tanam Paksa - Komoditas Ekspor & Kegunaannya',
    difficulty: 'Sedang',
    text: 'Jodohkanlah nama komoditas tanaman wajib ekspor Tanam Paksa di kolom kiri dengan hasil olahan atau kegunaan utamanya di Eropa pada kolom kanan!',
    matchingPairs: [
      {
        id: 'm1',
        premise: 'Nila (Tarum / Indigo)',
        match: 'Bahan zat pewarna alami biru untuk industri tekstil kain di Eropa',
      },
      {
        id: 'm2',
        premise: 'Tebu (Suiker)',
        match: 'Diolah di pabrik menjadi gula pasir konsumsi bernilai jual tinggi',
      },
      {
        id: 'm3',
        premise: 'Kopi (Koffie)',
        match: 'Komoditas minuman wajib ekspor di dataran tinggi pegunungan Jawa',
      },
      {
        id: 'm4',
        premise: 'Tembakau (Tabak)',
        match: 'Daun komersial bahan baku cerutu dan rokok kualitas ekspor dunia',
      },
    ],
    explanation:
      'Nila menghasilkan zat pewarna biru pakaian industri Eropa; Tebu menghasilkan gula; Kopi ditanam di lereng pegunungan; Tembakau diekspor untuk bahan cerutu.',
  },

  // =========================================================================
  // BAGIAN V: ISIAN SINGKAT (5 BUTIR SOAL: NO. 26 - 30)
  // Setiap butir bernilai skor 1 (Total skor Isian = 5)
  // =========================================================================
  {
    id: 26,
    type: 'isian',
    topic: 'Penjelajahan Samudra - Semboyan 3G',
    difficulty: 'Mudah',
    text: 'Tiga semboyan yang menjadi motivasi utama bangsa-bangsa Eropa melakukan penjelajahan samudra dan penjajahan ke benua Asia, Afrika, dan Amerika dikenal dengan singkatan semboyan...',
    acceptedAnswers: ['3G', '3 G', 'Gold Glory Gospel', 'Gold, Glory, Gospel'],
    explanation:
      'Semboyan yang melandasi penjelajahan samudra bangsa Eropa adalah semboyan 3G (Gold, Glory, Gospel).',
  },
  {
    id: 27,
    type: 'isian',
    topic: 'Penjelajahan Samudra - Kongsi Dagang VOC',
    difficulty: 'Mudah',
    text: 'Kongsi dagang Hindia Timur Belanda yang didirikan pada tanggal 20 Maret 1602 untuk memonopoli perdagangan rempah-rempah di Nusantara dikenal dengan singkatan...',
    acceptedAnswers: ['VOC', 'V.O.C', 'V.O.C.'],
    explanation:
      'VOC adalah singkatan dari Vereenigde Oostindische Compagnie, kongsi dagang Belanda yang memonopoli rempah-rempah di Indonesia dari tahun 1602 hingga dibubarkan tahun 1799.',
  },
  {
    id: 28,
    type: 'isian',
    topic: 'Sistem Tanam Paksa - Gubernur Jenderal Pencetus',
    difficulty: 'Mudah',
    text: 'Sistem Tanam Paksa (Cultuurstelsel) yang diberlakukan di Jawa pada tahun 1830 digagas oleh seorang Gubernur Jenderal Hindia Belanda bernama...',
    acceptedAnswers: [
      'Johannes van den Bosch',
      'Van den Bosch',
      'Van Den Bosch',
      'J. van den Bosch',
    ],
    explanation:
      'Gubernur Jenderal Johannes van den Bosch adalah tokoh pencetus sistem Tanam Paksa (Cultuurstelsel) pada tahun 1830.',
  },
  {
    id: 29,
    type: 'isian',
    topic: 'Politik Etis - Judul Buku Multatuli',
    difficulty: 'Mudah',
    text: 'Buku novel terkenal karya Eduard Douwes Dekker (Multatuli) yang terbit tahun 1860 dan membeberkan penderitaan rakyat akibat penindasan kolonial di Banten berjudul...',
    acceptedAnswers: ['Max Havelaar', 'Max havelaar', 'max havelaar'],
    explanation:
      'Buku Max Havelaar terbit tahun 1860 karya Eduard Douwes Dekker (nama pena Multatuli) membuka mata publik dunia tentang penderitaan rakyat pribumi di Lebak, Banten.',
  },
  {
    id: 30,
    type: 'isian',
    topic: 'Kondisi Pendidikan - Sekolah Kedokteran Budi Utomo',
    difficulty: 'Mudah',
    text: 'Sekolah kedokteran bumiputera di Batavia yang menjadi tempat bersejarah berkumpulnya para pemuda pendiri organisasi Budi Utomo pada 20 Mei 1908 adalah...',
    acceptedAnswers: ['STOVIA', 'Stovia', 'stovia'],
    explanation:
      'STOVIA (School tot Opleiding van Inlandsche Artsen) adalah sekolah dokter untuk pribumi yang melahirkan generasi perintis Kebangkitan Nasional 1908.',
  },

  // =========================================================================
  // BAGIAN VI: URAIAN (5 BUTIR SOAL: NO. 31 - 35)
  // Setiap butir bernilai skor maksimal 2 (Total skor Uraian = 10)
  // Total Skor Keseluruhan Tes = 10 + 5 + 5 + 5 + 5 + 10 = 40 Poin
  // =========================================================================
  {
    id: 31,
    type: 'uraian',
    topic: 'Penjelajahan Samudra - Pengaruh Jatuhnya Konstantinopel',
    difficulty: 'Sedang',
    maxScore: 2,
    text: 'Uraikan hubungan sebab-akibat antara peristiwa jatuhnya Kota Konstantinopel ke tangan Kesultanan Turki Utsmani pada tahun 1453 dengan dimulainya penjelajahan samudra bangsa-bangsa Eropa menuju kepulauan Nusantara!',
    keyPoints: [
      'Jatuhnya Konstantinopel (1453) memutus jalur perdagangan rempah-rempah Laut Tengah bagi pedagang Eropa',
      'Harga rempah-rempah di Eropa melonjak sangat mahal dan pasokan langka',
      'Bangsa Eropa terpaksa mencari rute laut alternatif langsung ke kepulauan penghasil rempah-rempah di dunia timur (Nusantara)',
    ],
    rubric:
      'Skor 2: Menyebutkan pemutusan jalur perdagangan Laut Tengah, mahalnya harga rempah-rempah, dan keharusan mencari sumber asli di Nusantara. Skor 1: Menyebutkan salah satu faktor tanpa menghubungkan sebab-akibat secara lengkap. Skor 0: Jawaban salah atau tidak diisi.',
    explanation:
      'Hubungan sebab-akibat: Konstantinopel sebelumnya adalah pasar utama rempah-rempah bagi Eropa. Ketika kota ini ditaklukkan Turki Utsmani (1453), pedagang Eropa dilarang berdagang dan pasokan rempah terputus. Karena rempah sangat dibutuhkan untuk pengawet makanan dan obat-obatan, bangsa Eropa (Portugis, Spanyol, Belanda) terpaksa mengarungi samudra mencari kepulauan Nusantara langsung.',
  },
  {
    id: 32,
    type: 'uraian',
    topic: 'Sistem Tanam Paksa - Analisis Kritis Bencana Kelaparan',
    difficulty: 'Sukar',
    maxScore: 2,
    text: 'Mengapa sistem Tanam Paksa (Cultuurstelsel) yang dalam aturan resminya tampak meringankan petani justru berubah menjadi bencana kemanusiaan dan kelaparan hebat bagi rakyat Jawa? Jelaskan minimal tiga bentuk penyimpangan praktiknya di lapangan!',
    keyPoints: [
      'Penyimpangan luas tanah: Mengambil lebih dari 1/5 bagian desa, bahkan mengambil tanah yang paling subur',
      'Penyimpangan waktu kerja: Petani dipaksa bekerja sepanjang tahun melebihi batas 66 hari hingga sawah padi terbengkalai',
      'Penyimpangan pajak dan panen: Petani tetap dipungut pajak tanah dan jika gagal panen tetap harus mengganti rugi',
      'Adanya sistem cultuurprocenten yang memicu pejabat kolonial dan bupati memeras rakyat demi bonus uang',
    ],
    rubric:
      'Skor 2: Menjelaskan alasan logis (cultuurprocenten) serta menyebutkan minimal 3 bentuk penyimpangan praktik di lapangan secara jelas. Skor 1: Menyebutkan 1–2 bentuk penyimpangan secara ringkas. Skor 0: Jawaban salah atau kosong.',
    explanation:
      'Tanam Paksa menjadi bencana karena dipicu sistem bonus cultuurprocenten. Penyimpangan di lapangan: (1) Lahan yang diambil melebihi 1/5 tanah desa dan memilih tanah tersubur, (2) Waktu kerja melampaui musim padi hingga tanaman pangan terbengkalai, (3) Petani tetap ditarik pajak tanah, dan (4) Beban gagal panen ditanggung rakyat sehingga terjadi kelaparan parah.',
  },
  {
    id: 33,
    type: 'uraian',
    topic: 'Politik Etis - Analisis Bumerang Program Edukatie',
    difficulty: 'Sukar',
    maxScore: 2,
    text: 'Kebijakan "Edukatie" (pendidikan) dalam Trias Van Deventer awalnya hanya ditujukan untuk mencetak juru tulis dan tenaga administrasi rendahan yang murah bagi pemerintah kolonial. Analisislah mengapa kebijakan pendidikan tersebut justru menjadi "bumerang" yang merugikan kekuasaan penjajah Belanda!',
    keyPoints: [
      'Pendidikan membuka wawasan dan pola pikir kritis kaum pribumi terhadap ketidakadilan penjajahan',
      'Lahirnya golongan terpelajar / cendekiawan (seperti dokter-dokter lulusan STOVIA)',
      'Terbentuknya kesadaran kebangsaan dan persatuan nasional menggantikan perjuangan kedaerahan',
      'Lahirnya organisasi modern (Budi Utomo, Sarekat Islam, dll.) yang menjadi awal pergerakan kemerdekaan',
    ],
    rubric:
      'Skor 2: Menganalisis secara komprehensif bahwa sekolah melahirkan kaum terpelajar yang sadar persatuan dan memimpin pergerakan nasional modern melawan penjajah. Skor 1: Menyebutkan lahirnya kaum pintar/terpelajar tanpa menjelaskan hubungannya dengan kebangkitan nasional. Skor 0: Salah atau tidak diisi.',
    explanation:
      'Kebijakan Edukatie menjadi bumerang karena anak-anak pribumi yang mengecap pendidikan (seperti siswa STOVIA) mulai memiliki wawasan luas tentang hak asasi dan nasionalisme. Mereka menyadari penderitaan bangsanya dan mendirikan organisasi modern seperti Budi Utomo (1908), sehingga perjuangan melawan Belanda berubah menjadi terorganisir dan berujung pada kemerdekaan Indonesia.',
  },
  {
    id: 34,
    type: 'uraian',
    topic: 'Kondisi Sosial & Hukum - Dampak Diskriminasi Tiga Golongan',
    difficulty: 'Sedang',
    maxScore: 2,
    text: 'Uraikan bagaimana pembagian stratifikasi sosial menjadi tiga golongan (Eropa, Timur Asing, dan Pribumi) pada masa Hindia Belanda memengaruhi ketidakadilan hak hukum, ekonomi, dan perlakuan sosial yang dialami oleh rakyat pribumi (inlander)!',
    keyPoints: [
      'Hak Hukum: Diberlakukan hukum terpisah, rakyat pribumi diadili di peradilan Landraad dengan hukuman jauh lebih berat dan tanpa pembelaan adil',
      'Hak Ekonomi: Pribumi dikenakan pajak paling banyak dan kerja paksa (rodi), sedangkan posisi perdagangan besar dikuasai Eropa dan Timur Asing',
      'Perlakuan Sosial: Pribumi dianggap warga kelas tiga, dilarang masuk ke tempat-tempat rekreasi atau fasilitas khusus orang kulit putih Eropa',
    ],
    rubric:
      'Skor 2: Menguraikan dampak diskriminasi dalam minimal dua bidang (hukum, ekonomi, atau sosial) dengan contoh konkret. Skor 1: Menjelaskan diskriminasi secara umum tanpa rincian bidang. Skor 0: Salah atau kosong.',
    explanation:
      'Dampaknya: (1) Bidang hukum: pribumi diadili di pengadilan yang diskriminatif dengan hukuman fisik berat, (2) Bidang ekonomi: pribumi menjadi buruh kasar pemikul pajak dan kerja rodi sedangkan perdagangan dikuasai golongan Eropa dan Timur Asing, (3) Bidang sosial: pribumi dipandang rendah dan dilarang menikmati fasilitas umum atau sekolah khusus Eropa.',
  },
  {
    id: 35,
    type: 'uraian',
    topic: 'Refleksi Sejarah & Nilai Profil Pelajar Pancasila',
    difficulty: 'Sukar',
    maxScore: 2,
    text: 'Penderitaan rakyat Indonesia akibat monopoli dagang VOC, kerja rodi Daendels, dan sistem Tanam Paksa telah membakar semangat perjuangan para pahlawan untuk bangkit bersatu. Petiklah minimal dua nilai keteladanan dari peristiwa sejarah tersebut yang relevan diterapkan oleh seorang Pelajar Pancasila di era sekarang!',
    keyPoints: [
      'Nilai Persatuan dan Kesatuan: Menjaga kerukunan di tengah perbedaan suku, agama, dan budaya di lingkungan sekolah (Berkebinekaan Global)',
      'Nilai Rela Berkorban dan Cinta Tanah Air: Belajar dengan sungguh-sungguh untuk memajukan bangsa dan menjaga kedaulatan Indonesia',
      'Nilai Kritis dan Cinta Keadilan: Berani membela kebenaran serta menentang penindasan atau bullying (Bernalar Kritis)',
      'Nilai Pantang Menyerah / Kemandirian: Tidak mudah putus asa menghadapi kesulitan belajar dan tantangan zaman',
    ],
    rubric:
      'Skor 2: Menyebutkan minimal 2 nilai keteladanan yang relevan dan mengaitkannya dengan sikap konkret Pelajar Pancasila. Skor 1: Menyebutkan nilai tetapi tanpa penjelasan sikap nyata. Skor 0: Salah atau tidak diisi.',
    explanation:
      'Nilai keteladanan yang relevan: (1) Cinta Tanah Air dan Rela Berkorban: belajar giat dan berprestasi agar bangsa Indonesia tidak dijajah kembali secara ekonomi dan teknologi di era modern, (2) Persatuan dan Kesatuan: menghargai perbedaan teman serta tidak membedakan suku/kasta sebagaimana cermin dari Pelajar Pancasila yang berintegritas.',
  },
];
