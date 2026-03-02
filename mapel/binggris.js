const materi = {
  judul: "English Grade 12 SMK - Job Application, Obligation, Offering Help, Cause and Effect",
  deskripsi: `
  =====================================================
  1️⃣ JOB APPLICATION LETTER (SURAT LAMARAN KERJA)
  =====================================================

  A job application letter is a formal letter used to apply for a job.
  Surat lamaran kerja adalah surat resmi yang digunakan untuk melamar pekerjaan.

  🎯 Tujuan:
  - Memperkenalkan diri kepada perusahaan
  - Menjelaskan posisi yang dilamar
  - Menunjukkan kualifikasi dan pengalaman
  - Meminta kesempatan wawancara

  📌 STRUCTURE / OUTLINE:

  1. Salutation (Salam Pembuka)
     Contoh:
     - Dear Mr. Andi,
     - Dear Ms. Sinta,
     - Dear Hiring Manager,

  2. Opening Paragraph (Paragraf Pembuka)
     Berisi:
     - Posisi yang dilamar
     - Sumber informasi lowongan
     Contoh:
     "I am writing to apply for the position of Administrative Staff advertised on your website."

  3. Body Paragraph (Isi Surat)
     Berisi:
     - Pendidikan
     - Keahlian (skills)
     - Pengalaman kerja/praktik kerja lapangan (PKL)
     - Kepribadian yang mendukung pekerjaan

     Contoh:
     "I am a graduate of SMK majoring in Accounting. I have experience in using Microsoft Excel and handling financial reports."

  4. Closing Paragraph (Paragraf Penutup)
     Berisi:
     - Harapan untuk interview
     - Ucapan terima kasih
     Contoh:
     "I look forward to the opportunity to discuss my qualifications further. Thank you for your time and consideration."

  5. Enclosure (Lampiran)
     Dokumen pendukung seperti:
     - Curriculum Vitae (CV)
     - Copy of certificates
     - Transcript
     Biasanya ditulis: Enclosure: Curriculum Vitae

  =====================================================
  2️⃣ OFFERING HELP (MENAWARKAN BANTUAN)
  =====================================================

  Offering help digunakan untuk menawarkan bantuan kepada orang lain.

  📌 Expressions of Offering Help:
  - May I help you?
  - Can I help you?
  - What can I do for you?
  - Would you like me to help you?
  - Do you need any help?

  📌 Accepting Help:
  - Yes, please.
  - Thank you very much.
  - That would be great.
  - I appreciate that.

  📌 Refusing Help:
  - No, thanks.
  - It's alright.
  - I can manage.
  - Thank you, but I don’t need help.

  📌 Example Dialogue:

  A: May I help you with the documents?
  B: Yes, please. Thank you very much.
  A: You're welcome.

  =====================================================
  3️⃣ OBLIGATION (KEWAJIBAN)
  =====================================================

  Obligation digunakan untuk menyatakan kewajiban, keharusan, atau aturan.

  📌 Asking About Obligation (Menanyakan kewajiban):
  - Should I prepare the document?
  - Do I have to submit it today?
  - Am I supposed to attend the meeting?

  📌 Expressing Obligation (Menyatakan kewajiban):

  1. MUST
     Digunakan untuk kewajiban yang kuat / aturan penting.
     Example:
     - You must wear a helmet.
     - Employees must follow safety rules.

  2. HAVE TO
     Digunakan untuk kewajiban karena aturan atau situasi.
     Example:
     - I have to submit the report today.
     - Students have to wear uniforms.

  3. SUPPOSED TO
     Digunakan untuk sesuatu yang diharapkan dilakukan.
     Example:
     - You are supposed to arrive on time.

  4. OUGHT TO
     Digunakan untuk saran yang kuat atau kewajiban moral.
     Example:
     - You ought to respect your parents.

  📌 Negative Forms:
  - Must not (prohibition)
    Example: You must not smoke here.
  - Don’t have to (not necessary)
    Example: You don’t have to come early.

  =====================================================
  4️⃣ CAUSE AND EFFECT (SEBAB DAN AKIBAT)
  =====================================================

  Cause and effect digunakan untuk menjelaskan hubungan sebab dan akibat.

  📌 Cause Connectors (Kata Penghubung Sebab):

  1. Because of
     Example:
     - We stayed home because of the rain.

  2. Due to
     Example:
     - The match was canceled due to heavy rain.

  3. Owing to
     Example:
     - He was absent owing to illness.

  4. On account of
     Example:
     - The road was closed on account of the accident.

  5. Thanks to
     Digunakan untuk sebab yang positif.
     Example:
     - Thanks to your help, I passed the exam.

  📌 Pola Umum:
  Cause + Noun
  Contoh:
  - because of the rain
  - due to illness
  - owing to traffic jam

  =====================================================
  💡 SUMMARY
  =====================================================
  - Application letter harus formal dan sistematis.
  - Offering help memiliki tiga bagian: offering, accepting, refusing.
  - Obligation menggunakan must, have to, supposed to, ought to.
  - Cause and effect menjelaskan hubungan sebab-akibat menggunakan connector yang tepat.
  `
};

