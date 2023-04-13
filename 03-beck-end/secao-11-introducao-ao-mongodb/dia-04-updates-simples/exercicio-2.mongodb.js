//  Altere budget para 1 no filme Godzilla

use('class');

db.movies.updateOne(
    { title: 'Godzilla' },
    { $set: { budget: 1 } }
)