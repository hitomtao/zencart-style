# Style Zencart
Bootstrap Based CSS and JS for [Zencart](http://http://www.zen-cart.com) E-Commerce

## Introduction

This is a template for generating CSS and JS files for Zencart using Bootstrap.

The template is based on the [Bootswatch] (https://github.com/thomaspark/bootswatch) and is released under the [MIT License] (https://github.com/dakanji/style-zencart/blob/master/LICENSE)

It comes with a [Gulp] (http://gulpjs.com/) powered build system with:
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Prerequisites

You will need to have the following utilities installed to use this template:

- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/) (0.10 or greater)
- [Bower](https://bower.io/)

## Setup

To set up the template, first clone this repository using your favourite Git agent or manually:

```bash
cd /local/path/to/style-zencart
git clone https://github.com/dakanji/style-zencart style-zencart
```

If you wish to contribute to this project, clone the fork using your favourite Git agent or manually:

```bash
cd /local/path/to/style-zencart
git clone https://github.com/YOUR_GITHUB_USERNAME/style-zencart style-zencart
```



Then open the folder in your command line, and install the needed dependencies:

```bash
cd /local/path/to/style-zencart
npm install && bower install
```

When this is done, run `npm run dev` to run Gulp for development. 

Your style guide will be created in a sub folder called `dist` and loaded in your browser

You can now edit the various files in the src folder as desired and your changes will be immediately reflected in the browser. 

When you are done, press `CTRL C` to stop the livereload process and run `npm run prod` to create compressed, production ready assets for ZENCART.

If you created a fork earlier, you can push your production changes to your fork and then create a pull request with your changes. 

You can read more about contributing to ZENCART about contributing [HERE] (http://docs.zen-cart.com/Contributing/main).
