// Selecione todos os super-heróis com menos de 1.80m de altura.
use('class');
db.superheroes.find({
    'aspects.height': {$lt: 180}
});