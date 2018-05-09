var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();

gulp.task('default', function() {
    console.log("Holiday cvc");
});

gulp.task('html', function() {
    console.log("Imagine something useful" );
});
gulp.task('styles', function() {
   return gulp.src('./app/assets/styles/style.css')
   .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/tmp/styles'))
});

gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function() {
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['styles'] ,function() {
  return  gulp.src('./app/tmp/styles/style.css')
    .pipe(browserSync.stream());
})