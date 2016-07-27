// Zencart E-Commerce: Style Template
//
// Gulpfile to create Bootstrap based CSS and JS files for Zencart.
//

/*******************************
  ****************************
  * 01: SET CONSTANTS
  ****************************
********************************/
const $              = require( 'gulp-load-plugins' )();
const GULP           = require( 'gulp' );
const ARGV           = require( 'yargs' ).argv;
const REMOVE         = require( 'del' );
const STREAM         = require( 'event-stream' );
const BROWSER        = require( 'browser-sync' );
const CSS_PROCESS    = [
  require( 'postcss-normalize-charset' ),
  require( 'postcss-remove-prefixes' ), 
  require( 'postcss-ordered-values' ),
  require( 'postcss-merge-rules' ), 
  require( 'postcss-fakeid' ),
  require( 'css-declaration-sorter' )
];


// Flag whether to build for production
const PRODUCTION = !!( ARGV.production );

// Port to use for the development server.
const DEV_PORT = 8000;

// Browsers to target when prefixing CSS.
const COMPATIBILITY = ['last 2 versions', 'ie >= 9'];

// Random cache buster
const CACHEFLAG = '?' + Math.floor( Math.random()*900000 ) + 100000;

// JQuery version
const JQ_VER = '3.1.0';

const UI_FIX = "/*! Fix Bootstrap/JQuery-UI conflicts | See http://stackoverflow.com/a/27745464/1233379 */\n'undefined'!=typeof $.ui&&($.widget.bridge('uibutton',$.ui.button),$.widget.bridge('uitooltip',$.ui.tooltip));\n\n";

// Use additional font icons
const FONT_SASS = 'src/fonts/**/scss/';
const FONT_PATH = 'src/fonts/**/fonts/**/*';

// Ensure license information shows up clearly in minified files.			
const CLEAN_UP = [
		['*/', '*/\n'],
		['\n\n', '\n'],
		[',/*', ',\n\n/*'],
		[';/*', ';\n\n/*'],
		[')/*', ')\n\n/*'],
		['}/*', '}\n\n/*'],
		[new RegExp( '( [a-zA-Z0-9_$] )' ) + '/*', '\n/*']
	];	

// Misc filesystem paths
const DIST_DEMO_DEV		= 'zencart/demo'
const DIST_ADMIN_DEV	= 'zencart/dev/zc_admin/includes/template'
const DIST_ADMIN_SRC	= 'zencart/plaintext/zc_admin/includes/template'
const DIST_ADMIN_PROD	= 'zencart/minified/zc_admin/includes/template'
const DIST_CATALOG_DEV	= 'zencart/dev/zc_catalog/includes/templates/template_default'
const DIST_CATALOG_SRC	= 'zencart/plaintext/zc_catalog/includes/templates/template_default'
const DIST_CATALOG_PROD	= 'zencart/minified/zc_catalog/includes/templates/template_default'

// File paths to various assets are defined here.
const PATHS = {
	assets: [
		'src/assets/{zc_admin,zc_catalog}/**/*',
		'!src/assets/{zc_admin,zc_catalog}/{images,javascript,scss}/**/*',
		'!src/assets/{zc_admin,zc_catalog}/{images,javascript,scss}/**/',
		'!src/assets/{zc_admin,zc_catalog}/{images,javascript,scss}/'
	],
	js_plugins: [
		'src/assets/plugins/**/*',
		'!src/assets/plugins/flot/**/*',
		'!src/assets/plugins/flot/**/',
		'!src/assets/plugins/flot/',
		'!src/assets/plugins/input-mask/**/*',
		'!src/assets/plugins/input-mask/**/',
		'!src/assets/plugins/input-mask/',
	],
	flot_plugins: [
		'src/assets/plugins/flot/**/*.js',
		'!src/assets/plugins/flot/jquery.flot.js',
		'!src/assets/plugins/flot/excanvas.js',
	],
	inputmask_extensions: [
		'src/assets/plugins/input-mask/**/*.js',
		'!src/assets/plugins/input-mask/jquery.inputmask.js',
	],
	js_extra: [
		'src/bootswatch/javascript/**/*.js',
		'!src/bootswatch/javascript/bootswatch_demo.js'
	],
	sass_fonts_include: [
		FONT_SASS,
		'src/fonts/foundation-icons/scss/'
	]
};

