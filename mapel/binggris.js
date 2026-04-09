const materi = {
  judul: "English: Report Text",
  deskripsi: `This material covers Report Text — its social function, generic structure, and language features.

    **REPORT TEXT**:
    A report text is a text that presents factual information about something in general. It aims to describe the way things are, based on observation and research.

    **Social Function**:
    To describe the general characteristics of something — animals, plants, natural phenomena, technology, etc. — in a scientific and objective way.

    **Generic Structure of Report Text**:
    1. General Classification: Introduces and identifies the subject being reported (what it is, its category/group).
    2. Description: Describes the subject in detail — its parts, behavior, habitat, function, etc.

    **Difference from Descriptive Text**:
    Report text describes things in general (e.g., "Dolphins are..."), while descriptive text describes a specific thing (e.g., "My dolphin, Flipper, is...").

    **Language Features**:
    - Simple Present Tense: Used to state facts (e.g., "Whales live in the ocean.")
    - General Nouns: Refers to a class of things, not a specific one (e.g., "birds," "volcanoes," not "my bird")
    - Relational Verbs: is, are, have, has — used to describe characteristics
    - Technical/Scientific Terms: Specific vocabulary related to the subject (e.g., "photosynthesis," "mammal," "nocturnal")
    - Adjectives: Words that describe qualities or characteristics (e.g., "large," "carnivorous," "transparent")
    - Timeless present: Facts that are always true

    **Topics commonly found in Report Text**:
    - Animals (e.g., sharks, eagles, komodo dragons)
    - Plants (e.g., rafflesia, mangrove trees)
    - Natural Phenomena (e.g., earthquakes, tsunamis, rainforests)
    - Technology and objects
  `,
};

