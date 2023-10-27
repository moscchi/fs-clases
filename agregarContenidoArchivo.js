const fs = require('fs/promises')

const agregarContenidoAlArchivo = async () => {
    await fs.appendFile('./escribir-archivo.txt', '\n')
}

agregarContenidoAlArchivo()