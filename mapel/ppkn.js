const materi = {
  judul: "PPKN: Hak Asasi Manusia dan Gotong Royong",
  deskripsi: `
  Materi ini membahas tentang Hak Asasi Manusia (HAM) serta nilai gotong royong dalam kehidupan bermasyarakat.

  **HAK-HAK SIPIL**
  - Hak untuk menentukan nasib sendiri
  - Hak untuk hidup
  - Hak untuk tidak disiksa
  - Hak untuk tidak dihukum mati secara sewenang-wenang
  - Hak untuk tidak ditahan secara sewenang-wenang
  - Hak atas peradilan yang adil

  **HAK-HAK EKONOMI DAN SOSIAL**
  - Hak untuk bekerja
  - Hak untuk mendapatkan upah yang layak
  - Hak untuk tidak dipaksa bekerja
  - Hak untuk cuti dan istirahat
  - Hak atas pangan
  - Hak atas perumahan
  - Hak atas kesehatan
  - Hak atas pendidikan

  **HAK-HAK KULTURAL**
  - Hak berpartisipasi dalam kegiatan kebudayaan
  - Hak menikmati kemajuan ilmu pengetahuan
  - Hak memperoleh perlindungan hasil karya (hak cipta)

  **HAK-HAK POLITIK**
  - Hak menyampaikan pendapat
  - Hak berkumpul dan berserikat
  - Hak mendapat persamaan di depan hukum
  - Hak memilih dan dipilih

  **HAK-HAK PEMBANGUNAN**
  - Hak atas lingkungan hidup yang sehat
  - Hak atas perumahan yang layak
  - Hak atas pelayanan kesehatan yang memadai

  **GOTONG ROYONG**
  Sikap bekerja bersama untuk mencapai tujuan bersama.
  Manfaatnya: mempererat persatuan, meringankan pekerjaan, menumbuhkan solidaritas.

  **KERJA BAKTI**
  Bentuk nyata gotong royong dalam masyarakat, seperti membersihkan lingkungan bersama.
  `,
};

