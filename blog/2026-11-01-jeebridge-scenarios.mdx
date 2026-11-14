---
slug: jeebridge-scenarios-alexa-apple-home
title: "JeeBridge : pilotez vos scénarios Jeedom depuis Alexa, Apple Home ou Google Home"
authors: zyg0m4t1k
tags: [jeebridge, tailscale]
description: JeeBridge expose vos équipements Jeedom vers Alexa, Apple Home et Google Home via Matter. Mais son vrai pouvoir est ailleurs — transformer n'importe quel scénario complexe en un simple bouton vocal.
image: /img/blog/jeebridge-scenarios.svg
---

Alexa, Siri, Google — ces assistants sont excellents pour allumer une lampe ou baisser un volet. Mais face à un scénario Jeedom qui enchaîne dix actions, interroge des capteurs et conditionne ses résultats ? Ils ne savent pas faire. JeeBridge résout exactement ça.

<!--truncate-->

## Ce que fait JeeBridge {#ce-que-fait-jeebridge}

JeeBridge est un plugin Jeedom qui installe et pilote [MatterBridge](https://github.com/Luligu/matterbridge) — un pont Matter open source. Via le protocole **Matter**, vos équipements Jeedom apparaissent nativement dans Apple Home, Alexa et Google Home, comme s'ils étaient des objets connectés directement appairés.

Pas de skill tiers à activer, pas de compte cloud intermédiaire, pas de dépendance à un service externe. Le tout tourne en local, dans un conteneur Docker sur votre serveur.

## Exposer ses équipements, c'est bien. Déclencher ses scénarios, c'est mieux {#custom-devices}

Exposer une lampe ou un volet à Apple Home est utile. Mais ce n'est que la surface.

Le vrai atout de JeeBridge, c'est le **mode Custom** : vous créez un interrupteur virtuel ON/OFF dans MatterBridge, et vous y attachez des actions Jeedom arbitraires — scénarios, commandes, séquences entières. Alexa, Siri ou Google Home voient un simple bouton. Derrière, Jeedom fait ce qu'il sait faire de mieux.

```
"Dis Alexa, active le mode cinéma"
              ↓
    Interrupteur virtuel ON
              ↓
    Jeedom exécute le scénario :
    ├─ Ferme les volets du salon
    ├─ Passe les lumières en ambiance rouge 10%
    ├─ Allume la télé sur HDMI 1
    ├─ Lance le mode "Ne pas déranger"
    └─ Coupe la musique dans les autres pièces
```

Du côté de l'assistant vocal, vous n'avez dit que trois mots.

## Exemples de scénarios à déléguer {#exemples}

### Mode Cinéma {#mode-cinema}

Un scénario classique qui combine lumières, volets et équipements multimédia. Sans JeeBridge, il faut ouvrir l'application Jeedom ou passer par un widget. Avec JeeBridge :

- ON → volets fermés, lumières tamisées, télé allumée sur le bon input, ampli réglé au bon volume
- OFF → lumières normales, volets remontés, télé éteinte

### Bonne nuit {#bonne-nuit}

Le scénario du soir cumule souvent une dizaine d'actions : vérification des ouvrants, extinction des lumières pièce par pièce, réglage du thermostat en mode nuit, activation de l'alarme périmétrique, coupure des prises inutiles.

Un seul mot à Siri depuis le lit : *"Bonne nuit"*.

### Je pars {#je-pars}

Extinction générale, mode économie sur le chauffage, vérification que la porte de garage est fermée, activation de la simulation de présence si besoin. Depuis Apple Home ou Google Home, ça devient un raccourci sur l'écran d'accueil ou une automatisation sur la géolocalisation.

### Réveil progressif {#reveil}

Montée progressive des lumières, démarrage de la cafetière, désactivation de l'alarme, ouverture des volets de la chambre selon l'heure de lever paramétrée la veille. Tout ça déclenché par un simple *"Alexa, bonjour"* ou via une automatisation Apple Home à heure fixe.

## L'intérêt face à une automatisation native {#interet}

Apple Home, Alexa et Google Home proposent leurs propres automatisations. Mais elles restent limitées aux équipements qu'ils connaissent, sans accès aux capteurs Jeedom, sans logique conditionnelle avancée, sans la puissance des blocs Jeedom.

Avec JeeBridge, vous gardez **toute la logique dans Jeedom** — conditions, délais, boucles, variables, appels API — et vous n'exposez aux assistants qu'un bouton ON/OFF propre. Le meilleur des deux mondes : la fluidité des assistants vocaux, la puissance de Jeedom.

| Automatisation native | Avec JeeBridge + Jeedom |
|---|---|
| Limitée aux équipements Matter/Zigbee | Accès à tout Jeedom |
| Logique conditionnelle basique | Scénarios complets, boucles, variables |
| Pas d'accès aux capteurs Jeedom | Capteurs, historiques, états de présence |
| Dépendance au cloud du fabricant | 100 % local |

## Compatibilité {#compatibilite}

JeeBridge fonctionne avec :

- **Apple Home** (iOS 16.2+ / HomePod)
- **Alexa** (Echo avec firmware récent)
- **Google Home**

Le commissionnement se fait en scannant un QR code depuis la page dédiée du plugin — une seule fois par contrôleur.

## Prérequis {#prerequis}

- Jeedom sur **Debian 12** minimum
- **Docker** installé sur le système (le plugin [Docker Management](https://market.jeedom.com/index.php?v=d&p=market_display&id=4833) peut l'installer)
- Le plugin [JeeBridge](/docs/plugins/jeebridge/) installé depuis le Market

:::tip Premiers pas
La [documentation du plugin](/docs/plugins/jeebridge/) détaille l'installation pas à pas, le commissionnement et la création des équipements Custom.
:::

---

La domotique à la voix ne devrait pas vous forcer à simplifier vos scénarios. JeeBridge fait le pont entre la puissance de Jeedom et la simplicité des assistants — sans compromis des deux côtés.
