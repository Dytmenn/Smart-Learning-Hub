const materi = {
  judul: "Ilmu Penyakit Dasar dan Diagnostik (IPDD) Kelas 2 - Semester 2",
  deskripsi: `Materi mencakup sistem organ tubuh manusia meliputi sistem pencernaan, pernapasan, kardiovaskular, perkemihan, diagnostik fisik, endokrin, persyarafan, dan kulit.`,
};

const soal = [
  // ===== BAGIAN 1: SISTEM PENCERNAAN (GASTROINTESTINAL) =====
  {
    question: "Peradangan pada mukosa lambung yang sering disebabkan oleh pola makan tidak teratur atau infeksi H. pylori disebut...",
    answers: [
      { text: "A. Stomatitis", correct: false },
      { text: "B. Gastritis", correct: true },
      { text: "C. Apendisitis", correct: false },
      { text: "D. Hepatitis", correct: false },
      { text: "E. Kolitis", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Gejala khas berupa nyeri tekan pada titik McBurney di perut kanan bawah merupakan indikasi...",
    answers: [
      { text: "A. Gastritis", correct: false },
      { text: "B. Kolesistitis", correct: false },
      { text: "C. Apendisitis", correct: true },
      { text: "D. Pankreatitis", correct: false },
      { text: "E. Peritonitis", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Kondisi feses yang keras dan sulit dikeluarkan akibat kurang serat dan cairan disebut...",
    answers: [
      { text: "A. Diare", correct: false },
      { text: "B. Konstipasi", correct: true },
      { text: "C. Melena", correct: false },
      { text: "D. Hematemesis", correct: false },
      { text: "E. Disentri", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Penyakit yang ditandai dengan perubahan warna kuning pada sklera dan kulit akibat gangguan fungsi hati disebut...",
    answers: [
      { text: "A. Sirosis", correct: false },
      { text: "B. Kolelitiasis", correct: false },
      { text: "C. Ikterus (Jaundice)", correct: true },
      { text: "D. Hepatomegali", correct: false },
      { text: "E. Edema", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pemeriksaan diagnostik visual saluran cerna bagian atas menggunakan alat berkamera disebut...",
    answers: [
      { text: "A. Kolonoskopi", correct: false },
      { text: "B. Gastroskopi", correct: true },
      { text: "C. Laparoskopi", correct: false },
      { text: "D. USG", correct: false },
      { text: "E. Rontgen Barium", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Penyakit yang ditandai dengan peradangan pada kantong empedu disebut...",
    answers: [
      { text: "A. Hepatitis", correct: false },
      { text: "B. Sirosis", correct: false },
      { text: "C. Kolesistitis", correct: true },
      { text: "D. Gastritis", correct: false },
      { text: "E. Apendisitis", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Istilah untuk muntah darah yang berasal dari saluran cerna bagian atas adalah...",
    answers: [
      { text: "A. Hemoptisis", correct: false },
      { text: "B. Epistaksis", correct: false },
      { text: "C. Hematemesis", correct: true },
      { text: "D. Melena", correct: false },
      { text: "E. Hematochezia", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Penyebab utama diare yang disertai lendir dan darah (disentri) biasanya adalah infeksi...",
    answers: [
      { text: "A. Virus Influenza", correct: false },
      { text: "B. Bakteri Shigella atau Amoeba", correct: true },
      { text: "C. Jamur Candida", correct: false },
      { text: "D. Cacing Pita", correct: false },
      { text: "E. Defisiensi Vitamin", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pemeriksaan fisik abdomen dengan cara mengetuk untuk mendengar suara timpani atau pekak disebut...",
    answers: [
      { text: "A. Inspeksi", correct: false },
      { text: "B. Palpasi", correct: false },
      { text: "C. Perkusi", correct: true },
      { text: "D. Auskultasi", correct: false },
      { text: "E. Olfaksi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Sariawan atau peradangan pada rongga mulut dalam istilah medis disebut...",
    answers: [
      { text: "A. Stomatitis", correct: true },
      { text: "B. Gingivitis", correct: false },
      { text: "C. Glossitis", correct: false },
      { text: "D. Tonsilitis", correct: false },
      { text: "E. Faringitis", correct: false }
    ],
    difficulty: "mudah"
  },

  // ===== BAGIAN 2: SISTEM PERNAPASAN (RESPIRASI) =====
  {
    question: "Penyakit saluran napas kronis yang ditandai dengan penyempitan bronkus akibat hipersensitivitas adalah...",
    answers: [
      { text: "A. Pneumonia", correct: false },
      { text: "B. TBC", correct: false },
      { text: "C. Asma Bronkial", correct: true },
      { text: "D. Emfisema", correct: false },
      { text: "E. Bronkitis", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Bakteri penyebab penyakit Tuberkulosis (TBC) adalah...",
    answers: [
      { text: "A. Staphylococcus aureus", correct: false },
      { text: "B. Mycobacterium tuberculosis", correct: true },
      { text: "C. Escherichia coli", correct: false },
      { text: "D. Salmonella typhi", correct: false },
      { text: "E. Streptococcus pneumoniae", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Suara napas tambahan yang terdengar 'ngiik' pada penderita asma saat ekspirasi disebut...",
    answers: [
      { text: "A. Ronchi", correct: false },
      { text: "B. Wheezing", correct: true },
      { text: "C. Stridor", correct: false },
      { text: "D. Crackles", correct: false },
      { text: "E. Vesikuler", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pengumpulan cairan di dalam rongga pleura disebut...",
    answers: [
      { text: "A. Pneumothorax", correct: false },
      { text: "B. Efusi Pleura", correct: true },
      { text: "C. Emfisema", correct: false },
      { text: "D. Edema Paru", correct: false },
      { text: "E. Abses Paru", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Batuk berdarah dalam istilah medis disebut...",
    answers: [
      { text: "A. Hemoptisis", correct: true },
      { text: "B. Hematemesis", correct: false },
      { text: "C. Epistaksis", correct: false },
      { text: "D. Hematoma", correct: false },
      { text: "E. Hematochezia", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Alat yang digunakan untuk mengukur saturasi oksigen dalam darah adalah...",
    answers: [
      { text: "A. Sphygmomanometer", correct: false },
      { text: "B. Termometer", correct: false },
      { text: "C. Pulse Oximeter", correct: true },
      { text: "D. Spirometer", correct: false },
      { text: "E. Stetoskop", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Kondisi di mana alveoli mengalami kerusakan dan kehilangan elastisitasnya sehingga udara terjebak disebut...",
    answers: [
      { text: "A. Bronkitis", correct: false },
      { text: "B. Asma", correct: false },
      { text: "C. Emfisema", correct: true },
      { text: "D. Pneumonia", correct: false },
      { text: "E. TBC", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pemeriksaan laboratorium untuk mendeteksi kuman TBC pada dahak adalah pemeriksaan...",
    answers: [
      { text: "A. Darah Rutin", correct: false },
      { text: "B. Sputum BTA", correct: true },
      { text: "C. Urinalisis", correct: false },
      { text: "D. Widal Test", correct: false },
      { text: "E. Kultur Urine", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Radang pada tenggorokan yang menyebabkan nyeri saat menelan disebut...",
    answers: [
      { text: "A. Laringitis", correct: false },
      { text: "B. Faringitis", correct: true },
      { text: "C. Rhinitis", correct: false },
      { text: "D. Sinusitis", correct: false },
      { text: "E. Otitis", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Frekuensi napas yang lebih cepat dari normal disebut...",
    answers: [
      { text: "A. Bradipnea", correct: false },
      { text: "B. Takipnea", correct: true },
      { text: "C. Apnea", correct: false },
      { text: "D. Dispnea", correct: false },
      { text: "E. Eupnea", correct: false }
    ],
    difficulty: "mudah"
  },

  // ===== BAGIAN 3: SISTEM KARDIOVASKULAR =====
  {
    question: "Tekanan darah normal pada orang dewasa adalah...",
    answers: [
      { text: "A. 140/90 mmHg", correct: false },
      { text: "B. 120/80 mmHg", correct: true },
      { text: "C. 90/60 mmHg", correct: false },
      { text: "D. 160/100 mmHg", correct: false },
      { text: "E. 100/70 mmHg", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pelebaran pembuluh darah vena yang sering terjadi di kaki disebut...",
    answers: [
      { text: "A. Hipertensi", correct: false },
      { text: "B. Arteriosklerosis", correct: false },
      { text: "C. Varises", correct: true },
      { text: "D. Aneurisma", correct: false },
      { text: "E. Trombosis", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Penumpukan lemak pada dinding pembuluh darah arteri disebut...",
    answers: [
      { text: "A. Arteriosklerosis", correct: false },
      { text: "B. Aterosklerosis", correct: true },
      { text: "C. Emboli", correct: false },
      { text: "D. Stenosis", correct: false },
      { text: "E. Iskemia", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Alat untuk merekam aktivitas listrik jantung adalah...",
    answers: [
      { text: "A. EKG", correct: true },
      { text: "B. EEG", correct: false },
      { text: "C. USG", correct: false },
      { text: "D. CT-Scan", correct: false },
      { text: "E. Rontgen", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Nyeri dada akibat kurangnya pasokan oksigen ke otot jantung disebut...",
    answers: [
      { text: "A. Infark Miokard", correct: false },
      { text: "B. Angina Pektoris", correct: true },
      { text: "C. Gagal Jantung", correct: false },
      { text: "D. Perikarditis", correct: false },
      { text: "E. Aritmia", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Kondisi jantung tidak mampu memompa darah dengan cukup ke seluruh tubuh disebut...",
    answers: [
      { text: "A. Hipertensi", correct: false },
      { text: "B. Hipotensi", correct: false },
      { text: "C. Gagal Jantung (Heart Failure)", correct: true },
      { text: "D. Stroke", correct: false },
      { text: "E. Syok", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Frekuensi denyut nadi yang lebih dari 100 kali per menit disebut...",
    answers: [
      { text: "A. Bradikardia", correct: false },
      { text: "B. Takikardia", correct: true },
      { text: "C. Aritmia", correct: false },
      { text: "D. Palpitasi", correct: false },
      { text: "E. Murmur", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Peradangan pada lapisan dinding bagian dalam jantung disebut...",
    answers: [
      { text: "A. Miokarditis", correct: false },
      { text: "B. Perikarditis", correct: false },
      { text: "C. Endokarditis", correct: true },
      { text: "D. Vaskulitis", correct: false },
      { text: "E. Artritis", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Penyakit 'Silent Killer' karena sering tidak bergejala namun mematikan adalah...",
    answers: [
      { text: "A. Hipotensi", correct: false },
      { text: "B. Hipertensi", correct: true },
      { text: "C. Anemia", correct: false },
      { text: "D. Varises", correct: false },
      { text: "E. Gagal Ginjal", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Lokasi pemeriksaan nadi yang paling umum di pergelangan tangan adalah arteri...",
    answers: [
      { text: "A. Karotis", correct: false },
      { text: "B. Brakialis", correct: false },
      { text: "C. Radialis", correct: true },
      { text: "D. Femoralis", correct: false },
      { text: "E. Dorsalis Pedis", correct: false }
    ],
    difficulty: "mudah"
  },

  // ===== BAGIAN 4: SISTEM PERKEMIHAN (URINARI) =====
  {
    question: "Infeksi yang terjadi pada kandung kemih disebut...",
    answers: [
      { text: "A. Nefritis", correct: false },
      { text: "B. Sistitis", correct: true },
      { text: "C. Uretritis", correct: false },
      { text: "D. Pielonefritis", correct: false },
      { text: "E. Glomerulonefritis", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Batu ginjal dalam istilah medis disebut...",
    answers: [
      { text: "A. Kolelitiasis", correct: false },
      { text: "B. Nefrolitiasis", correct: true },
      { text: "C. Ureterolitiasis", correct: false },
      { text: "D. Sistoskopi", correct: false },
      { text: "E. Hematuria", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Kondisi urine yang mengandung darah disebut...",
    answers: [
      { text: "A. Glukosuria", correct: false },
      { text: "B. Proteinuria", correct: false },
      { text: "C. Hematuria", correct: true },
      { text: "D. Piuria", correct: false },
      { text: "E. Anuria", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Proses pencucian darah sebagai pengganti fungsi ginjal yang rusak disebut...",
    answers: [
      { text: "A. Transplantasi", correct: false },
      { text: "B. Biopsi", correct: false },
      { text: "C. Hemodialisis", correct: true },
      { text: "D. Kateterisasi", correct: false },
      { text: "E. Kemoterapi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Ketidakmampuan kandung kemih dalam menahan urine (mengompol) disebut...",
    answers: [
      { text: "A. Retensi Urine", correct: false },
      { text: "B. Inkontinensia Urine", correct: true },
      { text: "C. Anuria", correct: false },
      { text: "D. Oliguria", correct: false },
      { text: "E. Poliuria", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Satuan fungsional terkecil dalam ginjal yang menyaring darah adalah...",
    answers: [
      { text: "A. Ureter", correct: false },
      { text: "B. Pelvis", correct: false },
      { text: "C. Nefron", correct: true },
      { text: "D. Korteks", correct: false },
      { text: "E. Medula", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Penurunan jumlah produksi urine kurang dari 400 ml dalam 24 jam disebut...",
    answers: [
      { text: "A. Anuria", correct: false },
      { text: "B. Oliguria", correct: true },
      { text: "C. Poliuria", correct: false },
      { text: "D. Disuria", correct: false },
      { text: "E. Hematuria", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pemeriksaan untuk melihat fungsi filtrasi ginjal melalui darah adalah pemeriksaan...",
    answers: [
      { text: "A. SGOT/SGPT", correct: false },
      { text: "B. Ureum dan Kreatinin", correct: true },
      { text: "C. Kolesterol", correct: false },
      { text: "D. Asam Urat", correct: false },
      { text: "E. Hemoglobin", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Gejala nyeri atau rasa terbakar saat buang air kecil disebut...",
    answers: [
      { text: "A. Poliuria", correct: false },
      { text: "B. Hematuria", correct: false },
      { text: "C. Disuria", correct: true },
      { text: "D. Nokturia", correct: false },
      { text: "E. Glukosuria", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Peradangan pada glomerulus ginjal disebut...",
    answers: [
      { text: "A. Glomerulonefritis", correct: true },
      { text: "B. Sistitis", correct: false },
      { text: "C. Uretritis", correct: false },
      { text: "D. Batu Ginjal", correct: false },
      { text: "E. Hidronefrosis", correct: false }
    ],
    difficulty: "sedang"
  },

  // ===== BAGIAN 5: DIAGNOSTIK FISIK DAN UMUM =====
  {
    question: "Posisi pasien telentang dengan kaki ditekuk dan telapak kaki menempel di tempat tidur untuk pemeriksaan genetalia adalah...",
    answers: [
      { text: "A. Sim", correct: false },
      { text: "B. Trendelenburg", correct: false },
      { text: "C. Dorsal Recumbent", correct: true },
      { text: "D. Lithotomy", correct: false },
      { text: "E. Fowler", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Suara perkusi yang terdengar di atas organ padat seperti hati adalah...",
    answers: [
      { text: "A. Sonor", correct: false },
      { text: "B. Hipersonor", correct: false },
      { text: "C. Pekak (Dullness)", correct: true },
      { text: "D. Timpani", correct: false },
      { text: "E. Resonan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Alat yang digunakan untuk memeriksa refleks patella adalah...",
    answers: [
      { text: "A. Garpu tala", correct: false },
      { text: "B. Penlight", correct: false },
      { text: "C. Reflex Hammer", correct: true },
      { text: "D. Sudut lidah", correct: false },
      { text: "E. Metline", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Tanda-tanda vital (TTV) meliputi hal-hal berikut, kecuali...",
    answers: [
      { text: "A. Tekanan Darah", correct: false },
      { text: "B. Suhu Tubuh", correct: false },
      { text: "C. Frekuensi Nadi", correct: false },
      { text: "D. Berat Badan", correct: true },
      { text: "E. Frekuensi Pernapasan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Alat untuk melihat liang telinga disebut...",
    answers: [
      { text: "A. Oftalmoskop", correct: false },
      { text: "B. Otoskop", correct: true },
      { text: "C. Stetoskop", correct: false },
      { text: "D. Spirometer", correct: false },
      { text: "E. Endoskop", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pemeriksaan fisik dengan meraba bagian tubuh pasien disebut...",
    answers: [
      { text: "A. Inspeksi", correct: false },
      { text: "B. Palpasi", correct: true },
      { text: "C. Perkusi", correct: false },
      { text: "D. Auskultasi", correct: false },
      { text: "E. Olfaksi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Istilah untuk demam atau suhu tubuh di atas normal adalah...",
    answers: [
      { text: "A. Hipotermia", correct: false },
      { text: "B. Hipertermia (Febris)", correct: true },
      { text: "C. Hipertensi", correct: false },
      { text: "D. Takikardia", correct: false },
      { text: "E. Sianosis", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Warna kebiruan pada kuku atau bibir akibat kurang oksigen disebut...",
    answers: [
      { text: "A. Ikterus", correct: false },
      { text: "B. Sianosis", correct: true },
      { text: "C. Pucat", correct: false },
      { text: "D. Eritema", correct: false },
      { text: "E. Edema", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Suara perkusi pada paru-paru normal yang berisi udara adalah...",
    answers: [
      { text: "A. Sonor", correct: true },
      { text: "B. Pekak", correct: false },
      { text: "C. Timpani", correct: false },
      { text: "D. Resonansi", correct: false },
      { text: "E. Flatness", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jarak pandang normal pada pemeriksaan kartu Snellen adalah...",
    answers: [
      { text: "A. 1 meter", correct: false },
      { text: "B. 3 meter", correct: false },
      { text: "C. 6 meter", correct: true },
      { text: "D. 10 meter", correct: false },
      { text: "E. 12 meter", correct: false }
    ],
    difficulty: "sedang"
  },

  // ===== BAGIAN 6: SISTEM ENDOKRIN DAN METABOLISME =====
  {
    question: "Hormon yang berfungsi menurunkan kadar gula dalam darah adalah...",
    answers: [
      { text: "A. Glukagon", correct: false },
      { text: "B. Insulin", correct: true },
      { text: "C. Adrenalin", correct: false },
      { text: "D. Tiroksin", correct: false },
      { text: "E. Estrogen", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Penyakit akibat kekurangan hormon tiroid disebut...",
    answers: [
      { text: "A. Hipertiroid", correct: false },
      { text: "B. Hipotiroid", correct: true },
      { text: "C. Diabetes", correct: false },
      { text: "D. Cushing Syndrome", correct: false },
      { text: "E. Addison Disease", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Gejala '3P' pada Diabetes Mellitus adalah...",
    answers: [
      { text: "A. Poliuri, Polidipsi, Polifagi", correct: true },
      { text: "B. Pucat, Pusing, Pingsan", correct: false },
      { text: "C. Panas, Perih, Pegal", correct: false },
      { text: "D. Polidipsi, Proteinuria, Palpitasi", correct: false },
      { text: "E. Poliuri, Pucat, Polidipsi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pembengkakan kelenjar tiroid yang sering disebabkan kekurangan iodium disebut...",
    answers: [
      { text: "A. Gastritis", correct: false },
      { text: "B. Struma (Gondok)", correct: true },
      { text: "C. Parotitis", correct: false },
      { text: "D. Tonsilitis", correct: false },
      { text: "E. Adenoma", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pemeriksaan Gula Darah Puasa (GDP) dilakukan setelah pasien berpuasa selama...",
    answers: [
      { text: "A. 2 jam", correct: false },
      { text: "B. 4 jam", correct: false },
      { text: "C. 8–10 jam", correct: true },
      { text: "D. 12–14 jam", correct: false },
      { text: "E. 24 jam", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Kadar gula darah normal sewaktu (GDS) adalah...",
    answers: [
      { text: "A. < 100 mg/dL", correct: false },
      { text: "B. < 200 mg/dL", correct: true },
      { text: "C. > 300 mg/dL", correct: false },
      { text: "D. 50–70 mg/dL", correct: false },
      { text: "E. 250–400 mg/dL", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Penyakit yang ditandai dengan pengeroposan tulang disebut...",
    answers: [
      { text: "A. Osteoartritis", correct: false },
      { text: "B. Osteoporosis", correct: true },
      { text: "C. Ricketsia", correct: false },
      { text: "D. Fraktur", correct: false },
      { text: "E. Skoliosis", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Penumpukan kristal asam urat pada sendi menyebabkan penyakit...",
    answers: [
      { text: "A. Rematik", correct: false },
      { text: "B. Gout Arthritis", correct: true },
      { text: "C. Osteoporosis", correct: false },
      { text: "D. Dislokasi", correct: false },
      { text: "E. Kifosis", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Bagian tubuh yang sering mengalami pembengkakan (edema) pada pasien gagal jantung atau ginjal adalah...",
    answers: [
      { text: "A. Kepala", correct: false },
      { text: "B. Dada", correct: false },
      { text: "C. Ekstremitas Bawah (Kaki)", correct: true },
      { text: "D. Punggung", correct: false },
      { text: "E. Lengan atas", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Istilah medis untuk bibir pecah-pecah akibat kekurangan vitamin C atau hidrasi adalah...",
    answers: [
      { text: "A. Cheilitis", correct: true },
      { text: "B. Gingivitis", correct: false },
      { text: "C. Stomatitis", correct: false },
      { text: "D. Gastritis", correct: false },
      { text: "E. Glossitis", correct: false }
    ],
    difficulty: "sedang"
  },

  // ===== BAGIAN 7: SISTEM PERSYARAFAN DAN KULIT =====
  {
    question: "Peradangan pada selaput otak disebut...",
    answers: [
      { text: "A. Ensefalitis", correct: false },
      { text: "B. Meningitis", correct: true },
      { text: "C. Stroke", correct: false },
      { text: "D. Epilepsi", correct: false },
      { text: "E. Hidrosefalus", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Kelumpuhan pada satu sisi tubuh (kanan atau kiri) disebut...",
    answers: [
      { text: "A. Paraplegia", correct: false },
      { text: "B. Kuadriplegia", correct: false },
      { text: "C. Hemiplegia", correct: true },
      { text: "D. Monoplegia", correct: false },
      { text: "E. Paresis", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Penyakit kulit yang disebabkan oleh jamur dan berbentuk lingkaran merah disebut...",
    answers: [
      { text: "A. Scabies", correct: false },
      { text: "B. Herpes", correct: false },
      { text: "C. Tinea (Kurap)", correct: true },
      { text: "D. Dermatitis", correct: false },
      { text: "E. Variola", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Penyakit kulit menular yang disebabkan oleh kutu Sarcoptes scabiei adalah...",
    answers: [
      { text: "A. Scabies", correct: true },
      { text: "B. Lepra", correct: false },
      { text: "C. Akne", correct: false },
      { text: "D. Pruritus", correct: false },
      { text: "E. Eksim", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Stroke hemoragik disebabkan oleh...",
    answers: [
      { text: "A. Penyumbatan pembuluh darah otak", correct: false },
      { text: "B. Pecahnya pembuluh darah otak", correct: true },
      { text: "C. Infeksi bakteri di otak", correct: false },
      { text: "D. Kurangnya glukosa ke otak", correct: false },
      { text: "E. Benturan keras", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Penyakit saraf yang ditandai dengan kejang berulang disebut...",
    answers: [
      { text: "A. Vertigo", correct: false },
      { text: "B. Migrain", correct: false },
      { text: "C. Epilepsi", correct: true },
      { text: "D. Amnesia", correct: false },
      { text: "E. Insomnia", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pemeriksaan refleks Babinski dilakukan pada bagian...",
    answers: [
      { text: "A. Lutut", correct: false },
      { text: "B. Siku", correct: false },
      { text: "C. Telapak Kaki", correct: true },
      { text: "D. Perut", correct: false },
      { text: "E. Mata", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "GCS (Glasgow Coma Scale) digunakan untuk menilai...",
    answers: [
      { text: "A. Tekanan Darah", correct: false },
      { text: "B. Tingkat Kesadaran", correct: true },
      { text: "C. Kekuatan Otot", correct: false },
      { text: "D. Kapasitas Paru", correct: false },
      { text: "E. Ketajaman Penglihatan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Nilai GCS untuk kesadaran penuh (Compos Mentis) adalah...",
    answers: [
      { text: "A. 3", correct: false },
      { text: "B. 7", correct: false },
      { text: "C. 10", correct: false },
      { text: "D. 15", correct: true },
      { text: "E. 20", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Istilah medis untuk rasa gatal pada kulit adalah...",
    answers: [
      { text: "A. Urtikaria", correct: false },
      { text: "B. Pruritus", correct: true },
      { text: "C. Eritema", correct: false },
      { text: "D. Vesikel", correct: false },
      { text: "E. Pustul", correct: false }
    ],
    difficulty: "mudah"
  }
];