const soal = [
  {
    question: "What is the main purpose (social function) of a report text?",
    answers: [
      { text: "To entertain readers with an interesting story about animals", correct: false },
      { text: "To present factual information about something in general based on observation", correct: true },
      { text: "To persuade readers to protect the environment", correct: false },
      { text: "To describe the writer's personal experience with nature", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Read the following excerpt:\n\n\"Sharks are cartilaginous fish that have lived in the oceans for millions of years. They belong to the class Chondrichthyes and are found in every ocean on Earth.\"\n\nThis paragraph is the _____ part of a report text.",
    answers: [
      { text: "Description", correct: false },
      { text: "Conclusion", correct: false },
      { text: "General Classification", correct: true },
      { text: "Orientation", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Read the following text:\n\n\"Sharks have a streamlined body that helps them swim efficiently. Their skin is covered with tiny scales called dermal denticles. Most sharks are carnivorous and use their sharp teeth to catch prey.\"\n\nThis paragraph is the _____ part of a report text.",
    answers: [
      { text: "General Classification", correct: false },
      { text: "Description", correct: true },
      { text: "Resolution", correct: false },
      { text: "Reorientation", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Choose the correct verb form to complete this sentence from a report text:\n\n\"Eagles _____ powerful birds of prey that _____ excellent eyesight.\"",
    answers: [
      { text: "is / has", correct: false },
      { text: "are / have", correct: true },
      { text: "were / had", correct: false },
      { text: "be / having", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the following text and answer the question.\n\n\"The Komodo dragon is the world's largest living lizard. It can grow up to 3 meters long and weigh up to 70 kilograms. Komodo dragons are carnivores and use their forked tongues to detect prey from up to 9.5 kilometers away.\"\n\nHow does the Komodo dragon detect its prey?",
    answers: [
      { text: "By using its sharp eyes to spot movement", correct: false },
      { text: "By sensing vibrations in the ground", correct: false },
      { text: "By using its forked tongue to detect smell", correct: true },
      { text: "By listening to sounds with its large ears", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the following paragraph:\n\n\"Volcanoes are openings in the Earth's crust through which molten rock, ash, and gases escape. They are commonly found along tectonic plate boundaries. There are more than 1,500 potentially active volcanoes worldwide.\"\n\nWhat is the main idea of this paragraph?",
    answers: [
      { text: "The danger of volcanic eruptions to human life", correct: false },
      { text: "A general description of what volcanoes are and where they are found", correct: true },
      { text: "The history of famous volcanic eruptions in the world", correct: false },
      { text: "How scientists predict volcanic eruptions", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read this sentence from a report text:\n\n\"The mangrove tree is highly resilient, able to thrive in brackish coastal environments.\"\n\nThe word 'brackish' in the sentence most likely means...",
    answers: [
      { text: "Extremely cold and frozen", correct: false },
      { text: "Slightly salty, a mix of salt and fresh water", correct: true },
      { text: "Completely dry and desert-like", correct: false },
      { text: "Very deep and dark", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Which sentence correctly uses a GENERAL NOUN as found in a report text?",
    answers: [
      { text: "My cat, Whiskers, loves to sleep all day.", correct: false },
      { text: "That specific tiger in the zoo is very old.", correct: false },
      { text: "Bats are the only mammals capable of sustained flight.", correct: true },
      { text: "The eagle I saw yesterday had a white tail.", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the following text:\n\n\"Coral reefs are underwater ecosystems built by colonies of tiny animals called polyps. They cover less than 1% of the ocean floor yet support around 25% of all marine species. Scientists call them the 'rainforests of the sea' because of their incredible biodiversity.\"\n\nWhat can be inferred from the text?",
    answers: [
      { text: "Coral reefs are not important because they cover a small area of the ocean", correct: false },
      { text: "Despite their small size, coral reefs are extremely important for ocean life", correct: true },
      { text: "Marine life can only survive in coral reef environments", correct: false },
      { text: "Rainforests and coral reefs are exactly the same ecosystem", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Read the following text:\n\n\"The Sun is a medium-sized star at the center of our solar system. It is composed mainly of hydrogen and helium. Nuclear fusion reactions in the Sun's core produce enormous amounts of energy that reach Earth as heat and light. Without the Sun, life on Earth would not be possible.\"\n\nWhat is the best conclusion for this text?",
    answers: [
      { text: "The Sun will eventually run out of hydrogen and explode", correct: false },
      { text: "The Sun is the most beautiful object in the solar system", correct: false },
      { text: "The Sun is a vital energy source that makes life on Earth possible", correct: true },
      { text: "Nuclear fusion is a dangerous process that humans should avoid", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Read the following text:\n\n\"The Rafflesia arnoldii is the world's largest individual flower. It has no leaves, stems, or roots and lives entirely as a parasite inside the tissue of a host vine. The flower takes up to nine months to develop and blooms for only 5 to 7 days.\"\n\nWhat specific information does the text give about Rafflesia's blooming period?",
    answers: [
      { text: "It blooms for up to nine months", correct: false },
      { text: "It blooms for only 5 to 7 days after developing", correct: true },
      { text: "It blooms every year during the rainy season", correct: false },
      { text: "It blooms as long as the host vine is alive", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read this sentence:\n\n\"During photosynthesis, plants convert sunlight into glucose using chlorophyll.\"\n\nWhat does the technical term 'chlorophyll' refer to?",
    answers: [
      { text: "The process by which plants make food", correct: false },
      { text: "The sugar produced by plants from sunlight", correct: false },
      { text: "The green pigment in plants that absorbs sunlight", correct: true },
      { text: "The roots that absorb water from the soil", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Which of the following shows the CORRECT order of a report text structure?",
    answers: [
      { text: "Description → General Classification → Conclusion", correct: false },
      { text: "Orientation → Complication → Resolution", correct: false },
      { text: "General Classification → Description", correct: true },
      { text: "Thesis → Arguments → Reiteration", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Read the following text:\n\n\"Earthquakes are sudden shaking or trembling of the Earth's surface caused by the movement of tectonic plates. They can occur on land or underwater and vary greatly in intensity. Underwater earthquakes can trigger tsunamis.\"\n\nWhat is the main topic of this text?",
    answers: [
      { text: "The damage caused by natural disasters", correct: false },
      { text: "How to survive an earthquake", correct: false },
      { text: "A factual description of earthquakes", correct: true },
      { text: "The history of major earthquakes in Asia", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Read the following text:\n\n\"Honeybees are social insects that live in colonies of up to 60,000 individuals. Each colony has one queen, thousands of female worker bees, and hundreds of male drones. Worker bees can travel up to 8 kilometers to collect nectar and pollen. Bees are essential pollinators that support global food production.\"\n\nWhat is the best general overview of this text?",
    answers: [
      { text: "The text explains why bees should be protected by law", correct: false },
      { text: "The text describes the social structure and important role of honeybees", correct: true },
      { text: "The text tells the story of one particular bee colony", correct: false },
      { text: "The text argues that honeybees are more important than other insects", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Which sentence contains a correct use of a RELATIONAL VERB as typically found in a report text?",
    answers: [
      { text: "The cheetah ran across the savanna yesterday.", correct: false },
      { text: "Scientists are studying the migration of whales.", correct: false },
      { text: "Dolphins are highly intelligent marine mammals that have complex social behavior.", correct: true },
      { text: "The zookeeper fed the giraffe every morning.", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Read the following paragraph:\n\n\"The Amazon rainforest covers over 5.5 million square kilometers across nine countries in South America. It produces 20% of the world's oxygen and is home to 10% of all species on Earth. The forest plays a critical role in regulating the global climate.\"\n\nWhat is the main information of this paragraph?",
    answers: [
      { text: "The Amazon rainforest is being destroyed by deforestation", correct: false },
      { text: "The Amazon rainforest is a vast and globally vital ecosystem", correct: true },
      { text: "Nine countries are responsible for protecting the Amazon", correct: false },
      { text: "The Amazon rainforest only produces oxygen for South America", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the following text:\n\n\"Penguins are flightless birds that live primarily in the Southern Hemisphere. They have a layer of fat and waterproof feathers to survive extremely cold temperatures. Most penguin species are monogamous, meaning they mate with one partner for life.\"\n\nWhat can be inferred about penguins from the text?",
    answers: [
      { text: "Penguins cannot survive outside of Antarctica", correct: false },
      { text: "Penguins have adapted physically and behaviorally to survive harsh conditions", correct: true },
      { text: "All penguins live in groups of exactly two", correct: false },
      { text: "Penguins are the only birds that cannot fly", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Choose the correct adjective to complete this sentence from a report text:\n\n\"The blue whale is the _____ animal ever known to have lived on Earth, reaching lengths of up to 30 meters.\"",
    answers: [
      { text: "oldest", correct: false },
      { text: "fastest", correct: false },
      { text: "largest", correct: true },
      { text: "rarest", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the complete text below:\n\n\"Mangrove forests are coastal ecosystems found in tropical and subtropical regions. They consist of salt-tolerant trees and shrubs that grow in tidal areas. Mangroves provide habitat for hundreds of species, protect coastlines from erosion, and act as nurseries for many fish species. They also absorb carbon dioxide, making them important in fighting climate change.\"\n\nWhat is the best overall conclusion of this text?",
    answers: [
      { text: "Mangrove forests are only important because they prevent coastal erosion", correct: false },
      { text: "Mangrove forests should be replaced with more productive land use", correct: false },
      { text: "Mangrove forests are highly valuable ecosystems that benefit both wildlife and the environment", correct: true },
      { text: "Mangrove forests are only found in one specific region of the world", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Which of the following is the best example of a report text title?",
    answers: [
      { text: "My Amazing Trip to See the Whales", correct: false },
      { text: "Save the Dolphins — Why We Must Act Now!", correct: false },
      { text: "Tigers: Characteristics and Habitat", correct: true },
      { text: "The Day I Found a Rare Bird in My Garden", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Read the following text:\n\n\"Tsunamis are large ocean waves usually caused by underwater earthquakes, volcanic eruptions, or landslides. Unlike normal waves, tsunamis have very long wavelengths and can travel across entire ocean basins at speeds of up to 800 km/h. In deep water, they are barely noticeable, but as they approach shore, they grow dramatically in height.\"\n\nWhat is the main idea of the third sentence?",
    answers: [
      { text: "Tsunamis are most dangerous in deep water", correct: false },
      { text: "Tsunamis are invisible until they reach the shore", correct: false },
      { text: "Tsunamis change dramatically in height as they move from deep to shallow water", correct: true },
      { text: "Tsunamis travel slowly in shallow water", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read this sentence:\n\n\"Crocodiles are apex predators, meaning no other animals hunt them in their natural habitat.\"\n\nThe word 'apex' in the technical term 'apex predator' most likely means...",
    answers: [
      { text: "The smallest or weakest", correct: false },
      { text: "At the top or highest level", correct: true },
      { text: "The most endangered", correct: false },
      { text: "The most aggressive", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Which sentence is written in the correct style for a report text?",
    answers: [
      { text: "Yesterday, I watched a documentary about how spiders spin their webs.", correct: false },
      { text: "Spiders are arachnids that produce silk to build webs used for catching prey.", correct: true },
      { text: "I think spiders are fascinating because of the way they trap insects.", correct: false },
      { text: "The spider in my room last night was spinning a beautiful web.", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the following text:\n\n\"Chameleons are reptiles best known for their ability to change color. Contrary to popular belief, they do not change color to camouflage themselves. Instead, color change is used to communicate mood, regulate body temperature, and signal to other chameleons.\"\n\nWhat can be inferred from the text?",
    answers: [
      { text: "Chameleons change color only when they are in danger", correct: false },
      { text: "The common belief about why chameleons change color is incorrect", correct: true },
      { text: "Chameleons are the only animals that can change color", correct: false },
      { text: "Chameleons change color because of the food they eat", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Read the following text:\n\n\"Black holes are regions in space where gravity is so strong that nothing — not even light — can escape. They form when massive stars collapse at the end of their life cycle. Black holes cannot be seen directly, but their presence is detected by the effect they have on nearby matter and light.\"\n\nWhat is the best conclusion for this text?",
    answers: [
      { text: "Black holes are dangerous to all planets in the solar system", correct: false },
      { text: "Black holes are invisible and undetectable by any scientific instrument", correct: false },
      { text: "Black holes are powerful invisible phenomena detected through their gravitational effects", correct: true },
      { text: "Black holes are formed when planets collide with each other", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Read the following text:\n\n\"The pitcher plant is a carnivorous plant found in nutrient-poor environments such as swamps and bogs. It has a specialized leaf shaped like a deep pitcher filled with digestive liquid. Insects are attracted by the plant's color and scent, fall into the pitcher, and are dissolved by the enzymes inside.\"\n\nWhich part of this text is the General Classification?",
    answers: [
      { text: "It has a specialized leaf shaped like a deep pitcher filled with digestive liquid.", correct: false },
      { text: "Insects are attracted by the plant's color and scent.", correct: false },
      { text: "The pitcher plant is a carnivorous plant found in nutrient-poor environments such as swamps and bogs.", correct: true },
      { text: "Insects fall into the pitcher and are dissolved by the enzymes inside.", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Read the following text:\n\n\"Migratory birds travel thousands of kilometers each year between their breeding grounds and wintering areas. They use a combination of the Sun, stars, Earth's magnetic field, and landmarks to navigate. Some species, like the Arctic Tern, travel from the Arctic to Antarctica and back — a round trip of nearly 70,000 km.\"\n\nWhat is the main information of this paragraph?",
    answers: [
      { text: "The Arctic Tern is the only migratory bird in the world", correct: false },
      { text: "Migratory birds travel long distances and use multiple methods to navigate", correct: true },
      { text: "Birds use only the Sun to find their migration route", correct: false },
      { text: "All birds migrate between the Arctic and Antarctic regions", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Which of the following BEST describes the difference between a report text and a descriptive text?",
    answers: [
      { text: "Report text uses past tense; descriptive text uses present tense", correct: false },
      { text: "Report text is always longer than descriptive text", correct: false },
      { text: "Report text describes a general class of things; descriptive text describes one specific thing", correct: true },
      { text: "Report text always includes personal opinions; descriptive text does not", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Read the complete text below and answer the question.\n\n\"Fireflies are insects belonging to the family Lampyridae. They are unique among insects for their ability to produce bioluminescence — light generated by a chemical reaction in their bodies. This light is used mainly for communication, especially to attract mates. Unlike most light sources, the light produced by fireflies generates almost no heat, making it one of the most efficient forms of light in nature.\"\n\nWhat is the overall conclusion that can be drawn from this text?",
    answers: [
      { text: "Fireflies are the most beautiful insects in the world", correct: false },
      { text: "Fireflies are remarkable insects that produce highly efficient natural light for communication", correct: true },
      { text: "Fireflies produce heat through their bioluminescence", correct: false },
      { text: "All insects are capable of producing bioluminescence like fireflies", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Read the following text:\n\n\"Glaciers are large, slow-moving masses of ice formed from accumulated snow over thousands of years. They are found on every continent except Australia. As glaciers move, they carve out valleys and shape the landscape. Today, glaciers are retreating at an alarming rate due to rising global temperatures.\"\n\nWhat can be inferred from the last sentence of the text?",
    answers: [
      { text: "Glaciers have always been retreating since they were formed", correct: false },
      { text: "Climate change is having a significant negative impact on glaciers", correct: true },
      { text: "Glaciers will completely disappear within the next ten years", correct: false },
      { text: "Australia has the most glaciers in the world", correct: false }
    ],
    difficulty: "susah"
  }
];
