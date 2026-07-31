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
    savedAt: '2026-05-10T08:00:00Z',        // 라이브러리에 저장(책 검색 후 선택)된 시점
    pairedAt: '2026-05-12T10:00:00Z',      // 세션(페어링) 최초 생성 시점
    lastListenedAt: '2026-06-02T21:40:00Z', // 마지막으로 들은 시점
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
    savedAt: '2026-04-18T07:30:00Z',
    pairedAt: '2026-04-20T09:15:00Z',
    lastListenedAt: '2026-07-15T19:05:00Z',
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
    savedAt: '2026-06-08T12:00:00Z',
    pairedAt: '2026-06-10T14:20:00Z',
    lastListenedAt: '2026-07-28T09:15:00Z',
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
    savedAt: '2026-07-29T15:20:00Z',
    pairedAt: null,       // 아직 세션 시작 전이라 페어링 기록 없음
    lastListenedAt: null, // 아직 들은 적 없음
  },
  {
    id: '5',
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    publisher: 'Smith, Elder & Co.',
    publishedYear: 1847,
    pageCount: 500,
    cover: images.gray_cover,

    genre: 'Gothic Romance',
    moodTags: ['resilience', 'longing', 'moral conflict'],
    aiPairing: 'Warm strings building into a determined orchestral swell',

    aboutBook:
      'Orphaned and unloved as a child, Jane Eyre grows into a fiercely independent governess who falls for her enigmatic employer, Mr. Rochester. But a dark secret buried in his household threatens to destroy everything she has built for herself.',
    aboutAuthor:
      'Charlotte Brontë was an English novelist whose work gave voice to female interiority and moral autonomy rarely seen in Victorian fiction. "Jane Eyre" remains a landmark exploration of independence and self-respect.',

    myRating: 5,
    myReview:
      'Jane\'s refusal to compromise her values even when it costs her everything is what makes this book timeless.',
    status: 'completed',
    savedAt: '2026-02-28T09:00:00Z',
    pairedAt: '2026-03-02T11:30:00Z',
    lastListenedAt: '2026-07-20T22:10:00Z',
  },
  {
    id: '6',
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    publisher: 'Thomas Cautley Newby',
    publishedYear: 1847,
    pageCount: 342,
    cover: images.gray_cover,

    genre: 'Gothic Romance',
    moodTags: ['obsession', 'vengeance', 'longing'],
    aiPairing: 'Windswept strings with a restless, brooding undertone',

    aboutBook:
      'Set on the wild Yorkshire moors, the novel traces the destructive passion between Catherine Earnshaw and Heathcliff, whose thwarted love curdles into a generational cycle of cruelty and revenge.',
    aboutAuthor:
      'Emily Brontë was an English novelist and poet whose only novel, "Wuthering Heights," is now regarded as a classic of English literature for its unflinching depiction of obsessive love and cruelty.',

    myRating: 4,
    myReview:
      'Nobody in this book is likable, but I couldn\'t look away. The moor setting practically becomes a character itself.',
    status: 'completed',
    savedAt: '2026-02-15T10:00:00Z',
    pairedAt: '2026-02-18T16:45:00Z',
    lastListenedAt: '2026-03-01T20:00:00Z',
  },
  {
    id: '7',
    title: 'Demian',
    author: 'Hermann Hesse',
    publisher: 'S. Fischer Verlag',
    publishedYear: 1919,
    pageCount: 176,
    cover: images.gray_cover,

    genre: 'Bildungsroman',
    moodTags: ['introspection', 'awakening', 'duality'],
    aiPairing: 'Minimalist piano motifs with slow, searching progressions',

    aboutBook:
      'Emil Sinclair recounts his coming of age torn between the safe, orderly world of his childhood and a darker realm of instinct and self-discovery, guided by his enigmatic friend Max Demian.',
    aboutAuthor:
      'Hermann Hesse was a German-Swiss poet and novelist whose introspective works on self-discovery and spiritual crisis, including "Demian" and "Siddhartha," earned him the Nobel Prize in Literature.',

    myRating: 0,
    myReview: '',
    status: 'in_progress',
    savedAt: '2026-07-24T09:00:00Z',
    pairedAt: '2026-07-25T13:00:00Z',
    lastListenedAt: '2026-07-30T08:30:00Z',
  },
  {
    id: '8',
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    publisher: 'Covici Friede',
    publishedYear: 1937,
    pageCount: 107,
    cover: images.gray_cover,

    genre: 'American Realism',
    moodTags: ['loneliness', 'hope', 'tragedy'],
    aiPairing: 'Sparse acoustic guitar with a quiet, weary ache',

    aboutBook:
      'Migrant workers George and Lennie dream of one day owning a small piece of land of their own. Their fragile hope for a better life collides with the harsh realities of Depression-era California.',
    aboutAuthor:
      'John Steinbeck was an American novelist known for his sympathetic portrayals of working-class struggles during the Great Depression, for which he was awarded the Nobel Prize in Literature.',

    myRating: 0,
    myReview: '',
    status: 'not_started',
    savedAt: '2026-07-20T14:00:00Z',
    pairedAt: null,
    lastListenedAt: null,
  },
];