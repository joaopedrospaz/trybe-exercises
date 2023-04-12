// Utilizando o operador $in, selecione todos os super-heróis com cabelos pretos "black" ou carecas "no hair"

use('class');

db.superheroes.find({
    'aspects.hairColor': {$in: ['black', 'no hair']}
})