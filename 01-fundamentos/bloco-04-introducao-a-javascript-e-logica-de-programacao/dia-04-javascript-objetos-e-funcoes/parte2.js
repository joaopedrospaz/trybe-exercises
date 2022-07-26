// parte 1 -  verifica se a palavra é um palíndromo. 
function verificaPalindrome(word) {
    if (word === word.split('').reverse().join('')) {
        return true;
    }
    else {
        return false;
    }
}
console.log(verificaPalindrome('tenet'));
console.log('*************************');


// parte 2 - indice do maior valor. 
function higherNumber(numbers) {
    let higher = numbers[0];
    let indice = 0;
    for (position in numbers) {
        if (numbers[position] > higher) {
            higher = numbers[position];
            indice = position;
        }
    }
    return indice;

}
console.log(higherNumber([2, 3, 6, 7, 10, 1]));
console.log('*************************');

// parte 3 - indice do menor valor.
function smallestnumber(numbers2) {
    let smaller = numbers2[0];
    let indice = 0;
    for (position in numbers2) {
        if (numbers2[position] < smaller) {
            smaller = numbers2[position];
            indice = position;
        }
    }
    return position;
}

console.log(smallestnumber([2, 4, 6, 7, 10, 0, -3]));
console.log('*************************');

// parte 4 - nome de mais caracteres.
function biggestName(names) {
    let higher = names[0].length;
    let bigger = names[0];

    for (const indice in names) {
        if (names[indice].length > higher) {
            higher = names[indice].length;
            bigger = names[indice]
        }
    }
    return bigger;
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log('*************************');

// parte 5 - número que mais se repete.
function maisRepetido(numeros) {
    let num = 0;
    let repeticoes = 0;
    for (index in numeros) {
        let contagem = 0;
        for (indice in numeros) {
            if (numeros[index] === numeros[indice]) {
                contagem += 1;
                if (contagem > repeticoes) {
                    repeticoes = contagem;
                    num = numeros[index];
                }
            }
        }
    }
    return num;
}
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
console.log('*************************');

// parte 6 - soma todos os núemros até n.
function sum(n) {
    let total = 0;
    for (let index = 1; index <= n; index += 1) {
        total += index;
    }
    return total
}
console.log(sum(5));
console.log('*************************');

// parte 7 - verificar se uma palavra é o final da outra.
function verificaFimPalavra(word1, word2) {
    let plavra = word1.split('').reverse().join('');
    let fimDaPalavra = word2.split('').reverse().join('');
    let resultado = true;
    for (let index = 0; index < word2.length; index += 1) {
        if (plavra[index] !== fimDaPalavra[index]) {
            resultado = false;
            break
        }
    }
    return resultado;
}
console.log(verificaFimPalavra('trybe', 'be'));
console.log('*************************');
