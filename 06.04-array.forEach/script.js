const fruits = ['banana', 'morango', 'manga', 'abacate']

function eatAllFruits() {
    fruits.forEach((fruit, index) => {
        console.log(`huuummm, acabei de comer um(a) ${fruit}`)
        console.log(`ele(a) era o ${index + 1}º item da minha lista`)
        console.log()
    })
}

eatAllFruits();
