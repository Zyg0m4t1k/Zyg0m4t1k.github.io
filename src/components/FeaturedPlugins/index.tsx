import React from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import plugins from '@site/data/plugins';
import styles from './styles.module.css';

// Ordre d'affichage fixe
const FEATURED_IDS = ['ntfybridge', 'jeebridge', 'tailscale', 'uptimekuma', 'matter', 'telejee'];
const pluginMap = Object.fromEntries(plugins.map((p) => [p.id, p]));
const featured = FEATURED_IDS.map((id) => pluginMap[id]).filter(Boolean);

function badgeColorClass(badge: string): string {
  const b = badge.toLowerCase();
  if (b === 'stable')         return styles.badgeStable;
  if (b === 'beta')           return styles.badgeBeta;
  if (b === 'dev')            return styles.badgeDev;
  if (b === 'alpha')          return styles.badgeAlpha;
  if (b.startsWith('jeedom')) return styles.badgeJeedom;
  if (b.startsWith('php'))    return styles.badgePhp;
  if (b.startsWith('os'))     return styles.badgeOs;
  if (b === 'python')         return styles.badgePython;
  if (b === 'node.js')        return styles.badgeNodejs;
  if (b === 'daemon')         return styles.badgeDaemon;
  if (b === 'mqtt')           return styles.badgeMqtt;
  if (b === 'api')            return styles.badgeApi;
  return '';
}

function Badges({ badges }: { badges?: string[] }) {
  if (!badges?.length) return null;
  return (
    <div className={styles.badgeRow}>
      {badges.map((b) => (
        <span key={b} className={`${styles.badge} ${badgeColorClass(b)}`}>{b}</span>
      ))}
    </div>
  );
}

function Ribbon({ text }: { text?: string }) {
  if (!text) return null;
  return <span className={styles.ribbon}>{text}</span>;
}

export default function FeaturedPlugins(): JSX.Element | null {
  if (!featured.length) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Link className={styles.viewAll} to="/plugins">
            {translate({ id: 'featured.viewall', message: 'Tous les plugins →' })}
          </Link>
        </div>

        <div className={styles.grid}>
          {featured.map((p) => (
            <div key={p.id} className={styles.card}>
              <Ribbon text={p.ribbon ? translate({ id: `plugin.ribbon.${p.ribbon.toLowerCase()}`, message: p.ribbon }) : undefined} />

              <div className={styles.cover}>
                {p.icon && (
                  <img
                    className={styles.coverIcon}
                    src={`/img/plugins/${p.icon}`}
                    alt={p.name}
                    loading="lazy"
                  />
                )}
              </div>

              <div className={styles.body}>
                <div className={styles.top}>
                  <span className={styles.name}>{p.name}</span>
                  {p.links?.market && (
                    <a
                      className={styles.marketBadge}
                      href={p.links.market}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Market →
                    </a>
                  )}
                </div>

                <p className={styles.desc}>
                  {translate({ id: `plugin.${p.id}.description`, message: p.description })}
                </p>

                <div className={styles.footer}>
                  <Link className={`${styles.cta} ${styles.stretchedLink}`} to={p.routes.page}>
                    {translate({ id: 'featured.card.cta', message: 'Voir →' })}
                  </Link>
                  <Badges badges={p.badges} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
