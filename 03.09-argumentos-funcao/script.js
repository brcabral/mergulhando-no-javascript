function sum1(a, b) {
    console.log(arguments)
    return arguments[0] + arguments[1]
}

const sum2 = (a = 2, b = 5) => {
    return a + b
}

console.log('Soma 1: ' + sum1(1, 3))

console.log()

console.log('Soma 2: ' + sum2(1, 3))
console.log('Soma 2: ' + sum2(1))
console.log('Soma 2: ' + sum2())
