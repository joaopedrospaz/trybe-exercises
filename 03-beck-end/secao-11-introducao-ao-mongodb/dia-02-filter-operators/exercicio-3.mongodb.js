// Retorne o total de super-heróis menores que 1.80m.
use('class');


db.superheroes.countDocuments({
    'aspects.height': {$lt: 180}
});
