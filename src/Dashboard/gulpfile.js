'use strict';

const gulp = require('gulp'),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    babel = require("gulp-babel");

const paths = {
    webroot: "./wwwroot/",
    scriptsroot: "./Scripts/"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.srcJs = [paths.scriptsroot + "**/*.js", paths.scriptsroot + "**/*.jsx"];
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.concatCssDest = paths.webroot + "css/site.min.css";

gulp.task("clean:js", (cb) => {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", (cb) => {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", () => {
    gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", () => {
    gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task('build', () => {
    return gulp.src(paths.srcJs)
        .pipe(babel())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(paths.webroot + "js"));
});

gulp.task('default', ['clean'], () => {
    gulp.start('build');
});

gulp.task('watch', () => {
    gulp.watch([paths.srcJs], ['build']);
});