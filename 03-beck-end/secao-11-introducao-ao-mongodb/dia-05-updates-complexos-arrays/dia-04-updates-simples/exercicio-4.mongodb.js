// Remova o primeiro elemento do array category do filme Batman.

use("cinema");

db.movies.updateOne(
  { title: "Batman" },
  {
    $pop: {
      category: -1,
    },
  }
);