/*******************************
  ****************************
  * 02: MAIN BUILD TASK
  ****************************
********************************/
// Build the site
GULP.task( 'build', function( done ) {
	$.sequence( 
		['clean:zencart'],
		['pages', 'sass', 'javascript', 'images', 'copy'],
	done );
});

/*******************************
  ****************************
  * 03: LIVERELOAD SERVER
  ****************************
********************************/
// Start a server with LiveReload to preview the site
GULP.task( 'server', ['build'], function() {
	BROWSER.init( {
		server: 'zencart', port: DEV_PORT
	});
});

/*******************************
  ****************************
  * 04: PREP FOLDERS
  ****************************
********************************/
// Remove the "zencart" folder if it exists
GULP.task( 'clean:zencart', function( done ) {
	return REMOVE( 'zencart/**' );
});

/*******************************
  ****************************
  * 05: BUILD HTML FILES
  ****************************
********************************/
// HTML build dispatcher
GULP.task( 'pages', function( done ) {
	var demo_css_path = '/demo/css/';
	var demo_js_path = '/demo/javascript/';
	var demo_folder_path = DIST_DEMO_DEV.replace( 'zencart/','/' );
 
	var jquery_js_file = demo_folder_path + '/javascript/jquery.js' + CACHEFLAG;
	var demo_js_file = demo_folder_path + '/javascript/bootswatch_demo.js' + CACHEFLAG;
	var demo_css_file = demo_folder_path + '/css/bootswatch_demo.css' + CACHEFLAG;
	var demo_img_file = demo_folder_path + '/images/zen-cart.png' + CACHEFLAG;
  
	var main_css_file = demo_css_path + 'app-main.css' + CACHEFLAG;
	var main_js_file = demo_js_path + 'app-main.js' + CACHEFLAG;
	var extra_css_file = demo_css_path + 'app-extra.css' + CACHEFLAG;
	var extra_js_file = demo_js_path + 'app-extra.js' + CACHEFLAG;
	var fonts_css_file = demo_css_path + 'app-fonts.css' + CACHEFLAG;
  
	var replace_html = $.htmlReplace( {
		'jquery_js': jquery_js_file,
		'main_js': main_js_file,
		'main_css': main_css_file,
		'extra_js': extra_js_file,
		'extra_css': extra_css_file,
		'demo_js': demo_js_file,
		'demo_css': demo_css_file,
		'demo_img': demo_img_file,
		'fonts_css': fonts_css_file,
	});
	
	return GULP.src( 'src/index.html' )
		.pipe( replace_html )
		.pipe( $.prettify() )
		.pipe( GULP.dest( 'zencart' ) );
});

// Rebuild HTML files
GULP.task( 'pages:regen', function( done ) {
	$.sequence( ['pages', 'sass'], done );
});

/*******************************
  ****************************
  * 06: BUILD CSS FILES
  ****************************
********************************/
// CSS build dispatcher
GULP.task( 'sass', function( done ) {
	$.sequence( 
	[
		'sass:main:compile', 
		'sass:extra:compile', 
		'sass:fonts:compile' 
	], done );
});

// Compile main Sass into CSS
GULP.task( 'sass:main:compile', function() {
	return GULP.src( 'src/bootswatch/scss/bootstrap.scss' )
		.pipe( $.sass().on( 'error', $.sass.logError ) )
		.pipe( $.rename( 'app-main.css' ) )
		.pipe( $.postcss( CSS_PROCESS ) )
		.pipe( $.autoprefixer( {browsers: COMPATIBILITY} ) )
		.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_DEMO_DEV + '/css' ) ) )
		.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_ADMIN_DEV + '/css' ) ) )
		.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_CATALOG_DEV + '/css' ) ) )
		.pipe( $.cond( PRODUCTION, GULP.dest( DIST_ADMIN_SRC + '/css' ) ) )
		.pipe( $.cond( PRODUCTION, GULP.dest( DIST_CATALOG_SRC + '/css' ) ) )
		
		// Minify main CSS file for production build
		.pipe( $.cond( PRODUCTION, $.cssnano( {discardUnused: false} ) ) )
		.pipe( $.cond( PRODUCTION, $.batchReplace( CLEAN_UP ) ) )
		.pipe( $.cond( PRODUCTION, $.extname( '.min.css' ) ) )
		.pipe( $.cond( PRODUCTION, GULP.dest( DIST_ADMIN_PROD + '/css' ) ) )
		.pipe( $.cond( PRODUCTION, GULP.dest( DIST_CATALOG_PROD + '/css' ) ) );
});

