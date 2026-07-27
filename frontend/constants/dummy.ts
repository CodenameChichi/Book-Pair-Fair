import { images } from "./images";

export const dummyBooks = [
  {
    id: '1',
    title: 'Animal Farm',
    author: 'George Orwell',
    publisher: 'Secker & Warburg',
    publishedYear: 1945,
    pageCount: 112,
    cover: images.animal_farm_cover,

    genre: 'Political Satire',
    moodTags: ['isolation', 'betrayal', 'oppression'],
    aiPairing: 'Ominous march-like percussion with distant brass',

    aboutBook:
      'A group of farm animals overthrow their human owner in hopes of creating a society where they can be equal, free, and happy. Ultimately, however, the rebellion is betrayed and the farm ends up in a state as bad as it was before, under the dictatorship of a pig named Napoleon.',
    aboutAuthor:
      'George Orwell was an English novelist and essayist known for his clear prose and criticism of totalitarianism. His works, including "1984" and "Animal Farm," remain influential examinations of political power and propaganda.',

    myRating: 4,
    myReview:
      'Short but hits hard. Read it in one sitting and immediately wanted to talk about it with someone.',
    status: 'completed', // not_started / in_progress / completed
  },
  {
    id: '2',
    title: 'Frankenstein',
    author: 'Mary Shelley',
    publisher: 'Lackington, Hughes, Harding, Mavor & Jones',
    publishedYear: 1818,
    pageCount: 280,
    cover: images.frankenstein_cover,

    genre: 'Gothic Horror',
    moodTags: ['isolation', 'obsession', 'grief'],
    aiPairing: 'Haunting piano and strings, slow orchestral lament',

    aboutBook:
      'Victor Frankenstein, a young scientist, creates a sapient creature in an unorthodox experiment. Horrified by his own creation, Victor abandons it, setting off a tragic chain of events driven by isolation, revenge, and the consequences of playing god.',
    aboutAuthor:
      'Mary Shelley was an English novelist who wrote "Frankenstein" at just eighteen years old. Often credited as pioneering the science fiction genre, her work explores themes of ambition, creation, and moral responsibility.',

    myRating: 5,
    myReview:
      'Didn\'t expect the creature to be this sympathetic. The loneliness in this book is suffocating in the best way.',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Dracula',
    author: 'Bram Stoker',
    publisher: 'Archibald Constable and Company',
    publishedYear: 1897,
    pageCount: 418,
    cover: images.dracula_cover,

    genre: 'Gothic Horror',
    moodTags: ['dread', 'suspense', 'seduction'],
    aiPairing: 'Low string tremolo with distant tolling bells',

    aboutBook:
      'Told through letters and diary entries, the novel follows Count Dracula\'s attempt to move from Transylvania to England to spread the undead curse, and the group of people who band together to stop him.',
    aboutAuthor:
      'Bram Stoker was an Irish author best known for creating one of literature\'s most enduring horror icons. His epistolary style and atmospheric tension helped define the modern vampire genre.',

    myRating: 3,
    myReview:
      'Slower than I expected, but the atmosphere is unmatched. The letter format took some getting used to.',
    status: 'in_progress',
  },
  {
    id: '4',
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    publisher: 'Pan Books',
    publishedYear: 1979,
    pageCount: 224,
    cover: images.hitchhikers_cover,

    genre: 'Comic Science Fiction',
    moodTags: ['absurdity', 'wonder', 'whimsy'],
    aiPairing: 'Playful synth arpeggios with a quirky upbeat rhythm',

    aboutBook:
      'Moments before Earth is demolished to make way for a hyperspace bypass, Arthur Dent is whisked off into space by his friend Ford Prefect, who turns out to be an alien researcher for a wildly popular interstellar travel guide.',
    aboutAuthor:
      'Douglas Adams was an English author and humorist celebrated for his absurdist take on science fiction. His work blends satire, philosophy, and comedy into one of the genre\'s most beloved series.',

    myRating: 0, // 아직 소감 작성 전
    myReview: '',
    status: 'not_started',
  },
];