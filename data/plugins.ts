// Catalogue des plugins Zyg0m4t1k
// Source unique utilisée par les pages vitrines
// (Remplace plugins.yml pour éviter un loader YAML Webpack)

export type PluginStatus = 'stable' | 'beta' | 'dev' | string;

export interface PluginLinks {
  github?: string;
  market?: string | null;
}

export interface PluginRoutes {
  page: string; // ex: /plugins/ioscloud
}

export interface PluginItem {
  id: string;        // slug (ex: ioscloud)
  name: string;      // affichage (ex: iOSCloud)
  description: string; // résumé 1-2 lignes
  icon: string;      // fichier dans static/img/plugins/
  status?: PluginStatus;
  featured?: boolean; // mis en avant sur la home
  badges?: string[];
  ribbon?: string;   // bandeau coin haut-droit (ex: "Nouveau", "Màj", "Beta")
  routes: PluginRoutes;
  links?: PluginLinks;
}

const plugins: PluginItem[] = [
  // --- À la une (ordre = gauche → droite) ---
  {
    "id": "lumina",
    "name": "Lumina",
    "description": "Lumina centralise et pilote toutes les lumières de votre installation Jeedom, quel que soit le protocole utilisé (Hue, Zigbee, Z-Wave, Matter, Wi-Fi…).",
    "icon": "lumina_icon.png",
    "featured": true,
    "ribbon": "Nouveau",
    "badges": ["Jeedom 4.4+", "dev", "os 11+", "php 7.4/8.x"],
    "routes": {
      "page": "/docs/plugins/lumina/"
    },
    "links": {
      "github": "https://github.com/Zyg0m4t1k/",
      "market": null
    }
  },
  {
    "id": "matter",
    "name": "Pont Matter",
    "description": "plugin qui permet d’intégrer et de piloter des appareils compatibles avec le standard domotique universel Matter",
    "icon": "matter_icon.png",
    "featured": true,
    "ribbon": "Nouveau",
    "badges": ["Jeedom 4.4+", "beta", "os 11+", "php 7.4/8.x", "Node.js"],
    "routes": {
      "page": "/docs/plugins/matter/"
    },
    "links": {
      "github": "https://github.com/Zyg0m4t1k/",
      "market": "https://market.jeedom.com/index.php?v=d&p=market_display&id=4634"
    }
  },
  {
    "id": "telejee",
    "name": "Telejee",
    "description": "Pilotez vos téléviseurs et appareils multimédia directement depuis Jeedom via réseau local — commandes, applications, volume et scénarios.",
    "icon": "telejee_icon.png",
    "featured": true,
    "ribbon": "Nouveau",
    "badges": ["Jeedom 4.4+", "dev", "os 11+", "php 7.4/8.x"],
    "routes": {
      "page": "/docs/plugins/telejee/"
    },
    "links": {
      "github": "https://github.com/Zyg0m4t1k/",
      "market": null
    }
  },
  // --- Reste du catalogue ---
  {
    "id": "jeeloc",
    "name": "Jeeloc",
    "description": "Centralisez plusieurs localisations dans un widget Jeedom avec carte interactive OpenStreetMap, géocodage automatique et calcul de distances.",
    "icon": "jeeloc_icon.png",
    "badges": ["Jeedom 4.4+", "beta", "os 11+", "php 7.4/8.x"],
    "routes": {
      "page": "/docs/plugins/jeeloc/"
    },
    "links": {
      "github": "https://github.com/Zyg0m4t1k/",
      "market": "https://market.jeedom.com/index.php?v=d&p=market_display&id=3404"
    }
  },
  {
    "id": "mystr0m",
    "name": "Smart Home",
    "description": "Intégration complète des équipements myStrom et Dingz dans Jeedom — pilotage local, sans cloud obligatoire.",
    "icon": "mystr0m_icon.png",
    "ribbon": "Nouveau",
    "badges": ["Jeedom 4.4+", "beta", "os 11+", "php 7.4/8.x"],
    "routes": {
      "page": "/docs/plugins/mystr0m/"
    },
    "links": {
      "github": "https://github.com/Zyg0m4t1k/",
      "market": "https://market.jeedom.com/index.php?v=d&p=market_display&id=3954"
    }
  },
  {
    "id": "ioscloud",
    "name": "iOSCloud",
    "description": "Intégration iCloud / Find My : synchronisation des appareils, localisation, état batterie et automatisations Jeedom.",
    "icon": "ioscloud_icon.png",
    "badges": ["Jeedom 4.4+", "beta", "os 11+", "php 7.4/8.x", "python"],
    "routes": {
      "page": "/docs/plugins/ioscloud/"
    },
    "links": {
      "github": "https://github.com/Zyg0m4t1k/ioscloud",
      "market": "https://market.jeedom.com/index.php?v=d&p=market_display&id=3131"
    }
  },
  {
    "id": "ics",
    "name": "ICS",
    "description": "Transformez votre agenda Google, iCloud ou CalDAV en moteur domotique pour Jeedom : déclenchez automatiquement des actions et des scénarios à partir de vos événements de calendrier.",
    "icon": "ics_icon.png",
    "badges": ["Jeedom 4.4+", "stable", "os 11+", "php 7.4/8.x"],
    "routes": {
      "page": "/docs/plugins/ics/"
    },
    "links": {
      "github": "https://github.com/Zyg0m4t1k/ics",
      "market": "https://market.jeedom.com/index.php?v=d&p=market_display&id=3108"
    }
  },
  {
    "id": "switchbot",
    "name": "SwitchBot",
    "description": "Intégration SwitchBot via API : états, commandes, synchronisation automatique des équipements.",
    "icon": "switchbot_icon.png",
    "badges": ["Jeedom 4.4+", "stable", "os 11+", "php 7.4/8.x", "python"],
    "routes": {
      "page": "/docs/plugins/switchbot/"
    },
    "links": {
      "github": "https://github.com/Zyg0m4t1k/switchbot",
      "market": "https://market.jeedom.com/index.php?v=d&p=market_display&id=3892"
    }
  },
  {
    "id": "groupe",
    "name": "Groupe",
    "description": "Plugin permettant la création d’un widget avec l’état d’un groupe",
    "icon": "groupe_icon.png",
    "badges": ["Jeedom 4.4+", "stable", "os 11+", "php 7.4/8.x"],
    "routes": {
      "page": "/docs/plugins/groupe/"
    },
    "links": {
      "github": "https://github.com/Zyg0m4t1k/",
      "market": "https://market.jeedom.com/index.php?v=d&p=market_display&id=2854"
    }
  },
  {
    "id": "todo",
    "name": "Todo List",
    "description": "Plugin pour créer des todolists ",
    "icon": "todo_icon.png",
    "badges": ["Jeedom 4.4+", "stable", "os 11+", "php 7.4/8.x"],
    "routes": {
      "page": "/docs/plugins/todo/"
    },
    "links": {
      "github": "https://github.com/Zyg0m4t1k/",
      "market": "https://market.jeedom.com/index.php?v=d&p=market_display&id=1976"
    }
  },
  {
    "id": "TaskLauncher",
    "name": "Task Launcher",
    "description": "Plugin permettant de créer des équipements type réveil, des horloges , des évènements et de lancer des actions,scénarios personnalisables",
    "icon": "tasklauncher_icon.png",
    "badges": ["Jeedom 4.4+", "stable", "os 11+", "php 7.4/8.x"],
    "routes": {
      "page": "/docs/plugins/TaskLauncher/"
    },
    "links": {
      "github": "https://github.com/Zyg0m4t1k/",
      "market": "https://market.jeedom.com/index.php?v=d&p=market_display&id=1314"
    }
  },
  {
    "id": "telco",
    "name": "Telecommandes",
    "description": "Ce plugin permet de créer des télécommandes virtuelles et d’assigner des actions (unique,message,scénario...) aux boutons.",
    "icon": "telco_icon.png",
    "badges": ["Jeedom 4.4+", "stable", "os 11+", "php 7.4/8.x"],
    "routes": {
      "page": "/docs/plugins/telco/"
    },
    "links": {
      "github": "https://github.com/Zyg0m4t1k/",
      "market": null
    }
  }
];

export default plugins;

export function getPluginById(id: string): PluginItem | undefined {
  return plugins.find(p => p.id === id);
}
