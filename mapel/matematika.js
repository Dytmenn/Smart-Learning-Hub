const materi = {
  judul: "Matematika SMK Teknik: Kisi-Kisi Ujian Sekolah 2025/2026",
  deskripsi: `Materi ini mencakup empat domain utama matematika untuk SMK Teknik sesuai Kurikulum Merdeka.

    **BILANGAN**:
    Bilangan eksponen (berpangkat) adalah bilangan yang dikalikan dengan dirinya sendiri sebanyak pangkatnya. Contoh: 2³ = 2 × 2 × 2 = 8.

    **Operasi bilangan berpangkat**:
    - aᵐ × aⁿ = aᵐ⁺ⁿ
    - aᵐ ÷ aⁿ = aᵐ⁻ⁿ
    - (aᵐ)ⁿ = aᵐˣⁿ
    - a⁰ = 1

    **Bilangan real** mencakup bilangan bulat, pecahan, desimal, dan akar. Digunakan dalam perhitungan energi listrik (W = P × t), biaya, suhu, dan perbandingan konsumsi bahan bakar.

    **ALJABAR & FUNGSI**:
    Fungsi linear berbentuk f(x) = ax + b, di mana a adalah gradien dan b adalah konstanta. Digunakan untuk memodelkan biaya bengkel, output produksi, dan hubungan tegangan-arus (V = I × R / Hukum Ohm).

    **Persamaan linear** digunakan untuk menentukan nilai variabel, contohnya menentukan besar arus listrik dari persamaan tegangan.

    **SPLDV (Sistem Persamaan Linear Dua Variabel)** diselesaikan dengan metode substitusi atau eliminasi, berguna dalam konteks penghitungan biaya jasa bengkel ganda.

    **Titik impas (break-even)** adalah titik di mana total biaya = total pendapatan, dicari dengan menyamakan fungsi biaya dan fungsi pendapatan.

    **GEOMETRI**:
    - Luas persegi panjang = p × l
    - Luas lingkaran = π × r²
    - Keliling lingkaran = 2 × π × r
    - Volume tabung = π × r² × t
    - Teorema Pythagoras: c² = a² + b²

    Geometri diterapkan untuk menghitung kebutuhan bahan, kapasitas tangki bahan bakar, jarak tempuh roda kendaraan, dan pengukuran alat.

    **ANALISA DATA DAN PELUANG**:
    **Statistik**: Rata-rata (mean) = jumlah data ÷ banyak data. Digunakan untuk evaluasi performa mesin bengkel.

    **Peluang**: P(A) = n(A) ÷ n(S), di mana n(A) = kejadian yang diinginkan, n(S) = total kemungkinan. Digunakan dalam pemilihan komponen berkualitas.

    **Variasi data** (range, varians, standar deviasi) digunakan untuk menilai kestabilan performa mesin.
  `,
};

