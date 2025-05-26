const express = require("express");
const app = express();
const port = 8000;

const array = [1, 2, 3, 4];

const movieId = "123";
const genreIds = "321";
const page = "heroPage";

app.get("/test", (req, res) => {
  res.send(array);
});

app.post("/test", (req, res) => {
  array.push(5);
  res.send("successfully added");
});

app.delete("/test", (req, res) => {
  array.shift();
  res.send("successfully deleted");
});

app.get("/test", (req, res) => {
  res.send(array);
});

app.delete("/test", (req, res) => {
  array.pop();
  res.send("removed last element");
});

// app.get("/movies/upcoming", (req, res) => {
//   res.send([
//     {
//       name: "Dear Santa",
//       rating: "6.9",
//     },
//     {
//       name: "How to train your dragon",
//       rating: "6.9",
//     },
//     {
//       name: "Alien Romulus",
//       rating: "6.9",
//     },
//     {
//       name: "From the Ashes",
//       rating: "6.9",
//     },
//   ]);
// });
// app.get("/movies/popular", (req, res) => {
//   res.send([
//     {
//       name: "The Shawshank",
//       rating: "6.9",
//       id: "001",
//     },
//     {
//       name: "The Godfather",
//       rating: "6.9",
//       id: "002",
//     },
//     {
//       name: "The Dark Knight",
//       rating: "6.9",
//       id: "003",
//     },
//     {
//       name: "12 Angry Men",
//       rating: "6.9",
//       id: "004",
//     },
//   ]);
// });
// app.get("/movies/top_rated", (req, res) => {
//   res.send([
//     {
//       name: "Pulp Fiction",
//       rating: "6.9",
//       id: "005",
//     },
//     {
//       name: "The Lord of the Rings",
//       rating: "6.9",
//       id: "006",
//     },
//     {
//       name: "The Good, the Bad and the Ugly",
//       rating: "6.9",
//       id: "007",
//     },
//     {
//       name: "Forrest Gump",
//       rating: "6.9",
//       id: "008",
//     },
//   ]);
// });
// app.get("/movies/now_playing", (req, res) => {
//   res.send([
//     {
//       name: "Twissu's Movie",
//       rating: "6.9",
//       id: "009",
//     },
//     {
//       name: "Twissu's Movie",
//       rating: "6.9",
//       id: "010",
//     },
//     {
//       name: "Twissu's new movie",
//       rating: "6.9",
//       id: "011",
//     },
//     {
//       name: "Twissu's old movie",
//       rating: "6.9",
//       id: "012",
//     },
//   ]);
// });

// app.get(`/movie/${movieId}`, (req, res) => {
//   res.send([{ id: `${movieId}` }]);
// });

// app.get("/genre/movie", (req, res) => {
//   res.send([
//     "action",
//     "adventure",
//     "animation",
//     "horror",
//     "thriller",
//     "family",
//     "funny",
//   ]);
// });

// app.get(`/discover/genre=${genreIds}&page=${page}`, (res, req) => {
//   res.send([
//     {
//       genre: `${genreIds}`,
//       page: `${page}`,
//     },
//   ]);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
