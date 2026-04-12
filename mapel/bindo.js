const materi = {
  judul: "Bahasa Indonesia Kelas XI: Puisi, Cerpen, Drama, dan Karya Ilmiah",
  deskripsi: "",
};

const soal = [
  // ===================== PUISI =====================
  {
    question: "Salah satu ciri utama puisi yang membedakannya dari prosa adalah ...",
    answers: [
      { text: "Penyajian kisah secara kronologis", correct: false },
      { text: "Pengutamaan alur cerita yang logis dan runtut", correct: false },
      { text: "Penggunaan kata-kata yang padat, bermakna, dan penuh estetika", correct: true },
      { text: "Penekanan pada konflik antartokoh", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Salah satu perbedaan utama antara prosa dan puisi adalah ...",
    answers: [
      { text: "Prosa hanya berisi dialog tanpa deskripsi", correct: false },
      { text: "Prosa lebih menekankan pada keindahan bunyi daripada isi", correct: false },
      { text: "Prosa memiliki struktur yang lebih bebas dan bersifat naratif", correct: true },
      { text: "Puisi ditulis dalam bentuk paragraf, prosa dalam bentuk bait", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Unsur intrinsik yang paling menonjol dalam puisi dibandingkan prosa dan drama adalah ...",
    answers: [
      { text: "Majas dan citraan", correct: true },
      { text: "Alur cerita", correct: false },
      { text: "Latar dan suasana", correct: false },
      { text: "Tokoh dan penokohan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Perbedaan puisi dari prosa dan drama dalam hal penggunaan bahasa adalah ...",
    answers: [
      { text: "Puisi menggunakan bahasa yang lebih padat dan penuh makna", correct: true },
      { text: "Puisi menggunakan bahasa sehari-hari tanpa unsur estetika", correct: false },
      { text: "Puisi tidak boleh menggunakan majas atau gaya bahasa", correct: false },
      { text: "Puisi selalu menggunakan dialog seperti dalam drama", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perhatikan puisi berikut!\n\nGemericik air sungai (1)\nBegitu beningnya (2)\nBagaikan zamrud khatulistiwa (3)\nItulah desaku yang permai (4)\nTempat aku dilahirkan (5)\n\nLarik bermajas pada puisi tersebut ditandai nomor ...",
    answers: [
      { text: "(1)", correct: false },
      { text: "(2)", correct: false },
      { text: "(3)", correct: true },
      { text: "(4)", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perhatikan puisi berikut!\n\nLihatlah bunga mekar di taman\nMengajari kita tentang keindahan\nNamun cepat layu diembus angin\nSeperti hidup, penuh perjuangan\n\nTema dari puisi tersebut adalah ...",
    answers: [
      { text: "Perjuangan hidup", correct: true },
      { text: "Keindahan bunga", correct: false },
      { text: "Kepedihan hati", correct: false },
      { text: "Harapan masa depan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pesan yang dapat diambil dari puisi tentang bunga yang cepat layu diembus angin adalah ...",
    answers: [
      { text: "Kita harus menikmati keindahan tanpa peduli tantangan", correct: false },
      { text: "Kehidupan hanya indah untuk sementara waktu", correct: false },
      { text: "Jangan menyerah dalam menghadapi tantangan hidup", correct: true },
      { text: "Setiap orang akan mengalami akhir yang sama", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Hal yang dirasakan dan dipikirkan oleh penyair dapat terungkap dalam puisi melalui ...",
    answers: [
      { text: "Penggunaan rima yang menarik", correct: false },
      { text: "Penggunaan kata yang tepat", correct: true },
      { text: "Penggunaan gaya yang memikat", correct: false },
      { text: "Jumlah baris dan bait", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perhatikan puisi berikut!\n\nDalam kemenangan keselip kekalahan\nsiapa terlalu memilih\nakan datang di tanah pasir\nDalam kekalahan keselip kemenangan\nsiapa terlalu memilih\nakan datang di tanah batu\n\nMajas yang terdapat dalam puisi tersebut adalah ...",
    answers: [
      { text: "Simile", correct: false },
      { text: "Metafora", correct: false },
      { text: "Repetisi", correct: true },
      { text: "Personifikasi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perhatikan puisi berikut!\n\nBetapa dinginnya air sungai\nDinginnya! Dinginnya!\nBetapa dinginnya daging duka\nYang membaluti tulang-tulangku\n\nPuisi tersebut menimbulkan citraan ...",
    answers: [
      { text: "Visual", correct: false },
      { text: "Audio", correct: false },
      { text: "Perabaan", correct: true },
      { text: "Perasaan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Imaji visual dalam puisi 'Aku Ingin' karya Sapardi Djoko Damono ditunjukkan pada larik ...",
    answers: [
      { text: "aku ingin mencintaimu dengan sederhana", correct: false },
      { text: "dengan kata yang tak sempat diucapkan", correct: false },
      { text: "kayu kepada api yang menjadikannya abu", correct: true },
      { text: "dengan isyarat yang tak sempat disampaikan", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Perhatikan puisi berikut!\n\nAku\nKarya: Chairil Anwar\nTak perlu sedu sedan itu\nAku ini binatang jalang\nDari kumpulannya yang terbuang\n\nMakna kata 'binatang jalang' dalam puisi tersebut adalah ...",
    answers: [
      { text: "Orang yang terpinggirkan", correct: true },
      { text: "Orang yang dihormati", correct: false },
      { text: "Binatang yang liar", correct: false },
      { text: "Binatang yang disayangi", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Sikap penyair yang tergambar dalam puisi 'Aku' karya Chairil Anwar adalah ...",
    answers: [
      { text: "Menyesal", correct: false },
      { text: "Marah", correct: false },
      { text: "Bangga", correct: true },
      { text: "Rendah hati", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Bahasa yang digunakan dalam puisi adalah bahasa yang padat, artinya ...",
    answers: [
      { text: "Singkat, tetapi bermakna luas", correct: true },
      { text: "Dipaparkan dan indah", correct: false },
      { text: "Maknanya harus ditafsirkan", correct: false },
      { text: "Menggunakan bahasa lugas dan denotatif", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Musikalisasi puisi adalah pembacaan puisi yang diiringi ...",
    answers: [
      { text: "Musik", correct: true },
      { text: "Tarian", correct: false },
      { text: "Pantomim", correct: false },
      { text: "Drama", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Perhatikan puisi 'Doa' karya Chairil Anwar:\n\nTuhanku, dalam termangu\naku masih menyebut namaMu\nbiar susah sungguh\nmengingat Kau penuh seluruh\n\nJika bait tersebut dimusikalisasi, musik yang cocok untuk mengiringi puisi itu adalah yang menunjukkan suasana ...",
    answers: [
      { text: "Riang", correct: false },
      { text: "Khusyuk", correct: true },
      { text: "Semangat", correct: false },
      { text: "Haru", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tahapan pertama yang harus dilakukan oleh pembaca puisi agar berhasil dengan baik adalah ...",
    answers: [
      { text: "Mempersiapkan penampilan", correct: false },
      { text: "Membaca biografi penciptanya", correct: false },
      { text: "Mempelajari dan memahami isi puisi yang akan dibacakan", correct: true },
      { text: "Mengenal identitas pribadi audiens", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perhatikan kutipan puisi berikut!\n\nBulan pucat menggantung di atas pohon tua\nAngin dingin membawa harum bunga kamboja\n\nKutipan puisi tersebut mengandung imaji ...",
    answers: [
      { text: "Pendengaran", correct: false },
      { text: "Penglihatan", correct: false },
      { text: "Pencecapan", correct: false },
      { text: "Penciuman", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Fungsi imaji dalam sebuah puisi adalah ...",
    answers: [
      { text: "Membantu pembaca memahami struktur puisi", correct: false },
      { text: "Membuat puisi terasa hidup", correct: true },
      { text: "Memberi penekanan pada pesan moral dalam puisi", correct: false },
      { text: "Memastikan puisi mengikuti aturan tata bahasa", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Majas simile menggunakan kata pembanding secara eksplisit. Dalam puisi 'Surat Cinta' karya W.S. Rendra, 'Bagai bunyi tabur mainan' terdapat pada larik ...",
    answers: [
      { text: "Pertama", correct: false },
      { text: "Kedua", correct: false },
      { text: "Ketiga", correct: true },
      { text: "Keempat", correct: false }
    ],
    difficulty: "susah"
  },

  // ===================== CERPEN =====================
  {
    question: "Salah satu persamaan antara puisi dan cerpen adalah ...",
    answers: [
      { text: "Keduanya selalu menggunakan rima dalam penyampaiannya", correct: false },
      { text: "Keduanya mengutamakan panjang tulisan dibandingkan isi", correct: false },
      { text: "Keduanya dapat menggambarkan perasaan, pengalaman, atau pesan moral", correct: true },
      { text: "Keduanya terikat oleh aturan struktur yang ketat", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Perbedaan utama antara puisi dan cerpen terletak pada ...",
    answers: [
      { text: "Cara menyampaikan ide dan emosi kepada pembaca", correct: true },
      { text: "Penggunaan bahasa sehari-hari dalam karya", correct: false },
      { text: "Panjang tulisan yang dihasilkan", correct: false },
      { text: "Fokus pada konflik dalam setiap karya", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perhatikan pernyataan berikut!\n(1) Tema cerpen bersifat eksplisit dan langsung terlihat dalam cerita.\n(2) Pesan cerpen dapat berupa ajakan, motivasi, atau pelajaran hidup.\n(4) Pesan dalam cerpen sering kali bersifat tersirat.\n(5) Tema dan pesan selalu saling berkaitan dalam cerpen.\n\nPernyataan yang benar mengenai tema dan pesan dalam cerpen adalah ...",
    answers: [
      { text: "1, 2, dan 3", correct: false },
      { text: "2, 4, dan 5", correct: true },
      { text: "1, 3, dan 5", correct: false },
      { text: "3, 4, dan 5", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Keterkaitan antara puisi dan cerpen dapat ditemukan dalam ...",
    answers: [
      { text: "Penggunaan tokoh utama yang kompleks", correct: false },
      { text: "Kehadiran konflik yang menjadi pusat cerita", correct: false },
      { text: "Struktur yang selalu terikat aturan tertentu", correct: false },
      { text: "Kemampuan keduanya untuk menggambarkan tema kehidupan", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jika cerpen menggunakan alur cerita sebagai unsur utama, puisi mengandalkan ...",
    answers: [
      { text: "Dialog antartokoh", correct: false },
      { text: "Pilihan kata, rima, dan imaji", correct: true },
      { text: "Penokohan dan sudut pandang", correct: false },
      { text: "Latar tempat dan waktu", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Langkah pertama yang harus dilakukan ketika ingin menulis puisi berdasarkan cerpen adalah ...",
    answers: [
      { text: "Menyalin seluruh isi cerpen ke dalam bentuk puisi", correct: false },
      { text: "Menentukan tema dan pesan utama dari cerpen", correct: true },
      { text: "Mengubah setiap kalimat cerpen menjadi bait puisi", correct: false },
      { text: "Mengganti tokoh dalam cerpen dengan tokoh baru dalam puisi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Unsur cerpen yang paling penting untuk dijadikan dasar dalam menulis puisi adalah ...",
    answers: [
      { text: "Panjang cerita dan jumlah kata", correct: false },
      { text: "Gaya penulisan pengarang", correct: false },
      { text: "Tokoh dan latar secara lengkap", correct: false },
      { text: "Tema, suasana, dan pesan moral", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jika ingin mengubah cerpen bertema persahabatan menjadi puisi, hal yang perlu diperhatikan adalah ...",
    answers: [
      { text: "Menggunakan kata-kata panjang dan rumit", correct: false },
      { text: "Memasukkan seluruh tokoh dan peristiwa dari cerpen", correct: false },
      { text: "Menyaring emosi, nilai persahabatan, dan makna mendalam", correct: true },
      { text: "Menggunakan bahasa yang sama persis dengan cerpen", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perhatikan kutipan cerpen berikut!\n\n'Meskipun sering dihina karena pakaiannya yang lusuh, Badu tetap membantu teman-temannya yang membutuhkan. Dia percaya bahwa kebaikan tidak tergantung pada penampilan.'\n\nPesan yang dapat diambil dari kutipan cerpen tersebut adalah ...",
    answers: [
      { text: "Jangan menilai orang dari penampilannya saja", correct: false },
      { text: "Bantulah orang lain hanya jika mereka menghargai kita", correct: false },
      { text: "Jangan terlalu percaya pada orang yang tidak dikenal", correct: false },
      { text: "Menolong tanpa pamrih", correct: true }
    ],
    difficulty: "sedang"
  },

  // ===================== DRAMA =====================
  {
    question: "Unsur utama dalam drama yang membedakannya dari bentuk karya sastra lain adalah ...",
    answers: [
      { text: "Penggunaan deskripsi panjang dan mendalam", correct: false },
      { text: "Adanya dialog antartokoh yang mendominasi", correct: true },
      { text: "Penekanan pada keindahan bahasa", correct: false },
      { text: "Tidak melibatkan tokoh atau konflik", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dalam hal penyajian cerita, yang membedakan drama dari prosa adalah ...",
    answers: [
      { text: "Drama hanya dapat dinikmati dalam bentuk teks tertulis", correct: false },
      { text: "Drama tidak memiliki alur cerita yang jelas", correct: false },
      { text: "Drama tidak bisa dipentaskan di atas panggung", correct: false },
      { text: "Drama menggunakan dialog sebagai cara utama untuk menyampaikan cerita", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "Konflik dalam drama berfungsi untuk ...",
    answers: [
      { text: "Memberikan keindahan bahasa dalam dialog", correct: false },
      { text: "Menghubungkan latar dengan alur cerita", correct: false },
      { text: "Membangun ketegangan dan menggerakkan alur cerita", correct: true },
      { text: "Memperjelas tema dan pesan moral", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Berikut ini bukan fungsi utama dialog dalam drama, yaitu ...",
    answers: [
      { text: "Menyampaikan informasi kepada penonton", correct: false },
      { text: "Mengungkap karakter tokoh", correct: false },
      { text: "Menyampaikan pesan moral", correct: false },
      { text: "Membuat deskripsi panjang tentang latar", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam drama, perbedaan tokoh protagonis dan antagonis terletak pada ...",
    answers: [
      { text: "Cara berbicara tokoh", correct: false },
      { text: "Konflik yang dihadapi", correct: false },
      { text: "Peran tokoh dalam mendukung atau menentang tema utama", correct: true },
      { text: "Banyaknya dialog yang dimiliki", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perhatikan kutipan naskah drama berikut!\n\nJessy: 'Eh, jangan berisik! Ini perpustakaan!' (Berbicara dengan nada emosi)\nAdam: 'Ma-maat.'\nFreddy: 'Harusnya kamu yang jangan berisik.'\n\nLatar tempat cuplikan teks drama tersebut adalah ...",
    answers: [
      { text: "Ruang kelas", correct: false },
      { text: "Perpustakaan", correct: true },
      { text: "Sore hari", correct: false },
      { text: "Toko buku", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Karakter Jessy dalam cuplikan teks drama perpustakaan tersebut menggambarkan sifat ...",
    answers: [
      { text: "Pemarah", correct: true },
      { text: "Pemberani", correct: false },
      { text: "Penakut", correct: false },
      { text: "Penyabar", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Unsur ekstrinsik dalam drama TIDAK berkaitan dengan ...",
    answers: [
      { text: "Nilai sosial", correct: false },
      { text: "Latar belakang pengarang", correct: false },
      { text: "Nilai budaya", correct: false },
      { text: "Watak tokoh", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Bagian klimaks dari drama berupa babak akhir cerita yang menggambarkan penyelesaian atas konflik-konflik yang dialami para tokohnya disebut ...",
    answers: [
      { text: "Orientasi", correct: false },
      { text: "Resolusi", correct: true },
      { text: "Komplikasi", correct: false },
      { text: "Epilog", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Paragraf yang menggambarkan kondisi fisik panggung, misalnya 'Sebuah ruangan kamar tamu. Ada beberapa meja dan kursi...' dalam naskah drama disebut ...",
    answers: [
      { text: "Dialog", correct: false },
      { text: "Prolog", correct: true },
      { text: "Epilog", correct: false },
      { text: "Amonolog", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Ketika cerita pendek diadaptasi menjadi naskah drama, yang harus disesuaikan adalah ...",
    answers: [
      { text: "Penggunaan latar cerita agar lebih rumit", correct: false },
      { text: "Dialog narasi menjadi percakapan tokoh", correct: true },
      { text: "Menghilangkan konflik internal tokoh", correct: false },
      { text: "Pengurangan tokoh utama agar lebih fokus", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tujuan utama dari pementasan drama adalah ...",
    answers: [
      { text: "Memberikan hiburan sekaligus menyampaikan pesan moral", correct: true },
      { text: "Menampilkan kemampuan penulis dalam berkarya", correct: false },
      { text: "Menyampaikan informasi secara ilmiah", correct: false },
      { text: "Menampilkan tarian dan musik yang indah", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Berikut yang BUKAN termasuk unsur latar dalam drama adalah ...",
    answers: [
      { text: "Waktu", correct: false },
      { text: "Tempat", correct: false },
      { text: "Amanat", correct: true },
      { text: "Situasi atau suasana", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Mengenali watak atau pelaku drama tidak dapat dilihat dari ...",
    answers: [
      { text: "Cara berpikir tokoh", correct: false },
      { text: "Penilaian tokoh lain", correct: false },
      { text: "Apa yang dilakukan pelaku", correct: false },
      { text: "Urutan cerita", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam pementasan, Bayu memerankan tokoh yang menggunakan kaus oblong, celana sebatas lutut berwarna hitam, memakai caping, dan membawa cangkul. Tokoh yang diperankan Bayu adalah ...",
    answers: [
      { text: "Guru", correct: false },
      { text: "Petani", correct: true },
      { text: "Nelayan", correct: false },
      { text: "Pedagang", correct: false }
    ],
    difficulty: "mudah"
  },

  // ===================== KARYA ILMIAH =====================
  {
    question: "Berikut ini yang TIDAK termasuk ciri-ciri karya ilmiah adalah ...",
    answers: [
      { text: "Bersifat objektif", correct: false },
      { text: "Menggunakan bahasa baku", correct: false },
      { text: "Berdasarkan opini pribadi tanpa fakta", correct: true },
      { text: "Memiliki sistematika yang jelas", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Tujuan utama dari penulisan karya ilmiah adalah ...",
    answers: [
      { text: "Menyampaikan pendapat pribadi secara bebas", correct: false },
      { text: "Menghibur pembaca dengan cerita yang menarik", correct: false },
      { text: "Menyajikan hasil penelitian berdasarkan data yang valid", correct: true },
      { text: "Mempromosikan produk atau jasa tertentu", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Langkah pertama dalam menulis karya ilmiah adalah ...",
    answers: [
      { text: "Mengumpulkan data", correct: false },
      { text: "Menyusun daftar pustaka", correct: false },
      { text: "Menulis kesimpulan terlebih dahulu", correct: false },
      { text: "Menentukan topik dan rumusan masalah", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "Bagian karya ilmiah yang berisi perumusan masalah yang akan diteliti adalah ...",
    answers: [
      { text: "Pendahuluan", correct: true },
      { text: "Metode penelitian", correct: false },
      { text: "Kesimpulan", correct: false },
      { text: "Daftar pustaka", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Bagian karya ilmiah yang berisi rangkuman isi dan hasil penelitian adalah ...",
    answers: [
      { text: "Pendahuluan", correct: false },
      { text: "Metode penelitian", correct: false },
      { text: "Daftar pustaka", correct: false },
      { text: "Kesimpulan", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "Bagian yang menjelaskan dasar teori dan referensi penelitian sebelumnya dalam karya ilmiah adalah ...",
    answers: [
      { text: "Pendahuluan", correct: false },
      { text: "Landasan teori", correct: true },
      { text: "Hasil dan pembahasan", correct: false },
      { text: "Metode penelitian", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Metode yang digunakan dalam penelitian untuk mengumpulkan data langsung dari responden disebut ...",
    answers: [
      { text: "Studi pustaka", correct: false },
      { text: "Observasi", correct: false },
      { text: "Wawancara", correct: false },
      { text: "Angket", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Penulisan judul makalah yang tepat adalah ...",
    answers: [
      { text: "Menggali Potensi Diri untuk Meningkatkan Kepercayaan Diri", correct: false },
      { text: "menggali potensi diri untuk meningkatkan kepercayaan diri", correct: false },
      { text: "MENGGALI POTENSI DIRI UNTUK MENINGKATKAN KEPERCAYAAN DIRI", correct: false },
      { text: "Menggali Potensi Diri untuk Meningkatkan Kepercayaan Diri", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam daftar pustaka, jika sumber yang digunakan berasal dari buku, urutan penulisan yang benar adalah ...",
    answers: [
      { text: "Nama penulis, tahun terbit, judul buku, tempat terbit, nama penerbit", correct: true },
      { text: "Judul buku, nama penulis, tahun terbit, tempat terbit, nama penerbit", correct: false },
      { text: "Nama penerbit, nama penulis, judul buku, tahun terbit, tempat terbit", correct: false },
      { text: "Tahun terbit, nama penulis, judul buku, tempat terbit, nama penerbit", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tino menemukan artikel menarik di internet dan menyalinnya tanpa mencantumkan sumber. Saat membaca karya tersebut, guru menemukan kesamaan isi dengan artikel yang sudah pernah dibaca sebelumnya. Dampak dari tindakan yang dilakukan oleh Tino adalah ...",
    answers: [
      { text: "Karyanya tetap diterima karena topiknya sesuai dengan tugas", correct: false },
      { text: "Guru tidak akan mempermasalahkan selama artikel tersebut ditulis dengan bahasa sendiri", correct: false },
      { text: "Dianggap plagiat dan dapat berakibat pada sanksi akademik", correct: true },
      { text: "Tidak terdeteksi sebagai plagiarisme karena mengubah beberapa kata", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Topik: Pelestarian tanaman obat dalam masyarakat\n\nKalimat rumusan masalah yang sesuai dengan topik tersebut adalah ...",
    answers: [
      { text: "Apa yang dapat dilakukan untuk melestarikan tanaman obat di masyarakat?", correct: true },
      { text: "Siapa yang terlibat untuk melestarikan tanaman obat di masyarakat?", correct: false },
      { text: "Mengapa perlu mengenal berbagai jenis tanaman obat di masyarakat?", correct: false },
      { text: "Sejauh manakah kepedulian masyarakat terhadap tanaman obat?", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Penulisan daftar pustaka buku yang benar sesuai kaidah adalah ...",
    answers: [
      { text: "Koentjaraningrat. Kebudayaan Mentalitas dan Pembangunan. Jakarta: Gramedia. 2019", correct: false },
      { text: "Koentjaraningrat, Kebudayaan Mentalitas dan Pembangunan. Jakarta: Gramedia. 2019", correct: false },
      { text: "Koentjaraningrat. 2019. Kebudayaan Mentalitas dan Pembangunan. Jakarta: Gramedia.", correct: true },
      { text: "Koentjaraningrat. 2019. Kebudayaan Mentalitas dan Pembangunan. Gramedia, Jakarta.", correct: false }
    ],
    difficulty: "susah"
  }
];
