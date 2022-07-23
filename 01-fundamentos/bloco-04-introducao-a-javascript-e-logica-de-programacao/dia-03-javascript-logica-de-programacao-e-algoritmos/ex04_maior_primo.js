let maiorPrimo = 0;

for (let dividendo = 2; dividendo <= 50; dividendo += 1) {
    let isPrimo = true;
    for (divisor = 2; divisor < dividendo; divisor += 1) {
        if (dividendo % divisor === 0) {
            isPrimo = false
        }
    }
    if (isPrimo) {
        maiorPrimo = dividendo
    }
}
console.log(maiorPrimo);
