/**
Resultado no console do navegador

sum.call(this, 1, 2)
index.html:9 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
3

sum.apply(this, [1, 2])
index.html:9 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
3

 */

function sum(a, b) {
    console.log(this)
    return a + b
}

const me = {
    name: 'Jose'
}

console.log(sum.call(this, 1, 2))
console.log(sum.apply(this, [1, 2]))
