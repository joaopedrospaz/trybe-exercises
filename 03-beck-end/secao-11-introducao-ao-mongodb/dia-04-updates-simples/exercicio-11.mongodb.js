//  Utilizando uma única operação, crie um campo chamado sequels e atribua a ele o valor 0 em todos os documentos.

use('class');

db.movies.updateMany(
    {},
    { $set: { sequels: 0 } }
);
