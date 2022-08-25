const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) => acc + curr.split('').reduce((acc2, curr2) => curr2 === 'a' || curr2 === 'A' ? acc2 += curr2 : acc2,'') ,'').length
 
}
console.log(containsA());