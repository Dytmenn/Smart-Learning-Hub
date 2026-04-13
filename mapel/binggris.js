const materi = {
  judul: "English Phase F: Grammar, Text Types & Vocabulary",
  deskripsi: `This material covers all topics in the Phase F English Blueprint including Parts of Speech, Tenses, Narrative Text, Procedural Text, Analytical Exposition, and Medical Vocabulary.

    **PARTS OF SPEECH**:
    - Nouns: words that name a person, place, thing, or idea. (doctor, hospital, health)
    - Adjectives: words that describe or modify nouns. (acute, chronic, effective)
    - Adverbs: words that modify verbs, adjectives, or other adverbs. (carefully, quickly, extremely)
    - Prepositions: words that show the relationship between a noun/pronoun and another word. (in, on, at, by, for, with, through, between)

    **TENSES**:
    Simple Present: Subject + V1/Vs — for habits, facts, general truths.
    Simple Past: Subject + V2 — for completed actions in the past.
    Present Perfect: Subject + have/has + V3 — for actions that started in the past and are connected to the present, or recently completed actions.
    Future (Will): Subject + will + V1 — for predictions, spontaneous decisions, promises.
    Past Perfect: Subject + had + V3 — for an action completed before another past action.
    Future Perfect: Subject + will + have + V3 — for an action that will be completed before a certain future time.

    **SIMPLE PAST vs. PRESENT PERFECT**:
    Simple Past is used with specific past time expressions: yesterday, last year, in 2010, ago.
    Present Perfect is used with: just, already, yet, ever, never, since, for, recently.

    **NARRATIVE TEXT**:
    Purpose: to entertain and/or to teach a moral lesson through a story.
    Generic Structure: Orientation (who, when, where) → Complication (problem/conflict) → Resolution (solution) → Re-orientation (optional moral/ending).
    Language Features: past tense, action verbs, time connectives (then, after that, finally), descriptive language.

    **PROCEDURAL TEXT**:
    Purpose: to describe how something is done or made through a sequence of steps.
    Generic Structure: Goal/Aim → Materials/Equipment (if needed) → Steps/Methods.
    Language Features: imperative sentences (verbs at the start), sequence words (first, then, next, finally), present tense, specific/technical vocabulary.

    **ANALYTICAL EXPOSITION TEXT**:
    Purpose: to persuade the reader that something is important or true by presenting logical arguments.
    Generic Structure: Thesis (main argument/position) → Arguments (supporting points with evidence) → Reiteration (restating the thesis/conclusion).
    Language Features: present tense, logical connectives (therefore, furthermore, however), strong/evaluative language.

    **MEDICAL VOCABULARY**:
    - Acute: (adj) severe and sudden in onset. "The patient suffered an acute pain in his chest."
    - Dispense: (v) to prepare and give out medicine. "The pharmacist will dispense the medication."
    - Empathy: (n) the ability to understand and share another's feelings. "A good doctor shows empathy toward patients."
    - Inconclusive: (adj) not leading to a definite result or conclusion. "The test results were inconclusive."
    - Alleviate: (v) to make suffering, pain, or difficulty less severe. "This medicine can alleviate the symptoms."
    - Chronic: (adj) persisting for a long time. "He has chronic back pain."
    - Diagnose: (v) to identify an illness through examination. "The doctor diagnosed her with anemia."
    - Symptom: (n) a physical or mental sign of a disease. "Fever is a common symptom of infection."
    - Prescribe: (v) to authorize the use of medicine. "The doctor prescribed antibiotics."
    - Sterile: (adj) free from bacteria or other microorganisms. "Always use sterile equipment for wound care."
  `,
};

