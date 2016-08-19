# Hello World with jQuery.

## jQuery - npm installed and required
*see npmJQuery branch.*
First we delete the script tags that call's the jQuery cdn.
Our index.html looks like this:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Broswerify Hello World!</title>
  <link rel="stylesheet" href="dist/css/style.css">
</head>
<body>

  <script src="dist/bundle.js"></script>
</body>
</html>
```
Then we ```npm install jquery --save```. In case you didn't know your package.json will display the following dependency:
```json
{
  "dependencies": {
    "jquery": "^3.1.0"
  },
}
```
So now we can require jQuery in our index.js.
```javascript
/* jshint -W079 */
'use strict';

const $ = require('jQuery');

$('body').append('<h1>Hello World</h1>');
```
Notice the document ready enclosure is gone. And notice the require statement. But still not getting a lot of mileage out of the Broswerify. Let's build our own module.
