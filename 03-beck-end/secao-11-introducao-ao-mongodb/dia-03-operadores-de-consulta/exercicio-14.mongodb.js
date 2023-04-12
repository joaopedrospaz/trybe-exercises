// Utilizando o operador $expr, retorne todos os filmes em que o budget seja menor do que o grossWorldwide.

use('cinema');

db.movies.find(
    {
        $expr: {$lt: ['$budget', '$grossWorldwide']}
    }
)