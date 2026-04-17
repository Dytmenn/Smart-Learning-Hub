const materi = {
  judul: "Sejarah Kelas XI - Semester Genap",
  deskripsi: `Materi ini mencakup seluruh topik Sejarah Kelas XI Semester Genap sesuai kisi-kisi, yang berfokus pada masa pendudukan Jepang di Indonesia dan proses Proklamasi Kemerdekaan Indonesia.

**MASA PENDUDUKAN JEPANG DI INDONESIA (1942–1945)**:
Jepang menduduki Indonesia selama kurang lebih 3,5 tahun. Tujuan utama Jepang adalah menguasai sumber daya alam Indonesia untuk kepentingan Perang Dunia II serta menjadikan Indonesia sebagai basis militer.

**KEBIJAKAN JEPANG**:
Romusha: kerja paksa yang sangat merugikan rakyat, bahkan banyak yang dikirim ke luar negeri.
Propaganda: dilakukan melalui radio dan surat kabar untuk mempengaruhi rakyat.
Penghapusan pengaruh Barat: penggunaan bahasa Belanda dilarang dan diganti dengan bahasa Jepang.
Eksploitasi sumber daya: rakyat dipaksa menanam tanaman yang menguntungkan Jepang.

**ORGANISASI BENTUKAN JEPANG**:
PETA (Pembela Tanah Air): organisasi militer untuk membantu Jepang.
Heiho: pasukan pembantu tentara Jepang.
Keibodan: organisasi keamanan rakyat.
Jawa Hokokai: organisasi untuk mengerahkan tenaga rakyat.
Fujinkai: organisasi wanita.

**DAMPAK PENDUDUKAN JEPANG**:
Dampak negatif: kelaparan, kerja paksa, penindasan, dan kemiskinan.
Dampak positif: munculnya kesadaran nasional, pengalaman dalam organisasi, serta kesiapan menuju kemerdekaan.

**PERLAWANAN TERHADAP JEPANG**:
Perlawanan dilakukan melalui gerakan bawah tanah dan penolakan terhadap kebijakan Jepang yang merugikan rakyat.

**AKHIR PENDUDUKAN JEPANG**:
Ditandai dengan kekalahan Jepang dalam Perang Dunia II dan menyerah kepada Sekutu pada tahun 1945.

**PROKLAMASI KEMERDEKAAN INDONESIA (17 AGUSTUS 1945)**:
Proklamasi merupakan pernyataan resmi kemerdekaan Indonesia dari penjajahan.

**PROSES PERUMUSAN PROKLAMASI**:
Naskah proklamasi disusun di rumah Laksamana Maeda.
Dirumuskan oleh Soekarno, Mohammad Hatta, dan Ahmad Soebardjo.
Diketik oleh Sayuti Melik.

**TOKOH-TOKOH PROKLAMASI**:
Soekarno: membacakan teks proklamasi.
Mohammad Hatta: mendampingi dan menandatangani teks proklamasi.
Golongan pemuda: mendesak agar proklamasi segera dilaksanakan.

**PEMBACAAN PROKLAMASI**:
Dilaksanakan pada 17 Agustus 1945 pukul 10.00 WIB di Jalan Pegangsaan Timur No. 56 Jakarta.

**MAKNA DAN TUJUAN PROKLAMASI**:
Menegaskan kemerdekaan Indonesia.
Menandai berakhirnya penjajahan.
Menjadi awal berdirinya negara Indonesia yang merdeka.

**PENYEBARAN BERITA PROKLAMASI**:
Dilakukan melalui radio, surat kabar, dan dari mulut ke mulut ke seluruh wilayah Indonesia.

**AKIBAT PROKLAMASI**:
Rakyat Indonesia menyatakan kemerdekaannya.
Muncul semangat perjuangan untuk mempertahankan kemerdekaan.
Bendera Merah Putih dikibarkan sebagai simbol negara.

Materi ini bertujuan agar peserta didik memahami proses perjuangan bangsa Indonesia serta menumbuhkan rasa nasionalisme dan penghargaan terhadap jasa para pahlawan.`,
};

