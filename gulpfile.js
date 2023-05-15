const { src, dest} = require("gulp");
const sass = require("sass");

function css(done){
    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest("build/css"));

    done(); //Callback que avisa a gulp cuando finaliza la funcion
}

exports.css = css;