// Selecione todos os super-heróis que não sejam humanos nem sejam maiores do que 1.80m.

use('class');

db.superheroes.find({
    $nor: [
        {race:  'Human'},
        {'aspects.height': {$gt: 180}}
    ]
})