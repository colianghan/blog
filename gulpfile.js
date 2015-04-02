var gulp = require('gulp'),
	watch = require('gulp-watch'),
	less = require('gulp-less'),
	browserSync = require('browser-sync'),
	minifyCss = require('gulp-minify-css'),

	reload = browserSync.reload;


gulp.task('server',function(){
	browserSync({
		server:{
			baseDir:'./src'
		},
		open:true
	});
	//gulp.watch('src/asset/less/**/*.less',['less',reload]);
});

gulp.task('less',function(){
	gulp.src('src/asset/less/index.less')
		.pipe(less())
		.pipe(minifyCss({keepBreaks:true}))
		.pipe(gulp.dest('src/asset/css'))
});


gulp.task('default',['server'],function(){
	gulp.watch('src/asset/less/**/*.less',['less',reload]);
	gulp.watch('src/*.html',[reload]);
});