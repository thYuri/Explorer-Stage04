/* 
Capturar 2 números e fazer as operações matemáticas
de soma, subtração, multiplicação, divisão e resto de divisão.

E para cada operação, mostrar um alerta com o resultado.

Acrescentar o Exercicio 01 EXPLORER: 
1. Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
2. Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let firstNumber = prompt ('Digite aqui o primeiro número')  
let secondNumber = prompt ('Digite aqui o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const mult = firstNumber * secondNumber
const div = firstNumber / secondNumber
const rem = firstNumber % secondNumber

alert ('A soma dos números é de: ' + sum)
alert ('A subtração é de: ' + sub)
alert ('A multiplicação é de: ' + mult)
alert ('A divisão é de: ' + div)
alert ('O resto da divsão é de: ' + rem)

const EvenOrOdd = sum % 2 === 0 ? 'par' : 'ímpar'
alert('A soma dos números é ' + EvenOrOdd)

const checkNumbers = firstNumber === secondNumber ? 'iguais' : 'diferentes'
alert('Os números são ' + checkNumbers)

