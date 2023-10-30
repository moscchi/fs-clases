const fs = require('fs/promises')

const readDatabase = async () => {
    const products = await fs.readFile('./db/database.txt', 'utf-8')
    const productsParsed = JSON.parse(products)
    return productsParsed;
}

module.exports = { readDatabase }