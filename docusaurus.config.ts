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
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  clientModules: ['./src/clientModules/imageZoom.ts'],

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    localeConfigs: {
      fr: { label: 'Français', htmlLang: 'fr-FR' },
      en: { label: 'English', htmlLang: 'en-US' },
    },
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['fr', 'en'],
        // Pages indexées
        indexDocs: true,
        indexBlog: true,
        indexPages: false,       // exclut homepage, /plugins, etc.
        docsRouteBasePath: 'docs',
        blogRouteBasePath: 'blog',
        // Résultats
        searchResultLimits: 10,
        searchResultContextMaxLength: 60,  // extrait court = moins de bruit
        // UX
        highlightSearchTermsOnTargetPage: true,
        searchBarShortcutHint: true,
        searchBarPosition: 'right',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/Zyg0m4t1k/Zyg0m4t1k.github.io/tree/master/',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 9,
          blogSidebarCount: 5,
          blogSidebarTitle: 'Articles récents',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/Zyg0m4t1k/Zyg0m4t1k.github.io/tree/master/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
		  theme: {
			customCss: require.resolve('./src/css/custom.css'),
		  },

        gtag: process.env.NODE_ENV === 'production'
          ? { trackingID: 'G-NH9FFB7GBH', anonymizeIP: true }
          : undefined,

       sitemap: {
        changefreq: 'weekly',
        priority: 0.5,
        filename: 'sitemap.xml',
        createSitemapItems: async (params) => {
          const { defaultCreateSitemapItems, ...rest } = params;
          const items = await defaultCreateSitemapItems(rest);
          return items.map((item) => {
            if (item.url.includes('/blog/') || item.url.includes('/docs/')) {
              return { ...item, priority: 0.8 };
            }
            return item;
          });
        },
      },     
      
		
      
      } satisfies Preset.Options,
    ],
  ],



themeConfig: {
  colorMode: {
    defaultMode: 'dark',
    disableSwitch: false,
    respectPrefersColorScheme: false,
  },
  metadata: [
    {
      name: 'keywords',
      content:
        'plugin jeedom, jeedom matter, jeedom tailscale, jeedom ntfybridge, jeedom jeebridge, jeedom switchbot, jeedom icloud, jeedom ics, jeedom notifications, domotique, home automation, matter bridge, alexa jeedom, apple home jeedom',
    },
    { property: 'og:site_name', content: 'Zyg0m4t1k — Jeedom Plugins' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@Zyg0m4t1k' },
  ],

  navbar: {
    title: 'Zyg0m4t1k',
    logo: { alt: 'Logo', src: 'img/logo.svg' },
    items: [
      { to: '/', label: 'Accueil', position: 'left' },
      { to: '/plugins', label: 'Plugins', position: 'left' },
      { to: '/docs/intro', label: 'Docs', position: 'left' },
      { to: '/blog', label: 'Blog', position: 'left' },
      {
        href: 'https://github.com/Zyg0m4t1k',
        label: 'GitHub',
        position: 'right',
      },
      { type: 'localeDropdown', position: 'right' },
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
