# A more robust Hello World module

We're able to name space and return an object of functions. robust.sayHello takes a name and returns `Hello ${name}`.  Triple imports the times function from lodash and triples a passed in number. And robust.sayHelloToMyLittleFriends takes an array and passes it into a handlebars template and returns that back to index.js. This is the advantage of modularization that Browserify provides.
```javascript
// helloWorldRobust.js
'use strict';

const _ = require('lodash');
const myLittleFriends = require('./views/littleFriends.hbs');

let robust = {};

robust.sayHello = myLittleFriend => `Hello ${myLittleFriend}`;
// making use of lodash
robust.triple = number => {
  let sum = 0;
  _.times(3, () => sum += number);
  return sum;
};
robust.sayHelloToMyLittleFriends = function(friends) {
  // maybe not the best way to use handlebars
  // but using a handlebar template
  return myLittleFriends({friends: friends});
};


module.exports = robust;
```
