# IAD-DW1-02

Le fichier `app.js` contient le code minimum pour créer un serveur HTTP en utilisant nodejs.

Pour le lancer :
* Deplacer le chemin courant du terminal vers le dossier `iad-dw1-02`
* Run `npm run start`

## Exercices:
- [ ] Afin d'eviter de devoir redemarrer le serveur manuellement, installer "nodemon" en lançant `npm install nodemon` (ou `npm i nodemon`)
- [ ] Modifier `package.json` pour ajouter un nouveau raccourcis `dev` dans l'object `scripts` afin de lancer nodemon à la place de node.
- [ ] Faire une modification dans le code et s'assurer que le serveur rédemarre bien.
- [ ] Lire [https://expressjs.com/fr/guide/routing.html](https://expressjs.com/fr/guide/routing.html)
- [ ] Créer une nouvelle route `/time` qui affiche l'heure brute a partir de `req.time`
- [ ] Créer une nouvelle route `/time/nice` qui affiche `Nous sommes le 16 septembre 2022, il est 14:50` (enfin l'heure qu'il sera dans le futur quand vous lirez ceci ;-) )
- [ ] Créer une nouvelle route qui affichera une `Bonjour Raymond` si on appelle `/hello/raymond`, `Bonjour Josianne` si on appelle `/hello/josianne`, etc... 
  - Attention à bien mettre la première lettre du prénom en majuscule.
- [ ] Créer une nouvelle route qui affichera `Bonjour Raymond` ou `Goeiemorgen Raymond` en fonction d'un paramêtre de l'URL
- [ ] Créer un tableau qui contient une dizaine de prénoms p.ex : Josianne, Raymond, José, Pablo, Raoul, Vinciane, Alberte, Marcel
- [ ] Créer une nouvelle route `hello/search` qui affiche `Ajouter un paramètre pour chercher un prénom`.
- [ ] Créer une nouvelle route qui affiche `Raoul, Raymond correspondent à votre recherche pour "ra"` quand on appelle `/hello/search?term=ra`
- [ ] Modifier le tableau des noms pour le transformer en un tableau d'objets `[{name:"Raymond", gender:"male"},{name:"Jocelyne", gender:"female"}]`
- [ ] Modifier la route `/hello/search` pour pouvoir filtrer par genre p.ex `/hello/search?gender=male`

### Pour aller plus loin
- [ ] En fonction de l'heure, retourner une réponse différente pour `/hello/raymond` p.ex à 20h "Bonne nuit Raymond"

## Notes
- Utiliser [https://momentjs.com/](https://momentjs.com/) pour formatter les dates
- Au lieu de réinventer la roue, [lodash](https://lodash.com/docs) fournit pas mal d'utilitaire pour manipuler des chaines de caractère 