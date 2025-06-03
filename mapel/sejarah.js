const materi = {
  judul: "SEJARAH: Kedatangan Jepang ke Indonesia dan Perjuangan Kemerdekaan",
  deskripsi: `Materi ini membahas kedatangan Jepang ke Indonesia, dampak penjajahan Jepang, perlawanan rakyat Indonesia, serta peristiwa-peristiwa penting menjelang dan sesudah proklamasi kemerdekaan Indonesia.
  
    **KEDATANGAN JEPANG KE INDONESIA**:
    Jepang masuk ke Indonesia sebagai bagian dari ekspansi militer di Asia Tenggara dalam Perang Dunia II. Kedatangan Jepang disambut beragam oleh rakyat Indonesia.

    **STRUKTUR PEMERINTAHAN JEPANG**:
    - Rikugun: Tentara darat Jepang
    - Kaigun: Tentara laut Jepang  
    - Osamu Seirei: Peraturan pemerintahan militer
    - Gunshriken: Daerah kekuasaan tentara
    - Gunseikan: Kepala pemerintahan militer

    **TOKOH-TOKOH PENTING**:
    - Letnan Jendral H ter Poorten: Panglima Hindia Belanda
    - Jendral Hiroshi Imamura: Panglima tentara Jepang
    - Mayor Jendral Seizabura Okasaki: Gubernur militer Jawa
    - Sumobu: Departemen urusan umum
    - Shihobu: Departemen kehakiman

    **DAMPAK PERANG DUNIA II**:
    - Munculnya nasionalisme Indonesia yang semakin kuat
    - Perubahan drastis dalam kehidupan masyarakat
    - Menuju proklamasi kemerdekaan Indonesia

    **BENTUK PERLAWANAN TERHADAP JEPANG**:
    1. Perlawanan Kooperatif: Bekerja sama untuk kepentingan Indonesia
    2. Gerakan Bawah Tanah: Perlawanan rahasia
    3. Perlawanan Bersenjata: Perlawanan fisik langsung

    **PERISTIWA PASCA KEMERDEKAAN**:
    - AFNEI: Allied Forces Netherlands East Indies
    - Pertempuran 5 Hari di Semarang
    - Peristiwa 10 November di Surabaya
    - Pertempuran Ambarawa/Palangan
    - Pertempuran Medan Area
    - Peristiwa Bandung Lautan Api

    **KONFLIK DENGAN BELANDA**:
    - Agresi Militer Belanda I dan II
    - Perjanjian Linggarjati
    - Komisi Tiga Negara
    - Perjanjian Renville
    - Perjanjian Roem-Royen
  `,
};

