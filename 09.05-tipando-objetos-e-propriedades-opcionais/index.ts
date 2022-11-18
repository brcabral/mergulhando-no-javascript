type Person = {
    name: string
    age: number
    contacts?: string[]
    isAlive: boolean
}

const person1: Person = {
    name: 'Lucas',
    age: 22,
    isAlive: true,
    contacts: [
        'lucas.pereira@email.com'
    ]
}

const person2: Person = {
    name: 'João',
    age: 43,
    isAlive: true
}
