const materi = {
  judul: "PKWU: Produksi Massal dan Produk",
  deskripsi: `
  **PRODUKSI MASSAL**
  Produksi massal adalah kegiatan memproduksi barang dengan standar yang sama
  dalam jumlah besar melalui proses produksi yang berulang. Tujuannya agar
  produk dapat dibuat secara efisien dan memenuhi kebutuhan pasar.

  **Ciri-ciri produksi massal**
  1. Produksi dalam jumlah besar
  2. Biaya produksi per unit relatif rendah
  3. Menggunakan sistem kerja yang terorganisir
  4. Produk memiliki standar yang sama

  **PERENCANAAN PRODUKSI**
  Perencanaan produksi adalah kegiatan menentukan jumlah produk, waktu produksi,
  bahan baku, serta tenaga kerja yang dibutuhkan untuk menghasilkan produk.

  **PROSES PRODUKSI**
  Proses produksi adalah kegiatan mengolah bahan baku menjadi barang jadi yang
  memiliki nilai guna lebih tinggi.

  **PERAKITAN PRODUK**
  Perakitan adalah proses menyatukan beberapa komponen menjadi satu produk utuh.

  **EVALUASI PRODUK**
  Evaluasi produk adalah kegiatan menilai kualitas produk untuk mengetahui
  apakah produk tersebut memenuhi standar yang ditetapkan.

  **PRODUK DAN JASA**
  Produk adalah barang yang dihasilkan dari proses produksi. Sedangkan jasa
  adalah kegiatan yang tidak berwujud tetapi memberikan manfaat kepada konsumen.
  `
};

