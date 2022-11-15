const fruits = ['banana', 'morango', 'manga']
const [, secondFruit] = fruits
console.log(`secondFruit: ${secondFruit}`)

console.log()

const person1 =  { name: 'Joaquim', age: 32 }
const person2 = { name: 'Jonas', age: 33 }
const person3 = { name: 'João', age: 34 }

const friends = [person1, person2, person3]
const [, { name : secondPersonName }] = friends
console.log(`second person name: ${secondPersonName}`)

console.log()

const chart = [[1, 2], [3, 4], [5, 6]]
const [, [, n]] = chart
const [, , [x, y]] = chart

console.log(`n: ${n}`)
console.log(`x: ${x}`)
console.log(`y: ${y}`)
