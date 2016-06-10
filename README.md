# Style Zencart
Bootstrap Based CSS and JS for [Zencart](http://http://www.zen-cart.com) E-Commerce

## Introduction

This is a template for generating CSS and JS files for Zencart using Bootstrap.

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
cd /local/path/to/style-zencart
git clone https://github.com/dakanji/style-zencart style-zencart
```

If you wish to contribute to this project, clone the fork using your favourite Git Agent or manually:

```bash
cd /local/path/to/style-zencart
git clone https://github.com/YOUR_GITHUB_USERNAME/style-zencart style-zencart
```



Then open the folder in your command line, and install the needed dependencies:

```bash
cd /local/path/to/style-zencart
npm install && bower install
```

Finally, run `npm start` to run Gulp. Your style guide will be created in a sub folder called `dist`, viewable at this URL:

```
http://localhost:8000
```

The style guide will be loaded in your browser.
- Edit the various files and your changes will be immediately reflected in the browser. 
- Press `CTRL C` to stop the live reload process. 

To create compressed, production-ready assets to deploy to Zencart, run `npm run build`.

If you have created a fork earlier, you can push your changes to your fork and then create a pull request for your proposed changes.

You can read about contributing [HERE] (http://docs.zen-cart.com/Contributing/main).