// Compile demo Sass into CSS
GULP.task( 'sass:demo:compile', function() {
	var retvar;
	if( !PRODUCTION ) {
		retvar = GULP.src( ['src/bootswatch/scss/bootswatch_demo.scss'] )
			.pipe( $.sass().on( 'error', $.sass.logError ) )
			.pipe( $.postcss( CSS_PROCESS ) )
			.pipe( $.autoprefixer( {browsers: COMPATIBILITY} ) )
			.pipe( GULP.dest( DIST_DEMO_DEV + '/css' ) );
	}
	return retvar;
});

// Compile extra CSS
GULP.task( 'sass:extra:compile', ['sass:demo:compile'], function( done ) {
	var admin_extra = GULP.src( ['src/assets/zc_admin/scss/zencart_admin.scss'] )
		.pipe( $.sass().on( 'error', $.sass.logError ) )
		.pipe( $.postcss( CSS_PROCESS ) )
		.pipe( $.autoprefixer( {browsers: COMPATIBILITY} ) );
	var catalog_extra = GULP.src( ['src/assets/zc_catalog/scss/zencart_catalog.scss'] )
		.pipe( $.sass().on( 'error', $.sass.logError ) )
		.pipe( $.postcss( CSS_PROCESS ) )
		.pipe( $.autoprefixer( {browsers: COMPATIBILITY} ) );
	var app_extra = GULP.src( ['src/bootswatch/scss/bootswatch.scss'] )
		.pipe( $.sass().on( 'error', $.sass.logError ) )
		.pipe( $.postcss( CSS_PROCESS ) )
		.pipe( $.autoprefixer( {browsers: COMPATIBILITY} ) )
		.pipe( $.rename( 'app-extra.css' ) )
		.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_DEMO_DEV + '/css' ) ) );
	
	return STREAM.concat( 
		$.merge( app_extra, admin_extra )
			.pipe( $.concat( 'admin-extra.css' ) )
			.pipe( $.cond( PRODUCTION, 
				GULP.dest( DIST_ADMIN_SRC + '/css' ),
				GULP.dest( DIST_ADMIN_DEV + '/css' ) 
			 ) ),
		$.merge( app_extra, admin_extra )
			.pipe( $.cond( PRODUCTION, $.cssnano( {discardUnused: false} ) ) )
			.pipe( $.cond( PRODUCTION, $.concat( 'admin-extra.min.css' ) ) )
			.pipe( $.cond( PRODUCTION, $.batchReplace( CLEAN_UP ) ) )
			.pipe( $.cond( PRODUCTION, GULP.dest( DIST_ADMIN_PROD + '/css' ) ) ),
	
		$.merge( app_extra, catalog_extra )
			.pipe( $.concat( 'catalog-extra.css' ) )
			.pipe( $.cond( PRODUCTION, 
				GULP.dest( DIST_CATALOG_SRC + '/css' ),
				GULP.dest( DIST_CATALOG_DEV + '/css' ) 
			 ) ),
		$.merge( app_extra, catalog_extra )
			.pipe( $.cond( PRODUCTION, $.cssnano( {discardUnused: false} ) ) )
			.pipe( $.cond( PRODUCTION, $.concat( 'catalog-extra.min.css' ) ) )
			.pipe( $.cond( PRODUCTION, $.batchReplace( CLEAN_UP ) ) )
			.pipe( $.cond( PRODUCTION, GULP.dest( DIST_CATALOG_PROD + '/css' ) ) )
	 );
});

