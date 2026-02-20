import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Card = {
  title: string;
  description: string;
  to: string;
};

const cards: Card[] = [
  {
    title: 'Plugins',
    description: 'Accès rapide à la liste + fiches détaillées.',
    to: '/plugins',
  },
  {
    title: 'Docs',
    description: 'Guides d’installation, compatibilité, dev, changelogs.',
    to: '/docs/intro',
  },
  {
    title: 'GitHub',
    description: 'Sources & releases sur GitHub.',
    to: 'https://github.com/Zyg0m4t1k',
  },
];

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {cards.map((c) => (
            <Link key={c.title} className={styles.card} to={c.to}>
              <div className={styles.cardTitle}>{c.title}</div>
              <div className={styles.cardDesc}>{c.description}</div>
              <div className={styles.cardCta}>Ouvrir →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}