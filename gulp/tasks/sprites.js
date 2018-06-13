var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename');

var config = {
    mode: {
        css: {
            sprite: 'svg/sprite.svg',
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

gulp.task('createSprite', function() {
    return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/tmp/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
    return gulp.src('./app/tmp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
})

gulp.task('copySpriteCSS', ['copySpriteGraphic'], function() {
    return gulp.src('./app/tmp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('icons', ['createSprite', 'copySpriteGraphic', 'copySpriteCSS']);