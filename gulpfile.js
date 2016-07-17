// Zen Cart E-Commerce: Style Template
//
// Gulpfile to create Bootstrap based CSS and JS files for Zen Cart.
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

// Cache buster
const CACHEFLAG			= '?' + Math.floor(Math.random()*900000) + 100000;

// Path to font icons
const FONT_SASS			='src/components/fonticons/**/scss/';

// Misc filesystem paths
const DIST_DEMO_DEV		= 'zencart/dev/demo'
const DIST_ADMIN_DEV	= 'zencart/dev/zc_admin/includes/template'
const DIST_ADMIN_SRC	= 'zencart/sources/zc_admin/includes/template'
const DIST_ADMIN_PROD	= 'zencart/production/zc_admin/includes/template'
const DIST_CATALOG_DEV	= 'zencart/dev/zc_catalog/includes/templates/template_default'
const DIST_CATALOG_SRC	= 'zencart/sources/zc_catalog/includes/templates/template_default'
const DIST_CATALOG_PROD	= 'zencart/production/zc_catalog/includes/templates/template_default'
const JS_EXT			= PRODUCTION ? '.min.js' : '.js';
const CSS_EXT			= PRODUCTION ? '.min.css' : '.css';

// File paths to various assets.
const PATHS	= {
				assets: [
					'src/assets/{zc_admin,zc_catalog}/**/*',
					'!src/assets/{zc_admin,zc_catalog}/{images,javascript,scss,plugins}/**/*',
					'!src/assets/{zc_admin,zc_catalog}/{images,javascript,scss,plugins}/**/',
					'!src/assets/{zc_admin,zc_catalog}/{images,javascript,scss,plugins}/'
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
				stylesheet_fonticon_include: [
					FONT_SASS,
					'src/components/fonticons/foundation-icons/scss/'
				],
				adminlte_demo_js: [
					'src/AdminLTE/assets/js/demo.js',
					'src/AdminLTE/assets/js/pages/**/*.js',
				]
			};

// Ensure license information shows up clearly in minified files.			
const CLEAN_UP = [
		['*/', '*/\n'],
		['\n\n', '\n'],
		[',/*', ',\n\n/*'],
		[';/*', ';\n\n/*'],
		[')/*', ')\n\n/*'],
		[new RegExp('([a-zA-Z0-9_$])') + '/*', '\n/*']
	];	
			
			

/*******************************
  ****************************
  * 02: MAIN BUILD TASK
  ****************************
********************************/
// Build the site
GULP.task('build', function(done) {
  $.sequence(
    ['clean:zencart'], 
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
    server: 'zencart', port: DEV_PORT
  });
});

/*******************************
  ****************************
  * 04: PREP FOLDERS
  ****************************
********************************/
// Resave the "zencart" folder if it exists
GULP.task('clean:zencart', function() {
  return REMOVE('zencart');
});

