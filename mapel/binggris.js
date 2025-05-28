const materi = {
  judul: "English: Reading Comprehension and Conversation Analysis",
  deskripsi: `This material focuses on understanding written texts and conversations about technology and industry, with emphasis on vocabulary, grammar, and comprehension skills.
  
  **Text 1: The Electrical Industry: Powering Progress**
  
  The electrical industry is essential for modern development, providing energy for homes, businesses, and technology. Some argue that newer industries, like IT, are more important, but without electricity, these fields wouldn't function.
  
  This industry drives economic growth, supports infrastructure, and fosters innovation. While concerns about environmental impact exist, advancements in renewable energy are transforming the sector into a force for sustainability.
  
  Moreover, the electrical industry plays a crucial role in improving global connectivity. Reliable electrical infrastructure enables communication networks, digital services, and smart technology, making everyday life more efficient and interconnected.
  
  Additionally, continued investment in electrical technology leads to groundbreaking advancements, such as smart grids and energy storage solutions. These innovations improve efficiency and reliability, ensuring a sustainable energy future.
  
  In conclusion, the electrical industry remains a key contributor to progress, powering economies and shaping the future.
  
  **Text 2: Conversation**
  
  Alex: "Hey, have you noticed how rapidly the electronics industry is evolving? It feels like every month there's a new breakthrough."
  
  Jordan: "Absolutely! Especially with advancements in AI and semiconductor technology. Companies are racing to develop more efficient chips while also dealing with global supply chain issues."
  
  Alex: "Right? The push for smaller, faster, and more energy-efficient processors is intense. And then there is the whole sustainability aspect. Companies are trying to balance performance with environmental impact."
  
  Jordan: "That's a big challenge. With e-waste increasing, recycling and proper disposal of electronics are becoming critical. But I'm excited about innovations like biodegradable circuit boards and modular devices that extend product lifespans."
  
  Alex: "Agreed! Also, have you seen how consumer electronics are integrating AI? Smart homes, wearable tech, and even AI-driven customer support systems are changing the way we interact with technology."
  
  Jordan: "It's fascinating. And let's not forget electric vehicles—they rely heavily on advancements in battery tech, power electronics, and efficient semiconductors."
  
  Alex: "It's all connected! The electronic industry is driving innovation across multiple sectors."
  `
};

