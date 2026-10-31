export type BlogPostData = {
  id: string;
  permalink: string;
  title: string;
  description: string;
  formattedDate: string;
  readingTime: number;
  tags: { label: string; permalink: string }[];
  image?: string;
  authors: { name: string; imageURL?: string }[];
};

const blogPosts: BlogPostData[] = [
  {
    id: 'librespeed-monitoring-reseau-jeedom',
    permalink: '/blog/librespeed-monitoring-reseau-jeedom',
    title: 'LibreSpeed : bien plus qu\'un speedtest dans Jeedom',
    description:
      'Le plugin LibreSpeed va bien au-delà du simple test de débit. Découvrez comment il transforme Jeedom en véritable outil de monitoring réseau — connexion internet, liaisons LAN, VPN et multi-sites.',
    formattedDate: '2 novembre 2026',
    readingTime: 5,
    tags: [
      { label: 'librespeed', permalink: '/librespeed' },
      { label: 'reseau', permalink: '/reseau' },
      { label: 'monitoring', permalink: '/monitoring' },
    ],
    image: '/img/blog/librespeed-monitoring.svg',
    authors: [{ name: 'Zyg0m4t1k', imageURL: 'https://github.com/Zyg0m4t1k.png' }],
  },
  {
    id: 'jeebridge-scenarios-alexa-apple-home',
    permalink: '/blog/jeebridge-scenarios-alexa-apple-home',
    title: 'JeeBridge : pilotez vos scénarios Jeedom depuis Alexa, Apple Home ou Google Home',
    description:
      'JeeBridge expose vos équipements Jeedom vers Alexa, Apple Home et Google Home via Matter. Mais son vrai pouvoir est ailleurs — transformer n\'importe quel scénario complexe en un simple bouton vocal.',
    formattedDate: '1 novembre 2026',
    readingTime: 4,
    tags: [
      { label: 'jeebridge', permalink: '/jeebridge' },
    ],
    image: '/img/blog/jeebridge-scenarios.svg',
    authors: [{ name: 'Zyg0m4t1k', imageURL: 'https://github.com/Zyg0m4t1k.png' }],
  },
  {
    id: 'tailscale-jeedom-acces-distant',
    permalink: '/blog/tailscale-jeedom-acces-distant',
    title: 'Jeedom accessible de partout : pourquoi Tailscale change tout',
    description:
      'Fini les galères de port forwarding et de DynDNS. Tailscale offre un accès distant à Jeedom simple, sécurisé et sans ouvrir un seul port sur votre routeur.',
    formattedDate: '28 octobre 2026',
    readingTime: 4,
    tags: [
      { label: 'tailscale', permalink: '/tailscale' },
    ],
    image: '/img/blog/tailscale-jeedom.svg',
    authors: [{ name: 'Zyg0m4t1k', imageURL: 'https://github.com/Zyg0m4t1k.png' }],
  },
  {
    id: 'ntfybridge-tailscale-notifications-sans-port',
    permalink: '/blog/ntfybridge-tailscale-notifications-sans-port',
    title: 'NtfyBridge + Tailscale : notifications Jeedom sans ouvrir un seul port',
    description:
      "NtfyBridge intègre nativement un assistant Tailscale qui configure tout automatiquement. Résultat : votre serveur ntfy reste privé, aucun port ouvert, HTTPS gratuit.",
    formattedDate: '29 octobre 2026',
    readingTime: 5,
    tags: [
      { label: 'ntfybridge', permalink: '/ntfybridge' },
      { label: 'tailscale', permalink: '/tailscale' },
      { label: 'notifications', permalink: '/notifications' },
    ],
    image: '/img/blog/ntfybridge-tailscale.svg',
    authors: [{ name: 'Zyg0m4t1k', imageURL: 'https://github.com/Zyg0m4t1k.png' }],
  },
  {
    id: 'tailscale-subnet-router-routes-annoncees',
    permalink: '/blog/tailscale-subnet-router-routes-annoncees',
    title: 'Tailscale Subnet Router : tout le réseau local ou un seul appareil ?',
    description:
      'Comprendre les routes annoncées avec Tailscale Subnet Router. Ouvrir tout le réseau local en /24 ou cibler un seul appareil en /32 — un serveur Plex, un NAS, une caméra.',
    formattedDate: '31 octobre 2026',
    readingTime: 4,
    tags: [
      { label: 'tailscale', permalink: '/tailscale' },
      { label: 'reseau', permalink: '/reseau' },
    ],
    image: '/img/blog/tailscale-subnet-router.svg',
    authors: [{ name: 'Zyg0m4t1k', imageURL: 'https://github.com/Zyg0m4t1k.png' }],
  },
  {
    id: 'ntfybridge-chat-famille',
    permalink: '/blog/ntfybridge-chat-famille',
    title: 'Chat Famille : la messagerie privée intégrée à NtfyBridge',
    description:
      'NtfyBridge intègre Chat Famille, une PWA de messagerie privée pour votre foyer. Salons dédiés, push notifications, partage de photos et de fichiers — tout hébergé chez vous.',
    formattedDate: '30 octobre 2026',
    readingTime: 4,
    tags: [
      { label: 'ntfybridge', permalink: '/ntfybridge' },
      { label: 'notifications', permalink: '/notifications' },
    ],
    image: '/img/blog/ntfybridge-chat.svg',
    authors: [{ name: 'Zyg0m4t1k', imageURL: 'https://github.com/Zyg0m4t1k.png' }],
  },
];

export default blogPosts;
