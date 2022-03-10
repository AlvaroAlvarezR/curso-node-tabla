const fs = require('fs');

// const crearArchivo = (base = 5) => {
//     console.clear();
//     console.log('====================');
//     console.log(`    Tabla del ${base}     `);
//     console.log('====================');
//     let salida = '';
//     for (let index = 1; index <= 10; index++) {
//         salida += `${base} x ${index} = ${base*index}\n`;
//     }
//     console.log(salida);
//     fs.writeFile(`tabla-${base}.txt`, salida, (error) => {
//         if (error) throw error;
//         console.log(`Tabla ${base} creada`)
//     })
// }
// const crearArchivo = (base = 5) => {
//     return new Promise((resolve, reject) => {
//         console.clear();
//         console.log('====================');
//         console.log(`    Tabla del ${base}     `);
//         console.log('====================');
//         let salida = '';
//         for (let index = 1; index <= 10; index++) {
//             salida += `${base} x ${index} = ${base*index}\n`;
//         }
//         console.log(salida);
//         fs.writeFile(`tabla-${base}.txt`, salida, (error) => {
//             if (error) reject(error);
//             resolve(`Tabla ${base} creada`)
//         })
//     })
// }

const crearArchivo = async(base = 5, listar = true, maximo = 10) => {
    try {
        let salida = '';
        let consola = '';
        for (let index = 1; index <= maximo; index++) {
            salida += `${base} x ${index} = ${base*index}\n`;
            consola += `${base}`.underline.red + ` x ${index} = ${base*index}\n`;
        }
        if (listar) {
            console.log('===================='.blue);
            console.log('    Tabla del ' + `${base}`.underline.red + '    ');
            console.log('===================='.blue);
            console.log(consola);   
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}