# frontend-framework

The POD Point frontend framework is a library of base styles and components designed for rapid prototyping.

[View demo](https://pod-point.github.io/frontend-framework)

## Installation

```bash
git clone git@github.com:Pod-Point/frontend-framework.git
cd frontend-framework
npm install
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
    <script src="/path/to/node_modules/pod-point/frontend-framework/build/js/script.js"></script>
</body>
</html>
```

Or import the entry points into your project. For Sass, this is done by:

```sass
@import 'path/to/node_modules/pod-point/frontend-framework/src/scss/style.scss';
```

And for the JavaScripts:

```js
import modal from '/path/to/node_modules/pod-point/frontend-framework/build/js/modal';
```

## Development

First, install all of the Node modules needed:

```bash
npm install
```

Then run the following command:

```bash
npm run watch
```

This will spin up a new development server at [http://localhost:8080](http://localhost:8080) with `/docs` as the document root. Also some watch tasks will be spawaned, which will copy the `build` directory to `docs` once the assets have been built. This might sound a little strange but will allow you to keep the Documentation up to date as you develop.

## Documentation

The `gh-pages` branch is a snapshot of `/docs`, hence why it is important to copy the build folder across. To generate new documentation online, run the following anywhere within the project:

```bash
git subtree push --prefix="docs" origin gh-pages
```
