
let somaPond = 0
let accumPond = 0

const mediaAritmetica = (...numbers) =>{
    sum = numbers.reduce((accum, soma) => accum+soma, 0)
    return sum / numbers.length
}

const calcularPonderada = (...entries) => {
    somaNotas = entries.reduce((acumulador, { nota, peso }) => acumulador + (nota * peso), 0)

    somaPeso = entries.reduce((acumulador, { nota, peso }) => acumulador + peso, 0)

    return (somaNotas / somaPeso)
}

const calcMediana = (...numeros) => {
    const arrayOrganizado = [...numeros];
    arrayOrganizado.sort((a, b) => a - b);
    let meio = arrayOrganizado[0]
    const tamanho = arrayOrganizado.length
    const metade = Math.floor(tamanho / 2)

    if(tamanho % 2 === 0)
    {
        meio = arrayOrganizado[metade]
        meio += arrayOrganizado[metade-1]
        console.log(arrayOrganizado)
        return (meio/2)
    }
    else{
        meio = arrayOrganizado[metade]
        console.log(arrayOrganizado)
        return meio
    }

    
}

console.log(`Media é: ${mediaAritmetica(2,3,7,9,10)}`)

console.log(`Média ponderada: ${calcularPonderada(
    {nota: 9.0, peso: 3.0},
    {nota: 7, peso: 5},
    {nota: 10, peso: 2}
)}`)

console.log(`Mediana: ${calcMediana(1,2,3,7,6,4,9,10,5,13,15,17)}`)