//On importe les librairies nécessaires
const express = require("express");
const helper = require("./lib/helper");

//On instancie une instance de express
const app = express();
const port = 3000;

app.use((req, res, next)=>{
  console.log("ceci va être affiché à chaque request");
  req.time = Date.now();
  next();
});

app.get("/", (req, res) => {
  res.send("Waw c'est vraiment trop dingue ce truc !");
  res.end();
});

app.listen(port, () => {
  console.log(
    `Example app listening on http://${helper
      .map((networkInterface) => `${networkInterface.address}:${port}`)
      .join(" and ")}`
  );
});
