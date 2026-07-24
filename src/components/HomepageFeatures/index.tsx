import React from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

type Card = {
  title: string;
  description: string;
  to: string;
};

export default function HomepageFeatures(): JSX.Element {
  const cards: Card[] = [
    {
      title: translate({ id: 'homepage.features.plugins.title', message: 'Plugins' }),
      description: translate({ id: 'homepage.features.plugins.desc', message: 'Accès rapide à la liste + fiches détaillées.' }),
      to: '/plugins',
    },
    {
      title: translate({ id: 'homepage.features.docs.title', message: 'Docs' }),
      description: translate({ id: 'homepage.features.docs.desc', message: "Guides d'installation, compatibilité, dev, changelogs." }),
      to: '/docs/intro',
    },
    {
      title: translate({ id: 'homepage.features.github.title', message: 'GitHub' }),
      description: translate({ id: 'homepage.features.github.desc', message: 'Sources & releases sur GitHub.' }),
      to: 'https://github.com/Zyg0m4t1k',
    },
  ];

  const cta = translate({ id: 'homepage.features.cta', message: 'Ouvrir →' });

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {cards.map((c) => (
            <Link key={c.title} className={styles.card} to={c.to}>
              <div className={styles.cardTitle}>{c.title}</div>
              <div className={styles.cardDesc}>{c.description}</div>
              <div className={styles.cardCta}>{cta}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
