const person = {
    firstName: 'Italo',
    lastName: 'Pereira',
    age: 14,
    contact: {
        foo: {
            bar: {
                email: 'italo@email.com'
            }
        }
    }
}

const { firstName, age, contact: { foo: {bar: { email } } } } = person
console.log(`firstName: ${firstName}`)
console.log(`age: ${age}`)
console.log(`email: ${email}`)

const { firstName: name } = person
console.log(`name: ${name}`)
