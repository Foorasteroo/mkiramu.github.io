var gulp = require('gulp');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');
var nib = require('nib');
var bs = require('browser-sync').create();

/* ============================================= */

var paths = {
	css: "./css/**/*.styl",
	html: "./*.html",
};

/* ============================================= */

gulp.task('default', ['watch']);

/* ============================================= */

gulp.task('watch', function(){
	bs.init({
		server: './',
		open: false
	});
	gulp.watch(paths.css, ['stylus']);
	gulp.watch(paths.html).on('change', bs.reload);
});

/* ============================================= */

gulp.task('stylus', function(){
	var source = './css/src/style.styl';
	var filepath = './css/dist/';
	var filename = 'style';
	return gulp.src(source)
		.pipe(stylus({
			compress: false,
			use: [nib()]
		}))
		.pipe(rename({
			basename: filename
		}))
		.pipe(gulp.dest(filepath))
		.pipe(bs.stream())
	;
});

/* ============================================= */
