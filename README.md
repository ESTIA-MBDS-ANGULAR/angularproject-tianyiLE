# Rendu3

[Le lien Front-end](https://tianyileangualrfrondend2024.onrender.com/): https://tianyileangualrfrondend2024.onrender.com/

le lien back-end : https://tianyile-apicoursangular2024.onrender.com/api/assignments

## Ce que j'ai fini

- [x]  Intégrer les rendus 1 et 2 dans le projet
- [x]  API Rest et HttpClient
- [x]  base de données MongoDB avec des centaines d'enregistrements
- [x]  Pagination avec GUI de pagination
- [x]  Hébergement sur Heroku ou autre
- [ ]  Ajouter de nouvelles données dans les assignments (nom du prof, matière, note sur 20, etc.)
- [ ]  Afficher les assignments dans une [table angular material](https://material.angular.io/components/table/overview) avec tri et page de header fixe.
- [ ]  Toute amélioration dans le but de rendre le projet plus professionnel sera appréciée



[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=13591615)

# Angular-start
## Leo Donati, Université Côte d'Azur (UniCA)
Repository de démarrage pour votre TD de Angular

C'est dans ce repository que vous allez créer votre projet Angular qui va évoluer tout au long de la semaine.

Vous devez donc modifier ce README en ajoutant votre nom et l'avancement de votre projet, ainsi que d'éventuelles difficultés que vous avez eu ou des bon,us que vous avez ajouté par rapport à ce qui vous est demandé.

* Si vous utilisez le github Codespace, alors dans votre machine virtuelle `npm`, `node` et `angular/CLI` sont déjà installés.
* Pour cloner en local ce repository, il faut :
   1. avoir installé `git` (ou `gitbash`) sur votre machine
   1. créer un répertoire de travail et s'y déplacer
   1. cloner le repository distant
```bash
git clone nom-du-repository
```



### Pour vérifier que l'installation est complète

```bash 
npm --version
node --version
ng version
```

### Chaque fois que vous modifiez votre code 

```bash
git pull            #pour synchroniser votre repo local avec le repo de github 
git add -A          #pour informer git de suivre tous les fichiers présents dans le répertoire
git commit -m "message descriptif"      #pour intégrer dans git les dernières modifications faites     
git push            #pour synchroniser le repo github avec le repo local
```

### Pour ajouter un tag (une étiquette) à l'état courant du repository sur github

```bash
git tag NomEtiquette
git push --tags
```



### Pour le page Login

user

```bash
role: user
nom: Peter
password: 123456
```

admin

```bash
role: admin
nom: Peter
password: 12345678
```



