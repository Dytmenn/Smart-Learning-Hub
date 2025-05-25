const materi = {
  judul: "Bahasa Indonesia: Karya Ilmiah",
  deskripsi: "Materi ini membahas pengertian karya ilmiah, ciri-ciri, struktur, langkah-langkah penyusunan, dan perbedaannya dengan karya non-ilmiah sebagai bekal siswa dalam menyusun karya ilmiah yang baik dan benar."
};

const soal = [
  {
    question: "Karya ilmiah adalah tulisan yang berisi pembahasan suatu masalah berdasarkan hasil...",
    answers: [
      { text: "Pengamatan, penelitian, atau kajian", correct: true },
      { text: "Imajinasi, kreativitas, atau pendapat pribadi", correct: false },
      { text: "Pengalaman, kesukaan, atau minat penulis", correct: false },
      { text: "Cerita rakyat, mitos, atau legenda", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Berikut ini yang BUKAN merupakan ciri karya ilmiah adalah...",
    answers: [
      { text: "Disusun secara sistematis", correct: false },
      { text: "Berdasarkan fakta dan data yang objektif", correct: false },
      { text: "Menggunakan bahasa yang bersifat subjektif", correct: true },
      { text: "Bersifat logis, rasional, dan empiris", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Perbedaan utama antara karya ilmiah dan karya non-ilmiah terletak pada...",
    answers: [
      { text: "Jumlah halaman dan format penulisan", correct: false },
      { text: "Tujuan, bahasa, serta dasar penulisannya", correct: true },
      { text: "Penggunaan gambar dan ilustrasi", correct: false },
      { text: "Panjang paragraf dan judul", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Contoh karya ilmiah adalah...",
    answers: [
      { text: "Cerpen berjudul 'Udara Hitam di Kota Kami'", correct: false },
      { text: "Puisi tentang keindahan alam", correct: false },
      { text: "Artikel opini di surat kabar", correct: false },
      { text: "Laporan penelitian 'Pengaruh Polusi Udara terhadap Kesehatan Paru-paru'", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "Bagian struktur karya ilmiah yang berisi alasan mengapa topik tersebut penting untuk diteliti adalah...",
    answers: [
      { text: "Rumusan masalah", correct: false },
      { text: "Latar belakang", correct: true },
      { text: "Tujuan penelitian", correct: false },
      { text: "Manfaat penelitian", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam struktur karya ilmiah, bagian yang menjelaskan cara atau prosedur yang digunakan dalam penelitian adalah...",
    answers: [
      { text: "Kajian Teori", correct: false },
      { text: "Hasil dan Pembahasan", correct: false },
      { text: "Metode Penelitian", correct: true },
      { text: "Penutup", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Urutan yang benar dalam langkah-langkah menyusun karya ilmiah adalah...",
    answers: [
      { text: "Menentukan topik → merumuskan masalah → mengumpulkan data → menyusun kerangka → menulis karya ilmiah → melakukan revisi → menyusun daftar pustaka", correct: true },
      { text: "Mengumpulkan data → menentukan topik → merumuskan masalah → menyusun kerangka → menulis karya ilmiah → menyusun daftar pustaka → melakukan revisi", correct: false },
      { text: "Merumuskan masalah → menentukan topik → mengumpulkan data → menulis karya ilmiah → menyusun kerangka → melakukan revisi → menyusun daftar pustaka", correct: false },
      { text: "Menyusun kerangka → menentukan topik → merumuskan masalah → mengumpulkan data → menulis karya ilmiah → menyusun daftar pustaka → melakukan revisi", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Daftar pustaka dalam karya ilmiah berfungsi untuk...",
    answers: [
      { text: "Menunjukkan banyaknya buku yang dibaca oleh penulis", correct: false },
      { text: "Memperbanyak jumlah halaman karya ilmiah", correct: false },
      { text: "Memberikan penghargaan kepada sumber referensi yang digunakan", correct: true },
      { text: "Memperindah tampilan karya ilmiah", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pernyataan berikut yang TIDAK BENAR tentang tujuan penulisan karya ilmiah adalah...",
    answers: [
      { text: "Menyampaikan hasil penelitian secara sistematis", correct: false },
      { text: "Memberikan informasi atau solusi terhadap suatu masalah", correct: false },
      { text: "Mengembangkan ilmu pengetahuan", correct: false },
      { text: "Menghibur pembaca dengan cerita fiksi", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "Bahasa baku dalam karya ilmiah berfungsi untuk...",
    answers: [
      { text: "Mempersulit pembaca memahami isi karya ilmiah", correct: false },
      { text: "Menjaga keformalan, kejelasan, dan objektivitas penulisan", correct: true },
      { text: "Menunjukkan status sosial penulis karya ilmiah", correct: false },
      { text: "Membuat karya ilmiah lebih menarik bagi pembaca", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sistematika penulisan karya ilmiah adalah...",
    answers: [
      { text: "Daftar buku yang dirujuk dalam karya ilmiah", correct: false },
      { text: "Urutan atau struktur penyajian isi karya ilmiah secara logis dan terorganisasi", correct: true },
      { text: "Jadwal pelaksanaan penelitian", correct: false },
      { text: "Daftar nama-nama peneliti yang terlibat", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Mengapa hasil dan pembahasan merupakan bagian terpenting dalam karya ilmiah?",
    answers: [
      { text: "Karena bagian ini paling panjang dan detail", correct: false },
      { text: "Karena bagian ini menunjukkan temuan dari penelitian serta analisis terhadap data", correct: true },
      { text: "Karena bagian ini selalu ditulis paling akhir", correct: false },
      { text: "Karena bagian ini menggunakan bahasa yang paling formal", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perbedaan karya ilmiah populer dan karya ilmiah akademik terletak pada...",
    answers: [
      { text: "Penggunaan bahasa dan target pembaca", correct: true },
      { text: "Jumlah halaman dan penggunaan daftar pustaka", correct: false },
      { text: "Ada tidaknya tabel dan grafik", correct: false },
      { text: "Objektifitas dan rasionalitas isi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Peran data dalam penulisan karya ilmiah adalah...",
    answers: [
      { text: "Sebagai hiasan agar karya ilmiah terlihat lebih ilmiah", correct: false },
      { text: "Sebagai dasar dalam membuat argumen atau kesimpulan", correct: true },
      { text: "Sebagai pengisi halaman agar lebih tebal", correct: false },
      { text: "Sebagai sarana menunjukkan kemampuan penulis", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Judul karya ilmiah yang tepat untuk siswa SMA adalah...",
    answers: [
      { text: "Dampak Globalisasi terhadap Perekonomian Dunia Pasca Pandemi Covid-19", correct: false },
      { text: "Peranan Hormon Endorfin dalam Mengatur Mood Remaja", correct: false },
      { text: "Pengaruh Penggunaan Media Sosial terhadap Prestasi Belajar Siswa Kelas XI", correct: true },
      { text: "Analisis Kebijakan Moneter Bank Indonesia dalam Menangani Inflasi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Rumusan masalah dalam pendahuluan karya ilmiah berisi...",
    answers: [
      { text: "Alasan mengapa topik tersebut penting untuk diteliti", correct: false },
      { text: "Pertanyaan yang akan dijawab dalam penelitian", correct: true },
      { text: "Hal yang ingin dicapai dalam penelitian", correct: false },
      { text: "Kegunaan hasil penelitian bagi pihak terkait", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam karya ilmiah, yang dimaksud dengan kajian teori adalah...",
    answers: [
      { text: "Daftar buku yang dirujuk oleh penulis", correct: false },
      { text: "Teori-teori yang relevan dengan masalah yang diteliti", correct: true },
      { text: "Pendapat pribadi penulis tentang topik yang dibahas", correct: false },
      { text: "Rangkuman hasil penelitian sebelumnya", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dalam karya ilmiah, bagian yang berisi simpulan dan saran adalah...",
    answers: [
      { text: "Pendahuluan", correct: false },
      { text: "Metode Penelitian", correct: false },
      { text: "Hasil dan Pembahasan", correct: false },
      { text: "Penutup", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "Karya ilmiah yang membutuhkan validasi dan pengakuan dari dewan penguji adalah...",
    answers: [
      { text: "Artikel ilmiah populer", correct: false },
      { text: "Laporan penelitian mandiri", correct: false },
      { text: "Skripsi, tesis, dan disertasi", correct: true },
      { text: "Makalah seminar", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pernyataan yang BENAR tentang bahasa dalam karya ilmiah adalah...",
    answers: [
      { text: "Menggunakan bahasa gaul agar lebih menarik", correct: false },
      { text: "Menggunakan istilah asing sebanyak mungkin", correct: false },
      { text: "Menggunakan bahasa formal dan baku", correct: true },
      { text: "Menggunakan bahasa yang berbunga-bunga", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Perbedaan karakteristik penulisan antara karya ilmiah dan cerpen adalah...",
    answers: [
      { text: "Karya ilmiah objektif dan cerpen subjektif", correct: true },
      { text: "Karya ilmiah tidak memerlukan data sedangkan cerpen memerlukan data", correct: false },
      { text: "Karya ilmiah menggunakan bahasa tidak baku sedangkan cerpen menggunakan bahasa baku", correct: false },
      { text: "Karya ilmiah tidak memiliki struktur sedangkan cerpen memiliki struktur yang jelas", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam karya ilmiah, tahap penyuntingan bertujuan untuk...",
    answers: [
      { text: "Menentukan topik penelitian", correct: false },
      { text: "Merumuskan masalah penelitian", correct: false },
      { text: "Memeriksa dan memperbaiki kesalahan dalam tulisan", correct: true },
      { text: "Mengumpulkan data penelitian", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Kesimpulan dalam karya ilmiah seharusnya...",
    answers: [
      { text: "Menjawab rumusan masalah berdasarkan hasil penelitian", correct: true },
      { text: "Mengemukakan teori-teori baru yang tidak berkaitan dengan penelitian", correct: false },
      { text: "Memuat pendapat subjektif penulis tentang topik lain", correct: false },
      { text: "Berisi saran-saran yang tidak relevan dengan penelitian", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sifat karya ilmiah yang menunjukkan bahwa karya tersebut dapat dibuktikan kebenarannya melalui penelitian ulang adalah...",
    answers: [
      { text: "Objektif", correct: false },
      { text: "Sistematis", correct: false },
      { text: "Verifikatif", correct: true },
      { text: "Logis", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Langkah pertama dalam menyusun karya ilmiah adalah...",
    answers: [
      { text: "Mengumpulkan data", correct: false },
      { text: "Menentukan topik atau permasalahan", correct: true },
      { text: "Menyusun kerangka karya ilmiah", correct: false },
      { text: "Merumuskan tujuan penelitian", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Bagian pendahuluan karya ilmiah yang menjelaskan kegunaan hasil penelitian bagi pihak terkait adalah...",
    answers: [
      { text: "Latar belakang", correct: false },
      { text: "Rumusan masalah", correct: false },
      { text: "Tujuan penelitian", correct: false },
      { text: "Manfaat penelitian", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Alasan utama mengapa karya ilmiah harus disusun secara sistematis adalah...",
    answers: [
      { text: "Agar lebih mudah mendapatkan penghargaan", correct: false },
      { text: "Agar pembaca dapat mengikuti alur pemikiran penulis dengan mudah", correct: true },
      { text: "Agar memenuhi jumlah halaman yang ditentukan", correct: false },
      { text: "Agar terlihat lebih ilmiah di mata pembaca", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Karya ilmiah populer biasanya diterbitkan melalui...",
    answers: [
      { text: "Jurnal ilmiah akademik", correct: false },
      { text: "Prosiding konferensi", correct: false },
      { text: "Majalah atau surat kabar", correct: true },
      { text: "Repositori universitas", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pernyataan yang paling tepat tentang karya ilmiah adalah...",
    answers: [
      { text: "Karya ilmiah adalah tulisan yang dibuat berdasarkan penelitian atau pengamatan yang sistematis, logis, dan objektif", correct: true },
      { text: "Karya ilmiah adalah tulisan bebas yang berisi opini penulis tentang suatu topik", correct: false },
      { text: "Karya ilmiah adalah tulisan kreatif yang bertujuan untuk menghibur pembaca", correct: false },
      { text: "Karya ilmiah adalah tulisan yang berisi kutipan-kutipan dari berbagai sumber tanpa analisis", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Etika penulisan karya ilmiah yang berkaitan dengan penggunaan sumber referensi adalah...",
    answers: [
      { text: "Menyalin sumber tanpa menyebutkan referensi", correct: false },
      { text: "Mengutip sumber secara berlebihan tanpa analisis", correct: false },
      { text: "Mencantumkan semua sumber yang dirujuk dalam daftar pustaka", correct: true },
      { text: "Hanya mencantumkan sumber yang mendukung pendapat penulis", correct: false }
    ],
    difficulty: "sedang"
  }
];