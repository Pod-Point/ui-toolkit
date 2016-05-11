const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

const config = require('./config');

gulp.task('css', () => {
    return gulp.src(config.src.root + '/' + config.src.scss + '/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ errLogToConsole: true }))
        .pipe(postcss([
            autoprefixer({ browsers: ['last 2 versions'] }),
            cssnano()
        ]))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.dist.root + '/' + config.dist.css))
        .pipe(browserSync.stream());
});

gulp.task('js-modules', () => {
    return gulp.src(config.src.root + '/' + config.src.js + '/modules/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest(config.dist.root + '/' + config.dist.js + '/modules'))
        .pipe(browserSync.stream());
});

gulp.task('js', () => {
    return gulp.src(config.src.root + '/' + config.src.js + '/**/*.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(config.dist.root + '/' + config.dist.js))
        .pipe(browserSync.stream());
});

gulp.task('copy-fonts', () => {
    return gulp.src(config.src.root + '/' + config.src.fonts + '/**/*')
        .pipe(gulp.dest(config.dist.root + '/' + config.dist.fonts));
});

gulp.task('copy-images', () => {
    return gulp.src(config.src.root + '/' + config.src.images + '/**/*')
        .pipe(gulp.dest(config.dist.root + '/' + config.dist.images));
});

gulp.task('serve', ['default'], () => {
    return browserSync.init({
        server: { baseDir: config.dist.root },
        open: false
    });
});

gulp.task('watch', ['serve'], () => {
    gulp.watch(config.src.root + '/' + config.src.scss + '/' + '/**/*.scss', ['css']);
    gulp.watch(config.src.root + '/' + config.src.js + '/' + '/**/*.js', ['js', 'js-modules']);
    gulp.watch(config.dist.root + '/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['css', 'js', 'copy-fonts', 'copy-images']);
