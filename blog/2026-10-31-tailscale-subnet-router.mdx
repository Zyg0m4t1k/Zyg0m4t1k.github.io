---
slug: tailscale-subnet-router-routes-annoncees
title: "Tailscale Subnet Router : tout le réseau local ou un seul appareil ?"
authors: zyg0m4t1k
tags: [tailscale, reseau, subnet-router]
description: Comprendre les routes annoncées avec Tailscale Subnet Router. Ouvrir tout le réseau local en /24 ou cibler un seul appareil en /32 — un serveur Plex, un NAS, une caméra.
image: /img/blog/tailscale-subnet-router.svg
---

Le Subnet Router est la fonction Tailscale qui permet d'atteindre des appareils de votre réseau local sans avoir à y installer Tailscale. Mais quand on configure les routes à annoncer, une question se pose : faut-il ouvrir tout le réseau ou seulement l'appareil dont on a besoin ?

<!--truncate-->

## Comment fonctionne le Subnet Router {#fonctionnement}

Sans Subnet Router, Tailscale connecte uniquement les appareils sur lesquels il est installé. Votre téléphone joint Jeedom parce que les deux ont Tailscale. Mais votre serveur Plex, votre NAS ou votre caméra IP — eux n'ont pas Tailscale.

Le Subnet Router change ça. En le configurant sur Jeedom, vous faites de Jeedom un **passage** entre votre tailnet et votre réseau local :

```
Téléphone en 4G (Tailscale actif)
          ↓  VPN chiffré
     Jeedom à la maison  ← Subnet Router
          ↓  réseau local
     Plex : 192.168.1.40
```

Depuis votre téléphone, vous ouvrez `http://192.168.1.40:32400` exactement comme si vous étiez chez vous. Le trafic transite par Jeedom de manière transparente.

## La notion de route annoncée (CIDR) {#cidr}

Une route annoncée est une plage d'adresses que Jeedom propose de rendre accessible via le tailnet. Elle s'écrit en notation **CIDR** : une adresse de réseau suivie d'un masque.

Deux cas pratiques :

| Notation | Ce qui est accessible |
|---|---|
| `192.168.1.0/24` | Tous les appareils de `192.168.1.1` à `192.168.1.254` |
| `192.168.1.40/32` | Uniquement l'appareil à l'adresse `192.168.1.40` |

Le `/24` ouvre tout votre réseau local. Le `/32` cible un seul appareil.

:::tip Connaître son réseau local
Depuis Jeedom, le plugin Tailscale détecte et affiche votre réseau local dans l'onglet **Subnet Router**. L'adresse commence généralement par `192.168.x.x` ou `10.0.x.x`.
:::

## Tout ouvrir en /24 : pour qui, pourquoi {#reseau-complet}

Annoncer `192.168.1.0/24` rend d'un coup accessible tout ce qui est sur votre réseau local : NAS, caméras, imprimante, routeur, téléviseur connecté…

**Avantages :**
- Une seule route à configurer, une fois pour toutes
- Pas besoin de se souvenir des IPs des appareils
- Idéal pour administrer son réseau depuis l'extérieur (accès à l'interface du routeur, SSH sur un Raspberry Pi, etc.)

**Inconvénients :**
- Tous les appareils autorisés du tailnet peuvent joindre toute la maison
- Si vous partagez votre tailnet avec d'autres personnes, la surface accessible est large

Ce choix convient bien à un usage **personnel** où vous êtes le seul utilisateur de votre tailnet.

## Cibler un seul appareil en /32 : l'exemple Plex {#appareil-unique}

Vous avez un serveur Plex sur `192.168.1.40` et vous voulez le rejoindre depuis l'extérieur pour streamer vos films, sans pour autant ouvrir tout votre réseau. La route `/32` est faite pour ça.

**Avantages :**
- Accès minimal : seul cet appareil est joignable
- Si vous partagez le tailnet avec quelqu'un (un ami, un membre de la famille), il peut accéder à Plex sans voir le reste de votre réseau
- Principe du moindre privilège : on n'expose que ce qui est nécessaire
- **Pas besoin d'abonnement Plex Pass** pour l'accès distant : Tailscale fait apparaître la connexion comme locale, ce qui évite le relais Plex et l'abonnement qu'il implique. Pratique aussi pour installer Plex sur une télé ou une box externe de manière ponctuelle sans payer le Pass

**Inconvénient :**
- Si vous ajoutez un deuxième appareil à partager, vous devez ajouter une deuxième route

### Configuration concrète pour Plex {#config-plex}

Dans l'onglet **Subnet Router** du plugin Tailscale :

1. Saisissez `192.168.1.40/32` dans le champ de route personnalisée (remplacez par l'IP réelle de votre Plex)
2. Cliquez sur **Ajouter** et confirmez
3. Cliquez sur **Approuver les routes** — le plugin envoie l'approbation directement via l'API Tailscale, sans passer par la console web (nécessite OAuth configuré avec les permissions `devices:core:read` et `devices:routes`)
4. Sur votre téléphone, ouvrez l'app Plex et ajoutez le serveur manuellement à l'adresse `http://192.168.1.40:32400`

:::warning IP fixe indispensable
En `/32`, vous ciblez une adresse précise. Si votre serveur Plex change d'IP (attribution DHCP aléatoire), le Subnet Router ne fonctionnera plus. Assurez-vous d'**attribuer une IP fixe** à votre Plex dans la configuration de votre box ou routeur.
:::

## Combiner plusieurs routes {#plusieurs-routes}

Rien n'empêche d'annoncer plusieurs routes ciblées. Si vous avez un Plex et un NAS à exposer :

```
192.168.1.40/32   ← serveur Plex
192.168.1.50/32   ← NAS
```

Vous ajoutez les deux routes dans le plugin. Les autres appareils du réseau restent inaccessibles depuis le tailnet.

## Le prérequis : le routage IP {#routage-ip}

Pour que Jeedom puisse transmettre le trafic entre Tailscale et le réseau local, le **routage IP** doit être activé sur la machine. Le plugin Tailscale vérifie cet état dans l'onglet Subnet Router.

Si le statut affiche une erreur, la [documentation du plugin](/docs/plugins/tailscale/administration#subnet-router) détaille les deux commandes à exécuter pour l'activer sur Debian.

## Les règles d'accès Tailscale (ACL) {#acl}

Annoncer et approuver une route ne suffit pas forcément. Tailscale applique des **règles d'accès** (ACL) qui définissent quels appareils du tailnet peuvent joindre quelles destinations.

Par défaut, les nouveaux tailnets ont une règle permissive qui autorise tout. Mais si vous avez personnalisé vos ACL, vérifiez qu'elles autorisent bien les appareils concernés à joindre les adresses que vous annoncez.

## Récapitulatif {#recapitulatif}

| Besoin | Route à annoncer |
|---|---|
| Accéder à tout le réseau local | `192.168.1.0/24` |
| Accéder à un seul serveur Plex | `192.168.1.40/32` |
| Accéder à Plex + NAS | `192.168.1.40/32` et `192.168.1.50/32` |

La règle est simple : **commencez par le /32 si vous n'avez qu'un besoin précis**, passez au /24 si vous gérez souvent plusieurs appareils depuis l'extérieur. Les deux approches fonctionnent parfaitement avec le plugin Tailscale.

La [documentation complète du Subnet Router](/docs/plugins/tailscale/administration#subnet-router) couvre toutes les étapes de configuration, ainsi que la résolution des problèmes courants.
