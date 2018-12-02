const diff = require('fast-diff')

function make (v0, v1) {
  return convert(diff(v0, v1))
}

function convert (diff) {
  let pos = 0
  let jpatch = []
  for (const [mode, text] of diff) {
    if (mode === 0) {
      jpatch.push([pos, pos + text.length])
      pos += text.length
    } else if (mode === -1) {
      pos += text.length
    } else if (mode === 1) {
      jpatch.push(text)
    }
  }
  return jpatch
}

function apply (jpatch, str) {
  const f = (entry) => {
    if (Array.isArray(entry)) {
      // console.log('entry %j %j', entry, str.slice(...entry))
      return str.slice(...entry)
    } else {
      // console.log('entry %j', entry, '(String)')
      return entry
    }
  }
  // console.log('APPLY  %j %j', jpatch, str)
  // console.log('PREJOIN', jpatch.map(f))
  return jpatch.map(f).join('')
}

module.exports = { make, apply, convert }
