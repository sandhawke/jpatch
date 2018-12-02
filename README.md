[![NPM version][npm-image]][npm-url]

### Motivation

A big string changes on the server, and we want to make the same
change on the client, without retransmitting the whole string.

### Example

```js
const jpatch = require('jpatch')

const s1 = 'sandro is having a bad idea'
const s2 = 'sandro is having a good idea'

const patch = jpatch.make(s1, s2)
// => [ [ 0, 19 ], 'goo', [ 21, 27 ] ]

const made = jpatch.apply(patch, s1)
// made === s1
```

### API

jpatch.make(old, new): compute an efficient patch from `old` to `new`

jpatch.apply(patch, old): re-compute `new` 

### Patch Format

Patch format is an array to be joined to make the result, after any
subarrays are replaced by that slice() of the source text.

This patch:

```js
[ [1,4], 'hello', [10,12] ]
```

Means the result will be computed as:

```js
[source.slice(1,4), 'hello',  source.slice(10,12)].join('')
```

### See Also

All the hard work is done by [fast-diff](https://www.npmjs.com/package/fast-diff)

After I wrote this, I discovered [textdiff-create](https://www.npmjs.com/package/textdiff-create) which does approximately the same thing.


[npm-image]: https://img.shields.io/npm/v/jpatch.svg?style=flat-square
[npm-url]: https://npmjs.org/package/jpatch
