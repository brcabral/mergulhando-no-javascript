interface iAnimal {
    sex: 'male' | 'female'
    hungry: boolean
    age: number
}

interface iMammal extends iAnimal {
    weaned: boolean
}

const i_animal: iMammal = {
    sex: "female",
    hungry: false,
    weaned: true,
    age: 11
}


interface iGreet {
    (name: string): string
}

const i_greet: iGreet = name => 'Hello, ' + name
