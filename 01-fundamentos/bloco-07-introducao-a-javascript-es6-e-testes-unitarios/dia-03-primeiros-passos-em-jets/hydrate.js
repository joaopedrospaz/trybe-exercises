function hydrate(drink) {
    let amount = /\d+/g;
    let cups = drink.match(amount);
    let total = 0;
    for (const numbers of cups) {
      total += Math.abs(numbers)
    }
    if (total > 1) {
    return (total + ' copos de água')
    } else {
    return (total + ' copo de água')
    }  
  }
module.exports = hydrate;