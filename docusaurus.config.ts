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
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
          editUrl: 'https://github.com/Zyg0m4t1k/Zyg0m4t1k.github.io/tree/main/',
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
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