// Prep fonts Sass
GULP.task( 'sass:fonts:compile', function( done ) {
	return GULP.src( [FONT_SASS + '**/*.scss'] )
		.pipe( $.injectString.prepend( "@import 'unit';\n\n" ) )
		.pipe( $.sass( {includePaths: PATHS.sass_fonts_include} )
			.on( 'error', $.sass.logError ) )
		.pipe( $.autoprefixer( {browsers: COMPATIBILITY} ) )
		.pipe( $.concat( 'app-fonts.css' ) )
		.pipe( $.postcss( CSS_PROCESS ) )
		.pipe( $.cond( PRODUCTION, 
        	GULP.dest( DIST_ADMIN_SRC + '/css' ),
        	GULP.dest( DIST_ADMIN_DEV + '/css' )
        ) )
		.pipe( $.cond( PRODUCTION, 
        	GULP.dest( DIST_CATALOG_SRC + '/css' ),
        	GULP.dest( DIST_CATALOG_DEV + '/css' )
        ) )
		.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_DEMO_DEV + '/css' ) ) )
        
         // Minify app-fonts CSS file for production build
		.pipe( $.cond( PRODUCTION, $.cssnano( {discardUnused: false} ) ) )
		.pipe( $.cond( PRODUCTION, $.batchReplace( CLEAN_UP ) ) )
		.pipe( $.cond( PRODUCTION, $.extname( '.min.css' ) ) )
		.pipe( $.cond( PRODUCTION, GULP.dest( DIST_ADMIN_PROD + '/css' ) ) )
		.pipe( $.cond( PRODUCTION, GULP.dest( DIST_CATALOG_PROD + '/css' ) ) );
});

