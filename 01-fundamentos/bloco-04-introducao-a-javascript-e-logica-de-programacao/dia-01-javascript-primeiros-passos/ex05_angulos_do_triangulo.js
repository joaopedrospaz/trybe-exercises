const anguloA = 100;
const anguloB = -45;
const anguloC = 35;

const somaDosAngulos = anguloA + anguloB + anguloC;
const verificaAngulos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (verificaAngulos) {
    if (somaDosAngulos == 180) {
        console.log(true)
    }
    else {
        console.log(false);
    }
}
else {
    console.log('Ângulo inválido');
}