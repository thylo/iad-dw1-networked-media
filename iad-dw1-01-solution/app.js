//On importe les librairies nécessaires
const express = require("express");
const helper = require("./lib/helper");

//On instancie une instance de express
const app = express();
const port = 3000;

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

app.get("/", (req, res) => {
  res.send("Waw c'est vraiment trop dingue ce truc !");
});
app.get("/me", (req, res) => {
  res.send("Hey! My name is Julien Moreau");
});
app.get("/jose", (req, res) => {
  res.redirect("http://192.168.0.142:3000/me");
});
app.get("/random", (req, res) => {
  const ip = shuffle(["192.168.0.42","192.168.0.8","192.168.0.14","192.168.0.118"]).pop();
  res.redirect(`http://${ip}:3000`);
});

app.listen(port, () => {
  console.log(
    `Example app listening on http://${helper
      .map((networkInterface) => `${networkInterface.address}:${port}`)
      .join(" and ")}`
  );
});
