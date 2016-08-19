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
