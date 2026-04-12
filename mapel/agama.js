const materi = {
  judul: "Pendidikan Agama Islam Kelas XI: Pernikahan dalam Islam",
  deskripsi: `Materi ini membahas konsep pernikahan (nikah) dalam Islam secara lengkap.

    **PENGERTIAN NIKAH**:
    Nikah secara bahasa berarti berkumpul atau bersatu. Secara istilah, nikah adalah akad yang menghalalkan pergaulan antara laki-laki dan perempuan yang bukan mahram serta menimbulkan hak dan kewajiban di antara keduanya.

    **HUKUM NIKAH**:
    - Wajib: bagi yang sudah mampu dan khawatir terjerumus zina
    - Sunnah: bagi yang mampu dan tidak khawatir terjerumus zina
    - Mubah: bagi yang mampu dan tidak ada dorongan apapun
    - Makruh: bagi yang belum mampu memberi nafkah
    - Haram: bagi yang berniat menyakiti pasangannya

    **RUKUN NIKAH**:
    1. Calon suami (laki-laki muslim, bukan mahram)
    2. Calon istri (perempuan muslimah, bukan mahram)
    3. Wali nikah (ayah, kakek, paman, atau wali hakim)
    4. Dua orang saksi (laki-laki, muslim, baligh, adil)
    5. Ijab dan Kabul (sighat akad nikah)

    **SYARAT NIKAH**:
    Syarat calon suami: Islam, laki-laki, tidak dipaksa, bukan mahram, tidak sedang ihram.
    Syarat calon istri: Islam, perempuan, tidak bersuami, bukan mahram, tidak sedang iddah.
    Syarat wali: Islam, laki-laki, baligh, berakal, adil, tidak sedang ihram.
    Syarat saksi: Islam, laki-laki, dua orang, baligh, berakal, adil, tidak dalam ihram.

    **MAHRAM**:
    Perempuan yang haram dinikahi karena: hubungan nasab (ibu, anak perempuan, saudara perempuan, bibi), hubungan pernikahan (ibu mertua, anak tiri, menantu, ibu tiri), dan hubungan sesusuan.

    **JENIS-JENIS PERNIKAHAN TERLARANG**:
    - Nikah Mut'ah: pernikahan dengan batas waktu tertentu (haram)
    - Nikah Syighar: nikah tukar tanpa mahar (haram)
    - Nikah Tahlil: menikahi wanita yang ditalak tiga agar bisa kembali ke suami pertama (haram)
    - Nikah dalam keadaan ihram (haram)
    - Poligami tanpa syarat keadilan (haram)

    **MAHAR**:
    Pemberian wajib dari suami kepada istri saat akad nikah. Hukumnya wajib. Jenis: mahar musamma (disebutkan saat akad) dan mahar mitsil (sesuai kebiasaan).

    **WALIMATUL 'URSY**:
    Pesta pernikahan yang hukumnya sunnah muakkad. Minimal dilaksanakan pada hari pertama setelah akad nikah.

    **SURAT AR-RUM AYAT 21**:
    "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih (mawaddah) dan sayang (rahmah). Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."

    Kandungan Ar-Rum ayat 21:
    1. Pernikahan adalah tanda kebesaran Allah SWT
    2. Tujuan pernikahan: ketentraman (sakinah), kasih (mawaddah), dan sayang (rahmah)
    3. Pasangan diciptakan dari jenis yang sama
    4. Pernikahan diperuntukkan bagi orang yang berpikir

    **TUJUAN PERNIKAHAN**:
    1. Mewujudkan keluarga sakinah, mawaddah, warahmah
    2. Meneruskan keturunan yang shalih/shalihah
    3. Menjaga kehormatan dan menghindari zina
    4. Melaksanakan sunnah Rasulullah SAW
    5. Mendapat pahala sebagai ibadah

    **HAK DAN KEWAJIBAN SUAMI ISTRI**:
    Kewajiban suami: memberi nafkah (lahir dan batin), memimpin keluarga, berlaku adil.
    Kewajiban istri: taat kepada suami (selama bukan maksiat), menjaga kehormatan, mengurus rumah tangga.

    **TALAK**:
    Lepasnya ikatan pernikahan dengan ucapan talak dari suami. Jenis: talak raj'i (bisa rujuk) dan talak ba'in (tidak bisa rujuk). Talak tiga menyebabkan haram menikah kembali kecuali setelah menikah dengan orang lain.

    **HIKMAH PERNIKAHAN**:
    Menjaga keturunan, menjaga kehormatan, menentramkan jiwa, mempererat silaturahmi antara dua keluarga, dan mendapat keberkahan dari Allah SWT.
  `,
};

