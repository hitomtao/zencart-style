# Zencart Style
Bootstrap Based CSS and JS for [Zen Cart  E-Commerce](http://http://www.zen-cart.com).

## Introduction

This is a template for generating CSS and JS files for Zen Cart using Bootstrap.

The template is based on [Bootswatch] (https://github.com/thomaspark/bootswatch) by Thomas Park and is released under the [MIT License] (https://github.com/dakanji/zencart-style/blob/master/LICENSE)

It comes with a [Gulp] (http://gulpjs.com/) powered build system with:
- Built-in BrowserSync server
- Sass compilation and prefixing
- JavaScript concatenation
- CSS auto-prefixing

For production builds:
- Image compression
- JavaScript minification
- CSS minification

## Prerequisites

You will need to have the following utilities installed to use this template:

- [Git](https://git-scm.com/)
- [Bower](https://bower.io/)
- [NodeJS](https://nodejs.org/en/)

## Setup

To set up the template, first clone this repository using your favourite Git agent or manually:

```bash
cd /local/path/to/zencart-style
git clone https://github.com/dakanji/zencart-style zencart-style
```

If you wish to contribute to this project, clone the fork using your favourite Git agent or manually:

```bash
cd /local/path/to/zencart-style
git clone https://github.com/YOUR_GITHUB_USERNAME/zencart-style zencart-style
```



Then open the folder in your command line, and install the needed dependencies:

```bash
cd /local/path/to/zencart-style
npm install && bower install
```

When this is done, run `npm run dev` to run Gulp for development. 

Your style guide will be created in the `zencart` folder and loaded in your browser

You can now edit the various files in the src folder as desired and your changes will be immediately reflected in the browser.

You can also add new html files to the `src/pages` and navigate to these at `/pages/your-new-page.html`.

When you are done, press `CTRL C` to stop the livereload process and run `npm run prod` to create compressed, production ready assets for Zen Cart.

If you created a fork earlier, you can push your production changes to your fork and then create a pull request with your changes. 

See the Zen Cart guide to contributing to the project at this [LINK] (http://docs.zen-cart.com/Contributing/main).
