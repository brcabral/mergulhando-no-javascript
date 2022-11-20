interface Animal {
    sex: 'male' | 'female'
}

interface Human extends Animal {
    name: string
    age: number
}

const person: Human = {
    name: 'Lucas',
    age: 22,
    sex: "male"
}
