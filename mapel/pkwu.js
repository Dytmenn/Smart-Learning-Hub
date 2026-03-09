const materi = {
  judul: "PKWU Kelas 12: Produk Kreatif dan Kewirausahaan",
  deskripsi: `
  Materi ini membahas konsep dasar kewirausahaan, perencanaan usaha, produksi, pemasaran, hingga analisis usaha.

  **1. Pengertian Kewirausahaan**
  Kewirausahaan adalah kemampuan seseorang dalam menciptakan sesuatu yang baru dan berbeda melalui kreativitas dan inovasi untuk menghasilkan nilai tambah serta peluang usaha.

  **Tujuan kewirausahaan:**
  - Menciptakan lapangan pekerjaan
  - Mengembangkan kreativitas dan inovasi
  - Meningkatkan kesejahteraan masyarakat
  - Menghasilkan produk yang bernilai ekonomi

  **Ciri-ciri wirausaha:**
  - Percaya diri
  - Berani mengambil risiko
  - Kreatif dan inovatif
  - Memiliki jiwa kepemimpinan
  - Berorientasi pada masa depan

  **2. Peluang Usaha**
  Peluang usaha adalah kesempatan yang dapat dimanfaatkan untuk menghasilkan keuntungan.

  **Sumber peluang usaha:**
  - Kebutuhan masyarakat
  - Hobi atau keterampilan
  - Tren pasar
  - Masalah yang membutuhkan solusi

  **Cara menganalisis peluang usaha:**
  - Mengamati kebutuhan pasar
  - Menganalisis persaingan
  - Menentukan target konsumen
  - Menentukan keunggulan produk

  **3. Perencanaan Usaha (Business Plan)**
  Perencanaan usaha adalah dokumen yang berisi rencana bisnis yang akan dijalankan.

  **Isi perencanaan usaha:**
  - Latar belakang usaha
  - Tujuan usaha
  - Analisis pasar
  - Strategi pemasaran
  - Perencanaan produksi
  - Analisis keuangan

  **4. Proses Produksi**
  Produksi adalah kegiatan mengolah bahan baku menjadi barang atau jasa yang memiliki nilai tambah.

  **Tahapan produksi:**
  - Perencanaan produksi
  - Persiapan alat dan bahan
  - Proses pembuatan produk
  - Pengemasan produk
  - Evaluasi hasil produksi

  **5. Pemasaran Produk**
  Pemasaran adalah kegiatan memperkenalkan produk kepada konsumen agar produk tersebut dibeli.

  **Strategi pemasaran (Marketing Mix / 4P):**
  - Product (produk)
  - Price (harga)
  - Place (tempat/distribusi)
  - Promotion (promosi)

  **Media promosi:**
  - Media sosial
  - Marketplace
  - Brosur
  - Iklan digital

  **6. Analisis Biaya Produksi**
  Biaya produksi adalah seluruh biaya yang dikeluarkan untuk menghasilkan produk.

  **Jenis biaya:**
  - Biaya tetap (Fixed Cost)
  - Biaya variabel (Variable Cost)

  **7. Harga Pokok Produksi (HPP)**
  HPP adalah total biaya yang digunakan untuk memproduksi suatu barang.

  Rumus sederhana:
  HPP = Total biaya produksi / jumlah produk

  **8. Break Even Point (BEP)**
  BEP adalah titik di mana usaha tidak mengalami keuntungan maupun kerugian.

  Tujuan menghitung BEP:
  - Mengetahui minimal penjualan
  - Menentukan strategi harga
  - Mengurangi risiko kerugian

  Dengan memahami konsep kewirausahaan, siswa diharapkan mampu merancang dan menjalankan usaha secara mandiri.
  `
};

