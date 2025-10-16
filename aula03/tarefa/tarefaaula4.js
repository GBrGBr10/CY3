//Array


//Exercício 1

let cores=['verde', 'preto', 'azul escuro', 'laranja'];

console.log(cores);

//Exercício 2

console.log(cores.length);


//Exercício 3

let lista=Array(5).fill("ok")

console.log(lista);


//Exercício 4

let animal=["Cachorro", "Papagaio", "UrsoPolar"];
animal.forEach((valor, pos) => {
    return console.log(valor, pos)
})


//Exercício 5

let idadeLista=[18, 37, 62, 90];
let idadeMapeada=idadeLista.map((valor) => {
    return valor+5;
})


//Exercício 6

let idadeFiltrada=idadeLista.filter((n) => {
    return n >= 18;
})

//Console.log do 5
console.log(idadeMapeada);

//Console.log do 6
console.log(idadeFiltrada);


//Exercício 7

const frase = "JavaScript" 
let letras = Array.from(frase);

console.log(letras);


//Exercício 8

const matriz001 = Array.from({length:4}, () => {
    return Array(5).fill("O")
})

console.log(matriz001)



//Exercício 9

let letras001 =["X", "Y", "Z"];