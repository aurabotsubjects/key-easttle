/* SENTENCE STRUCTURE keys (SS1–SS7) — e-asTTle Sentence structure R2–R6 (punctuation is "read in") */
WK_K({
  id: 'SS1', el: 'sentence', r: 2, name: 'Complete It', hook: 'Every sentence needs who or what, an action and a finished thought.',
  what: 'A complete sentence has a subject (who or what), a verb (what they did) and makes full sense on its own. A fragment is missing a piece. A run-on sentence joins too many ideas with "and … and … and".',
  why: 'e-asTTle Sentence structure R2: correct sentences, but "few" is R1 and long run-ons with overuse of conjunctions sit at R2. Complete sentences are the base for every higher level.',
  steps: ['Read each sentence. Who or what is it about? What did they do?', 'If something is missing, add it.', 'If you used "and" 3 times, split it into 2 or 3 sentences.', 'Check each one can stand on its own.'],
  ex: { before: 'Went to the shop. Because I was hungry and then I got a pie and I ate it and it was good.', after: '«I went to the shop because I was hungry. I bought a pie and ate it. It was delicious.»', wow: 'Hungry after netball, I raced to the shop and bought a hot pie. It was delicious.' },
  check: ['Every sentence has a who/what and a verb.', 'No sentence is left hanging.', 'I broke up long "and and and" sentences.'],
  activity: { name: 'Sentence or Not?', steps: ['Sort 10 groups of words into SENTENCE and NOT A SENTENCE.', 'Fix each NOT A SENTENCE by adding what is missing.', 'Take a run-on and cut it into 3 sentences.', 'Check your own writing for two fragments or run-ons.'] },
  prompts: { 5: ['What I did after school yesterday.', 'My weekend in short, clear sentences.'], 6: ['A busy morning at home or school.', 'What happened when I got to school today.'] },
  teacher: {
    tips: ['Use "Who? Did what?" as a quick test for every sentence.', 'Read aloud and have kids pause where the sentence would end.'],
    mistake: 'Starting sentences with "Because" or "When" and stopping (fragments). Teach that these need the rest.',
    support: 'Use sentence strips: subject card + verb card + extra card. Rearrange to build sentences.',
    stretch: 'Fix a paragraph of run-ons using a mix of full stops and connectives. Move to SS2.',
    quick: 'Say a fragment and ask the student to finish it.',
  },
});

WK_K({
  id: 'SS2', el: 'sentence', r: 3, name: 'Compound Combos', hook: 'Join two complete ideas with a comma and a joining word.',
  what: 'A compound sentence joins two complete sentences with a joining word (FANBOYS: for, and, nor, but, or, yet, so). Put a comma before the joining word. Example: "I wanted to swim, but the water was freezing."',
  why: 'e-asTTle Sentence structure R3: "correct sentences begin to show variety in structure and type". Compound sentences are the first step beyond simple sentences.',
  steps: ['Write two short sentences that are linked.', 'Choose the FANBOYS word that shows the link (and = more, but = contrast, so = result).', 'Add a comma before it.', 'Check both parts could stand alone.'],
  ex: { before: 'I wanted to swim. The water was freezing.', after: 'I wanted to swim«, but» the water was freezing.', wow: 'I wanted to swim, but the water was freezing, so I dipped my toes and ran back to my towel.' },
  check: ['I wrote at least 3 compound sentences.', 'Each uses a FANBOYS word with a comma.', 'Both halves are complete sentences.'],
  activity: { name: 'FANBOYS Builder', steps: ['Write the 7 FANBOYS words on cards.', 'Pick 2 short sentences and 1 card.', 'Join them with the correct comma.', 'Make 5 compound sentences about your day.'] },
  prompts: { 5: ['What I like and do not like about winter.', 'Things I did at the park.'], 6: ['A time I wanted one thing but got another.', 'What I did on the weekend and why.'] },
  teacher: {
    tips: ['Practise FANBOYS with a catchy chant or poster.', 'Use "Can both sides stand alone?" as the compound test.'],
    mistake: 'Comma splice: "I like pizza, she likes pasta." Ask: what is joining them?',
    support: 'Use colour cards: blue sentence + FANBOYS card + blue sentence.',
    stretch: 'Use "yet" and "nor" correctly. Move to SS3.',
    quick: 'Give two sentences and ask the student to join them in a way that shows contrast.',
  },
});