/*******************************
  ****************************
  * 07: BUILD JAVASCRIPT FILES
  ****************************
********************************/
// JS build dispatcher
GULP.task( 'javascript', function( done ) {
	var admin_extra = GULP.src( ['src/assets/zc_admin/javascript/**/*.js'] );
	var catalog_extra = GULP.src( ['src/assets/zc_catalog/javascript/**/*.js'] );
	var app_extra = GULP.src( PATHS.js_extra )
			.pipe( $.concat( 'app-extra.js' ) )
			.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_DEMO_DEV + '/javascript' ) ) );
	
	return STREAM.concat( 
		GULP.src( ['src/bootswatch/javascript/bootswatch_demo.js'] )
			.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_DEMO_DEV + '/javascript' ) ) ),
			
		GULP.src( ['src/components/bootstrap-sass/assets/javascripts/bootstrap.js'] )
			// Compile for development build
			.pipe( $.rename( 'app-main.js' ) )
			// Prepend functions to resolve Bootstrap/JQuery-UI conflicts
			.pipe( $.injectString.prepend(UI_FIX) ) 
			
			.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_DEMO_DEV + '/javascript' ) ) )
			.pipe( $.cond( PRODUCTION, 
				GULP.dest( DIST_ADMIN_SRC + '/javascript' ), 
				GULP.dest( DIST_ADMIN_DEV + '/javascript' ) ) 
			 )
			.pipe( $.cond( PRODUCTION, 
				GULP.dest( DIST_CATALOG_SRC + '/javascript' ), 
				GULP.dest( DIST_CATALOG_DEV + '/javascript' ) ) 
			 ),
			 
		GULP.src( ['src/components/bootstrap-sass/assets/javascripts/bootstrap.min.js'] )
			// Compile for production build
			.pipe( $.rename( 'app-main.min.js' ) )
			// Prepend functions to resolve Bootstrap/JQuery-UI conflicts
			.pipe( $.injectString.prepend(UI_FIX) ) 
			.pipe( $.cond( PRODUCTION, GULP.dest( DIST_ADMIN_PROD + '/javascript' ) ) )
			.pipe( $.cond( PRODUCTION, GULP.dest( DIST_CATALOG_PROD + '/javascript' ) ) ),
			
		GULP.src( ['src/components/jquery-ui/jquery-ui.js'] )
			.pipe( $.cond( PRODUCTION, 
				GULP.dest( DIST_ADMIN_SRC + '/javascript' ), 
				GULP.dest( DIST_ADMIN_DEV + '/javascript' ) ) 
			),
			GULP.src( ['src/components/jquery-ui/jquery-ui.min.js'] )
				.pipe( $.cond( PRODUCTION, GULP.dest( DIST_ADMIN_PROD + '/javascript' ) ) ),
			
		GULP.src( ['src/components/jquery/dist/jquery.js'] )
			.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_DEMO_DEV + '/javascript' ) ) )
			.pipe( $.cond( PRODUCTION, 
				GULP.dest( DIST_ADMIN_SRC + '/javascript' ), 
				GULP.dest( DIST_ADMIN_DEV + '/javascript' ) ) 
			 )
			.pipe( $.cond( PRODUCTION, 
				GULP.dest( DIST_CATALOG_SRC + '/javascript' ), 
				GULP.dest( DIST_CATALOG_DEV + '/javascript' ) ) 
			 ),
			GULP.src( ['src/components/jquery/dist/jquery.min.js'] )
				.pipe( $.cond( PRODUCTION, GULP.dest( DIST_ADMIN_PROD + '/javascript' ) ) )
				.pipe( $.cond( PRODUCTION, GULP.dest( DIST_CATALOG_PROD + '/javascript' ) ) ),
			
		$.merge( app_extra, admin_extra )
			.pipe( $.concat( 'admin-extra.js' ) )
			.pipe( $.cond( PRODUCTION, GULP.dest( DIST_ADMIN_SRC + '/javascript' ) ) )
			.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_ADMIN_DEV + '/javascript' ) ) ),
			$.merge( app_extra, admin_extra )
				.pipe( $.cond( PRODUCTION, $.uglify( {preserveComments:"license"} ) ) )
				.pipe( $.cond( PRODUCTION, $.concat( 'admin-extra.min.js' ) ) )
				.pipe( $.cond( PRODUCTION, $.batchReplace( CLEAN_UP ) ) )
				.pipe( $.cond( PRODUCTION, GULP.dest( DIST_ADMIN_PROD + '/javascript' ) ) ),
			
		$.merge( app_extra, catalog_extra )
			.pipe( $.concat( 'catalog-extra.js' ) )
			.pipe( $.cond( PRODUCTION, GULP.dest( DIST_CATALOG_SRC + '/javascript' ) ) )
			.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_CATALOG_DEV + '/javascript' ) ) ),
			$.merge( app_extra, catalog_extra )
				.pipe( $.cond( PRODUCTION, $.uglify( {preserveComments:"license"} ) ) )
				.pipe( $.cond( PRODUCTION, $.concat( 'catalog-extra.min.js' ) ) )
				.pipe( $.cond( PRODUCTION, $.batchReplace( CLEAN_UP ) ) )
				.pipe( $.cond( PRODUCTION, GULP.dest( DIST_CATALOG_PROD + '/javascript' ) ) )
	 );
});

/*******************************
  ****************************
  * 08: PROCESS IMAGE FILES
  ****************************
********************************/
// Copy image files to the "zencart" folder
GULP.task( 'images', function() {
	return STREAM.concat( 
		GULP.src( ['src/bootswatch/images/**/*'] )
			// Compile for demo in development build
			.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_DEMO_DEV + '/images' ) ) ),
			
		GULP.src( ['src/assets/zc_admin/images/**/*'] )
			// Compile for development build
			.pipe( $.cond( PRODUCTION, 
				GULP.dest( DIST_ADMIN_PROD + '/images' ), 
				GULP.dest( DIST_ADMIN_DEV + '/images' ) 
			 ) ),
			
		GULP.src( ['src/assets/zc_catalog/images/**/*'] )
			// Compile for development build
			.pipe( $.cond( PRODUCTION, 
				GULP.dest( DIST_CATALOG_PROD + '/images' ), 
				GULP.dest( DIST_CATALOG_DEV + '/images' ) 
			 ) )
	 );
});

/*******************************
  ****************************
  * 09: COPY ASSETS
  ****************************
********************************/
// Dispatcher to copy assets from "src/assets" folder
GULP.task( 'copy', function( done ) {
	$.sequence( ['copy:plugins', 'copy:font'], done );
});

