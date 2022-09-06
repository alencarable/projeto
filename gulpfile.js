// Adicionar a automação do nosso código para fazer a gestão dos pacotes

// Vamos importar o Gulp
const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

// Vamos entender um conceito básico
function tarefasCSS(callback) {
    return gulp.src('./vendor/**/*.css') //vai pegar qualquer arquivo .css que estiver dentro da pasta vendor
                .pipe(concat('libs.css'))// vai unificar todos os arquivos que estão na pasta vendor como lib
                .pipe(cssmin()) //vai minificar os arquivos
                .pipe(rename({ suffix: '.min'})) //retornará libs.min.css
                .pipe(gulp.dest('./dist/css')) //criando um diretório para destinar os arquivos minificados
}

// Vamos fazer o mesmo com JS
function tarefasJS(){
    return gulp.src('./vendor/**/*.js')
            .pipe(concat('libs.js'))
            .pipe(uglify())
            .pipe(rename({ suffix: '.min'})) //libs.min.js
            .pipe(gulp.dest('./dist/js'))
}

// Para que a tarefa seja entendida, tem que ter um export

exports.styles = tarefasCSS
exports.scripts = tarefasJS