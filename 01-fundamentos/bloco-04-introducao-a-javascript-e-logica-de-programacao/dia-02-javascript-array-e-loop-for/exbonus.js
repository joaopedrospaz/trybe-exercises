let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Parte 1 - ordenar crescente 
for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
        if (numbers[j] > numbers[i]) {
            let position = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = position;
        }
    }
}
console.log(numbers);

//  Parte 2 - ordenar decrescente 
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 1; i < numbers2.length; i += 1) {
    for (j = 0; j < i; j += 1) {
        if (numbers2[j] < numbers2[i]) {
            let position2 = numbers2[i];
            numbers2[i] = numbers2[j];
            numbers2[j] = position2;
        }
    }
}
console.log(numbers2);

// parte 3 - criar novo array multiplicando pelo número seguinte
let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersmult = []

for (let index = 0; index < numbers3.length; index += 1) {
    if (index < numbers3.length - 1) {
        numbers3[index] = numbers3[index] * numbers3[index + 1];
    }    
    else {
        numbers3[index] *= 2;
    }
    numbersmult.push(numbers3[index])
}
console.log(numbersmult);

