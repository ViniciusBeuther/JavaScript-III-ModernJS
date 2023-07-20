function sum(...numbers){
    return numbers.reduce((accum,number) => accum + number, 0)
}

console.log(sum(2,3,4,6,7,8,12))