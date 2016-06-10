// Zencart E-Commerce: Style Template
//
// Gulpfile to create Bootstrap based CSS and JS files for Zencart.
//

/*******************************
  ****************************
  * 01: INITIALISE
  ****************************
********************************/
const $           = require('gulp-load-plugins')();
const ARGV        = require('yargs').argv;
const BROWSER     = require('browser-sync');
const GULP        = require('gulp');
const PANINI      = require('panini');
const REMOVE      = require('del');
const SEQUENCE    = require('run-sequence');
const ES          = require('event-stream');
const EXT_NAME    = require('gulp-extname');
const SWAP_HTML   = require('gulp-html-replace');
const ADD_STRING  = require('gulp-inject-string');
const SWAP_TEXT   = require('gulp-replace');
const CACHEFLAG   = Math.floor(Math.random()*900000) + 100000;

const POSTCSS     = require('gulp-postcss');
const CSS_PROCESS = [
  require('postcss-normalize-charset'),
  require('postcss-remove-prefixes'), 
  require('postcss-ordered-values'),
  require('postcss-merge-rules'), 
  require('postcss-fakeid'),
  require('css-declaration-sorter')
];


// Flag whether to build for production
const PRODUCTION = !!(ARGV.production);

// Flag whether to distribute source files
const DIST_SRC = true;

// Port to use for the development server.
const DEV_PORT = 8000;

// Browsers to target when prefixing CSS.
const COMPATIBILITY = ['last 2 versions', 'ie >= 9'];

// Use additional font icons
const FONT_ICONS = false;
const FONT_SASS='src/assets/scss/components/fonticon/**/scss/';
const FONT_PATH='src/assets/scss/components/fonticon/**/fonts/**/*';

// Misc filesystem paths
const JS_SRC = 'assets/sources/js';
const JS_DIST = 'assets/dist/js';
const JS_EXT = PRODUCTION ? '.min.js' : '.js';
const JQ_URI = PRODUCTION ? JS_DIST : JS_SRC;
const JQ_WRITE = '<script>window.jQuery || document.write(\'<script src="' 
        + JQ_URI.replace('dist/','') + '/jquery' + JS_EXT 
        + '"><\\/script>\');</script>';

// File paths to various assets are defined here.
const PATHS = {
  assets: [
    'src/assets/**/*',
    '!src/assets/{img,js,scss}/**/*',
    '!src/assets/{img,js,scss}/**/',
    '!src/assets/{img,js,scss}/'
  ],
  sass_fonticon_include: [
    FONT_SASS,
    'bower_components/foundation-sites/scss/util/',
  ],
  javascript_plugin: [
    'src/assets/js/**/*.js',
    '!src/assets/js/bootstrap.js'
  ]
};

/*******************************
  ****************************
  * 02: MAIN PROCESSES
  ****************************
********************************/
// Build the site
GULP.task('build', function(done) {
  SEQUENCE(
    ['clean:assets', 'clean:tmp'], 
    ['pages', 'sass', 'javascript', 'images', 'copy'], 
    ['clean:tmp', 'clean:sources'], 
  done);
});

// Start a server with LiveReload to preview the site
GULP.task('server', ['build'], function() {
  BROWSER.init({
    server: 'assets', port: DEV_PORT
  });
});

/*******************************
  ****************************
  * 03: PREP FOLDERS
  ****************************
********************************/
// Remove the "dist" folder if it exists
GULP.task('clean:assets', function(done) {
  return REMOVE('assets/**');
});

// Remove the "tmp" folder if it exists
GULP.task('clean:tmp', function() {
  return REMOVE('tmp/**');
});

// Remove the "assets/sources" folder if flagged
GULP.task('clean:sources', function() {
  var stream;
  if(PRODUCTION && !DIST_SRC) {
    stream = REMOVE('assets/sources/**');
  }
  return stream;
});

/*******************************
  ****************************
  * 04: BUILD HTML FILES
  ****************************
********************************/
// HTML build dispatcher
GULP.task('pages', function(done) {
  SEQUENCE('pages:main', 'pages:links', 'pages:prettify', done);
});

