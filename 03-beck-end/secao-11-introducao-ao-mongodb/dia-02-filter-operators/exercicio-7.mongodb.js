// Selecione todos os super-heróis que têm olhos verdes ("green").

use('class');

db.superheroes.find({
    'aspects.eyeColor': 'green'
})