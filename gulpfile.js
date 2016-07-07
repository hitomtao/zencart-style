// Zencart E-Commerce: Style Template
//
// Gulpfile to create Bootstrap based CSS and JS files for Zencart.
//

/*******************************
  ****************************
  * 01: SET CONSTANTS
  ****************************
********************************/
const $					= require('gulp-load-plugins')();
const GULP				= require('gulp');
const ARGV				= require('yargs').argv;
const REMOVE			= require('del');
const STREAM			= require('event-stream');
const BROWSER			= require('browser-sync');
const CSS_PROCESS		= [
							require('postcss-normalize-charset'),
							require('postcss-remove-prefixes'), 
							require('postcss-ordered-values'),
							require('postcss-merge-rules'), 
							require('postcss-fakeid'),
							require('css-declaration-sorter')
						];

// Flag whether to build for production
const PRODUCTION		= !!(ARGV.production);

// Port to use for the development server.
const DEV_PORT			= 8000;

// Browsers to target when prefixing CSS.
const COMPATIBILITY		= ['last 2 versions', 'ie >= 9'];

// Random cache buster
const CACHEFLAG			= '?' + Math.floor(Math.random()*900000) + 100000;

// Use additional font icons
const FONT_SASS			='src/components/fonticons/**/scss/';

// Misc filesystem paths
const DIST_ADMIN_DEV	= 'dist/dev'
const DIST_ADMIN_SRC	= 'dist/sources/zc_admin'
const DIST_ADMIN_PROD	= 'dist/production/zc_admin'
const JS_EXT			= PRODUCTION ? '.min.js' : '.js';
const CSS_EXT			= PRODUCTION ? '.min.css' : '.css';

