// Retorne o total de super-heróis com olhos azuis "blue"

use('class');

db.superheroes.countDocuments({
    'aspects.eyeColor': 'blue'
})