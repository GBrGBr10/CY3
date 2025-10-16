//Arrow Function

//Exercício 1

const dobro = (n) => {
    return n*2;
};

console.log(dobro(363));



//Exercício 2

const maior = (x, y) => {
    return x > y? x : y;
};

console.log(maior(7, 5))



//Exercício 3

const nomecompleto = (nome, sobrenome) => {
    return `O sobrenome de ${nome} é ${sobrenome}`;
}

console.log(nomecompleto("Lucas", "Augusto"))



//Exercício 4

const verdadefalso = (numero) => {
    return numero >= 0;
}

console.log(verdadefalso(8))



//Exercício 5 (Área = Base * Altura )

const retangulo = (base, altura) => {
    return base*altura;
}

console.log(retangulo(6, 12))



//Exercício 6 (número °C × 9/5) + 32

const transferencia = (celsius) => {
    return celsius*9/5+32;
}

console.log(transferencia(9));



//Exercício 7

const idade = (numeroidade) => {
    return numeroidade > 18? `Maior de idade` : `Menor de idade`;
}

console.log (idade(10))



//Exercício 8

const fatorial = (n) => {
    return n > 1? n*fatorial(n-1) : 1;
}

console.log(fatorial(5))



//Exercício 9

const diferenca = (n1, n2) => {
    return n1 - n2;
}

console.log(diferenca(5,3))



//Exercício 10

const divisivel = (n) => {
    return n % 3 === 0;
}

console.log(divisivel(270000000000000000000000))




