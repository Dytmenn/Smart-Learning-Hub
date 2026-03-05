const materi = {
  judul: "Pendidikan Agama Islam Kelas XII - Q.S. Al-Qasas:85 dan Q.S. Al-Baqarah:143",
  deskripsi: `
  =====================================================
  1️⃣ Q.S. AL-QASAS AYAT 85
  =====================================================

  Artinya:
  "Sesungguhnya (Allah) yang mewajibkan atasmu (Muhammad) 
  melaksanakan hukum-hukum Al-Qur'an benar-benar akan 
  mengembalikanmu ke tempat kembali. Katakanlah: 
  Tuhanku mengetahui orang yang membawa petunjuk 
  dan orang yang berada dalam kesesatan yang nyata."

  📌 Makna Kandungan:
  - Janji Allah kepada Nabi Muhammad SAW
  - Allah akan mengembalikan Nabi ke Makkah
  - Allah Maha Mengetahui siapa yang mendapat petunjuk
  - Penegasan bahwa kebenaran akan menang

  📌 Asbabun Nuzul:
  Ayat ini turun sebagai penguatan janji Allah kepada Nabi
  Muhammad SAW bahwa beliau akan dikembalikan ke Makkah
  setelah hijrah dan diusir dari kota tersebut.

  =====================================================
  2️⃣ Q.S. AL-BAQARAH AYAT 143
  =====================================================

  Artinya:
  "Dan demikian (pula) Kami telah menjadikan kamu (umat Islam) 
  umat yang pertengahan agar kamu menjadi saksi atas (perbuatan) 
  manusia dan agar Rasul (Muhammad) menjadi saksi atas kamu..."

  📌 Makna Kandungan:
  - Umat Islam sebagai umat pertengahan (ummatan wasathan)
  - Umat yang adil dan seimbang
  - Peristiwa pemindahan kiblat
  - Ujian bagi orang beriman

  📌 Asbabun Nuzul:
  Ayat ini turun terkait peristiwa pemindahan kiblat
  dari Baitul Maqdis ke Ka'bah di Makkah.
  Peristiwa ini menjadi ujian bagi kaum muslimin.

  =====================================================
  💡 Nilai yang Terkandung:
  - Keimanan kepada janji Allah
  - Kesabaran dalam ujian
  - Keadilan dan keseimbangan
  - Ketaatan kepada Rasul
  `
};

