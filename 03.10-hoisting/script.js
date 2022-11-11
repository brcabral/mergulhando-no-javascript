const result1 = sum1(1, 2)

function sum1(a = 1, b = 5) {
    return a + b
}


// const result2 = sum2(1, 2)

/* 
Uma arrow function deve ser declarada antes da sua chamada,
caso contrário lançará um erro (ReferenceError)
*/

// const sum2 = (a = 1, b = 5) => a + b

console.log('result1: ' + result1)
//console.log('result2: ' + result2)
