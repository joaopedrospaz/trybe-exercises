// Agora retorne os filmes que contenham action e sci-fi no array category e possuem nota do IMDB maior do que 7.

use('cinema');

db.movies.find({
    category: {$all: ['action', 'sci-fi']},
    imdbRating: {$gt: 7}
})