const soal = [

  // ================== MUDAH (1-10) ==================
  {
    question: "The correct salutation in a formal job application letter is...",
    answers: [
      { text: "Hi bro,", correct: false },
      { text: "Dear Mr. Andi,", correct: true },
      { text: "Hello guys,", correct: false },
      { text: "Hey there,", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "The opening paragraph of an application letter usually contains...",
    answers: [
      { text: "Salary request", correct: false },
      { text: "Position applied and source of information", correct: true },
      { text: "Family background", correct: false },
      { text: "Holiday experience", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "CV and certificates are included in...",
    answers: [
      { text: "Salutation", correct: false },
      { text: "Opening", correct: false },
      { text: "Enclosure", correct: true },
      { text: "Greeting", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "The correct expression of offering help is...",
    answers: [
      { text: "You must help me.", correct: false },
      { text: "May I help you?", correct: true },
      { text: "Help yourself.", correct: false },
      { text: "You have to help.", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "The correct response to accept help is...",
    answers: [
      { text: "No way.", correct: false },
      { text: "Yes, please.", correct: true },
      { text: "Go away.", correct: false },
      { text: "Be quiet.", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "The modal used to express strong obligation is...",
    answers: [
      { text: "Might", correct: false },
      { text: "Must", correct: true },
      { text: "May", correct: false },
      { text: "Could", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "You ___ wear a helmet when riding a motorcycle.",
    answers: [
      { text: "must", correct: true },
      { text: "might", correct: false },
      { text: "could", correct: false },
      { text: "may", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "We stayed home ___ the heavy rain.",
    answers: [
      { text: "because of", correct: true },
      { text: "although", correct: false },
      { text: "but", correct: false },
      { text: "so", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "‘Do I have to submit this today?’ is an example of...",
    answers: [
      { text: "Offering help", correct: false },
      { text: "Asking about obligation", correct: true },
      { text: "Refusing help", correct: false },
      { text: "Giving opinion", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Thanks to your help, I passed the test. It shows...",
    answers: [
      { text: "Negative cause", correct: false },
      { text: "Positive cause", correct: true },
      { text: "Refusal", correct: false },
      { text: "Obligation", correct: false }
    ],
    difficulty: "mudah"
  },

  // ================== SEDANG (11-20) ==================
  {
    question: "In the body of application letter, you should write about...",
    answers: [
      { text: "Your hobbies only", correct: false },
      { text: "Your qualifications and experience", correct: true },
      { text: "Your friend's profile", correct: false },
      { text: "Your favorite food", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "The closing paragraph usually contains...",
    answers: [
      { text: "Request for interview", correct: true },
      { text: "Complaint", correct: false },
      { text: "Advertisement", correct: false },
      { text: "Invitation", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "You are supposed to arrive on time. It means...",
    answers: [
      { text: "It is recommended/expected", correct: true },
      { text: "It is forbidden", correct: false },
      { text: "It is impossible", correct: false },
      { text: "It is optional", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "He was absent due to illness. The connector expresses...",
    answers: [
      { text: "Cause", correct: true },
      { text: "Contrast", correct: false },
      { text: "Addition", correct: false },
      { text: "Purpose", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "‘Would you like me to help you?’ is used for...",
    answers: [
      { text: "Refusing help", correct: false },
      { text: "Offering help", correct: true },
      { text: "Giving command", correct: false },
      { text: "Making promise", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "You ought to respect your parents. It expresses...",
    answers: [
      { text: "Advice/obligation", correct: true },
      { text: "Permission", correct: false },
      { text: "Possibility", correct: false },
      { text: "Ability", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "The manager was late owing to traffic jam. The synonym of 'owing to' is...",
    answers: [
      { text: "because of", correct: true },
      { text: "however", correct: false },
      { text: "although", correct: false },
      { text: "therefore", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "If you refuse help politely, you say...",
    answers: [
      { text: "No thanks, I can manage.", correct: true },
      { text: "Help me now!", correct: false },
      { text: "Yes, do it!", correct: false },
      { text: "Be quiet!", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Employees have to follow company rules. It means...",
    answers: [
      { text: "They have no choice", correct: true },
      { text: "They may choose", correct: false },
      { text: "It is optional", correct: false },
      { text: "It is suggestion", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "On account of the accident, the road was closed. The cause connector is...",
    answers: [
      { text: "On account of", correct: true },
      { text: "Closed", correct: false },
      { text: "Accident", correct: false },
      { text: "Road", correct: false }
    ],
    difficulty: "sedang"
  },

  // ================== SUSAH (21-30) ==================
  {
    question: "Which sentence is grammatically correct?",
    answers: [
      { text: "I am writing to apply for the position advertised on your website.", correct: true },
      { text: "I writing apply job for you.", correct: false },
      { text: "I want job give me.", correct: false },
      { text: "Me apply this job.", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "‘Should I prepare the documents now?’ shows...",
    answers: [
      { text: "Asking about obligation", correct: true },
      { text: "Offering help", correct: false },
      { text: "Refusing help", correct: false },
      { text: "Cause and effect", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Thanks to modern technology, communication is easier. The effect is...",
    answers: [
      { text: "Communication is easier", correct: true },
      { text: "Modern technology", correct: false },
      { text: "Thanks to", correct: false },
      { text: "Easier", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "If an employee ignores 'must not', it means...",
    answers: [
      { text: "Breaking a rule", correct: true },
      { text: "Following advice", correct: false },
      { text: "Accepting help", correct: false },
      { text: "Making request", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Which connector shows positive result?",
    answers: [
      { text: "Thanks to", correct: true },
      { text: "Due to", correct: false },
      { text: "Owing to", correct: false },
      { text: "Because of", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "The purpose of enclosure in application letter is to...",
    answers: [
      { text: "Attach supporting documents", correct: true },
      { text: "Say goodbye", correct: false },
      { text: "Greet employer", correct: false },
      { text: "State complaint", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Which sentence expresses obligation correctly?",
    answers: [
      { text: "You have to wear safety equipment in the workshop.", correct: true },
      { text: "You might wear safety equipment.", correct: false },
      { text: "You can maybe wear safety equipment.", correct: false },
      { text: "You should not safety equipment.", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "If you say 'I appreciate that', you are...",
    answers: [
      { text: "Accepting help politely", correct: true },
      { text: "Refusing help", correct: false },
      { text: "Giving order", correct: false },
      { text: "Complaining", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Because of his skills, he was accepted. The cause is...",
    answers: [
      { text: "His skills", correct: true },
      { text: "He was accepted", correct: false },
      { text: "Because of", correct: false },
      { text: "Accepted", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "The best closing sentence in application letter is...",
    answers: [
      { text: "I look forward to your response.", correct: true },
      { text: "Give me job now.", correct: false },
      { text: "Reply fast!", correct: false },
      { text: "Bye.", correct: false }
    ],
    difficulty: "susah"
  }
];

