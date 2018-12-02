
diff = compute an efficient patch from one string to another

patch = apply such a diff

Patch format is an array to be join('')d to make the result, after any
subarrays are replaced by that slice() of the source text.

So: [ [1,4], 'hello', [10,12] ]

Means result is: source.slice(1,4) + 'hello' + source.slice(10,12)

All the hard work is done by fast-diff

```js
const stringpatch = require('stringpatch')

const s1 = 'sandro is having a bad idea'
const s2 = 'sandro is having a good idea'

const patch = stringpatch.make(s1, s2)
// => [ [ 0, 19 ], 'goo', [ 21, 27 ] ]

const made = stringpatch.apply(patch, s1)
// made === s1
```


## see also

After I wrote this, I discovered [textdiff-create](https://www.npmjs.com/package/textdiff-create) which does approximately the same thing.