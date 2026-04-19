const materi = {
  judul: "PJOK Fase F: Permainan Olahraga, Kebugaran, Senam & Kesehatan",
  deskripsi: `Materi PJOK Fase F mencakup permainan bola besar (sepak bola, bola basket, bola voli), bulu tangkis, tenis meja, renang gaya dada, senam irama, kebugaran jasmani, dan kesehatan remaja.

    **SEPAK BOLA**:
    Posisi pemain: bek (back/defender), gelandang (midfielder), penyerang (striker/forward), kiper (goalkeeper).
    Strategi bertahan: mempersempit jarak antarbek, menjaga garis pertahanan rapat untuk mencegah umpan terobosan.
    Strategi menyerang: umpan terobosan ke ruang kosong, build-up dari belakang, one-touch finishing.
    Taktik: mencari ruang kosong, mengoper bola pendek untuk meminimalkan risiko kehilangan bola.

    **BOLA BASKET**:
    Penemu: Prof. Dr. James Naismith (1891).
    Induk organisasi dunia: FIBA. Indonesia: PERBASI.
    Jumlah pemain: 5 di lapangan, 12 terdaftar (komposisi regu).
    Teknik operan: Chest pass (jarak dekat), Bounce pass (memantul), Overhead pass (di atas kepala).
    Teknik menembak: Lay-up (dua langkah), Jump shoot (sambil melayang), Free throw (lemparan bebas).
    Dribbling tinggi: mempercepat penyerangan di area lawan.
    Poin: tembakan dalam garis 3 poin = 2 poin, luar garis = 3 poin, free throw = 1 poin.
    Kode wasit: P = Foul/Pelanggaran, P1 = Free throw 1x, P2 = Free throw 2x, PH = Half, U = Unsportsmanlike foul.
    Time out: Garing Quarter Waktu.
    Pelanggaran: Traveling (berjalan tanpa dribble), Double (dribble dua tangan), Offensive foul.

    **BOLA VOLI**:
    Penemu: William G. Morgan.
    Poin kemenangan per set: 25 poin.
    Formasi penerimaan servis: formasi W untuk stabilitas penerimaan.
    Posisi setter: diatur rotasi agar lebih sering di depan untuk memudahkan umpan cepat.
    Blok: melatih membaca gerak tangan tosser sebagai indikator arah serangan.
    Libero: pemain bertahan khusus, tidak boleh menyerang.
    Timing smasher dan setter harus sinkron untuk quick attack yang efektif.

    **BULU TANGKIS (BADMINTON)**:
    Nama resmi: Bulu Tangkis. Induk organisasi Indonesia: PBSI. Dunia: BWF.
    Poin kemenangan: 21 poin per game.
    Pukulan forehand: bola di sebelah kanan tubuh.
    Pukulan backhand: bola di sebelah kiri tubuh.
    Strategi: variasi servis (spin, arah, kecepatan), drop shot untuk memaksa lawan maju.

    **TENIS MEJA (PING PONG)**:
    Teknik: forehand topspin (menyerang bola push backhand), backhand topspin, chop, netting.
    Keterampilan ditingkatkan dengan: berlatih rutin dan konsisten.
    Strategi: kombinasi smash dengan drop shot untuk membuat lawan bergerak.
    Pegangan bet: shakehands dan penhold.

    **RENANG GAYA DADA**:
    Gerakan tangan: menarik ke samping kemudian menyatu kembali di depan dada.
    Gerakan kaki: menekuk lutut, membuka ke samping (seperti katak), lalu menutup — menghasilkan dorongan ke depan.
    Posisi tubuh: sejajar dan streamline (lurus) di permukaan air.
    Pengambilan napas: mengangkat kepala sedikit sambil menarik lengan (bukan terlalu tinggi).
    Fase meluncur: menghemat energi dan mempertahankan kecepatan.
    Kesalahan umum: kepala terlalu tinggi saat bernapas, tarikan tangan terlalu lebar.
    Koordinasi tangan-kaki-napas yang baik menghasilkan gerakan efisien dan hemat energi.

    **SENAM IRAMA (RITMIK)**:
    Koordinasi gerakan sangat penting — jika buruk, gerakan tidak harmonis.
    Masalah tidak sesuai irama: kurang kemampuan mengikuti irama (bukan kurang kekuatan).
    Solusi gerakan kaku: melatih kelenturan dan relaksasi otot.

    **SENAM LANTAI**:
    Roll depan: tubuh harus membulat saat mengguling agar berhasil.
    Roll belakang: dagu harus menempel ke dada agar leher tidak sakit.
    Kayang: membutuhkan kekuatan otot tangan dan kaki untuk keseimbangan.

    **KEBUGARAN JASMANI**:
    Komponen: kekuatan, daya tahan (kardiovaskuler), kelenturan, kecepatan, keseimbangan, koordinasi.
    Atlet kuat tapi kurang fleksibel: rentan cedera.
    Daya tahan jantung-paru rendah: cepat lelah saat berlari jauh.
    Program latihan ideal: teratur dengan peningkatan bertahap, disertai istirahat dan nutrisi yang baik.
    DNM (Denyut Nadi Maksimal): 220 - usia.
    Jarang olahraga + makanan tidak sehat = risiko penyakit meningkat.

    **KESEHATAN REMAJA — PERGAULAN BEBAS**:
    Faktor penyebab: tekanan teman sebaya, kurang pengawasan keluarga, pengaruh media sosial, kurang pendidikan karakter.
    Dampak: penyalahgunaan narkoba, perilaku negatif, gangguan kesehatan fisik dan mental.
    Pencegahan paling efektif: edukasi dan pengawasan yang baik dari keluarga dan lingkungan.
  `,
};

