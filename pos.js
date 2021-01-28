const partsofspeech =
`cc	Coordinating conjunction
cd	Cardinal number
dt	Determiner
ex	Existential there
fw	Foreign word
in	Preposition or subordinating conjunction
jj	Adjective
jjr	Adjective, comparative
jjs	Adjective, superlative
ls	List item marker
md	Modal
nn	Noun, singular or mass
nns	Noun, plural
nnp	Proper noun, singular
nnps	Proper noun, plural
pdt	Predeterminer
pos	Possessive ending
prp	Personal pronoun
prp$	Possessive pronoun
rb	Adverb
rbr	Adverb, comparative
rbs	Adverb, superlative
rp	Particle
sym	Symbol
to	to
uh	Interjection
vb	Verb, base form
vbd	Verb, past tense
vbg	Verb, gerund or present participle
vbn	Verb, past participle
vbp	Verb, non-3rd person singular present
vbz	Verb, 3rd person singular present
wdt	Wh-determiner
wp	Wh-pronoun
wp$	Possessive wh-pronoun
wrb	Wh-adverb`

const posmap = new Map();

for(const line of partsofspeech.split('\n')) {
    const firstspace = line.indexOf('\t');
    posmap.set(line.slice(0,firstspace), line.slice(firstspace+1));
}

for(const p of `,.?!;:"'`) {
    posmap.set(p, "Punctuation")
}

console.log(posmap);