WK_K({
  id: 'SS3', el: 'sentence', r: 3, name: 'Complex Crew', hook: 'Add a "because / when / although" part to extend a sentence.',
  what: 'A complex sentence has a main part that stands alone plus a part that cannot (it starts with a word like because, when, although, while, if, after, since). "Although it was raining, we played outside."',
  why: 'e-asTTle Sentence structure R3 to R4: complex sentences give variety in "structure, length and type". NZC Year 5: create a range of structures and explain their impact.',
  steps: ['Write a complete sentence.', 'Add a "because, when, although, while, if or after" part.', 'Decide whether it goes first or second.', 'If it goes first, put a comma after it.'],
  ex: { before: 'We played outside. It was raining.', after: '«Although it was raining,» we played outside.', wow: 'Although it was raining, we played outside until the puddles were deeper than our boots, because nobody wanted to go in.' },
  check: ['I wrote at least 3 complex sentences.', 'Each has a main part and an extra part.', 'I used a comma when the extra part came first.'],
  activity: { name: 'Conjunction Spin', steps: ['Make a spinner of 8 words: because, when, although, while, if, after, before, until.', 'Spin and write a sentence using that word.', 'Swap the order of the parts.', 'Add commas where needed.'] },
  prompts: { 5: ['Why I like my pet or my favourite place.', 'What I did when it rained.'], 6: ['A time I kept going even though it was hard.', 'A decision I made and why.'] },
  teacher: {
    tips: ['Display the 8 conjunctions as a "Complex Crew" poster.', 'Show the sentence can be flipped: main part first or extra part first.'],
    mistake: 'Leaving the extra part alone as a fragment ("Because I was tired.").',
    support: 'Give main clauses and have students add the extra part, then swap.',
    stretch: 'Use two subordinating conjunctions in one sentence. Move to SS5/SS6.',
    quick: 'Ask: "Start a sentence with Although…". Check it finishes properly.',
  },
});

WK_K({
  id: 'SS4', el: 'sentence', r: 4, name: 'Sentence Doctor', hook: 'Check tense, agreement and missing words in every sentence.',
  what: 'Sentences must be CORRECT, not just clever. The sentence doctor checks four things: verb tense, subject-verb agreement (the dogs run / the dog runs), missing words and word order.',
  why: 'e-asTTle Sentence structure R4: "most sentences are correct". The rubric says to judge word form, tense, agreement, articles, pronouns and word order within each sentence.',
  steps: ['Read your writing aloud, word for word, slowly.', 'Put a tick on every correct sentence.', 'For every non-tick, check tense, agreement, missing words and order.', 'Fix, then reread the whole sentence.'],
  ex: { before: 'The dogs runs fast. We is going to the park yesterday. Jumped the fence.', after: 'The dogs «run» fast. We «went» to the park yesterday. «We» jumped the fence.', wow: 'The dogs ran fast, but we kept up, jumping the fence with muddy boots.' },
  check: ['I checked tense in every sentence.', 'My subjects and verbs agree.', 'I found and added missing words.'],
  activity: { name: 'Sentence Hospital', steps: ['Patients: 8 sentences with one error each.', 'Diagnose: tense, agreement, missing word or word order.', 'Fix and label each.', 'Pick 3 sentences from your own writing and treat them.'] },
  prompts: { 5: ['What I did on my last holiday.', 'A day at home with my family.'], 6: ['A time I helped someone, checked sentence by sentence.', 'A game or sport I love, with every sentence checked.'] },
  teacher: {
    tips: ['Model reading aloud exactly what is written (not what they meant). That is how kids hear missing words.', 'Use a "Doctor\'s Bag" checklist poster.'],
    mistake: 'Students "read in" the missing word. Use a pencil to point at each word.',
    support: 'Work through 5 sentences together before independent practice. Use a coloured pen for editing.',
    stretch: 'Check longer, more complex sentences for agreement. Move to SS5.',
    quick: 'Point to a sentence with an error and ask "What is wrong here?"',
  },
});

WK_K({
  id: 'SS5', el: 'sentence', r: 4, name: 'Starter Switch', hook: 'Stop starting every sentence the same way.',
  what: 'When every sentence starts with "I" or "Then we", writing sounds like a robot. Switch the starters: an -ing word, an -ly word, a time phrase, a place phrase, a "who" clause or a conjunction.',
  why: 'e-asTTle Sentence structure R4 to R5: "variety in structure" and avoiding repetition. NZC Year 5: avoid repeating the same structure.',
  steps: ['Underline the first word of every sentence.', 'Circle any that repeat 2 or 3 times in a row.', 'Rewrite one starter using a different pattern.', 'Read to check it still makes sense.'],
  ex: { before: 'We got to the beach. We swam. We ate. We went home.', after: 'We got to the beach. «Quickly,» we swam. «After lunch,» we sat in the sun. «Exhausted,» we went home.', wow: 'Arriving at the beach, we dived straight in. Laughing, we raced the waves. By late afternoon, sunburnt and starving, we dragged ourselves home.' },
  check: ['No more than two sentences in a row start the same way.', 'I used at least 4 different kinds of starters.', 'My sentences still make sense.'],
  activity: { name: 'Starter Shuffle', steps: ['List 6 starters on cards: -ing, -ly, -ed, time, place, because/when.', 'Take 4 plain sentences.', 'Rewrite each with a new starter.', 'Place them in a paragraph and read aloud.'] },
  prompts: { 5: ['My morning routine, no sentence starting with "I".', 'My favourite place and what I do there.'], 6: ['A day at camp, using six different kinds of starter.', 'A time I explored somewhere new.'] },
  teacher: {
    tips: ['Display starters on a "Sentence Starter Wheel".', 'Teach the comma after an opening phrase (see PU5).'],
    mistake: 'Dangling openers ("Running down the hill, the sun was hot.") Ask: who is doing the running?',
    support: 'Give a bank of 8 starters and a partially filled paragraph.',
    stretch: 'Rearrange clauses for effect (NZC Year 6).',
    quick: 'Say "We went to the shop." and ask for 3 different starts.',
  },
});

