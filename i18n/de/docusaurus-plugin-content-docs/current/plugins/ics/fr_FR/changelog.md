# Changelog — Plugin Calendrier ICS

Ce fichier liste les évolutions, corrections et améliorations du plugin
Calendrier ICS, par ordre chronologique inverse.

---


## 20.02.2026

- Clarification du rôle :
  - calendriers
  - événements
  - commandes
  - widgets
- Explication détaillée de la reconnaissance des événements :
  - titre
  - description
  - option “vérifier la description”
- Documentation claire sur l’utilisation des **expressions régulières (regex)**
- Ajout d’exemples concrets et avancés (filtres, regroupements, usages mixtes)
- Séparation nette entre usage courant et fonctionnalités avancées


---

## 01.05.2022

- Mise à jour effectuée en l’état
- Recommandation : lire attentivement le changelog avant toute mise à jour
- Aucun correctif rétroactif prévu
- Les utilisateurs souhaitant rester sur une version stable peuvent ne pas mettre à jour

---

## 05.01.2022

- Correction de l’utilisation avec mailo.com (voir documentation)
- Préparation de la version 4.2

---

## 31.01.2021

- Corrections de bugs
- Possibilité d’utiliser une **expression régulière (regex)** pour le nom d’événement (page de l’équipement)
  Remerciements à *t0urista*
- Visualisation des widgets par tous les utilisateurs connectés

---

## 27.12.2020

- Correction du widget

---

## 20.12.2020

- Ajout de la commande **Description(Next)**
  Retourne la description du prochain événement

---

## 18.12.2020

- Correction de la mise à jour du widget lors de la première utilisation
- Correction lors des modifications d’événements

---

## 23.11.2020

- Possibilité de créer un équipement « virtuel » regroupant plusieurs calendriers
  (vue mobile et dashboard)
- Optimisations générales et améliorations ergonomiques
- Corrections de bugs d’affichage
- Ajout du widget mobile
- Mise à jour de la documentation

---

## 23.10.2020

- Mise à jour et enrichissement de la documentation
- Correction du nom des objets sur le dashboard
- Nettoyage du code
- Mise à jour de la timeline et de ses widgets (compatibilité Jeedom v4)
- Widget des événements utilisant les commandes core par défaut
- Possibilité de dupliquer un équipement
- Ajout de la commande **date**
  (date du prochain événement ou de la prochaine récurrence)
- Ajout d’une commande **binaire** indiquant si un événement est en cours
- Correction de la commande **Last Event** (Calendrier)

---

## 10.10.2020

- Compatibilité Jeedom v4 (info.json)
- Suppression de l’icône de chargement lors de la mise à jour du widget
- Optimisations générales

---

## 19.07.2020

- Rafraîchissement automatique du widget lors d’un changement

---

## 30.04.2020

- Correction d’une erreur lors de la création d’un événement
- Ajout / correction de l’icône du plugin

---

## 10.12.2019

- Correction de la documentation

---

## 20.08.2019

- Personnalisation du widget

---

## 23.02.2019

- Mise à jour de la documentation (recommandée)
- Possibilité de choisir la fréquence de rafraîchissement des calendriers
- Personnalisation de l’envoi des informations
- Ajout de nouvelles commandes :
  - événements : heure, titre
  - calendriers : heure, titre, TOGO
- Facilitation de l’utilisation dans les scénarios
- Correction des bugs liés au retour des événements du jour

---

## 28.04.2018

- Corrections pour les fichiers ICS locaux
- Corrections de bugs d’affichage

---

## 24.03.2018

- Changement de format pour la commande **Next Event**
- Ajout des commandes :
  - **Event Today**
  - **Event Tomorrow**
- Ces commandes retournent 1 s’il y a un événement, sinon 0

---

## 22.02.2018

- Possibilité de changer l’ordre des actions au clic
- Correction graphique de la fenêtre modale d’un événement
- Possibilité de créer une variable pour les événements
- Améliorations dans le choix et l’utilisation des commandes

---

## Février 2018 (date non précisée)

- Correction du bug d’affichage de la timeline
- Désactivation de la modale pour la timeline
- Corrections de bugs
- Prise en charge des événements sur journée entière
- Nouvelle commande retournant la description de l’événement
- Possibilité de configurer le nombre de jours sauvegardés
- Nouvelle documentation

---

## 02.01.2018

- Ajout de la vue mobile

---

## Décembre 2017

- Possibilité d’ajouter des actions avant un événement (notification en minutes)
- Gestion des journées entières
- Documentation initiale
- Ajout des commandes pour la timeline
- Optimisation de la récupération des fichiers ICS
- Ajout des mots-clés dans la fenêtre modale
- Prise en charge des calendriers Webcal avec authentification
- Affichage des commandes dans les équipements (calendrier et événement)
- Corrections de bugs
- Amélioration du fonctionnement de la timeline (sauvegarde continue)

---

## 11.12.2017

- Mise à disposition du plugin sur le Market Jeedom

---

