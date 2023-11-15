import { readFile } from 'fs/promises';

const readDatabase = async () => {
    try {
        const products = await readFile('/database.txt', 'utf-8')
        const productsParsed = JSON.parse(products)
        return productsParsed;
    } catch (error) {
        console.log(error);
    }
}

export default readDatabase 