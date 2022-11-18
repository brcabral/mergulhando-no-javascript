// union -> o cpf pode ser do tipo string ou number
type Cpf = string | number

function findPerson(cpf: Cpf) {
    if (typeof cpf === 'string') {
        return cpf.toUpperCase()
    }

    return cpf.toFixed(2)
}

type Animal = {sex: 'male' | 'female'}
type Human = {hungry: boolean}

// intersection -> Person é do tipo Animal e Human
type Person = Animal & Human

function setPersonStatus(person: Person) {
    person.hungry = true;
    person.sex = "female"
}
