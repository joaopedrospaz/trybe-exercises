// Parte de Variáveis
const myName = "João Pedro";
const birthCity = "Cruz das Almas";
let birthYear = 1999;

birthYear = 2030;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

//  Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);
patientId = '50';
console.log(typeof patientId);

const base = 5;
let height = 8;
const area = base * height;
console.log(area);

// Condições If e Else
const nota = 90;

if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
}
else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
}
else {
    console.log("Você foi reprovada(o)")
}

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;