const soal = [
  // ===== SEPAK BOLA (Soal 1-10) =====
  {
    question: "Sebuah tim sering kehilangan bola saat membangun serangan dari belakang. Strategi PALING TEPAT untuk meminimalkan risiko kehilangan bola adalah...",
    answers: [
      { text: "Kiper selalu menendang bola jauh ke depan", correct: false },
      { text: "Bek melakukan operan pendek dan berpindah posisi untuk membuka ruang", correct: true },
      { text: "Gelandang bertahan berlari ke depan tanpa bola", correct: false },
      { text: "Penyerang turun untuk mengambil bola di area pertahanan sendiri", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tim kamu sering kebobolan dari umpan terobosan lawan. Perubahan strategi bertahan yang paling efektif adalah...",
    answers: [
      { text: "Meningkatkan pressing tinggi ke seluruh area lapangan", correct: false },
      { text: "Mempersempit jarak antarbek dan menjaga garis pertahanan tetap rapat", correct: true },
      { text: "Mengalihkan semua pemain ke area tengah lapangan", correct: false },
      { text: "Mengurangi komunikasi antar pemain bek", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tim sering gagal mencetak gol meskipun masuk kotak penalti karena pemain terlalu lama membawa bola. Solusi terbaik adalah...",
    answers: [
      { text: "Melatih skill dribbling lebih lama dan intensif", correct: false },
      { text: "Menambah latihan finishing satu sentuhan (one touch finishing)", correct: true },
      { text: "Memasang lebih banyak pemain bertahan", correct: false },
      { text: "Mengurangi latihan passing", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tim kamu memiliki pemain sayap yang sangat cepat. Untuk memaksimalkan serangan balik, strategi paling tepat adalah...",
    answers: [
      { text: "Melakukan build-up lambat dari belakang agar lebih aman", correct: false },
      { text: "Mengirim umpan terobosan cepat ke ruang kosong di sisi lapangan", correct: true },
      { text: "Memindahkan seluruh pemain ke tengah lapangan", correct: false },
      { text: "Mengurangi operan jauh untuk menghindari risiko", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Seorang penyerang sering kehilangan bola saat menerima umpan di bawah tekanan lawan. Fokus latihan paling efektif adalah...",
    answers: [
      { text: "Latihan heading", correct: false },
      { text: "First touch dan shielding (melindungi bola dari lawan)", correct: true },
      { text: "Sprint panjang untuk meninggalkan lawan", correct: false },
      { text: "Tembakan jarak jauh", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pemain belakang dalam permainan sepak bola disebut juga dengan istilah...",
    answers: [
      { text: "Libero", correct: false },
      { text: "Striker", correct: false },
      { text: "Back (defender)", correct: true },
      { text: "Kipper", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Taktik yang digunakan untuk teknik penyerangan dalam sepak bola adalah...",
    answers: [
      { text: "Taktik memperdaya lawan dan mencari ruang kosong", correct: true },
      { text: "Taktik mengoper bola saja", correct: false },
      { text: "Taktik menendang bola jauh", correct: false },
      { text: "Taktik menjaga area pertahanan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Serangan tim sering buntu karena pemain hanya berdiri dan menunggu bola. Perbaikan utama yang harus dilakukan adalah...",
    answers: [
      { text: "Menambah tembakan jarak jauh", correct: false },
      { text: "Melatih motion offense yang menuntut perpindahan tanpa bola", correct: true },
      { text: "Mengurangi operan antar pemain", correct: false },
      { text: "Memperbanyak fast break", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam permainan sepak bola, strategi terbaik untuk menghadapi tim yang sering melakukan umpan terobosan adalah...",
    answers: [
      { text: "Menarik semua pemain mundur ke area penalti sendiri", correct: false },
      { text: "Menjaga garis pertahanan tetap rapat dan mempersempit ruang antarbek", correct: true },
      { text: "Melakukan pressing tinggi di area tengah saja", correct: false },
      { text: "Meminta kiper maju ke tengah lapangan", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Apa yang dimaksud dengan 'one touch finishing' dalam sepak bola?",
    answers: [
      { text: "Teknik menerima bola dengan satu tangan", correct: false },
      { text: "Teknik menyelesaikan peluang gol dengan satu sentuhan tanpa menguasai bola terlebih dahulu", correct: true },
      { text: "Teknik mengoper bola dengan satu kaki saja", correct: false },
      { text: "Teknik menyentuh bola sebanyak satu kali per babak", correct: false }
    ],
    difficulty: "sedang"
  },

  // ===== BOLA BASKET (Soal 11-28) =====
  {
    question: "Penemu permainan bola basket adalah...",
    answers: [
      { text: "William G. Morgan", correct: false },
      { text: "Prof. Dr. James Naismith", correct: true },
      { text: "Albert Simpson", correct: false },
      { text: "Ricardo Donovan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Permainan bola basket diciptakan pada tahun...",
    answers: [
      { text: "1865", correct: false },
      { text: "1876", correct: false },
      { text: "1891", correct: true },
      { text: "1881", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Nama induk organisasi dunia bola basket adalah...",
    answers: [
      { text: "NBA", correct: false },
      { text: "NCAA", correct: false },
      { text: "FIFA", correct: false },
      { text: "FIBA", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "Komposisi dan registrasi pemain bola basket untuk satu regu (yang terdaftar) adalah...",
    answers: [
      { text: "5 pemain", correct: false },
      { text: "10 pemain", correct: false },
      { text: "11 pemain", correct: false },
      { text: "12 pemain", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "Teknik yang digunakan untuk mengoper bola jarak dekat dalam permainan bola basket adalah...",
    answers: [
      { text: "Overhead pass", correct: false },
      { text: "Bounce pass", correct: false },
      { text: "Chest pass", correct: true },
      { text: "Javeline pass", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Teknik yang digunakan untuk mengoper bola dengan cara memantul ke lantai dalam permainan bola basket adalah...",
    answers: [
      { text: "Chest pass", correct: false },
      { text: "Overhead pass", correct: false },
      { text: "Bounce pass", correct: true },
      { text: "Side pass", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Teknik yang digunakan untuk mengoper bola di atas kepala dalam permainan bola basket adalah...",
    answers: [
      { text: "Chest pass", correct: false },
      { text: "Overhead pass", correct: true },
      { text: "Bounce pass", correct: false },
      { text: "Side pass", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Teknik menembak dalam bola basket yang didahului dengan melangkah dua langkah disebut...",
    answers: [
      { text: "Tembakan satu tangan di atas kepala", correct: false },
      { text: "Lay-up shoot", correct: true },
      { text: "Jump shoot", correct: false },
      { text: "Tembakan kaitan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Latihan menembak sambil melayang dalam permainan bola basket disebut...",
    answers: [
      { text: "Shooting", correct: false },
      { text: "Lay-up shoot", correct: false },
      { text: "Jump shoot", correct: true },
      { text: "Dribbling", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Bola yang tercipta dari lemparan bebas (free throw) dalam permainan bola basket memperoleh angka...",
    answers: [
      { text: "2 angka", correct: false },
      { text: "3 angka", correct: false },
      { text: "1 angka", correct: true },
      { text: "4 angka", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Tujuan menggiring bola (dribbling) tinggi dalam bermain bola basket adalah...",
    answers: [
      { text: "Mengontrol bola di daerah sendiri", correct: false },
      { text: "Memperlambat permainan", correct: false },
      { text: "Mempercepat penyerangan di daerah lawan", correct: true },
      { text: "Menguasai bola lebih lama", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pola pertahanan satu jaga satu di daerah pertahanan dalam permainan bola basket dinamakan...",
    answers: [
      { text: "Zone defence", correct: false },
      { text: "Zone marking", correct: false },
      { text: "Man to man", correct: true },
      { text: "Total football", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Kode wasit untuk free throw 1 kali tembakan dalam permainan bola basket adalah...",
    answers: [
      { text: "P", correct: false },
      { text: "P1", correct: true },
      { text: "P2", correct: false },
      { text: "PH", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Kode wasit untuk free throw 2 kali tembakan dalam permainan bola basket adalah...",
    answers: [
      { text: "P1", correct: false },
      { text: "P", correct: false },
      { text: "P2", correct: true },
      { text: "PH", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Kode wasit untuk Foul (pelanggaran) dalam permainan bola basket adalah...",
    answers: [
      { text: "P1", correct: false },
      { text: "P2", correct: false },
      { text: "PH", correct: false },
      { text: "P", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Kode wasit untuk Unsportsmanlike Foul dalam permainan bola basket adalah...",
    answers: [
      { text: "P", correct: false },
      { text: "P2", correct: false },
      { text: "U", correct: true },
      { text: "PH", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tim A menembak dari luar garis tiga poin, terjadi foul oleh Tim B dan bola masuk. Saat free throw, bola juga masuk. Total poin yang diperoleh Tim A adalah...",
    answers: [
      { text: "Tiga poin", correct: false },
      { text: "Empat poin", correct: true },
      { text: "Lima poin", correct: false },
      { text: "Enam poin", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Saat pemain membawa bola sambil berlari tanpa melakukan dribble, jenis pelanggaran yang terjadi adalah...",
    answers: [
      { text: "Foul biasa", correct: false },
      { text: "Double dribble", correct: false },
      { text: "Traveling", correct: true },
      { text: "Offensive foul", correct: false }
    ],
    difficulty: "mudah"
  },

  // ===== BOLA VOLI (Soal 29-37) =====
  {
    question: "Penemu permainan bola voli adalah...",
    answers: [
      { text: "Prof. Dr. James Naismith", correct: false },
      { text: "William G. Morgan", correct: true },
      { text: "Albert Simpson", correct: false },
      { text: "Ricardo Donovan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Jumlah poin kemenangan per set dalam permainan bola voli adalah...",
    answers: [
      { text: "21 poin", correct: false },
      { text: "23 poin", correct: false },
      { text: "25 poin", correct: true },
      { text: "24 poin", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Saat menerima servis kuat dari lawan, tim kesulitan melakukan serangan cepat. Keputusan terbaik untuk meningkatkan stabilitas penerimaan adalah...",
    answers: [
      { text: "Menambah jumlah pemain depan", correct: false },
      { text: "Mengubah formasi penerimaan menjadi W", correct: true },
      { text: "Menurunkan pemain yang paling tinggi", correct: false },
      { text: "Mengurangi komunikasi antar pemain", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah tim kehilangan poin karena setter sering berada di posisi belakang dan sulit memberikan bola cepat. Penyesuaian terbaik adalah...",
    answers: [
      { text: "Memindahkan setter ke posisi 4", correct: false },
      { text: "Mengatur formasi rotasi agar setter lebih sering berada di depan", correct: true },
      { text: "Menambah pemain libero di belakang", correct: false },
      { text: "Mengurangi variasi serangan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Blok tim sering terlambat karena pemain kurang membaca arah bola tosser lawan. Solusi paling efektif adalah...",
    answers: [
      { text: "Menambah latihan smash intensif", correct: false },
      { text: "Melatih membaca gerak tangan tosser sebagai indikator arah serangan", correct: true },
      { text: "Mengurangi tinggi lompatan saat blok", correct: false },
      { text: "Mengubah posisi libero menjadi blocker", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Serangan cepat (quick attack) gagal karena setter sering terlambat memberikan umpan. Faktor utama yang harus diperbaiki adalah...",
    answers: [
      { text: "Tinggi lompat smasher", correct: false },
      { text: "Timing dan sinkronisasi antara smasher dan setter", correct: true },
      { text: "Kekuatan pukulan smasher", correct: false },
      { text: "Jumlah pemain belakang yang mendukung", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Serangan smash tim sering diblok lawan karena timing langkah awalan tidak tepat. Langkah perbaikan terbaik adalah...",
    answers: [
      { text: "Menambah kekuatan tangan dengan latihan beban", correct: false },
      { text: "Menambah tinggi net saat latihan", correct: false },
      { text: "Melatih koordinasi awalan–tolakan–pukulan", correct: true },
      { text: "Mengurangi variasi serangan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam permainan voli, pemain yang bertugas khusus sebagai pemain bertahan dan tidak boleh melakukan serangan smash disebut...",
    answers: [
      { text: "Setter", correct: false },
      { text: "Spiker", correct: false },
      { text: "Libero", correct: true },
      { text: "Blocker", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Lawan memiliki pemain utama yang ahli menembak jarak jauh dalam basket. Strategi pertahanan paling efektif adalah...",
    answers: [
      { text: "Zona defense penuh tanpa menekan", correct: false },
      { text: "Man-to-man ketat dengan fokus pada penembak tersebut", correct: true },
      { text: "Menjaga area saja tanpa menekan penembak", correct: false },
      { text: "Membiarkan penembak bebas agar cepat lelah", correct: false }
    ],
    difficulty: "sedang"
  },

  // ===== BULU TANGKIS (Soal 38-45) =====
  {
    question: "Nama induk organisasi bulu tangkis Indonesia adalah...",
    answers: [
      { text: "PSBI", correct: false },
      { text: "PBBI", correct: false },
      { text: "PBSI", correct: true },
      { text: "BWFI", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Jumlah poin kemenangan per game dalam permainan bulu tangkis adalah...",
    answers: [
      { text: "22 poin", correct: false },
      { text: "23 poin", correct: false },
      { text: "25 poin", correct: false },
      { text: "21 poin", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "Nama lain permainan Badminton dalam bahasa Indonesia adalah...",
    answers: [
      { text: "Tenis lapangan", correct: false },
      { text: "Ping pong", correct: false },
      { text: "Bulu tangkis", correct: true },
      { text: "Raket bola", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pukulan yang dilakukan saat bola berada di sebelah KANAN tubuh pemain bulu tangkis disebut...",
    answers: [
      { text: "Backhand", correct: false },
      { text: "Smash", correct: false },
      { text: "Forehand", correct: true },
      { text: "Drop shot", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pukulan yang dilakukan apabila bola berada di sebelah KIRI tubuh pemain bulu tangkis dinamakan...",
    answers: [
      { text: "Forehand", correct: false },
      { text: "Smash", correct: false },
      { text: "Chop", correct: false },
      { text: "Backhand", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pemain sering kehilangan poin karena servisnya mudah ditebak lawan. Strategi peningkatan paling efektif adalah...",
    answers: [
      { text: "Mengurangi variasi putaran kok", correct: false },
      { text: "Menggunakan smash lebih sering sebagai servis", correct: false },
      { text: "Menambah variasi servis dari segi spin, arah, dan kecepatan", correct: true },
      { text: "Menggunakan raket yang lebih berat", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jika lawan memiliki smash keras namun lambat dalam perpindahan ke depan net, strategi paling efektif adalah...",
    answers: [
      { text: "Memberikan lob tinggi terus menerus", correct: false },
      { text: "Memberikan drop shot dan netting untuk memaksa lawan maju", correct: true },
      { text: "Menyerang balik dengan smash keras", correct: false },
      { text: "Bermain tenang tanpa variasi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pemain lambat mengantisipasi bola silang lawan. Kemungkinan kesalahan utama ada pada...",
    answers: [
      { text: "Posisi raket terlalu tinggi", correct: false },
      { text: "Kok terlalu ringan sehingga cepat berubah arah", correct: false },
      { text: "Posisi badan kurang siap dan tidak berada di tengah lapangan", correct: true },
      { text: "Pilihan pukulan selalu drive", correct: false }
    ],
    difficulty: "sedang"
  },

  // ===== TENIS MEJA (Soal 46-51) =====
  {
    question: "Pemain A memiliki smash kuat tetapi sering gagal menempatkan bola. Yang harus diperbaiki adalah...",
    answers: [
      { text: "Mengurangi kecepatan smash", correct: false },
      { text: "Melatih kontrol pergelangan tangan", correct: true },
      { text: "Mengubah pegangan bet ke penhold", correct: false },
      { text: "Menggunakan bet yang lebih tebal", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Lawan selalu melakukan push panjang ke arah backhand sehingga sulit untuk menyerang. Strategi terbaik adalah...",
    answers: [
      { text: "Menghindari semua bola backhand", correct: false },
      { text: "Melatih backhand topspin untuk menyerang bola push", correct: true },
      { text: "Menggunakan chop lebih sering", correct: false },
      { text: "Menunggu bola tinggi di forehand", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Serangan smash pemain tidak mematikan karena lawan mudah mengembalikan. Solusi terbaik adalah...",
    answers: [
      { text: "Mengurangi frekuensi smash saja", correct: false },
      { text: "Mengombinasikan smash dengan drop shot untuk membuat lawan bergerak", correct: true },
      { text: "Menggunakan raket baru yang lebih keras", correct: false },
      { text: "Hanya menggunakan teknik netting", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Seorang pemain cepat lelah di set ketiga meskipun tekniknya bagus. Solusi utama yang harus dilakukan adalah...",
    answers: [
      { text: "Menambah latihan pukulan overhead", correct: false },
      { text: "Meningkatkan latihan daya tahan (endurance)", correct: true },
      { text: "Mengganti raket menjadi lebih ringan", correct: false },
      { text: "Mengurangi gerakan kaki saat bertanding", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Keterampilan bermain tenis meja dapat ditingkatkan dengan cara yang paling efektif yaitu...",
    answers: [
      { text: "Belajar teori saja", correct: false },
      { text: "Beristirahat yang cukup", correct: false },
      { text: "Berlatih secara rutin dan konsisten", correct: true },
      { text: "Meditasi dan relaksasi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dalam tenis meja, pegangan bet yang berbeda bisa memengaruhi gaya bermain. Dua jenis pegangan bet yang umum digunakan adalah...",
    answers: [
      { text: "Penhold dan Shakehands", correct: true },
      { text: "Forehand dan backhand grip", correct: false },
      { text: "Topspin dan backspin grip", correct: false },
      { text: "Chinese dan European grip", correct: false }
    ],
    difficulty: "sedang"
  },

  // ===== RENANG GAYA DADA (Soal 52-62) =====
  {
    question: "Gerakan tangan pada renang gaya dada yang benar adalah...",
    answers: [
      { text: "Menarik ke belakang kemudian lurus ke atas", correct: false },
      { text: "Menarik ke samping kemudian menyatu kembali di depan dada", correct: true },
      { text: "Mengayun ke atas lalu mendorong ke bawah", correct: false },
      { text: "Mengayun ke belakang dalam posisi lurus", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Fase MELUNCUR dalam renang gaya dada berfungsi untuk...",
    answers: [
      { text: "Mengambil napas lebih lama sebelum tendangan", correct: false },
      { text: "Memperbesar sudut bukaan kaki katak", correct: false },
      { text: "Menghemat energi dan mempertahankan kecepatan", correct: true },
      { text: "Mempercepat tarikan lengan berikutnya", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Gerakan kaki pada renang gaya dada yang benar adalah...",
    answers: [
      { text: "Menendang lurus seperti gaya bebas/crawl", correct: false },
      { text: "Menekuk lutut, membuka kaki ke samping, lalu menutup kembali", correct: true },
      { text: "Mengayun ke atas dan ke bawah secara bergantian", correct: false },
      { text: "Menendang bergantian kiri dan kanan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Posisi tubuh yang benar saat berenang gaya dada adalah...",
    answers: [
      { text: "Badan condong ke samping", correct: false },
      { text: "Badan tegak lurus dengan permukaan air", correct: false },
      { text: "Badan sejajar dan streamline (lurus) di permukaan air", correct: true },
      { text: "Badan selalu berada di bawah permukaan air", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Saat mengambil napas dalam renang gaya dada, hal yang harus diperhatikan adalah...",
    answers: [
      { text: "Mengangkat kepala setinggi mungkin agar napas lebih banyak", correct: false },
      { text: "Mengangkat kepala sedikit sambil menarik lengan", correct: true },
      { text: "Mengambil napas sambil menendang kaki", correct: false },
      { text: "Menahan napas sampai akhir renang", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Kesalahan UMUM yang sering terjadi dalam renang gaya dada adalah...",
    answers: [
      { text: "Meluncur setelah tendangan kaki (ini justru benar)", correct: false },
      { text: "Kepala terlalu tinggi saat bernapas dan tarikan tangan terlalu lebar", correct: true },
      { text: "Menutup kaki setelah menendang (ini justru benar)", correct: false },
      { text: "Mempertahankan posisi streamline saat meluncur", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jika ingin meningkatkan kecepatan renang gaya dada, latihan yang paling efektif adalah...",
    answers: [
      { text: "Fokus pada satu bagian saja (hanya tangan atau hanya kaki)", correct: false },
      { text: "Mengurangi frekuensi latihan", correct: false },
      { text: "Melatih koordinasi seluruh gerakan (tangan, kaki, dan napas)", correct: true },
      { text: "Hanya melatih teknik pengambilan napas", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Koordinasi gerakan tangan, kaki, dan napas yang benar dalam gaya dada akan menghasilkan...",
    answers: [
      { text: "Gerakan tidak stabil dan mudah lelah", correct: false },
      { text: "Gerakan efisien dan hemat energi", correct: true },
      { text: "Cepat kelelahan karena terlalu banyak koordinasi", correct: false },
      { text: "Gerakan kaku yang sulit dikuasai", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jika gerakan kaki pada gaya dada tidak maksimal, dampaknya adalah...",
    answers: [
      { text: "Kecepatan renang meningkat", correct: false },
      { text: "Tubuh menjadi lebih stabil di air", correct: false },
      { text: "Dorongan ke depan berkurang secara signifikan", correct: true },
      { text: "Pengambilan napas menjadi lebih teratur", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Seorang perenang merasa cepat lelah saat melakukan gaya dada. Analisis penyebab yang paling mungkin adalah...",
    answers: [
      { text: "Gerakan terlalu lambat sehingga tidak efisien", correct: false },
      { text: "Teknik pernapasan yang tidak teratur dan tidak sinkron", correct: true },
      { text: "Air kolam terlalu dingin", correct: false },
      { text: "Kolam renang terlalu panjang", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Manakah urutan gerakan renang gaya dada yang BENAR?",
    answers: [
      { text: "Tendang kaki → tarik tangan → ambil napas → meluncur", correct: false },
      { text: "Tarik tangan + ambil napas → dorong tangan → tendang kaki → meluncur", correct: true },
      { text: "Meluncur → ambil napas → tendang kaki → tarik tangan", correct: false },
      { text: "Ambil napas → meluncur → tarik tangan → tendang kaki", correct: false }
    ],
    difficulty: "susah"
  },

  // ===== SENAM IRAMA & SENAM LANTAI (Soal 63-70) =====
  {
    question: "Jika gerakan senam terlalu kaku, solusi terbaik yang harus dilakukan adalah...",
    answers: [
      { text: "Menambah beban latihan untuk membangun kekuatan otot", correct: false },
      { text: "Melatih kelenturan dan relaksasi otot secara rutin", correct: true },
      { text: "Mengurangi frekuensi latihan", correct: false },
      { text: "Menghindari gerakan yang dianggap sulit", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam senam irama, jika koordinasi gerakan buruk, dampak yang akan terjadi adalah...",
    answers: [
      { text: "Gerakan menjadi lebih cepat dan dinamis", correct: false },
      { text: "Energi tubuh bertambah", correct: false },
      { text: "Gerakan tidak harmonis dan tidak selaras", correct: true },
      { text: "Tubuh menjadi lebih kuat", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Seorang siswa melakukan senam irama tetapi gerakannya tidak sesuai dengan musik. Analisis masalah utamanya adalah...",
    answers: [
      { text: "Kurang kekuatan otot", correct: false },
      { text: "Kurang kelenturan tubuh", correct: false },
      { text: "Kurang kemampuan mengikuti dan merasakan irama musik", correct: true },
      { text: "Kurang kecepatan dalam bergerak", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam melakukan gerakan kayang, seorang siswa sering terjatuh karena kehilangan keseimbangan. Solusi terbaik adalah...",
    answers: [
      { text: "Mengurangi frekuensi latihan kayang", correct: false },
      { text: "Memperkuat otot tangan dan kaki sebagai penopang", correct: true },
      { text: "Menghindari gerakan kayang selamanya", correct: false },
      { text: "Menambah kecepatan saat melakukan kayang", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jika seseorang merasa sakit di leher saat melakukan roll belakang, kemungkinan kesalahan teknik yang terjadi adalah...",
    answers: [
      { text: "Tumpuan pada tangan terlalu kuat", correct: false },
      { text: "Posisi dagu tidak menempel ke dada saat mengguling", correct: true },
      { text: "Kaki terlalu lurus saat berguling", correct: false },
      { text: "Tidak menggunakan alas/matras yang cukup tebal", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Seorang siswa gagal melakukan roll depan karena tubuhnya tidak membulat saat mengguling. Analisis penyebab utama kegagalan tersebut adalah...",
    answers: [
      { text: "Kurang kecepatan saat melakukan awalan", correct: false },
      { text: "Posisi tangan yang salah saat bertumpu", correct: false },
      { text: "Kurang menjaga posisi tubuh tetap bulat dan kompak selama mengguling", correct: true },
      { text: "Tidak menggunakan matras yang sesuai", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Komponen kebugaran jasmani yang paling dilatih saat seseorang melakukan gerakan kayang, roll, dan split adalah...",
    answers: [
      { text: "Kecepatan", correct: false },
      { text: "Kekuatan dan kelenturan (fleksibilitas)", correct: true },
      { text: "Daya tahan kardiovaskuler", correct: false },
      { text: "Ketepatan dan akurasi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Manakah yang BUKAN merupakan elemen utama dalam senam irama yang baik?",
    answers: [
      { text: "Keserasian gerakan dengan musik/irama", correct: false },
      { text: "Koordinasi antar bagian tubuh", correct: false },
      { text: "Kecepatan berlari di atas matras", correct: true },
      { text: "Kelenturan dan ekspresi gerak", correct: false }
    ],
    difficulty: "sedang"
  },

  // ===== KEBUGARAN JASMANI (Soal 71-76) =====
  {
    question: "Seorang atlet memiliki kekuatan tinggi tetapi kurang fleksibel. Dampak yang paling mungkin terjadi adalah...",
    answers: [
      { text: "Gerakan menjadi lebih cepat dan eksplosif", correct: false },
      { text: "Daya tahan meningkat drastis", correct: false },
      { text: "Rentan mengalami cedera otot dan sendi", correct: true },
      { text: "Koordinasi tubuh menjadi sempurna", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Seseorang jarang berolahraga dan sering mengonsumsi makanan tidak sehat. Dampak jangka panjang yang akan terjadi adalah...",
    answers: [
      { text: "Kebugaran jasmani meningkat secara alami", correct: false },
      { text: "Risiko penyakit degeneratif dan metabolik meningkat", correct: true },
      { text: "Otot semakin kuat karena tubuh beradaptasi", correct: false },
      { text: "Tubuh menjadi lebih lentur", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Seorang siswa rutin berolahraga tetapi cepat lelah saat berlari jauh. Analisis penyebab yang paling mungkin adalah...",
    answers: [
      { text: "Kurang latihan kekuatan otot", correct: false },
      { text: "Kurang kelenturan tubuh", correct: false },
      { text: "Daya tahan jantung-paru (kardiovaskuler) yang rendah", correct: true },
      { text: "Koordinasi tubuh yang buruk", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Seorang siswa ingin meningkatkan daya tahan tubuh secara keseluruhan. Program latihan yang paling tepat adalah...",
    answers: [
      { text: "Latihan intensitas sangat tinggi tanpa istirahat", correct: false },
      { text: "Latihan teratur dengan peningkatan beban/intensitas secara bertahap", correct: true },
      { text: "Latihan hanya sekali seminggu dengan durasi panjang", correct: false },
      { text: "Hanya fokus pada satu jenis latihan saja", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tim kamu selalu kalah dalam perebutan rebound dalam basket. Solusi latihan yang paling tepat adalah...",
    answers: [
      { text: "Melatih tembakan tiga poin lebih banyak", correct: false },
      { text: "Melatih box-out dan positioning di bawah ring", correct: true },
      { text: "Mengurangi jumlah operan antar pemain", correct: false },
      { text: "Meningkatkan teknik lay-up", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Rumus untuk menghitung Denyut Nadi Maksimal (DNM) seseorang adalah...",
    answers: [
      { text: "DNM = 200 − usia", correct: false },
      { text: "DNM = 220 − usia", correct: true },
      { text: "DNM = 180 + usia", correct: false },
      { text: "DNM = 220 + usia", correct: false }
    ],
    difficulty: "mudah"
  },

  // ===== KESEHATAN REMAJA — PERGAULAN BEBAS (Soal 77-80) =====
  {
    question: "Cara paling efektif untuk mencegah pergaulan bebas di kalangan remaja adalah...",
    answers: [
      { text: "Memberikan hukuman keras kepada pelanggar", correct: false },
      { text: "Membatasi semua aktivitas sosial remaja", correct: false },
      { text: "Edukasi karakter dan pengawasan yang baik dari keluarga dan lingkungan", correct: true },
      { text: "Mengabaikan masalah pergaulan bebas", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Salah satu dampak PALING SERIUS dari pergaulan bebas di kalangan remaja adalah...",
    answers: [
      { text: "Rajin belajar dan berprestasi di sekolah", correct: false },
      { text: "Penyalahgunaan narkoba dan gangguan kesehatan fisik serta mental", correct: true },
      { text: "Hidup lebih sehat dan disiplin waktu", correct: false },
      { text: "Meningkatnya prestasi akademik", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pergaulan bebas pada remaja dapat menyebabkan berbagai perilaku negatif. Yang BUKAN merupakan dampak pergaulan bebas adalah...",
    answers: [
      { text: "Penyalahgunaan narkoba", correct: false },
      { text: "Perilaku menyimpang dari norma", correct: false },
      { text: "Gangguan kesehatan fisik dan mental", correct: false },
      { text: "Prestasi belajar meningkat dan hidup lebih disiplin", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "Banyak turnover terjadi karena pemain basket melakukan operan saat posisi tubuh tidak seimbang. Perbaikan teknik paling tepat adalah...",
    answers: [
      { text: "Menggunakan satu tangan saat melakukan passing", correct: false },
      { text: "Menjaga posisi kaki stabil dan melakukan pivot sebelum mengoper", correct: true },
      { text: "Mengurangi kecepatan operan agar lebih aman", correct: false },
      { text: "Menggunakan operan bawah saja", correct: false }
    ],
    difficulty: "sedang"
  }
];
