const fs = require('fs/promises')

const administrarGastos = async () => {
    let generalSpends = 0;
    const data = await fs.readFile('./spends.txt')
    const dataParsed = JSON.parse(data);
    const uniqueDays = new Set()
    dataParsed.forEach(day => uniqueDays.add(day.dia))
    Array.from(uniqueDays).forEach(day => {
        const matchedDays = dataParsed.filter(allDays => allDays.dia === day)
        let spends = 0;
        matchedDays.forEach(matchedDay => spends = spends + matchedDay.gasto)
        generalSpends += spends
        fs.appendFile('./registro-gastos.txt', `Para el dia ${day} el gasto fue de ${spends}.\n`)
    })
    fs.appendFile('./registro-gastos.txt', `Los gastos del mes fueron ${generalSpends}.`)

/*     for(let i = 0; i > 31; i++){

        await fs.appendFile('./escribir-archivo.txt', '\n')
    } */
}

administrarGastos()