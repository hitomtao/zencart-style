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
const FONT_SASS='src/assets/scss/components/fonticons/**/scss/';
const FONT_PATH='src/assets/scss/components/fonticons/**/fonts/**/*';

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
  index_html: [
    'src/components/AdminLTE/index.html',
    'src/components/AdminLTE/index2.html'
    ],
  other_html: [
    'src/pages/**/*.html',
    '!src/pages/index.html',
    '!src/pages/index2.html'
    ],
  demo_js: [
    'src/demo/**/*.js'
  ],
  assets: [
    'src/assets/**/*',
    '!src/assets/{img,js,scss}/**/*',
    '!src/assets/{img,js,scss}/**/',
    '!src/assets/{img,js,scss}/'
  ],
  js_adminlte: [
    'src/components/AdminLTEdist/js/demo.js',
    'src/components/AdminLTEdist/js/pages/**/*.js',
  ],
  sass_fonticon_include: [
    FONT_SASS,
    'src/assets/scss/components/fonticons/foundation-icons/scss/'
  ],
  glyphicons: [
    'src/components/bootstrap-sass/assets/fonts/bootstrap/**/*'
  ]
};



  var css_path = PRODUCTION ? '/production/css/' : '/dev/css/';
  var js_path = PRODUCTION ? '/production/js/' : '/dev/js/';
  
  var jquery_js = '//code.jquery.com/jquery-' + JQ_VER + '.min.js';
  var jquery_migrate_js = PRODUCTION ? '': '//code.jquery.com/jquery-migrate-' + JQ_MIG + '.min.js';
  var jquery_migrate_fallback = PRODUCTION ? '': JM_WRITE;
  var demo_js = '/dev/js/demo.js' + CACHEFLAG;
  
  var bootstrap_css = css_path + 'bootstrap' + CSS_EXT + CACHEFLAG;
  var bootstrap_js = js_path + 'bootstrap' + JS_EXT + CACHEFLAG;
  var adminlte_css = css_path + 'adminlte' + CSS_EXT + CACHEFLAG;
  var adminlte_js = js_path + 'adminlte' + JS_EXT + CACHEFLAG;
  var fonticon_css = !FONT_ICONS ? '' : css_path + 'fonticon' + CSS_EXT + CACHEFLAG;
  
  var replace_html = {
    'jquery_js': jquery_js,
    'jquery_fallback': JQ_WRITE,
    'jquery_migrate_js': jquery_migrate_js,
    'jquery_migrate_fallback': jquery_migrate_fallback,
    'bootstrap_js': bootstrap_js,
    'adminlte_js': adminlte_js, 
    'demo_js': demo_js, 
    'bootstrap_css': bootstrap_css,
    'adminlte_css': adminlte_css,
    'fonticon_css': fonticon_css,
  };

const REPLACE_THIS = [
    ['dist/', 'dev/'],
    ['plugins/', 'dev/js/plugins/'],
    ['pages/', 'dev/pages/'],
    ['bootstrap/css/', 'dev/css/'],
    ['bootstrap/js/', 'dev/js/'],
    ['.min.css', '.css'],
    ['app.min.js', 'AdminLTE.js'],
    ['.min.js', '.js']
];


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

  var stream = EVENTS.concat(
    GULP.src(PATHS.index_html)
      .pipe($.batchReplace(REPLACE_THIS))
      .pipe(GULP.dest('dist')),   
    GULP.src(PATHS.other_html)
      .pipe($.batchReplace(REPLACE_THIS))
      .pipe(GULP.dest('dist')), 
    GULP.src('src/components/AdminLTE/pages/**/*')
      .pipe($.batchReplace(REPLACE_THIS))
      .pipe(GULP.dest('dist/dev/js/plugins')),   
    GULP.src('src/components/AdminLTE/plugins/**/*')
      .pipe(GULP.dest('dist/dev/js/plugins'))   
  );  
  return stream;
});

