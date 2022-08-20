// parte 1
const people = (name) => {
  email = name.toLowerCase().split(' ').join('_') + '@email.com';
  return {name, email}
};

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(people));

// parte 2
const check = (number, numberDrawn) => {
 return number === numberDrawn ? "Parabéns você ganhou" : "Tente novamente";
};

const result = () => Math.floor((Math.random() * 5) + 1);
console.log(check(3, result()));
