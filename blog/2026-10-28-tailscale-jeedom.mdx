---
slug: tailscale-jeedom-acces-distant
title: "Jeedom accessible de partout : pourquoi Tailscale change tout"
authors: zyg0m4t1k
tags: [tailscale, securite]
description: Fini les galères de port forwarding et de DynDNS. Tailscale offre un accès distant à Jeedom simple, sécurisé et sans ouvrir un seul port sur votre routeur.
image: /img/blog/tailscale-jeedom.svg
---

Accéder à son Jeedom depuis l'extérieur a longtemps été l'un des sujets les plus épineux de la domotique maison. Port forwarding, DynDNS, certificats SSL, règles de pare-feu… autant d'obstacles qui rebutent les non-initiés et font perdre du temps aux autres. Tailscale résout tout ça d'un coup.

<!--truncate-->

## Le problème de l'accès distant classique {#probleme-acces-distant}

Pour joindre son Jeedom depuis l'extérieur, la méthode traditionnelle impose plusieurs étapes :

- **Ouvrir un port** sur le routeur (souvent le 80 ou le 443) et le rediriger vers Jeedom
- **Configurer un DNS dynamique** si l'opérateur change régulièrement l'IP publique
- **Mettre en place HTTPS** pour ne pas envoyer son mot de passe en clair
- **Maintenir tout ça** quand le routeur change, quand l'IP change, quand le certificat expire

En plus, chaque port ouvert est une surface d'attaque supplémentaire exposée à internet.

## Tailscale : le VPN qui ne ressemble pas à un VPN {#tailscale-vpn}

[Tailscale](https://tailscale.com) est un réseau privé basé sur **WireGuard**, le protocole VPN le plus moderne et le plus rapide disponible. Ce qui le distingue :

- **Zéro configuration réseau** : aucun port à ouvrir, aucune règle de routeur à toucher
- **Connexion P2P** : les appareils se connectent directement entre eux dès que possible, sans passer par un serveur central
- **HTTPS automatique** : Tailscale peut générer des certificats pour vos équipements via sa feature *Serve*
- **MagicDNS** : chaque appareil du réseau Tailscale (le *tailnet*) est accessible par son nom, pas son IP

Concrètement : vous installez Tailscale sur votre téléphone et sur le serveur Jeedom. Les deux rejoignent votre tailnet. Depuis votre téléphone, peu importe où vous êtes dans le monde, vous atteignez Jeedom comme s'il était sur votre réseau local.

## Le plugin Tailscale pour Jeedom {#plugin-tailscale}

Le [plugin Tailscale](/docs/plugins/tailscale/) va plus loin que la simple connectivité. Il intègre Jeedom au cœur du tailnet :

### Supervision des équipements {#supervision}

Depuis Jeedom, vous voyez en temps réel l'état de tous vos appareils Tailscale : en ligne ou hors ligne, dernière activité, adresse IP, nom d'hôte, système d'exploitation. C'est utile pour surveiller des Raspberry Pi distants, des NAS, des serveurs dans d'autres locaux.

### Subnet Router {#subnet-router}

La feature **Subnet Router** permet à Jeedom d'annoncer tout ou partie de votre réseau local au tailnet. Résultat : depuis votre téléphone en 4G, vous accédez directement aux appareils de votre réseau domestique (caméras IP, NAS, imprimante…) sans VPN dédié pour chacun.

Tout le réseau en `/24` ou un seul appareil en `/32` ? [L'article dédié au Subnet Router](/blog/tailscale-subnet-router-routes-annoncees) détaille les deux approches avec un exemple concret autour d'un serveur Plex.

### Serve : HTTPS privé automatique {#serve}

**Tailscale Serve** expose Jeedom en HTTPS sur votre tailnet avec un certificat automatique. URL du type `https://jeedom.monréseau.ts.net` — sans rien toucher à votre routeur, sans Let's Encrypt à gérer.

### Funnel : exposition publique contrôlée {#funnel}

Besoin d'un accès public (webhook, partage temporaire) ? **Tailscale Funnel** expose un service sur internet via les relais Tailscale, toujours sans ouvrir de port.

## Pourquoi c'est mieux {#pourquoi-mieux}

| Méthode classique | Avec Tailscale |
|---|---|
| Port ouvert sur le routeur | Aucun port ouvert |
| DynDNS à maintenir | MagicDNS automatique |
| Certificat SSL à renouveler | Certificat géré par Tailscale |
| Surface d'attaque exposée | Réseau privé chiffré |
| Configuration complexe | Installation en 10 minutes |

## Pour commencer {#pour-commencer}

1. Créez un compte sur [tailscale.com](https://tailscale.com) (gratuit pour usage personnel)
2. Installez le [plugin Tailscale](https://market.jeedom.com/index.php?v=d&p=market_display&id=4681) depuis le Market Jeedom — il se charge d'installer Tailscale sur votre serveur
3. Authentifiez le plugin avec un token OAuth
4. Installez Tailscale sur votre téléphone

La [documentation complète du plugin](/docs/plugins/tailscale/) détaille chaque étape ainsi que la configuration avancée (Subnet Router, Serve, Funnel, DNS).

---

Tailscale est aujourd'hui l'une des briques les plus solides qu'on puisse ajouter à une installation domotique. Avec le plugin Tailscale, il offre un niveau de confort et de sécurité difficile à atteindre autrement.
