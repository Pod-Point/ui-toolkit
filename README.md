# frontend-framework

The POD Point frontend framework is a library of base styles and components designed for rapid prototyping.

[View demo](https://pod-point.github.io/frontend-framework)

## Installation

```bash
npm install --save-dev pp-frontend-framework
```

Then either link to the production ready files:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="/path/to/node_modules/pod-point/frontend-framework/build/css/style.min.css">
</head>
<body>
    <script src="/path/to/node_modules/pod-point/frontend-framework/build/js/script.min.js"></script>
</body>
</html>
```

Or import the entry points into your project. For Sass, this is done by:

```sass
@import 'path/to/node_modules/pod-point/frontend-framework/src/scss/style.scss';
```

And for the JavaScripts:

```js
require('/path/to/node_modules/pod-point/frontend-framework/src/js/script.js');
```

## Development

When working on the package, you can open up `docs/index.html` in your browser and run the following:

```bash
npm run watch:dev
```

This will start [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) 
and some watch tasks, which will copy the `build` directory to `docs`.

## Documentation

To generate the `gh-pages` branch, run this command:

```bash
git subtree push --prefix="docs" origin gh-pages
```
