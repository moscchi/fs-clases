const fs =require('fs/promises')

const escribirArchivo = async () => {
    await fs.writeFile('./escribir-archivo.txt', '3')
}

escribirArchivo()