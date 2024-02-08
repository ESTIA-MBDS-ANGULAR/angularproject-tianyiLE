# API

API Restful pour un back-end en Node.js et Express.js qui se connecte à une base de données MongoDB qui contient les ``Assignment``

Utilisé dans le cadre du cours sur Angular de l'Université Côte d'Azur.

Utilise ``Mongoose``

## Prérequis

- Avoir créé une base de données MongoDB sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) avec au moins une collection ``assignments`` et un Assignment
- Avoir récupéré l'identifiant de la base de données et le mot de passe
- Avoir installé [Node.js](https://nodejs.org/en/download/)

## Installation

- Cloner le projet
- Mettre à jour dans ``server.js`` les informations de connexion à la base de données
- Installer les dépendances :

```bash
npm install
```

## Lancement

```bash
npm start
```

## Tester l'API

- Ouvrir un navigateur et aller à l'adresse http://localhost:8010/api/assignments
pour récupérer la liste des assignments
- Ouvrir un navigateur et aller à l'adresse http://localhost:8010/api/assignments/1 pour récupérer l'assignment avec l'id 1

> Si l'API n'arrive pas à accéder à la base de données, vérifier que l'adresse IP de votre poste est bien autorisée dans MongoDB Atlas et que le WIFI ne bloque pas l'accès à la base de données (vous pouvez éventuellement essayer avec un partage de connexion avec votre téléphone)
