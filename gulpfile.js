const gulp = require("gulp");
const webpack = require("webpack-stream");
const sass = require("gulp-sass");


gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'script.js'
            },
            watch: false,
            devtool: "source-map",
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env', "@babel/react"]
                            }
                        }
                    }
                ]
            }
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task("build-sass", () => {
    return gulp.src("./src/scss/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});


gulp.task("watch", () => {
    gulp.watch("./src/scss/**/*.scss", gulp.parallel("build-sass"));
    gulp.watch("./src/js/**/*.*", gulp.parallel("build-js"));
});

gulp.task("build", gulp.parallel("build-sass", "build-js"));

gulp.task("default", gulp.parallel("watch", "build"));
