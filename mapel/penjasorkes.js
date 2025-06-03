const materi = {
  judul: "PJOK: Pendidikan Jasmani, Olahraga dan Kesehatan Kelas XI",
  deskripsi: `Materi ini membahas teknik dasar permainan bola voli, bola basket, sepak bola, unsur-unsur kebugaran jasmani, macam-macam gaya renang, dan bahaya serta penularan penyakit AIDS.
  
    **TEKNIK DASAR BOLA VOLI**:
    - Servis: underhand serve, overhand serve, jump serve
    - Passing: passing atas, passing bawah
    - Smash/spike: teknik menyerang
    - Block: teknik pertahanan
    - Set-up: mengumpan untuk serangan
    - Dig: teknik menyelamatkan bola

    **TEKNIK DASAR BOLA BASKET**:
    - Dribbling: menggiring bola
    - Shooting: menembak (set shot, jump shot, lay up, free throw)
    - Passing: chest pass, bounce pass, overhead pass
    - Rebounding: merebut bola pantul
    - Defense: man-to-man, zone defense
    - Pivot: gerakan berputar

    **TEKNIK DASAR SEPAK BOLA**:
    - Passing: mengoper bola (inside foot, outside foot)
    - Dribbling: menggiring bola
    - Shooting: menendang ke gawang
    - Heading: menyundul bola
    - Trapping: menghentikan bola
    - Tackling: merebut bola

    **UNSUR-UNSUR KEBUGARAN JASMANI**:
    - Kekuatan (Strength): kemampuan otot mengatasi beban
    - Daya tahan (Endurance): kardiorespirasi dan otot
    - Kecepatan (Speed): kemampuan bergerak cepat
    - Kelincahan (Agility): mengubah arah dengan cepat
    - Kelenturan (Flexibility): luas gerak sendi
    - Koordinasi: kerjasama sistem tubuh
    - Keseimbangan (Balance): mempertahankan posisi
    - Ketepatan (Accuracy): kemampuan mengarahkan gerakan
    - Reaksi: respon terhadap rangsangan
    - Daya ledak (Power): kekuatan + kecepatan

    **MACAM-MACAM GAYA RENANG**:
    - Gaya Bebas (Freestyle/Crawl): gaya tercepat
    - Gaya Punggung (Backstroke): renang telentang
    - Gaya Dada (Breaststroke): gaya katak
    - Gaya Kupu-kupu (Butterfly): gaya lumba-lumba
    - Gaya Samping: gaya tradisional
    - Gaya Anjing: gaya dasar untuk pemula

    **BAHAYA DAN PENULARAN AIDS**:
    - AIDS: Acquired Immune Deficiency Syndrome
    - HIV: Human Immunodeficiency Virus
    - Cara penularan: darah, cairan tubuh, hubungan seksual, ibu ke anak
    - Pencegahan: tidak berganti pasangan, sterilisasi alat medis
    - Gejala: penurunan sistem imun, infeksi oportunistik
    - Tidak menular melalui: sentuhan, air liur, keringat, udara
  `,
};

