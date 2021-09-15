const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base, listar, hasta) => {
    try {
        let salida = '';
        let consola = '';
    
        console.clear();
        
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} X ${index} = ${ base * index }\n`;
            consola += `${base} ${'X'.america} ${index} ${'='.random} ${ base * index }\n`;
        }
        
        if ( listar ) {
            console.log('==================================')
            console.log('          Tabla del'.rainbow, base)
            console.log('==================================')
            console.log(consola)
        } 

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (error) {
        throw colors.error(error);
    }
}

module.exports = {
    crearArchivo
}