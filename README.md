[![NPM version][npm-image]][npm-url]

```js
const stringpatch = require('stringpatch')

const s1 = 'sandro is having a bad idea'
const s2 = 'sandro is having a good idea'

const patch = stringpatch.make(s1, s2)
// => [ [ 0, 19 ], 'goo', [ 21, 27 ] ]

const made = stringpatch.apply(patch, s1)
// made === s1
```

stringpatch.make(old, new): compute an efficient patch from `old` to `new`

stringpatch.apply(patch, old): re-compute `new` 

Patch format is an array to be join('')d to make the result, after any
subarrays are replaced by that slice() of the source text.

This patch:

```js
[ [1,4], 'hello', [10,12] ]
```

Means the result will be computed as:

```js
[source.slice(1,4), 'hello',  source.slice(10,12)].join('')
```

All the hard work is done by [fast-diff](https://www.npmjs.com/package/fast-diff)

## see also

After I wrote this, I discovered [textdiff-create](https://www.npmjs.com/package/textdiff-create) which does approximately the same thing.


[npm-image]: https://img.shields.io/npm/v/stringpatch.svg?style=flat-square
[npm-url]: https://npmjs.org/package/stringpatch
