// ** Tipagem Fraca **

let exemplo = "qualquer coisa"
console.log(exemplo)
console.log(typeof exemplo) //imprime o tipo que será a variável exemplo

// ** Number

const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

let n1 = 9.8888
let n2 = 15.3333

const total = (n1*peso1) + (n2*peso2)
const media = total/ (peso1 + peso2)

console.log(media.toFixed(3))

let aux = media.toString()

console.log(typeof aux)

//* String

const testeString = "Gabrielle"

console.log(testeString.charAt(5)) //imprime a letra que estra na posição 5 da variável citada
console.log(testeString.charCodeAt(5)) //imprime o valor da letra na tabela ASCCI

console.log(testeString.substring(2)) //imprime uma substring a partir da posição2

console.log("UFLA " .concat(testeString) .concat(" AMOR m")) //Concatena as strings

console.log(testeString.replace("G","F")) //Substitui G por F

console.log('Gabrielle, Julia, Marluce'.split(","))//Converte em um array


//* Boolean

console.log(!!3) //verdadeiro
console.log(!3) //falso

