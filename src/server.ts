const prompt = require('prompt-sync')()


//impar ou par

let z = parseInt(prompt('Digite um número: '));

if (z==0) {
    console.log('o número 0 é nulo')
} else if (z%2 != 0) {
    console.log('o número',z,'é impar')
} else  {
    console.log('o número é par')
}