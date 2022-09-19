//On importe les librairies nécessaires
const express = require("express");
const helper = require("./lib/helper");
const moment = require("moment");
const capitalize = require("lodash/capitalize");
moment.locale("fr");

//On instancie une instance de express
const app = express();
const port = 3000;

const names = [
  { name: "Raymond", gender: "m" },
  { name: "José", gender: "m" },
  { name: "Raoul", gender: "m" },
  { name: "Pablo", gender: "m" },
  { name: "Marcel", gender: "m" },
  { name: "Raymonde", gender: "f" },
  { name: "Josette", gender: "f" },
  { name: "Marcelle", gender: "f" },
  { name: "Maria", gender: "f" },
];

app.use((req, res, next) => {
  req.time = Date.now();
  next();
});

app.get("/", (req, res) => {
  res.send("Waw c'est vraiment trop dingue ce truc !");
  res.end();
});

app.get("/time", (req, res) => {
  res.send(req.time.toString());
  res.end();
});
app.get("/time/nice", (req, res) => {
  res.send(
    `Nous sommes le ${moment(req.time).format("Do MMMM YYYY")}, il est ${moment(
      req.time
    ).format("HH:mm")}`
  );
  res.end();
});
app.get("/hello/search", (req, res) => {
  const term = req.query.term;
  const gender = req.query.gender;
  if (!term && !gender) {
    return res.send("Ajouter un paramètre pour chercher un prénom");
  }
  let results = names;
  if (term) {
    results = results.filter((user) => user.name.toLowerCase().match(term));
  }
  if (gender) {
    results = results.filter((user) => user.gender.toLowerCase().match(term));
  }
  if (results.length) {
    return res.send(
      `${results
        .map((i) => i.name)
        .join(", ")} correspondent à votre recherche pour "${term}"`
    );
  }
  return res.send(`Aucun résultat pour "${term}"`);
});
app.get("/hello/:name", (req, res) => {
  res.send(`Bonjour ${capitalize(req.params.name)}`);
});
app.get("/hello/:lang/:name", (req, res) => {
  if (req.params.lang === "nl") {
    res.send(`Dag ${capitalize(req.params.name)}`);
    res.end();
    return;
  }
  res.send(`Bonjour ${capitalize(req.params.name)}`);
});

app.listen(port, () => {
  console.log(
    `Example app listening on http://${helper
      .map((networkInterface) => `${networkInterface.address}:${port}`)
      .join(" and ")}`
  );
});
