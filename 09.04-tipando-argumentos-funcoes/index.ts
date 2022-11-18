function greet(name: string, age?: number) {
    console.log(`Hello, {$name.toUpperCase()}!`);
}

greet('Chiara', 18)
greet('Julia')
