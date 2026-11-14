---
slug: ntfybridge-tailscale-notifications-sans-port
title: "NtfyBridge + Tailscale : notifications Jeedom sans ouvrir un seul port"
authors: zyg0m4t1k
tags: [ntfybridge, tailscale, notifications, securite]
description: "NtfyBridge intègre nativement un assistant Tailscale qui configure tout automatiquement. Résultat : votre serveur ntfy reste privé, aucun port ouvert, HTTPS gratuit."
image: /img/blog/ntfybridge-tailscale.svg
---

Pour recevoir des notifications de Jeedom sur votre téléphone, il faut que le serveur ntfy intégré à NtfyBridge soit accessible depuis l'extérieur. La méthode classique — reverse proxy + certificat SSL + port ouvert — fonctionne mais demande de la configuration. L'assistant Tailscale intégré à NtfyBridge supprime toute cette complexité.

<!--truncate-->

## Rappel : comment fonctionne NtfyBridge {#rappel-ntfybridge}

[NtfyBridge](/docs/plugins/ntfybridge/) est un plugin Jeedom qui intègre un serveur [ntfy](https://ntfy.sh) directement dans votre installation. Il permet :

- **Jeedom → téléphone** : envoyer des alertes, photos, rapports, fichiers
- **Téléphone → Jeedom** : déclencher des commandes, poser des questions, obtenir des états
- **Chat Famille** : messagerie privée entre membres du foyer (sujet du prochain article)

Pour que tout ça fonctionne, l'application ntfy sur votre téléphone doit pouvoir joindre le serveur NtfyBridge. Quand vous êtes chez vous sur le WiFi, c'est trivial. Depuis l'extérieur, c'est là que ça se complique.

## Le problème de l'exposition publique {#probleme-exposition}

Pour exposer NtfyBridge sur internet, la solution traditionnelle demande :

1. Un reverse proxy (Apache, Nginx, Caddy)
2. Un nom de domaine
3. Un certificat SSL (Let's Encrypt)
4. Un port 443 ouvert sur le routeur
5. La maintenance de tout ça dans le temps

NtfyBridge inclut un **assistant reverse proxy** qui automatise cette configuration. Mais ça reste de la configuration réseau non-triviale, et ça expose quand même un port public.

## L'alternative : Tailscale {#alternative-tailscale}

Avec Tailscale, le serveur NtfyBridge reste **entièrement privé** — accessible uniquement depuis les appareils de votre tailnet. Votre téléphone joint le serveur via le VPN Tailscale, sans qu'aucun port ne soit ouvert au monde extérieur.

Les avantages :

- **Aucun port exposé** sur votre routeur
- **HTTPS automatique** via les certificats Tailscale Serve
- **Pas de domaine nécessaire** — l'URL est en `.ts.net`
- **Zéro maintenance** — les certificats se renouvellent seuls

## L'assistant Tailscale de NtfyBridge {#assistant-tailscale}

NtfyBridge v2 intègre un **assistant de configuration Tailscale** directement dans l'interface d'administration. La procédure se résume à :

1. Ouvrir la configuration serveur de NtfyBridge
2. Choisir le mode **"Embedded + Tailscale"**
3. Cliquer sur l'assistant — il détecte automatiquement la présence du plugin Tailscale
4. Choisir l'URL de votre Jeedom dans le tailnet
5. Sauvegarder et relancer le daemon

NtfyBridge configure alors automatiquement Tailscale Serve pour exposer le serveur ntfy en HTTPS sur votre tailnet. L'URL finale ressemble à `https://jeedom.monréseau.ts.net:2586`.

## Configuration sur le téléphone {#config-telephone}

Côté client ntfy, la configuration est identique à n'importe quel serveur — il suffit de renseigner l'URL Tailscale au lieu d'une URL publique :

```
Serveur : https://jeedom.monréseau.ts.net:2586
Utilisateur / Mot de passe : (vos identifiants NtfyBridge)
```

Tailscale doit être actif sur le téléphone pour que la connexion fonctionne. Dans la pratique, on laisse Tailscale tourner en arrière-plan — il consomme très peu de batterie avec WireGuard.

## Les deux plugins, meilleurs ensemble {#plugins-ensemble}

| Fonctionnalité | Tailscale seul | NtfyBridge seul | Les deux |
|---|---|---|---|
| Accès Jeedom distant | ✅ | — | ✅ |
| Notifications push | — | ✅ (port requis) | ✅ sans port |
| Chat Famille | — | ✅ (port requis) | ✅ privé |
| Commandes depuis mobile | — | ✅ | ✅ |
| Zéro port ouvert | ✅ | — | ✅ |

La combinaison donne une installation domotique **entièrement privée** : Jeedom n'est jamais directement exposé sur internet, les notifications transitent via un canal chiffré et privé, et votre réseau reste sous contrôle.

## Pour aller plus loin {#pour-aller-plus-loin}

- [Documentation NtfyBridge](/docs/plugins/ntfybridge/) — section "Mode Embedded + Tailscale"
- [Documentation Tailscale](/docs/plugins/tailscale/) — configuration Serve
- [Guide de démarrage rapide NtfyBridge](/docs/plugins/ntfybridge/setup)
