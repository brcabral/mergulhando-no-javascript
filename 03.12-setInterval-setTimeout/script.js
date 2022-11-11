// setTimeout -> executa apenas uma vez depois de x tempo.
setTimeout(() => {
    console.log('executou timeout')
}, 5000);

// setInterval -> executa n vezes a cada x tempo.
const interval = setInterval(() => {
    console.log('executou interval')
}, 3000);


// Depois de 15 segundos, limpar o interval (interromper a execução)
setTimeout(() => {
    clearInterval(interval)
}, 15000);
