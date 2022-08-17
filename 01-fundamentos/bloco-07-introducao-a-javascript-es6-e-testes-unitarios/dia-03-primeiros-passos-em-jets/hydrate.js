function hydrate(drink) {
  const listSplit = drink.split('')  
    let total = 0;
    for (const numbers of listSplit) {
      numbersInt = parseInt(numbers)
      if (numbersInt) {
        total += numbersInt
      }
    }
    let cup = 'copo';
    if (total > 1) {
      cup = 'copos'
    }
    return `${total} ${cup} de água`
  }
  console.log(hydrate('1 copo'));
module.exports = hydrate;