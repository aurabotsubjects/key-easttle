/* LAUNCH PAD (catch-up) keys, part 1: Ideas, Structure, Organisation, Vocabulary. e-asTTle R1-R2. cu:true */
/* Extra fields used by the Launch Pad booklet: warm [{name, how, items, ans, line}], bank {title, words}, frames [], write [{title, task, frame, lines}] */
WK_K({
  id: 'IDa', cu: true, el: 'ideas', r: 1, name: 'Stay On Topic', hook: 'Every sentence is about your topic.',
  what: 'Your topic is what your writing is about. Every sentence must be about it. If a sentence is about something else, it does not belong, so take it out.',
  why: 'e-asTTle Ideas R1 means very few ideas, and some do not fit the topic. Writing at least 3 ideas that all fit is the first step up the ladder.',
  steps: ['Read the topic. Say it out loud.', 'Think of 3 things about it.', 'Write one sentence for each thing.', 'Check each sentence. Is it about my topic? If not, cross it out.'],
  ex: { before: 'Max is my dog. I like pizza. It is Tuesday.', after: '«Max is my dog. Max is brown and fluffy. Max likes to chase his ball.»', wow: '«Max is my dog and my best friend. He is brown and fluffy. Every day he chases his ball at the park.»' },
  check: ['Every sentence is about the topic.', 'I wrote at least 3 ideas.', 'I crossed out anything that does not belong.'],
  activity: { name: 'Odd One Out', steps: ['Read 4 sentences about one topic. One does not belong.', 'Cross it out.', 'Choose a new topic and write 3 sentences that all belong.', 'Swap with a partner. Can they spot your topic?'] },
  prompts: { 5: ['My favourite food.', 'Our classroom.', 'A person I love.'], 6: ['My favourite place to be.', 'Something I am good at.', 'A person who helps me.'] },
  warm: [
    { name: 'Odd One Out', how: 'Read the 4 sentences. Write the letter of the sentence that does NOT belong.', line: 'short', items: ['Topic: A rainy day. A) The rain made puddles. B) I wore my gumboots. C) My cat is called Tilly. D) We stayed inside and read.', 'Topic: Our school. A) We have a big field. B) My teacher is kind. C) I had toast for breakfast. D) There is a library.', 'Topic: The beach. A) The sand was hot. B) We swam in the sea. C) My bike is blue. D) I found a shell.', 'Topic: My family. A) I have a sister. B) Dad cooks tea. C) Pies have meat in them. D) Mum loves to read.'], ans: ['C', 'C', 'C', 'C'] },
    { name: 'Three Ideas', how: 'For each topic, write 3 short ideas that fit it. One has been started for you.', line: 'long', lines: 3, items: ['Topic: My favourite food. Idea 1: I like to eat ______.', 'Topic: Our classroom. Idea 1: We have ______.', 'Topic: A sunny day. Idea 1: The sun is ______.'], ans: ['Any 3 ideas that match the topic.', 'Any 3 ideas that match the topic.', 'Any 3 ideas that match the topic.'] }
  ],
  bank: { title: 'Topic helper questions', words: ['Who is it about?', 'What is it?', 'Where is it?', 'What do I like about it?', 'What can I see, hear or do?'] },
  frames: ['My topic is ______.', 'One thing about it is ______.', 'Another thing about it is ______.', 'I like it because ______.'],
  write: [
    { title: 'My Favourite Place', task: 'Write 4 sentences about your favourite place. Every sentence must be about it.', frame: ['My favourite place is ______.', 'It is ______.', 'You can ______ there.', 'I like it because ______.'] },
    { title: 'On your own', task: 'Choose a topic: My pet (or a pet I would like) OR My best day. Write 4 to 5 sentences. Check each one belongs.', frame: [], lines: 5 }
  ],
  teacher: {
    tips: ['Say the topic as a "title in the head" before and after writing.', 'Use the check question "Does it belong?" for every sentence.', 'Keep topics personal: pets, food, family, places.'],
    mistake: 'Students list things they like that have nothing to do with the topic.',
    support: 'Give a topic and 3 picture cards or a word web. Students write one sentence per card.',
    stretch: 'Ask for 5 ideas, then add one extra detail to each.',
    quick: 'Give 4 sentences with one intruder. Can the student find it and say why?'
  }
});
WK_K({
  id: 'IDb', cu: true, el: 'ideas', r: 2, name: 'Add a Detail', hook: 'One idea plus one extra detail.',
  what: 'A detail tells the reader more about an idea. It can be a colour, a size, a place, a name or a feeling. Add one detail to each of your ideas.',
  why: 'e-asTTle Ideas R2 has some ideas that fit with a little extra detail. Adding a detail to each idea moves your writing from a list to real writing.',
  steps: ['Write your idea as a short sentence.', 'Ask: What colour? How big? Who? Where? How did it feel?', 'Add the answer to your sentence.', 'Read it. Does it tell more?'],
  ex: { before: 'I have a dog.', after: '«I have a big brown dog called Max.»', wow: '«I have a big brown dog called Max who sleeps on my bed every night.»' },
  check: ['Each idea has at least one detail.', 'My details fit the idea.', 'I can point to the detail and name what type it is.'],
  activity: { name: 'Detail Questions', steps: ['Write a very short sentence, like "I saw a bird."', 'Ask yourself 3 questions: What colour? How big? Where?', 'Rewrite the sentence with 3 details added.', 'Highlight your details.'] },
  prompts: { 5: ['My favourite toy or game.', 'Something I saw on the way to school.', 'My lunch today.'], 6: ['The best thing I ate this week.', 'A place I know very well.', 'An animal I have seen.'] },
  warm: [
    { name: 'Add One Detail', how: 'Make each sentence tell more. Add a colour, size, place or feeling.', line: 'long', items: ['I saw a bird.', 'We ate lunch.', 'The boy ran.', 'It was a car.', 'My friend has a bike.'], ans: ['Sample: I saw a small blue bird in the tree.', 'Sample: We ate lunch under the big tree.', 'Sample: The tired boy ran home.', 'Sample: It was a shiny red car.', 'Sample: My friend has a fast green bike.'] },
    { name: 'Which Detail Fits?', how: 'Circle the detail that answers the question.', line: 'none', items: ['The cat sat. What colour?  black / quickly / because', 'The tree is tall. Where?  green / in our garden / happy', 'I ate a pie. How big?  huge / Tuesday / Mum', 'We played. Where?  loud / at the park / angry'], ans: ['black', 'in our garden', 'huge', 'at the park'] }
  ],
  bank: { title: 'Detail words', words: ['Colour: red, blue, golden, dark, bright', 'Size: tiny, small, big, huge, tall', 'Where: in the park, at the beach, on my bed', 'Feeling: happy, tired, excited, nervous', 'How many: two, three, lots of'] },
  frames: ['I saw a ______ (size) ______ (colour) ______.', 'It was in ______.', 'It made me feel ______.'],
  write: [
    { title: 'Something I Saw', task: 'Write about something you saw. Add details to every sentence.', frame: ['I saw a ______ (size) ______ (colour) ______.', 'It was at ______.', 'It was ______ (doing what?).', 'It made me feel ______.'] },
    { title: 'On your own', task: 'Write 4 to 5 sentences about your favourite game or toy. Add a detail to every sentence. Highlight them.', frame: [], lines: 5 }
  ],
  teacher: {
    tips: ['Teach the four detail questions: What colour? How big? Where? How did it feel?', 'Model with a really short sentence and "grow" it on the board.', 'Highlight details so students can see them.'],
    mistake: 'Adding the same detail type every time (all colours) or adding details that do not fit.',
    support: 'Give a detail-question card on a ring (colour, size, where, feeling). Students answer one at a time.',
    stretch: 'Add two details to one idea, then explain why each helps the reader.',
    quick: 'Say: "The dog ran." Students add 2 details orally, then write them.'
  }
});
WK_K({
  id: 'SLa', cu: true, el: 'structure', r: 1, name: 'Beginning, Middle, End', hook: 'Every piece has a start, a middle and an end.',
  what: 'A piece of writing has three parts. The BEGINNING says who, where and when. The MIDDLE tells what happened. The END tells how it finished or how you felt.',
  why: 'e-asTTle Structure and language R1 shows little sign of a recount. Writing all three parts in order is the first step up.',
  steps: ['Start: write who, where and when.', 'Middle: write 2 or 3 things that happened.', 'End: write how it finished or how you felt.', 'Read it. Can you point to the beginning, middle and end?'],
  ex: { before: 'Sand. Swim. Chips.', after: '«Last Saturday I went to the beach with Dad. We built a sandcastle and then we swam. At the end we ate chips. I felt happy.»', wow: '«Last Saturday I went to the beach with Dad. First we built a huge sandcastle. Then we swam in the freezing waves. In the end we shared hot chips and I felt so happy.»' },
  check: ['My start says who, where and when.', 'My middle tells what happened.', 'My end says how it finished or how I felt.'],
  activity: { name: 'Sort the Story', steps: ['Cut or copy 3 sentences from a jumbled story.', 'Decide: beginning, middle or end?', 'Put them in order.', 'Write your own recount with all three parts.'] },
  prompts: { 5: ['What I did at the weekend.', 'A trip I went on.', 'Something that happened at school.'], 6: ['My best day.', 'A time I tried something new.', 'A family outing.'] },
  warm: [
    { name: 'Sort It Out', how: 'Write B (beginning), M (middle) or E (end) after each sentence.', line: 'short', items: ['We got home and I was tired. ___', 'On Saturday I went to the lake with Nana. ___', 'We fished and caught two trout. ___', 'Yesterday I went to the library with Mum. ___', 'I borrowed a funny book and a big map. ___', 'I could not wait to read them. ___'], ans: ['E', 'B', 'M', 'B', 'M', 'E'] },
    { name: 'What Is Missing?', how: 'Which part is missing? Write beginning, middle or end.', line: 'short', items: ['We played tag. Then we ate lunch. I felt full. (Missing: ___)', 'On Friday I went to the park. At the end I went home. (Missing: ___)', 'Last week I went to the farm with Dad. First we fed the lambs. Then we patted the dog. (Missing: ___)'], ans: ['beginning', 'middle', 'end'] }
  ],
  bank: { title: 'Part starters', words: ['Beginning: Last weekend, Yesterday, On Saturday, One day', 'Middle: First, Then, Next, After that', 'End: In the end, Finally, At the end, I felt'] },
  frames: ['Beginning: Last ______ I went to ______ with ______.', 'Middle: First ______. Then ______. Next ______.', 'End: In the end ______. I felt ______.'],
  write: [
    { title: 'My Weekend', task: 'Use the frame to write all three parts of a recount about your weekend.', frame: ['Last ______ I went to ______ with ______.', 'First ______.', 'Then ______.', 'Next ______.', 'In the end ______. I felt ______.'] },
    { title: 'On your own', task: 'Write about the best part of this week. Put a B, M and E in the margin to show your three parts.', frame: [], lines: 6 }
  ],
  teacher: {
    tips: ['Use three coloured hands or boxes: B, M, E. Colour-code the parts after writing.', 'Always tell students which text type they are writing (recount).', 'Pair with ORa (order words) for fast gains.'],
    mistake: 'Writing only a middle, or ending with "The end" and no feeling or finish.',
    support: 'Give a 3-box folding strip: Beginning / Middle / End. Students draw, label, then write one sentence per box.',
    stretch: 'Make the beginning name who, where AND when, and the end give a comment or feeling.',
    quick: 'Show a 5-sentence recount. Students colour the beginning, middle and end.'
  }
});
WK_K({
  id: 'ORa', cu: true, el: 'organisation', r: 1, name: 'First, Then, Last', hook: 'Put your ideas in the order they happened.',
  what: 'Order words help your reader follow what happened. First, Then, Next, After that and Finally tell which idea comes first and which comes last.',
  why: 'e-asTTle Organisation R1 has little or no order. Using order words so a reader can follow your writing is the first step up.',
  steps: ['Think of 3 things that happened. Which was first? Last?', 'Number them 1, 2, 3.', 'Start each sentence with an order word.', 'Read it aloud. Does it make sense in order?'],
  ex: { before: 'We went home. We got on the bus. We saw the bones. We went to the museum.', after: '«First we went to the museum. Then we saw the bones. Next we got on the bus. Finally we went home.»', wow: '«First we arrived at the museum. After that we saw the giant bones. Next we ate lunch. Finally we got on the bus and went home.»' },
  check: ['My ideas are in the order they happened.', 'I used at least 3 order words.', 'It makes sense when I read it aloud.'],
  activity: { name: 'Order Detective', steps: ['Read 4 jumbled sentences.', 'Number them 1 to 4.', 'Add an order word to each.', 'Write your own morning routine with order words.'] },
  prompts: { 5: ['How I get ready for school.', 'How to make a sandwich.', 'My day yesterday.'], 6: ['How to play a game I like.', 'What I did from the time I got up.', 'How I made or built something.'] },
  warm: [
    { name: 'Put in Order', how: 'Number the sentences 1 to 4 in the order they happened.', line: 'short', items: ['___ We ate our lunch.  ___ We got to the park.  ___ We packed our bags.  ___ We played on the swings.', '___ I put on my shoes.  ___ I woke up.  ___ I ate my breakfast.  ___ I walked to school.', '___ The bread was toasted.  ___ I got out two slices.  ___ I added butter.  ___ I ate it.'], ans: ['3, 2, 1, 4', '2, 1, 3, 4', '2, 1, 3, 4'] },
    { name: 'Pick the Order Word', how: 'Choose First, Then, Next or Finally to fill the gap.', line: 'short', items: ['______ I got out of bed. (start)', 'I got dressed. ______ I ate breakfast.', '______ I walked to school. (last)', 'Pour in the milk. ______ stir it.'], ans: ['First', 'Then / Next', 'Finally', 'Then / Next'] }
  ],
  bank: { title: 'Order words', words: ['First', 'Then', 'Next', 'After that', 'Later', 'Finally', 'In the end'] },
  frames: ['First ______.', 'Then ______.', 'Next ______.', 'Finally ______.'],
  write: [
    { title: 'Getting Ready', task: 'Write how you get ready for school. Use all four order words.', frame: ['First ______.', 'Then ______.', 'Next ______.', 'Finally ______.'] },
    { title: 'On your own', task: 'Write how to make or do something you can do well (a snack, a game, a trick). Use at least 4 order words. Circle them.', frame: [], lines: 6 }
  ],
  teacher: {
    tips: ['Display an order-word chart.', 'Retell orally with hand signals (one finger per order word) before writing.', 'Use real routines so the order is obvious.'],
    mistake: 'Using "and then" five times in a row, or putting order words on ideas that are out of order.',
    support: 'Give 4 picture cards in the wrong order. Students sequence them, say, then write with order words.',
    stretch: 'Swap order words for more interesting ones (Soon, A little later, Before long).',
    quick: 'Give 3 jumbled sentences. Student orders them and adds order words aloud.'
  }
});
WK_K({
  id: 'VOa', cu: true, el: 'vocabulary', r: 1, name: 'Word Bank Boost', hook: 'Use the special words that belong to your topic.',
  what: 'Every topic has its own special words. At the beach: waves, sand, shells, bucket. Make a word bank BEFORE you write, then use at least 5 of the words.',
  why: 'e-asTTle Vocabulary R1 uses very basic or repeated words. Using topic words from your own bank is a fast way to move up.',
  steps: ['Read the topic.', 'Write 8 words about it in 2 minutes (your word bank).', 'Add 3 words from the class list or a friend.', 'Write. Tick each bank word as you use it. Use at least 5.'],
  ex: { before: 'We went to the place. We did stuff in the water.', after: '«We went to the beach. We swam in the waves and built a sandcastle with a bucket and spade.»', wow: '«We went to the beach. We splashed in the waves, hunted for shells and built a sandcastle with a bucket and spade.»' },
  check: ['I made a word bank before I wrote.', 'I used at least 5 bank words.', 'I ticked each one I used.'],
  activity: { name: 'Word Bank Race', steps: ['Pick a topic card (Beach, School, Farm, Kitchen).', 'Set a 2-minute timer and list as many words as you can.', 'Swap with a partner and steal 3 words each.', 'Write 4 sentences using at least 5 words.'] },
  prompts: { 5: ['A day at the beach.', 'On the farm.', 'In our classroom.'], 6: ['A trip to the bush or a river.', 'At the rugby or netball.', 'In my kitchen at home.'] },
  warm: [
    { name: 'Word Bank Race', how: 'Set a 2-minute timer. Write as many words as you can for each topic. Aim for 8.', line: 'long', items: ['Topic: The beach', 'Topic: The farm', 'Topic: Our school'], ans: ['Sample: waves, sand, shells, bucket, spade, swim, towel, seagull, tide, rock pool', 'Sample: tractor, sheep, paddock, gate, hay, dog, fence, calf, shed, mud', 'Sample: desk, teacher, bell, library, field, bag, whiteboard, lunchbox, hall, pencil'] },
    { name: 'Use the Bank', how: 'Fill each gap with a word from the bank: waves, shells, sandcastle, bucket, towel.', line: 'short', items: ['We built a big ______.', 'I filled my ______ with water.', 'The ______ crashed on the sand.', 'After swimming I dried off with my ______.', 'I found three pretty ______.'], ans: ['sandcastle', 'bucket', 'waves', 'towel', 'shells'] }
  ],
  bank: { title: 'My word bank (write 8 words here before you write)', words: ['__________', '__________', '__________', '__________', '__________', '__________', '__________', '__________'] },
  frames: [],
  write: [
    { title: 'Topic Writing: A Day at the Beach', task: 'Make a word bank of 8 words first. Then write 5 sentences using at least 5 of your words. Tick each word you use.', frame: ['I went to ______.', 'I saw ______ and ______.', 'We ______.', 'I used the word ______.', 'I felt ______.'] },
    { title: 'On your own', task: 'Pick your own topic. Make a word bank first (write it at the top). Write 5 sentences. Underline your bank words.', frame: [], lines: 6 }
  ],
  teacher: {
    tips: ['Build a class bank on the whiteboard before every writing task.', 'Have students tick each bank word as used.', 'Add pictures to the word bank for English language learners.'],
    mistake: 'Making the bank but not using it, or copying words that do not fit.',
    support: 'Provide a topic word bank with pictures. Students point to and say each word, then use 3 of them in speech first.',
    stretch: 'Use 8 bank words and add 2 of your own that no one else has.',
    quick: 'Give a topic. In 1 minute, can the student say 5 words that belong to it?'
  }
});
WK_K({
  id: 'VOb', cu: true, el: 'vocabulary', r: 2, name: 'Exact Name', hook: 'Use the exact name, not "thing" or "stuff".',
  what: 'Vague words like thing, stuff, nice and a lot do not tell the reader much. Exact words do. Instead of "dog" say "Labrador". Instead of "food" say "chicken pie".',
  why: 'e-asTTle Vocabulary R2 shows some everyday words with a few that are more exact. Replacing vague words with exact ones lifts your score quickly.',
  steps: ['Find a vague word: thing, stuff, nice, good, a lot, place.', 'Ask: What exactly was it?', 'Write the exact name.', 'Read it again. Does the reader see it clearly?'],
  ex: { before: 'I had some food and then we went to a place.', after: '«I had a chicken pie and then we went to the library.»', wow: '«I had a hot chicken pie and then we went to the town library.»' },
  check: ['I replaced vague words with exact names.', 'I did not use thing or stuff.', 'The reader can picture it.'],
  activity: { name: 'Zoom In', steps: ['Choose a general word (animal, food, vehicle).', 'Write 3 exact names for it.', 'Choose the best one and use it in a sentence.', 'Hunt for thing or stuff in your own writing and fix it.'] },
  prompts: { 5: ['My favourite meal.', 'A toy or game I love.', 'Something I saw in town.'], 6: ['The best thing in my bedroom.', 'Animals on a farm or in the bush.', 'A shop I like.'] },
  warm: [
    { name: 'Zoom In', how: 'Write 3 exact names for each general word.', line: 'long', items: ['animal', 'food', 'vehicle', 'place in town', 'sport'], ans: ['Sample: cow, tūī, sheepdog', 'Sample: pie, pasta, apple', 'Sample: tractor, ute, bus', 'Sample: library, supermarket, park', 'Sample: rugby, netball, swimming'] },
    { name: 'Fix the Vague Word', how: 'Rewrite each sentence. Swap the vague word (stuff, nice, thing, food, place) for an exact word.', line: 'long', items: ['I put my stuff in my bag.', 'We saw a nice thing at the farm.', 'I had some food for lunch.', 'We went to a place on Sunday.'], ans: ['Sample: I put my lunchbox and pencil case in my bag.', 'Sample: We saw a lamb at the farm.', 'Sample: I had a ham sandwich for lunch.', 'Sample: We went to church on Sunday.'] }
  ],
  bank: { title: 'Vague words to hunt', words: ['thing', 'stuff', 'nice', 'good', 'a lot', 'place', 'some food'] },
  frames: ['My favourite ______ (exact name) is ______.', 'I like it because ______.'],
  write: [
    { title: 'My Favourite Things', task: 'Write 4 sentences about favourite things. Use an exact name every time.', frame: ['My favourite food is ______.', 'My favourite animal is ______.', 'My favourite place is ______.', 'My favourite game is ______.'] },
    { title: 'On your own', task: 'Describe your bag or desk. Name every item exactly. Circle every exact name.', frame: [], lines: 5 }
  ],
  teacher: {
    tips: ['Keep a "vague word graveyard" on the wall.', 'Ask "What exactly?" in every conference.', 'Use category cards (animal, food, vehicle) to zoom in.'],
    mistake: 'Replacing thing with another vague word, such as "a good thing".',
    support: 'Give a mini word wall of exact names with pictures to swap into the sentence.',
    stretch: 'Use an exact name and one describing word each time.',
    quick: 'Say "She ate some food." Student says three exact options.'
  }
});
