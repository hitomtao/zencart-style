// Zencart E-Commerce: Style Template
//
// Gulpfile to create Bootstrap based CSS and JS files for Zencart.
//

/*******************************
  ****************************
  * 01: INITIALISE
  ****************************
********************************/
const $              = require('gulp-load-plugins')();
const ARGV           = require('yargs').argv;
const BROWSER        = require('browser-sync');
const GULP           = require('gulp');
const PANINI         = require('panini');
const REMOVE         = require('del');
const SEQUENCE       = require('run-sequence');
const ES             = require('event-stream');
const EXT_NAME       = require('gulp-extname');
const SWAP_HTML      = require('gulp-html-replace');
const ADD_STRING     = require('gulp-inject-string');
const SWAP_TEXT      = require('gulp-replace');
const UGLIFY         = require('gulp-uglify');

const CSS_PROCESS    = [
  require('postcss-normalize-charset'),
  require('postcss-remove-prefixes'), 
  require('postcss-ordered-values'),
  require('postcss-merge-rules'), 
  require('postcss-fakeid'),
  require('css-declaration-sorter')
];


// Flag whether to build for production
const PRODUCTION = !!(ARGV.production);

// Port to use for the development server.
const DEV_PORT = 8000;

// Browsers to target when prefixing CSS.
const COMPATIBILITY = ['last 2 versions', 'ie >= 9'];

// Random cache buster
const CACHEFLAG      = Math.floor(Math.random()*900000) + 100000;

// Use additional font icons
const FONT_ICONS = true;
const FONT_SASS='src/assets/scss/components/fonticon/**/scss/';
const FONT_PATH='src/assets/scss/components/fonticon/**/fonts/**/*';

// Misc filesystem paths
const JS_DEV = 'dist/dev/js';
const JS_SRC = 'dist/sources/js';
const JS_DIST = 'dist/production/js';
const JS_EXT = PRODUCTION ? '.min.js' : '.js';
const JQ_VER = '2.2.4';
const JQ_MIG = '1.4.1';
const JQ_URI = PRODUCTION ? JS_DIST : JS_DEV;
const JQ_WRITE = '<script>window.jQuery || document.write(\'<script src="' 
        + JQ_URI.replace('dist/','/') + '/jquery' + JS_EXT 
        + '"><\\/script>\');</script>';

const JM_WRITE = '<script>window.jQuery.migrateVersion || document.write(\'<script src="' 
        + JQ_URI.replace('dist/','/') + '/jquery-migrate' + JS_EXT 
        + '"><\\/script>\');</script>';

// File paths to various assets are defined here.
const PATHS = {
  assets: [
    'src/assets/**/*',
    '!src/assets/{img,js,scss}/**/*',
    '!src/assets/{img,js,scss}/**/',
    '!src/assets/{img,js,scss}/'
  ],
  js_plugins: [
    'src/assets/js/**/*.js',
    '!src/assets/js/demopage/**/*.js'
  ],
  demo_js: [
    'src/assets/js/demopage/**/*.js'
  ],
  sass_fonticon_include: [
    FONT_SASS,
    'src/assets/scss/components/fonticon/foundation-icons/scss/'
  ],
  glyphicons: [
    'src/components/bootstrap-sass/assets/fonts/bootstrap/**/*'
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
    ['clean:dist', 'clean:tmp'], 
    ['pages', 'sass', 'javascript', 'images', 'copy'], 
    ['clean:tmp', 'clean:sources'], 
  done);
});

// Start a server with LiveReload to preview the site
GULP.task('server', ['build'], function() {
  BROWSER.init({
    server: 'dist', port: DEV_PORT
  });
});

/*******************************
  ****************************
  * 03: PREP FOLDERS
  ****************************
********************************/
// Remove the "dist" folder if it exists
GULP.task('clean:dist', function(done) {
  return REMOVE('dist/**');
});

// Remove the "tmp" folder if it exists
GULP.task('clean:tmp', function() {
  return REMOVE('tmp/**');
});

