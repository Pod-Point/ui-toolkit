const glob = require('glob');
const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

const config = require('./config');

gulp.task('css', () => {
    return gulp.src(config.src.root + '/' + config.src.scss + '/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            errLogToConsole: true
        }))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.dist.root + '/' + config.dist.css))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('js-modules', () => {
    return gulp.src(config.src.root + '/' + config.src.js + '/modules/**/*.js')
        .pipe(babel({ presets: ['es2015', 'stage-2'], ignore: /node_modules/ }))
        .pipe(gulp.dest(config.dist.root + '/' + config.dist.js + '/modules'));
});

gulp.task('js', () => {
    return gulp.src(config.src.root + '/' + config.src.js + '/**/*.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(config.dist.root + '/' + config.dist.js))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('copy-fonts', () => {
    return gulp.src(config.src.root + '/' + config.src.fonts + '/**/*')
        .pipe(gulp.dest(config.dist.root + '/' + config.dist.fonts));
});

gulp.task('copy-images', () => {
    return gulp.src(config.src.root + '/' + config.src.images + '/**/*')
        .pipe(gulp.dest(config.dist.root + '/' + config.dist.images));
});

gulp.task('watch', () => {
    browserSync({
        server: {
            baseDir: config.dist.root
        },
        open: false
    });

    gulp.watch(config.src.root + '/' + config.src.scss + '/' + '/**/*.scss', ['css']);
    gulp.watch(config.src.root + '/' + config.src.js + '/' + '/**/*.js', ['js', 'js-modules']);
});

gulp.task('default', ['css', 'js', 'copy-fonts', 'copy-images']);
