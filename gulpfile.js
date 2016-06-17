// Zencart E-Commerce: Style Template
//
// Gulpfile to create Bootstrap based CSS and JS files for Zencart.
//

/*******************************
  ****************************
  * 01: SET CONSTANTS
  ****************************
********************************/
const $              = require('gulp-load-plugins')();
const GULP           = require('gulp');
const ARGV           = require('yargs').argv;
const REMOVE         = require('del');
const PANINI         = require('panini');
const EVENTS         = require('event-stream');
const BROWSER        = require('browser-sync');
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
const CACHEFLAG      = '?' + Math.floor(Math.random()*900000) + 100000;

// JQuery & JQuery Migrate versions
const JQ_VER = '2.2.4';
const JQ_MIG = '1.4.1';

// Use additional font icons
const FONT_ICONS = true;
const FONT_SASS='src/assets/scss/components/fonticon/**/scss/';
const FONT_PATH='src/assets/scss/components/fonticon/**/fonts/**/*';

// Misc filesystem paths
const JS_DEV = 'dist/dev/js';
const JS_SRC = 'dist/sources/js';
const JS_DIST = 'dist/production/js';
const JS_EXT = PRODUCTION ? '.min.js' : '.js';
const CSS_EXT = PRODUCTION ? '.min.css' : '.css';
const JQ_URI = PRODUCTION ? JS_DIST : JS_DEV;
const JQ_WRITE = '<script>window.jQuery || document.write(\'<script src="' 
        + JQ_URI.replace('dist/','/') + '/jquery' + JS_EXT 
        + '"><\\/script>\');</script>';

const JM_WRITE = '<script>window.jQuery.migrateVersion || document.write(\'<script src="' 
        + '/dev/js/jquery-migrate.js"><\\/script>\');</script>';