const soal = [
  {
    question: "Read the following excerpt from Text 1:\n\n\"The electrical industry is essential for modern development, providing energy for homes, businesses, and technology.\"\n\nAccording to this text, what is essential for modern development?",
    answers: [
      { text: "The IT industry", correct: false },
      { text: "The electrical industry", correct: true },
      { text: "Smart technology", correct: false },
      { text: "Renewable energy", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Read the following excerpt from Text 1:\n\n\"The electrical industry is essential for modern development, providing energy for homes, businesses, and technology.\"\n\nWhich word in this sentence is a synonym for 'important'?",
    answers: [
      { text: "Essential", correct: true },
      { text: "Modern", correct: false },
      { text: "Reliable", correct: false },
      { text: "Sustainable", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Read the following excerpt from Text 1:\n\n\"Some argue that newer industries, like IT, are more important, but without electricity, these fields wouldn't function.\"\n\nWhich grammatical structure is used in this sentence?",
    answers: [
      { text: "Present conditional", correct: false },
      { text: "Second conditional", correct: true },
      { text: "Past perfect", correct: false },
      { text: "Future continuous", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Based on Text 1:\n\n\"This industry drives economic growth, supports infrastructure, and fosters innovation. While concerns about environmental impact exist, advancements in renewable energy are transforming the sector into a force for sustainability.\"\n\nWhich of the following is NOT mentioned as a benefit of the electrical industry?",
    answers: [
      { text: "Supporting economic growth", correct: false },
      { text: "Improving global connectivity", correct: false },
      { text: "Creating job opportunities", correct: true },
      { text: "Enabling technological innovation", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the following excerpt from Text 1:\n\n\"Additionally, continued investment in electrical technology leads to groundbreaking advancements, such as smart grids and energy storage solutions.\"\n\nWhat do 'groundbreaking advancements' refer to in this context?",
    answers: [
      { text: "Smart grids and energy storage solutions", correct: true },
      { text: "IT and communication technologies", correct: false },
      { text: "Economic growth and infrastructure", correct: false },
      { text: "Digital services and smart technology", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the following excerpt from Text 2:\n\n\"Jordan: \"Absolutely! Especially with advancements in AI and semiconductor technology. Companies are racing to develop more efficient chips while also dealing with global supply chain issues.\"\"\n\nIn this conversation, who mentions AI and semiconductor technology?",
    answers: [
      { text: "Alex", correct: false },
      { text: "Jordan", correct: true },
      { text: "Both Alex and Jordan", correct: false },
      { text: "Neither Alex nor Jordan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Read the following excerpt from Text 2:\n\n\"Jordan: \"That's a big challenge. With e-waste increasing, recycling and proper disposal of electronics are becoming critical. But I'm excited about innovations like biodegradable circuit boards and modular devices that extend product lifespans.\"\"\n\nWhat environmental issue is specifically mentioned in this part of the conversation?",
    answers: [
      { text: "Air pollution", correct: false },
      { text: "Carbon emissions", correct: false },
      { text: "E-waste", correct: true },
      { text: "Water contamination", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Read the following excerpt from Text 2:\n\n\"Jordan: \"That's a big challenge. With e-waste increasing, recycling and proper disposal of electronics are becoming critical. But I'm excited about innovations like biodegradable circuit boards and modular devices that extend product lifespans.\"\"\n\nFrom this text, which innovation helps extend product lifespans?",
    answers: [
      { text: "AI-driven customer support systems", correct: false },
      { text: "Efficient semiconductors", correct: false },
      { text: "Smart homes", correct: false },
      { text: "Modular devices", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the following excerpt from Text 2:\n\n\"Alex: \"It's all connected! The electronic industry is driving innovation across multiple sectors.\"\"\n\nThe phrase 'It's all connected!' in this context implies that:",
    answers: [
      { text: "All electronic devices are physically connected", correct: false },
      { text: "Alex and Jordan agree on everything", correct: false },
      { text: "The electronic industry influences multiple sectors", correct: true },
      { text: "Electronic devices require internet connectivity", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the following excerpt from Text 2:\n\n\"Alex: \"Right? The push for smaller, faster, and more energy-efficient processors is intense. And then there is the whole sustainability aspect. Companies are trying to balance performance with environmental impact.\"\"\n\nWhat is the main challenge mentioned in this part of the conversation regarding the electronics industry?",
    answers: [
      { text: "Balancing performance with environmental impact", correct: true },
      { text: "Creating faster processors", correct: false },
      { text: "Developing AI technologies", correct: false },
      { text: "Making smaller devices", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the following excerpt from Text 1:\n\n\"Some argue that newer industries, like IT, are more important, but without electricity, these fields wouldn't function.\"\n\nWhich grammatical structure is used in the second part of this sentence?",
    answers: [
      { text: "Present conditional", correct: false },
      { text: "Second conditional", correct: true },
      { text: "Past perfect", correct: false },
      { text: "Future continuous", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Read the following excerpt from Text 1:\n\n\"While concerns about environmental impact exist, advancements in renewable energy are transforming the sector into a force for sustainability.\"\n\nWhat type of sentence is this?",
    answers: [
      { text: "Simple sentence", correct: false },
      { text: "Compound sentence", correct: false },
      { text: "Complex sentence", correct: true },
      { text: "Compound-complex sentence", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Read the following excerpt from Text 1:\n\n\"In conclusion, the electrical industry remains a key contributor to progress, powering economies and shaping the future.\"\n\nIn this context, what is described as 'a key contributor to progress'?",
    answers: [
      { text: "Smart grids", correct: false },
      { text: "Energy storage solutions", correct: false },
      { text: "Modern development", correct: false },
      { text: "The electrical industry", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "After reading Text 2, which includes mentions of:\n\n\"Smart homes, wearable tech, and even AI-driven customer support systems\" and \"electric vehicles—they rely heavily on advancements in battery tech, power electronics, and efficient semiconductors.\"\n\nWhich technology is NOT mentioned as relying on advancements in the electronics industry?",
    answers: [
      { text: "Smart homes", correct: false },
      { text: "Wearable tech", correct: false },
      { text: "Electric vehicles", correct: false },
      { text: "Quantum computing", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the following excerpt from Text 2:\n\n\"Jordan: \"Absolutely! Especially with advancements in AI and semiconductor technology. Companies are racing to develop more efficient chips while also dealing with global supply chain issues.\"\"\n\nWhat does the phrase 'racing to develop' suggest about companies in the electronics industry?",
    answers: [
      { text: "They are competing intensely", correct: true },
      { text: "They are physically moving quickly", correct: false },
      { text: "They are carelessly hurrying", correct: false },
      { text: "They are participating in motorsports", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the following excerpt from Text 2:\n\n\"Jordan: \"That's a big challenge. With e-waste increasing, recycling and proper disposal of electronics are becoming critical. But I'm excited about innovations like biodegradable circuit boards and modular devices that extend product lifespans.\"\"\n\nFrom this text, what can be inferred about biodegradable circuit boards?",
    answers: [
      { text: "They are already widely used", correct: false },
      { text: "They are a potential solution to e-waste", correct: true },
      { text: "They are less efficient than traditional circuit boards", correct: false },
      { text: "They are too expensive to produce", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "After reading the complete Text 1, which begins with \"The electrical industry is essential for modern development\" and ends with \"powering economies and shaping the future,\" which of the following best describes the tone of this text?",
    answers: [
      { text: "Critical and skeptical", correct: false },
      { text: "Humorous and entertaining", correct: false },
      { text: "Informative and persuasive", correct: true },
      { text: "Pessimistic and alarming", correct: false }
    ],
    difficulty: "susah"
  }
];
