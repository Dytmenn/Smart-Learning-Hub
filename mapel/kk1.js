const materi = {
  judul: "KK1 Penerapan Rangkaian Elektronika XI TEI",
  deskripsi: "Materi ini membahas tentang rangkaian elektronika, meliputi pengukuran, rangkaian op-amp, power supply, dioda, penyearah, dan rangkaian digital sebagai dasar pemahaman siswa dalam penerapan rangkaian elektronika."
};const soal = [
  {
    question: "Apa yang dimaksud dengan penyinaran langsung dari matahari?",
    answers: [
      { text: "Cahaya matahari yang dipantulkan oleh awan", correct: false },
      { text: "Cahaya matahari yang melewati lapisan atmosfer tanpa gangguan", correct: true },
      { text: "Cahaya matahari yang tersebar oleh polutan di udara", correct: false },
      { text: "Cahaya matahari yang diserap oleh permukaan bumi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Apa yang dimaksud dengan penyinaran difusi?",
    answers: [
      { text: "Cahaya matahari yang diserap oleh atmosfer", correct: false },
      { text: "Cahaya matahari yang mengalami penyebaran oleh partikel di atmosfer", correct: false },
      { text: "Cahaya matahari yang dipantulkan oleh permukaan bumi, atmosfer, awan", correct: true },
      { text: "Cahaya matahari yang dipancarkan dari sumber lain", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Penyinaran matahari yang tidak langsung akibat pengaruh awan disebut",
    answers: [
      { text: "Penyinaran terbenam", correct: false },
      { text: "Penyinaran global", correct: false },
      { text: "Penyinaran langsung", correct: false },
      { text: "Penyinaran difusi", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "Apa pengaruh dari penyinaran matahari yang terhambat oleh awan terhadap suhu bumi?",
    answers: [
      { text: "Meningkatkan suhu bumi", correct: false },
      { text: "Tidak mempengaruhi suhu bumi", correct: false },
      { text: "Menurunkan suhu bumi", correct: true },
      { text: "Mengubah suhu bumi secara tidak teratur", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pada waktu apa penyinaran matahari paling intensif di permukaan bumi?",
    answers: [
      { text: "Saat tengah hari", correct: true },
      { text: "Saat matahari terbit", correct: false },
      { text: "Saat matahari tenggelam", correct: false },
      { text: "Saat senja", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Bagaimana pengaruh adanya polusi udara terhadap penyinaran matahari?",
    answers: [
      { text: "Mengurangi intensitas penyinaran langsung", correct: true },
      { text: "Meningkatkan intensitas penyinaran langsung", correct: false },
      { text: "Tidak mempengaruhi intensitas penyinaran", correct: false },
      { text: "Mengubah penyinaran menjadi radiasi panas", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Apa yang dimaksud dengan penyinaran matahari difusi?",
    answers: [
      { text: "Cahaya matahari yang melewati lapisan atmosfer tanpa gangguan", correct: false },
      { text: "Cahaya matahari yang dipantulkan kembali oleh permukaan bumi", correct: false },
      { text: "Cahaya matahari yang tersebar secara merata di seluruh langit akibat partikel di atmosfer", correct: true },
      { text: "Cahaya matahari yang diserap oleh awan dan tidak mencapai permukaan bumi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Apa yang menyebabkan terjadinya penyinaran difusi?",
    answers: [
      { text: "Pemantulan cahaya matahari oleh permukaan laut", correct: false },
      { text: "Penyerapan cahaya matahari oleh awan", correct: false },
      { text: "Penyebaran cahaya matahari oleh partikel dan molekul di atmosfer", correct: true },
      { text: "Perubahan sudut matahari di langit", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Bagaimana pengaruh penyinaran difusi terhadap kualitas cahaya di permukaan bumi?",
    answers: [
      { text: "Menghasilkan cahaya yang lebih terang dan kontras", correct: false },
      { text: "Mengurangi intensitas cahaya matahari dan menghasilkan cahaya yang lebih lembut dan merata", correct: true },
      { text: "Meningkatkan intensitas cahaya matahari secara signifikan", correct: false },
      { text: "Membuat cahaya matahari lebih berwarna-warni", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Apa yang dimaksud dengan penyinaran matahari global?",
    answers: [
      { text: "Jumlah total energi matahari yang diterima oleh permukaan bumi dalam jangka waktu tertentu", correct: true },
      { text: "Cahaya matahari yang hanya diterima oleh wilayah tertentu pada waktu tertentu", correct: false },
      { text: "Cahaya matahari yang dipantulkan oleh awan dan kembali ke luar angkasa", correct: false },
      { text: "Cahaya matahari yang terdistribusi secara merata di seluruh atmosfer bumi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Apa yang mempengaruhi jumlah penyinaran matahari global yang diterima suatu wilayah?",
    answers: [
      { text: "Ketinggian gunung dan tipe tanah", correct: false },
      { text: "Sudut datangnya sinar matahari dan durasi waktu matahari terbit dan terbenam", correct: true },
      { text: "Warna permukaan laut dan albedo atmosfer", correct: false },
      { text: "Jumlah partikel debu di atmosfer dan jarak ke matahari", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Bagaimana peran efek rumah kaca terhadap penyinaran matahari global?",
    answers: [
      { text: "Meningkatkan penyinaran global secara langsung", correct: false },
      { text: "Mengurangi penyinaran global dengan menyerap energi matahari", correct: false },
      { text: "Memantulkan cahaya matahari ke luar angkasa", correct: false },
      { text: "Mengurangi kehilangan panas dari permukaan bumi dan mempengaruhi suhu global", correct: true }
    ],
    difficulty: "sulit"
  },
  {
    question: "Apa prinsip dasar kerja sel surya dalam mengubah energi matahari menjadi listrik?",
    answers: [
      { text: "Menggunakan efek fotovoltaik", correct: true },
      { text: "Menggunakan reaksi kimia", correct: false },
      { text: "Mengubah energi menjadi panas dahulu", correct: false },
      { text: "Memanfaatkan pemanasan langsung", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Apa yang terjadi ketika cahaya matahari mengenai permukaan sel surya?",
    answers: [
      { text: "Cahaya dipantulkan kembali ke atmosfer", correct: false },
      { text: "Energi menjadi energi kinetik", correct: false },
      { text: "Foton menumbuk material semikonduktor menghasilkan arus listrik", correct: true },
      { text: "Terjadi reaksi kimia menghasilkan gas", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Apa peran material semikonduktor dalam sel surya?",
    answers: [
      { text: "Menyimpan energi matahari", correct: false },
      { text: "Memantulkan cahaya matahari", correct: false },
      { text: "Menghasilkan pasangan elektron-lubang untuk aliran listrik", correct: true },
      { text: "Menyaring cahaya matahari", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Apa ciri utama sel surya monokristal?",
    answers: [
      { text: "Terbuat dari beberapa kristal silikon", correct: false },
      { text: "Terbuat dari satu kristal silikon tunggal", correct: true },
      { text: "Menggunakan bahan amorf", correct: false },
      { text: "Campuran silikon dan logam", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Keuntungan utama sel surya monokristal adalah",
    answers: [
      { text: "Efisiensi konversi energi lebih tinggi", correct: true },
      { text: "Biaya produksi lebih rendah", correct: false },
      { text: "Lebih fleksibel", correct: false },
      { text: "Umur lebih pendek", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Mengapa sel surya monokristal memiliki sudut membulat?",
    answers: [
      { text: "Meningkatkan kekuatan mekanik", correct: false },
      { text: "Mempermudah instalasi", correct: false },
      { text: "Desain estetika", correct: false },
      { text: "Mengurangi pemborosan material", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Ciri utama sel surya polikristal adalah",
    answers: [
      { text: "Satu kristal silikon tunggal", correct: false },
      { text: "Bahan amorf", correct: false },
      { text: "Banyak kristal silikon dalam satu lapisan", correct: true },
      { text: "Campuran berbagai material", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Keuntungan utama sel surya polikristal adalah",
    answers: [
      { text: "Efisiensi lebih tinggi", correct: false },
      { text: "Lebih tahan cuaca", correct: false },
      { text: "Biaya produksi lebih rendah", correct: true },
      { text: "Lebih fleksibel", correct: false }
    ],
    difficulty: "sedang"
  },

  {
    question: "Material yang paling umum digunakan pada sel surya adalah",
    answers: [
      { text: "Silikon", correct: true },
      { text: "Aluminium", correct: false },
      { text: "Plastik", correct: false },
      { text: "Tembaga", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Fungsi inverter dalam sistem tenaga surya adalah",
    answers: [
      { text: "Mengubah energi listrik menjadi panas", correct: false },
      { text: "Mengubah arus DC menjadi AC", correct: true },
      { text: "Menyimpan energi listrik", correct: false },
      { text: "Menghubungkan panel dengan baterai", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Peran diode bypass pada modul surya adalah",
    answers: [
      { text: "Mengatur tegangan listrik", correct: false },
      { text: "Mencegah arus balik yang merusak sel surya", correct: true },
      { text: "Menyimpan energi listrik", correct: false },
      { text: "Menghubungkan panel dengan inverter", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Fungsi kaca tempered pada modul surya adalah",
    answers: [
      { text: "Melindungi sel surya dari kerusakan fisik", correct: true },
      { text: "Menyerap cahaya matahari", correct: false },
      { text: "Meningkatkan efisiensi listrik", correct: false },
      { text: "Mengubah arah cahaya matahari", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Perbedaan utama sistem PLTS on-grid dan off-grid adalah",
    answers: [
      { text: "On-grid tidak memakai inverter", correct: false },
      { text: "Off-grid lebih efisien", correct: false },
      { text: "Off-grid memakai panel lebih besar", correct: false },
      { text: "On-grid terhubung ke jaringan listrik sedangkan off-grid tidak", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Komponen yang ada pada sistem PLTS off-grid tetapi tidak pada on-grid adalah",
    answers: [
      { text: "Baterai penyimpanan", correct: true },
      { text: "Inverter", correct: false },
      { text: "Panel surya", correct: false },
      { text: "Meter listrik", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Apa yang terjadi jika listrik berlebih pada sistem PLTS on-grid?",
    answers: [
      { text: "Disimpan di baterai", correct: false },
      { text: "Dibuang", correct: false },
      { text: "Dijual kembali ke jaringan listrik umum", correct: true },
      { text: "Sistem mati otomatis", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Apa fungsi inverter pada sistem PLTS on-grid?",
    answers: [
      { text: "Mengubah listrik DC dari panel menjadi AC untuk digunakan", correct: true },
      { text: "Menyimpan energi listrik", correct: false },
      { text: "Menghubungkan ke internet", correct: false },
      { text: "Mengatur penggunaan listrik siang dan malam", correct: false }
    ],
    difficulty: "mudah"
  }
];
