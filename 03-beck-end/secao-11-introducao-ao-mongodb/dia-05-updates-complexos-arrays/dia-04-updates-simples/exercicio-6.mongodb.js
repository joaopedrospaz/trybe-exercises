// Adicione o elemento "action" ao array category do filme Batman, garantindo que esse valor não se duplique.

use("cinema");

db.movies.updateOne(
  { title: "Batman" },
  {
    $addToSet: {
      category: "action",
    },
  }
);