// File paths to various assets.
const PATHS				= {
							assets: [
								'src/assets/**/*',
								'!src/assets/{img,js,scss,AdminLTE}/**/*',
								'!src/assets/{img,js,scss,AdminLTE}/**/',
								'!src/assets/{img,js,scss,AdminLTE}/'
							],
							stylesheet_fonticon_include: [
								FONT_SASS,
								'src/components/fonticons/foundation-icons/scss/'
							],
							adminlte_demo_js: [
								'src/components/AdminLTE/assets/js/demo.js',
								'src/components/AdminLTE/assets/js/pages/**/*.js',
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
GULP.task('clean:dist', function() {
  return REMOVE('dist');
});

/*******************************
  ****************************
  * 05: BUILD HTML FILES
  ****************************
********************************/
// HTML build dispatcher
GULP.task('pages', function() {

  var retval;
  var css_path = PRODUCTION ? '/production/css/' : '/dev/css/';
  var js_path = PRODUCTION ? '/production/js/' : '/dev/js/';
  var jquery_js = PRODUCTION ? 'jquery.min.js' : 'jquery.js';
  var jq_temp = '<!-- build:jquery_js --><!-- endbuild --><!-- build:jquery_fallback --><!-- endbuild -->';
  
  var replace_html = {
    'jquery_js': js_path + jquery_js + CACHEFLAG,
    'jquery_ui_js': js_path + 'jquery-ui.min.js' + CACHEFLAG,
    'bootstrap_js': js_path + 'bootstrap' + JS_EXT + CACHEFLAG,
    'bootstrap_css': css_path + 'bootstrap' + CSS_EXT + CACHEFLAG,
    'adminlte_js': js_path + 'AdminLTE' + JS_EXT + CACHEFLAG, 
    'adminlte_css': css_path + 'AdminLTE' + CSS_EXT + CACHEFLAG,
    'adminlte_skin_all_css': css_path + 'skins/skin-blue' + CSS_EXT + CACHEFLAG,
    'adminlte_skin_blue_css': css_path + 'skins/skin-blue' + CSS_EXT + CACHEFLAG,
    'fonticon_css': css_path + 'fonticon' + CSS_EXT + CACHEFLAG,
    'dashboard_js': js_path + 'demo/dashboard.js' + CACHEFLAG, 
    'dashboard2_js': js_path + 'demo/dashboard2.js' + CACHEFLAG, 
    'demo_js': js_path + 'demo/demo.js' + CACHEFLAG, 
    'plugins_js': js_path + 'plugins',
  };

  var REPLACE_THIS = [
    ['<script src="../../plugins/jQuery/jquery-2.2.3.min.js"></script>', jq_temp],
    ['<script src="../plugins/jQuery/jquery-2.2.3.min.js"></script>', jq_temp],
    ['<script src="plugins/jQuery/jquery-2.2.3.min.js"></script>', jq_temp],
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
  if (!PRODUCTION) {
  	retval = STREAM.concat(
  	  GULP.src(['src/components/AdminLTE/dashboard-v1.html'])
  	    .pipe($.htmlReplace(replace_html))
  	    .pipe($.prettify())
  	    .pipe(GULP.dest(DIST_ADMIN_DEV)),
  	  GULP.src(['src/components/AdminLTE/dashboard-v2.html'])
  	    .pipe($.htmlReplace(replace_html))
  	    .pipe($.prettify())
  	    .pipe(GULP.dest(DIST_ADMIN_DEV)),
  	  GULP.src(['src/index.html'])
  	    .pipe($.htmlReplace(replace_html))
  	    .pipe($.prettify())
  	    .pipe(GULP.dest('dist')),
  	  GULP.src(['src/components/AdminLTE/pages/**/*'])
  	    .pipe($.batchReplace(REPLACE_THIS))
  	    .pipe($.htmlReplace(replace_html))
  	    .pipe(GULP.dest(DIST_ADMIN_DEV + '/pages'))
  	);
  } 
  return retval;
});

/*******************************
  ****************************
  * 06: BUILD CSS FILES
  ****************************
********************************/
// CSS build dispatcher
GULP.task('stylesheet', function(done) {
  if(PRODUCTION){
    $.sequence(
      ['stylesheet:bootstrap:init', 'stylesheet:adminlte:init', 'stylesheet:fonticon:init'],
      ['stylesheet:bootstrap:prod', 'stylesheet:adminlte:prod', 'stylesheet:fonticon:prod'], 
    done);
  } else {
    $.sequence(
      ['stylesheet:bootstrap:init', 'stylesheet:adminlte:init', 'stylesheet:fonticon:init'], 
    done);
  }
});

// Process Plain Text Bootstrap CSS File
GULP.task('stylesheet:bootstrap:init', function() {
	
  return GULP.src(['src/components/bootstrap/dist/css/bootstrap.css'])
    .pipe($.postcss(CSS_PROCESS))
	.pipe($.autoprefixer({
		browsers: COMPATIBILITY
	}))
    .pipe(
      $.cond(PRODUCTION, 
        GULP.dest(DIST_ADMIN_SRC + '/css'), 
        GULP.dest(DIST_ADMIN_DEV + '/css')
      )
    );
});

// Process Minified Text Bootstrap CSS File
GULP.task('stylesheet:bootstrap:prod', function() {
  return GULP.src(['src/components/bootstrap/dist/css/bootstrap.min.css'])
    .pipe($.replace('*/', '*/\n'))
    .pipe(GULP.dest(DIST_ADMIN_PROD + '/css'));
});

// Process Plain Text AdminLTE CSS Files
GULP.task('stylesheet:adminlte:init', function() {
	
  return GULP.src(['src/components/AdminLTE/assets/css/plain/**/*.css'])
    .pipe($.postcss(CSS_PROCESS))
	.pipe($.autoprefixer({
		browsers: COMPATIBILITY
	}))
    .pipe(
      $.cond(PRODUCTION, 
        GULP.dest(DIST_ADMIN_SRC + '/css'), 
        GULP.dest(DIST_ADMIN_DEV + '/css')
      )
    );
});

// Process Minified Text AdminLTE CSS Files
GULP.task('stylesheet:adminlte:prod', function() {
  return GULP.src(['src/components/AdminLTE/assets/css/minified/**/*.css'])
    .pipe($.replace('*/', '*/\n'))
    .pipe($.replace('/*', '\n/*'))
    .pipe(GULP.dest(DIST_ADMIN_PROD + '/css'));
});


GULP.task('stylesheet:glyphicons:init', function() {
	
  return GULP.src(['src/components/bootstrap/fonts/**/*'])
    .pipe(
      $.cond(PRODUCTION, 
        GULP.dest(DIST_ADMIN_PROD + '/fonts'), 
        GULP.dest(DIST_ADMIN_DEV + '/fonts')
      )
    );
});

// Create Plain Text Font Icon CSS File
GULP.task('stylesheet:fonticon:init', ['stylesheet:glyphicons:init'], function() {
	
  return GULP.src([FONT_SASS + '**/*.scss'])
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
    .pipe(
      $.cond(PRODUCTION, 
        GULP.dest(DIST_ADMIN_SRC + '/css'), 
        GULP.dest(DIST_ADMIN_DEV + '/css')
      )
    );
});

// Minify Font Icon CSS File
GULP.task('stylesheet:fonticon:prod', function() {
  return GULP.src([DIST_ADMIN_SRC + '/css/fonticon.css'])
    .pipe($.cssnano())
    .pipe($.replace('*/', '*/\n'))
    .pipe($.extname('.min.css'))
    .pipe(GULP.dest(DIST_ADMIN_PROD + '/css'));
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
      ['javascript:init'], 
      [
      	'javascript:prod:bootstrap', 
      	'javascript:prod:adminlte', 
      	'javascript:prod:jquery', 
      	'javascript:prod:jquery-ui', 
      	'javascript:prod:jquery-ui-i18n', 
      	'javascript:prod:plugins'
      ], 
    done);
  } else {
    $.sequence('javascript:init', done);
  }
});

// Build various JS files
GULP.task('javascript:init', function() {

  var target_dir = PRODUCTION ? DIST_ADMIN_SRC + '/javascript' : DIST_ADMIN_DEV + '/js';
  retval = STREAM.concat(
    GULP.src(PATHS.adminlte_demo_js)
      .pipe($.cond(!PRODUCTION, GULP.dest(target_dir + '/demo'))),
    GULP.src(['src/components/bootstrap/dist/js/bootstrap.js'])
      .pipe(GULP.dest(target_dir)),   
    GULP.src(['src/components/AdminLTE/assets/js/app.js'])
      .pipe($.rename('AdminLTE.js'))
      .pipe(GULP.dest(target_dir)),
    GULP.src(['src/components/jquery/dist/jquery.js'])
      .pipe(GULP.dest(target_dir)),
    GULP.src(['src/components/jquery-ui/jquery-ui.js'])
      .pipe($.injectString.append("$.widget.bridge('uibutton', $.ui.button);$.widget.bridge('uitooltip', $.ui.tooltip);"))      
      .pipe(GULP.dest(target_dir)),
    GULP.src(['src/components/jquery-ui/ui/i18n/*.js'])
      .pipe($.concat('jquery-ui-i18n.js'))
      .pipe($.injectString.prepend("/*! jQueryUI i18n | Copyright jQuery Foundation and other contributors | MIT License */"))
      .pipe($.replace('*//*', '*/\n\n/*'))
      .pipe(GULP.dest(target_dir))
  ); 
  if (!PRODUCTION) {    
    retval = retval + GULP.src(['src/components/AdminLTE/plugins/**/*'])
  	  .pipe(GULP.dest(target_dir + '/plugins'))
  } else {
    retval = retval + STREAM.concat(
      GULP.src(['src/components/AdminLTE/plugins/flot/**/*.js'])
  	    .pipe(GULP.dest(DIST_ADMIN_SRC + '/plugins/flot')),
  	  GULP.src(['src/components/AdminLTE/plugins/select2/**/*.js'])
  	    .pipe(GULP.dest(DIST_ADMIN_SRC + '/plugins/select2')),
  	  GULP.src(['src/components/AdminLTE/plugins/daterangepicker/**/*.js'])
  	    .pipe(GULP.dest(DIST_ADMIN_SRC + '/plugins/daterangepicker'))
    ); 
  }
  return retval;
});

// Minify Bootstrap JS file for production build
GULP.task('javascript:prod:bootstrap', function() {
  return GULP.src(['src/components/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(GULP.dest(DIST_ADMIN_PROD + '/javascript'));
});

// Minify AdminLTE JS file for production build
GULP.task('javascript:prod:adminlte', function() {
  return GULP.src(['src/components/AdminLTE/assets/js/app.min.js'])
    .pipe($.rename('AdminLTE.min.js'))
    .pipe(GULP.dest(DIST_ADMIN_PROD + '/javascript'));
});

// Minify JQuery JS file for production build
GULP.task('javascript:prod:jquery', function() {
  return GULP.src(['src/components/jquery/dist/jquery.min.js'])
    .pipe(GULP.dest(DIST_ADMIN_PROD + '/javascript'));
});

// Minify JQueryUI JS file for production build
GULP.task('javascript:prod:jquery-ui', function() {
  return GULP.src(['src/components/jquery-ui/jquery-ui.min.js'])
    .pipe($.injectString.append("$.widget.bridge('uibutton', $.ui.button);$.widget.bridge('uitooltip', $.ui.tooltip);"))
    .pipe(GULP.dest(DIST_ADMIN_PROD + '/javascript'));
});

// Minify JQueryUI i18n JS file for production build
GULP.task('javascript:prod:jquery-ui-i18n', function() {
  return GULP.src([DIST_ADMIN_SRC + '/js/jquery-ui-i18n.js'])
    .pipe($.uglify())
    .pipe($.injectString.prepend("/*! jQueryUI i18n | Copyright jQuery Foundation and other contributors | MIT License */"))
    .pipe($.replace('*/', '*/\n'))
    .pipe($.extname('.min.js'))
    .pipe(GULP.dest(DIST_ADMIN_PROD + '/javascript'));
});

// Minify JS plugins for production build
GULP.task('javascript:prod:plugins', function() {
  var tidy_up = [
    ['/*', '\n/*!'],
    ['/**', '\n/*!'],
    ['/*!', '\n/*!'],
    ['\n\n/*!', '\n/*!'],
    ['*/', '*/\n'],
    ['*/\n\n', '*/\n']
  ];	
	
  return STREAM.concat(
    GULP.src(['src/components/AdminLTE/plugins/flot/**/*.js', '!src/components/AdminLTE/plugins/flot/excanvas.js'])
      .pipe($.uglify({preserveComments:"license"}))
      .pipe($.batchReplace(tidy_up))
      .pipe($.extname(JS_EXT))
     .pipe(GULP.dest(DIST_ADMIN_PROD + '/plugins/flot')),
   GULP.src(['src/components/AdminLTE/plugins/select2/**/*.js'])
      .pipe($.uglify({preserveComments:"license"}))
      .pipe($.batchReplace(tidy_up))
      .pipe($.extname(JS_EXT))
     .pipe(GULP.dest(DIST_ADMIN_PROD + '/plugins/select2')),
   GULP.src(['src/components/AdminLTE/plugins/daterangepicker/**/*.js'])
      .pipe($.uglify({preserveComments:"license"}))
      .pipe($.batchReplace(tidy_up))
      .pipe($.extname(JS_EXT))
     .pipe(GULP.dest(DIST_ADMIN_PROD + '/plugins/daterangepicker'))
  ); 
});



/*******************************
  ****************************
  * 08: PROCESS IMAGE FILES
  ****************************
********************************/
// Copy image files to the "dist" folder
GULP.task('images', function() {
	
  if (PRODUCTION) {  
    retval = GULP.src(['src/assets/img/**/*'])
  	  .pipe(GULP.dest(DIST_ADMIN_PROD + '/images'))
  } else {
    retval = GULP.src(['src/components/AdminLTE/assets/img/**/*'])
  	  .pipe(GULP.dest(DIST_ADMIN_DEV + '/img'))
  }
  return retval;
});

/*******************************
  ****************************
  * 09: COPY ASSETS
  ****************************
********************************/
// Dispatcher to copy assets from "src/assets" folder
GULP.task('copy', function(done) {
  $.sequence(['copy:gen', 'copy:font'], done);
});

// Copy assets to "dist" folder
// Skips the "img", "js", and "scss" folders, which are parsed separately
GULP.task('copy:gen', function() {
  return GULP.src(PATHS.assets)
    .pipe(
      $.cond(PRODUCTION, 
        GULP.dest(DIST_ADMIN_PROD), 
        GULP.dest(DIST_ADMIN_DEV)
      )
    );
});

// Copy assets to "dist/**/fonts" floder
// Skips the "img", "js", and "scss" folders, which are parsed separately
GULP.task('copy:font', function() {
  return GULP.src(['src/components/fonticons/**/fonts/**/*'])
    .pipe($.flatten())
    .pipe(
      $.cond(PRODUCTION, 
        GULP.dest(DIST_ADMIN_PROD + '/fonts'), 
        GULP.dest(DIST_ADMIN_DEV + '/fonts')
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
  GULP.watch(['src/assets/scss/**/*.scss'], ['stylesheet', BROWSER.reload]);  
  GULP.watch(['src/assets/js/**/*.js'], ['javascript', BROWSER.reload]);
  GULP.watch(['src/assets/img/**/*'], ['images', BROWSER.reload]);
});