WK_K({
  id: 'SS6', el: 'sentence', r: 5, name: 'Stretch It', hook: 'Extend sentences with extra phrases and clauses.',
  what: 'Stretching a sentence means adding extra information with phrases and clauses: an -ing phrase ("racing down the hill"), a who or which clause ("my cousin, who is a farmer"), or an appositive (a noun phrase that renames, "Tom, our dog,").',
  why: 'e-asTTle Sentence structure R5: "controlled and show variety … with extending phrases and/or clauses". NZC Year 5: add appositives; Year 6: adjectival phrases.',
  steps: ['Write a short main sentence.', 'Choose one stretch: -ing phrase, who/which clause, or appositive.', 'Add commas around the extra part.', 'Read aloud for control and clarity.'],
  ex: { before: 'My dog barked. He is called Rusty.', after: 'My dog, «Rusty, a hairy Huntaway,» barked «at the neighbour\'s sheep, which were grazing near the fence.»', wow: 'Rusty, my hairy Huntaway, barked at the neighbour\'s sheep, which scattered like scraps of paper across the paddock.' },
  check: ['I stretched at least 3 sentences.', 'The extra parts are punctuated correctly.', 'The sentences are still clear, not tangled.'],
  activity: { name: 'Sentence Elastic', steps: ['Write: "The farmer opened the gate."', 'Stretch it with an -ing phrase, then a who clause, then an appositive.', 'Keep all three stretches in one sentence.', 'Check it still makes sense.'] },
  prompts: { 5: ['A farm visit or a trip to the zoo.', 'A new place I explored.'], 6: ['An event at school, with stretched sentences.', 'Someone I admire, using appositives.'] },
  teacher: {
    tips: ['Use "sentence elastic" on the board: start small and stretch live.', 'Teach appositives as "a noun phrase that renames".'],
    mistake: 'Stretching into a messy run-on. Show the limit: one main idea per sentence.',
    support: 'Work with a sentence builder card: Who + did what + (who/which) + extra.',
    stretch: 'Combine with Starter Switch (SS5). Move to SS7.',
    quick: 'Ask them to add one stretch to a simple sentence in 30 seconds.',
  },
});

WK_K({
  id: 'SS7', el: 'sentence', r: 6, name: 'Short Punch', hook: 'Craft sentences deliberately: long, short, repeated, rearranged, for impact.',
  what: 'Top writers choose sentence length and rhythm on purpose. A short sentence after a long one hits hard. Repetition can build tension. Rearranged clauses change what the reader notices.',
  why: 'e-asTTle Sentence structure R6: "sentences are deliberately crafted to impact and engage". NZC Year 6: rearrange clauses and phrases for effect.',
  steps: ['Find the most important moment in your writing.', 'Try a short sentence (3 to 5 words) for the key moment.', 'Surround it with longer sentences.', 'Try repetition or reorder a clause. Keep what sounds best.'],
  ex: { before: 'There was a noise and I was scared and I did not move and it was a deer.', after: 'There was a noise. «I froze.» «A rustle. A snap. A shape in the trees.» It was only a deer.', wow: 'The bush was silent for so long that I almost relaxed. Then a branch snapped. I froze. Don\'t move. Don\'t breathe. A shape stepped out of the shadows, and a deer looked me in the eye.' },
  check: ['I used at least one short sentence for impact.', 'I mixed long and short on purpose.', 'My effect comes from choice, not accident.'],
  activity: { name: 'Rhythm Remix', steps: ['Take a paragraph written in same-length sentences.', 'Mark the key moment.', 'Rewrite: long, long, SHORT.', 'Read both aloud and discuss the difference.'] },
  prompts: { 5: ['A scary or exciting moment.', 'The moment I won or lost.'], 6: ['The most dramatic moment of a recent event.', 'A tense moment on a sports field or stage.'] },
  teacher: {
    tips: ['Read examples from class novels where a short sentence hits hard.', 'Have students clap the rhythm of their sentences.'],
    mistake: 'Fragments used by accident, not on purpose. Ask "Did you choose this?"',
    support: 'Offer a frame: long sentence. long sentence. Short one.',
    stretch: 'Write a paragraph where sentence length follows the emotion.',
    quick: 'Say a flat sentence and ask them to make it hit harder in 4 words.',
  },
});
