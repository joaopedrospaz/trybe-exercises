// Aumente em 5 o budget do filme Home Alone.

use('class');

db.movies.updateOne(
    { title: 'Home Alone' },
    {$inc: {budget: 5}}
)
