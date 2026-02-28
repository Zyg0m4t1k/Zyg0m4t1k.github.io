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
      "page": "/docs/plugins/ioscloud/"
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
    "status": "beta",
    "routes": {
      "page": "/docs/plugins/ics/"
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
    "status": "dev",
    "routes": {
      "page": "/docs/plugins/switchbot/"
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
	"badges": ["php7.2", "jeedom4.5"],
    "routes": {
      "page": "/docs/plugins/groupe/"
    },
    "links": {
      "github": "https://github.com/Zyg0m4t1k/",
      "market": null
    }
   },
   {
    "id": "todo",
    "name": "Todo List",
    "description": "Plugin pour créer des todolists ",
    "icon": "todo_icon.png",
    "status": "stable",
	"badges": ["php7.2", "jeedom4.5"],
    "routes": {
      "page": "/docs/plugins/todo/"
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
    "status": "dev",
	"badges": ["php8.2", "jeedom4.5"],
    "routes": {
      "page": "/docs/plugins/matter/"
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