// Remove the "dist/sources" folder if flagged
GULP.task('clean:sources', function() {
  var stream;
  if(PRODUCTION) {
    stream = REMOVE('dist/dev/**');
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
  var jquery_js = '//code.jquery.com/jquery-' + JQ_VER + '.min.js';
  var jquery_migrate_js = '//code.jquery.com/jquery-migrate-' + JQ_MIG + '.min.js';
  var main_js = '/dev/js/main.js?' + CACHEFLAG;
  var plugin_js = '/dev/js/plugin.js?' + CACHEFLAG;
  var demo_js = '/dev/js/demo.js?' + CACHEFLAG;
  var main_css = '/dev/css/main.css?' + CACHEFLAG;
  var custom_css = '/dev/css/custom.css?' + CACHEFLAG;
  var fonticon_css = '/dev/css/fonticon.css?' + CACHEFLAG;
  if(PRODUCTION){
    main_css = '/production/css/main.min.css?' + CACHEFLAG;
    main_js = '/production/js/main.min.js?' + CACHEFLAG;
    custom_css = '/production/css/custom.min.css?' + CACHEFLAG;
    plugin_js = '/production/js/plugin.min.js?' + CACHEFLAG;
    fonticon_css = '/production/css/fonticon.min.css?' + CACHEFLAG;
  }
  if(!FONT_ICONS){
    fonticon_css = '';
  }
  var replace_html = SWAP_HTML({
    'jquery_js': jquery_js,
    'jquery_fallback': JQ_WRITE,
    'jquery_migrate_js': jquery_migrate_js,
    'jquery_migrate_fallback': JM_WRITE,
    'main_js': main_js,
    'plugin_js': plugin_js, 
    'demo_js': demo_js, 
    'main_css': main_css,
    'custom_css': custom_css,
    'fonticon_css': fonticon_css,
  });
  return GULP.src('tmp/html/raw/**/*.html')
    .pipe(replace_html)
    .pipe(GULP.dest('tmp/html/fixed'));
});

// Prettify temp HTML files and move to dist folder
GULP.task('pages:prettify', function() {
  return GULP.src('tmp/html/fixed/**/*.html')
    .pipe($.prettify())
    .pipe(GULP.dest('dist'));
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
      ['sass:main:compile', 'sass:custom:compile', 'sass:fonticon:init', 'sass:fonticon:prep'], 
      ['sass:main:build', 'sass:custom:build', 'sass:fonticon:compile'], 
      ['sass:main:minify', 'sass:fonticon:build'],
      ['sass:custom:minify'], 
      ['sass:fonticon:minify'], 
    done);
  } else if(!PRODUCTION && FONT_ICONS){
    SEQUENCE(
      ['sass:main:compile', 'sass:custom:compile', 'sass:fonticon:init', 'sass:fonticon:prep'], 
      ['sass:fonticon:compile'], 
    done);
  } else if(PRODUCTION && !FONT_ICONS){
    SEQUENCE(
      ['sass:main:compile', 'sass:custom:compile', 'sass:fonticon:init'], 
      ['sass:main:build', 'sass:custom:build'], 
      ['sass:main:minify'],
      ['sass:custom:minify'], 
    done);
  } else {
    SEQUENCE(
      ['sass:main:compile', 'sass:custom:compile', 'sass:fonticon:init'], 
    done);
  }
});

// Compile main Sass into CSS
GULP.task('sass:main:compile', function() {
  return GULP.src('src/assets/scss/main.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass()
      .on('error', $.sass.logError))
    .pipe($.postcss(CSS_PROCESS))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    .pipe($.sourcemaps.write())
    .pipe(GULP.dest('dist/dev/css'));
});

// Create main CSS source file for production build
GULP.task('sass:main:build', function() {
  return GULP.src('dist/dev/css/main.css')
    .pipe(GULP.dest('dist/sources/css'));
});

