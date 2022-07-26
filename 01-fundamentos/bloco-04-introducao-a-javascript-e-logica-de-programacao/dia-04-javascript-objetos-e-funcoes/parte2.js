// parte 1 -  palíndromo 
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


// parte 2 - indice do maior valor 
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

// parte 3 - indice do menor valor 
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

// parte 4 - nome de mais caracteres 
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

