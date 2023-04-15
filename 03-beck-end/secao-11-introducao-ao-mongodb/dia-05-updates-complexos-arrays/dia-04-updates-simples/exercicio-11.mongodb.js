// Produza três querys para o filme Batman:
// Adicione o campo actor, que deve ser um array com o valor Christian Bale, ao array de cast em que o campo character seja igual a Batman;
// Adicione o campo actor, que deve ser um array com o valor Michael Caine, ao array de cast em que o campo character seja igual a Alfred;
// Adicione o campo actor, que deve ser um array com o valor Heath Ledger, ao array de cast em que o campo character seja igual a Coringa.


use("cinema");
db.movies.find();

db.movies.updateOne(
    {
        title: 'Batman',
        'cast.character': 'Batman'
    },
    {
        $push: { 'cast.$.actor': 'Christian Bale' }
    }
)
db.movies.updateOne(
    {
        title: 'Batman',
        'cast.character': 'Alfred'
    },
    {
        $push: { 'cast.$.actor': 'Michael Caine' }
    }
)
db.movies.updateOne(
    {
        title: 'Batman',
        'cast.character': 'Coringa'
    },
    {
        $push: { 'cast.$.actor': 'Heath Ledger' }
    }
)
