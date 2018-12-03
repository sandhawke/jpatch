const jpatch = require('.')
const test = require('tape')

test('benchmark 10GB', t => {
  let count = 100
  let len = 10000000
  let mid = len / 2

  const s1 = ' 12345679'.repeat(len / 10)
  let s = s1

  for (let n = 0; n < count; n++) {
    const s2 = s.slice(0, mid) + ' (' + n + ') ' + s.slice(mid)
    // console.log(s)
    // console.log(s2)
    const patch = jpatch.make(s, s2)
    // console.log(patch, '\n')
    const made = jpatch.apply(patch, s)
    t.equal(s2, made)
    s = s2
  }
  t.end()
})
