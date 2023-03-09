/* 
    2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
    escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado 
    pertence ou não a sequência.
*/

function fibonacciSequence(number) {
    let sequence = [0, 1];

    while (sequence.at(-1) < number) {
        sequence.push(sequence.at(-1) + sequence.at(-2));
    }

    return sequence.includes(number) ? `O número ${number} pertence a sequência de Fibonacci` : `O número ${number} não não pertence a sequencia de Fibonacci`;
};

console.log(fibonacciSequence(29));
