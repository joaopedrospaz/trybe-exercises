// Retorne o total de documentos que contêm o campo hairColor.

use('class');

db.superheroes.countDocuments({
    'aspects.hairColor': {$exists: true}
})