// Copy page templates into temp HTML files
GULP.task('pages:main', function() {
  return GULP.src('src/pages/**/*.{html,hbs,handlebars}')
    .pipe(PANINI({
      root: 'src/pages/',
      layouts: 'src/layouts/',
      partials: 'src/partials/',
      data: 'src/data/',
      helpers: 'src/helpers/'
    }))
    .pipe(GULP.dest('tmp/html/raw'));
});

// Change links to asset files for production build
GULP.task('pages:links', function() {
  var main_css = '/sources/css/main.css?' + CACHEFLAG;
  var main_js = '/sources/js/main.js?' + CACHEFLAG;
  var custom_css = '/sources/css/custom.css?' + CACHEFLAG;
  var plugin_js = '/sources/js/plugin.js?' + CACHEFLAG;
  var fonticon_css = '/sources/css/fonticon.css?' + CACHEFLAG;
  if(PRODUCTION){
    main_css = '/dist/css/main.min.css?' + CACHEFLAG;
    main_js = '/dist/js/main.min.js?' + CACHEFLAG;
    custom_css = '/dist/css/custom.min.css?' + CACHEFLAG;
    plugin_js = '/dist/js/plugin.min.js?' + CACHEFLAG;
    fonticon_css = '/dist/css/fonticon.min.css?' + CACHEFLAG;
  }
  if(!FONT_ICONS){
    fonticon_css = '';
  }
  var replace_html = SWAP_HTML({
    'main_css': main_css,
    'main_js': main_js,
    'custom_css': custom_css,
    'plugin_js': plugin_js,
    'fonticon_css': fonticon_css,
    'jquery_js': JQ_WRITE
  });
  return GULP.src('tmp/html/raw/**/*.html')
    .pipe(replace_html)
    .pipe(GULP.dest('tmp/html/fixed'));
});

// Prettify temp HTML files and move to dist folder
GULP.task('pages:prettify', function() {
  return GULP.src('tmp/html/fixed/**/*.html')
    .pipe($.prettify())
    .pipe(GULP.dest('assets'));
});

// Rebuild HTML files
GULP.task('pages:reset', function(done) {
  PANINI.refresh();
  SEQUENCE('pages:regen', done);
});

// Rebuild HTML files
GULP.task('pages:regen', function(done) {
  SEQUENCE(['pages', 'sass'], ['clean:tmp', 'clean:sources'], done);
});

/*******************************
  ****************************
  * 05: BUILD CSS FILES
  ****************************
********************************/
// CSS build dispatcher
GULP.task('sass', function(done) {
  if(PRODUCTION && FONT_ICONS){
    SEQUENCE(
      ['sass:main:build', 'sass:custom:build', 'sass:fonticon:prep'], 
      ['sass:main:minify', 'sass:fonticon:build'],
      ['sass:custom:minify'], 
      ['sass:fonticon:minify'], 
    done);
  } else if(!PRODUCTION && FONT_ICONS){
    SEQUENCE(
      ['sass:main:build', 'sass:custom:build', 'sass:fonticon:prep'], 
      ['sass:fonticon:build'], 
    done);
  } else if(PRODUCTION && !FONT_ICONS){
    SEQUENCE(
      ['sass:main:build', 'sass:custom:build'], 
      ['sass:main:minify'], 
      ['sass:custom:minify'], 
    done);
  } else {
    SEQUENCE(['sass:main:build', 'sass:custom:build'], done);
  }
});

// Compile main Sass into CSS
GULP.task('sass:main:build', function() {
  return GULP.src('src/assets/scss/main.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass()
      .on('error', $.sass.logError))
    .pipe(POSTCSS(CSS_PROCESS))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    .pipe($.sourcemaps.write())
    .pipe(GULP.dest('assets/sources/css'));
});

// Minify main CSS file for production build
GULP.task('sass:main:minify', function() {
  var uncss = $.uncss({
    html: ['src/**/*.html'],
    ignore: [
      new RegExp('\.in'),
      new RegExp('\.collaps*'),
      new RegExp('\.(open|close|fade|modal)'),
      new RegExp('\.(col|carousel|dropdown)-'),
      new RegExp('^\.(popover|tooltip)')
    ]
  });
  return GULP.src('assets/sources/css/main.css')
    .pipe(uncss)
    .pipe($.cssnano())
    .pipe(SWAP_TEXT('*/', '*/\n'))
    .pipe(EXT_NAME('.min.css'))
    .pipe(GULP.dest('assets/dist/css'));
});

