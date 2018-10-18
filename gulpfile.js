var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var frontnote = require("gulp-frontnote");
var plumber = require("gulp-plumber");
var uglify = require("gulp-uglify");
var browser = require("browser-sync");
var babel = require("gulp-babel");


gulp.task("sass", function(){
    gulp.src("sass/**/*scss")
        .pipe(plumber())
        .pipe(frontnote({
            css: '../css/style.css'
        }))
        .pipe(sass())
        .pipe(autoprefixer({
          browsers: ['last 2 versions', 'ie >= 9', 'iOS >= 7', 'Android >= 4.2']
        }))
        .pipe(gulp.dest("./css"))
        .pipe(browser.reload({stream:true}))
});

gulp.task("js", function() {
    gulp.src(["js/**/*.js","!js/min/**/*.js"])
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest("./js/min"))
        .pipe(browser.reload({stream:true}))
});


gulp.task('babel', function() {
  gulp.src('js/**/*.es6')
    .pipe(babel())
    .pipe(gulp.dest('./js'))
});

gulp.task('watch', function() {
  gulp.watch('js/**/*.es6', ['babel'])
});

gulp.task('default', ['babel', 'watch']);


gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("default",['server'], function() {
    gulp.watch(["js/**/*.js","!js/min/**/*.js"],["js"]);
    gulp.watch("sass/**/*.scss",["sass"]);
});
