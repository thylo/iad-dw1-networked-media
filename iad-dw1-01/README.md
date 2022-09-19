# IAD-DW1-01

Le fichier `app.js` contient le code minimum pour créer un serveur HTTP en utilisant nodejs.

Pour le lancer :
* Installer [postman](https://www.postman.com/)
* Verifier que nodeJs fonctionne en tapant `node` et `npm` dans le terminal. Si le terminal affiche quelque chose du style "Welcome to Node.js v16.15.1." tout est ok, si ce n'est pas le cas, installer nodeJs
* Pour quitter nodeJS: `CTRL+C`
* En utilisant le terminal, se rendre dans le dossier contenant le projet `iad-dw1-01`
* Installer les dépendances du projet en tapant `npm install` (ou `npm i` pour les paresseux) dans le terminal.
* Lancer le serveur en tapant `npm run start`, si tout se passe bien le terminal affiche `Example app listening on 127.0.0.1:3000 and 192.168.0.142:3000` (l'adresse IP exacte sera différente)
* En utilisant postman, faire une requête vers une des adresses obtenues ci-dessus.

Exercices
-[ ] Essayer de modifier le code dans `app.js` pour changer le message.
-[ ] Essayer de se connecter sur le serveur d'un autre étudiant.
-[ ] Créer une nouvelle route qui affichera un autre message quand on appelle `http://##ADRESSE_IP##/me`
-[ ] En utilisant [res.redirect](http://expressjs.com/en/4x/api.html#res.redirect) rediriger la requete vers un autre camarade quand on appelle p.ex `http://##ADRESSE_IP##/manon`
-[ ] Stocker plusieurs adresses dans un tableau et rediriger aléatoirement vers l'une ou l'autre.
