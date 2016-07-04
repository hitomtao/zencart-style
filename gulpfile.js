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
const FONT_SASS='src/fonticons/**/scss/';
const FONT_PATH='src/fonticons/**/fonts/**/*';

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
        + '/js/jquery-migrate.js"><\\/script>\');</script>';

// File paths to various assets are defined here.
const PATHS = {
  assets: [
    'src/assets/**/*',
    '!src/assets/{img,js,scss,AdminLTE}/**/*',
    '!src/assets/{img,js,scss,AdminLTE}/**/',
    '!src/assets/{img,js,scss,AdminLTE}/'
  ],
  js_adminlte: [
    'src/AdminLTE/dist/js/demo.js',
    'src/AdminLTE/dist/js/pages/**/*.js',
  ],
  stylesheet_fonticon_include: [
    FONT_SASS,
    'src/fonticons/foundation-icons/scss/'
  ],
  glyphicons: [
    'src/bootstrap-sass/assets/fonts/bootstrap/**/*'
  ]
};



var css_path = PRODUCTION ? '/production/css/' : '/dev/css/';
var js_path = PRODUCTION ? '/production/js/' : '/dev/js/';
var jq_temp = '<!-- build:jquery_js --><!-- endbuild --><!-- build:jquery_fallback --><!-- endbuild -->';
 
  
const REPLACE_HTML = {
    'jquery_js': '//code.jquery.com/jquery-' + JQ_VER + '.min.js',
    'jquery_fallback': JQ_WRITE,
    'jquery_migrate_js': PRODUCTION ? '': '//code.jquery.com/jquery-migrate-' + JQ_MIG + '.min.js',
    'jquery_migrate_fallback': PRODUCTION ? '': JM_WRITE,
    'bootstrap_js': js_path + 'bootstrap' + JS_EXT + CACHEFLAG,
    'adminlte_js': css_path + 'adminlte' + CSS_EXT + CACHEFLAG, 
    'bootstrap_css': css_path + 'bootstrap' + CSS_EXT + CACHEFLAG,
    'adminlte_css': css_path + 'adminlte' + CSS_EXT + CACHEFLAG,
    'fonticon_css': !FONT_ICONS ? '' : css_path + 'fonticon' + CSS_EXT + CACHEFLAG,
  };

const REPLACE_THIS = [
    ['<script src="../../plugins/jQuery/jquery-2.2.3.min.js"></script>', jq_temp],
    ['<script src="../plugins/jQuery/jquery-2.2.3.min.js"></script>', jq_temp],
    ['<script src="plugins/jQuery/jquery-2.2.3.min.js"></script>', jq_temp],
    ['<!-- jQuery 2.2.3 -->', '<!-- jQuery ' + JQ_VER + ' -->'],
    ["$.widget.bridge('uibutton', $.ui.button);", "$.widget.bridge('uibutton', $.ui.button); $.widget.bridge('uitooltip', $.ui.tooltip);"],
    ['Resolve conflict in jQuery UI tooltip with Bootstrap tooltip', 'Resolve jQuery UI / Bootstrap Conflict'],
    ['dist/js/demo', '/dev/js/demo/demo'],
    ['dist/js/pages', '/dev/js/demo'],
    ['plugins/', '/dev/js/plugins/'],
    ['app.min.js', 'AdminLTE.min.js'],
    ['bootstrap/css/', '/dev/css/'],
    ['bootstrap/js/', '/dev/js/'],
    ['pages/', '/dev/pages/'],
    ['.min.css', '.css'],
    ['.min.js', '.js'],
    ['dist/', '/dev/'],
    ['../../', '/'],
    ['../dev/', '/dev/'],
    ['../index', '/index'],
    ['documentation/index.html', '//almsaeedstudio.com/themes/AdminLTE/documentation/index.html'],
    ['index.html', '/dev/dashboard-v1.html'],
    ['index2.html', '/dev/dashboard-v2.html'],
    ['//dev/', '/dev/'],
    ['jquery-jvectormap-1.2.2.js', 'jquery-jvectormap-1.2.2.min.js']
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
    ['pages', 'stylesheet', 'javascript', 'images', 'copy'], 
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
  return REMOVE('dist');
});

/*******************************
  ****************************
  * 05: BUILD HTML FILES
  ****************************
********************************/
// HTML build dispatcher
GULP.task('pages', function(done) {

  var stream = EVENTS.concat(
    GULP.src('src/AdminLTE/index.html')
      .pipe($.rename('dashboard-v1.html'))
      .pipe($.batchReplace(REPLACE_THIS))
      .pipe($.htmlReplace(REPLACE_HTML))
      .pipe($.prettify())
      .pipe(GULP.dest('dist/dev')),
    GULP.src('src/AdminLTE/index2.html')
      .pipe($.rename('dashboard-v2.html'))
      .pipe($.batchReplace(REPLACE_THIS))
      .pipe($.htmlReplace(REPLACE_HTML))
      .pipe($.prettify())
      .pipe(GULP.dest('dist/dev')),
    GULP.src('src/index.html')
      .pipe($.batchReplace(REPLACE_THIS))
      .pipe($.htmlReplace(REPLACE_HTML))
      .pipe($.prettify())
      .pipe(GULP.dest('dist')), 
    GULP.src('src/AdminLTE/pages/**/*')
      .pipe($.batchReplace(REPLACE_THIS))
      .pipe($.htmlReplace(REPLACE_HTML))
      .pipe($.prettify())
      .pipe(GULP.dest('dist/dev/pages')),   
    GULP.src('src/AdminLTE/plugins/**/*')
      .pipe(GULP.dest('dist/dev/js/plugins'))   
  );  
  return stream;
});

