const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles(){
    return gulp.src('./src/styles/*.scss') //Funcao que recupera os arquivos.
        .pipe(sass({ outputStyle: 'compressed'})) //Compila o sass e retorna arquivos comprimidos
        .pipe(gulp.dest('./dist/css')); //Envia os arquivos gerados para o destino escolhido
}

function images(){
    return gulp.src('./src/images/**/*') //Funcao que recupera os arquivos.
        .pipe(imagemin()) //Compila o sass e retorna arquivos comprimidos
        .pipe(gulp.dest('./dist/images')); //Envia os arquivos gerados para o destino escolhido
}

exports.default = gulp.parallel(styles, images);


exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) //Coloca os arquivos que serao observados e no array as funcoes que serao executadas
}