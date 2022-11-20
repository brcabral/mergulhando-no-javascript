type tAnimal = {
    sex: 'male' | 'female'
    hungry: boolean
    age: number
}

type tMammal = tAnimal & {
    weaned: boolean
}

const t_animal: tMammal = {
    sex: "female",
    hungry: false,
    weaned: true,
    age: 11
}


type tGreet = (name: string) => string

const t_greet: tGreet = name => 'Hello, ' + name
