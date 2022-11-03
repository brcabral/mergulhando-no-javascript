var person = {
    name: 'Lucas',
    age: 17
}

// função pura - A função NÃO altera o objeto original
function getRemainingYearsToMajorty(person) {
    return 18 - person.age
}

// função impura - A função altera o objeto original
function increasePersonAge(person) {
    person.age = person.age + 1
}

var remainingYears = getRemainingYearsToMajorty(person)
console.log(remainingYears + ' to year(s) to age.')

// chamou o médoto impuro
increasePersonAge(person)

remainingYears = getRemainingYearsToMajorty(person)
console.log(remainingYears + ' to year(s) to age.')
