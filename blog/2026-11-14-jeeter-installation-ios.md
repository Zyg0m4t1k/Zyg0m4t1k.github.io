---
slug: jeeter-installation-ios
title: "Jeeter : installer l'app BLE proxy Matter sur iPhone"
authors: zyg0m4t1k
tags: [jeedom, matter, ios, bluetooth, jeeter]
description: Comment installer Jeeter sur iPhone sans compte Apple Developer payant — Sideloadly, profil Matter Bluetooth, et commissioning depuis le plugin Jeedom.
---

**Jeeter** est une app iOS qui transforme l'iPhone en proxy BLE pour le commissioning Matter via Jeedom. Pas de compte Apple Developer payant, pas d'App Store — juste Sideloadly et un Apple ID gratuit.

<!--truncate-->

:::info Téléchargement
[**jeeter.ipa** (iOS)](https://zyg0m4t1k.github.io/downloads/jeeter.ipa) — installer via Sideloadly
:::

---

## Prérequis

- iPhone sous **iOS 16+**
- PC/Mac avec [Sideloadly](https://sideloadly.io/) installé
  - Sur Windows : **WebiTunes** et **WebiCloud** requis (téléchargeables depuis le site Sideloadly)
- Un **compte Apple ID** gratuit
- **Developer Mode** activé sur l'iPhone

---

## Étape 1 — Activer le Developer Mode

1. **Réglages → Confidentialité et sécurité → Developer Mode**
2. Activer le toggle → l'iPhone redémarre
3. Au redémarrage, confirmer l'activation dans la popup

> Sans Developer Mode, Sideloadly ne peut pas installer l'app.

---

## Étape 2 — Télécharger le fichier IPA

Télécharger directement : [**jeeter.ipa**](https://zyg0m4t1k.github.io/downloads/jeeter.ipa)

---

## Étape 3 — Installer avec Sideloadly

1. Brancher l'iPhone au PC/Mac via USB
2. Ouvrir **Sideloadly**
3. Faire glisser `jeeter.ipa` dans la fenêtre
4. Vérifier que l'iPhone est bien détecté en haut
5. Entrer l'**Apple ID** dans le champ prévu
6. Cliquer **Start** → saisir le mot de passe Apple ID dans la popup
7. Attendre (~1 min)

---

## Étape 4 — Faire confiance au certificat

Après installation, iOS bloque l'app (certificat non vérifié) :

1. **Réglages → Général → VPN et gestion de l'appareil**
2. Sous **Apps développeur**, trouver votre Apple ID
3. Appuyer **Faire confiance à "votre@email.com"** → Confirmer

> Cette étape est requise à chaque réinstallation. Le certificat est valide **7 jours**.

---

## Étape 5 — Profil Matter Bluetooth *(obligatoire)*

iOS bloque par défaut les écritures BLE sur les UUIDs Matter. Sans ce profil, l'erreur **CBError code 8** apparaît au commissioning.

### Depuis l'iPhone (Safari uniquement)

Ouvrir cette URL dans Safari :

```
https://developer.apple.com/services-account/download?path=%2FiOS%2FiOS_Logs%2FEnableBluetoothCentralMatterClientDeveloperMode.mobileconfig
```

Appuyer **Autoriser** dans la popup.

### Installer le profil

1. **Réglages → Général → VPN et gestion de l'appareil**
2. Appuyer sur `EnableBluetoothCentralMatterClientDeveloperMode`
3. **Installer** → code PIN → **Installer** → **Terminé**

> À faire une seule fois — le profil survit aux réinstallations de l'app.

---

## Étape 6 — Configurer Jeeter

1. Ouvrir **Jeeter** sur l'iPhone
2. Onglet **Paramètres** → saisir l'IP et le port de Jeedom
3. Clé API du plugin Matter *(optionnel)* : Jeedom → Plugin Matter → Configuration
4. **Sauvegarder**
5. Les équipements Matter apparaissent si Jeedom est accessible (réseau local ou via Tailscale)

---

## Étape 7 — Commissioner un appareil Matter

1. Dans **Jeedom** → plugin Matter → lancer le **mode proxy BLE**
2. Sur l'iPhone → **Jeeter** → onglet **BLE** → **Connecter**
3. Jeeter scanne les appareils Matter à portée
4. Dans Jeedom → lancer le **commissioning**
5. Le plugin pilote l'iPhone via Jeeter pour effectuer le commissioning BLE

> L'iPhone doit rester à portée de l'appareil Matter pendant toute la durée du commissioning.

---

## Renouvellement (tous les 7 jours)

Avec un Apple ID gratuit, le certificat expire après 7 jours. L'app ne se lance plus si le certificat est expiré.

Le renouvellement fonctionne **en USB ou en Wi-Fi** (même réseau) :

1. Ouvrir Sideloadly
2. Recharger `jeeter.ipa`
3. **Start** → certificat renouvelé
4. Refaire l'étape **Faire confiance** si demandé

> Le profil Matter Bluetooth n'a pas besoin d'être réinstallé.

---

## Dépannage

| Problème | Solution |
|---|---|
| Sideloadly ne détecte pas l'iPhone | Vérifier USB, faire confiance au Mac dans iOS |
| "Unable to install" | Désinstaller l'ancienne version depuis l'iPhone d'abord |
| App impossible à ouvrir | Refaire l'étape 4 (faire confiance au certificat) |
| CBError code 8 | Installer le profil Matter Bluetooth (étape 5) |
| Pas de connexion Jeedom | Vérifier IP, port, même réseau ou Tailscale actif |
