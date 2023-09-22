var DEUTSCH_WORDS = [
  'stift',
  'tafel',
  'bein',
  'radio',
  'kaffeetisch',
  'teller',
  'fenster',
  'tisch',
  'schere',
  'schrank',
  'regenbogen',
  'lampe',
  'schokolade',
  'pullover',
  'vogel',
  'katze',
  'meer',
  'pfeffer',
  'stolz',
]

function randomWord() {
  return DEUTSCH_WORDS[Math.floor(Math.random() * DEUTSCH_WORDS.length)]
}

export { randomWord }
