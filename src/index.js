/* jshint -W079 */
'use strict';

const $ = require('jQuery');
const hw = require('./helloWorld');
const robust = require('./helloWorldRobust');

$('body').append(`<h1>${robust.sayHello('Dave')}!</h1>`);
$('body').append(`<h1>${robust.triple(8)}!</h1>`);
let littlePeople = [
  'Jan',
  'Marsha',
  'Cindy',
  'Peter',
  'Bobby',
  'Greg'
];
$('body').append(robust.sayHelloToMyLittleFriends(littlePeople));