const soal = [
  {
    question: "Siapa yang menjabat sebagai Panglima tentara Jepang yang memimpin invasi ke Indonesia?",
    answers: [
      { text: "Letnan Jendral H ter Poorten", correct: false },
      { text: "Jendral Hiroshi Imamura", correct: true },
      { text: "Mayor Jendral Seizabura Okasaki", correct: false },
      { text: "Jendral Yamashita", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Apa yang dimaksud dengan Rikugun dalam struktur militer Jepang di Indonesia?",
    answers: [
      { text: "Tentara laut Jepang", correct: false },
      { text: "Tentara darat Jepang", correct: true },
      { text: "Tentara udara Jepang", correct: false },
      { text: "Polisi militer Jepang", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Osamu Seirei adalah...",
    answers: [
      { text: "Nama panglima tentara Jepang", correct: false },
      { text: "Peraturan pemerintahan militer Jepang", correct: true },
      { text: "Organisasi pemuda Indonesia", correct: false },
      { text: "Nama kota di Jepang", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perbedaan antara Rikugun dan Kaigun adalah...",
    answers: [
      { text: "Rikugun untuk darat, Kaigun untuk laut", correct: true },
      { text: "Rikugun untuk sipil, Kaigun untuk militer", correct: false },
      { text: "Rikugun untuk Jawa, Kaigun untuk luar Jawa", correct: false },
      { text: "Tidak ada perbedaan keduanya sama", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tugas utama AFNEI di Indonesia adalah...",
    answers: [
      { text: "Membantu pembentukan negara Indonesia", correct: false },
      { text: "Melucuti senjata Jepang dan membebaskan tawanan perang", correct: true },
      { text: "Membantu Belanda merebut kembali Indonesia", correct: false },
      { text: "Mengatur pemilu pertama Indonesia", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pertempuran 5 Hari di Semarang terjadi antara...",
    answers: [
      { text: "Indonesia melawan Belanda", correct: false },
      { text: "Indonesia melawan Jepang", correct: true },
      { text: "Indonesia melawan Inggris", correct: false },
      { text: "Jepang melawan Belanda", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Peristiwa 10 November yang terkenal terjadi di kota...",
    answers: [
      { text: "Jakarta", correct: false },
      { text: "Bandung", correct: false },
      { text: "Surabaya", correct: true },
      { text: "Semarang", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Yang dimaksud dengan Gunseikan dalam pemerintahan militer Jepang adalah...",
    answers: [
      { text: "Tentara penjaga", correct: false },
      { text: "Kepala pemerintahan militer", correct: true },
      { text: "Penasihat militer", correct: false },
      { text: "Komandan batalyon", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pertempuran Ambarawa juga dikenal dengan nama...",
    answers: [
      { text: "Pertempuran Palangan", correct: false },
      { text: "Pertempuran Palangan Ambarawa", correct: true },
      { text: "Pertempuran Ungaran", correct: false },
      { text: "Pertempuran Salatiga", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Sumobu dalam struktur pemerintahan Jepang bertugas mengurus...",
    answers: [
      { text: "Urusan militer", correct: false },
      { text: "Urusan umum", correct: true },
      { text: "Urusan kehakiman", correct: false },
      { text: "Urusan ekonomi", correct: false }
    ],
    difficulty: "susab"
  },
  {
    question: "Shihobu dalam pemerintahan Jepang adalah departemen yang mengurus...",
    answers: [
      { text: "Kehakiman", correct: true },
      { text: "Keuangan", correct: false },
      { text: "Pendidikan", correct: false },
      { text: "Kesehatan", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Mengapa Jepang menjajah Indonesia menurut konteks Perang Dunia II?",
    answers: [
      { text: "Untuk mencari rempah-rempah", correct: false },
      { text: "Sebagai bagian dari ekspansi militer di Asia Tenggara", correct: true },
      { text: "Untuk menyebarkan agama", correct: false },
      { text: "Untuk membantu Indonesia merdeka", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Salah satu dampak positif kedatangan Jepang bagi Indonesia adalah...",
    answers: [
      { text: "Meningkatkan kesejahteraan rakyat", correct: false },
      { text: "Munculnya nasionalisme Indonesia yang semakin kuat", correct: true },
      { text: "Membangun infrastruktur modern", correct: false },
      { text: "Memberikan kemerdekaan langsung", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perlawanan kooperatif terhadap Jepang maksudnya adalah...",
    answers: [
      { text: "Melawan dengan senjata", correct: false },
      { text: "Bekerja sama untuk kepentingan Indonesia", correct: true },
      { text: "Mengikuti semua perintah Jepang", correct: false },
      { text: "Bersembunyi di hutan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Gerakan bawah tanah dalam perlawanan terhadap Jepang adalah...",
    answers: [
      { text: "Perlawanan terbuka", correct: false },
      { text: "Perlawanan rahasia", correct: true },
      { text: "Perlawanan diplomatik", correct: false },
      { text: "Perlawanan ekonomi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pertempuran Medan Area terjadi di wilayah...",
    answers: [
      { text: "Jawa Tengah", correct: false },
      { text: "Jawa Barat", correct: false },
      { text: "Sumatra Utara", correct: true },
      { text: "Jawa Timur", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Peristiwa Bandung Lautan Api terjadi karena...",
    answers: [
      { text: "Serangan udara Jepang", correct: false },
      { text: "Strategi bumi hangus melawan Sekutu", correct: true },
      { text: "Kecelakaan industri", correct: false },
      { text: "Bencana alam", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Gunshriken dalam sistem pemerintahan Jepang berarti...",
    answers: [
      { text: "Pangkalan militer", correct: false },
      { text: "Daerah kekuasaan tentara", correct: true },
      { text: "Markas komando", correct: false },
      { text: "Kantor gubernur", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Agresi Militer Belanda I terjadi pada tahun...",
    answers: [
      { text: "1945", correct: false },
      { text: "1947", correct: true },
      { text: "1948", correct: false },
      { text: "1949", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perjanjian Linggarjati ditandatangani antara...",
    answers: [
      { text: "Indonesia dan Jepang", correct: false },
      { text: "Indonesia dan Belanda", correct: true },
      { text: "Indonesia dan Inggris", correct: false },
      { text: "Belanda dan Jepang", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Komisi Tiga Negara dibentuk untuk...",
    answers: [
      { text: "Mengawasi gencatan senjata", correct: true },
      { text: "Membantu ekonomi Indonesia", correct: false },
      { text: "Mengatur perdagangan", correct: false },
      { text: "Menyusun undang-undang", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perjanjian Renville merugikan Indonesia karena...",
    answers: [
      { text: "Indonesia kehilangan wilayah", correct: true },
      { text: "Indonesia harus bayar ganti rugi", correct: false },
      { text: "Indonesia kehilangan kedaulatan", correct: false },
      { text: "Indonesia harus bubar", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Perjanjian Roem-Royen mengatur tentang...",
    answers: [
      { text: "Pengakuan kedaulatan Indonesia", correct: false },
      { text: "Penghentian perang gerilya dan pembebasan tahanan politik", correct: true },
      { text: "Pembagian wilayah Indonesia", correct: false },
      { text: "Kerja sama ekonomi", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Letnan Jendral H ter Poorten adalah...",
    answers: [
      { text: "Panglima tentara Jepang", correct: false },
      { text: "Panglima Hindia Belanda", correct: true },
      { text: "Komandan AFNEI", correct: false },
      { text: "Diplomat Amerika", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Mayor Jendral Seizabura Okasaki menjabat sebagai...",
    answers: [
      { text: "Panglima Angkatan Laut", correct: false },
      { text: "Gubernur militer Jawa", correct: true },
      { text: "Menteri Luar Negeri Jepang", correct: false },
      { text: "Kepala Kepolisian", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sambutan rakyat Indonesia terhadap kedatangan Jepang pada awalnya...",
    answers: [
      { text: "Seragam menolak", correct: false },
      { text: "Beragam, ada yang menyambut ada yang menolak", correct: true },
      { text: "Seragam menyambut", correct: false },
      { text: "Acuh tak acuh", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pemerintahan sipil Jepang di Indonesia dibentuk setelah...",
    answers: [
      { text: "Pemerintahan militer berhasil menguasai seluruh Indonesia", correct: true },
      { text: "Jepang kalah perang", correct: false },
      { text: "Indonesia merdeka", correct: false },
      { text: "Belanda menyerah", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Proklamasi kemerdekaan Indonesia merupakan dampak dari...",
    answers: [
      { text: "Kekalahan Jepang dalam Perang Dunia II", correct: true },
      { text: "Bantuan Amerika Serikat", correct: false },
      { text: "Tekanan Belanda", correct: false },
      { text: "Campur tangan PBB", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Yang termasuk perubahan drastis akibat Perang Dunia II di Indonesia adalah...",
    answers: [
      { text: "Meningkatnya ekspor hasil bumi", correct: false },
      { text: "Munculnya kesadaran nasional yang kuat", correct: true },
      { text: "Berkembangnya industri modern", correct: false },
      { text: "Meningkatnya investasi asing", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perlawanan dengan senjata terhadap Jepang menunjukkan bahwa rakyat Indonesia...",
    answers: [
      { text: "Tidak puas dengan penjajahan apapun bentuknya", correct: true },
      { text: "Lebih suka dijajah Belanda", correct: false },
      { text: "Ingin bekerja sama dengan Jepang", correct: false },
      { text: "Takut pada kekuatan Jepang", correct: false }
    ],
    difficulty: "susah"
  }
];
