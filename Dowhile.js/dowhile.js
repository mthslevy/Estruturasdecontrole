function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opção = 0

do {
    opção = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opção} `)
} while (opção != -1)

console.log('Até a próxima')
