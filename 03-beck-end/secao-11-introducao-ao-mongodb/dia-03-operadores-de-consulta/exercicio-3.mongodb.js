// Retorne todos os filmes com ratings maior do que 103, exibindo apenas os campos title e ratings.

use('cinema');

db.movies.find({
   ratings: {$gt:103}
}, {
    title: true, ratings: true, _id: false
})