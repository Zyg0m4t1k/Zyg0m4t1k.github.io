---
slug: librespeed-monitoring-reseau-jeedom
title: "LibreSpeed : bien plus qu'un speedtest dans Jeedom"
authors: zyg0m4t1k
tags: [librespeed, reseau, monitoring]
description: Le plugin LibreSpeed va bien au-delà du simple test de débit. Découvrez comment il transforme Jeedom en véritable outil de monitoring réseau — connexion internet, liaisons LAN, VPN et multi-sites.
image: /img/blog/librespeed-monitoring.svg
---

Tester son débit internet, ça tout le monde sait faire. Ce qui change avec le plugin LibreSpeed, c'est la couche **monitoring** qui vient se greffer dessus : historisation automatique, alertes sur dégradation, et surtout la capacité de mesurer les liaisons **entre vos propres machines**, pas seulement vers internet.

<!--truncate-->

## Speedtest ou monitoring réseau ? Les deux. {#speedtest-ou-monitoring}

La question revient souvent : pourquoi LibreSpeed quand le plugin Speedtest existe déjà ?

La réponse tient en deux points.

D'abord, LibreSpeed CLI est **open source de bout en bout**. Aucune inscription, aucun compte, aucune limite de quota — et la possibilité de pointer vers vos propres serveurs de test. C'est important dès qu'on cherche à mesurer des performances en dehors d'internet.

Ensuite, et c'est là l'essentiel, LibreSpeed introduit un deuxième type d'équipement entièrement absent du plugin Speedtest : les **liaisons réseau**. Il ne s'agit plus de mesurer votre débit vers un datacenter distant, mais de mesurer les performances **entre deux machines de votre infrastructure** — box Jeedom vers NAS, site A vers site B, Jeedom vers Raspberry Pi dans le garage.

## Mesurer internet : ce que le plugin fait différemment {#mesurer-internet}

Sur la partie speed test classique, LibreSpeed se distingue surtout par sa **flexibilité côté serveurs**.

Par défaut, le plugin utilise les serveurs publics LibreSpeed répartis dans le monde. Mais si votre Jeedom est dans un datacenter, sur un VPS, ou derrière un lien MPLS, vous pouvez pointer vers **votre propre serveur de test** hébergé où vous voulez. Un conteneur Docker suffit :

```bash
docker run -d \
  --name librespeed \
  --restart unless-stopped \
  -p 8088:8080 \
  ghcr.io/librespeed/speedtest:latest
```

L'équipement speed test remonte six métriques : download, upload, ping, jitter, perte de paquets et un **score global sur 10**. Ce score est la clé du monitoring automatisé — on y revient plus bas.

## La vraie nouveauté : les liaisons réseau {#liaisons-reseau}

C'est la fonctionnalité qui distingue LibreSpeed de tout ce qui existait dans Jeedom côté monitoring réseau.

Un équipement **Liaison réseau** mesure les performances **point à point entre deux machines**. Chaque machine joue un rôle : client (celui qui teste) ou serveur (celui qui reçoit le test). Les deux peuvent avoir les deux rôles pour des tests bidirectionnels.

### Ce que ça permet concrètement {#cas-usage}

**Surveiller le lien LAN entre Jeedom et un NAS**

Votre NAS stocke les sauvegardes Jeedom et les enregistrements de caméras. Si le débit entre Jeedom et le NAS chute (câble défectueux, switch saturé, négociation à 100 Mbit/s au lieu de 1 Gbit/s), les transferts ralentissent sans que personne ne s'en aperçoive. Une liaison réseau planifiée chaque nuit détecte le problème avant qu'il ne devienne critique.

**Surveiller un lien VPN inter-sites**

Vous avez un deuxième site (maison de vacances, bureau) connecté via VPN. La bande passante disponible détermine ce qui est possible : streaming, synchronisation de fichiers, accès aux caméras. Une liaison réseau entre les deux sites donne une mesure objective du lien, au-delà du simple "ça marche / ça marche pas".

