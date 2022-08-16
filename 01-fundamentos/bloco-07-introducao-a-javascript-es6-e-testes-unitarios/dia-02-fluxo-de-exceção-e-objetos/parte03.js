const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   parte 1
  const newKey = (obj, key, value) => {
    obj[key] = value
  }
  newKey(lesson2, 'turno', 'noite')
  console.log(lesson2);
console.log('************************************************');
  // parte 2
const KeysObject = obj => Object.keys(obj);

console.log(KeysObject(lesson1));
console.log('************************************************');

// parte 3
const lengthObject = obj => Object.keys(obj).length;

console.log(lengthObject(lesson1));
console.log('************************************************');

// parte 4 
const valuesObejtct = obj => Object.values(obj);
console.log(valuesObejtct(lesson1));
console.log('************************************************');

// parte 5 
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);
console.log('************************************************');

// parte 6
const numberOfStudents = (obj) => {
    let total = 0;

    const allKeys = Object.keys(obj);

    for (key in allKeys) {
        total += obj[allKeys[key]].numeroEstudantes
    }
    return total;
}
console.log(numberOfStudents(allLessons));

console.log('************************************************');

// parte 7

const getValueByNumber = (obj, number) =>  Object.values(obj)[number];

console.log(getValueByNumber(lesson1, 0));

console.log('************************************************');

// parte 8
const verifyPair = (obj, key, val) => {
    let array = Object.entries(obj);
    let test = false;
    for (let ent in array) {
        if (array[ent][0] === key && array[ent][1] === val) {
            test = true;
        }
    }
    return test;
}
console.log(verifyPair(lesson2,'professor','Carlos'));