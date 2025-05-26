const materi = {
  judul: "Matematika: Ujian Kenaikan Kelas - Lingkaran & Kaidah Pencacahan",
  deskripsi: `
Materi mencakup:
1. Unsur-unsur lingkaran (apotema, sudut pusat & keliling)
2. Panjang busur dan luas juring
3. Luas tembereng
4. Kaidah pencacahan: aturan perkalian & penjumlahan
5. Permutasi dan faktorial`
};

const soal = [
  {
    question: "Garis yang menghubungkan titik pusat lingkaran ke titik pada tali busur dan tegak lurus terhadap tali busur disebut...",
    answers: [
      { text: "Diameter", correct: false },
      { text: "Apotema", correct: true },
      { text: "Jari-jari", correct: false },
      { text: "Busur", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Jika sudut keliling suatu lingkaran adalah 40°, berapakah besar sudut pusat yang menghadap busur yang sama?",
    answers: [
      { text: "80°", correct: true },
      { text: "20°", correct: false },
      { text: "60°", correct: false },
      { text: "100°", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jika sudut pusat lingkaran 120°, maka besar sudut keliling yang menghadap busur yang sama adalah...",
    answers: [
      { text: "30°", correct: false },
      { text: "60°", correct: false },
      { text: "90°", correct: false },
      { text: "60°", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Berapa banyak cara menyusun 3 siswa dari 5 siswa sebagai ketua, sekretaris, dan bendahara?",
    answers: [
      { text: "10", correct: false },
      { text: "20", correct: false },
      { text: "60", correct: true },
      { text: "15", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jumlah sudut dalam lingkaran selalu adalah...",
    answers: [
      { text: "90°", correct: false },
      { text: "180°", correct: false },
      { text: "360°", correct: true },
      { text: "270°", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Panjang busur dari jari-jari 14 cm dan sudut pusat 90° adalah...",
    answers: [
      { text: "22 cm", correct: true },
      { text: "28 cm", correct: false },
      { text: "35 cm", correct: false },
      { text: "44 cm", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Jika panjang busur 11 cm dan jari-jari 7 cm, maka besar sudut pusatnya adalah...",
    answers: [
      { text: "90°", correct: false },
      { text: "60°", correct: false },
      { text: "45°", correct: true },
      { text: "120°", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Luas juring dengan jari-jari 10 cm dan sudut pusat 60° adalah...",
    answers: [
      { text: "52,4 cm²", correct: true },
      { text: "104,7 cm²", correct: false },
      { text: "157,1 cm²", correct: false },
      { text: "31,4 cm²", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Luas tembereng yang dibentuk oleh sudut pusat 90° dengan jari-jari 14 cm adalah sekitar...",
    answers: [
      { text: "107,8 cm²", correct: false },
      { text: "38,5 cm²", correct: true },
      { text: "154 cm²", correct: false },
      { text: "44 cm²", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Berapakah nilai dari 5! (5 faktorial)?",
    answers: [
      { text: "120", correct: true },
      { text: "60", correct: false },
      { text: "24", correct: false },
      { text: "100", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Berapa banyak cara menyusun huruf dari kata 'MEJA' tanpa pengulangan?",
    answers: [
      { text: "24", correct: true },
      { text: "12", correct: false },
      { text: "6", correct: false },
      { text: "20", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dari 6 siswa, berapa banyak cara dipilih ketua dan sekretaris dengan memperhatikan urutan?",
    answers: [
      { text: "30", correct: true },
      { text: "15", correct: false },
      { text: "12", correct: false },
      { text: "10", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jika terdapat 4 jenis celana dan 5 jenis baju, berapa kombinasi pakaian yang dapat dipakai?",
    answers: [
      { text: "20", correct: true },
      { text: "9", correct: false },
      { text: "10", correct: false },
      { text: "12", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Notasi faktorial untuk 6×5×4 adalah...",
    answers: [
      { text: "6!", correct: false },
      { text: "6! / 3!", correct: true },
      { text: "5!", correct: false },
      { text: "4!", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Permutasi dari 4 benda diambil 2 adalah...",
    answers: [
      { text: "12", correct: true },
      { text: "6", correct: false },
      { text: "24", correct: false },
      { text: "8", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Aturan penjumlahan dalam pencacahan digunakan jika...",
    answers: [
      { text: "Kejadian dilakukan bersamaan", correct: false },
      { text: "Kejadian tidak bisa dilakukan bersamaan", correct: true },
      { text: "Ada pengulangan", correct: false },
      { text: "Menggabungkan dua kejadian", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jika jari-jari lingkaran adalah 21 cm dan sudut pusat 60°, maka panjang busurnya adalah...",
    answers: [
      { text: "22 cm", correct: false },
      { text: "33 cm", correct: false },
      { text: "44 cm", correct: true },
      { text: "66 cm", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Pernyataan berikut yang benar adalah...",
    answers: [
      { text: "Sudut keliling selalu lebih besar dari sudut pusat", correct: false },
      { text: "Sudut pusat selalu 2 kali sudut keliling", correct: true },
      { text: "Sudut pusat lebih kecil dari sudut keliling", correct: false },
      { text: "Sudut pusat sama dengan sudut keliling", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Banyak susunan dari kata 'BOLA' jika semua huruf digunakan adalah...",
    answers: [
      { text: "24", correct: true },
      { text: "12", correct: false },
      { text: "16", correct: false },
      { text: "20", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Berapakah nilai dari 6! / 4! ?",
    answers: [
      { text: "30", correct: true },
      { text: "20", correct: false },
      { text: "15", correct: false },
      { text: "10", correct: false }
    ],
    difficulty: "mudah"
  },
  // 10 soal tambahan (lanjutan di bawah)
];
