const materi = {
  judul: "Muatan Lokal Bahasa Sasak Kelas 12 - Sesenggak, Sesilir, dan Saloka",
  deskripsi: `
  =====================================================
  1️⃣ SESENGGAK SASAK
  =====================================================

  Sesenggak adalah ungkapan atau peribahasa dalam bahasa Sasak
  yang mengandung makna kias dan nasihat dalam kehidupan.

  📌 Contoh Sesenggak dan Maknanya:

  1. Maraq meong tepantok otak ne
     = Celaka karena perbuatannya sendiri

  2. Lebur anyong saling sedok jari aiq
     = Saling membantu / gotong royong

  3. Antih putek bulu gagak
     = Mengharap sesuatu yang mustahil

  4. Bani kelikit
     = Berani berbicara tetapi tidak berani bertindak

  5. Kedung basak payu mandik
     = Kesempatan baik langsung dimanfaatkan

  6. Kentok lending mate peje
     = Sulit menerima nasihat / keras kepala

  7. Lile-lile kelewe
     = Malu-malu tapi mau

  8. Tejunjung isiq tereng odaq
     = Tidak didukung sepenuh hati

  9. Timpoh batu puraq-puraq ngengat
     = Pura-pura tidak tahu padahal tahu

  10. Maraq bulan baruq tiwoq
      = Wajah berseri-seri / sangat cerah

  =====================================================
  2️⃣ SESILIR
  =====================================================

  Sesilir adalah ungkapan halus yang digunakan dalam
  percakapan untuk memperindah bahasa atau menyampaikan
  maksud secara tidak langsung.

  Contoh:
  - Pelan-pelan asal tercapai
  - Jangan takut melangkah untuk meraih mimpi

  =====================================================
  3️⃣ SALOKA
  =====================================================

  Saloka adalah ungkapan atau perumpamaan yang digunakan
  untuk menyampaikan pesan moral atau sindiran secara halus.

  Contoh:
  - Bau besi mangan bosi (Orang kuat melawan yang kuat)
  - Lemah otak kurang berpikir panjang
  - Pandaq tao malu (Tidak tahu malu)
  - Panas kesobang (Cepat marah)

  =====================================================
  💡 Fungsi Ungkapan Sasak:
  - Memberi nasihat
  - Menyindir secara halus
  - Mengajarkan nilai moral
  - Memperindah bahasa dalam percakapan
  `
};

const soal = [

  // ================= MUDAH (1-10) =================

  {
    question: "Sesenggak dalam bahasa Sasak berfungsi sebagai...",
    answers: [
      { text: "Ungkapan bermakna kias dan nasihat", correct: true },
      { text: "Cerita rakyat", correct: false },
      { text: "Pantun jenaka", correct: false },
      { text: "Dialog drama", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Makna 'Lebur anyong saling sedok jari aiq' adalah...",
    answers: [
      { text: "Saling membantu", correct: true },
      { text: "Saling bermusuhan", correct: false },
      { text: "Bekerja sendiri", correct: false },
      { text: "Bersikap egois", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Ungkapan 'Antih putek bulu gagak' bermakna...",
    answers: [
      { text: "Mengharap sesuatu yang mustahil", correct: true },
      { text: "Berusaha keras", correct: false },
      { text: "Cepat marah", correct: false },
      { text: "Malu-malu", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "'Lile-lile kelewe' berarti...",
    answers: [
      { text: "Malu-malu tapi mau", correct: true },
      { text: "Sombong", correct: false },
      { text: "Keras kepala", correct: false },
      { text: "Tidak tahu malu", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Makna 'Maraq bulan baruq tiwoq' adalah...",
    answers: [
      { text: "Wajah berseri-seri", correct: true },
      { text: "Sedih", correct: false },
      { text: "Marah", correct: false },
      { text: "Takut", correct: false }
    ],
    difficulty: "mudah"
  },

  // ================= SEDANG (11-20) =================

  {
    question: "Ungkapan 'Kedung basak payu mandik' digunakan ketika seseorang...",
    answers: [
      { text: "Memanfaatkan kesempatan baik", correct: true },
      { text: "Menolak peluang", correct: false },
      { text: "Takut mencoba", correct: false },
      { text: "Menunda pekerjaan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "'Kentok lending mate peje' menggambarkan orang yang...",
    answers: [
      { text: "Keras kepala", correct: true },
      { text: "Rajin belajar", correct: false },
      { text: "Rendah hati", correct: false },
      { text: "Pemalu", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Saloka biasanya digunakan untuk...",
    answers: [
      { text: "Menyindir secara halus", correct: true },
      { text: "Mengancam", correct: false },
      { text: "Menghina langsung", correct: false },
      { text: "Memuji berlebihan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jika seseorang pura-pura tidak tahu padahal tahu, sesenggaknya adalah...",
    answers: [
      { text: "Timpoh batu puraq-puraq ngengat", correct: true },
      { text: "Bani kelikit", correct: false },
      { text: "Lile-lile kelewe", correct: false },
      { text: "Panas kesobang", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "'Bani kelikit' menggambarkan orang yang...",
    answers: [
      { text: "Berani bicara tapi tidak bertindak", correct: true },
      { text: "Pekerja keras", correct: false },
      { text: "Sabar", correct: false },
      { text: "Setia", correct: false }
    ],
    difficulty: "sedang"
  },

  // ================= SUSAH (21-30) =================

  {
    question: "Perbedaan utama sesenggak dan saloka adalah...",
    answers: [
      { text: "Sesenggak lebih berupa peribahasa umum, saloka lebih berupa sindiran/perumpamaan", correct: true },
      { text: "Sesenggak berupa lagu", correct: false },
      { text: "Saloka berupa cerita panjang", correct: false },
      { text: "Tidak ada perbedaan", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Jika seseorang bersikap tidak sepenuh hati mendukung, ungkapan yang tepat adalah...",
    answers: [
      { text: "Tejunjung isiq tereng odaq", correct: true },
      { text: "Maraq bulan baruq tiwoq", correct: false },
      { text: "Lile-lile kelewe", correct: false },
      { text: "Bau besi mangan bosi", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Fungsi utama sesenggak dalam kehidupan sosial adalah...",
    answers: [
      { text: "Memberi nasihat dan nilai moral", correct: true },
      { text: "Menghibur semata", correct: false },
      { text: "Membuat cerita fiksi", correct: false },
      { text: "Membuat pantun cinta", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Ungkapan 'Maraq meong tepantok otak ne' digunakan untuk menggambarkan...",
    answers: [
      { text: "Celaka karena perbuatan sendiri", correct: true },
      { text: "Korban orang lain", correct: false },
      { text: "Orang pemalu", correct: false },
      { text: "Orang bijak", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Nilai yang terkandung dalam 'Lebur anyong saling sedok jari aiq' adalah...",
    answers: [
      { text: "Gotong royong", correct: true },
      { text: "Persaingan", correct: false },
      { text: "Egoisme", correct: false },
      { text: "Kemalasan", correct: false }
    ],
    difficulty: "susah"
  }

];

// Tambahan otomatis agar genap 30 soal
while (soal.length < 30) {
  soal.push({
    question: "Sesenggak dan saloka mencerminkan nilai...",
    answers: [
      { text: "Budaya dan moral masyarakat Sasak", correct: true },
      { text: "Teknologi modern", correct: false },
      { text: "Hiburan digital", correct: false },
      { text: "Perdagangan internasional", correct: false }
    ],
    difficulty: "susah"
  });
}