/*******************************
  ****************************
  * 06: BUILD CSS FILES
  ****************************
********************************/
// CSS build dispatcher
GULP.task('stylesheet', function(done) {
  if(PRODUCTION && FONT_ICONS){
    $.sequence(
      ['stylesheet:bootstrap:prep'], 
      ['stylesheet:bootstrap:compile', 'stylesheet:adminlte:compile', 'stylesheet:glypicons:init'], 
      ['stylesheet:bootstrap:minify', 'stylesheet:fonticon:compile'], 
      ['stylesheet:adminlte:minify', 'stylesheet:fonticon:minify'], 
    done);
  } else if(!PRODUCTION && FONT_ICONS){
    $.sequence(
      ['stylesheet:bootstrap:prep'], 
      ['stylesheet:bootstrap:compile', 'stylesheet:adminlte:compile', 'stylesheet:glypicons:init'], 
      ['stylesheet:fonticon:compile'], 
    done);
  } else if(PRODUCTION && !FONT_ICONS){
    $.sequence(
      ['stylesheet:bootstrap:prep'], 
      ['stylesheet:bootstrap:compile', 'stylesheet:adminlte:compile', 'stylesheet:glypicons:init'], 
      ['stylesheet:bootstrap:minify', 'stylesheet:adminlte:minify'], 
    done);
  } else {
    $.sequence(
      ['stylesheet:bootstrap:prep'], 
      ['stylesheet:bootstrap:compile', 'stylesheet:adminlte:compile', 'stylesheet:glypicons:init'], 
    done);
  }
});

// Compile bootstrap Sass into CSS
GULP.task('stylesheet:bootstrap:prep', function() {
  return GULP.src('src/bootstrap-sass/assets/stylesheets/_bootstrap.scss')
    .pipe($.rename('bootstrap.scss'))
    .pipe(GULP.dest('src/bootstrap-sass/assets/stylesheets'));
});

// Compile bootstrap Sass into CSS
GULP.task('stylesheet:bootstrap:compile', function() {
	
  return GULP.src('src/bootstrap-sass/assets/stylesheets/bootstrap.scss')
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
GULP.task('stylesheet:bootstrap:minify', function() {
  return GULP.src('dist/sources/css/bootstrap.css')
    .pipe($.cssnano())
    .pipe($.replace('*/', '*/\n'))
    .pipe($.extname('.min.css'))
    .pipe(GULP.dest('dist/production/css'));
});

// Compile adminlte Sass into CSS
GULP.task('stylesheet:adminlte:compile', ['stylesheet:skins:compile'], function() {
	
  return GULP.src('src/AdminLTE/build/less/AdminLTE.less')
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

// Compile skins Sass into CSS
GULP.task('stylesheet:skins:compile', function() {

	var stream;
	  if (!PRODUCTION) {
	  	stream = GULP.src('src/AdminLTE/build/less/skins/**/*.less')
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
GULP.task('stylesheet:adminlte:minify', function() {
  return GULP.src('dist/sources/css/adminlte.css')
    .pipe($.cssnano())
    .pipe($.replace('*/', '*/\n'))
    .pipe($.extname('.min.css'))
    .pipe(GULP.dest('dist/production/css'));
});


GULP.task('stylesheet:glypicons:init', function(done) {
	
  return GULP.src(PATHS.glyphicons)
    .pipe(
      $.cond(PRODUCTION, 
        GULP.dest('dist/production/fonts/bootstrap'), 
        GULP.dest('dist/dev/fonts/bootstrap')
      )
    );
});

// Prep fonticon Sass
GULP.task('stylesheet:fonticon:compile', function(done) {
	
  return GULP.src(FONT_SASS + '**/*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.injectString.prepend("@import 'unit';\n\n"))
    .pipe($.sass({
      includePaths: PATHS.stylesheet_fonticon_include
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
GULP.task('stylesheet:fonticon:minify', function() {
  return GULP.src('dist/sources/css/fonticon.css')
    .pipe($.cssnano())
    .pipe($.replace('*/', '*/\n'))
    .pipe($.extname('.min.css'))
    .pipe(GULP.dest('dist/production/css'));
});

// Rebuild scss files
GULP.task('stylesheet:regen', function(done) {
  $.sequence('stylesheet', done);
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
    GULP.src('src/AdminLTE/dist/js/pages/**/*.js')
      .pipe(GULP.dest(target_dir + '/demo')),
    GULP.src('src/AdminLTE/dist/js/demo.js')
      .pipe(GULP.dest(target_dir + '/demo')),
    GULP.src('src/bootstrap-sass/assets/javascripts/bootstrap.js')
      .pipe(GULP.dest(target_dir)),   
    GULP.src('src/AdminLTE/dist/js/app.js')
      .pipe($.rename('AdminLTE.js'))
      .pipe(GULP.dest(target_dir)),
    GULP.src('src/jquery-' + JQ_VER + '/index.js')
      .pipe($.rename('jquery.js'))
      .pipe(GULP.dest(target_dir)),
    GULP.src('src/jquery-migrate-' + JQ_MIG + '/index.js')
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
  return GULP.src('src/AdminLTE/dist/img/**/*')
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
  GULP.watch(['src/index.html'], ['pages', BROWSER.reload]);
  GULP.watch(['src/{layouts,partials}/**/*.html'], ['pages', BROWSER.reload]);
  GULP.watch(['src/assets/scss/**/*.scss'], ['stylesheet:regen', BROWSER.reload]);
  GULP.watch(['src/assets/js/**/*.js'], ['javascript', BROWSER.reload]);
  GULP.watch(['src/assets/img/**/*'], ['images', BROWSER.reload]);
});