const soal = [
  {
    question: "Hasil dari 2⁴ × 2² adalah...",
    answers: [
      { text: "2⁶ = 64", correct: true },
      { text: "2⁸ = 256", correct: false },
      { text: "4⁶ = 4096", correct: false },
      { text: "2³ = 8", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Diketahui f(x) = 3x + 5. Nilai f(4) adalah...",
    answers: [
      { text: "12", correct: false },
      { text: "17", correct: true },
      { text: "20", correct: false },
      { text: "15", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Sebuah pelat baja berbentuk persegi panjang memiliki panjang 120 cm dan lebar 80 cm. Keliling pelat tersebut adalah...",
    answers: [
      { text: "200 cm", correct: false },
      { text: "9.600 cm", correct: false },
      { text: "400 cm", correct: true },
      { text: "480 cm", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Sebuah kantong berisi 3 bola merah dan 7 bola putih. Peluang terambilnya bola merah dalam satu kali pengambilan adalah...",
    answers: [
      { text: "7/10", correct: false },
      { text: "1/3", correct: false },
      { text: "3/10", correct: true },
      { text: "3/7", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Sebuah lampu memiliki daya 500 watt (5 × 10² W). Jika dinyalakan selama 4 jam, energi listrik yang digunakan adalah...",
    answers: [
      { text: "2 × 10³ Wh", correct: true },
      { text: "5 × 10⁶ Wh", correct: false },
      { text: "2 × 10² Wh", correct: false },
      { text: "9 × 10² Wh", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pemakaian listrik sebuah bengkel dalam sebulan adalah 450 kWh. Jika tarif listrik Rp1.500,00 per kWh, biaya listrik yang harus dibayar adalah...",
    answers: [
      { text: "Rp450.000,00", correct: false },
      { text: "Rp550.000,00", correct: false },
      { text: "Rp675.000,00", correct: true },
      { text: "Rp750.000,00", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah motor membutuhkan 1,5 liter bensin untuk menempuh 45 km. Berapa liter bensin yang dibutuhkan untuk menempuh 120 km?",
    answers: [
      { text: "3 liter", correct: false },
      { text: "4 liter", correct: true },
      { text: "5 liter", correct: false },
      { text: "4,5 liter", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Suhu mesin saat dinyalakan adalah 30°C. Setelah beroperasi, suhu naik 85°C, lalu turun 20°C setelah didinginkan. Suhu mesin akhir adalah...",
    answers: [
      { text: "95°C", correct: true },
      { text: "115°C", correct: false },
      { text: "75°C", correct: false },
      { text: "85°C", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Biaya servis di bengkel mengikuti fungsi B(x) = 50.000x + 30.000, di mana x adalah jumlah jam kerja. Biaya servis untuk 3 jam adalah...",
    answers: [
      { text: "Rp150.000,00", correct: false },
      { text: "Rp180.000,00", correct: true },
      { text: "Rp200.000,00", correct: false },
      { text: "Rp210.000,00", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tegangan listrik V = 12 volt dan hambatan R = 4 ohm. Berdasarkan Hukum Ohm V = I × R, besar arus listrik I adalah...",
    answers: [
      { text: "2 A", correct: false },
      { text: "3 A", correct: true },
      { text: "48 A", correct: false },
      { text: "8 A", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah generator menghasilkan energi listrik mengikuti fungsi E(t) = 200t + 50 (dalam watt), di mana t adalah waktu dalam jam. Output produksi energi setelah 5 jam adalah...",
    answers: [
      { text: "1.000 watt", correct: false },
      { text: "1.050 watt", correct: true },
      { text: "250 watt", correct: false },
      { text: "1.100 watt", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Bengkel A mengenakan biaya pasang ban Rp20.000 dan ganti oli Rp50.000. Bengkel B mengenakan biaya pasang ban Rp25.000 dan ganti oli Rp40.000. Jika seorang pelanggan butuh 2 pasang ban dan 1 ganti oli, bengkel mana yang lebih murah?",
    answers: [
      { text: "Bengkel A: Rp90.000 lebih murah", correct: true },
      { text: "Bengkel B: Rp90.000 lebih murah", correct: false },
      { text: "Bengkel A: Rp85.000, Bengkel B: Rp90.000", correct: false },
      { text: "Kedua bengkel sama harganya", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah plat besi berbentuk trapesium dengan alas bawah 60 cm, alas atas 40 cm, dan tinggi 30 cm. Luas plat besi tersebut adalah...",
    answers: [
      { text: "1.500 cm²", correct: true },
      { text: "1.800 cm²", correct: false },
      { text: "1.200 cm²", correct: false },
      { text: "3.000 cm²", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah tangki bahan bakar berbentuk tabung dengan jari-jari 50 cm dan tinggi 120 cm. Volume tangki tersebut adalah... (π = 3,14)",
    answers: [
      { text: "942.000 cm³", correct: true },
      { text: "471.000 cm³", correct: false },
      { text: "1.884.000 cm³", correct: false },
      { text: "376.800 cm³", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah roda kendaraan memiliki diameter 70 cm. Jarak yang ditempuh roda dalam 100 kali putaran adalah... (π = 22/7)",
    answers: [
      { text: "2.200 cm", correct: false },
      { text: "22.000 cm", correct: true },
      { text: "11.000 cm", correct: false },
      { text: "44.000 cm", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah tangga bersandar pada tembok. Kaki tangga berjarak 6 m dari tembok dan tinggi tembok yang dapat dicapai adalah 8 m. Panjang tangga tersebut adalah...",
    answers: [
      { text: "14 m", correct: false },
      { text: "10 m", correct: true },
      { text: "12 m", correct: false },
      { text: "√28 m", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Data hasil servis 5 mesin di bengkel (dalam jam): 3, 5, 4, 6, 2. Rata-rata waktu servis per mesin adalah...",
    answers: [
      { text: "3 jam", correct: false },
      { text: "4 jam", correct: true },
      { text: "5 jam", correct: false },
      { text: "20 jam", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah kotak berisi 4 baut baik dan 6 baut cacat. Peluang terambilnya baut baik secara acak adalah...",
    answers: [
      { text: "4/6", correct: false },
      { text: "6/10", correct: false },
      { text: "4/10", correct: true },
      { text: "1/4", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Tabel frekuensi kunjungan bengkel dalam seminggu: Senin 12, Selasa 8, Rabu 15, Kamis 10, Jumat 5. Hari dengan kunjungan di atas rata-rata adalah...",
    answers: [
      { text: "Senin dan Rabu", correct: true },
      { text: "Senin, Rabu, dan Kamis", correct: false },
      { text: "Rabu saja", correct: false },
      { text: "Senin, Selasa, dan Rabu", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah panel listrik memiliki 3 sakelar. Masing-masing sakelar bisa ON atau OFF. Peluang tepat 2 sakelar dalam keadaan ON adalah...",
    answers: [
      { text: "1/4", correct: false },
      { text: "3/8", correct: true },
      { text: "1/2", correct: false },
      { text: "2/3", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Mesin A menggunakan daya 800 W selama 3 jam. Mesin B menggunakan daya 600 W selama 4 jam. Perbandingan energi yang digunakan mesin A terhadap mesin B adalah...",
    answers: [
      { text: "1 : 1", correct: true },
      { text: "2 : 3", correct: false },
      { text: "4 : 3", correct: false },
      { text: "3 : 4", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Alat X berdaya 1.000 W digunakan 2 jam/hari. Alat Y berdaya 500 W digunakan 5 jam/hari. Tarif listrik Rp1.500/kWh. Alat manakah yang lebih hemat biaya per hari?",
    answers: [
      { text: "Alat X lebih hemat karena biayanya Rp3.000", correct: true },
      { text: "Alat Y lebih hemat karena berdaya lebih kecil", correct: false },
      { text: "Kedua alat sama biayanya", correct: false },
      { text: "Alat X lebih hemat karena digunakan lebih singkat", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Biaya produksi sebuah bengkel mengikuti C(x) = 100x + 500.000 dan pendapatan R(x) = 150x, di mana x adalah jumlah unit servis. Pada jumlah berapa unit servis bengkel mencapai titik impas (break-even)?",
    answers: [
      { text: "5.000 unit", correct: false },
      { text: "10.000 unit", correct: true },
      { text: "3.333 unit", correct: false },
      { text: "2.500 unit", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Hambatan total rangkaian R(I) = 5I + 12, di mana I adalah arus dalam ampere. Jika arus berubah dari 2 A menjadi 4 A, perubahan hambatan total adalah...",
    answers: [
      { text: "10 ohm", correct: true },
      { text: "5 ohm", correct: false },
      { text: "22 ohm", correct: false },
      { text: "32 ohm", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Data produksi energi (kWh): jam ke-1=50, ke-2=70, ke-3=90, ke-4=110. Model fungsi yang paling sesuai adalah...",
    answers: [
      { text: "f(t) = 20t + 30", correct: true },
      { text: "f(t) = 10t + 40", correct: false },
      { text: "f(t) = 50t", correct: false },
      { text: "f(t) = t² + 49", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Sebuah bengkel butuh plat baja untuk menutup dua lubang: lingkaran diameter 40 cm dan persegi sisi 30 cm. Total luas bahan yang dibutuhkan adalah... (π = 3,14)",
    answers: [
      { text: "1.256 cm²", correct: false },
      { text: "2.156 cm²", correct: true },
      { text: "900 cm²", correct: false },
      { text: "1.956 cm²", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Tersedia dua desain tangki: Tangki A (tabung r=30cm, t=100cm) dan Tangki B (tabung r=50cm, t=35cm). Tangki mana yang lebih efisien jika kebutuhan volume minimal 280.000 cm³? (π ≈ 3,14)",
    answers: [
      { text: "Tangki A: Volume ±282.600 cm³, lebih efisien", correct: true },
      { text: "Tangki B: Volume ±274.750 cm³, lebih efisien", correct: false },
      { text: "Kedua tangki memiliki volume yang sama", correct: false },
      { text: "Tangki B karena jari-jarinya lebih besar", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Data waktu penyelesaian servis (menit): 30, 45, 35, 50, 40. Jika ditambah satu data baru 60 menit, bagaimana perubahan rata-ratanya?",
    answers: [
      { text: "Rata-rata naik dari 40 menjadi 43,3 menit", correct: true },
      { text: "Rata-rata turun dari 45 menjadi 40 menit", correct: false },
      { text: "Rata-rata tetap 40 menit", correct: false },
      { text: "Rata-rata naik dari 40 menjadi 50 menit", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Dari 100 komponen, 10 cacat. Jika diambil 2 komponen secara acak tanpa pengembalian, peluang keduanya cacat adalah...",
    answers: [
      { text: "1/110", correct: true },
      { text: "1/100", correct: false },
      { text: "9/100", correct: false },
      { text: "1/10", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Bengkel A memiliki peluang kerusakan 20% dengan biaya perbaikan Rp500.000. Bengkel B memiliki peluang kerusakan 10% dengan biaya perbaikan Rp900.000. Strategi optimal berdasarkan ekspektasi biaya kerusakan adalah...",
    answers: [
      { text: "Pilih Bengkel A karena ekspektasi biaya Rp100.000 lebih rendah", correct: false },
      { text: "Pilih Bengkel B karena ekspektasi biaya Rp90.000 lebih rendah", correct: true },
      { text: "Kedua bengkel memiliki ekspektasi biaya yang sama", correct: false },
      { text: "Pilih Bengkel A karena peluang kerusakannya lebih pasti", correct: false }
    ],
    difficulty: "susah"
  }
];