const questions = [
{
question: "Produksi massal adalah kegiatan produksi yang dilakukan...",
answers:[
{text:"Dalam jumlah besar dengan standar yang sama", correct:true},
{text:"Hanya untuk satu konsumen", correct:false},
{text:"Tanpa menggunakan mesin", correct:false},
{text:"Tanpa perencanaan produksi", correct:false}
],
difficulty:"mudah"
},

{
question:"Ciri utama produksi massal adalah...",
answers:[
{text:"Produk dibuat dalam jumlah besar", correct:true},
{text:"Produk dibuat secara manual satu per satu", correct:false},
{text:"Produk tidak memiliki standar", correct:false},
{text:"Jumlah produksi sangat sedikit", correct:false}
],
difficulty:"mudah"
},

{
question:"Tujuan utama produksi massal adalah...",
answers:[
{text:"Memenuhi kebutuhan pasar dalam jumlah besar", correct:true},
{text:"Mengurangi kualitas produk", correct:false},
{text:"Memperlama proses produksi", correct:false},
{text:"Mengurangi penggunaan bahan baku", correct:false}
],
difficulty:"mudah"
},

{
question:"Kegiatan menentukan jumlah produk yang akan dibuat disebut...",
answers:[
{text:"Perencanaan produksi", correct:true},
{text:"Distribusi", correct:false},
{text:"Promosi", correct:false},
{text:"Konsumsi", correct:false}
],
difficulty:"mudah"
},

{
question:"Perencanaan produksi bertujuan untuk...",
answers:[
{text:"Mengatur proses produksi agar lebih efisien", correct:true},
{text:"Mengurangi kualitas produk", correct:false},
{text:"Menambah biaya produksi", correct:false},
{text:"Menghentikan produksi", correct:false}
],
difficulty:"sedang"
},

{
question:"Kegiatan mengolah bahan baku menjadi barang jadi disebut...",
answers:[
{text:"Proses produksi", correct:true},
{text:"Distribusi", correct:false},
{text:"Promosi", correct:false},
{text:"Evaluasi", correct:false}
],
difficulty:"mudah"
},

{
question:"Berikut yang termasuk tujuan proses produksi adalah...",
answers:[
{text:"Meningkatkan kualitas produk", correct:true},
{text:"Mengurangi fungsi produk", correct:false},
{text:"Menurunkan produktivitas", correct:false},
{text:"Mengurangi jumlah produk", correct:false}
],
difficulty:"sedang"
},

{
question:"Perakitan produk adalah proses...",
answers:[
{text:"Menggabungkan beberapa komponen menjadi satu produk", correct:true},
{text:"Menghancurkan bahan baku", correct:false},
{text:"Mengurangi komponen produk", correct:false},
{text:"Menjual produk", correct:false}
],
difficulty:"mudah"
},

{
question:"Perakitan yang dilakukan dengan tenaga manusia disebut...",
answers:[
{text:"Perakitan manual", correct:true},
{text:"Perakitan otomatis", correct:false},
{text:"Perakitan modern", correct:false},
{text:"Perakitan industri", correct:false}
],
difficulty:"sedang"
},

{
question:"Perakitan yang menggunakan mesin otomatis disebut...",
answers:[
{text:"Perakitan otomatis", correct:true},
{text:"Perakitan manual", correct:false},
{text:"Perakitan sederhana", correct:false},
{text:"Perakitan dasar", correct:false}
],
difficulty:"sedang"
},

{
question:"Kegiatan untuk menilai kualitas produk disebut...",
answers:[
{text:"Evaluasi produk", correct:true},
{text:"Produksi", correct:false},
{text:"Distribusi", correct:false},
{text:"Promosi", correct:false}
],
difficulty:"mudah"
},

{
question:"Evaluasi produk dilakukan agar...",
answers:[
{text:"Mengetahui kualitas produk yang dihasilkan", correct:true},
{text:"Mengurangi jumlah produk", correct:false},
{text:"Menambah harga produk", correct:false},
{text:"Menghentikan produksi", correct:false}
],
difficulty:"sedang"
},

{
question:"Standarisasi produk bertujuan untuk...",
answers:[
{text:"Menjamin kualitas produk", correct:true},
{text:"Mengurangi mutu produk", correct:false},
{text:"Menghilangkan produk", correct:false},
{text:"Mengurangi konsumen", correct:false}
],
difficulty:"sedang"
},

{
question:"Lembaga yang mengatur standarisasi nasional di Indonesia adalah...",
answers:[
{text:"BSN", correct:true},
{text:"BPS", correct:false},
{text:"BI", correct:false},
{text:"KPK", correct:false}
],
difficulty:"sedang"
},

{
question:"Produk adalah...",
answers:[
{text:"Barang yang dihasilkan dari proses produksi", correct:true},
{text:"Kegiatan menjual barang", correct:false},
{text:"Proses promosi", correct:false},
{text:"Kegiatan distribusi", correct:false}
],
difficulty:"mudah"
},

{
question:"Jasa adalah...",
answers:[
{text:"Kegiatan yang memberikan manfaat tetapi tidak berwujud", correct:true},
{text:"Barang yang dapat disentuh", correct:false},
{text:"Barang yang disimpan di gudang", correct:false},
{text:"Barang yang tidak memiliki nilai", correct:false}
],
difficulty:"mudah"
},

{
question:"Contoh produk jasa adalah...",
answers:[
{text:"Jasa dokter", correct:true},
{text:"Sepeda motor", correct:false},
{text:"Meja", correct:false},
{text:"Laptop", correct:false}
],
difficulty:"mudah"
},

{
question:"Barang yang dibeli untuk digunakan oleh konsumen disebut...",
answers:[
{text:"Produk konsumen", correct:true},
{text:"Produk industri", correct:false},
{text:"Produk perusahaan", correct:false},
{text:"Produk jasa", correct:false}
],
difficulty:"sedang"
},

{
question:"Barang yang digunakan untuk proses produksi disebut...",
answers:[
{text:"Produk industri", correct:true},
{text:"Produk konsumen", correct:false},
{text:"Produk rumah tangga", correct:false},
{text:"Produk pribadi", correct:false}
],
difficulty:"sedang"
},

{
question:"Bahan mentah dalam industri adalah...",
answers:[
{text:"Bahan yang menjadi bagian dari produk", correct:true},
{text:"Produk yang sudah jadi", correct:false},
{text:"Produk yang tidak digunakan", correct:false},
{text:"Barang rusak", correct:false}
],
difficulty:"sedang"
},

{
question:"Contoh bahan mentah adalah...",
answers:[
{text:"Kayu", correct:true},
{text:"Meja", correct:false},
{text:"Kursi", correct:false},
{text:"Lemari", correct:false}
],
difficulty:"mudah"
},

{
question:"Barang yang digunakan dalam operasi perusahaan tetapi tidak menjadi bagian produk disebut...",
answers:[
{text:"Perlengkapan operasi", correct:true},
{text:"Produk utama", correct:false},
{text:"Produk mentah", correct:false},
{text:"Produk konsumen", correct:false}
],
difficulty:"sedang"
},

{
question:"Tujuan evaluasi produk adalah...",
answers:[
{text:"Memperbaiki kualitas produk", correct:true},
{text:"Mengurangi produk", correct:false},
{text:"Menghilangkan produk", correct:false},
{text:"Mengurangi pelanggan", correct:false}
],
difficulty:"sedang"
},

{
question:"Kegiatan memeriksa produk setelah dirakit disebut...",
answers:[
{text:"Final inspection", correct:true},
{text:"Distribusi", correct:false},
{text:"Promosi", correct:false},
{text:"Produksi", correct:false}
],
difficulty:"sedang"
},

{
question:"Kegiatan mengirim produk ke konsumen disebut...",
answers:[
{text:"Shipping", correct:true},
{text:"Produksi", correct:false},
{text:"Perakitan", correct:false},
{text:"Evaluasi", correct:false}
],
difficulty:"mudah"
},

{
question:"Tahap terakhir dalam proses perakitan adalah...",
answers:[
{text:"Pemeriksaan produk", correct:true},
{text:"Pengolahan bahan", correct:false},
{text:"Pengumpulan bahan", correct:false},
{text:"Perencanaan produk", correct:false}
],
difficulty:"sedang"
},

{
question:"Kualitas produk yang baik akan...",
answers:[
{text:"Meningkatkan kepuasan pelanggan", correct:true},
{text:"Mengurangi konsumen", correct:false},
{text:"Menurunkan penjualan", correct:false},
{text:"Mengurangi produksi", correct:false}
],
difficulty:"mudah"
},

{
question:"Faktor penting dalam keberhasilan produksi adalah...",
answers:[
{text:"Kualitas produk", correct:true},
{text:"Jumlah karyawan sedikit", correct:false},
{text:"Produksi lambat", correct:false},
{text:"Tidak ada perencanaan", correct:false}
],
difficulty:"sedang"
},

{
question:"Produk yang berkualitas akan...",
answers:[
{text:"Lebih diminati konsumen", correct:true},
{text:"Dihindari konsumen", correct:false},
{text:"Tidak laku di pasar", correct:false},
{text:"Tidak digunakan", correct:false}
],
difficulty:"mudah"
},

{
question:"Salah satu indikator keberhasilan produksi adalah...",
answers:[
{text:"Produktivitas", correct:true},
{text:"Kemalasan kerja", correct:false},
{text:"Pengurangan produksi", correct:false},
{text:"Penurunan kualitas", correct:false}
],
difficulty:"sedang"
}
];
