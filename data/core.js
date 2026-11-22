/* WRITING KEYS — core data. Keys are in data/keys-*.js (loaded after this file). */
window.WK = {
  version: 1,
  elements: [
    { id: 'ideas',        code: 'ID', name: 'Ideas',               nick: 'Spark',      max: 6, color: '#ED2161', icon: '💡', blurb: 'What you say. Lots of relevant ideas, explained and thought about deeply.' },
    { id: 'structure',    code: 'SL', name: 'Structure & Language', nick: 'Blueprint',  max: 6, color: '#FF8A3D', icon: '🏗️', blurb: 'Does your writing have the right parts and the right kind of words for its purpose?' },
    { id: 'organisation', code: 'OR', name: 'Organisation',         nick: 'Flow',       max: 7, color: '#FFD23F', icon: '🧭', blurb: 'Grouping, ordering and linking ideas, then paragraphs that guide your reader.' },
    { id: 'vocabulary',   code: 'VO', name: 'Vocabulary',           nick: 'Word Power', max: 6, color: '#3DDC97', icon: '🎨', blurb: 'Precise, vivid word choices that build pictures and mood.' },
    { id: 'sentence',     code: 'SS', name: 'Sentence Structure',   nick: 'Sentence Lab', max: 6, color: '#3DB8FF', icon: '🔧', blurb: 'Correct sentences with variety, length and extension.' },
    { id: 'punctuation',  code: 'PU', name: 'Punctuation',          nick: 'Mark It',    max: 7, color: '#A66CFF', icon: '✒️', blurb: 'The little marks that make your writing clear and powerful.' },
    { id: 'spelling',     code: 'SP', name: 'Spelling',             nick: 'Spell Squad', max: 6, color: '#B6F03A', icon: '🔤', blurb: 'Spelling everyday words right and having a smart go at the hard ones.' },
  ],
  // NZC (Te Mātaiaho) English Phase 2, Years 4–6, Writing teaching sequence — statements used on the cards.
  // Source: newzealandcurriculum.tahurangi.education.govt.nz (English Phase 2, Writing). Check wording against the live page.
  nzc: {
    ideas:        { 5: 'Choose genre, register and word choice to suit the audience, and justify them; consider how the audience may be affected.', 6: 'Make deliberate choices about what to include or leave out, based on how the writing may affect others.' },
    structure:    { 5: 'Include narrative elements in paragraphs; use time connectives, sensory details and dialogue; end with a conclusion that follows from the events. Inform: facts, examples, precise vocabulary. Persuade: first person, opinions supported by facts and details.', 6: 'Use well-structured paragraphs and transitional phrases; show actions and feelings; shifts in time and multiple settings; effective closure. Persuade: clear position, strongest to weakest argument.' },
    organisation: { 5: 'Turn organised information into draft paragraphs; write multi-paragraph texts with an introduction, sub-topics and a conclusion.', 6: 'Link paragraphs for cohesion; write multi-paragraph texts for various purposes, using headings and subheadings.' },
    vocabulary:   { 5: 'Select and use simile, metaphor and personification deliberately, and explain their effect; choose precise words.', 6: 'Use imagery, personification, figurative language, alliteration and idioms purposefully, and explain their effect.' },
    sentence:     { 5: 'Create a range of sentence structures and explain their impact; avoid repeating the same structure; add appositives.', 6: 'Choose and justify a preferred structure; rearrange clauses and phrases for effect; add adjectival phrases.' },
    punctuation:  { 5: 'Use beginning and ending punctuation correctly and consistently; add appositives with commas and direct-speech punctuation, with some support; possessive apostrophes (singular and plural).', 6: 'Use commas and direct-speech punctuation independently; possessive apostrophes in general.' },
    spelling:     { 5: 'Spell vowel patterns such as eigh, ie, ough, ue; less-common homophones (queue/cue); suffix rules (doubling, y→i, f/fe→ves); use a simple or online dictionary.', 6: 'Spell less-common graphemes (kn, mb, wr, sc); prefixes and suffixes such as semi-, sub-, mis-, multi-, pre-, -tion, -sion, -ment; use a dictionary to find or confirm spellings.' },
  },
  // Which tier a key is for each year, decided by the e-asTTle R-level the key belongs to.
  tier: { 5: function (r) { return r <= 4 ? 'core' : r === 5 ? 'stretch' : 'star'; }, 6: function (r) { return r <= 2 ? 'warm' : r <= 5 ? 'core' : 'stretch'; } },
  tierLabel: { core: 'CORE KEY', stretch: 'STRETCH KEY', star: 'SUPER STAR KEY', warm: 'WARM-UP KEY' },
  evidenceNeeded: 5,
  keys: [],
  // e-asTTle test (revised 2012). The marking brain gives seven R-scores; this app never turns them into aWs or levels.
  placement: { note: 'Keys at or below the student\'s R-score are credited as already showing in the test. The key one level up is the START HERE key.' },
  // Same words everywhere so students always know what to do.
  markHow: 'Circle it. Draw an arrow to the word or sentence. Write the key code in the margin (for example SS2).',
  testDay: {
    before: ['Read the prompt twice. Underline what you must write about.', 'Plan in 2 minutes: Who? Where? When? What happened first, next, last? How did I feel?', 'Pick 2 Writing Keys you will show off on purpose.'],
    during: ['Start with an orientation: who, what, where, when.', 'Keep it in the past tense. Use first, then, next, after that.', 'Give every idea a because, a detail or a feeling.', 'New time, place or idea = new paragraph.', 'Check your sentences end with a capital and a full stop as you go.'],
    after: ['Read it aloud in your head. Fix missing words first.', 'Check capitals, full stops, then commas and apostrophes.', 'Underline 5 tricky words and have-a-go spell them again.', 'Add one more detail or feeling to your best idea.'],
  },
  practicePrompts: [
    'Think of a time you learned something new from someone in your whānau or family. Write to recount that time.',
    'Think of a time you and your friends solved a problem together. Write to recount that time.',
    'Think of a time you tried hard and were proud of yourself. Write to recount that time.',
    'Think of a time you helped someone. Write to recount that time.',
    'Think of a school camp, trip or special day. Write to recount what happened.',
    'Think of a time something did not go to plan, but turned out okay. Write to recount that time.',
  ],
};
// helper used by the key files
window.WK_K = function (k) { k.code = k.id; window.WK.keys.push(k); };
