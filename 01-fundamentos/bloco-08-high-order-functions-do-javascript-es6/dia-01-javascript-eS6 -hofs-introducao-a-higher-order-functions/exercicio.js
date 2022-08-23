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

// parte 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

point = (listRight, listAnswers) => {
  if (listRight === listAnswers) {
    return 1;
  } else if (listAnswers === 'N.A') {
    return 0;
  } return -0.5;
};

const test = (right, answers, func) => {
  let total =0;
  for (let index = 0; index < right.length; index += 1) {
    total += func(right[index], answers[index]);
  }
  return total;
}
console.log(test(RIGHT_ANSWERS, STUDENT_ANSWERS, point));  

// bonus

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
dragonMax = dragon.strength;
const dragonDamage = () => Math.floor((Math.random() * (dragonMax - 15 + 1)) + 15);

warriorMin = warrior.strength;
warriorMax = warrior.strength * warrior.weaponDmg;
const warriorDamage = () => Math.floor((Math.random() * (warriorMax - warriorMin + 1)) + warriorMin);