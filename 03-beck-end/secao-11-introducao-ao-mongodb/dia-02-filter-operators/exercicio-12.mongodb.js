// Utilizando o operador $not, retorne o total de super-heróis que não tenham mais de 1.80m de altura.

use('class');

db.superheroes.find({
    'aspects.height': {$not: {$gt: 180}}
})