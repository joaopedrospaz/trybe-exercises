// Remova apenas um documento publicado pela Sony Pictures.

use('class');

db.superheroes.deleteOne({
    publisher: 'Sony Pictures'
})