**Vérifier la bande passante vers un Raspberry Pi distant**

Jeedom pilote un Raspberry Pi dans le garage (porte, éclairage, sonde de température). Le lien Wi-Fi entre les deux est-il suffisant ? La liaison réseau répond avec des chiffres.

### Mesures par direction et protocole {#mesures}

Pour chaque paire de machines configurée, le plugin crée des commandes pour chaque combinaison active :

- **A→B** et **B→A** (si bidirectionnel activé)
- **IPv4** et **IPv6** (si les deux cibles ont une adresse IPv6 globale)

Soit jusqu'à 16 métriques numériques (download, upload, ping, jitter × 4 combinaisons), en plus des statuts des cibles et d'une commande de test complet.

## Mettre en place le monitoring automatique {#monitoring-automatique}

C'est là que Jeedom prend tout son sens. Les commandes LibreSpeed s'utilisent comme n'importe quelle commande dans les scénarios.

### Alerte sur dégradation internet {#alerte-internet}

Le score global est l'indicateur le plus pratique. Un score sous 5/10 signale une connexion sérieusement dégradée.

> **Scénario** : si **Score** < 5, envoyer une notification "Connexion internet dégradée — score : #[Réseau][LibreSpeed][Score]#/10"

Vous pouvez affiner selon vos usages. Si vous faites beaucoup de visioconférence :

> Si **Upload** < 5 OU **Ping** > 50, notifier "Conditions mauvaises pour la visio"

### Alerte sur un lien réseau interne {#alerte-lien-interne}

> **Scénario** : si **A→B IPv4 Download** < 100 OU **A→B IPv4 Ping** > 10, notifier "Lien vers le NAS dégradé"

### Historisation et graphiques {#historisation}

Toutes les commandes numériques peuvent être historisées. Après quelques semaines de données, les graphiques d'historique Jeedom révèlent des patterns impossibles à voir autrement :

- Chutes de débit récurrentes à certaines heures (trafic de voisinage sur la fibre)
- Dégradation progressive d'un lien Wi-Fi (interférence croissante)
- Impact d'une mise à jour firmware sur les performances du switch

## LibreSpeed vs Speedtest : lequel choisir ? {#comparaison}

Les deux plugins coexistent et ne font pas exactement la même chose.

| | Speedtest | LibreSpeed |
|---|---|---|
| **Serveurs** | speedtest.net | Publics LibreSpeed ou auto-hébergés |
| **Sans inscription** | Non (quota) | Oui |
| **Serveur personnalisé** | Non | Oui (LAN, VPN) |
| **Liaisons réseau** | Non | Oui |
| **Dépendances** | Python + venv | Binaire Go unique |
| **IPv6** | Limité | Natif |

Si vous avez uniquement besoin de surveiller votre connexion internet vers des serveurs publics, les deux font le travail. Si vous voulez aller plus loin — serveur interne, mesures LAN, infrastructure multi-sites — LibreSpeed est le bon choix.

## Pour commencer {#pour-commencer}

1. Installez le [plugin LibreSpeed](https://market.jeedom.com/index.php?v=d&p=market_display&id=4695) depuis le Market
2. Installez les dépendances (un binaire Go, aucun Python requis)
3. Créez un équipement **Speed Test** pour commencer avec votre connexion internet
4. Activez le cron (toutes les 4 heures est un bon rythme pour débuter)
5. Historisez les commandes Download, Upload, Ping et Score
6. Ajoutez un équipement **Liaison réseau** si vous avez des machines à surveiller

La [documentation complète du plugin](/docs/plugins/librespeed/) détaille l'installation des composants sur les cibles distantes, la configuration des serveurs personnalisés et tous les cas d'usage avancés.

---

Le plugin LibreSpeed est disponible en beta sur le Market. C'est le bon moment pour le tester et remonter vos retours sur le forum Community.
