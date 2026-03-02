const materi = {
  judul: "Bahasa Indonesia Kelas 12 SMK - Surat Lamaran, Karya Ilmiah, dan Jenis Teks",
  deskripsi: `
  =====================================================
  1️⃣ SURAT LAMARAN PEKERJAAN
  =====================================================

  Surat lamaran pekerjaan adalah surat resmi yang dibuat oleh seseorang untuk melamar pekerjaan pada suatu perusahaan atau instansi.

  🎯 Tujuan:
  - Memperkenalkan diri
  - Menyampaikan posisi yang dilamar
  - Menjelaskan kualifikasi
  - Meminta kesempatan wawancara

  📌 Sistematika Surat Lamaran:
  1. Tempat dan tanggal surat
  2. Lampiran dan perihal
  3. Alamat tujuan
  4. Salam pembuka
  5. Paragraf pembuka (posisi yang dilamar & sumber informasi)
  6. Paragraf isi (data diri, pendidikan, pengalaman, keahlian)
  7. Paragraf penutup (harapan dan ucapan terima kasih)
  8. Salam penutup
  9. Tanda tangan dan nama jelas
  10. Lampiran (CV, ijazah, sertifikat)

  =====================================================
  2️⃣ KARYA ILMIAH
  =====================================================

  Karya ilmiah adalah tulisan yang disusun secara sistematis berdasarkan fakta dan data yang dapat dipertanggungjawabkan.

  📌 Ciri-ciri:
  - Objektif
  - Sistematis
  - Logis
  - Menggunakan bahasa baku

  📌 Sistematika Karya Ilmiah:
  1. Judul
  2. Pendahuluan (latar belakang, rumusan masalah, tujuan)
  3. Kajian teori
  4. Metode penelitian
  5. Hasil dan pembahasan
  6. Kesimpulan dan saran
  7. Daftar pustaka

  =====================================================
  3️⃣ GAGASAN POKOK / IDE POKOK
  =====================================================

  Gagasan pokok adalah ide utama yang menjadi dasar pengembangan sebuah paragraf.

  📌 Ciri:
  - Mengandung inti pembahasan
  - Biasanya terdapat di awal atau akhir paragraf

  =====================================================
  4️⃣ TEKS DESKRIPSI
  =====================================================

  Teks deskripsi adalah teks yang menggambarkan suatu objek secara rinci sehingga pembaca seolah-olah melihat atau merasakan langsung.

  Ciri:
  - Menggunakan kata sifat
  - Menggambarkan objek secara detail

  =====================================================
  5️⃣ TEKS EKSPOSISI
  =====================================================

  Teks eksposisi adalah teks yang berisi informasi dan penjelasan untuk menambah pengetahuan pembaca.

  Struktur:
  - Tesis
  - Argumentasi
  - Penegasan ulang

  =====================================================
  6️⃣ TEKS ARGUMENTASI
  =====================================================

  Teks argumentasi adalah teks yang bertujuan meyakinkan pembaca dengan menyertakan alasan dan bukti.

  Ciri:
  - Ada pendapat
  - Ada fakta sebagai pendukung
  - Bersifat meyakinkan
  `
};

