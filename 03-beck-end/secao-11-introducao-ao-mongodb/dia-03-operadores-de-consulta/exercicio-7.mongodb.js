// Retorne somente o título de todos os filmes com dois elementos no array category.


use('cinema');

db.movies.find(
    {
        category: {$size: 2}
    },
    {
        _id: 0,
        title: 1,
    }
)