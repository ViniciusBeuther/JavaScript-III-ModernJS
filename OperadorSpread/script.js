const towns = ["São Bento", "Rio Negrinho", "Joinville"]

console.log(towns)
console.log(...towns)

const townsCopy = towns // Apenas uma copia, altera o array q esta sendo copiado tambem

townsCopy.pop() // remove o ultimo elemento do array

townsCopy.push('Campo Alegre')

console.log({towns, townsCopy})

const townsClone = [...towns] //Aqui cria um novo array!

townsClone.push("Curitiba")
townsClone.push('Mafra')
console.log({towns, townsCopy, townsClone})
console.log(...townsClone[3])