const fs = require('fs');
const colors = require('colors');
const {base, listar, maximo} = require('./config/yargs');
const {crearArchivo} = require('./helpers/multiplicador');
console.clear();
// const [,,arg3='base=5'] = process.argv;
// const [,base] = arg3.split('=');

crearArchivo(base, listar, maximo).then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'));