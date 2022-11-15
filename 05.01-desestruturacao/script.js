const person = {
    name: 'Italo',
    email: 'italo@email.com',
    age: 14
}

function introduce({name, age}) {
    console.log(`Oi!, meu nome é ${name} e eu tenho ${age} anos.`)
}

introduce(person)

const fruits = ['banana', 'morango', 'manga']
const [firstFruit, secondFruit] = fruits
console.log(`firstFruit: ${firstFruit}`)
console.log(`secondFruit: ${secondFruit}`)