const soal = [
  {
    question: "Pengertian nikah secara istilah dalam Islam adalah ...",
    answers: [
      { text: "Akad yang menghalalkan pergaulan antara laki-laki dan perempuan yang bukan mahram serta menimbulkan hak dan kewajiban", correct: true },
      { text: "Perjanjian antara dua keluarga untuk menyatukan harta kekayaan", correct: false },
      { text: "Upacara adat yang dilakukan secara turun-temurun dalam masyarakat", correct: false },
      { text: "Ikatan sosial antara laki-laki dan perempuan tanpa syarat tertentu", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Secara bahasa, kata 'nikah' berasal dari bahasa Arab yang berarti ...",
    answers: [
      { text: "Berpisah dan bercerai", correct: false },
      { text: "Berkumpul atau bersatu", correct: true },
      { text: "Berjanji dan bersumpah", correct: false },
      { text: "Bersedekah dan berbagi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Hukum menikah bagi seseorang yang sudah mampu secara fisik dan finansial, tetapi jika tidak menikah dikhawatirkan akan terjerumus pada perbuatan zina adalah ...",
    answers: [
      { text: "Sunnah", correct: false },
      { text: "Mubah", correct: false },
      { text: "Wajib", correct: true },
      { text: "Makruh", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Seseorang yang berniat menikahi wanita hanya untuk menyakitinya, maka hukum menikah bagi orang tersebut adalah ...",
    answers: [
      { text: "Makruh", correct: false },
      { text: "Mubah", correct: false },
      { text: "Sunnah", correct: false },
      { text: "Haram", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "Jumlah rukun nikah dalam Islam yang harus dipenuhi agar pernikahan sah adalah ...",
    answers: [
      { text: "3 rukun", correct: false },
      { text: "4 rukun", correct: false },
      { text: "5 rukun", correct: true },
      { text: "6 rukun", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Berikut ini yang BUKAN termasuk rukun nikah adalah ...",
    answers: [
      { text: "Calon suami", correct: false },
      { text: "Wali nikah", correct: false },
      { text: "Dua orang saksi", correct: false },
      { text: "Mahar (mas kawin)", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Ijab dan kabul dalam pernikahan Islam disebut juga ...",
    answers: [
      { text: "Walimatul 'ursy", correct: false },
      { text: "Sighat akad nikah", correct: true },
      { text: "Khitbah", correct: false },
      { text: "Mitsaq ghalidza", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Urutan wali nikah yang paling utama (wali nasab) dalam pernikahan Islam adalah ...",
    answers: [
      { text: "Kakek, ayah, paman, saudara laki-laki", correct: false },
      { text: "Ayah, kakek, saudara laki-laki, paman", correct: true },
      { text: "Paman, kakek, ayah, saudara laki-laki", correct: false },
      { text: "Saudara laki-laki, ayah, kakek, paman", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Wali hakim dalam pernikahan bertindak sebagai wali jika ...",
    answers: [
      { text: "Calon mempelai tidak memiliki mas kawin", correct: false },
      { text: "Tidak ada saksi yang hadir dalam akad", correct: false },
      { text: "Wali nasab tidak ada atau enggan menikahkan (wali adhal)", correct: true },
      { text: "Pernikahan dilakukan di luar negeri", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Syarat menjadi saksi dalam akad nikah antara lain adalah ...",
    answers: [
      { text: "Perempuan dewasa yang beragama Islam", correct: false },
      { text: "Laki-laki muslim, baligh, berakal, dan adil", correct: true },
      { text: "Siapa saja yang hadir dalam pesta pernikahan", correct: false },
      { text: "Orang tua dari kedua mempelai", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perempuan yang haram dinikahi karena hubungan nasab (keturunan) adalah ...",
    answers: [
      { text: "Ibu tiri dan ibu mertua", correct: false },
      { text: "Saudara sepersusuan", correct: false },
      { text: "Ibu kandung, anak perempuan, saudara perempuan, dan bibi", correct: true },
      { text: "Mantan istri yang telah dicerai", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Ibu mertua haram dinikahi karena sebab ...",
    answers: [
      { text: "Hubungan nasab (keturunan)", correct: false },
      { text: "Hubungan pernikahan (mushaharah)", correct: true },
      { text: "Hubungan sesusuan (radha'ah)", correct: false },
      { text: "Hubungan persaudaraan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Nikah Mut'ah adalah ...",
    answers: [
      { text: "Pernikahan yang dilakukan secara diam-diam tanpa wali", correct: false },
      { text: "Pernikahan dengan batas waktu tertentu yang hukumnya haram", correct: true },
      { text: "Pernikahan yang dilakukan saat seseorang sedang ihram", correct: false },
      { text: "Pernikahan tukar antara dua keluarga tanpa mahar", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Nikah Syighar adalah nikah yang dilarang dalam Islam karena ...",
    answers: [
      { text: "Dilakukan tanpa izin orang tua", correct: false },
      { text: "Dilakukan saat calon mempelai masih remaja", correct: false },
      { text: "Merupakan nikah tukar tanpa mahar yang merugikan wanita", correct: true },
      { text: "Dilakukan tanpa pesta walimah", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Seseorang menikahkan wanita yang telah ditalak tiga dengan laki-laki lain agar wanita tersebut bisa kembali kepada suami pertamanya. Pernikahan seperti ini disebut ...",
    answers: [
      { text: "Nikah Mut'ah", correct: false },
      { text: "Nikah Syighar", correct: false },
      { text: "Nikah Tahlil", correct: true },
      { text: "Nikah Sirri", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Hukum menikah bagi seseorang yang sedang dalam keadaan ihram (haji atau umrah) adalah ...",
    answers: [
      { text: "Sunnah karena mendapat berkah", correct: false },
      { text: "Mubah jika dilakukan dengan wali", correct: false },
      { text: "Makruh namun tetap sah", correct: false },
      { text: "Haram dan pernikahannya tidak sah", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Mahar dalam pernikahan Islam hukumnya adalah ...",
    answers: [
      { text: "Sunnah, boleh diberikan atau tidak", correct: false },
      { text: "Wajib diberikan suami kepada istri", correct: true },
      { text: "Mubah, tergantung kesepakatan keluarga", correct: false },
      { text: "Makruh jika nilainya terlalu besar", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Mahar musamma adalah ...",
    answers: [
      { text: "Mahar yang besarnya disesuaikan dengan kebiasaan perempuan di lingkungannya", correct: false },
      { text: "Mahar yang disebutkan dan disepakati saat akad nikah", correct: true },
      { text: "Mahar yang dibayar setelah akad nikah selesai", correct: false },
      { text: "Mahar berupa doa dan bacaan Al-Qur'an", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Walimatul 'ursy adalah ...",
    answers: [
      { text: "Doa yang dibaca saat akad nikah berlangsung", correct: false },
      { text: "Pesta atau perayaan pernikahan yang hukumnya sunnah muakkad", correct: true },
      { text: "Proses lamaran sebelum pernikahan", correct: false },
      { text: "Pembayaran mahar kepada calon istri", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Hukum menghadiri undangan walimatul 'ursy bagi yang tidak ada uzur adalah ...",
    answers: [
      { text: "Sunnah", correct: false },
      { text: "Mubah", correct: false },
      { text: "Wajib", correct: true },
      { text: "Makruh", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Isi kandungan Surat Ar-Rum ayat 21 berkaitan dengan pernikahan yang PALING UTAMA adalah ...",
    answers: [
      { text: "Perintah untuk segera menikah bagi yang sudah baligh", correct: false },
      { text: "Pernikahan sebagai tanda kebesaran Allah dengan tujuan sakinah, mawaddah, dan rahmah", correct: true },
      { text: "Kewajiban suami untuk memberikan nafkah kepada istri", correct: false },
      { text: "Larangan menikah lebih dari satu kali", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dalam Surat Ar-Rum ayat 21, kata 'mawaddah' memiliki arti ...",
    answers: [
      { text: "Ketentraman", correct: false },
      { text: "Kasih sayang yang dalam", correct: false },
      { text: "Cinta/kasih yang membara", correct: true },
      { text: "Tanggung jawab", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam Surat Ar-Rum ayat 21, kata 'rahmah' memiliki arti ...",
    answers: [
      { text: "Cinta yang membara", correct: false },
      { text: "Kasih sayang yang lembut dan mendalam", correct: true },
      { text: "Ketentraman jiwa", correct: false },
      { text: "Kesetiaan yang teguh", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perhatikan terjemahan berikut:\n\n'Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya...'\n\nAyat tersebut adalah Surat ...",
    answers: [
      { text: "An-Nisa ayat 3", correct: false },
      { text: "Ar-Rum ayat 21", correct: true },
      { text: "Al-Baqarah ayat 187", correct: false },
      { text: "An-Nur ayat 32", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Kata 'sakinah' dalam konteks pernikahan Islam berarti ...",
    answers: [
      { text: "Kekayaan dan kemakmuran rumah tangga", correct: false },
      { text: "Ketentraman dan kedamaian dalam rumah tangga", correct: true },
      { text: "Kesetiaan suami kepada istri", correct: false },
      { text: "Keturunan yang banyak dan shalih", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Surat Ar-Rum ayat 21 mengandung pesan bahwa pernikahan diperuntukkan bagi ...",
    answers: [
      { text: "Orang-orang yang memiliki harta berlimpah", correct: false },
      { text: "Semua orang tanpa pengecualian", correct: false },
      { text: "Orang-orang yang mau berpikir dan merenungkan tanda kebesaran Allah", correct: true },
      { text: "Orang-orang yang sudah berumur matang saja", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Salah satu tujuan utama pernikahan dalam Islam adalah ...",
    answers: [
      { text: "Mendapatkan status sosial yang lebih tinggi di masyarakat", correct: false },
      { text: "Mewujudkan keluarga sakinah, mawaddah, dan warahmah", correct: true },
      { text: "Memperbanyak harta melalui penyatuan kekayaan dua keluarga", correct: false },
      { text: "Memenuhi tuntutan budaya dan tradisi masyarakat setempat", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Menikah merupakan sunnah Rasulullah SAW. Hal ini didasarkan pada hadis Nabi yang artinya ...",
    answers: [
      { text: "'Nikah itu wajib bagi setiap muslim yang mampu'", correct: false },
      { text: "'Barang siapa yang tidak mau menikah, maka bukan golonganku'", correct: true },
      { text: "'Nikah adalah ibadah yang paling besar pahalanya'", correct: false },
      { text: "'Menikahlah sebelum kalian menjadi tua dan lemah'", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Kewajiban utama suami terhadap istri dalam pernikahan Islam adalah ...",
    answers: [
      { text: "Memberikan semua keputusan rumah tangga kepada istri", correct: false },
      { text: "Memberi nafkah lahir dan batin serta memimpin keluarga", correct: true },
      { text: "Membolehkan istri bekerja di luar rumah tanpa batasan", correct: false },
      { text: "Mengikuti semua keinginan istri demi keharmonisan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Kewajiban istri terhadap suami dalam Islam adalah ...",
    answers: [
      { text: "Mencari nafkah untuk membantu perekonomian keluarga", correct: false },
      { text: "Taat kepada suami selama bukan dalam kemaksiatan kepada Allah", correct: true },
      { text: "Menyerahkan seluruh harta pribadinya kepada suami", correct: false },
      { text: "Tidak diperbolehkan keluar rumah dalam kondisi apapun", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Talak raj'i adalah ...",
    answers: [
      { text: "Talak yang tidak dapat dirujuk kembali", correct: false },
      { text: "Talak yang dijatuhkan oleh hakim pengadilan", correct: false },
      { text: "Talak satu atau dua yang masih memungkinkan rujuk dalam masa iddah", correct: true },
      { text: "Talak tiga yang menyebabkan suami istri tidak bisa menikah kembali", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Seseorang menjatuhkan talak tiga kepada istrinya. Konsekuensi hukumnya adalah ...",
    answers: [
      { text: "Keduanya bisa langsung rujuk setelah masa iddah selesai", correct: false },
      { text: "Suami harus membayar denda kepada keluarga istri", correct: false },
      { text: "Keduanya haram menikah kembali sampai si istri menikah dengan laki-laki lain", correct: true },
      { text: "Pernikahan dianggap tidak pernah terjadi", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Masa iddah bagi wanita yang dicerai suaminya dalam keadaan tidak hamil adalah ...",
    answers: [
      { text: "Satu bulan", correct: false },
      { text: "Dua bulan", correct: false },
      { text: "Tiga kali quru' (suci/haid)", correct: true },
      { text: "Empat bulan sepuluh hari", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Hikmah disyariatkannya pernikahan dalam Islam antara lain adalah ...",
    answers: [
      { text: "Mempersulit hubungan antara laki-laki dan perempuan", correct: false },
      { text: "Menjaga keturunan, kehormatan, dan menentramkan jiwa", correct: true },
      { text: "Mengharuskan seseorang tinggal bersama mertua selamanya", correct: false },
      { text: "Melarang pergaulan antara laki-laki dan perempuan secara total", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Khitbah (pinangan) dalam proses pernikahan Islam adalah ...",
    answers: [
      { text: "Akad resmi yang mengikat antara dua mempelai", correct: false },
      { text: "Pesta perayaan setelah akad nikah selesai", correct: false },
      { text: "Permohonan untuk menikahi seorang wanita yang disampaikan kepada walinya", correct: true },
      { text: "Pembayaran mahar kepada calon istri", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Seorang pria melamar wanita yang sudah dilamar oleh pria lain. Hukum melamar wanita yang sudah dipinang orang lain adalah ...",
    answers: [
      { text: "Sunnah karena menunjukkan kesungguhan", correct: false },
      { text: "Mubah selama dilakukan dengan sopan", correct: false },
      { text: "Haram karena dapat menimbulkan permusuhan", correct: true },
      { text: "Makruh jika tidak ada izin dari wali", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Poligami dalam Islam dibolehkan dengan syarat utama ...",
    answers: [
      { text: "Mendapat izin dari pemerintah setempat", correct: false },
      { text: "Mampu berlaku adil terhadap semua istri", correct: true },
      { text: "Memiliki rumah yang berbeda untuk setiap istri", correct: false },
      { text: "Istri pertama tidak dapat memiliki anak", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jumlah maksimal istri yang boleh dimiliki seorang laki-laki dalam Islam berdasarkan Surat An-Nisa ayat 3 adalah ...",
    answers: [
      { text: "2 orang istri", correct: false },
      { text: "3 orang istri", correct: false },
      { text: "4 orang istri", correct: true },
      { text: "5 orang istri", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pernikahan yang dilakukan hanya dicatat secara agama namun tidak didaftarkan ke negara (Kantor Urusan Agama) dikenal dengan istilah ...",
    answers: [
      { text: "Nikah Tahlil", correct: false },
      { text: "Nikah Mut'ah", correct: false },
      { text: "Nikah Sirri", correct: true },
      { text: "Nikah Syighar", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Berikut ini yang merupakan pernikahan yang SAH menurut hukum Islam adalah ...",
    answers: [
      { text: "Nikah tanpa wali dan dua orang saksi", correct: false },
      { text: "Nikah yang memenuhi semua rukun dan syarat yang telah ditentukan syariat", correct: true },
      { text: "Nikah yang dilakukan secara diam-diam tanpa sepengetahuan keluarga", correct: false },
      { text: "Nikah yang dilakukan saat calon suami masih dalam keadaan ihram", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perhatikan pernyataan berikut ini:\n(1) Menjaga keturunan yang halal\n(2) Menghindari perbuatan zina\n(3) Mendapatkan kekayaan dari keluarga pasangan\n(4) Meneladani sunnah Rasulullah SAW\n(5) Mendapat pahala karena pernikahan adalah ibadah\n\nYang termasuk tujuan pernikahan dalam Islam adalah ...",
    answers: [
      { text: "1, 2, 3, dan 4", correct: false },
      { text: "1, 2, 4, dan 5", correct: true },
      { text: "2, 3, 4, dan 5", correct: false },
      { text: "1, 3, 4, dan 5", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Analisis yang tepat mengenai hubungan antara Surat Ar-Rum ayat 21 dengan tujuan pernikahan dalam Islam adalah ...",
    answers: [
      { text: "Ayat tersebut hanya menjelaskan kewajiban menikah tanpa menyebutkan tujuannya", correct: false },
      { text: "Ayat tersebut tidak relevan dengan pernikahan modern saat ini", correct: false },
      { text: "Ayat tersebut menegaskan bahwa pernikahan bertujuan menciptakan ketentraman (sakinah), kasih (mawaddah), dan sayang (rahmah) sebagai wujud tanda kebesaran Allah", correct: true },
      { text: "Ayat tersebut hanya berlaku bagi umat Islam di masa Rasulullah saja", correct: false }
    ],
    difficulty: "susah"
  }
];
