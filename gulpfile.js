const glob = require('glob');
const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const babelify = require('babelify');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');

const config = require('./config');

const browserified = (filename) => {
    return browserify(filename)
        .transform(babelify, { presets: ['es2015', 'stage-2'] })
        .bundle();
};

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
    glob(config.src.root + '/' + config.src.js + '/modules/**/*.js', {}, (er, files) => {
        files.map((file) => {
            return browserified(file)
                .pipe(source(path.basename(file)))
                .pipe(gulp.dest(config.dist.root + '/' + config.dist.js + '/modules'));
        });
    });
});

gulp.task('js', () => {
    return browserified(config.src.root + '/' + config.src.js + '/script.js')
        .pipe(source('script.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
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
    gulp.watch(config.src.root + '/' + config.src.js + '/' + '/**/*.js', ['js']);
});

gulp.task('default', ['css', 'js', 'copy-fonts', 'copy-images']);
