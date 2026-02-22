# Manuel d’utilisation — Plugin Calendrier ICS

Ce document explique comment utiliser le plugin **Calendrier ICS** :
ajout de calendriers, reconnaissance des événements et déclenchement d’actions.

---

## À quoi sert ce plugin ?

Le plugin permet de :

- lire des calendriers distants (Google, iCloud, Nextcloud, CalDAV…)
- afficher les événements dans Jeedom
- savoir s’il y a un événement aujourd’hui ou demain
- déclencher des actions automatiquement selon les événements
- utiliser les événements dans des scénarios
- afficher les informations dans des widgets

⚠️ Le plugin fonctionne en **lecture seule** :
il ne modifie jamais un calendrier distant.

---

## Étape 1 — Activer le plugin

1. Installer le plugin depuis le Market Jeedom
2. Activer le plugin
3. Aller dans :
   Plugins → Organisation → Calendrier ICS

Mode Debug :
- à utiliser uniquement en cas de problème
- à désactiver ensuite (surtout si Jeedom utilise une carte SD)

---

## Étape 2 — Ajouter un calendrier

1. Cliquer sur **+**
2. Choisir **Calendrier**
3. Choisir le **type**
4. Renseigner les informations demandées
5. Enregistrer

---

## Quel type de calendrier choisir ?

- Google Calendar → **ICS**
- iCloud / Apple Calendar → **ICS**
- Nextcloud / Synology / Radicale → **CalDAV**
- Calendrier public (sport, vacances…) → **ICS**

Conseil :
en cas de doute, **ICS est le plus simple**.

---

## Google Calendar (ICS)

1. Ouvrir Google Calendar
2. Paramètres du calendrier
3. Copier **Adresse privée au format iCal**
4. Coller l’URL dans le plugin

---

## iCloud / Apple Calendar (ICS)

1. Aller sur icloud.com
2. Rendre le calendrier **public**
3. Copier le lien
4. Remplacer `webcal://` par `https://`
5. Coller l’URL dans le plugin

---

## CalDAV (serveur personnel)

Compatible avec :
- Nextcloud
- Synology
- Radicale
- Baïkal
- DAViCal

Informations à renseigner :
- URL du **calendrier** (doit se terminer par `/`)
- Identifiant
- Mot de passe

⚠️ L’URL doit pointer vers le **calendrier**, pas vers le serveur.

---

## Étape 3 — Vérifier les événements

- Aller dans l’onglet **Agenda**
- Les événements apparaissent
- Cliquer sur un événement pour le configurer

---

## Étape 4 — Créer un événement (dans le plugin)

### Rôle d’un événement

Un événement du plugin sert à :
- surveiller un ou plusieurs calendriers
- reconnaître certains événements précis
- déclencher des actions automatiquement

Sans événement configuré côté plugin, **aucune action automatique n’est déclenchée**.

---

### Création d’un événement

1. Cliquer sur **+**
2. Choisir **Événement**
3. Donner un **nom**
   (exemples : Anniversaire, RDV, Match, Travail)
4. Choisir le **calendrier associé**
5. Enregistrer

---

## Comment un événement est reconnu

Le plugin compare ce que vous avez défini (mot simple ou expression régulière)
avec les informations de l’événement du calendrier.

Les champs utilisés sont :
- le **titre**
- la **description** (optionnelle)

---

## Le titre

Le titre de l’événement du calendrier est **toujours analysé**.

Exemples :
- Anniversaire de Paul
- Match Dijon – Metz
- RDV Médecin

---

## La description

La description correspond au champ “notes” de l’événement
(Google Calendar, iCloud, Nextcloud, etc.).

Exemples :
- Salle 3
- Match de coupe
- Départ 08h

---

## Option importante — Vérifier la description

### Option non cochée

- seul le **titre** est utilisé pour reconnaître l’événement
- la description n’est pas utilisée pour la reconnaissance

➡️ Le titre doit correspondre au mot-clé ou à la règle définie.

---

### Option cochée

- le **titre et la description** sont analysés
- une correspondance dans l’un ou l’autre suffit

➡️ Le titre n’a pas besoin de correspondre
➡️ La description peut suffire à déclencher l’événement

---

### Exemple clair

Calendrier :
- Titre : `Match`
- Description : `Dijon – Metz / Coupe`

Règle configurée : `Dijon`

- Vérification de la description désactivée → événement non reconnu
- Vérification de la description activée → événement reconnu

---

## Mot simple ou expression régulière (regex)

### Mot simple

Exemples :
- RDV
- Match
- Anniversaire

Suffisant dans la majorité des cas.

---

### Expression régulière (regex)

Option avancée permettant :
- de reconnaître plusieurs mots
- de gérer des variantes
- de filtrer plus précisément

Les regex sont **optionnelles**.

---

## Actions

Pour chaque événement reconnu, il est possible de définir :
- une action au **début** de l’événement
- une action à la **fin**
- une action **avant** l’événement

⚠️ Pour les actions “avant”, vérifier que le calendrier conserve
un nombre de jours suffisant.

---

## Commandes disponibles

Principales commandes :
- Today / Tomorrow
- Event Today / Event Tomorrow
- Next
- Heure / Titre / Date
- TOGO

Ces commandes peuvent être utilisées dans :
- des scénarios
- des notifications
- du TTS
- des interactions

---

## Widgets

Les widgets permettent :
- une vue synthétique des événements
- l’agrégation de plusieurs calendriers
- un affichage compatible mobile

---

## Exemples avancés (optionnels)

- Tous les rendez-vous :
  `/rdv/i`

- Cours avec salle variable :
  `/yoga/i`

- Matchs d’une équipe précise :
  `/match.*dijon|dijon.*match/i`

- Usage courant regroupé :
  `/(rdv|anniversaire|match|travail|yoga)/i`

---

## À retenir

- le **titre** est toujours analysé
- la **description** n’est analysée que si l’option est activée
- les **regex sont optionnelles**
- le plugin applique strictement les règles définies
