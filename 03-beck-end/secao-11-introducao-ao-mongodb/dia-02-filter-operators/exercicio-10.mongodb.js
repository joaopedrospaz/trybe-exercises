// Retorne o total de super-heróis com cabelos pretos "black" ou carecas "no hair".

use('class');

db.superheroes.countDocuments({
    'aspects.hairColor': {$in: ['black', 'no hair']}
})