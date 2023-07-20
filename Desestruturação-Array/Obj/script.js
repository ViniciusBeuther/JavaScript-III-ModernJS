const person = {
    name:"Vinicius",
    job:"Agroboy",
    girlfriend:"Carla <3"
}

//const name = person.name => Tradidional method
const { girlfriend } = person
const { job } = person
const { name } = person
console.log(`I love you xuxu: ${girlfriend}`)

const getName = (name) => `Your name is ${name}`
console.log(getName(name))

const sum = (a, b) => a+b
console.log(sum(5, 2)*2)

const cities = ["São Bento", "Rio Negro", "Mafra", "Rio Negrinho"]
const startingWithR = cities.filter(cities => cities[0] === 'R')
console.log(startingWithR)

const Names = ["Carlinha", "Vini", "Cassiane", "Amarildo", "Valentina"]
const filteredNames = Names.filter(Names => Names[0] === "V"|| Names[0] === "C")


const oneMoreFitler = filteredNames.filter(filteredNames => filteredNames[1] === 'a')

console.log(filteredNames)
console.log(oneMoreFitler)