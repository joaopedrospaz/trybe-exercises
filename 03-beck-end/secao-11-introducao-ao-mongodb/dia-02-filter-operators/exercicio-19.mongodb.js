//  Remova todos os documentos publicados pelo George Lucas.

use('class');

db.superheroes.deleteMany({
    publisher: 'George Lucas'
})