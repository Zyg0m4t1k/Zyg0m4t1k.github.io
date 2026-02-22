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
  routes: PluginRoutes;
  links?: PluginLinks;
}

const plugins: PluginItem[] = [
  {
    "id": "ioscloud",
    "name": "iOSCloud",
    "description": "Intégration iCloud / Find My : synchronisation des appareils, localisation, état batterie et automatisations Jeedom.",
    "icon": "ioscloud_icon.png",
    "status": "beta",
    "routes": {
      "page": "/plugins/ioscloud"
    },
    "links": {
      "github": "https://github.com/Zyg0m4t1k/ioscloud",
      "market": null
    }
  },
  {
    "id": "ics",
    "name": "ICS",
    "description": "Calendriers ICS avancés : déclencheurs, regex, filtrage d’événements et automatisations basées sur le temps.",
    "icon": "ics_icon.png",
    "status": "stable",
    "routes": {
      "page": "/plugins/ics"
    },
    "links": {
      "github": "https://github.com/Zyg0m4t1k/ics",
      "market": null
    }
  },
  {
    "id": "switchbot",
    "name": "SwitchBot",
    "description": "Intégration SwitchBot via API : états, commandes, synchronisation automatique des équipements.",
    "icon": "switchbot_icon.png",
    "status": "beta",
    "routes": {
      "page": "/plugins/switchbot"
    },
    "links": {
      "github": "https://github.com/Zyg0m4t1k/switchbot",
      "market": null
    }
  },
   {
    "id": "groupe",
    "name": "Groupe",
    "description": "Plugin permettant la création d'un widget avec l'état d'un groupe",
    "icon": "groupe_icon.png",
    "status": "stable",
    "routes": {
      "page": "/plugins/groupe"
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
