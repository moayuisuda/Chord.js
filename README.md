# rad.js

## :tophat: Get chord/scale/scaleChords you want.
### More info in https://moayuisuda.github.io/rad.js/

```js
import {chord, scale, scaleChords} from 'rad.js'

chord('Cm7add11omit5/bG');
// tip: if you want to write a 'b' or '#', code like this 'b7' or 'G#'
chord({root: 'C', type: 'm7', add: ['11'], omit: ['5'], on: 'G'}); // you can also pass param like this.

scale({root: 'C', type: 'ionian'});
scaleChords({root: 'C', type: 'ionian'});
```

Or you can just use it as a global variable
```js
<script src="./rad.js"></script>

rad.chord('Cm7add11omit5/G');
rad.scale({root: 'C', type: 'ionian'});
rad.scaleChords({root: 'C', type: 'ionian'});
```