const soal = [

  // ================= 1–10 (MUDAH) =================

  {
    question: "Q.S. Al-Qasas ayat 85 berisi tentang...",
    answers: [
      { text: "Janji Allah kepada Nabi Muhammad", correct: true },
      { text: "Perintah puasa", correct: false },
      { text: "Larangan riba", correct: false },
      { text: "Kisah Nabi Musa", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Allah berjanji akan mengembalikan Nabi Muhammad ke...",
    answers: [
      { text: "Makkah", correct: true },
      { text: "Madinah", correct: false },
      { text: "Thaif", correct: false },
      { text: "Syam", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Umat pertengahan disebut dalam Al-Qur'an sebagai...",
    answers: [
      { text: "Ummatan wasathan", correct: true },
      { text: "Khairu ummah", correct: false },
      { text: "Ummatan wahidah", correct: false },
      { text: "Ahlul kitab", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pemindahan kiblat terjadi dari...",
    answers: [
      { text: "Baitul Maqdis ke Ka'bah", correct: true },
      { text: "Ka'bah ke Madinah", correct: false },
      { text: "Makkah ke Syam", correct: false },
      { text: "Thaif ke Makkah", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Q.S. Al-Baqarah ayat 143 menjelaskan bahwa umat Islam adalah umat yang...",
    answers: [
      { text: "Adil dan seimbang", correct: true },
      { text: "Paling kaya", correct: false },
      { text: "Paling kuat", correct: false },
      { text: "Paling banyak", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Peristiwa hijrah Nabi terjadi dari Makkah ke...",
    answers: [
      { text: "Madinah", correct: true },
      { text: "Thaif", correct: false },
      { text: "Syam", correct: false },
      { text: "Yaman", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Ka'bah berada di kota...",
    answers: [
      { text: "Makkah", correct: true },
      { text: "Madinah", correct: false },
      { text: "Yerusalem", correct: false },
      { text: "Baghdad", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Baitul Maqdis terletak di...",
    answers: [
      { text: "Yerusalem", correct: true },
      { text: "Makkah", correct: false },
      { text: "Madinah", correct: false },
      { text: "Mesir", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Salah satu nilai dalam Q.S. Al-Qasas:85 adalah...",
    answers: [
      { text: "Percaya pada janji Allah", correct: true },
      { text: "Bersikap ragu", correct: false },
      { text: "Takut berdakwah", correct: false },
      { text: "Menghindari ujian", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Umat Islam dijadikan saksi atas...",
    answers: [
      { text: "Perbuatan manusia", correct: true },
      { text: "Malaikat", correct: false },
      { text: "Jin", correct: false },
      { text: "Hewan", correct: false }
    ],
    difficulty: "mudah"
  },

  // ================= 11–20 (SEDANG) =================

  {
    question: "Asbabun nuzul Q.S. Al-Qasas:85 berkaitan dengan...",
    answers: [
      { text: "Janji Allah setelah hijrah", correct: true },
      { text: "Perang Uhud", correct: false },
      { text: "Isra Mi'raj", correct: false },
      { text: "Turunnya zakat", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Makna 'tempat kembali' dalam Q.S. Al-Qasas:85 adalah...",
    answers: [
      { text: "Makkah", correct: true },
      { text: "Surga", correct: false },
      { text: "Madinah", correct: false },
      { text: "Syam", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pemindahan kiblat menunjukkan bahwa seorang mukmin harus...",
    answers: [
      { text: "Taat pada perintah Allah", correct: true },
      { text: "Memilih aturan sendiri", correct: false },
      { text: "Menolak perubahan", correct: false },
      { text: "Mengikuti mayoritas", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tujuan dijadikannya umat Islam sebagai ummatan wasathan adalah agar...",
    answers: [
      { text: "Menjadi saksi atas manusia", correct: true },
      { text: "Menjadi bangsa terbesar", correct: false },
      { text: "Menjadi bangsa terkaya", correct: false },
      { text: "Menguasai dunia", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Hikmah ujian pemindahan kiblat adalah untuk mengetahui...",
    answers: [
      { text: "Siapa yang taat dan siapa yang ragu", correct: true },
      { text: "Siapa yang kaya", correct: false },
      { text: "Siapa yang kuat", correct: false },
      { text: "Siapa yang terkenal", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Allah tidak akan menyia-nyiakan...",
    answers: [
      { text: "Iman orang beriman", correct: true },
      { text: "Harta manusia", correct: false },
      { text: "Kekuasaan dunia", correct: false },
      { text: "Jabatan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sikap yang sesuai dengan Q.S. Al-Qasas:85 adalah...",
    answers: [
      { text: "Sabar dan yakin pada janji Allah", correct: true },
      { text: "Putus asa", correct: false },
      { text: "Takut berjuang", correct: false },
      { text: "Menyerah", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Peristiwa pemindahan kiblat terjadi pada tahun...",
    answers: [
      { text: "Di Madinah setelah hijrah", correct: true },
      { text: "Sebelum kenabian", correct: false },
      { text: "Saat di Thaif", correct: false },
      { text: "Saat di Gua Hira", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Makna ummatan wasathan adalah umat yang...",
    answers: [
      { text: "Seimbang dan tidak ekstrem", correct: true },
      { text: "Keras dan kasar", correct: false },
      { text: "Lemah", correct: false },
      { text: "Fanatik buta", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Q.S. Al-Baqarah ayat 143 termasuk surah yang turun di...",
    answers: [
      { text: "Madinah", correct: true },
      { text: "Makkah", correct: false },
      { text: "Thaif", correct: false },
      { text: "Yaman", correct: false }
    ],
    difficulty: "sedang"
  },

  // ================= 21–30 (SUSAH) =================

  {
    question: "Nilai utama dari Q.S. Al-Qasas:85 adalah...",
    answers: [
      { text: "Keyakinan terhadap pertolongan Allah", correct: true },
      { text: "Kebebasan mutlak", correct: false },
      { text: "Kekuasaan manusia", correct: false },
      { text: "Keuntungan dunia", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Makna saksi dalam Q.S. Al-Baqarah:143 adalah...",
    answers: [
      { text: "Memberi kesaksian atas amal manusia", correct: true },
      { text: "Menghukum manusia", correct: false },
      { text: "Mengatur dunia", correct: false },
      { text: "Menjadi penguasa", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Sikap moderat dalam Islam berarti...",
    answers: [
      { text: "Tidak berlebihan dan tidak meremehkan", correct: true },
      { text: "Bersikap keras", correct: false },
      { text: "Selalu ekstrem", correct: false },
      { text: "Mengikuti hawa nafsu", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Pemindahan kiblat menjadi bukti bahwa hukum Allah...",
    answers: [
      { text: "Harus ditaati tanpa ragu", correct: true },
      { text: "Boleh ditolak", correct: false },
      { text: "Bisa diubah manusia", correct: false },
      { text: "Tidak penting", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Pelajaran penting dari hijrah Nabi adalah...",
    answers: [
      { text: "Kesabaran dan strategi dalam berdakwah", correct: true },
      { text: "Menghindari tanggung jawab", correct: false },
      { text: "Takut menghadapi ujian", correct: false },
      { text: "Mencari kekuasaan", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Allah Maha Mengetahui siapa yang berada dalam...",
    answers: [
      { text: "Petunjuk dan kesesatan", correct: true },
      { text: "Kekayaan", correct: false },
      { text: "Kedudukan", correct: false },
      { text: "Popularitas", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Ketaatan dalam perubahan kiblat menunjukkan sikap...",
    answers: [
      { text: "Tunduk pada perintah Allah", correct: true },
      { text: "Egois", correct: false },
      { text: "Sombong", correct: false },
      { text: "Ragu-ragu", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Hikmah menjadi umat pertengahan adalah...",
    answers: [
      { text: "Menjadi contoh keadilan bagi umat lain", correct: true },
      { text: "Menjadi penguasa dunia", correct: false },
      { text: "Mencari pujian", correct: false },
      { text: "Menghindari tanggung jawab", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Kandungan utama kedua ayat tersebut adalah...",
    answers: [
      { text: "Keimanan, ketaatan, dan keseimbangan", correct: true },
      { text: "Kekayaan dunia", correct: false },
      { text: "Kekuatan fisik", correct: false },
      { text: "Kebebasan tanpa aturan", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Sikap terbaik menghadapi ujian menurut kedua ayat tersebut adalah...",
    answers: [
      { text: "Sabar dan yakin pada Allah", correct: true },
      { text: "Mengeluh", correct: false },
      { text: "Putus asa", correct: false },
      { text: "Menyerah", correct: false }
    ],
    difficulty: "susah"
  }

];
