// Crie um array de documentos chamado cast para o filme Batman com os seguintes dados:
// {
//     "character": "Batman"
//   },
//   {
//     "character": "Alfred"
//   },
//   {
//     "character": "Coringa"
//   }

use("cinema");
db.movies.find();

db.movies.updateOne(
    { title: 'Batman' },
    {
        $push: {
            cast: {
                $each: [
                    {
                        "character": "Batman"
                    },
                    {
                        "character": "Alfred"
                    },
                    {
                        "character": "Coringa"
                    }
                ]
            }
        }
    }
)
