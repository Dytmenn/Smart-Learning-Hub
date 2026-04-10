const materi = {
  judul: "Produktif Teknik Elektronika Industri: Kisi-Kisi Ujian Sekolah 2025/2026",
  deskripsi: `Materi ini mencakup empat elemen utama Teknik Elektronika Industri sesuai Kurikulum Merdeka.

    **SISTEM KONTROL INDUSTRI**:
    PLC (Programmable Logic Controller) adalah perangkat komputer industrial yang mengontrol mesin/proses otomatis.

    **Push Button NO/NC**:
    - NO (Normally Open): kondisi normal kontak terbuka, saat ditekan kontak menutup (aktif).
    - NC (Normally Closed): kondisi normal kontak tertutup, saat ditekan kontak membuka (tidak aktif).

    **Ladder Diagram**: Bahasa pemrograman PLC berbentuk seperti tangga (ladder), terdiri dari rung/anak tangga dengan kontak (input) dan koil (output).

    **Bahasa Pemrograman PLC**: Ladder Diagram (LD), Instruction List (IL), Function Block Diagram (FBD), Structured Text (ST), Sequential Function Chart (SFC).

    **Alamat I/O PLC**: Input (X/I), Output (Y/Q). Simbol NO di ladder = kontak terbuka (--| |--), simbol NC = kontak tertutup (--|/|--)

    **Kontaktor Magnetik**: Saklar elektromagnetik yang mengontrol beban daya tinggi. Memiliki kontak utama (main contact) dan kontak bantu (auxiliary contact) NO/NC.

    **Instruksi SET/RESET PLC**: SET mengaktifkan output dan mempertahankannya meskipun input dilepas. RESET mematikan output yang di-SET.

    **PENERAPAN RANGKAIAN ELEKTRONIKA**:
    **Op-Amp (Operational Amplifier)**: Penguat tegangan dengan dua input (inverting/non-inverting). Gain/penguatan: Av = -Rf/Rin (inverting) atau Av = 1 + Rf/Rin (non-inverting).

    **Jenis Op-Amp**: Inverting amplifier, non-inverting amplifier, voltage follower/buffer (gain = 1), summing amplifier, differentiator, integrator.

    **Buffer/Voltage Follower**: Op-Amp dengan gain = 1, digunakan untuk impedance matching, output sama dengan input tetapi arus output lebih besar.

    **Penyearah (Rectifier)**: Dioda digunakan untuk mengubah AC ke DC. Half-wave (setengah gelombang) dan full-wave (gelombang penuh).

    **IC Regulator**: 78xx untuk tegangan positif (7805=+5V, 7812=+12V), 79xx untuk tegangan negatif. LM317 untuk tegangan variabel.

    **Power Supply (PSU)**: Rangkaian terdiri dari transformator → penyearah → filter (kapasitor) → regulator.

    **PEMROGRAMAN SISTEM EMBEDDED**:
    **Firmware**: Program permanen yang tersimpan di ROM/Flash memory perangkat embedded, mengontrol hardware secara langsung.

    **Arduino**: Platform embedded berbasis mikrokontroler ATmega. Fungsi pinMode() mengatur pin sebagai INPUT atau OUTPUT.

    **Komunikasi Serial**: Pengiriman data bit per bit secara berurutan. Baudrate = kecepatan transfer data (bits per second). Standar umum: 9600, 115200 bps.

    **ESP32**: Mikrokontroler dengan WiFi dan Bluetooth terintegrasi. Tegangan operasi 3.3V. Kode koneksi WiFi menggunakan WiFi.begin(ssid, password).

    **Timer ESP32**: Digunakan untuk mengatur waktu eksekusi tanpa blocking. Terdiri dari prescaler dan counter.

    **DESAIN & PRODUKSI PCB**:
    **PCB (Printed Circuit Board)**: Papan sirkuit tercetak, media penghubung antar komponen elektronika.

    **Proses Pembuatan PCB Manual**: Desain layout → Transfer ke PCB → Etching (pelarutan tembaga) → Pengeboran → Pemasangan komponen → Penyolderan.

    **Kode Warna Resistor**: Hitam=0, Coklat=1, Merah=2, Oranye=3, Kuning=4, Hijau=5, Biru=6, Ungu=7, Abu-abu=8, Putih=9. Multiplier = 10^n, toleransi: Emas=±5%, Perak=±10%.

    **LDR (Light Dependent Resistor)**: Hambatan turun saat cahaya terang, hambatan naik saat gelap. Digunakan pada lampu otomatis.

    **Standar Solder yang Baik**: Bentuk kerucut mengkilap, tidak berbentuk bola (cold joint), tidak retak, mengalir merata pada pad dan kaki komponen.
  `,
};

