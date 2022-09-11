//On importe les librairies nécessaires
const express = require("express");
const helper = require("./lib/helper");

//On instancie une instance de express
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Waw c'est trop dingue ce truc !");
});

app.listen(port, () => {
  console.log(
    `Example app listening on http://${helper
      .map((networkInterface) => `${networkInterface.address}:${port}`)
      .join(" and ")}`
  );
});
