/* jshint -W079 */
'use strict';

const $ = require('jQuery');
const hw = require('./helloWorld');

$('body').append(`<h1>${hw}!</h1>`);
