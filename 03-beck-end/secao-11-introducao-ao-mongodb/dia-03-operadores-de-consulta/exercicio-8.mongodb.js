// Retorne somente o título de todos os filmes com quatro elementos no array ratings.


use('cinema');

db.movies.find(
    {
        ratings: {$size: 4}
    },
    {
        _id: 0,
        title: true
    }
)