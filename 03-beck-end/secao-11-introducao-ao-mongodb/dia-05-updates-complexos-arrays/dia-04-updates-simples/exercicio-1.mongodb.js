// Adicione a categoria "superhero" ao filme Batman.

use("cinema");

db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      category: "superhero",
    },
  }
);