const soal = [
  {
    question: "Teknik passing atas dalam bola voli dilakukan dengan menggunakan...",
    answers: [
      { text: "Kedua lengan bawah", correct: false },
      { text: "Ujung jari-jari kedua tangan", correct: true },
      { text: "Satu tangan", correct: false },
      { text: "Kepalan tangan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dalam permainan bola basket, lay up shot dilakukan dengan...",
    answers: [
      { text: "Menembak dari jarak jauh", correct: false },
      { text: "Menembak sambil melompat dekat ring", correct: true },
      { text: "Menembak dari garis free throw", correct: false },
      { text: "Menembak tanpa melompat", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Teknik heading dalam sepak bola sebaiknya menggunakan bagian kepala...",
    answers: [
      { text: "Bagian atas kepala", correct: false },
      { text: "Bagian dahi", correct: true },
      { text: "Bagian belakang kepala", correct: false },
      { text: "Bagian samping kepala", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Unsur kebugaran jasmani yang merupakan kemampuan otot untuk mengatasi beban disebut...",
    answers: [
      { text: "Daya tahan", correct: false },
      { text: "Kekuatan", correct: true },
      { text: "Kecepatan", correct: false },
      { text: "Kelincahan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Gaya renang yang paling cepat adalah...",
    answers: [
      { text: "Gaya dada", correct: false },
      { text: "Gaya punggung", correct: false },
      { text: "Gaya bebas", correct: true },
      { text: "Gaya kupu-kupu", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "HIV dapat ditularkan melalui...",
    answers: [
      { text: "Jabat tangan", correct: false },
      { text: "Transfusi darah yang terinfeksi", correct: true },
      { text: "Batuk dan bersin", correct: false },
      { text: "Menggunakan toilet umum", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Servis yang dilakukan dengan memukul bola dari atas kepala dalam bola voli disebut...",
    answers: [
      { text: "Underhand serve", correct: false },
      { text: "Overhand serve", correct: true },
      { text: "Side serve", correct: false },
      { text: "Jump serve", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Chest pass dalam bola basket adalah teknik...",
    answers: [
      { text: "Menembak dari dada", correct: false },
      { text: "Mengoper bola dari depan dada", correct: true },
      { text: "Menggiring bola", correct: false },
      { text: "Merebut bola", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Teknik trapping dalam sepak bola berfungsi untuk...",
    answers: [
      { text: "Menendang bola", correct: false },
      { text: "Menghentikan bola", correct: true },
      { text: "Mengoper bola", correct: false },
      { text: "Merebut bola", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Kemampuan mengubah arah gerakan dengan cepat dan tepat disebut...",
    answers: [
      { text: "Kecepatan", correct: false },
      { text: "Kelincahan", correct: true },
      { text: "Keseimbangan", correct: false },
      { text: "Koordinasi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam gaya dada, gerakan kaki menyerupai gerakan...",
    answers: [
      { text: "Lumba-lumba", correct: false },
      { text: "Katak", correct: true },
      { text: "Ikan hiu", correct: false },
      { text: "Anjing", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Kepanjangan dari AIDS adalah...",
    answers: [
      { text: "Acquired Immune Disease Syndrome", correct: false },
      { text: "Acquired Immune Deficiency Syndrome", correct: true },
      { text: "Auto Immune Deficiency Syndrome", correct: false },
      { text: "Anti Immune Disease Syndrome", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Block dalam bola voli dilakukan untuk...",
    answers: [
      { text: "Menyerang lawan", correct: false },
      { text: "Membendung serangan lawan", correct: true },
      { text: "Melakukan servis", correct: false },
      { text: "Mengumpan bola", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pivot dalam bola basket adalah gerakan...",
    answers: [
      { text: "Melompat tinggi", correct: false },
      { text: "Berputar dengan satu kaki sebagai tumpuan", correct: true },
      { text: "Berlari cepat", correct: false },
      { text: "Menggiring bola", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Teknik tackling dalam sepak bola bertujuan untuk...",
    answers: [
      { text: "Mengoper bola", correct: false },
      { text: "Merebut bola dari lawan", correct: true },
      { text: "Menendang ke gawang", correct: false },
      { text: "Menghentikan bola", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Daya ledak (power) merupakan kombinasi dari...",
    answers: [
      { text: "Kekuatan dan kecepatan", correct: true },
      { text: "Kecepatan dan kelincahan", correct: false },
      { text: "Kelenturan dan keseimbangan", correct: false },
      { text: "Daya tahan dan koordinasi", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Gaya kupu-kupu dalam renang juga disebut dengan...",
    answers: [
      { text: "Gaya katak", correct: false },
      { text: "Gaya lumba-lumba", correct: true },
      { text: "Gaya anjing", correct: false },
      { text: "Gaya bebas", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Penularan HIV dari ibu ke anak dapat terjadi melalui...",
    answers: [
      { text: "Udara", correct: false },
      { text: "Kehamilan, persalinan, dan ASI", correct: true },
      { text: "Sentuhan kulit", correct: false },
      { text: "Makanan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jump serve dalam bola voli dilakukan dengan...",
    answers: [
      { text: "Memukul bola sambil melompat", correct: true },
      { text: "Memukul bola dari bawah", correct: false },
      { text: "Memukul bola sambil berlari", correct: false },
      { text: "Memukul bola sambil berjongkok", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Zone defense dalam bola basket adalah...",
    answers: [
      { text: "Menjaga pemain lawan satu per satu", correct: false },
      { text: "Menjaga area atau wilayah tertentu", correct: true },
      { text: "Menyerang secara bersamaan", correct: false },
      { text: "Menggiring bola bersama-sama", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Teknik passing dengan inside foot dalam sepak bola menggunakan...",
    answers: [
      { text: "Bagian luar kaki", correct: false },
      { text: "Bagian dalam kaki", correct: true },
      { text: "Ujung kaki", correct: false },
      { text: "Tumit kaki", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Kelenturan (flexibility) berkaitan dengan...",
    answers: [
      { text: "Kecepatan berlari", correct: false },
      { text: "Luas gerak sendi", correct: true },
      { text: "Kekuatan otot", correct: false },
      { text: "Daya tahan jantung", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Posisi tubuh saat melakukan gaya punggung adalah...",
    answers: [
      { text: "Tengkurap", correct: false },
      { text: "Telentang", correct: true },
      { text: "Miring", correct: false },
      { text: "Tegak", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Gejala utama penderita AIDS adalah...",
    answers: [
      { text: "Peningkatan berat badan", correct: false },
      { text: "Penurunan sistem kekebalan tubuh", correct: true },
      { text: "Peningkatan nafsu makan", correct: false },
      { text: "Peningkatan stamina", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dig dalam bola voli adalah teknik...",
    answers: [
      { text: "Menyerang", correct: false },
      { text: "Menyelamatkan bola yang keras", correct: true },
      { text: "Melakukan servis", correct: false },
      { text: "Melakukan block", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Free throw dalam bola basket dilakukan dari jarak...",
    answers: [
      { text: "5 meter", correct: false },
      { text: "4,6 meter", correct: true },
      { text: "3 meter", correct: false },
      { text: "6 meter", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Offside dalam sepak bola terjadi ketika...",
    answers: [
      { text: "Pemain berada di depan kiper lawan saat bola dimainkan rekan", correct: true },
      { text: "Pemain melakukan pelanggaran", correct: false },
      { text: "Bola keluar lapangan", correct: false },
      { text: "Pemain terjatuh", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Test untuk mengukur daya tahan kardiorespirasi adalah...",
    answers: [
      { text: "Push up", correct: false },
      { text: "Lari 12 menit (Cooper Test)", correct: true },
      { text: "Sit up", correct: false },
      { text: "Loncat tegak", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Gerakan tangan pada gaya bebas dilakukan secara...",
    answers: [
      { text: "Bersamaan", correct: false },
      { text: "Bergantian", correct: true },
      { text: "Ke samping", correct: false },
      { text: "Ke belakang saja", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pencegahan penularan HIV yang paling efektif adalah...",
    answers: [
      { text: "Menghindari kontak fisik", correct: false },
      { text: "Tidak berganti-ganti pasangan dan sterilisasi alat medis", correct: true },
      { text: "Menghindari tempat umum", correct: false },
      { text: "Menggunakan masker", correct: false }
    ],
    difficulty: "sedang"
  }
];
