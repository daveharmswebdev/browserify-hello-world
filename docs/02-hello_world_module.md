# Modularizing with 'require' and 'module.exports'
*See hwModule branch*.

The simplest module we could make would be one that held a value such as a string:
```javascript
// helloWorld.js

'use strict';

module.exports = 'Hello World! From helloWorld.js';
```
Let's go ahead and require this module and use it in index.js. We are
```javascript
/* jshint -W079 */
'use strict';

const $ = require('jQuery');
const hw = require('./helloWorld');

$('body').append(`<h1>${hw}!</h1>`);
```
Notice the size of bundle.js.
```
731156 bytes written to dist/bundle.js (0.04 seconds)
```
Let's move on to a more robust module.
