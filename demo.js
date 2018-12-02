const jpatch = require('jpatch')

const s1 = 'sandro is having a bad idea'
const s2 = 'sandro is having a good idea'

const patch = jpatch.make(s1, s2)
console.log('patch: ', patch)

const made = jpatch.apply(patch, s1)
console.log('result: ', made)
console.log(made === s2 ? 'ok!' : 'failed!')