// JS Plugins Builder
GULP.task( 'copy:plugins', function() {
	var retval; 
	if ( !PRODUCTION ) {
		// PROCESS PLUGINS FOR DEVELOPMENT RUNS ( WE END UP WILL ALL AVAILABLE PLUGINS IN RETVAL VARIABLE )
		retval = STREAM.concat( 
			// Save all plugins apart from inputmask and flot ( processed separately ) to development destination folders
			GULP.src( PATHS.js_plugins )
				.pipe( GULP.dest( DIST_DEMO_DEV + '/plugins' ) )
				.pipe( GULP.dest( DIST_ADMIN_DEV + '/plugins' ) ),
				
			// Save main jquery.inputmask plugin file to development destination folders
			GULP.src( ['src/assets/plugins/input-mask/jquery.inputmask.js'] )
				.pipe( GULP.dest( DIST_DEMO_DEV + '/plugins/input-mask' ) )
				.pipe( GULP.dest( DIST_ADMIN_DEV + '/plugins/input-mask' ) ),
				
			// Combine jquery.inputmask plugin extension files to a single file and save to development destination folders
			GULP.src( PATHS.inputmask_extensions )
				.pipe( $.concat( 'jquery.inputmask-extensions.js' ) )
				.pipe( GULP.dest( DIST_DEMO_DEV + '/plugins/input-mask' ) )
				.pipe( GULP.dest( DIST_ADMIN_DEV + '/plugins/input-mask' ) ),
				
			// Save jquery.inputmask phone code files to development destination folders
			GULP.src( ['src/assets/plugins/input-mask/phone-codes/**/*'] )
				.pipe( GULP.dest( DIST_DEMO_DEV + '/plugins/input-mask/phone-codes' ) )
				.pipe( GULP.dest( DIST_ADMIN_DEV + '/plugins/input-mask/phone-codes' ) )
    	 ); 
    } else {
    	// PROCESS PLUGINS FOR PRODUCTION RUNS ( WE END UP WITH ONLY SPECIFIC PLUGINS IN RETVAL VARIABLE )
    	retval = STREAM.concat( 
    		// Minify and save select2 plugin js files excluding plugin localisation js files to production destination folders
    		GULP.src( ['src/assets/plugins/select2/**/*.js', '!src/assets/plugins/select2/i18n/**/*.js'] )
    			.pipe( GULP.dest( DIST_ADMIN_SRC + '/plugins/select2' ) )
				.pipe( $.uglify( {preserveComments:"license"} ) )
				.pipe( $.batchReplace( CLEAN_UP ) )
				.pipe( $.extname( '.min.js' ) )
				.pipe( GULP.dest( DIST_ADMIN_PROD + '/plugins/select2' ) ),
				
			// Save Select2 plugin localisation js files to production destination folders
			GULP.src( ['src/assets/plugins/select2/i18n/**/*.js'] )
				.pipe( GULP.dest( DIST_ADMIN_SRC + '/plugins/select2/i18n' ) )
				.pipe( GULP.dest( DIST_ADMIN_PROD + '/plugins/select2/i18n' ) ),
				
			// Minify and save select2 plugin css files to production destination folders
			GULP.src( ['src/assets/plugins/select2/**/*.css'] )
				// Apply CSS PostProcessing Rules
				.pipe( $.postcss( CSS_PROCESS ) )
				.pipe( $.autoprefixer( {browsers: COMPATIBILITY} ) )
				// Save to sources destination folder
				.pipe( GULP.dest( DIST_ADMIN_SRC + '/plugins/select2' ) )
				// Minify and save to production destination folder if this is a production run
				.pipe( $.cond( PRODUCTION, $.cssnano( {discardUnused: false} ) ) )
				.pipe( $.cond( PRODUCTION, $.batchReplace( CLEAN_UP ) ) )
				.pipe( $.cond( PRODUCTION, $.extname( '.min.css' ) ) )
				.pipe( GULP.dest( DIST_ADMIN_PROD + '/plugins/select2' ) ),
				
			// Minify and save daterangepicker plugin js files to production destination folders
			GULP.src( ['src/assets/plugins/daterangepicker/**/*.js'] )
				.pipe( GULP.dest( DIST_ADMIN_SRC + '/plugins/daterangepicker' ) )
				.pipe( $.uglify( {preserveComments:"license"} ) )
				.pipe( $.batchReplace( CLEAN_UP ) )
				.pipe( $.extname( '.min.js' ) )
				.pipe( GULP.dest( DIST_ADMIN_PROD + '/plugins/daterangepicker' ) ),
				
			// Minify and save daterangepicker plugin css files to production destination folders
			GULP.src( ['src/assets/plugins/daterangepicker/**/*.css'] )
				// Apply CSS PostProcessing Rules
				.pipe( $.postcss( CSS_PROCESS ) )
				.pipe( $.autoprefixer( {browsers: COMPATIBILITY} ) )
				// Save to sources destination folder
				.pipe( GULP.dest( DIST_ADMIN_SRC + '/plugins/daterangepicker' ) )
				// Minify and save to production destination folder if this is a production run
				.pipe( $.cond( PRODUCTION, $.cssnano( {discardUnused: false} ) ) )
				.pipe( $.cond( PRODUCTION, $.batchReplace( CLEAN_UP ) ) )
				.pipe( $.cond( PRODUCTION, $.extname( '.min.css' ) ) )
				.pipe( GULP.dest( DIST_ADMIN_PROD + '/plugins/daterangepicker' ) ),
				
			// Minify and save moment plugin js files to production destination folders
			GULP.src( ['src/assets/plugins/moment/**/*.js'] )
				.pipe( GULP.dest( DIST_ADMIN_SRC + '/plugins/moment' ) )
				.pipe( $.uglify( {preserveComments:"license"} ) )
				.pipe( $.batchReplace( CLEAN_UP ) )
				.pipe( $.extname( '.min.js' ) )
				.pipe( GULP.dest( DIST_ADMIN_PROD + '/plugins/moment' ) ),
				
			// Minify and save gridstack plugin js files to production destination folders
			GULP.src( ['src/assets/plugins/gridstack/**/*.js'] )
				.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_DEMO_DEV + '/plugins/gridstack' ) ) )
				.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_ADMIN_DEV + '/plugins/gridstack' ) ) )
				.pipe( $.cond( PRODUCTION, GULP.dest( DIST_ADMIN_SRC + '/plugins/gridstack' ) ) )
				.pipe( $.cond( PRODUCTION, $.uglify( {preserveComments:"license"} ) ) )
				.pipe( $.cond( PRODUCTION, $.batchReplace( CLEAN_UP ) ) )
				.pipe( $.cond( PRODUCTION, $.extname( '.min.js' ) ) )
				.pipe( $.cond( PRODUCTION, GULP.dest( DIST_ADMIN_PROD + '/plugins/gridstack' ) ) ),
				
			// Minify and save gridstack plugin css files to production destination folders
			GULP.src( ['src/assets/plugins/gridstack/**/*.css'] )
				// Apply CSS PostProcessing Rules
				.pipe( $.postcss( CSS_PROCESS ) )
				.pipe( $.autoprefixer( {browsers: COMPATIBILITY} ) )
				// Save to sources destination folder
				.pipe( GULP.dest( DIST_ADMIN_SRC + '/plugins/gridstack' ) )
				// Minify and save to production destination folder if this is a production run
				.pipe( $.cond( PRODUCTION, $.cssnano( {discardUnused: false} ) ) )
				.pipe( $.cond( PRODUCTION, $.batchReplace( CLEAN_UP ) ) )
				.pipe( $.cond( PRODUCTION, $.extname( '.min.css' ) ) )
				.pipe( GULP.dest( DIST_ADMIN_PROD + '/plugins/gridstack' ) )
		 ); 
	}
	// PROCESS FLOT PLUGIN FOR BOTH PRODUCTION AND DEVELOPMENT RUNS & ADD TO RETVAL VERIABLE
	retval = retval + STREAM.concat( 
		// Main Flot JS File
		GULP.src( ['src/assets/plugins/flot/jquery.flot.js'] )
			// Save to development destination folders
			.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_DEMO_DEV + '/plugins/flot' ) ) )
			.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_ADMIN_DEV + '/plugins/flot' ) ) )
			// Save to production "sources" destination folders
			.pipe( $.cond( PRODUCTION, GULP.dest( DIST_ADMIN_SRC + '/plugins/flot' ) ) )
			// Minify and save to production destination folders
			.pipe( $.cond( PRODUCTION, $.uglify( {preserveComments:"license"} ) ) )
			.pipe( $.cond( PRODUCTION, $.batchReplace( CLEAN_UP ) ) )
			.pipe( $.cond( PRODUCTION, $.extname( '.min.js' ) ) )
			.pipe( $.cond( PRODUCTION, GULP.dest( DIST_ADMIN_PROD + '/plugins/flot' ) ) ),
			
		// Flot Plugin Extensions
		GULP.src( PATHS.flot_plugins )
			// Concatenate into a single file
			.pipe( $.concat( 'jquery.flot-plugins.js' ) )
			// Save to development destination folders
			.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_DEMO_DEV + '/plugins/flot' ) ) )
			.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_ADMIN_DEV + '/plugins/flot' ) ) )
			// Save to production "sources" destination folders
			.pipe( $.cond( PRODUCTION, GULP.dest( DIST_ADMIN_SRC + '/plugins/flot' ) ) )
			// Minify and save to production destination folders
			.pipe( $.cond( PRODUCTION, $.uglify( {preserveComments:"license"} ) ) )
			.pipe( $.cond( PRODUCTION, $.batchReplace( CLEAN_UP ) ) )
			.pipe( $.cond( PRODUCTION, $.extname( '.min.js' ) ) )
			.pipe( $.cond( PRODUCTION, GULP.dest( DIST_ADMIN_PROD + '/plugins/flot' ) ) )
  ); 
  return retval;
});

