function createUser(name, age, email) {
    return {
        name,
        age,
        constact: { email }
    }
}

const {name} = createUser('Lucas', 32, 'lucas@mail.com')
console.log(`name: ${name}`)
