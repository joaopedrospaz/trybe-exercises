// Utilizando o operador $regex, retorne todos os filmes em que a descrição comece com a palavra "The".

use('cinema');

db.movies.find(
    {
        description: {$regex: /^The/}
    }
)