GULP.task( 'copy:demo:font', function() {
	return GULP.src( 'src/fonts/lato/fonts/**/*' )
		.pipe( $.cond( !PRODUCTION, GULP.dest( DIST_DEMO_DEV + '/fonts' ) ) );
});

GULP.task( 'copy:glypicons', function() {
	var destination = [];
	if( PRODUCTION ) {
		destination.push( 
			GULP.dest( DIST_ADMIN_SRC + '/fonts' ),
			GULP.dest( DIST_CATALOG_SRC + '/fonts' ),
        	GULP.dest( DIST_ADMIN_PROD + '/fonts' ),
        	GULP.dest( DIST_CATALOG_PROD + '/fonts' )
		 );
	} else {
		destination.push( 
			GULP.dest( DIST_ADMIN_DEV + '/fonts' ), 
			GULP.dest( DIST_CATALOG_DEV + '/fonts' )
		 );
	}
	return GULP.src( ['src/components/bootstrap-sass/assets/fonts/bootstrap/**/*'] )
		.pipe( $.multistream.apply( undefined, destination ) );
});

// Copy font assets to "zencart/**/fonts" floder
GULP.task( 'copy:font', ['copy:glypicons', 'copy:demo:font'], function() {
	var destination = [];
	if( PRODUCTION ) {
		destination.push( 
			GULP.dest( DIST_ADMIN_SRC + '/fonts' ),
			GULP.dest( DIST_CATALOG_SRC + '/fonts' ),
        	GULP.dest( DIST_ADMIN_PROD + '/fonts' ),
        	GULP.dest( DIST_CATALOG_PROD + '/fonts' )
		 );
	} else {
		destination.push( 
			GULP.dest( DIST_ADMIN_DEV + '/fonts' ), 
			GULP.dest( DIST_CATALOG_DEV + '/fonts' )
		 );
	}
	return GULP.src( FONT_PATH )
		.pipe( $.flatten() )
		.pipe( $.multistream.apply( undefined, destination ) );
});

/*******************************
  ****************************
  * 10: DEFAULT TASK
  ****************************
********************************/
// Build the site, run the server, and watch for file changes
GULP.task( 'default', ['server'], function() {
	GULP.watch( PATHS.assets, ['copy', BROWSER.reload] );
	GULP.watch( ['src/pages/**/*.html'], ['pages:regen', BROWSER.reload] );
	GULP.watch( ['src/assets/scss/**/*.scss'], ['sass', BROWSER.reload] );
	GULP.watch( ['src/assets/javascript/**/*.js'], ['javascript', BROWSER.reload] );
	GULP.watch( ['src/assets/img/**/*'], ['images', BROWSER.reload] );
});