/* LAUNCH PAD (catch-up) keys, part 2: Sentence structure, Punctuation, Spelling. e-asTTle R1-R2. cu:true */
WK_K({
  id: 'SSa', cu: true, el: 'sentence', r: 1, name: 'Who Did What', hook: 'A sentence tells who did what.',
  what: 'A sentence needs two parts. A WHO (or what) and a DOING word. Together they make sense on their own. "The dog ran." is a sentence. "Running fast" is not, because we do not know who.',
  why: 'e-asTTle Sentence structure R1 has few correct sentences. Writing complete Who-Did-What sentences is the base for every higher level.',
  steps: ['Ask: Who or what is it about?', 'Ask: What did they do?', 'Write them together.', 'Read it out loud. Does it make sense on its own?'],
  ex: { before: 'Running fast. The dog. In the park.', after: '«The dog ran fast.»', wow: '«The little dog ran fast across the park.»' },
  check: ['Every sentence has a who (or what).', 'Every sentence has a doing word.', 'Each one makes sense on its own.'],
  activity: { name: 'Sentence or Not?', steps: ['Read 8 groups of words.', 'Write S if it is a sentence and N if it is not.', 'Fix each N by adding the missing who or doing word.', 'Write 5 of your own Who-Did-What sentences.'] },
  prompts: { 5: ['What my pet or a friend does every day.', 'What I did after school.', 'What happened at lunchtime.'], 6: ['What I did at home last night.', 'Three things a teacher does.', 'What happened on the way to school.'] },
  warm: [
    { name: 'Sentence or Not?', how: 'Write S if it is a sentence. Write N if it is not.', line: 'short', items: ['The cat sat on the mat. ___', 'Running down the hill. ___', 'My sister laughed. ___', 'In the garden. ___', 'We ate pies. ___', 'The big red bus. ___', 'Dad drove home. ___', 'Because it was raining. ___'], ans: ['S', 'N', 'S', 'N', 'S', 'N', 'S', 'N'] },
    { name: 'Match Who and Did What', how: 'Join a WHO from the first list with a DID WHAT from the second list. Write 4 sentences. WHO: The girl / My dad / The bird / Our teacher.  DID WHAT: sang loudly / cooked dinner / read a story / hid in the tree.', line: 'long', items: ['Sentence 1:', 'Sentence 2:', 'Sentence 3:', 'Sentence 4:'], ans: ['Any sensible pairs. Check the sentence makes sense.', '', '', ''] }
  ],
  bank: { title: 'Doing words', words: ['ran', 'jumped', 'ate', 'played', 'sat', 'kicked', 'drew', 'said', 'laughed', 'walked'] },
  frames: ['The ______ (who) ______ (did what).', 'My ______ (who) ______ (did what).', 'We ______ (did what).'],
  write: [
    { title: 'What Happened?', task: 'Write 5 Who-Did-What sentences about something that happened at school. Underline the who. Circle the doing word.', frame: ['The ______ ______.', 'My ______ ______.', 'We ______.', 'I ______.', 'Our ______ ______.'] },
    { title: 'On your own', task: 'Write 5 sentences about what you did last weekend. Check each one has a who and a doing word.', frame: [], lines: 5 }
  ],
  teacher: {
    tips: ['Use "Who? Did what?" as a hand check: one hand for who, one for did what.', 'Say a sentence aloud with and without the who to show the difference.', 'Keep sentences short and complete before extending them.'],
    mistake: 'Fragments (Running down the hill.) or no doing word (The big red bus.).',
    support: 'Give a "who" card and a "did what" card to match. Students make sentences with the cards, then write them.',
    stretch: 'Add a where or when to each sentence: The dog ran fast in the park.',
    quick: 'Show 3 word groups. Student says which are sentences and fixes the others orally.'
  }
});
WK_K({
  id: 'SSb', cu: true, el: 'sentence', r: 2, name: 'Joiner Words', hook: 'Use and, but and because to say more.',
  what: 'A joiner word links two ideas in one sentence. AND adds another idea. BUT shows a difference. BECAUSE gives a reason.',
  why: 'e-asTTle Sentence structure R2 has correct sentences and some longer ones. Joiners are your first tool for making sentences longer in a clear way.',
  steps: ['Write a short sentence.', 'Ask: Do I want to add, say but, or give a reason?', 'Add and, but or because, then finish the idea.', 'Read it. Make sure both parts make sense.'],
  ex: { before: 'I was happy. I won.', after: '«I was happy because I won.»', wow: '«I was happy because I won the race, but my legs were very tired.»' },
  check: ['I used and, but or because.', 'Both parts make sense.', 'I did not use "and" more than twice in one sentence.'],
  activity: { name: 'Join Them Up', steps: ['Take 2 short sentences.', 'Pick the joiner that fits: and, but or because.', 'Write them as one sentence.', 'Do it for 5 pairs.'] },
  prompts: { 5: ['Something I like but cannot do often.', 'Why I like my best friend.', 'What I did and what I want to do.'], 6: ['A time I was happy because something happened.', 'Something I wanted but could not have.', 'Why I like my favourite sport.'] },
  warm: [
    { name: 'Pick the Joiner', how: 'Choose and, but or because to fill each gap.', line: 'short', items: ['I like pizza ______ it is yummy.', 'I wanted to play outside ______ it was raining.', 'We had lunch ______ we played tag.', 'She was sad ______ she lost her toy.', 'I can swim ______ I cannot dive.'], ans: ['because', 'but', 'and', 'because', 'but'] },
    { name: 'Join Them', how: 'Join each pair of sentences into one with a joiner word.', line: 'long', items: ['I was tired. I went to bed.', 'It was sunny. We had a picnic.', 'I like swimming. I do not like cold water.', 'My dog barked. He saw a cat.'], ans: ['I was tired so I went to bed / I was tired and I went to bed.', 'It was sunny so we had a picnic / It was sunny and we had a picnic.', 'I like swimming but I do not like cold water.', 'My dog barked because he saw a cat.'] }
  ],
  bank: { title: 'Joiner words', words: ['and = add', 'but = a difference', 'because = a reason', 'so = a result'] },
  frames: ['I like ______ because ______.', 'I wanted to ______ but ______.', 'We ______ and then ______.'],
  write: [
    { title: 'Because, But, And', task: 'Write one sentence with each joiner. Write about things you like and do.', frame: ['I like ______ because ______.', 'I wanted to ______ but ______.', 'On Saturday I ______ and ______.'] },
    { title: 'On your own', task: 'Write 5 sentences about your week. Use because in one, but in one and and in one. Circle the joiners.', frame: [], lines: 5 }
  ],
  teacher: {
    tips: ['Teach one joiner per session, because first.', 'Use sentence stems and finish them orally.', 'Beware long "and and and" chains. Limit to one and per sentence.'],
    mistake: 'Joiners that do not make sense (I like pizza but it is yummy).',
    support: 'Give joiner cards in colour. Students slide a card between two short sentence strips and read it aloud.',
    stretch: 'Use so, or, although. Add a comma before but.',
    quick: 'Give "I stayed inside" and ask for three endings with because, but, and.'
  }
});
WK_K({
  id: 'PUa', cu: true, el: 'punctuation', r: 1, name: 'Full Stop Finder', hook: 'End every sentence with a full stop.',
  what: 'A full stop (.) shows where a sentence ends. When you read aloud and your voice drops and you need a breath, that is where the full stop goes.',
  why: 'e-asTTle Punctuation R1 has little or no correct punctuation. Using full stops at the end of sentences is the first step.',
  steps: ['Read your writing aloud, slowly.', 'Each time a thought finishes, put a full stop.', 'Start the next sentence with a capital letter.', 'Count: do I have the same number of full stops as sentences?'],
  ex: { before: 'I went to the park I played on the swings then I went home', after: '«I went to the park. I played on the swings. Then I went home.»', wow: '«I went to the park. I played on the swings and the slide. Then I went home for tea.»' },
  check: ['Every sentence ends with a full stop.', 'I read it aloud to find the stops.', 'The next word after a full stop starts with a capital.'],
  activity: { name: 'Stop and Breathe', steps: ['Read a passage with no full stops.', 'Say it aloud. Mark a / every time you pause.', 'Add a full stop and a capital letter at each mark.', 'Write 5 of your own sentences, each with a full stop.'] },
  prompts: { 5: ['What I do after school.', 'My family in short sentences.', 'What I can see right now.'], 6: ['What I did yesterday.', 'My morning routine.', 'What is on my desk.'] },
  warm: [
    { name: 'Add the Full Stops', how: 'Add full stops and change the next letter into a capital.', line: 'long', items: ['i went to the shop i bought milk i went home', 'we played tag we were tired we sat down', 'my dog is fluffy he likes to run he loves treats'], ans: ['I went to the shop. I bought milk. I went home.', 'We played tag. We were tired. We sat down.', 'My dog is fluffy. He likes to run. He loves treats.'] },
    { name: 'Count the Sentences', how: 'How many sentences are there? Write the number.', line: 'short', items: ['The sun came out. We went outside. ___', 'I like pies. Mum makes good ones. I eat two. ___', 'It rained. We stayed in. We read. We drew. ___'], ans: ['2', '3', '4'] }
  ],
  bank: { title: 'Punctuation reminders', words: ['. = full stop = the end of a sentence', 'The next word starts with a capital letter', 'Read it aloud: when your voice drops, put a full stop'] },
  frames: [],
  write: [
    { title: 'Short Sentences', task: 'Write 5 short sentences about what you do after school. Put a full stop at the end of each one.', frame: ['I ______.', 'I ______.', 'Then I ______.', 'My ______ ______.', 'At night I ______.'] },
    { title: 'On your own', task: 'Write 6 sentences about your weekend. Read it aloud. Check each one ends with a full stop.', frame: [], lines: 6 }
  ],
  teacher: {
    tips: ['Have students read aloud in a whisper voice and hold a finger up at each stop.', 'Use a coloured pen just for full stops.', 'Say "voice drops, stop".'],
    mistake: 'Stopping only at the end of the page, or putting a full stop after every word group.',
    support: 'Put sentence strips in a row. Students place a red dot (full stop) at the end of each.',
    stretch: 'Add question marks and exclamation marks as well.',
    quick: 'Say a sentence aloud. Does the student write it with a capital and a full stop?'
  }
});
WK_K({
  id: 'PUb', cu: true, el: 'punctuation', r: 2, name: 'Capital Starter', hook: 'Capital letters for starts, names and I.',
  what: 'A capital letter goes at the start of every sentence. It also goes on names of people and places, like Mere, Ashburton and Aotearoa, and on the word I.',
  why: 'e-asTTle Punctuation R2 shows some correct capitals and full stops. Using capitals correctly every time moves you to R3.',
  steps: ['Start each sentence with a capital.', 'Check every name (people, places, days) for a capital.', 'Check the word I is always a capital.', 'Underline any capital you added.'],
  ex: { before: 'my friend tom lives in ashburton. on monday i went to his house.', after: '«My friend Tom lives in Ashburton. On Monday I went to his house.»', wow: '«My friend Tom lives in Ashburton. On Monday I went to his house and we played rugby.»' },
  check: ['Every sentence starts with a capital.', 'Names of people, places and days have capitals.', 'The word I is always a capital.'],
  activity: { name: 'Capital Hunt', steps: ['Read a paragraph written all in lowercase.', 'Circle every letter that needs a capital.', 'Rewrite it correctly.', 'Hunt your own writing for missing capitals.'] },
  prompts: { 5: ['My friends and where they live.', 'The days of my week.', 'Places I have visited.'], 6: ['My family and the places we go.', 'A trip around New Zealand.', 'What I do each day of the week.'] },
  warm: [
    { name: 'Missing Capitals', how: 'Rewrite each sentence with the correct capitals.', line: 'long', items: ['my friend tom lives in ashburton.', 'on monday i go to church with mere.', 'we drove from christchurch to dunedin.', 'i like to play with james and kayla.'], ans: ['My friend Tom lives in Ashburton.', 'On Monday I go to church with Mere.', 'We drove from Christchurch to Dunedin.', 'I like to play with James and Kayla.'] },
    { name: 'Fix the Paragraph', how: 'Rewrite the paragraph with the correct capitals and full stops.', line: 'long', lines: 3, items: ['last saturday i went to timaru with dad we ate fish and chips at the beach i had a great day'], ans: ['Last Saturday I went to Timaru with Dad. We ate fish and chips at the beach. I had a great day.'] }
  ],
  bank: { title: 'Capital letter checklist', words: ['Start of a sentence', 'Names of people: Mere, Tom', 'Names of places: Ashburton, Aotearoa', 'Days and months: Monday, March', 'The word I'] },
  frames: [],
  write: [
    { title: 'Names and Places', task: 'Write 5 sentences about people and places you know. Use a capital for every name.', frame: ['My friend ______ lives in ______.', 'On ______ I ______.', 'I went to ______ with ______.', 'In ______ we ______.', 'My favourite place is ______.'] },
    { title: 'On your own', task: 'Write 6 sentences about your week. Include at least 3 names or places. Underline every capital letter you used.', frame: [], lines: 6 }
  ],
  teacher: {
    tips: ['Use a "capital letter detective" role: students hunt for the 5 types.', 'Mark capitals in green, full stops in red.', 'Use te reo Māori place and people names respectfully and correctly.'],
    mistake: 'Capitals in the middle of words, or lowercase i, or no capital on place names.',
    support: 'Give a checklist card with the 5 capital rules. Tick off each when found.',
    stretch: 'Add capitals for titles (Mr, Mrs), months and special days.',
    quick: 'Give a lowercase sentence with a name, a place and an I. Can the student fix all of them?'
  }
});
WK_K({
  id: 'SPa', cu: true, el: 'spelling', r: 1, name: 'Wall Words', hook: 'Spell the 20 most-used words without looking.',
  what: 'Some words appear in almost every piece of writing. If you can spell these 20 without looking, you have far fewer mistakes. Learn them one by one with Look, Say, Cover, Write, Check.',
  why: 'e-asTTle Spelling R1 has many errors in simple, everyday words. Learning the high-use words is the fastest way to a better spelling score.',
  steps: ['LOOK at the word. Say it slowly.', 'COVER it.', 'WRITE it from memory.', 'CHECK it letter by letter. Fix any mistakes. Do it three times.'],
  ex: { before: 'Wen we wer at the park hoo wanted to play wiv me?', after: '«When we were at the park who wanted to play with me?»', wow: '«When we were at the park, everyone wanted to play with me.»' },
  check: ['I can spell the 20 wall words without looking.', 'I check my writing for these words every time.', 'I fixed any I got wrong.'],
  activity: { name: 'Look, Say, Cover, Write, Check', steps: ['Pick 5 words from the list.', 'Do Look, Say, Cover, Write, Check for each.', 'Test yourself next day.', 'Colour the words you got right.'] },
  prompts: { 5: ['What I want to do this weekend.', 'My friends and what we do.', 'What I like and why.'], 6: ['What my friends and I like to do.', 'When I was little I would...', 'Why I like school.'] },
  warm: [
    { name: 'Wall Words', how: 'These are the 20 wall words: the, and, was, said, they, were, are, have, what, when, with, want, because, friend, people, would, could, again, very, going. Use Look, Say, Cover, Write, Check on these 5.', line: 'long', items: ['Words 1 to 5: the, and, was, said, they', 'Words 6 to 10: were, are, have, what, when', 'Words 11 to 15: with, want, because, friend, people', 'Words 16 to 20: would, could, again, very, going'], ans: ['Check: the, and, was, said, they', 'Check: were, are, have, what, when', 'Check: with, want, because, friend, people', 'Check: would, could, again, very, going'] },
    { name: 'Spot the Mistake', how: 'One word is spelled wrongly in each sentence. Write it correctly.', line: 'short', items: ['The boys wer playing. ___', 'She sed hello. ___', 'I want to go becos it is fun. ___', 'My frend is nice. ___', 'We wud like some pie. ___'], ans: ['were', 'said', 'because', 'friend', 'would'] }
  ],
  bank: { title: 'The 20 wall words', words: ['the', 'and', 'was', 'said', 'they', 'were', 'are', 'have', 'what', 'when', 'with', 'want', 'because', 'friend', 'people', 'would', 'could', 'again', 'very', 'going'] },
  frames: [],
  write: [
    { title: 'Using Wall Words', task: 'Write 5 sentences. Use at least 5 wall words. Underline each one and check the spelling.', frame: ['When ______, ______.', 'My friend said ______.', 'I want to ______ because ______.', 'They were ______.', 'We are going to ______.'] },
    { title: 'On your own', task: 'Write 6 sentences about what you and your friends like. Tick every wall word you used.', frame: [], lines: 6 }
  ],
  teacher: {
    tips: ['Do 5 words at a time, 5 minutes per day, daily test on Friday.', 'Keep the word list on desks and walls so students can check.', 'Celebrate each word mastered (colour in on the card).'],
    mistake: 'Spelling by sound only (wer, sed) instead of remembering the whole word.',
    support: 'Use a "trace and say" card with words in large font, plus an air-writing step.',
    stretch: 'Add 10 more high-frequency words from the next 100 list.',
    quick: 'Read out 5 wall words. Can the student spell 4 correctly from memory?'
  }
});
WK_K({
  id: 'SPb', cu: true, el: 'spelling', r: 2, name: 'Sound It Out', hook: 'Say it slowly. Write every sound.',
  what: 'To spell a new word, stretch it out and listen to each sound. Write a letter or letters for each sound. Every chunk of a word needs a vowel (a, e, i, o, u).',
  why: 'e-asTTle Spelling R2 has simple words right and a smart go at harder ones. Sounding words out in order is how you spell new words correctly.',
  steps: ['Say the word slowly.', 'Tap each sound on your fingers.', 'Write a letter or letters for each sound.', 'Check: does every chunk have a vowel? Does it look right?'],
  ex: { before: 'We wnt to the bch and had a pcnic.', after: '«We went to the beach and had a picnic.»', wow: '«We went to the beach and had a picnic with sandwiches and juice.»' },
  check: ['I sounded the word out in order.', 'Every chunk of my word has a vowel.', 'I checked if it looked right.'],
  activity: { name: 'Tap and Write', steps: ['Say a word slowly.', 'Tap the sounds on your fingers.', 'Draw a box for each sound.', 'Write the letters in the boxes, then check.'] },
  prompts: { 5: ['What I did at the beach or the park.', 'My favourite food.', 'My best day.'], 6: ['A time I tried hard.', 'What I want to be.', 'My favourite place.'] },
  warm: [
    { name: 'Tap and Write', how: 'Say each word slowly, tap the sounds and write the number of sounds. Then write the word.', line: 'long', items: ['ship', 'jump', 'stamp', 'train', 'clap', 'sunset'], ans: ['sh-i-p (3)', 'j-u-m-p (4)', 's-t-a-m-p (5)', 't-r-ai-n (4)', 'c-l-a-p (4)', 'sun-set (2 chunks)'] },
    { name: 'Missing Vowel', how: 'Fill each gap with a vowel (a, e, i, o, u).', line: 'short', items: ['b_g', 'dr_ss', 'w_nd', 'f_sh', 'tr_ck', 'c_ndy'], ans: ['bag/big/bug', 'dress/drass', 'wind/wand', 'fish', 'trick/track/truck', 'candy'] }
  ],
  bank: { title: 'Sound helpers', words: ['Say it slowly', 'Tap each sound', 'Every chunk needs a vowel: a e i o u', 'Common chunks: sh, ch, th, ai, ee, oo', 'Look: does it look right?'] },
  frames: [],
  write: [
    { title: 'Spell by Sound', task: 'Say each word slowly and write a sentence with it: ship, jump, stamp, train, clap.', frame: ['ship: ______', 'jump: ______', 'stamp: ______', 'train: ______', 'clap: ______'] },
    { title: 'On your own', task: 'Write 6 sentences about your favourite things. Circle 3 words you had to sound out. Check them with a dictionary or the word wall.', frame: [], lines: 6 }
  ],
  teacher: {
    tips: ['Use Elkonin boxes (one box per sound) and counters.', 'Teach common chunks: sh, ch, th, ai, ee.', 'Encourage students to underline tricky bits and check them.'],
    mistake: 'Leaving out vowels (bch) or writing only the first and last sounds.',
    support: 'Use sound boxes. Student pushes a counter for each sound, then writes the letters in the boxes.',
    stretch: 'Sort words by chunk pattern (sh, ch, th) and add three of each.',
    quick: 'Say "sunset". Can the student say the sounds, tap them and write the word?'
  }
});
