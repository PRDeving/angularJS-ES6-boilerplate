const gulp = require('gulp');
const argv = require('yargs').argv;
const html2js = require('gulp-html-to-js');
const replace = require('gulp-replace');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const ngAnnotate = require('gulp-ng-annotate');
const babel = require('gulp-babel');
const bulkSassImport = require('gulp-sass-bulk-import');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const webserver = require('gulp-webserver');

// Enviroment-dependent configuration
const config = require('./enviroments.json');
const env = (() => {
  const opts = Object.keys(argv);
  for (var i = 0; i < opts.length; i++)
    if (config.hasOwnProperty(opts[i])) return config[opts[i]];
  return config[Object.keys(config)[0]];
})();
console.log('Applies configuration:', env);

// Paths configuration
const SRC_PATH = 'src';
const MOCK_PATH = 'mock';
const ASSETS_PATH = `${SRC_PATH}/assets`;
const STYLES_PATH = `${SRC_PATH}/styles/main.sass`;
const DEPS_PATH = [
  // ES6
  'node_modules/systemjs/dist/system.js',
  'node_modules/babel-polyfill/dist/babel-polyfill.min.js',
  // Angular
  'node_modules/angular/angular.js',
  'node_modules/angular-ui-router/release/angular-ui-router.min.js',
  'node_modules/angular-messages/angular-messages.min.js',
  'node_modules/angular-cookies/angular-cookies.min.js'
];
const DIST_PATH = 'dist';

gulp.task('vendors', () => {
  gulp.src(DEPS_PATH)
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest(`${DIST_PATH}`));
});

gulp.task('mock', () => {
  gulp.src(MOCK_PATH)
      .pipe(webserver({
        port: 5390
      }));
});

gulp.task('eslint', () => {
  return gulp.src(`${SRC_PATH}/**/*.js`)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

gulp.task('js', ['eslint'], () => {
  gulp.src(`${SRC_PATH}/**/*.js`)
      // .pipe(uglify())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(ngAnnotate())

      .pipe(replace('__ENV_HOST__', env.host))
      .pipe(replace('__ENV_PORT__', env.port))
      .pipe(replace('.template.html', '.template.html.js'))
    
      .pipe(gulp.dest(`${DIST_PATH}`));
});

gulp.task('styles', () => {
  gulp.src(STYLES_PATH)
      .pipe(bulkSassImport())
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(`${DIST_PATH}/css`));
});

gulp.task('assets', () => {
  gulp.src(`${ASSETS_PATH}/**/*`)
      .pipe(gulp.dest(`${DIST_PATH}/assets`));
});

gulp.task('build', ['vendors', 'js', 'assets', 'styles'], () => {
  gulp.src(`${SRC_PATH}/index.html`)
      .pipe(gulp.dest(DIST_PATH));
  gulp.src([`${SRC_PATH}/**/*.html`, `!${SRC_PATH}/index.html`])
      .pipe(html2js())
      .pipe(gulp.dest(DIST_PATH));
});

gulp.task('serve', () => {
  gulp.src(DIST_PATH)
      .pipe(webserver({
        livereload: true,
        open: true
      }));
});
