/**
 * Em javascript todas as funções retorna undefined ao menos que seja declarado um retorno,
 *   usando a palavra chave return
 */

function greet() {
    console.log(this)
}

const me = {
    greet() {
        console.log(this)
    }
}

function getRemaingYearsToMajority(age) {
    return 18 - age
}

const remainYears = getRemaingYearsToMajority(15)
console.log(remainYears)