const soal = [

  // ========== PARTS OF SPEECH (Soal 1-6) ==========
  {
    question: "Choose the correct NOUN in the sentence below:\n\n\"The _____ examined the patient carefully before making a diagnosis.\"",
    answers: [
      { text: "carefully", correct: false },
      { text: "making", correct: false },
      { text: "doctor", correct: true },
      { text: "before", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Which word functions as an ADJECTIVE in the sentence below?\n\n\"The elderly patient received immediate treatment at the rural clinic.\"",
    answers: [
      { text: "received", correct: false },
      { text: "immediate", correct: true },
      { text: "treatment", correct: false },
      { text: "clinic", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Identify the ADVERB in the following sentence:\n\n\"The nurse gently cleaned the wound and carefully applied the bandage.\"",
    answers: [
      { text: "wound", correct: false },
      { text: "cleaned", correct: false },
      { text: "gently", correct: true },
      { text: "bandage", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Choose the correct PREPOSITION to complete the sentence:\n\n\"The doctor specializes _____ treating infectious diseases.\"",
    answers: [
      { text: "on", correct: false },
      { text: "in", correct: true },
      { text: "at", correct: false },
      { text: "by", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Which word in the sentence below is a NOUN?\n\n\"Her dedication to the patients inspired the entire medical team.\"",
    answers: [
      { text: "inspired", correct: false },
      { text: "entire", correct: false },
      { text: "dedication", correct: true },
      { text: "to", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Identify the PREPOSITION in the sentence below:\n\n\"The medicine must be stored between 2 and 8 degrees Celsius.\"",
    answers: [
      { text: "stored", correct: false },
      { text: "medicine", correct: false },
      { text: "degrees", correct: false },
      { text: "between", correct: true }
    ],
    difficulty: "mudah"
  },

  // ========== TENSES - SIMPLE PRESENT & PAST (Soal 7-12) ==========
  {
    question: "Choose the correct verb form to complete the sentence:\n\n\"Every morning, the pharmacist _____ the medication requests from the ward.\"",
    answers: [
      { text: "review", correct: false },
      { text: "reviewed", correct: false },
      { text: "reviews", correct: true },
      { text: "will review", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Choose the correct tense for the sentence below:\n\n\"Last year, the hospital _____ a new emergency wing to handle more patients.\"",
    answers: [
      { text: "opens", correct: false },
      { text: "has opened", correct: false },
      { text: "opened", correct: true },
      { text: "will open", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Choose the correct form to complete the sentence:\n\n\"Scientists believe that regular handwashing _____ the spread of disease significantly.\"",
    answers: [
      { text: "reduced", correct: false },
      { text: "reduces", correct: true },
      { text: "have reduced", correct: false },
      { text: "will reduce", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Choose the correct tense:\n\n\"If the patient's condition does not improve by tomorrow, the doctor _____ a different treatment.\"",
    answers: [
      { text: "prescribed", correct: false },
      { text: "prescribes", correct: false },
      { text: "has prescribed", correct: false },
      { text: "will prescribe", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Choose the correct verb form:\n\n\"The research team _____ the new vaccine formula since early this year.\"",
    answers: [
      { text: "tests", correct: false },
      { text: "tested", correct: false },
      { text: "has been testing", correct: true },
      { text: "will test", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Choose the correct verb form:\n\n\"By the time the ambulance arrived, the paramedic _____ first aid to the victim.\"",
    answers: [
      { text: "already administered", correct: false },
      { text: "had already administered", correct: true },
      { text: "has already administered", correct: false },
      { text: "will have administered", correct: false }
    ],
    difficulty: "sedang"
  },

  // ========== TENSES CONTEXTUAL - DIALOGUE (Soal 13-15) ==========
  {
    question: "Read the dialogue below:\n\nDoctor: \"Have you ever had a reaction to penicillin?\"\nPatient: \"Yes, I _____ a severe rash when I took it three years ago.\"\n\nChoose the correct verb form for the blank.",
    answers: [
      { text: "have developed", correct: false },
      { text: "develop", correct: false },
      { text: "developed", correct: true },
      { text: "will develop", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the dialogue:\n\nNurse: \"Has the patient taken his medication this morning?\"\nDoctor: \"Yes, he _____ it about an hour ago.\"\n\nWhich answer correctly fills the blank?",
    answers: [
      { text: "has taken", correct: false },
      { text: "takes", correct: false },
      { text: "took", correct: true },
      { text: "will take", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the dialogue:\n\nPatient: \"Is this the first time you've seen this kind of infection?\"\nDoctor: \"No, actually I _____ a similar case twice before, but this one is more complex.\"\n\nWhich is the most appropriate answer?",
    answers: [
      { text: "saw", correct: false },
      { text: "see", correct: false },
      { text: "have seen", correct: true },
      { text: "had seen", correct: false }
    ],
    difficulty: "susah"
  },

  // ========== NARRATIVE TEXT (Soal 16-22) ==========
  {
    question: "Read the following text:\n\n\"Long ago in a remote village, there lived a young herbalist named Kael. When a mysterious plague swept through the land, the villagers fell ill one by one. Kael journeyed deep into the forest, seeking the rare moonflower whose petals could cure any sickness. After days of searching, he finally found it, and upon returning, he saved every life in his village.\"\n\nWhat is the MAIN PROBLEM in this narrative?",
    answers: [
      { text: "Kael was lost in the forest for many days", correct: false },
      { text: "A mysterious plague threatened the lives of the villagers", correct: true },
      { text: "The moonflower was too rare to be found", correct: false },
      { text: "Kael did not know how to treat illness", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Based on the narrative about Kael the herbalist, what can be IMPLICITLY inferred about Kael's character?",
    answers: [
      { text: "He was selfish and only cared about personal glory", correct: false },
      { text: "He was cowardly and needed others to help him", correct: false },
      { text: "He was brave and selflessly devoted to helping others", correct: true },
      { text: "He was reckless and acted without thinking", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the passage:\n\n\"The shaman handed the ancient scroll to the young healer. 'This parchment holds the knowledge of our ancestors,' she said solemnly. The healer's hands trembled as he unrolled the fragile document.\"\n\nThe word 'solemnly' is closest in meaning to ...",
    answers: [
      { text: "Happily and excitedly", correct: false },
      { text: "Seriously and with deep sincerity", correct: true },
      { text: "Quietly and without expression", correct: false },
      { text: "Angrily and with disappointment", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the following narrative excerpt:\n\n\"Despite having the cure in his hands, Kael chose to give the last dose to an elderly woman he did not know, knowing it meant he would suffer the illness himself.\"\n\nWhat is the MORAL VALUE of this narrative?",
    answers: [
      { text: "Knowledge is more powerful than any medicine", correct: false },
      { text: "True healing requires sacrifice and compassion for others", correct: true },
      { text: "Elderly people should always be given priority in healthcare", correct: false },
      { text: "A healer should never risk their own health for others", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Which of the following sentences is the BEST orientation for a narrative text about a village healer?",
    answers: [
      { text: "First, gather the medicinal herbs from the forest floor.", correct: false },
      { text: "Vaccination is important to prevent the spread of disease.", correct: false },
      { text: "Many years ago, in a quiet valley surrounded by misty mountains, a gifted healer named Arya lived among her people.", correct: true },
      { text: "Therefore, we can conclude that traditional medicine still plays an important role today.", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the sentence:\n\n\"The healer's remedy worked like a beacon of light in the darkest of nights — it gave the suffering villagers their hope back.\"\n\nThe figurative language used in this sentence is ...",
    answers: [
      { text: "Hyperbole", correct: false },
      { text: "Personification", correct: false },
      { text: "Simile", correct: true },
      { text: "Irony", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "What is the PRIMARY PURPOSE of a narrative text?",
    answers: [
      { text: "To describe how to perform a specific procedure step by step", correct: false },
      { text: "To persuade readers to accept a certain point of view", correct: false },
      { text: "To entertain readers and/or convey a moral lesson through a story", correct: true },
      { text: "To present factual information about a specific topic", correct: false }
    ],
    difficulty: "mudah"
  },

  // ========== PROCEDURAL TEXT (Soal 23-29) ==========
  {
    question: "Read the procedural text below:\n\n\"How to Perform CPR\nCPR (Cardiopulmonary Resuscitation) is an emergency procedure used when someone's heart stops beating.\n\nSteps:\n1. Ensure the scene is safe.\n2. Check if the person is responsive.\n3. Call for emergency help.\n4. Begin chest compressions.\n5. Give rescue breaths if trained.\"\n\nWhat is the PURPOSE of this procedural text?",
    answers: [
      { text: "To explain the history of CPR in medical science", correct: false },
      { text: "To describe how to correctly perform CPR in an emergency", correct: true },
      { text: "To argue that CPR should be taught in all schools", correct: false },
      { text: "To tell a story about someone who needed CPR", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Based on the CPR procedural text, which step must be done IMMEDIATELY after ensuring the scene is safe?",
    answers: [
      { text: "Begin chest compressions", correct: false },
      { text: "Give rescue breaths", correct: false },
      { text: "Check if the person is responsive", correct: true },
      { text: "Call for emergency help immediately", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the CPR text again. Why is it important to 'ensure the scene is safe' as the very FIRST step?\n\n(Implicit reasoning question)",
    answers: [
      { text: "Because CPR is more effective when performed in a clean area", correct: false },
      { text: "To avoid putting the rescuer in danger while trying to help the victim", correct: true },
      { text: "Because emergency services require the scene to be safe before responding", correct: false },
      { text: "To prevent the victim from moving to a more dangerous location", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "In the CPR procedural text, what does the word 'responsive' mean in the phrase 'Check if the person is responsive'?",
    answers: [
      { text: "Breathing rapidly and irregularly", correct: false },
      { text: "Able to react or answer to stimulation (conscious)", correct: true },
      { text: "In need of immediate chest compressions", correct: false },
      { text: "Free from any visible injury", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Which of the following is a characteristic feature of PROCEDURAL TEXT language?",
    answers: [
      { text: "Uses past tense and tells events in sequence", correct: false },
      { text: "Uses imperative sentences and sequence connectors like 'first', 'then', 'finally'", correct: true },
      { text: "Uses logical arguments and evidence to persuade", correct: false },
      { text: "Uses descriptive language to build atmosphere", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Which sentence is MOST appropriate as an opening sentence for a procedural text titled 'How to Perform a Basic Wound Dressing Change'?",
    answers: [
      { text: "Once upon a time, a nurse carefully changed a patient's dressing.", correct: false },
      { text: "Changing a wound dressing properly is crucial to prevent infection and promote healing.", correct: true },
      { text: "Many healthcare workers believe that wound care is the most important skill.", correct: false },
      { text: "The wound was red and swollen after the nurse failed to change the dressing.", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "A procedural text about wound dressing includes the step: 'Apply the sterile gauze pad directly over the wound.'\n\nWhy is it specifically stated that the gauze must be STERILE?",
    answers: [
      { text: "Because sterile gauze is softer and more comfortable for the patient", correct: false },
      { text: "To prevent introducing bacteria into the wound which could cause infection", correct: true },
      { text: "Because non-sterile gauze will not stick properly to the wound", correct: false },
      { text: "To make the dressing look neat and professional", correct: false }
    ],
    difficulty: "susah"
  },

  // ========== ANALYTICAL EXPOSITION (Soal 30-37) ==========
  {
    question: "Read the following text:\n\n\"Vaccination is one of the most powerful tools in modern medicine. It has successfully eradicated diseases such as smallpox and significantly reduced the incidence of polio worldwide. Without widespread vaccination, communities remain vulnerable to dangerous outbreaks.\"\n\nWhat is the MAIN ARGUMENT (thesis) of this text?",
    answers: [
      { text: "Smallpox and polio are the most dangerous diseases in history", correct: false },
      { text: "Vaccination is one of the most powerful and essential tools in modern medicine", correct: true },
      { text: "Communities that do not vaccinate will always suffer from disease outbreaks", correct: false },
      { text: "Modern medicine has found many tools to fight disease", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Based on the vaccination text, what DETAILED INFORMATION supports the main argument?",
    answers: [
      { text: "Many people are afraid of vaccines due to side effects", correct: false },
      { text: "Doctors around the world recommend annual check-ups", correct: false },
      { text: "Vaccination eradicated smallpox and greatly reduced polio cases worldwide", correct: true },
      { text: "The government funds vaccination programs across the country", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "In the vaccination text, what is the AUTHOR'S PURPOSE in writing this passage?",
    answers: [
      { text: "To entertain readers with interesting medical facts", correct: false },
      { text: "To describe the history of vaccines from the 18th century", correct: false },
      { text: "To persuade readers that vaccination is critical for public health", correct: true },
      { text: "To explain the step-by-step process of how vaccines are made", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read this sentence from the vaccination text:\n\n\"Without widespread vaccination, communities remain vulnerable to dangerous outbreaks.\"\n\nWhat is the IMPLICIT MEANING of this sentence?",
    answers: [
      { text: "Communities that vaccinate will never experience any disease", correct: false },
      { text: "Vaccination is an individual choice that does not affect the community", correct: false },
      { text: "The health of the whole community depends on enough people being vaccinated", correct: true },
      { text: "Only dangerous diseases require vaccination programs", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "The TONE of the vaccination analytical exposition text is best described as ...",
    answers: [
      { text: "Humorous and entertaining", correct: false },
      { text: "Sad and emotional", correct: false },
      { text: "Authoritative and persuasive", correct: true },
      { text: "Doubtful and uncertain", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Which of the following is the CORRECT generic structure of an analytical exposition text?",
    answers: [
      { text: "Orientation → Complication → Resolution", correct: false },
      { text: "Goal → Materials → Steps", correct: false },
      { text: "Thesis → Arguments → Reiteration", correct: true },
      { text: "General Classification → Description", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Which sentence would be the best REITERATION (conclusion) for an analytical exposition about the importance of vaccination?",
    answers: [
      { text: "First, ensure the vaccine is stored at the correct temperature.", correct: false },
      { text: "Long ago, people suffered greatly from diseases like smallpox.", correct: false },
      { text: "In conclusion, vaccination remains a vital and non-negotiable pillar of public health that saves millions of lives.", correct: true },
      { text: "Some people experience mild side effects such as redness or swelling after vaccination.", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Which of the following language features is MOST characteristic of an analytical exposition text?",
    answers: [
      { text: "Past tense verbs and time connectives like 'then' and 'after that'", correct: false },
      { text: "Imperative verbs and sequence markers like 'first', 'next', 'finally'", correct: false },
      { text: "Logical connectives like 'therefore', 'furthermore', and evaluative language", correct: true },
      { text: "Descriptive adjectives and sensory language to create vivid images", correct: false }
    ],
    difficulty: "sedang"
  },

  // ========== MIXED TENSES & GRAMMAR (Soal 38-42) ==========
  {
    question: "Choose the correct tense:\n\n\"By the end of this decade, researchers _____ a cure for several currently incurable diseases.\"",
    answers: [
      { text: "have discovered", correct: false },
      { text: "discovered", correct: false },
      { text: "will have discovered", correct: true },
      { text: "had discovered", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Choose the correct sentence using PAST PERFECT:\n\nThe surgeon could not begin the operation because ...",
    answers: [
      { text: "the patient did not sign the consent form yet", correct: false },
      { text: "the patient has not signed the consent form", correct: false },
      { text: "the patient had not yet signed the consent form", correct: true },
      { text: "the patient will not sign the consent form", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Choose the CORRECT sentence:\n\nAfter _____ the wound, the nurse _____ a sterile bandage.",
    answers: [
      { text: "cleaning / applies", correct: false },
      { text: "cleaned / had applied", correct: false },
      { text: "cleaning / applied", correct: true },
      { text: "cleans / applied", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Identify the ERROR in the sentence below:\n\n\"The patient has visited the clinic yesterday for a routine check-up.\"",
    answers: [
      { text: "The word 'patient' should be 'patients'", correct: false },
      { text: "'has visited' should be 'visited' because 'yesterday' requires simple past tense", correct: true },
      { text: "'routine check-up' should be 'regular check-up'", correct: false },
      { text: "The sentence has no error", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Choose the correct sequence of tenses:\n\n\"The doctor explained that the results _____ inconclusive and that further tests _____ needed.\"",
    answers: [
      { text: "are / will be", correct: false },
      { text: "were / would be", correct: true },
      { text: "have been / are", correct: false },
      { text: "had been / were", correct: false }
    ],
    difficulty: "susah"
  },

  // ========== VOCABULARY & MEDICAL CONTEXT (Soal 43-50) ==========
  {
    question: "Choose the correct meaning of the word 'acute' in the medical context:\n\n\"The patient was admitted to the ICU with acute respiratory failure.\"",
    answers: [
      { text: "Chronic and long-lasting", correct: false },
      { text: "Mild and easily treated", correct: false },
      { text: "Severe and sudden in onset", correct: true },
      { text: "Contagious and infectious", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "What does the word 'dispense' mean in the sentence below?\n\n\"The pharmacist will dispense the prescribed antibiotics to the patient.\"",
    answers: [
      { text: "To destroy or remove medicine", correct: false },
      { text: "To prepare and give out medication", correct: true },
      { text: "To test or analyze the medicine", correct: false },
      { text: "To record the medicine in the patient's file", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Which sentence uses the word 'empathy' CORRECTLY?",
    answers: [
      { text: "The surgeon used empathy to stitch the wound closed.", correct: false },
      { text: "Empathy is a medical device used to measure heart rate.", correct: false },
      { text: "Good healthcare providers show empathy by truly understanding their patients' feelings.", correct: true },
      { text: "The doctor prescribed empathy as part of the treatment plan.", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "What does 'inconclusive' mean in the following sentence?\n\n\"The biopsy results were inconclusive, so the doctor ordered additional testing.\"",
    answers: [
      { text: "Clearly showing the presence of cancer", correct: false },
      { text: "Not providing a definite answer or result", correct: true },
      { text: "Confirmed to be accurate and final", correct: false },
      { text: "Too painful to be performed again", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Choose the correct meaning of 'alleviate' in context:\n\n\"The new medication was designed to alleviate chronic joint pain in elderly patients.\"",
    answers: [
      { text: "To completely cure a disease", correct: false },
      { text: "To make pain or suffering less severe", correct: true },
      { text: "To diagnose the cause of the pain", correct: false },
      { text: "To increase the intensity of treatment", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the sentence and choose the best word to fill the blank:\n\n\"After weeks of testing, the clinical trial produced _____ results — no clear conclusion could be drawn about the drug's effectiveness.\"\n\nThe best medical vocabulary word for the blank is ...",
    answers: [
      { text: "acute", correct: false },
      { text: "empathetic", correct: false },
      { text: "inconclusive", correct: true },
      { text: "sterile", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "A medical report states: 'The patient presents with chronic fatigue, recurring headaches, and intermittent fever.'\n\nBased on this context, what does 'chronic' mean?",
    answers: [
      { text: "Severe and immediately life-threatening", correct: false },
      { text: "Contagious and spread by contact", correct: false },
      { text: "Persisting for a long time or constantly recurring", correct: true },
      { text: "Sudden and unexpected in appearance", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the following medical scenario:\n\n\"A junior doctor prescribed a high dose of painkillers to a patient. However, the senior doctor intervened, stating that the dose would worsen — not alleviate — the patient's condition.\"\n\nBased on this scenario, what can be inferred about the word 'alleviate'?",
    answers: [
      { text: "It means to cause harm or make a condition worse", correct: false },
      { text: "It means to completely eliminate a disease", correct: false },
      { text: "It means to reduce or ease discomfort, which was NOT achieved by the high dose", correct: true },
      { text: "It is a synonym for 'prescribe' in a medical context", correct: false }
    ],
    difficulty: "susah"
  }
];
