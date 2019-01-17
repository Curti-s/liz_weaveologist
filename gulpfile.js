var gulp = require('gulp');
var bs = require('browser-sync').create(); // create a browser-sync instance
var sass = require('gulp-sass');


gulp.task('sass', () => {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(bs.reload({stream: true})); // prompts a reload after compilation
});

gulp.task('browser-sync', () => {
    bs.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('watch',gulp.series('browser-sync'), () => {
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', bs.reload);
})