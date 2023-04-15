// Remova a categoria "action" do filme Batman.

use("cinema");

db.movies.updateOne(
  { title: "Batman" },
  {
    $pull: {
      category: "action",
    },
  }
);
