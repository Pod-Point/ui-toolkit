# ui-toolkit

The POD Point frontend framework is a library of base styles and components designed for rapid prototyping.

[View demo](https://pod-point.github.io/ui-toolkit)

## Installation

Install via `npm`:

```bash
npm install @pod-point/ui-toolkit
```

Then either link to the production ready files:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Document</title>
    <link rel="stylesheet" href="/path/to/node_modules/pod-point/ui-toolkit/dist/css/style.min.css">
</head>
<body>
    <script src="/path/to/node_modules/pod-point/ui-toolkit/dist/js/script.js"></script>
</body>
</html>
```

Or import the entry points into your project. For Sass, this is done by:

```sass
@import 'path/to/node_modules/pod-point/ui-toolkit/src/scss/style.scss';
```

And for the JavaScripts:

```js
import modal from '/path/to/node_modules/pod-point/ui-toolkit/dist/js/modal';
```

## Development

First, install all of the Node modules needed:

```bash
git clone git@github.com:Pod-Point/ui-toolkit.git
cd ui-toolkit
npm install
```

Then run the following command:

```bash
gulp watch
```

This will spin up a new development server at [http://localhost:3000](http://localhost:3000) with `/dist` as the 
document root.

### Icons

We're using [Fontello](http://fontello.com) for the icon fonts. If you need a new icon, head to the Fontello site, hit 
'Import' and upload `src/fonts/config.json` so that any existing settings aren't overridden. Then add your icon(s) to 
the package, download, extract and replace the font files in `src/fonts` and the `config.json` to complete your changes.

## Documentation

The `gh-pages` branch is a snapshot of `/dist`, hence why it is important to copy the build folder across. To generate 
new documentation online, run the following anywhere within the project:

```bash
git subtree push --prefix="dist" origin gh-pages
```
