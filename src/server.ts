const prompt = require('prompt-sync')()


/*

Faça um programa que receba três notas de um aluno, calcule e mostre a média aritmética
e a mensagem constante na tabela a seguir. Aos alunos que ficaram para exame, calcule e
mostre a nota que deverão tirar para serem aprovados, considerando que a média exigida é 6,0.

*/

let nota1 = parseInt(prompt('digite a 1ª nota: '));
let nota2 = parseInt(prompt('digite a 2ª nota: '));
let nota3 = parseInt(prompt('digite a 3ª nota: '));

let media = (nota1+nota2+nota3)/3

if ((media >= 0)&&(media < 3)) {
    console.log(`Sua média foi ${media.toFixed(1)}, seu resultado é: Reprovado!`)
} else if ((media>=3)&&(media < 7)) {
    console.log(`Sua média foi ${media.toFixed(1)}, seu resultado é: Exame!`)
} else if ((media >=7)&&(media <=10)){
    console.log(`Sua média foi ${media.toFixed(1)}, seu resultado é: Aprovado!`)
}