# style-zencart
Bootstrap Based CSS and JS for Zencart

This is a template for generating CSS and JS files for [Zencart](http://http://www.zen-cart.com) using Bootstrap 3.

The template is based on the [Bootswatch Bootstrap Template] (https://github.com/thomaspark/bootswatch) and is released under the [MIT License] (https://github.com/dakanji/style-zencart/blob/master/LICENSE)

It comes with a [Gulp] (http://gulpjs.com/) powered build system with:
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Prerequisites

You will need to have these installed and set up to use this template:

- [NodeJS](https://nodejs.org/en/) (0.10 or greater)
- [Git](https://git-scm.com/)

## Setup

To set up the template, first clone this repository using your favourite Git Agent or manually:

```bash
git clone https://github.com/dakanji/style-zencart style-zencart
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd /path/to/style-zencart
npm install
bower install
```

Finally, run `npm start` to run Gulp. Your finished style guide will be created in a sub folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

You can then update the sass and/or javascript files.

To create compressed, production-ready assets to deploy to your Zencart site, run `npm run build`.
