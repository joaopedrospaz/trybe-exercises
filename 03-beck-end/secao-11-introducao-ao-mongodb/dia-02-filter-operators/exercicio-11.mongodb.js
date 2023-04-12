// Retorne o total de super-heróis que não tenham cabelos pretos "black" ou carecas "no hair".

use('class');

db.superheroes.countDocuments({
    'aspects.hairColor': {$nin: ['black', 'no hair']}
})