// Compile custom Sass into CSS
GULP.task('sass:custom:build', function() {
  return GULP.src('src/assets/scss/custom.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass()
      .on('error', $.sass.logError))
    .pipe(POSTCSS(CSS_PROCESS))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    .pipe($.sourcemaps.write())
    .pipe(GULP.dest('assets/sources/css'));
});

// Minify custom CSS file for production build
GULP.task('sass:custom:minify', function() {
  var uncss = $.uncss({
    html: ['src/**/*.html'],
    ignore: [
      new RegExp('^meta\..*'),
      new RegExp('^\.is-.*')
    ]
  });
  return GULP.src('assets/sources/css/custom.css')
    .pipe(uncss)
    .pipe($.cssnano())
    .pipe(SWAP_TEXT('*/', '*/\n'))
    .pipe(EXT_NAME('.min.css'))
    .pipe(GULP.dest('assets/dist/css'));
});

// Prep fonticon Sass
GULP.task('sass:fonticon:prep', function(done) {
  var stream;
  if(FONT_ICONS){
    stream = GULP.src(FONT_SASS + '**/*.scss')
      .pipe(ADD_STRING.prepend("@import 'unit';\n\n"))
      .pipe($.sass({
        includePaths: PATHS.sass_fonticon_include
      }).on('error', $.sass.logError))
      .pipe($.autoprefixer({
        browsers: COMPATIBILITY
      }))
      .pipe($.flatten())
      .pipe(GULP.dest('tmp/fonticons/css'));
  }
  return stream;
});

// Compile fonticon Sass into CSS
GULP.task('sass:fonticon:build', function() {
  var stream;
  if(FONT_ICONS){
    stream = GULP.src('tmp/fonticons/css/*.css')
      .pipe($.sourcemaps.init())
      .pipe($.concat('fonticon.css'))
      .pipe(POSTCSS([ require('postcss-normalize-charset') ]))
      .pipe($.sourcemaps.write())
      .pipe(GULP.dest('assets/sources/css'));
  }
  return stream;
});

// Minify fonticon CSS file for production build
GULP.task('sass:fonticon:minify', function() {
  var uncss = $.uncss({
    html: ['src/**/*.html'],
    ignore: [
      new RegExp('^meta\..*'),
      new RegExp('^\.is-.*')
    ]
  });
  return GULP.src('assets/sources/css/fonticon.css')
    .pipe(uncss)
    .pipe($.cssnano())
    .pipe(SWAP_TEXT('*/', '*/\n'))
    .pipe(EXT_NAME('.min.css'))
    .pipe(GULP.dest('assets/dist/css'));
});

// Rebuild scss files
GULP.task('sass:regen', function(done) {
  SEQUENCE('sass', ['clean:tmp', 'clean:sources'], done);
});

/*******************************
  ****************************
  * 06: BUILD JAVASCRIPT FILES
  ****************************
********************************/
// JS build dispatcher
GULP.task('javascript', function(done) {
  if(PRODUCTION){
    SEQUENCE(
      ['javascript:init'], 
      ['javascript:minify:main', 'javascript:minify:jquery', 'javascript:minify:plugin'], 
    done);
  } else {
    SEQUENCE('javascript:init', done);
  }
});

// Build various JS files
GULP.task('javascript:init', function() {
  var stream = ES.concat(
    GULP.src('src/assets/js/bootstrap.js')
      .pipe($.sourcemaps.init())
      .pipe($.concat('main.js'))
      .pipe($.sourcemaps.write())
      .pipe(GULP.dest(JS_SRC)),   
    GULP.src(PATHS.javascript_plugin)
      .pipe($.sourcemaps.init())
      .pipe($.concat('plugin.js'))
      .pipe($.sourcemaps.write())
      .pipe(GULP.dest(JS_SRC)),
    GULP.src('bower_components/jquery/dist/jquery.js')
      .pipe(GULP.dest(JS_SRC))
  );  
  return stream;
});

// Minify "main" JS file for production build
GULP.task('javascript:minify:main', function() {
  var uglify = $.uglify()
    .on('error', function(e) {
      console.log(e);
  });
  return GULP.src(JS_SRC + '/main.js')
    .pipe(uglify)
    .pipe(SWAP_TEXT('*/', '*/\n'))
    .pipe(SWAP_TEXT('/*', '\n\n/*'))
    .pipe(EXT_NAME(JS_EXT))
    .pipe(GULP.dest(JS_DIST));
});