const soal = [
  {
    question: "Kegiatan menambah nilai guna suatu benda atau menciptakan benda baru sehingga lebih bermanfaat disebut.",
    answers: [
      { text: "Produksi", correct: true },
      { text: "Distribusi", correct: false },
      { text: "Konsumsi", correct: false },
      { text: "Promosi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Produksi massal adalah kegiatan memproduksi barang dengan standar yang sama dalam jumlah.",
    answers: [
      { text: "Sedikit", correct: false },
      { text: "Terbatas", correct: false },
      { text: "Besar", correct: true },
      { text: "Acak", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Berikut yang merupakan ciri produksi massal adalah.",
    answers: [
      { text: "Produk dibuat satuan", correct: false },
      { text: "Produk dibuat dalam jumlah besar", correct: true },
      { text: "Produk selalu berbeda", correct: false },
      { text: "Tanpa standar produksi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Tujuan utama produksi massal adalah.",
    answers: [
      { text: "Mengurangi pasar", correct: false },
      { text: "Menguasai pasar", correct: true },
      { text: "Mengurangi produksi", correct: false },
      { text: "Mengurangi kualitas", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Salah satu kelebihan produksi massal adalah.",
    answers: [
      { text: "Biaya produksi lebih mahal", correct: false },
      { text: "Hemat biaya produksi", correct: true },
      { text: "Produksi lambat", correct: false },
      { text: "Variasi produk sangat banyak", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Perencanaan produksi adalah proses untuk memproduksi barang pada periode tertentu dengan mengelola.",
    answers: [
      { text: "Keuntungan saja", correct: false },
      { text: "Sumber daya produksi", correct: true },
      { text: "Promosi produk", correct: false },
      { text: "Distribusi barang", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Berikut yang termasuk sumber daya dalam perencanaan produksi adalah.",
    answers: [
      { text: "Tenaga kerja", correct: true },
      { text: "Iklan", correct: false },
      { text: "Promosi", correct: false },
      { text: "Diskon", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Tujuan perencanaan produksi adalah.",
    answers: [
      { text: "Memaksimalkan biaya", correct: false },
      { text: "Meminimalkan keuntungan", correct: false },
      { text: "Memaksimalkan keuntungan", correct: true },
      { text: "Mengurangi produksi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Proses pemasangan komponen menjadi satu kesatuan produk disebut.",
    answers: [
      { text: "Produksi", correct: false },
      { text: "Perakitan", correct: true },
      { text: "Distribusi", correct: false },
      { text: "Promosi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Perakitan yang dilakukan menggunakan tenaga manusia dan alat sederhana disebut.",
    answers: [
      { text: "Perakitan otomatis", correct: false },
      { text: "Perakitan manual", correct: true },
      { text: "Perakitan digital", correct: false },
      { text: "Perakitan massal", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Perakitan yang menggunakan sistem otomatis seperti robot disebut.",
    answers: [
      { text: "Perakitan manual", correct: false },
      { text: "Perakitan otomatis", correct: true },
      { text: "Perakitan tradisional", correct: false },
      { text: "Perakitan sederhana", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Tahapan pertama dalam prosedur perakitan adalah.",
    answers: [
      { text: "Persiapan", correct: true },
      { text: "Pelaksanaan", correct: false },
      { text: "Pengujian", correct: false },
      { text: "Distribusi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tahapan terakhir dalam prosedur perakitan adalah.",
    answers: [
      { text: "Persiapan", correct: false },
      { text: "Pelaksanaan", correct: false },
      { text: "Penyelesaian", correct: true },
      { text: "Produksi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pengujian produk bertujuan untuk.",
    answers: [
      { text: "Menurunkan kualitas produk", correct: false },
      { text: "Menjamin kualitas produk", correct: true },
      { text: "Menambah harga produk", correct: false },
      { text: "Mengurangi produksi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pengendalian mutu adalah proses.",
    answers: [
      { text: "Penilaian kualitas produk", correct: true },
      { text: "Penurunan kualitas produk", correct: false },
      { text: "Pengurangan bahan baku", correct: false },
      { text: "Pemasaran produk", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Standar nasional yang digunakan untuk menjamin kualitas produk di Indonesia adalah.",
    answers: [
      { text: "ISO", correct: false },
      { text: "SNI", correct: true },
      { text: "WHO", correct: false },
      { text: "ASEAN", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Lembaga yang bertugas menetapkan standar nasional Indonesia adalah.",
    answers: [
      { text: "BSN", correct: true },
      { text: "BPS", correct: false },
      { text: "KPU", correct: false },
      { text: "OJK", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Produk adalah.",
    answers: [
      { text: "Hasil dari kegiatan produksi", correct: true },
      { text: "Kegiatan distribusi barang", correct: false },
      { text: "Proses promosi barang", correct: false },
      { text: "Proses konsumsi barang", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Produk yang berwujud fisik dan dapat dilihat disebut.",
    answers: [
      { text: "Jasa", correct: false },
      { text: "Barang", correct: true },
      { text: "Layanan", correct: false },
      { text: "Servis", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Produk yang tidak berwujud tetapi dapat dirasakan manfaatnya disebut.",
    answers: [
      { text: "Barang", correct: false },
      { text: "Jasa", correct: true },
      { text: "Produk fisik", correct: false },
      { text: "Bahan baku", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Contoh produk jasa adalah.",
    answers: [
      { text: "Sepatu", correct: false },
      { text: "Laptop", correct: false },
      { text: "Jasa dokter", correct: true },
      { text: "Buku", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Barang yang habis digunakan dalam satu atau beberapa kali pemakaian disebut.",
    answers: [
      { text: "Durable goods", correct: false },
      { text: "Nondurable goods", correct: true },
      { text: "Industrial goods", correct: false },
      { text: "Service goods", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Barang yang dapat digunakan dalam waktu lama disebut.",
    answers: [
      { text: "Barang tahan lama", correct: true },
      { text: "Barang cepat habis", correct: false },
      { text: "Barang sekali pakai", correct: false },
      { text: "Barang sementara", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Nama, simbol, atau tanda yang digunakan untuk membedakan produk disebut.",
    answers: [
      { text: "Kemasan", correct: false },
      { text: "Merek", correct: true },
      { text: "Label", correct: false },
      { text: "Produk", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Kemasan produk berfungsi untuk.",
    answers: [
      { text: "Melindungi produk", correct: true },
      { text: "Mengurangi kualitas produk", correct: false },
      { text: "Menghilangkan identitas produk", correct: false },
      { text: "Mengurangi nilai produk", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Label pada produk berfungsi untuk.",
    answers: [
      { text: "Memberikan informasi produk", correct: true },
      { text: "Mengurangi kualitas produk", correct: false },
      { text: "Menghilangkan identitas produk", correct: false },
      { text: "Menurunkan harga produk", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Produk konsumen adalah produk yang dibeli untuk.",
    answers: [
      { text: "Dijual kembali", correct: false },
      { text: "Digunakan perusahaan", correct: false },
      { text: "Dikonsumsi sendiri", correct: true },
      { text: "Ekspor", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Produk yang dibeli untuk proses produksi lebih lanjut disebut.",
    answers: [
      { text: "Produk konsumen", correct: false },
      { text: "Produk industri", correct: true },
      { text: "Produk jasa", correct: false },
      { text: "Produk primer", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Salah satu tujuan pengendalian kualitas adalah.",
    answers: [
      { text: "Mencegah kesalahan produksi", correct: true },
      { text: "Menambah kesalahan produksi", correct: false },
      { text: "Mengurangi kualitas produk", correct: false },
      { text: "Mengurangi konsumen", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jika kualitas jasa yang diterima pelanggan sesuai harapan maka kualitas jasa dianggap.",
    answers: [
      { text: "Buruk", correct: false },
      { text: "Memuaskan", correct: true },
      { text: "Tidak penting", correct: false },
      { text: "Rendah", correct: false }
    ],
    difficulty: "sedang"
  }
];