const soal = [
  // ===== PENDUDUKAN JEPANG =====
  {
    question: "Masa pendudukan Jepang di Indonesia berlangsung selama …",
    answers: [
      { text: "2 tahun", correct: false },
      { text: "3,5 tahun", correct: true },
      { text: "5 tahun", correct: false },
      { text: "4 tahun", correct: false },
      { text: "6 tahun", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Tujuan Jepang menduduki Indonesia adalah …",
    answers: [
      { text: "Membawa kemerdekaan", correct: false },
      { text: "Menguasai sumber daya alam", correct: true },
      { text: "Menghapus kolonial Belanda", correct: false },
      { text: "Menyebarkan agama", correct: false },
      { text: "Menjalin persahabatan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Kebijakan Romusha di Indonesia bertujuan untuk …",
    answers: [
      { text: "Mempercepat pendidikan", correct: false },
      { text: "Mempekerjakan rakyat secara paksa", correct: true },
      { text: "Memberikan gaji tinggi", correct: false },
      { text: "Menyebarkan budaya Jepang", correct: false },
      { text: "Melatih tentara Indonesia", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Salah satu organisasi yang dibentuk Jepang untuk mendukung perang adalah …",
    answers: [
      { text: "PNI", correct: false },
      { text: "BPUPKI", correct: false },
      { text: "Heiho", correct: true },
      { text: "Sarekat Islam", correct: false },
      { text: "PKI", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tenaga kerja paksa yang dikirim ke luar negeri disebut …",
    answers: [
      { text: "PETA", correct: false },
      { text: "Romusha", correct: true },
      { text: "Heiho", correct: false },
      { text: "Keibodan", correct: false },
      { text: "Sendenbu", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Salah satu dampak positif pendudukan Jepang bagi Indonesia adalah …",
    answers: [
      { text: "Kekayaan alam dieksploitasi", correct: false },
      { text: "Pendidikan rakyat terbatas", correct: false },
      { text: "Munculnya kesadaran nasional", correct: true },
      { text: "Penindasan rakyat meningkat", correct: false },
      { text: "Rakyat kelaparan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Bahasa yang diwajibkan oleh Jepang di sekolah adalah …",
    answers: [
      { text: "Belanda", correct: false },
      { text: "Inggris", correct: false },
      { text: "Jepang", correct: true },
      { text: "Arab", correct: false },
      { text: "Mandarin", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "PETA adalah singkatan dari …",
    answers: [
      { text: "Pembela Tanah Air", correct: true },
      { text: "Persatuan Tentara Asia", correct: false },
      { text: "Perhimpunan Tentara Asia", correct: false },
      { text: "Pemuda Tentara Asia", correct: false },
      { text: "Pasukan Teritorial Asia", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Heiho merupakan …",
    answers: [
      { text: "Tentara Indonesia yang dibentuk Jepang", correct: true },
      { text: "Organisasi pendidikan rakyat", correct: false },
      { text: "Organisasi pemuda politik", correct: false },
      { text: "Lembaga kesehatan", correct: false },
      { text: "Organisasi wanita", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Salah satu penderitaan rakyat di bawah Jepang adalah …",
    answers: [
      { text: "Mendapat gaji tinggi", correct: false },
      { text: "Dipaksa bekerja di pabrik dan perkebunan", correct: true },
      { text: "Mendapat pendidikan gratis", correct: false },
      { text: "Mendapat pengakuan sebagai negara merdeka", correct: false },
      { text: "Bisa bepergian bebas", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Jepang menggunakan propaganda melalui …",
    answers: [
      { text: "Radio dan surat kabar", correct: true },
      { text: "Internet", correct: false },
      { text: "Televisi", correct: false },
      { text: "Bioskop Hollywood", correct: false },
      { text: "Buku Belanda", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Slogan Jepang yang terkenal selama pendudukan adalah …",
    answers: [
      { text: "Merdeka atau Mati", correct: false },
      { text: "Hidup Rakyat Indonesia", correct: false },
      { text: "Jepang adalah Cahaya Asia", correct: true },
      { text: "Kerja dan Doa", correct: false },
      { text: "Perjuangan Abadi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tujuan dibentuknya Jawa Hokokai adalah …",
    answers: [
      { text: "Memperkuat ekonomi Jepang", correct: false },
      { text: "Mengatur pemuda untuk membantu Jepang", correct: true },
      { text: "Memberikan kemerdekaan", correct: false },
      { text: "Menghapus pendidikan Belanda", correct: false },
      { text: "Menyebarkan agama", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Penduduk Indonesia dipaksa menanam tanaman yang menguntungkan Jepang, salah satunya adalah …",
    answers: [
      { text: "Padi", correct: false },
      { text: "Kopi dan tebu", correct: true },
      { text: "Jagung", correct: false },
      { text: "Kacang tanah", correct: false },
      { text: "Ubi jalar", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Penderitaan rakyat Indonesia di bawah Jepang salah satunya karena …",
    answers: [
      { text: "Rakyat bisa memilih pemimpin", correct: false },
      { text: "Rakyat dipaksa masuk kerja paksa", correct: true },
      { text: "Pendidikan gratis untuk semua", correct: false },
      { text: "Infrastruktur diperbaiki", correct: false },
      { text: "Kebebasan pers meningkat", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Salah satu tokoh Indonesia yang aktif selama pendudukan Jepang adalah …",
    answers: [
      { text: "Sukarno", correct: true },
      { text: "Thomas Matulessy", correct: false },
      { text: "Diponegoro", correct: false },
      { text: "Cut Nyak Dien", correct: false },
      { text: "Raden Saleh", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Organisasi wanita yang dibentuk Jepang disebut …",
    answers: [
      { text: "Fujinkai", correct: true },
      { text: "Keibodan", correct: false },
      { text: "PETA", correct: false },
      { text: "Romusha", correct: false },
      { text: "Sendenbu", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Selama pendudukan Jepang, rakyat Indonesia menghadapi kelaparan karena …",
    answers: [
      { text: "Banyak bantuan makanan", correct: false },
      { text: "Hasil pertanian diprioritaskan untuk Jepang", correct: true },
      { text: "Pemerintah membangun pabrik makanan", correct: false },
      { text: "Perdagangan bebas dibuka", correct: false },
      { text: "Tanah subur dikembalikan ke rakyat", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Salah satu bentuk perlawanan rakyat Indonesia terhadap Jepang adalah …",
    answers: [
      { text: "Bergabung dengan Romusha", correct: false },
      { text: "Pendidikan paksa", correct: false },
      { text: "Membentuk organisasi bawah tanah", correct: true },
      { text: "Mengikuti Jepang tanpa syarat", correct: false },
      { text: "Meninggalkan desa", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jepang menghapus simbol-simbol Belanda, salah satunya adalah …",
    answers: [
      { text: "Sekolah Jepang", correct: false },
      { text: "Bendera Belanda dan menggantinya dengan bendera Jepang", correct: true },
      { text: "Kereta api Jepang", correct: false },
      { text: "Bahasa Inggris", correct: false },
      { text: "Bioskop Belanda", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Jepang memanfaatkan Indonesia sebagai …",
    answers: [
      { text: "Pusat industri dunia", correct: false },
      { text: "Basis militer dan sumber bahan baku perang", correct: true },
      { text: "Negara merdeka penuh", correct: false },
      { text: "Pusat pariwisata", correct: false },
      { text: "Negara netral", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Salah satu kebijakan kontroversial Jepang adalah …",
    answers: [
      { text: "Pendidikan gratis untuk rakyat", correct: false },
      { text: "Romusha dan kerja paksa", correct: true },
      { text: "Kebebasan pers", correct: false },
      { text: "Perdagangan bebas", correct: false },
      { text: "Pembangunan infrastruktur rakyat", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Peranan pemuda Indonesia selama pendudukan Jepang termasuk …",
    answers: [
      { text: "Bergabung dengan romusha", correct: false },
      { text: "Membentuk organisasi Jepang di desa", correct: false },
      { text: "Membantu penyebaran propaganda Jepang", correct: false },
      { text: "Semua benar", correct: true },
      { text: "Tidak ada yang benar", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Akhir masa pendudukan Jepang ditandai dengan …",
    answers: [
      { text: "Jepang kalah dalam Perang Dunia II", correct: true },
      { text: "Indonesia merdeka sejak awal", correct: false },
      { text: "Belanda kembali berkuasa", correct: false },
      { text: "Jepang menyerang Belanda", correct: false },
      { text: "Amerika menduduki Indonesia", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pemberian pendidikan Jepang yang diajarkan di sekolah disebut …",
    answers: [
      { text: "Sekolah Rakyat Jepang", correct: true },
      { text: "Sekolah Belanda", correct: false },
      { text: "Sekolah Melayu", correct: false },
      { text: "Sekolah Inggris", correct: false },
      { text: "Sekolah Indonesia", correct: false }
    ],
    difficulty: "sedang"
  },

  // ===== PROKLAMASI KEMERDEKAAN =====
  {
    question: "Tanggal proklamasi kemerdekaan Indonesia dibacakan adalah …",
    answers: [
      { text: "17 Agustus 1945", correct: true },
      { text: "18 Agustus 1945", correct: false },
      { text: "16 Agustus 1945", correct: false },
      { text: "17 September 1945", correct: false },
      { text: "1 Oktober 1945", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Tokoh yang membacakan teks proklamasi adalah …",
    answers: [
      { text: "Mohammad Hatta", correct: false },
      { text: "Soekarno", correct: true },
      { text: "Sutan Sjahrir", correct: false },
      { text: "Agus Salim", correct: false },
      { text: "Tan Malaka", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Tempat proklamasi kemerdekaan Indonesia dibacakan adalah …",
    answers: [
      { text: "Gedung Sate, Bandung", correct: false },
      { text: "Rumah Laksamana Maeda, Jakarta", correct: false },
      { text: "Istana Merdeka, Jakarta", correct: false },
      { text: "Jalan Pahlawan, Surabaya", correct: false },
      { text: "Jalan Pegangsaan Timur 56, Jakarta", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Yang mendampingi Soekarno saat membacakan proklamasi adalah …",
    answers: [
      { text: "Sutan Sjahrir", correct: false },
      { text: "Mohammad Hatta", correct: true },
      { text: "Tan Malaka", correct: false },
      { text: "Ki Hajar Dewantara", correct: false },
      { text: "Soedirman", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Penulisan teks proklamasi awalnya dilakukan di …",
    answers: [
      { text: "Gedung Sate, Bandung", correct: false },
      { text: "Jalan Pegangsaan Timur 56, Jakarta", correct: false },
      { text: "Rumah Laksamana Maeda, Jakarta", correct: true },
      { text: "Istana Negara", correct: false },
      { text: "Hotel Indonesia", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dokumen asli teks proklamasi ditandatangani oleh …",
    answers: [
      { text: "Soekarno dan Sutan Sjahrir", correct: false },
      { text: "Soekarno dan Mohammad Hatta", correct: true },
      { text: "Soekarno dan Tan Malaka", correct: false },
      { text: "Mohammad Hatta dan Sutan Syahrir", correct: false },
      { text: "Soekarno dan Ki Hajar Dewantara", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Naskah teks proklamasi Indonesia pertama kali ditulis oleh …",
    answers: [
      { text: "Soekarno sendiri", correct: true },
      { text: "Mohammad Hatta", correct: false },
      { text: "Sayuti Melik", correct: false },
      { text: "Agus Salim", correct: false },
      { text: "Tan Malaka", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tujuan proklamasi kemerdekaan Indonesia adalah …",
    answers: [
      { text: "Menegaskan kemerdekaan Indonesia dari penjajah", correct: true },
      { text: "Mengundang Jepang kembali berkuasa", correct: false },
      { text: "Meminta bantuan Belanda", correct: false },
      { text: "Menetapkan Indonesia sebagai negara bagian Belanda", correct: false },
      { text: "Menghapus organisasi pemuda", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Peran pemuda dalam proklamasi kemerdekaan Indonesia adalah …",
    answers: [
      { text: "Menentang proklamasi", correct: false },
      { text: "Memaksa Soekarno-Hatta untuk segera memproklamasikan", correct: true },
      { text: "Menjadi saksi saja", correct: false },
      { text: "Menulis teks proklamasi sendiri", correct: false },
      { text: "Tidak terlibat", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Rapat persiapan proklamasi yang mendahului pembacaan dilakukan di …",
    answers: [
      { text: "Gedung Sate", correct: false },
      { text: "Rumah Laksamana Maeda", correct: true },
      { text: "Rumah Soekarno", correct: false },
      { text: "Jalan Pegangsaan Timur 56", correct: false },
      { text: "Hotel Indonesia", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Salah satu tokoh pemuda yang mendorong proklamasi adalah …",
    answers: [
      { text: "Ki Hajar Dewantara", correct: false },
      { text: "Sukarni", correct: true },
      { text: "Agus Salim", correct: false },
      { text: "Mohammad Natsir", correct: false },
      { text: "Tan Malaka", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Proklamasi kemerdekaan dibacakan setelah …",
    answers: [
      { text: "Jepang menyerah kepada Sekutu", correct: true },
      { text: "Belanda kembali datang ke Indonesia", correct: false },
      { text: "Indonesia merdeka secara resmi diakui PBB", correct: false },
      { text: "Perang melawan Belanda dimulai", correct: false },
      { text: "Soekarno lahir", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Salah satu isi pokok teks proklamasi adalah …",
    answers: [
      { text: "Penolakan semua negara di dunia", correct: false },
      { text: "Pengakuan kemerdekaan secara resmi", correct: true },
      { text: "Penyebutan Jepang sebagai pelindung", correct: false },
      { text: "Pendirian monarki", correct: false },
      { text: "Penghapusan semua lembaga pemerintah", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Proklamasi kemerdekaan Indonesia disiarkan secara luas pertama kali melalui …",
    answers: [
      { text: "Televisi", correct: false },
      { text: "Radio", correct: true },
      { text: "Internet", correct: false },
      { text: "Surat kabar Belanda", correct: false },
      { text: "Bioskop", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Sebelum pembacaan proklamasi, naskah teks proklamasi diketik oleh …",
    answers: [
      { text: "Sukarni", correct: false },
      { text: "Sayuti Melik", correct: true },
      { text: "Mohammad Hatta", correct: false },
      { text: "Soekarno", correct: false },
      { text: "Agus Salim", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Peran Ir. Soekarno dalam proklamasi adalah …",
    answers: [
      { text: "Menjadi saksi", correct: false },
      { text: "Membacakan teks proklamasi", correct: true },
      { text: "Menulis naskah proklamasi", correct: false },
      { text: "Menjadi penjaga rumah", correct: false },
      { text: "Mengirim laporan ke Jepang", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Proklamasi kemerdekaan Indonesia dibacakan pada pukul …",
    answers: [
      { text: "10.00 WIB", correct: true },
      { text: "09.00 WIB", correct: false },
      { text: "12.00 WIB", correct: false },
      { text: "08.00 WIB", correct: false },
      { text: "07.00 WIB", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tokoh yang mengusulkan agar proklamasi dibacakan segera adalah …",
    answers: [
      { text: "Pemuda", correct: true },
      { text: "Belanda", correct: false },
      { text: "Jepang", correct: false },
      { text: "PBB", correct: false },
      { text: "Golongan tua", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Salah satu akibat dari proklamasi kemerdekaan adalah …",
    answers: [
      { text: "Jepang langsung menyerang Indonesia", correct: false },
      { text: "Rakyat Indonesia memproklamasikan kemerdekaan secara resmi", correct: true },
      { text: "Belanda langsung mengakui kemerdekaan", correct: false },
      { text: "Indonesia menjadi bagian Jepang", correct: false },
      { text: "Organisasi pemuda dibubarkan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Rumah Laksamana Maeda dipilih sebagai tempat persiapan proklamasi karena …",
    answers: [
      { text: "Letaknya strategis dan aman", correct: true },
      { text: "Sudah dimiliki Soekarno", correct: false },
      { text: "Milik pemerintah Jepang", correct: false },
      { text: "Dekat dengan Istana Negara", correct: false },
      { text: "Dekat dengan Monas", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Setelah proklamasi, naskah asli teks proklamasi disimpan oleh …",
    answers: [
      { text: "Soekarno", correct: false },
      { text: "Sayuti Melik", correct: false },
      { text: "Mohammad Hatta", correct: true },
      { text: "Pemuda", correct: false },
      { text: "Jepang", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Salah satu faktor yang memengaruhi terjadinya proklamasi adalah …",
    answers: [
      { text: "Penarikan tentara Jepang dari Indonesia", correct: false },
      { text: "Tekanan pemuda dan situasi politik pasca Jepang menyerah", correct: true },
      { text: "Kedatangan Belanda kembali", correct: false },
      { text: "PBB mengeluarkan keputusan", correct: false },
      { text: "Perang dunia kedua belum selesai", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Teks proklamasi Indonesia ditulis dalam bahasa …",
    answers: [
      { text: "Belanda", correct: false },
      { text: "Inggris", correct: false },
      { text: "Jepang", correct: false },
      { text: "Indonesia", correct: true },
      { text: "Melayu", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Peran Mohammad Hatta dalam proklamasi adalah …",
    answers: [
      { text: "Menjadi pemimpin militer", correct: false },
      { text: "Mendampingi Soekarno dan menyetujui teks proklamasi", correct: true },
      { text: "Menulis teks proklamasi", correct: false },
      { text: "Menjadi pemuda penggagas proklamasi", correct: false },
      { text: "Mengirim berita ke Jepang", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Setelah proklamasi, simbol kemerdekaan pertama yang dikibarkan adalah …",
    answers: [
      { text: "Bendera Belanda", correct: false },
      { text: "Bendera Jepang", correct: false },
      { text: "Bendera Merah Putih", correct: true },
      { text: "Bendera PBB", correct: false },
      { text: "Bendera Kerajaan", correct: false }
    ],
    difficulty: "mudah"
  }
];