/*******************************
  ****************************
  * 05: BUILD HTML FILES
  ****************************
********************************/
// HTML build dispatcher
GULP.task('pages', function() {

  var demo_path = DIST_DEMO_DEV.replace('zencart/','/');
  var css_path = PRODUCTION ? '/production/css/' : demo_path + '/css/';
  var js_path = PRODUCTION ? '/production/javascript/' : demo_path + '/javascript/';
  var plugins_path = demo_path + '/plugins';
  var jquery_js = PRODUCTION ? 'jquery.min.js' : 'jquery.js';
  var js_cache_ext = JS_EXT + CACHEFLAG;
  var css_cache_ext = CSS_EXT + CACHEFLAG;
  var replace_html = {
  	'demo_path': demo_path,
    'plugins_js': plugins_path,
    'docu_path': '//almsaeedstudio.com/themes/AdminLTE/documentation/index.html',
    'jquery_js': js_path + jquery_js + CACHEFLAG,
    'jquery_ui_js': js_path + 'jquery-ui' + js_cache_ext,
    'bootstrap_js': js_path + 'bootstrap' + js_cache_ext,
    'bootstrap_css': css_path + 'bootstrap' + css_cache_ext,
    'adminlte_js': js_path + 'AdminLTE' + js_cache_ext, 
    'adminlte_css': css_path + 'AdminLTE' + css_cache_ext,
    'adminlte_skin_all_css': css_path + 'skins/skin-blue' + css_cache_ext,
    'adminlte_skin_blue_css': css_path + 'skins/skin-blue' + css_cache_ext,
    'fonticon_css': css_path + 'fonticons' + css_cache_ext,
    'dashboard_js': js_path + 'dashboard' + js_cache_ext, 
    'dashboard2_js': js_path + 'dashboard2' + js_cache_ext, 
    'demo_js': js_path + 'demo' + js_cache_ext, 
    'pace_js': plugins_path + '/pace/pace' + js_cache_ext,
    'pace_css': plugins_path + '/pace/pace' + css_cache_ext,
    'icheck_css_all': plugins_path + '/iCheck/all' + css_cache_ext,
    'icheck_css': plugins_path + '/iCheck/flat/blue' + css_cache_ext,
    'icheck_js': plugins_path + '/iCheck/icheck' + js_cache_ext,
    'moment_js': plugins_path + '/moment/moment' + js_cache_ext,
    'slimscroll_js': plugins_path + '/slimScroll/jquery.slimscroll' + js_cache_ext,
    'fastclick_js': plugins_path + '/fastclick/fastclick' + js_cache_ext,
    'bootstrap-wysihtml5_js': plugins_path + '/bootstrap-wysihtml5/bootstrap3-wysihtml5.all' + js_cache_ext,
    'bootstrap-wysihtml5_css': plugins_path + '/bootstrap-wysihtml5/bootstrap3-wysihtml5' + css_cache_ext,
    'datepicker_js': plugins_path + '/datepicker/bootstrap-datepicker' + js_cache_ext,
    'datepicker_css': plugins_path + '/datepicker/datepicker3' + css_cache_ext,
    'daterangepicker_js': plugins_path + '/daterangepicker/daterangepicker' + js_cache_ext,
    'daterangepicker_css': plugins_path + '/daterangepicker/daterangepicker-bs3' + css_cache_ext,
    'jquery-datatables_js': plugins_path + '/datatables/jquery.dataTables' + js_cache_ext,
    'bootstrap-datatables_js': plugins_path + '/datatables/dataTables.bootstrap' + js_cache_ext,
    'bootstrap-datatables_css': plugins_path + '/datatables/dataTables.bootstrap' + css_cache_ext,
    'select2_js': plugins_path + '/select2/select2' + js_cache_ext,
    'select2_css': plugins_path + '/select2/select2' + css_cache_ext,
    'timepicker_js': plugins_path + '/timepicker/bootstrap-timepicker' + js_cache_ext,
    'timepicker_css': plugins_path + '/timepicker/bootstrap-timepicker' + css_cache_ext,
    'jquery_knob_js': plugins_path + '/knob/jquery.knob' + js_cache_ext,
    'jvectormap_css': plugins_path + '/jvectormap/jquery-jvectormap-1.2.2' + css_cache_ext,
    'jvectormap_main_js': plugins_path + '/jvectormap/jquery-jvectormap-1.2.2' + js_cache_ext,
    'jvectormap_world_js': plugins_path + '/jvectormap/jquery-jvectormap-world-mill-en' + js_cache_ext,
    'sparkline_js': plugins_path + '/sparkline/jquery.sparkline' + js_cache_ext,
    'morris_js': plugins_path + '/morris/morris' + js_cache_ext,
    'morris_css': plugins_path + '/morris/morris' + css_cache_ext,
    'raphael_js': plugins_path + '/raphael/raphael' + js_cache_ext,
    'chart_js': plugins_path + '/chartjs/Chart' + js_cache_ext,
    'bootstrap_colorpicker_js': plugins_path + '/colorpicker/bootstrap-colorpicker' + js_cache_ext,
    'bootstrap_colorpicker_css': plugins_path + '/colorpicker/bootstrap-colorpicker' + css_cache_ext,
    'bootstrap_timepicker_js': plugins_path + '/timepicker/bootstrap-timepicker' + js_cache_ext,
    'bootstrap_timepicker_css': plugins_path + '/timepicker/bootstrap-timepicker' + css_cache_ext,
    'bootstrap_slider_js': plugins_path + '/bootstrap-slider/bootstrap-slider' + js_cache_ext,
    'bootstrap_slider_css': plugins_path + '/bootstrap-slider/slider' + css_cache_ext,
    'ion_slider_js': plugins_path + '/ionslider/ion.rangeSlider' + js_cache_ext,
    'ion_slider_css': plugins_path + '/ionslider/ion.rangeSlider' + css_cache_ext,
    'ion_slider_nice_css': plugins_path + '/ionslider/ion.rangeSlider.skinNice' + css_cache_ext,
    'flot_main_js': plugins_path + '/flot/jquery.flot' + js_cache_ext,
    'flot_plugins_js': plugins_path + '/flot/jquery.flot-plugins' + js_cache_ext,
    'inputmask_main_js': plugins_path + '/input-mask/jquery.inputmask' + js_cache_ext,
    'inputmask_extensions_js': plugins_path + '/input-mask/jquery.inputmask-extensions' + js_cache_ext,    
    'fullcalendar_js': plugins_path + '/fullcalendar/fullcalendar' + js_cache_ext,
    'fullcalendar_main_css': plugins_path + '/fullcalendar/fullcalendar' + css_cache_ext,
    'fullcalendar_print_css': {
    	src: plugins_path + '/fullcalendar/fullcalendar.print' + css_cache_ext,
    	tpl: '<link rel="stylesheet" href="%s" media="print">'
    },
  };
  var retval;
  
  if (!PRODUCTION) {
  	retval = STREAM.concat(
  	
  	  // Create demo dashboard html files
  	  GULP.src(['src/AdminLTE/dashboard-v{1,2}.html'])
  	    .pipe( $.htmlReplace(replace_html) )
  	    .pipe( $.prettify() )
  	    .pipe( GULP.dest(DIST_DEMO_DEV) ),
  	    
  	  // Create main index html file
  	  GULP.src(['src/index.html'])
  	    .pipe( $.htmlReplace(replace_html) )
  	    .pipe( $.prettify() )
  	    .pipe( GULP.dest('zencart') ),
  	    
  	  // Create misc AdminLTE example pages
  	  GULP.src(['src/AdminLTE/pages/**/*'])
  	    .pipe( $.htmlReplace(replace_html) )
  	    .pipe( GULP.dest(DIST_DEMO_DEV + '/pages') )
  	    
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
  $.sequence(
    ['stylesheet:bootstrap'], 
    ['stylesheet:adminlte'], 
    ['stylesheet:zencart:admin', 'stylesheet:zencart:catalog'], 
    ['stylesheet:fonticon'], 
  done);
});

GULP.task('stylesheet:bootstrap', function() {
  var dev_destination = [];
  if (PRODUCTION) {
    dev_destination.push(
      GULP.dest(DIST_ADMIN_SRC + '/css'), 
      GULP.dest(DIST_CATALOG_SRC + '/css')
    );
  } else {
    dev_destination.push(
      GULP.dest(DIST_DEMO_DEV + '/css'), 
      GULP.dest(DIST_ADMIN_DEV + '/css'), 
      GULP.dest(DIST_CATALOG_DEV + '/css')
    );
  }
  var prod_destination = [];
  prod_destination.push(
    GULP.dest(DIST_ADMIN_PROD + '/css'), 
    GULP.dest(DIST_CATALOG_PROD + '/css')
  );

  // Process Bootstrap CSS File  
  return GULP.src(['src/components/bootstrap/dist/css/bootstrap.css'])
  
     // Apply CSS PostProcessing Rules  
    .pipe( $.postcss(CSS_PROCESS) )
	.pipe( $.autoprefixer({
		browsers: COMPATIBILITY
	}) )
	
     // Save to development or sources destination folders 
    .pipe( $.multistream.apply(undefined, dev_destination) )
    
     // Minify and save to production destination folders if this is a production run
    .pipe( $.cond(PRODUCTION, $.cssnano() ) )
    .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
    .pipe( $.cond(PRODUCTION, $.extname(CSS_EXT) ) )
    .pipe( $.cond(PRODUCTION, $.multistream.apply(undefined, prod_destination) ) );
});

// Process AdminLTE CSS Files
GULP.task('stylesheet:adminlte', function() {
  var dev_destination = [];
  if (PRODUCTION) {
    dev_destination.push(
      GULP.dest(DIST_ADMIN_SRC + '/css')
    );
  } else {
    dev_destination.push(
      GULP.dest(DIST_DEMO_DEV + '/css'), 
      GULP.dest(DIST_ADMIN_DEV + '/css')
    );
  }

  var prod_destination = [];
  prod_destination.push(
    GULP.dest(DIST_ADMIN_PROD + '/css') 
  );

  return GULP.src(['src/AdminLTE/assets/css/**/*.css'])
  
     // Apply CSS PostProcessing Rules  
    .pipe( $.postcss(CSS_PROCESS) )
	.pipe( $.autoprefixer({
		browsers: COMPATIBILITY
	}) )
	
     // Save to development or sources destination folders 
    .pipe( $.multistream.apply(undefined, dev_destination) )
    
     // Minify and save to production destination folders if this is a production run
    .pipe( $.cond(PRODUCTION, $.cssnano() ) )
    .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
    .pipe( $.cond(PRODUCTION, $.extname(CSS_EXT) ) )
    .pipe( $.cond(PRODUCTION, $.multistream.apply(undefined, prod_destination) ) );
    
});

// Process Zen Cart Admin CSS Files
GULP.task('stylesheet:zencart:admin', function() {
  var dev_destination = [];
  if (PRODUCTION) {
    dev_destination.push(
      GULP.dest(DIST_ADMIN_SRC + '/css')
    );
  } else {
    dev_destination.push(
      GULP.dest(DIST_ADMIN_DEV + '/css')
    );
  }

  var prod_destination = [];
  prod_destination.push(
    GULP.dest(DIST_ADMIN_PROD + '/css') 
  );

  return GULP.src(['src/assets/zc_admin/scss/**/*.scss'])
     // Convert from sass to css
    .pipe( $.sass().on('error', $.sass.logError) )
     // Apply CSS PostProcessing Rules  
    .pipe( $.postcss(CSS_PROCESS) )
	.pipe( $.autoprefixer({
		browsers: COMPATIBILITY
	}) )
     // Save to development or sources destination folders 
    .pipe( $.multistream.apply(undefined, dev_destination) )
     // Minify and save to production destination folders if this is a production run
    .pipe( $.cond(PRODUCTION, $.cssnano() ) )
    .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
    .pipe( $.cond(PRODUCTION, $.extname(CSS_EXT) ) )
    .pipe( $.cond(PRODUCTION, $.multistream.apply(undefined, prod_destination) ) );
});

// Process Zen Cart Admin CSS Files
GULP.task('stylesheet:zencart:catalog', function() {
  var dev_destination = [];
  if (PRODUCTION) {
    dev_destination.push(
      GULP.dest(DIST_CATALOG_SRC + '/css')
    );
  } else {
    dev_destination.push(
      GULP.dest(DIST_CATALOG_DEV + '/css')
    );
  }

  var prod_destination = [];
  prod_destination.push(
    GULP.dest(DIST_CATALOG_PROD + '/css') 
  );

  return GULP.src(['src/assets/zc_catalog/scss/**/*.scss'])
     // Convert from sass to css
    .pipe( $.sass().on('error', $.sass.logError) )
     // Apply CSS PostProcessing Rules  
    .pipe( $.postcss(CSS_PROCESS) )
	.pipe( $.autoprefixer({
		browsers: COMPATIBILITY
	}) )
     // Save to development or sources destination folders 
    .pipe( $.multistream.apply(undefined, dev_destination) )
     // Minify and save to production destination folders if this is a production run
    .pipe( $.cond(PRODUCTION, $.cssnano() ) )
    .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
    .pipe( $.cond(PRODUCTION, $.extname(CSS_EXT) ) )
    .pipe( $.cond(PRODUCTION, $.multistream.apply(undefined, prod_destination) ) );
});

// Process Glypicon Font Files
GULP.task('stylesheet:glyphicons', function() {
  var destinations = [];
  if (PRODUCTION) {
    destinations.push(
      GULP.dest(DIST_ADMIN_PROD + '/fonts'), 
      GULP.dest(DIST_CATALOG_PROD + '/fonts')
    );
  } else {
    destinations.push(
      GULP.dest(DIST_DEMO_DEV + '/fonts'), 
      GULP.dest(DIST_ADMIN_DEV + '/fonts'), 
      GULP.dest(DIST_CATALOG_DEV + '/fonts')
    );
  }
	
  return GULP.src(['src/components/bootstrap/fonts/**/*'])
  // Copy to target destination folders 
  .pipe( $.multistream.apply(undefined, destinations) )
  
});

// Create Combined Font Icon CSS File (After Processing Glypicon Font Files)
GULP.task('stylesheet:fonticon', ['stylesheet:glyphicons'], function() {
  var dev_destination = [];
  if (PRODUCTION) {
    dev_destination.push(
      GULP.dest(DIST_ADMIN_SRC + '/css'), 
      GULP.dest(DIST_CATALOG_SRC + '/css')
    );
  } else {
    dev_destination.push(
      GULP.dest(DIST_DEMO_DEV + '/css'), 
      GULP.dest(DIST_ADMIN_DEV + '/css'), 
      GULP.dest(DIST_CATALOG_DEV + '/css')
    );
  }
  var prod_destination = [];
  prod_destination.push(
    GULP.dest(DIST_ADMIN_PROD + '/css'), 
    GULP.dest(DIST_CATALOG_PROD + '/css')
  );
  
  return GULP.src([FONT_SASS + '**/*.scss'])
  
     // Insert command to load "_unit.scss" required for Foundation Icons
    .pipe( $.injectString.prepend("@import 'unit';\n\n") )

     // Convert from sass to css
    .pipe( $.sass({
      includePaths: PATHS.stylesheet_fonticon_include
    }).on('error', $.sass.logError) )
    
     // Apply CSS PostProcessing Rules
    .pipe( $.postcss(CSS_PROCESS) )
    .pipe( $.autoprefixer({
      browsers: COMPATIBILITY
    }) )
    
    // Concatenate into a single file 
    .pipe( $.concat('fonticons.css') )
    
     // Save to development or sources destination folders 
    .pipe( $.multistream.apply(undefined, dev_destination) )
    
     // Minify and save to production destination folders if this is a production run
    .pipe( $.cond(PRODUCTION, $.cssnano() ) )
    .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
    .pipe( $.cond(PRODUCTION, $.extname(CSS_EXT) ) )
    .pipe( $.cond(PRODUCTION, $.multistream.apply(undefined, prod_destination) ) );
    
});

/*******************************
  ****************************
  * 07: BUILD JAVASCRIPT FILES
  ****************************
********************************/
// JS Plugins Builder
GULP.task('plugins', function() {

  var retval; 
  
  if (!PRODUCTION) {
  	
    // PROCESS PLUGINS FOR DEVELOPMENT RUNS (WE END UP WILL ALL AVAILABLE PLUGINS IN RETVAL VARIABLE)
    retval = STREAM.concat(
    
      // Save all plugins apart from inputmask and flot (processed separately) to development destination folders
      GULP.src(PATHS.js_plugins)
        .pipe( GULP.dest(DIST_DEMO_DEV + '/plugins') )
  	    .pipe( GULP.dest(DIST_ADMIN_DEV + '/plugins') ),
  	    
      // Save main jquery.inputmask plugin file to development destination folders
      GULP.src(['src/assets/plugins/input-mask/jquery.inputmask.js'])
        .pipe( GULP.dest(DIST_DEMO_DEV + '/plugins/input-mask') )
        .pipe( GULP.dest(DIST_ADMIN_DEV + '/plugins/input-mask') ),
        
      // Combine jquery.inputmask plugin extension files to a single file and save to development destination folders
      GULP.src(PATHS.inputmask_extensions)
        .pipe( $.concat('jquery.inputmask-extensions.js') )
        .pipe( GULP.dest(DIST_DEMO_DEV + '/plugins/input-mask') )
        .pipe( GULP.dest(DIST_ADMIN_DEV + '/plugins/input-mask') ),
        
      // Save jquery.inputmask phone code files to development destination folders
      GULP.src(['src/assets/plugins/input-mask/phone-codes/**/*'])
        .pipe( GULP.dest(DIST_DEMO_DEV + '/plugins/input-mask/phone-codes') )
        .pipe( GULP.dest(DIST_ADMIN_DEV + '/plugins/input-mask/phone-codes') )
    ); 
  } else {
  	
    // PROCESS PLUGINS FOR PRODUCTION RUNS (WE END UP WITH ONLY SPECIFIC PLUGINS IN RETVAL VARIABLE)
    retval = STREAM.concat(

      // Minify and save select2 plugin js files excluding plugin localisation js files to production destination folders
  	  GULP.src(['src/assets/plugins/select2/**/*.js', '!src/assets/plugins/select2/i18n/**/*.js'])
  	    .pipe( GULP.dest(DIST_ADMIN_SRC + '/plugins/select2') )
        .pipe( $.uglify({preserveComments:"license"}) )
        .pipe( $.batchReplace(CLEAN_UP) )
        .pipe( $.extname(JS_EXT) )
        .pipe( GULP.dest(DIST_ADMIN_PROD + '/plugins/select2') ),
        
       // Save Select2 plugin localisation js files to production destination folders
  	  GULP.src(['src/assets/plugins/select2/i18n/**/*.js'])
  	    .pipe( GULP.dest(DIST_ADMIN_SRC + '/plugins/select2/i18n') )
        .pipe( GULP.dest(DIST_ADMIN_PROD + '/plugins/select2/i18n') ),

      // Minify and save select2 plugin css files to production destination folders
      GULP.src(['src/assets/plugins/select2/**/*.css'])
         // Apply CSS PostProcessing Rules
        .pipe( $.postcss(CSS_PROCESS) )
        .pipe( $.autoprefixer({
          browsers: COMPATIBILITY
        }) )
         // Save to sources destination folder
        .pipe( GULP.dest(DIST_ADMIN_SRC + '/plugins/select2' ) )
         // Minify and save to production destination folder if this is a production run
        .pipe( $.cond(PRODUCTION, $.cssnano() ) )
        .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
        .pipe( $.cond(PRODUCTION, $.extname(CSS_EXT) ) )
        .pipe( GULP.dest(DIST_ADMIN_PROD + '/plugins/select2') ),
        
      // Minify and save daterangepicker plugin js files to production destination folders
  	  GULP.src(['src/assets/plugins/daterangepicker/**/*.js'])
  	    .pipe( GULP.dest(DIST_ADMIN_SRC + '/plugins/daterangepicker') )
        .pipe( $.uglify({preserveComments:"license"}) )
        .pipe( $.batchReplace(CLEAN_UP) )
        .pipe( $.extname(JS_EXT) )
        .pipe( GULP.dest(DIST_ADMIN_PROD + '/plugins/daterangepicker') ),

      // Minify and save daterangepicker plugin css files to production destination folders
  	  GULP.src(['src/assets/plugins/daterangepicker/**/*.css'])
         // Apply CSS PostProcessing Rules
        .pipe( $.postcss(CSS_PROCESS) )
        .pipe( $.autoprefixer({
          browsers: COMPATIBILITY
        }) )
         // Save to sources destination folder
        .pipe( GULP.dest(DIST_ADMIN_SRC + '/plugins/daterangepicker' ) )
         // Minify and save to production destination folder if this is a production run
        .pipe( $.cond(PRODUCTION, $.cssnano() ) )
        .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
        .pipe( $.cond(PRODUCTION, $.extname(CSS_EXT) ) )
        .pipe( GULP.dest(DIST_ADMIN_PROD + '/plugins/daterangepicker') ),
        
      // Minify and save moment plugin js files to production destination folders
  	  GULP.src(['src/assets/plugins/moment/**/*.js'])
  	    .pipe( GULP.dest(DIST_ADMIN_SRC + '/plugins/moment') )
        .pipe( $.uglify({preserveComments:"license"}) )
        .pipe( $.batchReplace(CLEAN_UP) )
        .pipe( $.extname(JS_EXT) )
        .pipe( GULP.dest(DIST_ADMIN_PROD + '/plugins/moment') ),
        
      // Minify and save gridstack plugin js files to production destination folders
      GULP.src(['src/assets/plugins/gridstack/**/*.js'])
        .pipe( $.cond(!PRODUCTION, GULP.dest(DIST_DEMO_DEV + '/plugins/gridstack') ) )
        .pipe( $.cond(!PRODUCTION, GULP.dest(DIST_ADMIN_DEV + '/plugins/gridstack') ) )
        .pipe( $.cond(PRODUCTION, GULP.dest(DIST_ADMIN_SRC + '/plugins/gridstack') ) )
        .pipe( $.cond(PRODUCTION, $.uglify({preserveComments:"license"}) ) )
        .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
        .pipe( $.cond(PRODUCTION, $.extname(JS_EXT) ) )
        .pipe( $.cond(PRODUCTION, GULP.dest(DIST_ADMIN_PROD + '/plugins/gridstack') ) ),
        
      // Minify and save gridstack plugin css files to production destination folders
  	  GULP.src(['src/assets/plugins/gridstack/**/*.css'])
         // Apply CSS PostProcessing Rules
        .pipe( $.postcss(CSS_PROCESS) )
        .pipe( $.autoprefixer({
          browsers: COMPATIBILITY
        }) )
         // Save to sources destination folder
        .pipe( GULP.dest(DIST_ADMIN_SRC + '/plugins/gridstack' ) )
         // Minify and save to production destination folder if this is a production run
        .pipe( $.cond(PRODUCTION, $.cssnano() ) )
        .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
        .pipe( $.cond(PRODUCTION, $.extname(CSS_EXT) ) )
        .pipe( GULP.dest(DIST_ADMIN_PROD + '/plugins/gridstack') )
           
    ); 
  }
  
  // PROCESS FLOT PLUGIN FOR BOTH PRODUCTION AND DEVELOPMENT RUNS & ADD TO RETVAL VERIABLE
  retval = retval + STREAM.concat(
  
    // Main Flot JS File
    GULP.src(['src/assets/plugins/flot/jquery.flot.js'])
    
      // Save to development destination folders
      .pipe( $.cond(!PRODUCTION, GULP.dest(DIST_DEMO_DEV + '/plugins/flot') ) )
      .pipe( $.cond(!PRODUCTION, GULP.dest(DIST_ADMIN_DEV + '/plugins/flot') ) )
      
      // Save to production "sources" destination folders
      .pipe( $.cond(PRODUCTION, GULP.dest(DIST_ADMIN_SRC + '/plugins/flot') ) )
      
      // Minify and save to production destination folders
      .pipe( $.cond(PRODUCTION, $.uglify({preserveComments:"license"}) ) )
      .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
      .pipe( $.cond(PRODUCTION, $.extname(JS_EXT) ) )
      .pipe( $.cond(PRODUCTION, GULP.dest(DIST_ADMIN_PROD + '/plugins/flot') ) ),
      
    // Flot Plugin Extensions
    GULP.src(PATHS.flot_plugins)
    
      // Concatenate into a single file
      .pipe( $.concat('jquery.flot-plugins.js') )
    
      // Save to development destination folders
      .pipe( $.cond(!PRODUCTION, GULP.dest(DIST_DEMO_DEV + '/plugins/flot') ) )
      .pipe( $.cond(!PRODUCTION, GULP.dest(DIST_ADMIN_DEV + '/plugins/flot') ) )
      
      // Save to production "sources" destination folders
      .pipe( $.cond(PRODUCTION, GULP.dest(DIST_ADMIN_SRC + '/plugins/flot') ) )
      
      // Minify and save to production destination folders
      .pipe( $.cond(PRODUCTION, $.uglify({preserveComments:"license"}) ) )
      .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
      .pipe( $.cond(PRODUCTION, $.extname(JS_EXT) ) )
      .pipe( $.cond(PRODUCTION, GULP.dest(DIST_ADMIN_PROD + '/plugins/flot') ) )
      
  ); 
  
  return retval;
});

// Create Javascript Files (After Processing Plugin Files)
GULP.task('javascript', ['plugins'], function() {

  var admin_dir = PRODUCTION ? DIST_ADMIN_SRC + '/javascript' : DIST_ADMIN_DEV + '/javascript';
  var catalog_dir = PRODUCTION ? DIST_CATALOG_SRC + '/jscript' : DIST_CATALOG_DEV + '/jscript';
  
  return STREAM.concat(
  
    // ZEN CART CATALOG JS FILES 
    GULP.src(['src/assets/zc_catalog/javascript/**/*.js'])
      // Save to development or sources folders depending on whether this is a production run or not
      .pipe( GULP.dest(catalog_dir) )
      // Minify and save to production destination folders if this is a production run
      .pipe( $.cond(PRODUCTION, $.uglify({preserveComments:"license"}) ) )
      .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
      .pipe( $.cond(PRODUCTION, $.extname('.min.js') ) )
      .pipe( $.cond(PRODUCTION, GULP.dest(DIST_CATALOG_PROD + '/jscript') ) ),
      
    // ZEN CART ADMIN JS FILES 
    GULP.src(['src/assets/zc_admin/javascript/**/*.js'])
      // Save to development or sources folders depending on whether this is a production run or not
      .pipe( GULP.dest(admin_dir) )
      // Minify and save to production destination folders if this is a production run
      .pipe( $.cond(PRODUCTION, $.uglify({preserveComments:"license"}) ) )
      .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
      .pipe( $.cond(PRODUCTION, $.extname('.min.js') ) )
      .pipe( $.cond(PRODUCTION, GULP.dest(DIST_ADMIN_PROD + '/javascript') ) ),
      
    // ADMINLTE DEMO JS FILES 
    GULP.src(PATHS.adminlte_demo_js)
      // Save to demo folder if this is not a production run 
      .pipe( $.cond(!PRODUCTION, GULP.dest(DIST_DEMO_DEV + '/javascript') )),
      
    // BOOTSTRAP JS FILE
    GULP.src(['src/components/bootstrap/dist/js/bootstrap.js'])
      // Save to development or sources folders depending on whether this is a production run or not
      .pipe( GULP.dest(admin_dir) )
      .pipe( GULP.dest(catalog_dir) )
      // Save to demo folder if this is not a production run 
      .pipe( $.cond(!PRODUCTION, GULP.dest(DIST_DEMO_DEV + '/javascript') ) )
      // Minify and save to production destination folders if this is a production run
      .pipe( $.cond(PRODUCTION, $.uglify({preserveComments:"license"}) ) )
      .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
      .pipe( $.cond(PRODUCTION, $.extname('.min.js') ) )
      .pipe( $.cond(PRODUCTION, GULP.dest(DIST_CATALOG_PROD + '/jscript') ) )
      .pipe( $.cond(PRODUCTION, GULP.dest(DIST_ADMIN_PROD + '/javascript') ) ),
      
    // AdminLTE JS File 
    GULP.src(['src/AdminLTE/assets/js/app.js'])
      // Change name from app.js
      .pipe( $.rename('AdminLTE.js') )
      // Save to development or sources folders depending on whether this is a production run or not
      .pipe( GULP.dest(admin_dir) )
      // Save to demo folder if this is not a production run 
      .pipe( $.cond(!PRODUCTION, GULP.dest(DIST_DEMO_DEV + '/javascript') ) )
      // Minify and save to production destination folders if this is a production run
      .pipe( $.cond(PRODUCTION, $.uglify({preserveComments:"license"}) ) )
      .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
      .pipe( $.cond(PRODUCTION, $.extname('.min.js') ) )
      .pipe( $.cond(PRODUCTION, GULP.dest(DIST_ADMIN_PROD + '/javascript') ) ),
      
    // JQUERY FILE 
    GULP.src(['src/components/jquery/dist/jquery.js'])
      // Save to development or sources folders depending on whether this is a production run or not
      .pipe( GULP.dest(admin_dir) )
      .pipe( GULP.dest(catalog_dir) )
      // Save to demo folder if this is not a production run 
      .pipe( $.cond(!PRODUCTION, GULP.dest(DIST_DEMO_DEV + '/javascript') ) )
      // Minify and save to production destination folders if this is a production run
      .pipe( $.cond(PRODUCTION, $.uglify({preserveComments:"license"}) ) )
      .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
      .pipe( $.cond(PRODUCTION, $.extname('.min.js') ) )
      .pipe( $.cond(PRODUCTION, GULP.dest(DIST_CATALOG_PROD + '/jscript') ) )
      .pipe( $.cond(PRODUCTION, GULP.dest(DIST_ADMIN_PROD + '/javascript') ) ),
      
    // JQUERY-UI FILE 
    GULP.src(['src/components/jquery-ui/jquery-ui.js'])
      // Append functions to resolve conflicts with Bootstrap buttons and tooltips
      .pipe( $.injectString.append("$.widget.bridge('uibutton', $.ui.button);$.widget.bridge('uitooltip', $.ui.tooltip);") ) 
      // Save to development or sources folders depending on whether this is a production run or not
      .pipe( GULP.dest(admin_dir) )
      // Save to demo folder if this is not a production run 
      .pipe( $.cond(!PRODUCTION, GULP.dest(DIST_DEMO_DEV + '/javascript') ) )
      // Minify and save to production destination folders if this is a production run
      .pipe( $.cond(PRODUCTION, $.uglify({preserveComments:"license"}) ) )
      .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
      .pipe( $.cond(PRODUCTION, $.extname('.min.js') ) )
      .pipe( $.cond(PRODUCTION, GULP.dest(DIST_ADMIN_PROD + '/javascript') ) ),
      
    // JQUERY-UI LOCALISATION FILES 
    GULP.src(['src/components/jquery-ui/ui/i18n/*.js'])
      // Concatenate into a single file 
      .pipe( $.concat('jquery-ui-i18n.js') )
      // Prepend Licensing Information 
      .pipe( $.injectString.prepend("/*! jQueryUI i18n | Copyright jQuery Foundation and other contributors | MIT License */") )
      .pipe( $.cond(PRODUCTION, $.batchReplace([['*//*', '*/\n\n/*']]) ) )
      // Save to development or sources folders depending on whether this is a production run or not
      .pipe( GULP.dest(admin_dir) )
      // Minify and save to production destination folders if this is a production run
      .pipe( $.cond(PRODUCTION, $.uglify({preserveComments:"license"}) ) )
      .pipe( $.cond(PRODUCTION, $.batchReplace(CLEAN_UP) ) )
      .pipe( $.cond(PRODUCTION, $.extname('.min.js') ) )
      .pipe( $.cond(PRODUCTION, GULP.dest(DIST_ADMIN_PROD + '/javascript') ) )
      
  ); 
});

/*******************************
  ****************************
  * 08: PROCESS IMAGE FILES
  ****************************
********************************/
// Copy image files to the "zencart" folder
GULP.task('images', function() {
  var retval;
    retval = STREAM.concat(
      GULP.src(['src/assets/zc_admin/images/**/*'])
        .pipe( $.cond(PRODUCTION, GULP.dest(DIST_ADMIN_PROD + '/images') ) )
        .pipe( $.cond(!PRODUCTION, GULP.dest(DIST_ADMIN_DEV + '/images') ) ),
      GULP.src(['src/assets/zc_catalog/images/**/*'])
        .pipe( $.cond(PRODUCTION, GULP.dest(DIST_CATALOG_PROD + '/images') ) )
        .pipe( $.cond(!PRODUCTION, GULP.dest(DIST_CATALOG_DEV + '/images') ) )
    );
  if (!PRODUCTION) {  
    retval = retval + GULP.src(['src/AdminLTE/assets/img/**/*'])
  	  .pipe( GULP.dest(DIST_DEMO_DEV + '/images') );
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

// Copy Zen Cart assets to "zencart" folder
// Skips the "images", "javascript", and "scss" folders, which are parsed separately
GULP.task('copy:gen', function() {
  var dev_destination = [];
  if (PRODUCTION) {
    dev_destination.push(
      GULP.dest(DIST_ADMIN_PROD), 
      GULP.dest(DIST_CATALOG_PROD)
    );
  } else {
    dev_destination.push(
      GULP.dest(DIST_ADMIN_DEV), 
      GULP.dest(DIST_CATALOG_DEV)
    );
  }
  
  return GULP.src(PATHS.assets)
    .pipe( $.multistream.apply(undefined, dev_destination) );
});

// Copy font files to relevant folders
GULP.task('copy:font', function() {
  var destinations = [];
  if (PRODUCTION) {
    destinations.push(
      GULP.dest(DIST_ADMIN_PROD + '/fonts'), 
      GULP.dest(DIST_CATALOG_PROD + '/fonts')
    );
  } else {
    destinations.push(
      GULP.dest(DIST_DEMO_DEV + '/fonts'), 
      GULP.dest(DIST_ADMIN_DEV + '/fonts'), 
      GULP.dest(DIST_CATALOG_DEV + '/fonts')
    );
  }
	
  return GULP.src(['src/components/fonticons/**/fonts/**/*'])
    .pipe( $.flatten() )
    .pipe( $.multistream.apply(undefined, destinations) );
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
  GULP.watch(['src/assets/{zc_admin,zc_catalog}/scss/**/*.scss'], ['stylesheet', BROWSER.reload]);  
  GULP.watch(['src/assets/{zc_admin,zc_catalog}/javascript/**/*.js'], ['javascript', BROWSER.reload]);
  GULP.watch(['src/assets/plugins/**/*'], ['plugins', BROWSER.reload]);
  GULP.watch(['src/assets/{zc_admin,zc_catalog}/images/**/*'], ['images', BROWSER.reload]);
});