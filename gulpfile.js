const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("nik/**/*.scss").pipe(sass()).pipe(dest("styles"));
}

function watchTask() {
  watch(["nik/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