// Rebuild HTML files
GULP.task('pages:reset', function(done) {
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
      ['sass:bootstrap:prep'], 
      ['sass:bootstrap:compile', 'sass:adminlte:compile', 'sass:glypicons:init'], 
      ['sass:bootstrap:minify', 'sass:fonticon:compile'], 
      ['sass:adminlte:minify', 'sass:fonticon:minify'], 
    done);
  } else if(!PRODUCTION && FONT_ICONS){
    $.sequence(
      ['sass:bootstrap:prep'], 
      ['sass:bootstrap:compile', 'sass:adminlte:compile', 'sass:glypicons:init'], 
      ['sass:fonticon:compile'], 
    done);
  } else if(PRODUCTION && !FONT_ICONS){
    $.sequence(
      ['sass:bootstrap:prep'], 
      ['sass:bootstrap:compile', 'sass:adminlte:compile', 'sass:glypicons:init'], 
      ['sass:bootstrap:minify', 'sass:adminlte:minify'], 
    done);
  } else {
    $.sequence(
      ['sass:bootstrap:prep'], 
      ['sass:bootstrap:compile', 'sass:adminlte:compile', 'sass:glypicons:init'], 
    done);
  }
});

// Compile bootstrap Sass into CSS
GULP.task('sass:bootstrap:prep', function() {
  return GULP.src('src/components/bootstrap-sass/assets/stylesheets/_bootstrap.scss')
    .pipe($.rename('bootstrap.scss'))
    .pipe(GULP.dest('src/components/bootstrap-sass/assets/stylesheets'));
});

// Compile bootstrap Sass into CSS
GULP.task('sass:bootstrap:compile', function() {
	
  return GULP.src('src/components/bootstrap-sass/assets/stylesheets/bootstrap.scss')
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

// Minify bootstrap CSS file for production build
GULP.task('sass:bootstrap:minify', function() {
  return GULP.src('dist/sources/css/bootstrap.css')
    .pipe($.cssnano())
    .pipe($.replace('*/', '*/\n'))
    .pipe($.extname('.min.css'))
    .pipe(GULP.dest('dist/production/css'));
});

// Compile adminlte Sass into CSS
GULP.task('sass:adminlte:compile', ['sass:skins:compile'], function() {
	
  return GULP.src('src/components/AdminLTE/build/less/AdminLTE.less')
    .pipe($.sourcemaps.init())
    .pipe($.less())
    .pipe($.postcss(CSS_PROCESS))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    .pipe($.sourcemaps.write())
    .pipe($.rename('AdminLTE.css'))
    .pipe(
      $.cond(PRODUCTION, 
        GULP.dest('dist/sources/css'), 
        GULP.dest('dist/dev/css')
      )
    );
});

// Compile demo Sass into CSS
GULP.task('sass:skins:compile', function() {

	var stream;
	  if (!PRODUCTION) {
	  	stream = GULP.src('src/components/AdminLTE/build/less/skins/**/*.less')
	  	  .pipe($.sourcemaps.init())
          .pipe($.less())
	  	  .pipe($.postcss(CSS_PROCESS))
	  	  .pipe($.autoprefixer({
	  	  	browsers: COMPATIBILITY
	  	  }))
	  	  .pipe($.sourcemaps.write())
	  	  .pipe(GULP.dest('dist/dev/css/skins'));
	  }
	return stream;
});

// Minify adminlte CSS file for production build
GULP.task('sass:adminlte:minify', function() {
  return GULP.src('dist/sources/css/adminlte.css')
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
      includePaths: FONT_SASS
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
      ['javascript:minify:bootstrap', 'javascript:minify:adminlte', 'javascript:minify:jquery'], 
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
      .pipe(GULP.dest(target_dir)),   
    GULP.src('src/components/AdminLTE/dist/js/app.js')
      .pipe($.rename('AdminLTE.js'))
      .pipe(GULP.dest(target_dir)),
    GULP.src(PATHS.demo_js)
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

// Minify "bootstrap" JS file for production build
GULP.task('javascript:minify:bootstrap', function() {
  return GULP.src(JS_SRC + '/bootstrap.js')
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

// Minify "adminlte" JS file for production build
GULP.task('javascript:minify:adminlte', function() {
  return GULP.src(JS_SRC + '/AdminLTE.js')
    .pipe($.uglify({preserveComments:"license"}))
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
  return GULP.src('src/components/AdminLTE/dist/img/**/*')
    .pipe(GULP.dest('dist/dev/img'));
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