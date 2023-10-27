const fs = require('fs/promises');

const leerArchivo = async () => {
    const dataLeida = await fs.readFile('./saludo-clase.txt', 'utf-8');
    console.log(dataLeida)
    return dataLeida;
}

leerArchivo()