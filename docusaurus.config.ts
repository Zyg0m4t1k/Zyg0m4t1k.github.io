import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Zyg0m4t1k — Jeedom Plugins',
  tagline: 'Docs & ressources pour mes plugins Jeedom',
  favicon: 'img/favicon.ico',

  // GitHub Pages (user site)
  url: 'https://zyg0m4t1k.github.io',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'Zyg0m4t1k',
  projectName: 'Zyg0m4t1k.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

	i18n: {
	  defaultLocale: 'fr',
	  locales: ['fr', 'en'],
	  localeConfigs: {
		fr: { label: 'Français' },
		en: { label: 'English' },
	  },
	},

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/Zyg0m4t1k/Zyg0m4t1k.github.io/tree/master/',
        },
        blog: false,
		  theme: {
			customCss: require.resolve('./src/css/custom.css'),
		  },
      
      gtag: {
        trackingID: 'G-NH9FFB7GBH', // <-- mets ton vrai ID ici
        anonymizeIP: true,
      },	
       sitemap: {
        changefreq: 'weekly',
        priority: 0.5,
        filename: 'sitemap.xml',
      },     
      
		
      
      } satisfies Preset.Options,
    ],
  ],



themeConfig: {
  metadata: [
    {
      name: 'keywords',
      content:
        'plugin jeedom, jeedom matter, jeedom switchbot, jeedom icloud, jeedom ics, jeedom todo, domotique',
    },
  ],

  navbar: {
    title: 'Zyg0m4t1k',
    logo: { alt: 'Logo', src: 'img/logo.svg' },
    items: [
      { to: '/', label: 'Accueil', position: 'left' },
      { to: '/plugins', label: 'Plugins', position: 'left' },
      { to: '/docs/intro', label: 'Docs', position: 'left' },
      { type: 'localeDropdown', position: 'right' },
      {
        href: 'https://github.com/Zyg0m4t1k',
        label: 'GitHub',
        position: 'right',
      },
    ],
  },

  footer: {
    style: 'dark',
    links: [
      {
        title: 'Plugins',
        items: [
          { label: 'Catalogue', to: '/plugins' },
          { label: 'Docs', to: '/docs/intro' },
        ],
      },
      {
        title: 'Communauté',
        items: [
          { label: 'Jeedom', href: 'https://www.jeedom.com' },
          { label: 'Forum Jeedom', href: 'https://community.jeedom.com' },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Zyg0m4t1k`,
  },

  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
} satisfies Preset.ThemeConfig,
};

export default config;
