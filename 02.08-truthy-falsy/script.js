var array = [];
var value = {};

console.log(!!value);

if (array.length) {
    console.log('a condição é verdadeira')
} else {
    console.log('a condição é falsa')
}

/*
>>> Valores truthy <<<
true
{}
[]
42
"0"
"false"
new Date()
-42
12n
3.14
-3.14
Infinity
-Infinity

>>> Valores falsy <<<
false
null
undefined
0
-0
0n
NaN
""
*/