// File paths to various assets are defined here.
const PATHS = {
  demo_js: [
    'src/assets/js/demopage/**/*.js'
  ],
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
  * 02: MAIN BUILD TASK
  ****************************
********************************/
// Build the site
GULP.task('build', function(done) {
  $.sequence(
    ['clean:dist'], 
    ['pages', 'sass', 'javascript', 'images', 'copy'], 
  done);
});

/*******************************
  ****************************
  * 03: LIVERELOAD SERVER
  ****************************
********************************/
// Start a server with LiveReload to preview the site
GULP.task('server', ['build'], function() {
  BROWSER.init({
    server: 'dist', port: DEV_PORT
  });
});

/*******************************
  ****************************
  * 04: PREP FOLDERS
  ****************************
********************************/
// Remove the "dist" folder if it exists
GULP.task('clean:dist', function(done) {
  return REMOVE('dist/**');
});

/*******************************
  ****************************
  * 05: BUILD HTML FILES
  ****************************
********************************/
// HTML build dispatcher
GULP.task('pages', function(done) {
  var css_path = PRODUCTION ? '/production/css/' : '/dev/css/';
  var js_path = PRODUCTION ? '/production/js/' : '/dev/js/';
  
  var jquery_js = '//code.jquery.com/jquery-' + JQ_VER + '.min.js';
  var jquery_migrate_js = PRODUCTION ? '': '//code.jquery.com/jquery-migrate-' + JQ_MIG + '.min.js';
  var jquery_migrate_fallback = PRODUCTION ? '': JM_WRITE;
  var demo_js = '/dev/js/demo.js' + CACHEFLAG;
  
  var main_css = css_path + 'main' + CSS_EXT + CACHEFLAG;
  var main_js = js_path + 'main' + JS_EXT + CACHEFLAG;
  var custom_css = css_path + 'custom' + CSS_EXT + CACHEFLAG;
  var plugin_js = js_path + 'plugin' + JS_EXT + CACHEFLAG;
  var fonticon_css = !FONT_ICONS ? '' : css_path + 'fonticon' + CSS_EXT + CACHEFLAG;
  
  var replace_html = $.htmlReplace({
    'jquery_js': jquery_js,
    'jquery_fallback': JQ_WRITE,
    'jquery_migrate_js': jquery_migrate_js,
    'jquery_migrate_fallback': jquery_migrate_fallback,
    'main_js': main_js,
    'plugin_js': plugin_js, 
    'demo_js': demo_js, 
    'main_css': main_css,
    'custom_css': custom_css,
    'fonticon_css': fonticon_css,
  });
	
  return GULP.src('src/pages/**/*.{html,hbs,handlebars}')
    .pipe(PANINI({
      root: 'src/pages/',
      layouts: 'src/layouts/',
      partials: 'src/partials/',
      data: 'src/data/',
      helpers: 'src/helpers/'
    }))
    .pipe(replace_html)
    .pipe($.prettify())
    .pipe(GULP.dest('dist'));
});

// Rebuild HTML files
GULP.task('pages:reset', function(done) {
  PANINI.refresh();
  $.sequence('pages:regen', done);
});

// Rebuild HTML files
GULP.task('pages:regen', function(done) {
  $.sequence(['pages', 'sass'], done);
});

/*******************************
  ****************************
  * 06: BUILD CSS FILES
  ****************************
********************************/
// CSS build dispatcher
GULP.task('sass', function(done) {
  if(PRODUCTION && FONT_ICONS){
    $.sequence(
      ['sass:main:compile', 'sass:custom:compile', 'sass:glypicons:init'], 
      ['sass:main:minify', 'sass:fonticon:compile'], 
      ['sass:custom:minify', 'sass:fonticon:minify'], 
    done);
  } else if(!PRODUCTION && FONT_ICONS){
    $.sequence(
      ['sass:main:compile', 'sass:custom:compile', 'sass:glypicons:init'], 
      ['sass:fonticon:compile'], 
    done);
  } else if(PRODUCTION && !FONT_ICONS){
    $.sequence(
      ['sass:main:compile', 'sass:custom:compile', 'sass:glypicons:init'], 
      ['sass:main:minify', 'sass:custom:minify'], 
    done);
  } else {
    $.sequence(
      ['sass:main:compile', 'sass:custom:compile', 'sass:glypicons:init'], 
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
    .pipe(
      $.cond(PRODUCTION, 
        GULP.dest('dist/sources/css'), 
        GULP.dest('dist/dev/css')
      )
    );
});

// Minify main CSS file for production build
GULP.task('sass:main:minify', function() {
  return GULP.src('dist/sources/css/main.css')
    .pipe($.cssnano())
    .pipe($.replace('*/', '*/\n'))
    .pipe($.extname('.min.css'))
    .pipe(GULP.dest('dist/production/css'));
});

// Compile custom Sass into CSS
GULP.task('sass:custom:compile', ['sass:demo:compile'], function() {
	
  return GULP.src('src/assets/scss/custom.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass()
      .on('error', $.sass.logError))
    .pipe($.postcss(CSS_PROCESS))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    .pipe($.sourcemaps.write())
    .pipe(
      $.cond(PRODUCTION, 
        GULP.dest('dist/sources/css'), 
        GULP.dest('dist/dev/css')
      )
    );
});

// Compile demo Sass into CSS
GULP.task('sass:demo:compile', function() {

	var stream;
	  if (!PRODUCTION) {
	  	stream = GULP.src('src/assets/scss/demo.scss')
	  	  .pipe($.sourcemaps.init())
	  	  .pipe($.sass()
	  	    .on('error', $.sass.logError))
	  	  .pipe($.postcss(CSS_PROCESS))
	  	  .pipe($.autoprefixer({
	  	  	browsers: COMPATIBILITY
	  	  }))
	  	  .pipe($.sourcemaps.write())
	  	  .pipe(GULP.dest('dist/dev/css'));
	  }
	return stream;
});

// Minify custom CSS file for production build
GULP.task('sass:custom:minify', function() {
  return GULP.src('dist/sources/css/custom.css')
    .pipe($.cssnano())
    .pipe($.replace('*/', '*/\n'))
    .pipe($.extname('.min.css'))
    .pipe(GULP.dest('dist/production/css'));
});


GULP.task('sass:glypicons:init', function(done) {
	
  return GULP.src(PATHS.glyphicons)
    .pipe(
      $.cond(PRODUCTION, 
        GULP.dest('dist/production/fonts/bootstrap'), 
        GULP.dest('dist/dev/fonts/bootstrap')
      )
    );
});

// Prep fonticon Sass
GULP.task('sass:fonticon:compile', function(done) {
	
  return GULP.src(FONT_SASS + '**/*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.injectString.prepend("@import 'unit';\n\n"))
    .pipe($.sass({
      includePaths: PATHS.sass_fonticon_include
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    .pipe($.flatten())
    .pipe($.concat('fonticon.css'))
    .pipe($.postcss(CSS_PROCESS))
    .pipe($.sourcemaps.write())
    .pipe(
      $.cond(PRODUCTION, 
        GULP.dest('dist/sources/css'), 
        GULP.dest('dist/dev/css')
      )
    );
});

// Minify fonticon CSS file for production build
GULP.task('sass:fonticon:minify', function() {
  return GULP.src('dist/sources/css/fonticon.css')
    .pipe($.cssnano())
    .pipe($.replace('*/', '*/\n'))
    .pipe($.extname('.min.css'))
    .pipe(GULP.dest('dist/production/css'));
});

// Rebuild scss files
GULP.task('sass:regen', function(done) {
  $.sequence('sass', done);
});

/*******************************
  ****************************
  * 07: BUILD JAVASCRIPT FILES
  ****************************
********************************/
// JS build dispatcher
GULP.task('javascript', function(done) {
  if(PRODUCTION){
    $.sequence(
      ['javascript:compile'], 
      ['javascript:minify:main', 'javascript:minify:plugin', 'javascript:minify:jquery'], 
    done);
  } else {
    $.sequence('javascript:compile', done);
  }
});

// Build various JS files
GULP.task('javascript:compile', function() {

  var target_dir = PRODUCTION ? JS_SRC : JS_DEV;
  var stream = EVENTS.concat(
    GULP.src('src/components/bootstrap-sass/assets/javascripts/bootstrap.js')
      .pipe($.rename('main.js'))
      .pipe(GULP.dest(target_dir)),   
    GULP.src(PATHS.js_plugins)
      .pipe($.sourcemaps.init())
      .pipe($.concat('plugin.js'))
      .pipe($.sourcemaps.write())
      .pipe(GULP.dest(target_dir)),
    GULP.src(PATHS.demo_js)
      .pipe($.sourcemaps.init())
      .pipe($.concat('demo.js'))
      .pipe($.sourcemaps.write())
      .pipe(GULP.dest(target_dir)),
    GULP.src('src/components/jquery-' + JQ_VER + '/index.js')
      .pipe($.rename('jquery.js'))
      .pipe(GULP.dest(target_dir)),
    GULP.src('src/components/jquery-migrate-' + JQ_MIG + '/index.js')
      .pipe( $.cond( !PRODUCTION, $.rename('jquery-migrate.js') ) )
      .pipe( $.cond( !PRODUCTION, GULP.dest(target_dir) ) )
  );  
  return stream;
});

// Minify "main" JS file for production build
GULP.task('javascript:minify:main', function() {
  return GULP.src(JS_SRC + '/main.js')
    .pipe($.uglify({preserveComments:"license"}))
    .pipe($.replace('/*', '\n\n/*'))
    .pipe($.replace('\n\n/*!', '/*!'))
    .pipe($.extname(JS_EXT))
    .pipe(GULP.dest(JS_DIST));
});

// Minify "jquery" JS file for production build
GULP.task('javascript:minify:jquery', function() {
  return GULP.src(JS_SRC + '/jquery.js')
    .pipe($.uglify({preserveComments:"license"}))
    .pipe($.extname(JS_EXT))
    .pipe(GULP.dest(JS_DIST));
});

// Minify "plugin" JS file for production build
GULP.task('javascript:minify:plugin', function() {
  return GULP.src(JS_SRC + '/plugin.js')
    .pipe($.uglify({preserveComments:"license"}))
    .pipe($.replace('/*', '\n\n/*'))
    .pipe($.replace('\n\n/*!', '/*!'))
    .pipe($.extname(JS_EXT))
    .pipe(GULP.dest(JS_DIST));
});

/*******************************
  ****************************
  * 08: PROCESS IMAGE FILES
  ****************************
********************************/
// Copy image files to the "dist" folder
GULP.task('images', function() {
  return GULP.src('src/assets/img/**/*')
    .pipe(GULP.dest('dist/img'));
});

/*******************************
  ****************************
  * 09: COPY ASSESTS
  ****************************
********************************/
// Dispatcher to copy assets from "src/assets" folder
GULP.task('copy', function(done) {
  if(FONT_ICONS){
    $.sequence(['copy:gen', 'copy:font'], done);
  } else {
    $.sequence('copy:gen', done);
  }
});

// Copy assets to "dist" folder
// Skips the "img", "js", and "scss" folders, which are parsed separately
GULP.task('copy:gen', function() {
  return GULP.src(PATHS.assets)
    .pipe(
      $.cond(PRODUCTION, 
        GULP.dest('dist/production'), 
        GULP.dest('dist/dev')
      )
    );
});

// Copy assets to "dist/**/fonts" floder
// Skips the "img", "js", and "scss" folders, which are parsed separately
GULP.task('copy:font', function() {
  return GULP.src(FONT_PATH)
    .pipe($.flatten())
    .pipe(
      $.cond(PRODUCTION, 
        GULP.dest('dist/production/fonts'), 
        GULP.dest('dist/dev/fonts')
      )
    );
});

/*******************************
  ****************************
  * 10: DEFAULT TASK
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