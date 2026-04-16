const materi = {
  judul: "Keterampilan Dasar Tindakan Keperawatan (KDTK) Kelas XI - Semester Genap 2026",
  deskripsi: `Materi ini mencakup tindakan keperawatan dasar meliputi personal hygiene, perawatan tubuh, dan prosedur keperawatan klinis.

    **DEKUBITUS (LUKA TEKAN)**:
    Luka dekubitus terjadi akibat tekanan berkepanjangan pada kulit, terutama di area tulang yang menonjol.
    Area paling berisiko saat posisi TELENTANG (supine): sakrum dan tumit.
    Area berisiko posisi miring: trokhanter mayor dan maleolus.
    Area berisiko posisi duduk: iskium (tulang duduk).
    Pencegahan: alih posisi tiap 2 jam, penggunaan kasur anti-dekubitus, menjaga kebersihan kulit.

    **ORAL HYGIENE (KEBERSIHAN MULUT)**:
    Tujuan: mencegah infeksi mulut, menjaga kenyamanan, mencegah karies.
    Posisi pasien tidak sadar: SIM miring ke satu sisi (lateral) untuk mencegah aspirasi.
    Sikat gigi: gunakan sikat berbulu lembut, terutama pada pasien dengan gusi sensitif.
    Penyakit mulut: karies (disebabkan plak dan bakteri), gingivitis, stomatitis.
    Kesalahan umum: tidak melakukan komunikasi terapeutik, menggunakan sikat keras pada gusi sensitif.

    **VULVA HYGIENE**:
    Tujuan utama: mencegah infeksi saluran kemih (ISK) dan menjaga kebersihan area genitalia.
    Teknik membersihkan: dari DEPAN ke BELAKANG (atas ke bawah) untuk mencegah kontaminasi feses ke uretra.
    Dilakukan pada: pasien wanita tirah baring, pasien dengan kateter, pasca persalinan.

    **ELIMINASI — BEDPAN & URINAL**:
    Bedpan (pispot): alat untuk membantu pasien BAB di atas tempat tidur.
    Urinal: alat untuk membantu pasien BAK di atas tempat tidur.
    Nierbeken: bengkok, wadah untuk menampung cairan/muntahan.
    Pemasangan bedpan pasca operasi vertebra: teknik log-rolling (dimiringkan serentak) untuk mencegah cedera saraf.

    **PERAWATAN KUKU**:
    Kuku keras: rendam dengan air hangat terlebih dahulu sebelum dipotong.
    Kuku kaki: potong lurus sejajar (bukan melengkung) untuk mencegah kuku menusuk daging (paronikia/ingrown nail).
    Paronikia: infeksi jaringan di sekitar kuku akibat kuku menusuk daging.
    Karies gigi: disebabkan oleh infeksi bakteri dan plak pada gigi.

    **MENGGANTI LINEN (ALIH BARING)**:
    Komunikasi terapeutik WAJIB dilakukan sebelum tindakan (menjelaskan prosedur kepada pasien).
    Pastikan rem tempat tidur terkunci sebelum memiringkan pasien.
    Linen kotor: gulung ke arah dalam tanpa mengibaskan (mencegah penyebaran mikroorganisme).
    Jika pasien gemuk/berat: minta bantuan untuk mencegah cedera perawat dan pasien.

    **KOMPRES HANGAT**:
    Tujuan: meningkatkan sirkulasi darah, mengurangi nyeri otot.
    Risiko suhu terlalu tinggi: luka bakar (combustio).
    Suhu air kompres hangat yang aman: 40–46°C.

    **CUCI RAMBUT DI TEMPAT TIDUR**:
    Indikasi: pasien tirah baring yang tidak mampu ke kamar mandi.
    Alat khusus: TALANG KEPALA (diletakkan di bawah kepala untuk mengalirkan air).
    Pencegahan air masuk telinga: tutup telinga dengan bola kapas.
    Pencegahan air masuk mata: tutup mata dengan kasa/kapas basah.
    Pasien hipotensi ortostatik: lakukan cuci rambut dengan posisi supine (telentang).
    Pasien dengan luka operasi di leher: posisi supine dengan penyangga leher.
    Pasien penurunan kesadaran: utamakan PERLINDUNGAN JALAN NAPAS.

    **MEMANDIKAN PASIEN**:
    Urutan memandikan: wajah → lengan → dada → perut → kaki → punggung → genitalia.
    Pasien risiko jatuh: gunakan kursi mandi dan alas anti-slip.
    Jika ditemukan luka dekubitus saat mandi: hindari menggosok luka, bersihkan sesuai prosedur.
    Kontraindikasi mandi: luka bakar luas, penyakit kulit infeksi menular (gunakan lap basah sekali pakai).
    Jika pasien menggigil saat dimandikan: HENTIKAN prosedur, keringkan tubuh, selimuti pasien.

    **BIOETIKA PERAWATAN**:
    Prinsip bioetika: autonomy (otonomi), beneficence (berbuat baik), non-maleficence (tidak merugikan), justice (keadilan).
    Menjaga privasi: tutup pintu, hanya buka bagian tubuh yang sedang dibersihkan.
    Komunikasi terapeutik: WAJIB dilakukan sebelum setiap tindakan keperawatan.

    **PENYAKIT KULIT KEPALA**:
    Psoriasis: penyakit autoimun kulit yang membentuk lapisan kerak keperakan. Diatasi dengan salep steroid dan menyisir lapisan kerak.
    Pediculosis (kutu kepala): infeksi parasit.
    Ketombe: dermatitis seboroik ringan.
    Folikulitis: infeksi folikel rambut.

    **KONTRAINDIKASI TINDAKAN**:
    Mandi di tempat tidur dikontraindikasikan pada: luka bakar luas aktif (nyeri hebat, risiko kerusakan jaringan), penyakit kulit dengan lesi terbuka dan bula (risiko maserasi dan penyebaran infeksi).
    Penyakit infeksi menular: gunakan lap basah sekali pakai sebagai alternatif mandi.
  `,
};

