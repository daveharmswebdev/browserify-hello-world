# Browserify Hello World
An exploration of Browserify and the 'Hello World' theme.

## Steps to getting up and running with Browserify.

1. Install Browserify and Watchify globally.
```
npm install -g watchify browserify
```
2. npm init and add the watch and build scripts, with the caveat that you will place your index.js in /src and your bundle.js in /dist. The '-v' tag is for verbose output to the terminal. And the -d allows for easy debugging; even though all the javascript is bundled into one file, you will still be able see each file in Chrome dev tools due to Browserify file mapping.
```json
  {
    "scripts": {
      "build": "browserify src/index.js -o dist/bundle.js -d",
      "watch": "watchify src/index.js -o dist/bundle.js -v -d"
    }
  }
```
3. Add the following script tag in your index.html.
```html
<script src="dist/bundle.js"></script>
```
4. In order to follow along with this tutorial npm install jquery, handlebars, hbsfy, and lodash.
```
npm install jquery lodash --save
npm install handlebars hbsfy --save-dev
```
## .gitignore

At the very least I suggest these two entries in you .gitignore.

```
dist/bundle.js
node_modules
```
### The branches of this repo.
Each branch ( consolelog, hwModule, npmJQuery, robustModule ) corresponds with a markdown file in /docs. They show the step wise progression of this repository as the hello world app gets more and more mileage out of Broswerify.
