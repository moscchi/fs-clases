import { readFile } from 'fs/promises';
import { __dirname } from '../db/databaseDir.js';

const readDatabase = async () => {
    try {
        const products = await readFile(__dirname+'/database.txt', 'utf-8')
        const productsParsed = JSON.parse(products)
        return productsParsed;
    } catch (error) {
        console.log(error);
    }
}

export default readDatabase 