const soal = [
  // ===== DEKUBITUS =====
  {
    question: "Seorang pasien tirah baring lama berisiko mengalami luka tekan (dekubitus). Area manakah yang PALING BERISIKO saat pasien dalam posisi telentang (supine)?",
    answers: [
      { text: "Siku dan tumit", correct: false },
      { text: "Lutut dan jari kaki", correct: false },
      { text: "Sakrum dan tumit", correct: true },
      { text: "Telinga dan bahu", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Area tubuh yang paling berisiko mengalami dekubitus pada pasien dengan posisi MIRING (lateral) adalah ...",
    answers: [
      { text: "Sakrum dan tulang ekor", correct: false },
      { text: "Trokhanter mayor dan maleolus lateralis", correct: true },
      { text: "Tumit dan punggung", correct: false },
      { text: "Siku dan bahu", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Upaya pencegahan dekubitus yang PALING EFEKTIF pada pasien tirah baring adalah ...",
    answers: [
      { text: "Memberikan lotion pada seluruh tubuh setiap hari", correct: false },
      { text: "Memasang bantal di bawah kepala pasien", correct: false },
      { text: "Melakukan alih posisi setiap 2 jam dan menggunakan kasur anti-dekubitus", correct: true },
      { text: "Memandikan pasien dua kali sehari", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Saat memandikan pasien di tempat tidur, perawat menemukan luka dekubitus di punggung. Tindakan yang paling tepat adalah ...",
    answers: [
      { text: "Menggosok luka agar bersih dan tidak berbau", correct: false },
      { text: "Menghindari area luka dan membersihkan sesuai prosedur perawatan luka", correct: true },
      { text: "Menekan luka dengan waslap basah", correct: false },
      { text: "Mengabaikan luka dan melanjutkan memandikan seperti biasa", correct: false }
    ],
    difficulty: "sedang"
  },

  // ===== ORAL HYGIENE =====
  {
    question: "Saat melakukan tindakan oral hygiene pada pasien tidak sadar, posisi yang paling tepat untuk mencegah aspirasi adalah ...",
    answers: [
      { text: "Supinasi (telentang)", correct: false },
      { text: "Fowler (setengah duduk)", correct: false },
      { text: "Sim miring ke satu sisi (lateral)", correct: true },
      { text: "Trendelenburg", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Seorang siswa akan menggosok gigi pasien, tetapi langsung memulai tindakan tanpa menjelaskan prosedur kepada pasien. Kesalahan utama yang dilakukannya adalah ...",
    answers: [
      { text: "Tidak memakai alat pelindung diri", correct: false },
      { text: "Tidak menyiapkan alat dengan lengkap", correct: false },
      { text: "Tidak melakukan komunikasi terapeutik", correct: true },
      { text: "Tidak mencuci tangan sebelum tindakan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Siswa menggunakan sikat gigi yang keras pada pasien dengan gusi sensitif hingga terjadi perdarahan. Kesalahan yang terjadi adalah ...",
    answers: [
      { text: "Salah komunikasi dengan pasien", correct: false },
      { text: "Salah pemilihan alat dan teknik tindakan", correct: true },
      { text: "Salah posisi pasien saat tindakan", correct: false },
      { text: "Salah waktu melakukan tindakan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Salah satu penyakit pada mulut yang disebabkan oleh infeksi bakteri dan penumpukan plak adalah ...",
    answers: [
      { text: "Katimumul", correct: false },
      { text: "Karies gigi", correct: true },
      { text: "Paronikia", correct: false },
      { text: "Psoriasis", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Tujuan utama dari tindakan oral hygiene pada pasien yang menjalani perawatan jangka panjang adalah ...",
    answers: [
      { text: "Meningkatkan nafsu makan pasien", correct: false },
      { text: "Mencegah infeksi mulut, menjaga kenyamanan, dan mencegah karies gigi", correct: true },
      { text: "Mengurangi tekanan darah pasien", correct: false },
      { text: "Melancarkan pernapasan pasien secara langsung", correct: false }
    ],
    difficulty: "mudah"
  },

  // ===== VULVA HYGIENE =====
  {
    question: "Tujuan utama dari tindakan vulva hygiene pada pasien wanita adalah ...",
    answers: [
      { text: "Meningkatkan nafsu makan pasien", correct: false },
      { text: "Mencegah infeksi saluran kemih (ISK)", correct: true },
      { text: "Mengurangi tekanan darah", correct: false },
      { text: "Melancarkan pernapasan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Urutan yang BENAR dalam membersihkan area vulva saat melakukan vulva hygiene adalah ...",
    answers: [
      { text: "Dari bawah ke atas (belakang ke depan)", correct: false },
      { text: "Dari atas ke bawah (depan ke belakang)", correct: true },
      { text: "Dari tengah ke samping secara melingkar", correct: false },
      { text: "Bolak-balik dari atas ke bawah dan bawah ke atas", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Alasan teknis mengapa vulva hygiene harus dilakukan dari DEPAN ke BELAKANG adalah ...",
    answers: [
      { text: "Agar lebih mudah dijangkau oleh perawat", correct: false },
      { text: "Untuk mencegah kontaminasi feses dari anus ke uretra yang dapat menyebabkan ISK", correct: true },
      { text: "Agar pasien merasa lebih nyaman saat prosedur berlangsung", correct: false },
      { text: "Karena bagian belakang lebih kotor daripada bagian depan", correct: false }
    ],
    difficulty: "sedang"
  },

  // ===== ELIMINASI — BEDPAN & URINAL =====
  {
    question: "Alat yang digunakan untuk mempermudah pasien BAB di atas tempat tidur disebut ...",
    answers: [
      { text: "Urinal", correct: false },
      { text: "Pispot (Bedpan)", correct: true },
      { text: "Nierbeken (bengkok)", correct: false },
      { text: "Kateter", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pasien wanita pasca operasi tulang belakang (fraktur vertebra) ingin buang air besar. Cara pemasangan bedpan yang paling aman untuk mencegah cedera saraf adalah ...",
    answers: [
      { text: "Meminta pasien mengangkat bokong setinggi-tingginya", correct: false },
      { text: "Menarik pasien dari bawah ketiak ke posisi duduk", correct: false },
      { text: "Memiringkan pasien secara log-rolling lalu menyelipkan bedpan di bawah bokong", correct: true },
      { text: "Meminta pasien duduk di kursi berlubang", correct: false }
    ],
    difficulty: "susah"
  },

  // ===== PERAWATAN KUKU =====
  {
    question: "Pasien memiliki kuku yang sangat keras dan sulit dipotong. Tindakan yang paling tepat sebelum memotong kuku adalah ...",
    answers: [
      { text: "Memotong dengan paksa menggunakan gunting besar", correct: false },
      { text: "Merendam kuku dahulu dengan air hangat agar lunak", correct: true },
      { text: "Menghentikan tindakan dan tidak memotong kuku", correct: false },
      { text: "Mengabaikan kondisi kuku karena bukan prioritas", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Cara memotong kuku kaki yang BENAR untuk mencegah kuku menusuk daging (ingrown nail/paronikia) adalah ...",
    answers: [
      { text: "Dipotong melengkung mengikuti bentuk ujung jari", correct: false },
      { text: "Dipotong miring di bagian sudutnya", correct: false },
      { text: "Dipotong lurus sejajar dengan ujung jari", correct: true },
      { text: "Dipotong sependek mungkin agar tidak cepat panjang", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Paronikia adalah kondisi yang terjadi akibat ...",
    answers: [
      { text: "Infeksi jamur pada lempeng kuku", correct: false },
      { text: "Kuku menusuk jaringan daging di sekitar kuku (ingrown nail)", correct: true },
      { text: "Penebalan kuku akibat infeksi kronik", correct: false },
      { text: "Kekurangan vitamin pada kuku", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Cara yang BUKAN solusi untuk mengatasi masalah ingrown nail (kuku menusuk daging) adalah ...",
    answers: [
      { text: "Membersihkan kaki secara rutin", correct: false },
      { text: "Menggunakan sepatu yang pas dan tidak sempit", correct: false },
      { text: "Memotong kuku melengkung/menyudut", correct: true },
      { text: "Memotong kuku lurus sejajar", correct: false }
    ],
    difficulty: "sedang"
  },

  // ===== MENGGANTI LINEN =====
  {
    question: "Seorang siswa akan memulai tindakan mengganti linen pada pasien tirah baring, tetapi langsung membuka selimut tanpa memberi penjelasan kepada pasien. Kesalahan utama yang dilakukan adalah ...",
    answers: [
      { text: "Tidak mencuci tangan sebelum memulai tindakan", correct: false },
      { text: "Tidak menggunakan sarung tangan pelindung", correct: false },
      { text: "Tidak melakukan komunikasi terapeutik kepada pasien", correct: true },
      { text: "Tidak membawa alat yang lengkap", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dalam simulasi, siswa memiringkan pasien ke satu sisi tanpa memastikan rem tempat tidur terkunci. Risiko utama dari tindakan tersebut adalah ...",
    answers: [
      { text: "Linen menjadi kotor dan harus diganti ulang", correct: false },
      { text: "Pasien jatuh dari tempat tidur", correct: true },
      { text: "Prosedur menjadi memakan waktu lebih lama", correct: false },
      { text: "Linen menjadi sulit untuk diganti", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Saat menggulung linen kotor, siswa menggoyangkan sprei sehingga debu beterbangan. Tindakan yang seharusnya dilakukan adalah ...",
    answers: [
      { text: "Mengibaskan sprei agar kotoran berjatuhan ke lantai", correct: false },
      { text: "Menggulung linen kotor ke arah dalam tanpa mengibaskan", correct: true },
      { text: "Menarik linen dengan cepat dan melemparkannya ke ember", correct: false },
      { text: "Mencuci ulang linen langsung di tempat tidur", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Saat memiringkan pasien untuk mengganti linen, siswa tidak meminta bantuan padahal pasien bertubuh besar/obesitas. Risiko utama yang akan terjadi adalah ...",
    answers: [
      { text: "Linen tidak terpasang dengan rapi", correct: false },
      { text: "Cedera pada pasien dan perawat (musculoskeletal injury)", correct: true },
      { text: "Waktu tindakan menjadi lebih lama dari biasanya", correct: false },
      { text: "Linen cepat rusak karena tarikan yang kuat", correct: false }
    ],
    difficulty: "sedang"
  },

  // ===== KOMPRES HANGAT =====
  {
    question: "Risiko utama jika memberikan kompres hangat dengan suhu air yang TERLALU TINGGI kepada pasien adalah ...",
    answers: [
      { text: "Pendarahan pada area yang dikompres", correct: false },
      { text: "Luka bakar (combustio) pada kulit pasien", correct: true },
      { text: "Hipertermi yang membahayakan jiwa", correct: false },
      { text: "Bradikardia (penurunan denyut jantung)", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Suhu air yang aman dan tepat untuk kompres hangat pada pasien dewasa adalah ...",
    answers: [
      { text: "20–30°C (air dingin)", correct: false },
      { text: "50–60°C (sangat panas)", correct: false },
      { text: "40–46°C (hangat, tidak membakar kulit)", correct: true },
      { text: "36–37°C (suhu tubuh normal)", correct: false }
    ],
    difficulty: "sedang"
  },

  // ===== CUCI RAMBUT DI TEMPAT TIDUR =====
  {
    question: "Alat khusus yang diletakkan di bawah kepala pasien untuk mengalirkan air saat mencuci rambut di tempat tidur disebut ...",
    answers: [
      { text: "Bantal leher ortopedi", correct: false },
      { text: "Handuk gulung", correct: false },
      { text: "Talang kepala", correct: true },
      { text: "Pengalas plastik biasa", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Saat membilas rambut pasien, air masuk ke dalam telinga pasien. Tindakan pencegahan yang tidak dilakukan oleh perawat adalah ...",
    answers: [
      { text: "Menutup mata dengan kasa/kapas basah", correct: false },
      { text: "Menutup telinga dengan bola kapas sebelum prosedur", correct: true },
      { text: "Menutup dada dengan handuk bersih", correct: false },
      { text: "Memasang pengalas di bawah kepala pasien", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Seorang pasien tirah baring dengan riwayat HIPOTENSI ORTOSTATIK perlu dicuci rambutnya. Posisi yang paling tepat untuk tindakan ini adalah ...",
    answers: [
      { text: "Posisi duduk tegak di tepi tempat tidur", correct: false },
      { text: "Posisi supine (telentang) di atas tempat tidur", correct: true },
      { text: "Posisi semi fowler (setengah duduk)", correct: false },
      { text: "Menunda tindakan sampai pasien mampu berdiri", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Saat mencuci rambut pasien dengan kondisi LUKA OPERASI DI LEHER, posisi yang paling aman adalah ...",
    answers: [
      { text: "Tengkurap (prone)", correct: false },
      { text: "Duduk tegak tanpa penyangga", correct: false },
      { text: "Supine (telentang) dengan penyangga leher", correct: true },
      { text: "Miring tanpa penopang leher", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pasien dengan kondisi PENURUNAN KESADARAN akan dilakukan cuci rambut. Hal yang PALING PENTING diperhatikan perawat adalah ...",
    answers: [
      { text: "Kecepatan kerja agar tidak terlalu lama", correct: false },
      { text: "Penggunaan sampo yang berkualitas baik", correct: false },
      { text: "Perlindungan jalan napas (airway) pasien", correct: true },
      { text: "Jumlah air yang digunakan selama prosedur", correct: false }
    ],
    difficulty: "sedang"
  },

  // ===== MEMANDIKAN PASIEN =====
  {
    question: "Urutan memandikan bagian tubuh pasien yang benar dimulai dari ...",
    answers: [
      { text: "Kaki, wajah, lengan, dada, perut, punggung", correct: false },
      { text: "Wajah, lengan, dada, perut, kaki, punggung", correct: true },
      { text: "Genitalia, wajah, lengan, dada, perut, kaki", correct: false },
      { text: "Bokong, genital, punggung, wajah, lengan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Seorang lansia dengan risiko jatuh tinggi dimandikan di kamar mandi tanpa alat bantu. Saat berdiri, pasien hampir terpeleset. Tindakan pencegahan yang paling tepat adalah ...",
    answers: [
      { text: "Mempercepat proses mandi agar lebih efisien", correct: false },
      { text: "Menggunakan kursi mandi dan alas anti-slip di lantai kamar mandi", correct: true },
      { text: "Membiarkan pasien beradaptasi dengan kondisi kamar mandi", correct: false },
      { text: "Mengurangi jumlah air yang digunakan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Saat sedang memandikan pasien di tempat tidur, pasien tiba-tiba menggigil, bibir tampak pucat, dan kulit teraba dingin. Langkah yang harus segera dilakukan perawat adalah ...",
    answers: [
      { text: "Mempercepat proses memandikan agar pasien segera berpakaian", correct: false },
      { text: "Menggosok kulit pasien lebih keras agar sirkulasi darah meningkat", correct: false },
      { text: "Menghentikan prosedur, mengeringkan tubuh, dan menyelimuti pasien", correct: true },
      { text: "Menambahkan air panas langsung ke tubuh pasien", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Seorang pasien wanita dengan luka bakar derajat II seluas 40% di area dada dan punggung baru masuk ke UGD. Alasan utama mengapa mandi di tempat tidur menjadi KONTRAINDIKASI saat ini adalah ...",
    answers: [
      { text: "Risiko infeksi silang akibat penggunaan waslap biasa", correct: false },
      { text: "Pasien harus dalam kondisi puasa sebelum tindakan medis", correct: false },
      { text: "Kurangnya peralatan mandi khusus untuk pasien luka bakar", correct: false },
      { text: "Adanya nyeri hebat dan risiko kerusakan jaringan lebih lanjut pada area luka", correct: true }
    ],
    difficulty: "susah"
  },
  {
    question: "Seorang pasien lansia dengan penyakit kulit kronis memiliki lesi terbuka dan bula (gelembung cairan) yang mudah pecah di seluruh tubuh. Prinsip kontraindikasi yang mendasari keputusan perawat untuk tidak memandikan secara menyeluruh adalah ...",
    answers: [
      { text: "Menghindari risiko maserasi dan penyebaran infeksi pada area kulit yang tidak utuh", correct: true },
      { text: "Mencegah pasien kedinginan karena usia lanjutnya", correct: false },
      { text: "Menghemat waktu perawatan karena kondisi kulit yang kompleks", correct: false },
      { text: "Menghindari penggunaan sabun antiseptik pada kulit sensitif", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Alternatif cara membersihkan tubuh untuk pasien dengan penyakit infeksi menular tertentu yang paling tepat adalah ...",
    answers: [
      { text: "Mandi basah biasa di kamar mandi dengan bantuan perawat", correct: false },
      { text: "Menutup bagian yang terinfeksi dan memandikan area lainnya", correct: false },
      { text: "Menggunakan lap basah sekali pakai (disposable wipe) untuk membersihkan tubuh", correct: true },
      { text: "Tidak membersihkan tubuh sampai kondisi infeksi sembuh total", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Yang BUKAN merupakan kontraindikasi memandikan pasien adalah ...",
    answers: [
      { text: "Pasien dengan luka bakar luas yang masih aktif", correct: false },
      { text: "Pasien pasca bersalin normal yang sudah stabil", correct: true },
      { text: "Pasien post-op dengan kondisi hemodinamik tidak stabil", correct: false },
      { text: "Pasien dengan penyakit kulit bula yang mudah pecah", correct: false }
    ],
    difficulty: "sedang"
  },

  // ===== BIOETIKA PERAWATAN =====
  {
    question: "Saat memandikan pasien lawan jenis, tindakan yang paling mencerminkan prinsip BIOETIKA (menghormati privasi) adalah ...",
    answers: [
      { text: "Membuka seluruh pakaian pasien sekaligus agar prosedur lebih cepat selesai", correct: false },
      { text: "Menutup pintu dan hanya membuka bagian tubuh yang sedang dibersihkan", correct: true },
      { text: "Meminta keluarga masuk ke dalam kamar saat memandikan untuk menemani", correct: false },
      { text: "Mengajak pasien bercanda mengenai bagian tubuhnya agar tidak tegang", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Prinsip bioetika yang mewajibkan perawat untuk menjelaskan prosedur tindakan kepada pasien sebelum dilakukan disebut prinsip ...",
    answers: [
      { text: "Non-maleficence (tidak merugikan)", correct: false },
      { text: "Justice (keadilan)", correct: false },
      { text: "Autonomy (menghormati hak pasien untuk membuat keputusan)", correct: true },
      { text: "Beneficence (berbuat baik)", correct: false }
    ],
    difficulty: "sedang"
  },

  // ===== PENYAKIT KULIT KEPALA =====
  {
    question: "Penyakit kulit kepala yang disebabkan oleh kondisi autoimun dan membentuk lapisan kerak keperakan disebut ...",
    answers: [
      { text: "Ketombe (dermatitis seboroik)", correct: false },
      { text: "Folikulitis", correct: false },
      { text: "Psoriasis", correct: true },
      { text: "Pediculosis (kutu kepala)", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Cara mengatasi/meredakan psoriasis pada kulit kepala yang paling tepat adalah ...",
    answers: [
      { text: "Mencukur rambut agar lebih mudah dirawat", correct: false },
      { text: "Memberikan salep steroid dan menyisir lapisan kerak secara perlahan", correct: true },
      { text: "Keramas sebanyak-banyaknya setiap hari", correct: false },
      { text: "Menggunakan topi untuk menutupi area yang terinfeksi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Penyakit kulit kepala yang disebabkan oleh infeksi parasit (kutu) disebut ...",
    answers: [
      { text: "Psoriasis", correct: false },
      { text: "Folikulitis", correct: false },
      { text: "Dermatitis", correct: false },
      { text: "Pediculosis kapitis", correct: true }
    ],
    difficulty: "mudah"
  },

  // ===== ANALISIS & HOTS =====
  {
    question: "Seorang perawat junior memandikan pasien dengan kondisi post-stroke yang mengalami hemiplegia (lumpuh separuh tubuh). Pendekatan yang paling tepat dalam menentukan urutan memandikan adalah ...",
    answers: [
      { text: "Memulai dari sisi tubuh yang lumpuh karena lebih mudah diakses", correct: false },
      { text: "Memulai dari wajah lalu memandikan sisi yang sehat, diikuti sisi yang lumpuh", correct: false },
      { text: "Memandikan sisi yang sehat terlebih dahulu, lalu sisi yang lumpuh/lemah", correct: true },
      { text: "Memandikan sesuai urutan standar tanpa mempertimbangkan kondisi kelumpuhan", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Seorang pasien dewasa dengan kondisi diabetes mellitus akan dilakukan perawatan kuku kaki. Pertimbangan UTAMA yang harus diperhatikan perawat saat merawat kuku pasien DM adalah ...",
    answers: [
      { text: "Kuku pasien DM lebih keras sehingga perlu direndam lebih lama", correct: false },
      { text: "Sirkulasi dan sensasi di kaki pasien DM berkurang sehingga risiko luka dan infeksi lebih tinggi, harus sangat hati-hati", correct: true },
      { text: "Kuku pasien DM tidak perlu dipotong karena tumbuh lebih lambat", correct: false },
      { text: "Pasien DM tidak boleh melakukan perawatan kuku sama sekali", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Saat melakukan tindakan oral hygiene pada pasien yang terpasang nasogastric tube (NGT), perawat harus lebih memperhatikan ...",
    answers: [
      { text: "Memilih pasta gigi yang mahal dan berkualitas tinggi", correct: false },
      { text: "Kecepatan dalam melakukan tindakan agar tidak membuang waktu", correct: false },
      { text: "Memastikan NGT tidak tertarik dan posisi pasien aman untuk mencegah aspirasi", correct: true },
      { text: "Menggunakan sikat gigi listrik agar lebih efektif membersihkan gigi", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Prinsip pencegahan infeksi yang paling penting saat melakukan SEMUA tindakan personal hygiene pada pasien adalah ...",
    answers: [
      { text: "Menggunakan alat yang mahal dan bermerek", correct: false },
      { text: "Cuci tangan sebelum dan setelah tindakan, serta gunakan APD yang sesuai", correct: true },
      { text: "Melakukan tindakan secepat mungkin agar pasien tidak lama menunggu", correct: false },
      { text: "Menggunakan antiseptik pada seluruh tubuh pasien setiap kali tindakan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Setelah melakukan tindakan keperawatan personal hygiene, dokumentasi yang harus dilakukan perawat meliputi ...",
    answers: [
      { text: "Hanya mencatat nama tindakan yang dilakukan", correct: false },
      { text: "Waktu tindakan, kondisi pasien sebelum dan sesudah, temuan khusus, dan respons pasien", correct: true },
      { text: "Hanya menuliskan bahwa tindakan telah selesai dilakukan", correct: false },
      { text: "Mencatat nama perawat yang melakukan tindakan saja", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Seorang pasien menolak untuk dilakukan tindakan oral hygiene. Sikap perawat yang paling tepat berdasarkan prinsip etik adalah ...",
    answers: [
      { text: "Tetap memaksa melakukan tindakan demi kesehatan pasien", correct: false },
      { text: "Langsung meninggalkan pasien tanpa penjelasan lebih lanjut", correct: false },
      { text: "Menghormati penolakan pasien, menjelaskan pentingnya tindakan, dan mendokumentasikan penolakan tersebut", correct: true },
      { text: "Meminta keluarga untuk memaksa pasien agar mau dilakukan tindakan", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Manakah yang merupakan urutan tahapan komunikasi terapeutik yang BENAR sebelum melakukan tindakan keperawatan?",
    answers: [
      { text: "Langsung melakukan tindakan → jelaskan prosedur → minta persetujuan", correct: false },
      { text: "Salam → perkenalkan diri → jelaskan tujuan dan prosedur → minta persetujuan pasien", correct: true },
      { text: "Minta persetujuan → salam → jelaskan prosedur → mulai tindakan", correct: false },
      { text: "Jelaskan prosedur → langsung mulai tindakan tanpa menunggu respons pasien", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Seorang pasien tirah baring total memerlukan SEMUA tindakan personal hygiene dalam satu shift. Prioritas tindakan yang paling tepat berdasarkan kondisi kenyamanan dan kebutuhan dasar pasien adalah ...",
    answers: [
      { text: "Cuci rambut → mandi → oral hygiene → vulva hygiene → ganti linen", correct: false },
      { text: "Oral hygiene → mandi di tempat tidur → vulva hygiene → ganti linen", correct: true },
      { text: "Ganti linen → vulva hygiene → mandi → oral hygiene → cuci rambut", correct: false },
      { text: "Vulva hygiene → cuci rambut → mandi → ganti linen → oral hygiene", correct: false }
    ],
    difficulty: "susah"
  }
];
