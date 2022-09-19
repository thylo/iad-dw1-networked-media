//On importe les librairies nécessaires
const express = require("express");
const network = require("./lib/network");

//On instancie une instance de express
const app = express();
const port = 3000;

const html = `<html>
<head>
<title>Awesome page</title>
</head>
<body>
<h1>Tcheu dis</h1>
<h2>C'est vraiment foufou le web.</h2>
<p>En plus il y a moyen de mettre des paragraphes de texte.</p>
</body>
</html>`;

const css = `*{font-family: "Comic Sans MS",sans-serif;}
h1{color: blueviolet;}
h2{color: cornflowerblue;}`;

app.get("/", (req, res) => {
  res.send(html);
  res.end();
});

app.listen(port, () => {
  console.log(
    `Example app listening on http://${network
      .map((networkInterface) => `${networkInterface.address}:${port}`)
      .join(" and ")}`
  );
});
