alphahax
========

Fun little hax for Javascript for generating alphabet letters

## install

```sh
$ npm install alphahax
```

## why?

because I thought it would be cool to do br0

## what's left?

check out `index.js` and look at the letters without obfuscation. someone should totally fork hax it up and pull request me. plz

## usage

```js
var alphahax = require('alphahax');

// we can do simple string
var joe = alphahax('joe'); // '\'j\'+(\'\'+{})[1]+(typeof !!1)[4]'
eval(joe) // joe

// it can handle spaces too for phrases
var iliketohaxstuff = alphahax('i like to hax stuff'); // (''+void 0)[5]+' '+(typeof !!2)[3]+(''+void 0)[5]+'k'+(typeof !!1)[4]+' '+(''+!!1)[0]+(''+{})[1]+' '+'h'+(''+(+'.'))[1]+'x'+' '+(typeof '')[0]+(''+!!1)[0]+(''+!!1)[2]+(typeof Function())[0]+(typeof Function())[0]

eval(iliketohaxstuff); // i like to hax stuff

// it can handle crazy characters too
var crazy = alphahax('it also accepts tons of other characters and stuff like !@#$%^& #@$%@% &^%#*&'); // (''+void 0)[5]+(''+!!1)[0]+' '+(''+(+'.'))[1]+(typeof !!2)[3]+(typeof '')[0]+(''+{})[1]+' '+(''+(+'.'))[1]+'c'+'c'+(typeof !!1)[4]+'p'+(''+!!1)[0]+(typeof '')[0]+' '+(''+!!1)[0]+(''+{})[1]+(typeof !!3)[6]+(typeof '')[0]+' '+(''+{})[1]+(typeof Function())[0]+' '+(''+{})[1]+(''+!!1)[0]+'h'+(typeof !!1)[4]+(''+!!1)[1]+' '+'c'+'h'+(''+(+'.'))[1]+(''+!!1)[1]+(''+(+'.'))[1]+'c'+(''+!!1)[0]+(typeof !!1)[4]+(''+!!1)[1]+(typeof '')[0]+' '+(''+(+'.'))[1]+(typeof !!3)[6]+{}.toString.call(new Date).toLowerCase()[8]+' '+(typeof '')[0]+(''+!!1)[0]+(''+!!1)[2]+(typeof Function())[0]+(typeof Function())[0]+' '+(typeof !!2)[3]+(''+void 0)[5]+'k'+(typeof !!1)[4]+' '+'!'+'@'+'#'+'$'+'%'+'^'+'&'+' '+'#'+'@'+'$'+'%'+'@'+'%'+' '+'&'+'^'+'%'+'#'+'*'+'&'


eval(crazy); // it also accepts tons of other characters and stuff like !@#$%^& #@$%@% &^%#*&

```

## license

MIT