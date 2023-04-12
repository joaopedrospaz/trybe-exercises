// Retorne todos os filmes onde ao menos um elemento de ratings esteja entre 64 e 105 e seja divisível por 9, exiba apenas os campos title e ratings.

use('cinema');

db.movies.find(
{
    ratings: {
        $elemMatch: { $gte: 64, $lte: 105, $mod: [9, 0]}
    }
}
)