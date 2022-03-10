const {base, listar, maximo} = require('yargs')
                        .option('b', {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Base de la tabla de multiplicar'
                        })
                        .option('m', {
                            alias: 'maximo',
                            type: 'number',
                            demandOption: false,
                            default: 10,
                            describe: 'Múltiplo de la base'
                        })
                        .option('l', {
                            alias: 'listar',
                            type: 'boolean',
                            demandOption: false,
                            default: true,
                            describe: 'Muestra la tabla en consola'
                        })
                        .check((argv, options) => {
                            if (isNaN(argv.b)) throw 'La base tiene que ser un numero';
                            return true;
                        }) 
                        .argv;
module.exports = {
    base,
    listar,
    maximo
}