// Minify "jquery" JS file for production build
GULP.task('javascript:minify:jquery', function() {
  var uglify = $.uglify()
    .on('error', function(e) {
      console.log(e);
  });
  return GULP.src(JS_SRC + '/jquery.js')
    .pipe(uglify)
    .pipe(SWAP_TEXT('*/', '*/\n'))
    .pipe(SWAP_TEXT('/*', '\n\n/*'))
    .pipe(EXT_NAME(JS_EXT))
    .pipe(GULP.dest(JS_DIST));
});

// Minify "plugin" JS file for production build
GULP.task('javascript:minify:plugin', function() {
  var uglify = $.uglify()
    .on('error', function(e) {
      console.log(e);
  });
  return GULP.src(JS_SRC + '/plugin.js')
    .pipe(uglify)
    .pipe(SWAP_TEXT('*/', '*/\n'))
    .pipe(SWAP_TEXT('/*', '\n\n/*'))
    .pipe(EXT_NAME(JS_EXT))
    .pipe(GULP.dest(JS_DIST));
});

/*******************************
  ****************************
  * 07: PROCESS IMAGE FILES
  ****************************
********************************/
// Copy image files to the "dist" folder
// Compress for production build
GULP.task('images', function() {
  var imagemin = $.if(PRODUCTION, $.imagemin({
    progressive: true
  }));
  return GULP.src('src/assets/img/**/*')
    .pipe(imagemin)
    .pipe(GULP.dest('assets/img'));
});

/*******************************
  ****************************
  * 08: COPY ASSESTS
  ****************************
********************************/
// Dispatcher to copy assests out of the "assets" to the "dist" folder
GULP.task('copy', function(done) {
  if(PRODUCTION && FONT_ICONS){
    SEQUENCE(
      ['copy:src', 'copy:font:src'], 
      ['copy:dist', 'copy:font:dist'], 
    done);
  } else if(!PRODUCTION && FONT_ICONS){
    SEQUENCE(
      ['copy:src', 'copy:font:src'], 
    done);
  } else if(PRODUCTION && !FONT_ICONS){
    SEQUENCE('copy:src', 'copy:dist', done);
  } else {
    SEQUENCE('copy:src', done);
  }
});

// Copy assests to "assets/sources" 
// Skips the "img", "js", and "scss" folders, which are parsed separately
GULP.task('copy:src', function() {
  return GULP.src(PATHS.assets)
    .pipe(GULP.dest('assets/sources'));
});

// Copy assests to "assets/dist" for production build
// Skips the "img", "js", and "scss" folders, which are parsed separately
GULP.task('copy:dist', function() {
  return GULP.src(PATHS.assets)
    .pipe(GULP.dest('assets/dist'));
});

// Copy assests to "assets/sources" 
// Skips the "img", "js", and "scss" folders, which are parsed separately
GULP.task('copy:font:src', function() {
  return GULP.src(FONT_PATH)
    .pipe($.flatten())
    .pipe(GULP.dest('assets/sources/fonts'));
});

// Copy assests to "assets/dist" for production build
// Skips the "img", "js", and "scss" folders, which are parsed separately
GULP.task('copy:font:dist', function() {
  return GULP.src(FONT_PATH)
    .pipe($.flatten())
    .pipe(GULP.dest('assets/dist/fonts'));
});

/*******************************
  ****************************
  * 09: DEFAULT TASK
  ****************************
********************************/
// Build the site, run the server, and watch for file changes
GULP.task('default', ['server'], function() {
  GULP.watch(PATHS.assets, ['copy', BROWSER.reload]);
  GULP.watch(['src/pages/**/*.html'], ['pages:regen', BROWSER.reload]);
  GULP.watch(['src/{layouts,partials}/**/*.html'], ['pages:reset', BROWSER.reload]);
  GULP.watch(['src/assets/scss/**/*.scss'], ['sass:regen', BROWSER.reload]);
  GULP.watch(['src/assets/js/**/*.js'], ['javascript', BROWSER.reload]);
  GULP.watch(['src/assets/img/**/*'], ['images', BROWSER.reload]);
});