// Minify main CSS file for production build
GULP.task('sass:main:minify', function() {
  return GULP.src('dist/sources/css/main.css')
    .pipe($.cssnano())
    .pipe(SWAP_TEXT('*/', '*/\n'))
    .pipe(EXT_NAME('.min.css'))
    .pipe(GULP.dest('dist/production/css'));
});

// Compile custom Sass into CSS
GULP.task('sass:custom:compile', function() {
  return GULP.src('src/assets/scss/custom.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass()
      .on('error', $.sass.logError))
    .pipe($.postcss(CSS_PROCESS))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    .pipe($.sourcemaps.write())
    .pipe(GULP.dest('dist/dev/css'));
});

// Create custom CSS source file for production build
GULP.task('sass:custom:build', function() {
  return GULP.src('dist/dev/css/custom.css')
    .pipe(GULP.dest('dist/sources/css'));
});

// Minify custom CSS file for production build
GULP.task('sass:custom:minify', function() {
  return GULP.src('dist/sources/css/custom.css')
    .pipe($.cssnano())
    .pipe(SWAP_TEXT('*/', '*/\n'))
    .pipe(EXT_NAME('.min.css'))
    .pipe(GULP.dest('dist/production/css'));
});


GULP.task('sass:fonticon:init', function(done) {
  var stream;
  if(PRODUCTION){
  	stream = GULP.src(PATHS.glyphicons)
      .pipe(GULP.dest('dist/production/fonts/bootstrap'))   
  } else {
  	stream = GULP.src(PATHS.glyphicons)
  	  .pipe(GULP.dest('dist/dev/fonts/bootstrap'))
  }  
  return stream;
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
GULP.task('sass:fonticon:compile', function() {
  var stream;
  if(FONT_ICONS){
    stream = GULP.src('tmp/fonticons/css/*.css')
      .pipe($.sourcemaps.init())
      .pipe($.concat('fonticon.css'))
      .pipe($.postcss(CSS_PROCESS))
      .pipe($.sourcemaps.write())
      .pipe(GULP.dest('dist/dev/css'));
  }
  return stream;
});

// Create fonticon CSS source file for production build
GULP.task('sass:fonticon:build', function() {
  return GULP.src('dist/dev/css/fonticon.css')
    .pipe(GULP.dest('dist/sources/css'));
});

// Minify fonticon CSS file for production build
GULP.task('sass:fonticon:minify', function() {
  return GULP.src('dist/sources/css/fonticon.css')
    .pipe($.cssnano())
    .pipe(SWAP_TEXT('*/', '*/\n'))
    .pipe(EXT_NAME('.min.css'))
    .pipe(GULP.dest('dist/production/css'));
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
      ['javascript:compile'], 
      ['javascript:minify:main'], 
      ['javascript:minify:jquery'], 
      ['javascript:minify:migrate'], 
      ['javascript:minify:plugin'], 
    done);
  } else {
    SEQUENCE('javascript:init', done);
  }
});

// Build various JS files
GULP.task('javascript:init', function() {
  var stream = ES.concat(
    GULP.src('src/components/bootstrap-sass/assets/javascripts/bootstrap.js')
      .pipe($.rename('main.js'))
      .pipe(GULP.dest(JS_DEV)),   
    GULP.src(PATHS.js_plugins)
      .pipe($.sourcemaps.init())
      .pipe($.concat('plugin.js'))
      .pipe($.sourcemaps.write())
      .pipe(GULP.dest(JS_DEV)),
    GULP.src(PATHS.demo_js)
      .pipe($.sourcemaps.init())
      .pipe($.concat('demo.js'))
      .pipe($.sourcemaps.write())
      .pipe(GULP.dest(JS_DEV)),
    GULP.src('src/components/jquery-' + JQ_VER + '/index.js')
      .pipe($.rename('jquery.js'))
      .pipe(GULP.dest(JS_DEV)),
    GULP.src('src/components/jquery-migrate-' + JQ_MIG + '/index.js')
      .pipe($.rename('jquery-migrate.js'))
      .pipe(GULP.dest(JS_DEV))
  );  
  return stream;
});