const soal = [
  {
    question: "Push button dengan tipe NO (Normally Open) memiliki prinsip kerja...",
    answers: [
      { text: "Kontak dalam kondisi tertutup saat tidak ditekan, terbuka saat ditekan", correct: false },
      { text: "Kontak dalam kondisi terbuka saat tidak ditekan, menutup saat ditekan", correct: true },
      { text: "Kontak selalu tertutup dan tidak dapat diubah", correct: false },
      { text: "Kontak selalu terbuka dan tidak dapat diubah", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Perhatikan ladder diagram berikut:\n\n[ X0 ]--[ X1 ]--( Y0 )\n\nJika X0 = ON dan X1 = ON, maka kondisi output Y0 adalah...",
    answers: [
      { text: "Y0 = OFF karena dua kontak seri harus OFF", correct: false },
      { text: "Y0 = ON karena kedua kontak seri terpenuhi", correct: true },
      { text: "Y0 = ON hanya jika salah satu kontak aktif", correct: false },
      { text: "Y0 tidak dapat ditentukan dari ladder tersebut", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Bahasa pemrograman PLC yang paling umum digunakan dan berbentuk seperti diagram tangga adalah...",
    answers: [
      { text: "Structured Text (ST)", correct: false },
      { text: "Function Block Diagram (FBD)", correct: false },
      { text: "Ladder Diagram (LD)", correct: true },
      { text: "Sequential Function Chart (SFC)", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Perangkat yang berfungsi sebagai INPUT pada sistem PLC adalah...",
    answers: [
      { text: "Lampu indikator", correct: false },
      { text: "Motor listrik", correct: false },
      { text: "Sensor proximity", correct: true },
      { text: "Kontaktor magnetik", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Sebuah rangkaian memiliki dua tombol: S1 (NO) dan S2 (NC) terhubung paralel ke output lampu. Kondisi lampu menyala terjadi jika...",
    answers: [
      { text: "S1 ditekan DAN S2 tidak ditekan", correct: false },
      { text: "S1 ditekan ATAU S2 tidak ditekan (salah satu terpenuhi)", correct: true },
      { text: "S1 tidak ditekan DAN S2 ditekan", correct: false },
      { text: "Kedua tombol harus ditekan bersamaan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pada ladder diagram PLC, simbol --| |-- mewakili...",
    answers: [
      { text: "Kontak NC (Normally Closed)", correct: false },
      { text: "Koil output", correct: false },
      { text: "Kontak NO (Normally Open)", correct: true },
      { text: "Timer coil", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Kontaktor magnetik memiliki kontak utama (main contact) dan kontak bantu (auxiliary contact). Fungsi kontak bantu NO pada rangkaian kontrol adalah...",
    answers: [
      { text: "Untuk mengalirkan arus beban utama ke motor", correct: false },
      { text: "Untuk self-holding (mengunci) rangkaian agar kontaktor tetap aktif", correct: true },
      { text: "Untuk memutus arus saat terjadi hubung singkat", correct: false },
      { text: "Untuk mengukur tegangan pada beban", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Instruksi SET pada pemrograman PLC berfungsi untuk...",
    answers: [
      { text: "Mematikan output secara permanen", correct: false },
      { text: "Mengaktifkan output dan mempertahankan kondisi ON meskipun input dilepas", correct: true },
      { text: "Mereset semua alamat output ke kondisi awal", correct: false },
      { text: "Mengatur waktu tunda (delay) pada output", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "PCB adalah singkatan dari...",
    answers: [
      { text: "Printed Circuit Block", correct: false },
      { text: "Process Control Board", correct: false },
      { text: "Printed Circuit Board", correct: true },
      { text: "Programmed Control Bus", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dalam perencanaan produksi elektronika, tahap yang dilakukan PERTAMA sebelum memulai proses produksi adalah...",
    answers: [
      { text: "Pengemasan produk jadi", correct: false },
      { text: "Pengujian kualitas akhir", correct: false },
      { text: "Identifikasi kebutuhan, menentukan spesifikasi, dan merancang desain produk", correct: true },
      { text: "Pemasaran dan distribusi produk", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Urutan proses produksi PCB yang benar adalah...",
    answers: [
      { text: "Penyolderan → Desain → Etching → Pengeboran", correct: false },
      { text: "Desain layout → Transfer ke PCB → Etching → Pengeboran → Penyolderan", correct: true },
      { text: "Etching → Desain → Pengeboran → Transfer → Penyolderan", correct: false },
      { text: "Pengeboran → Desain → Transfer → Etching → Penyolderan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam proses pengemasan produk elektronika, langkah yang PALING AWAL dilakukan adalah...",
    answers: [
      { text: "Memberi label harga pada produk", correct: false },
      { text: "Memastikan produk telah lulus uji fungsi sebelum dikemas", correct: true },
      { text: "Mendisplay produk di toko", correct: false },
      { text: "Membuat brosur pemasaran", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Sebuah produk elektronika diproduksi dengan biaya bahan Rp150.000, biaya tenaga kerja Rp50.000, dan biaya overhead Rp25.000. Jika keuntungan yang diinginkan 20%, harga jual produk tersebut adalah...",
    answers: [
      { text: "Rp180.000", correct: false },
      { text: "Rp225.000", correct: false },
      { text: "Rp270.000", correct: true },
      { text: "Rp250.000", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Strategi pemasaran produk elektronika yang menekankan pada keunggulan spesifikasi teknis untuk menarik pelanggan profesional disebut...",
    answers: [
      { text: "Penetration pricing", correct: false },
      { text: "Product differentiation", correct: true },
      { text: "Mass marketing", correct: false },
      { text: "Bundle pricing", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Untuk memasarkan produk modul sensor kepada pelanggan industri, strategi pemasaran yang paling efektif adalah...",
    answers: [
      { text: "Menjual di pasar tradisional dengan harga murah", correct: false },
      { text: "Membuat konten hiburan di media sosial", correct: false },
      { text: "Mengikuti pameran industri dan mendemonstrasikan fungsi produk secara langsung", correct: true },
      { text: "Membagikan produk gratis kepada semua orang", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dalam produksi massal modul elektronika, faktor utama yang harus dioptimalkan untuk meningkatkan efisiensi adalah...",
    answers: [
      { text: "Menggunakan komponen paling mahal agar kualitas terjamin", correct: false },
      { text: "Standarisasi proses, penggunaan jig/fixture, dan otomatisasi langkah repetitif", correct: true },
      { text: "Menambah jumlah karyawan sebanyak mungkin", correct: false },
      { text: "Memperbesar ukuran PCB agar mudah dipasang", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Alat ukur yang paling tepat digunakan untuk mengamati bentuk gelombang sinyal AC secara visual adalah...",
    answers: [
      { text: "Multimeter digital", correct: false },
      { text: "Osiloskop", correct: true },
      { text: "LCR meter", correct: false },
      { text: "Frekuensi counter", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Sebuah op-amp inverting amplifier memiliki Rin = 10 kΩ dan Rf = 100 kΩ. Jika tegangan input Vin = 0,5 V, maka tegangan output Vout adalah...",
    answers: [
      { text: "+5 V", correct: false },
      { text: "-5 V", correct: true },
      { text: "+50 V", correct: false },
      { text: "-0,05 V", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Op-amp yang memiliki input pada terminal non-inverting (+) dan menghasilkan output yang sefasa dengan input disebut...",
    answers: [
      { text: "Inverting amplifier", correct: false },
      { text: "Differentiator", correct: false },
      { text: "Non-inverting amplifier", correct: true },
      { text: "Integrator", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Komponen yang berfungsi untuk mengubah tegangan AC menjadi DC satu arah dalam rangkaian power supply adalah...",
    answers: [
      { text: "Kapasitor elektrolit", correct: false },
      { text: "Transistor NPN", correct: false },
      { text: "Dioda penyearah", correct: true },
      { text: "Resistor", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "IC regulator 7805 digunakan dalam rangkaian power supply untuk...",
    answers: [
      { text: "Menghasilkan tegangan output -5 Volt", correct: false },
      { text: "Menghasilkan tegangan output +5 Volt yang stabil", correct: true },
      { text: "Menghasilkan tegangan output +12 Volt yang stabil", correct: false },
      { text: "Memperkuat arus output power supply", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Jenis power supply yang menggunakan teknik switching frekuensi tinggi untuk mengkonversi tegangan sehingga lebih ringan dan efisien disebut...",
    answers: [
      { text: "Linear power supply", correct: false },
      { text: "Unregulated power supply", correct: false },
      { text: "SMPS (Switching Mode Power Supply)", correct: true },
      { text: "Battery power supply", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah power supply menggunakan dua dioda dan transformator dengan center tap. Jenis rangkaian penyearah yang digunakan adalah...",
    answers: [
      { text: "Half-wave rectifier (penyearah setengah gelombang)", correct: false },
      { text: "Full-wave center tap rectifier (penyearah gelombang penuh center tap)", correct: true },
      { text: "Bridge rectifier (penyearah jembatan)", correct: false },
      { text: "Voltage doubler rectifier", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Op-amp yang dikonfigurasi sebagai voltage follower (buffer) memiliki karakteristik...",
    answers: [
      { text: "Gain = 10 dan output berbeda fasa 180° dari input", correct: false },
      { text: "Gain = 0 dan output nol", correct: false },
      { text: "Gain = 1, impedansi input sangat tinggi, impedansi output sangat rendah", correct: true },
      { text: "Gain = -1 dan output terbalik polaritasnya", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Firmware pada sistem embedded adalah...",
    answers: [
      { text: "Perangkat keras tambahan yang dipasang pada mikrokontroler", correct: false },
      { text: "Program permanen yang tersimpan di memori ROM/Flash dan mengontrol hardware secara langsung", correct: true },
      { text: "Sistem operasi berbasis Linux yang diinstal di mikrokontroler", correct: false },
      { text: "Kabel penghubung antara mikrokontroler dan komputer", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Yang termasuk contoh perangkat embedded system adalah...",
    answers: [
      { text: "Monitor komputer desktop", correct: false },
      { text: "Hard disk eksternal", correct: false },
      { text: "Mesin cuci otomatis dengan kontroler digital", correct: true },
      { text: "Keyboard USB", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Proyek Arduino yang paling sesuai untuk memantau suhu ruang server dan mengirim notifikasi jika suhu melebihi batas adalah...",
    answers: [
      { text: "Arduino + sensor LDR + LED", correct: false },
      { text: "Arduino + sensor DHT22 + modul GSM/WiFi", correct: true },
      { text: "Arduino + motor servo + tombol push button", correct: false },
      { text: "Arduino + sensor ultrasonik + buzzer saja", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Baudrate 9600 pada komunikasi serial berarti...",
    answers: [
      { text: "Data dikirim sebesar 9600 byte per detik", correct: false },
      { text: "Data dikirim sebesar 9600 bit per detik", correct: true },
      { text: "Frekuensi clock mikrokontroler adalah 9600 Hz", correct: false },
      { text: "Jarak maksimal komunikasi serial adalah 9600 cm", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Perintah yang tepat untuk menghubungkan ESP32 ke jaringan WiFi dengan SSID \"Lab_TEI\" dan password \"smkn3mtm\" adalah...",
    answers: [
      { text: "WiFi.connect(\"Lab_TEI\", \"smkn3mtm\");", correct: false },
      { text: "WiFi.begin(\"Lab_TEI\", \"smkn3mtm\");", correct: true },
      { text: "WiFi.start(\"Lab_TEI\", \"smkn3mtm\");", correct: false },
      { text: "WiFi.init(\"Lab_TEI\", \"smkn3mtm\");", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "ESP32 dapat dioperasikan menggunakan beberapa sumber tegangan. Tegangan operasi langsung pada pin 3V3 ESP32 adalah...",
    answers: [
      { text: "5 Volt dari pin VIN", correct: false },
      { text: "3,3 Volt langsung ke pin 3V3", correct: true },
      { text: "12 Volt melalui regulator eksternal wajib", correct: false },
      { text: "1,8 Volt dari baterai koin", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Fungsi perintah pinMode(13, OUTPUT) pada Arduino/ESP32 adalah...",
    answers: [
      { text: "Membaca nilai analog dari pin 13", correct: false },
      { text: "Mengatur pin 13 sebagai jalur output digital", correct: true },
      { text: "Mengatur frekuensi PWM pada pin 13", correct: false },
      { text: "Menghubungkan pin 13 ke komunikasi serial", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pada sistem timer ESP32, bagian yang berfungsi membagi frekuensi clock utama agar timer berjalan lebih lambat disebut...",
    answers: [
      { text: "Counter register", correct: false },
      { text: "Interrupt handler", correct: false },
      { text: "Prescaler", correct: true },
      { text: "Comparator", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Bahasa yang digunakan untuk mengatur tampilan visual (warna, ukuran, tata letak) pada halaman web server ESP32 adalah...",
    answers: [
      { text: "HTML", correct: false },
      { text: "JavaScript", correct: false },
      { text: "CSS (Cascading Style Sheets)", correct: true },
      { text: "Python", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Seorang teknisi merancang layout PCB untuk rangkaian frekuensi tinggi. Pertimbangan desain yang PALING TEPAT adalah...",
    answers: [
      { text: "Memperpanjang jalur sinyal agar mudah dilacak saat troubleshooting", correct: false },
      { text: "Memperpendek jalur sinyal frekuensi tinggi dan menambahkan ground plane untuk mengurangi interferensi", correct: true },
      { text: "Menggunakan jalur yang berkelok-kelok agar hemat ruang PCB", correct: false },
      { text: "Meletakkan semua komponen di satu sisi tanpa mempertimbangkan panjang jalur", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Diberikan langkah-langkah berikut:\n1. Pengeboran lubang komponen\n2. Transfer desain ke PCB (sablon/tinta)\n3. Etching dengan larutan FeCl3\n4. Desain layout dengan software\n5. Penyolderan komponen\n\nUrutan tahapan pembuatan PCB manual yang BENAR adalah...",
    answers: [
      { text: "4 → 2 → 1 → 3 → 5", correct: false },
      { text: "4 → 2 → 3 → 1 → 5", correct: true },
      { text: "2 → 4 → 3 → 1 → 5", correct: false },
      { text: "4 → 3 → 2 → 1 → 5", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Kombinasi kondisi yang menghasilkan hasil solder terbaik adalah...",
    answers: [
      { text: "Solder dingin + permukaan kotor + waktu lama", correct: false },
      { text: "Suhu solder tepat (350-400°C) + permukaan bersih + waktu sentuh singkat (2-3 detik)", correct: true },
      { text: "Solder terlalu panas + permukaan kotor + waktu cepat", correct: false },
      { text: "Suhu rendah + permukaan bersih + waktu sangat lama", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Dalam laporan teknis proyek elektronika, istilah PCB digunakan dalam konteks kalimat: \"Semua komponen dipasang pada _____ yang telah dicetak sesuai desain skematik.\" Kepanjangan yang tepat adalah...",
    answers: [
      { text: "Printed Control Board", correct: false },
      { text: "Printed Circuit Board", correct: true },
      { text: "Process Circuit Block", correct: false },
      { text: "Programmed Circuit Board", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Seorang desainer memiliki empat opsi gambar jalur PCB. Jalur PCB yang sesuai dengan kaidah desain yang baik adalah...",
    answers: [
      { text: "Jalur yang saling bersilangan tanpa via dan berjarak sangat dekat satu sama lain", correct: false },
      { text: "Jalur yang lebar untuk sinyal frekuensi rendah, sempit untuk frekuensi tinggi, dan tidak saling bersilangan", correct: true },
      { text: "Jalur yang dibuat setipis mungkin untuk semua jenis sinyal", correct: false },
      { text: "Jalur yang dibuat melingkar-lingkar agar menghemat tempat di PCB", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Sebuah resistor memiliki nilai 4.700 Ω dengan toleransi ±5%. Urutan kode warna gelang resistor yang tepat adalah...",
    answers: [
      { text: "Kuning - Ungu - Merah - Emas", correct: true },
      { text: "Kuning - Ungu - Oranye - Emas", correct: false },
      { text: "Hijau - Ungu - Merah - Emas", correct: false },
      { text: "Kuning - Abu-abu - Merah - Emas", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah sistem lampu taman otomatis menggunakan LDR. Saat siang hari (cahaya terang), kondisi LDR dan lampu adalah...",
    answers: [
      { text: "Hambatan LDR tinggi → tegangan pada LDR besar → lampu menyala", correct: false },
      { text: "Hambatan LDR rendah → tegangan pada LDR kecil → lampu mati", correct: true },
      { text: "Hambatan LDR tinggi → arus besar → lampu menyala", correct: false },
      { text: "Hambatan LDR rendah → arus kecil → lampu mati", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Perhatikan ladder diagram timer PLC berikut:\n\n[ X0 ]--[TON T0 K50]  →  [T0]--( Y0 )\n\nJika X0 ditekan, output Y0 akan aktif setelah...",
    answers: [
      { text: "Langsung aktif saat X0 ditekan", correct: false },
      { text: "5 detik setelah X0 ditekan (K50 = 50 × 0,1 detik)", correct: true },
      { text: "50 detik setelah X0 ditekan", correct: false },
      { text: "0,5 detik setelah X0 ditekan", correct: false }
    ],
    difficulty: "susah"
  }
];
