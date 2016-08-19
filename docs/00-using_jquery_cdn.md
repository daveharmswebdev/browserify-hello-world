# Hello World with JQuery.

## JQuery the old-fashioned way.

We all know how to use JQuery with the cdn. Got to [jQuery](https://code.jquery.com/) or the [google hosted libraries](https://developers.google.com/speed/libraries/) and copy and the paste the script in our index.html.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Broswerify Hello World!</title>
  <link rel="stylesheet" href="dist/css/style.css">
</head>
<body>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <!-- <script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script> -->
  <script src="dist/bundle.js"></script>
</body>
</html>
```
Let's just go ahead and demonstrate saying hello world with jQuery using a CDN.

The following index.js will have a document-dot-ready enclosure that is standard with most jQuery apps.
```javascript
$(function() {
  $('body').append('<h1>Hello World</h1>');
});
```
Broswerify bundled our index.js, but so far we really haven't gotten a lot of mileage out of the process.
```bash
> browserify-hello-world@1.0.0 watch /Users/dave/workspace/talks/browserify-hello-world
> watchify src/index.js -o dist/bundle.js -v

576 bytes written to dist/bundle.js (0.03 seconds)
```
So let's npm install jQuery and start to exploit Broswerify's ability to use 'require.'
