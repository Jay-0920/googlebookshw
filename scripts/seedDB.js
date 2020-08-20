const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleboks");

const bookSeed = {
  authors: ["Alving Schwartz"],
  description:
    "Scary Stories to Tell in the Dark is a timeless collection of chillingly scary tales and legends, in which folklorist Alvin Schwartz offers up some of the most alarming tales of horror, dark revenge, and supernatural events of all time.",
  image:
    "https://www.google.com/books/edition/Scary_Stories_to_Tell_in_the_Dark/jXNADwAAQBAJ?hl=en&gbpv=1",
  link:
    "https://www.google.com/books/edition/Scary_Stories_to_Tell_in_the_Dark/jXNADwAAQBAJ?hl=en&gbpv=0",
  title: "Scary Stories to Tell in the Dark",
};

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
