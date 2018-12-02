const stringpatch = require('.')
const test = require('tape')

const strings = [
  '',
  'a',
  'ab',
  'abc',
  'aa',
  'bb',
  'aaaaaaaaaaaaaaaaaaaa',
  'aaaaaaaaaaaaaaaaaaaaa',
  'baaaaaaaaaaaaaaaaaaaa',
  'aaaaaabaaaaaaaaaaaaa',
  'baaaaabaaaaaaaaaaaaa',
  'baaaaabaaaaaaaaaaaab'
]

for (let s1 of strings) {
  for (let s2 of strings) {
    test(`patch "${s1}" => "${s2}")`, t => {
      const patch = stringpatch.make(s1, s2)
      const made = stringpatch.apply(patch, s1)
      t.equal(s2, made)
      t.end()
    })
  }
}

test('bad diff', t => {
  const d = stringpatch.convert([[2]])
  t.deepEqual(d, [])
  t.end()
})