const soal = [
  // ================= MUDAH (1–10) =================
  {
    question: "Hak untuk menentukan nasib sendiri dalam konteks negara termasuk bagian dari...",
    answers: [
      { text: "Hak sipil", correct: true },
      { text: "Hak ekonomi", correct: false },
      { text: "Hak kultural", correct: false },
      { text: "Hak pembangunan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Hak untuk memperoleh pendidikan yang layak termasuk kategori...",
    answers: [
      { text: "Hak ekonomi dan sosial", correct: true },
      { text: "Hak politik", correct: false },
      { text: "Hak sipil", correct: false },
      { text: "Hak pertahanan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Hak memilih dan dipilih dalam pemilu merupakan bentuk dari...",
    answers: [
      { text: "Hak politik", correct: true },
      { text: "Hak sipil", correct: false },
      { text: "Hak ekonomi", correct: false },
      { text: "Hak kultural", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Hak atas perlindungan hukum yang adil termasuk...",
    answers: [
      { text: "Hak sipil", correct: true },
      { text: "Hak ekonomi", correct: false },
      { text: "Hak budaya", correct: false },
      { text: "Hak pembangunan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Hak atas lingkungan hidup yang sehat termasuk dalam kategori...",
    answers: [
      { text: "Hak pembangunan", correct: true },
      { text: "Hak politik", correct: false },
      { text: "Hak sipil", correct: false },
      { text: "Hak kultural", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Partisipasi dalam kegiatan seni dan budaya merupakan bentuk pelaksanaan...",
    answers: [
      { text: "Hak kultural", correct: true },
      { text: "Hak sipil", correct: false },
      { text: "Hak politik", correct: false },
      { text: "Hak militer", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Gotong royong mencerminkan nilai utama dalam Pancasila yaitu...",
    answers: [
      { text: "Persatuan dan kebersamaan", correct: true },
      { text: "Individualisme", correct: false },
      { text: "Kompetisi bebas", correct: false },
      { text: "Liberalisme mutlak", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Hak untuk tidak disiksa termasuk dalam kelompok...",
    answers: [
      { text: "Hak sipil", correct: true },
      { text: "Hak ekonomi", correct: false },
      { text: "Hak pembangunan", correct: false },
      { text: "Hak perdagangan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Kerja bakti di lingkungan masyarakat menunjukkan penerapan nilai...",
    answers: [
      { text: "Solidaritas sosial", correct: true },
      { text: "Diskriminasi", correct: false },
      { text: "Eksklusivisme", correct: false },
      { text: "Materialisme", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Hak atas upah yang layak termasuk dalam kategori...",
    answers: [
      { text: "Hak ekonomi dan sosial", correct: true },
      { text: "Hak politik", correct: false },
      { text: "Hak sipil", correct: false },
      { text: "Hak pertahanan", correct: false }
    ],
    difficulty: "mudah"
  },

  // ================= SEDANG (11–20) =================
  {
    question: "Penahanan seseorang tanpa proses hukum yang jelas merupakan pelanggaran terhadap...",
    answers: [
      { text: "Hak sipil", correct: true },
      { text: "Hak ekonomi", correct: false },
      { text: "Hak budaya", correct: false },
      { text: "Hak pembangunan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jika pemerintah membatasi kebebasan pers tanpa alasan hukum yang sah, maka yang dilanggar adalah...",
    answers: [
      { text: "Hak politik", correct: true },
      { text: "Hak ekonomi", correct: false },
      { text: "Hak kultural", correct: false },
      { text: "Hak pembangunan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Kebijakan pembangunan yang tidak memperhatikan kelestarian lingkungan melanggar...",
    answers: [
      { text: "Hak pembangunan", correct: true },
      { text: "Hak politik", correct: false },
      { text: "Hak sipil", correct: false },
      { text: "Hak privat", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Hak atas perlindungan hasil karya intelektual termasuk...",
    answers: [
      { text: "Hak kultural", correct: true },
      { text: "Hak sipil", correct: false },
      { text: "Hak politik", correct: false },
      { text: "Hak pembangunan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Upaya meningkatkan kualitas pendidikan nasional merupakan bentuk pemenuhan...",
    answers: [
      { text: "Hak ekonomi dan sosial", correct: true },
      { text: "Hak militer", correct: false },
      { text: "Hak politik", correct: false },
      { text: "Hak privat", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Aksi demonstrasi yang dilakukan sesuai prosedur hukum merupakan wujud pelaksanaan...",
    answers: [
      { text: "Hak politik", correct: true },
      { text: "Hak ekonomi", correct: false },
      { text: "Hak pembangunan", correct: false },
      { text: "Hak sipil terbatas", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Hak untuk tidak dipaksa bekerja merupakan bagian dari...",
    answers: [
      { text: "Hak ekonomi dan sosial", correct: true },
      { text: "Hak politik", correct: false },
      { text: "Hak budaya", correct: false },
      { text: "Hak pertahanan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Persamaan kedudukan di depan hukum merupakan bentuk jaminan...",
    answers: [
      { text: "Hak sipil dan politik", correct: true },
      { text: "Hak ekonomi saja", correct: false },
      { text: "Hak budaya saja", correct: false },
      { text: "Hak pembangunan saja", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Program bantuan kesehatan bagi masyarakat kurang mampu menunjukkan pelaksanaan...",
    answers: [
      { text: "Hak pembangunan", correct: true },
      { text: "Hak politik", correct: false },
      { text: "Hak militer", correct: false },
      { text: "Hak diplomatik", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Kegiatan kerja bakti rutin di masyarakat memperkuat implementasi nilai...",
    answers: [
      { text: "Gotong royong", correct: true },
      { text: "Kapitalisme", correct: false },
      { text: "Individualisme", correct: false },
      { text: "Hedonisme", correct: false }
    ],
    difficulty: "sedang"
  },

  // ================= SUSAH (21–30) =================
  {
    question: "Ketimpangan akses pendidikan antara daerah kota dan terpencil menunjukkan belum optimalnya pemenuhan...",
    answers: [
      { text: "Hak ekonomi dan sosial", correct: true },
      { text: "Hak politik", correct: false },
      { text: "Hak budaya", correct: false },
      { text: "Hak sipil", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Pembatasan akses internet secara sepihak tanpa dasar hukum yang jelas dapat melanggar...",
    answers: [
      { text: "Hak sipil dan politik", correct: true },
      { text: "Hak pembangunan saja", correct: false },
      { text: "Hak ekonomi saja", correct: false },
      { text: "Hak privat internasional", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Jika sebuah perusahaan tidak memberikan cuti yang layak kepada pekerja, maka yang dilanggar adalah...",
    answers: [
      { text: "Hak ekonomi dan sosial", correct: true },
      { text: "Hak politik", correct: false },
      { text: "Hak kultural", correct: false },
      { text: "Hak diplomatik", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Partisipasi aktif generasi muda dalam pelestarian budaya nasional menunjukkan pelaksanaan...",
    answers: [
      { text: "Hak kultural sekaligus kewajiban warga negara", correct: true },
      { text: "Hak politik saja", correct: false },
      { text: "Hak sipil saja", correct: false },
      { text: "Hak pembangunan saja", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Hak pembangunan erat kaitannya dengan prinsip...",
    answers: [
      { text: "Keadilan sosial", correct: true },
      { text: "Dominasi mayoritas", correct: false },
      { text: "Monopoli kekuasaan", correct: false },
      { text: "Kebebasan absolut", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Gotong royong sebagai identitas bangsa Indonesia berperan dalam memperkuat...",
    answers: [
      { text: "Ketahanan nasional", correct: true },
      { text: "Persaingan individu", correct: false },
      { text: "Konflik sosial", correct: false },
      { text: "Liberalisme ekstrem", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Pelanggaran hak sipil yang sistematis dapat berdampak pada...",
    answers: [
      { text: "Menurunnya kepercayaan terhadap negara", correct: true },
      { text: "Meningkatnya stabilitas", correct: false },
      { text: "Meningkatnya kesejahteraan", correct: false },
      { text: "Berkurangnya partisipasi sosial positif", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Pembangunan berkelanjutan bertujuan menjamin terpenuhinya hak generasi sekarang tanpa mengorbankan...",
    answers: [
      { text: "Hak generasi mendatang", correct: true },
      { text: "Hak politik elit", correct: false },
      { text: "Hak individu tertentu", correct: false },
      { text: "Hak ekonomi kelompok minoritas", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Dalam negara demokrasi, pembatasan hak politik hanya dapat dilakukan berdasarkan...",
    answers: [
      { text: "Undang-undang yang sah", correct: true },
      { text: "Keinginan penguasa", correct: false },
      { text: "Tekanan kelompok mayoritas", correct: false },
      { text: "Kepentingan pribadi pejabat", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Integrasi antara hak dan kewajiban warga negara bertujuan untuk menciptakan...",
    answers: [
      { text: "Keseimbangan dalam kehidupan bermasyarakat, berbangsa, dan bernegara", correct: true },
      { text: "Dominasi kelompok tertentu", correct: false },
      { text: "Kebebasan tanpa batas", correct: false },
      { text: "Persaingan sosial bebas", correct: false }
    ],
    difficulty: "susah"
  }
];
