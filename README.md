# frontend-framework

_Work in progress!_

The POD Point frontend framework is a library of base styles and components designed for rapid prototyping.

## Installation

```bash
npm install --save-dev pp-frontend-framework
```

Then either link to the minified stylesheet:

```html
<link rel="stylesheet" href="path/to/node_modules/pp-frontend-framework/build/css/style.css">
```

Or import the base Sass file into your project:

```sass
@import 'path/to/node_modules/pp-frontend-framework/src/scss/style.css';
```

## Development

When working on the package, you'll probably want to watch the css - to do so run the command below:

```bash
npm run watch-css
```

Once you've finished, you will need to run the following to package up the css, ready for building:

```bash
npm run build-css
```