const soal = [

  // ================= MUDAH (1-10) =================
  {
    question: "Surat lamaran pekerjaan termasuk jenis surat...",
    answers: [
      { text: "Pribadi", correct: false },
      { text: "Resmi", correct: true },
      { text: "Tidak resmi", correct: false },
      { text: "Undangan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Bagian yang berisi posisi yang dilamar terdapat pada...",
    answers: [
      { text: "Paragraf pembuka", correct: true },
      { text: "Salam penutup", correct: false },
      { text: "Lampiran", correct: false },
      { text: "Tanda tangan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Karya ilmiah harus menggunakan bahasa...",
    answers: [
      { text: "Gaul", correct: false },
      { text: "Baku", correct: true },
      { text: "Daerah", correct: false },
      { text: "Slang", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Gagasan pokok biasanya terletak pada...",
    answers: [
      { text: "Awal atau akhir paragraf", correct: true },
      { text: "Tengah kalimat", correct: false },
      { text: "Judul saja", correct: false },
      { text: "Penutup buku", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Teks yang menggambarkan suatu objek secara rinci disebut...",
    answers: [
      { text: "Eksposisi", correct: false },
      { text: "Deskripsi", correct: true },
      { text: "Argumentasi", correct: false },
      { text: "Narasi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Struktur teks eksposisi terdiri dari...",
    answers: [
      { text: "Tesis, argumentasi, penegasan ulang", correct: true },
      { text: "Orientasi, komplikasi, resolusi", correct: false },
      { text: "Pembuka, isi, penutup", correct: false },
      { text: "Abstrak, isi, koda", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Teks argumentasi bertujuan untuk...",
    answers: [
      { text: "Menghibur", correct: false },
      { text: "Meyakinkan pembaca", correct: true },
      { text: "Menggambarkan tempat", correct: false },
      { text: "Menceritakan pengalaman", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Daftar pustaka terdapat pada bagian...",
    answers: [
      { text: "Karya ilmiah", correct: true },
      { text: "Surat pribadi", correct: false },
      { text: "Teks deskripsi", correct: false },
      { text: "Teks narasi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Lampiran dalam surat lamaran berisi...",
    answers: [
      { text: "CV dan sertifikat", correct: true },
      { text: "Cerita pribadi", correct: false },
      { text: "Puisi", correct: false },
      { text: "Undangan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Rumusan masalah terdapat dalam bagian...",
    answers: [
      { text: "Pendahuluan karya ilmiah", correct: true },
      { text: "Salam pembuka", correct: false },
      { text: "Lampiran", correct: false },
      { text: "Penutup surat", correct: false }
    ],
    difficulty: "mudah"
  },

  // ================= SEDANG (11-20) =================
  {
    question: "Paragraf yang berisi inti pembahasan disebut...",
    answers: [
      { text: "Paragraf utama", correct: true },
      { text: "Paragraf tambahan", correct: false },
      { text: "Paragraf penutup", correct: false },
      { text: "Paragraf dialog", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Bagian metode penelitian berisi tentang...",
    answers: [
      { text: "Cara pengumpulan data", correct: true },
      { text: "Ucapan terima kasih", correct: false },
      { text: "Riwayat hidup", correct: false },
      { text: "Salam penutup", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Kalimat utama dalam paragraf mengandung...",
    answers: [
      { text: "Gagasan pokok", correct: true },
      { text: "Contoh", correct: false },
      { text: "Data tambahan", correct: false },
      { text: "Ilustrasi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Teks eksposisi bersifat...",
    answers: [
      { text: "Informatif", correct: true },
      { text: "Imajinatif", correct: false },
      { text: "Fiktif", correct: false },
      { text: "Khayan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Ciri teks argumentasi adalah adanya...",
    answers: [
      { text: "Fakta pendukung", correct: true },
      { text: "Dialog panjang", correct: false },
      { text: "Alur cerita", correct: false },
      { text: "Tokoh", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Bahasa dalam karya ilmiah harus bersifat...",
    answers: [
      { text: "Objektif", correct: true },
      { text: "Subjektif", correct: false },
      { text: "Emosional", correct: false },
      { text: "Santai", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Paragraf yang berisi kesimpulan dalam karya ilmiah terdapat pada bagian...",
    answers: [
      { text: "Penutup", correct: true },
      { text: "Pendahuluan", correct: false },
      { text: "Metode", correct: false },
      { text: "Kajian teori", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Teks deskripsi banyak menggunakan...",
    answers: [
      { text: "Kata sifat", correct: true },
      { text: "Kata hubung sebab", correct: false },
      { text: "Dialog", correct: false },
      { text: "Rumus", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tujuan teks eksposisi adalah...",
    answers: [
      { text: "Memberi penjelasan", correct: true },
      { text: "Menghibur", correct: false },
      { text: "Membuat konflik", correct: false },
      { text: "Bercerita", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Bagian alamat tujuan dalam surat lamaran terletak setelah...",
    answers: [
      { text: "Lampiran dan perihal", correct: true },
      { text: "Tanda tangan", correct: false },
      { text: "Penutup", correct: false },
      { text: "Kesimpulan", correct: false }
    ],
    difficulty: "sedang"
  },

  // ================= SUSAH (21-30) =================
  {
    question: "Jika suatu paragraf memiliki kalimat utama di akhir, maka paragraf tersebut disebut...",
    answers: [
      { text: "Induktif", correct: true },
      { text: "Deduktif", correct: false },
      { text: "Naratif", correct: false },
      { text: "Dialogis", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Dalam karya ilmiah, data harus bersifat...",
    answers: [
      { text: "Valid dan dapat dipertanggungjawabkan", correct: true },
      { text: "Rekaan", correct: false },
      { text: "Fiktif", correct: false },
      { text: "Pribadi", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Perbedaan utama teks eksposisi dan argumentasi terletak pada...",
    answers: [
      { text: "Tujuan meyakinkan pembaca", correct: true },
      { text: "Jumlah paragraf", correct: false },
      { text: "Panjang teks", correct: false },
      { text: "Jenis huruf", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Penegasan ulang dalam teks eksposisi berfungsi untuk...",
    answers: [
      { text: "Memperkuat pendapat", correct: true },
      { text: "Menghibur pembaca", correct: false },
      { text: "Menambah tokoh", correct: false },
      { text: "Membuat konflik", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Isi paragraf dalam teks deskripsi harus bersifat...",
    answers: [
      { text: "Detail dan konkret", correct: true },
      { text: "Fiktif penuh konflik", correct: false },
      { text: "Berisi dialog", correct: false },
      { text: "Berupa perintah", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Tujuan utama surat lamaran pekerjaan adalah...",
    answers: [
      { text: "Mendapatkan kesempatan kerja", correct: true },
      { text: "Mengundang rapat", correct: false },
      { text: "Menyampaikan cerita", correct: false },
      { text: "Memberi kritik", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Dalam karya ilmiah, pendapat harus didukung oleh...",
    answers: [
      { text: "Data dan fakta", correct: true },
      { text: "Opini pribadi", correct: false },
      { text: "Cerita fiksi", correct: false },
      { text: "Dialog", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Kalimat yang berisi simpulan disebut...",
    answers: [
      { text: "Kalimat penutup", correct: true },
      { text: "Kalimat pembuka", correct: false },
      { text: "Kalimat dialog", correct: false },
      { text: "Kalimat tanya", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Ciri utama teks argumentasi adalah bersifat...",
    answers: [
      { text: "Persuasif", correct: true },
      { text: "Deskriptif", correct: false },
      { text: "Naratif", correct: false },
      { text: "Dialogis", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Bagian yang berisi latar belakang masalah terdapat dalam...",
    answers: [
      { text: "Pendahuluan karya ilmiah", correct: true },
      { text: "Lampiran", correct: false },
      { text: "Salam penutup", correct: false },
      { text: "Tanda tangan", correct: false }
    ],
    difficulty: "susah"
  }
];
