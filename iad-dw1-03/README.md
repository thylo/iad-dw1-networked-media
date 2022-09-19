# IAD-DW1-03

Le fichier `app.js` contient le code minimum pour créer un serveur HTTP en utilisant nodejs.

Pour le lancer :
* Deplacer le chemin courant du terminal vers le dossier `iad-dw1-03`
* Run `npm run dev`

## Exercices:
- [ ] Créer un nouvel endpoint `/style.css` avec le contenu de la variable css.
- [ ] Modifier le HTML pour inclure la feuille de style `/style.css`
- [ ] Ajouter un paramètre d'URL (p.ex `/styles.css`) pour 
- [ ] Utiliser [res.sendFile](http://expressjs.com/en/4x/api.html#res.sendFile) pour créer deux routes pour servir les fichiers `style.css` et `castor.jpg` qui se trouvent dans le dossier public
- [ ] Modifier le html pour inclure une css externe (`/style.css`) et afficher une image (`/castor.jpg`).
- [ ] Lire [https://expressjs.com/fr/starter/static-files.html](https://expressjs.com/fr/starter/static-files.html)
- [ ] Ajouter `app.use('/static', express.static(__dirname + '/public'));`
- [ ] Supprimer les deux routes crées au pt 0.

## Notes



Pour recuperer la liste la plus à jour:

- Desactiver le javascript sur [https://www.proeco.iad-arts.be/proeco/intra-proeco.php](https://www.proeco.iad-arts.be/proeco/intra-proeco.php)
- Dans la console lancer :
- Copier le contenu du presse papier dans le fichier students.json

````
copy(Array.from(document.querySelectorAll("tbody tr"))
  .map((tr) => Array.from(tr.querySelectorAll("td"))
    .map(td => ({
      key: td.classList.toString().toLowerCase(),
      value: td.innerHTML
    })).reduce((previousValue, currentValue) => ({
      ...previousValue,
      [currentValue.key]: currentValue.value
    }), {}))
  .map(item => ({
    ...item,
    photo: item.photo
      .replace("<img src=\"PROECO", "PROECO")
      .replace("\" width=\"75\" height=\"100\">", "")
  })))
```` 

Url complete d'une image : https://www.proeco.iad-arts.be/proeco/PROECO_PHOTO/4838.JPG 