const person = {
    name: 'Joao',
    age: 34
}

console.log(person)
person.age = 35
console.log(person)

/**
 * Nós não podemos reatribuir um valor para a constante me
 * Porém é possível alterar as propriedades do objeto
 */


/**
 * As constantes são delimitadas por blocos
 * Dentro dos blocos nós conseguimos reatribuir um novo valor de uma constante
 *   que está fora do bloco (mas não devemos usar, pois é considerado uma má pratica de programação)
 */

const age = 21

if (age > 18)  {
    const age = 35
    const pastYears = age - 18
    console.log('pastYears: ' + pastYears, 'age: ' + age)
}

// A linha abaixo vai gerar um erro, caso for descomentada, pois o pastYears está fora do bloco if
// console.log('pastYear (fora do bloco): ' + pastYears)