// Create misc JS source file for production build
GULP.task('javascript:compile', function() {
  return GULP.src(JS_DEV + '/**/*')
    .pipe(GULP.dest(JS_SRC));
});


// Minify "main" JS file for production build
GULP.task('javascript:minify:main', function() {
  return GULP.src(JS_SRC + '/main.js')
    .pipe(UGLIFY({preserveComments:"license"}))
    .pipe(SWAP_TEXT('/*', '\n\n/*'))
    .pipe(SWAP_TEXT('\n\n/*!', '/*!'))
    .pipe(EXT_NAME(JS_EXT))
    .pipe(GULP.dest(JS_DIST));
});

// Minify "jquery" JS file for production build
GULP.task('javascript:minify:jquery', function() {
  return GULP.src(JS_SRC + '/jquery.js')
    .pipe(UGLIFY({preserveComments:"license"}))
    .pipe(EXT_NAME(JS_EXT))
    .pipe(GULP.dest(JS_DIST));
});

// Minify "jquery-migrate" JS file for production build
GULP.task('javascript:minify:migrate', function() {
  return GULP.src(JS_SRC + '/jquery-migrate.js')
    .pipe(UGLIFY({preserveComments:"license"}))
    .pipe(EXT_NAME(JS_EXT))
    .pipe(GULP.dest(JS_DIST));
});

// Minify "plugin" JS file for production build
GULP.task('javascript:minify:plugin', function() {
  return GULP.src(JS_SRC + '/plugin.js')
    .pipe(UGLIFY({preserveComments:"license"}))
    .pipe(EXT_NAME(JS_EXT))
    .pipe(GULP.dest(JS_DIST));
});

/*******************************
  ****************************
  * 07: PROCESS IMAGE FILES
  ****************************
********************************/
// Copy image files to the "dist" folder
GULP.task('images', function() {
  return GULP.src('src/assets/img/**/*')
    .pipe(GULP.dest('dist/img'));
});

/*******************************
  ****************************
  * 08: COPY ASSESTS
  ****************************
********************************/
// Dispatcher to copy assets from "src/assets" folder
GULP.task('copy', function(done) {
  if(PRODUCTION && FONT_ICONS){
    SEQUENCE(
      ['copy:dev', 'copy:font:dev'], 
      ['copy:dist', 'copy:font:dist'], 
    done);
  } else if(!PRODUCTION && FONT_ICONS){
    SEQUENCE(
      ['copy:dev', 'copy:font:dev'], 
    done);
  } else if(PRODUCTION && !FONT_ICONS){
    SEQUENCE('copy:dev', 'copy:dist', done);
  } else {
    SEQUENCE('copy:dev', done);
  }
});

// Copy assets to "dist/sources" 
// Skips the "img", "js", and "scss" folders, which are parsed separately
GULP.task('copy:dev', function() {
  return GULP.src(PATHS.assets)
    .pipe(GULP.dest('dist/dev'));
});

// Copy assets to "dist/production" for production build
// Skips the "img", "js", and "scss" folders, which are parsed separately
GULP.task('copy:dist', function() {
  return GULP.src(PATHS.assets)
    .pipe(GULP.dest('dist/production'));
});

// Copy assets to "dist/sources" 
// Skips the "img", "js", and "scss" folders, which are parsed separately
GULP.task('copy:font:dev', function() {
  return GULP.src(FONT_PATH)
    .pipe($.flatten())
    .pipe(GULP.dest('dist/dev/fonts'));
});

// Copy assets to "dist/production" for production build
// Skips the "img", "js", and "scss" folders, which are parsed separately
GULP.task('copy:font:dist', function() {
  return GULP.src(FONT_PATH)
    .pipe($.flatten())
    .pipe(GULP.dest('dist/production/fonts'));
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