import React from 'react';
import Link from '@docusaurus/Link';
import plugins from '@site/data/plugins';
import styles from './styles.module.css';

const featured = plugins.filter((p) => p.featured);
const [hero, ...secondary] = featured;

const STATUS_BADGES = ['stable', 'beta', 'dev', 'alpha'];

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
  if (!hero) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>À la une</h2>

        <div className={styles.layout}>
          {/* Hero card */}
          <div className={styles.hero}>
            <Ribbon text={hero.ribbon} />
            <div className={styles.heroInner}>
              <div className={styles.heroTop}>
                {hero.icon && (
                  <img
                    className={styles.heroIcon}
                    src={`/img/plugins/${hero.icon}`}
                    alt={hero.name}
                    loading="lazy"
                  />
                )}
                <div className={styles.heroName}>{hero.name}</div>
                {hero.links?.market && (
                  <a
                    className={styles.marketBadge}
                    href={hero.links.market}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Market →
                  </a>
                )}
              </div>
              <p className={styles.heroDesc}>{hero.description}</p>
              <div className={styles.heroFooter}>
                <Link className={`${styles.cta} ${styles.stretchedLink}`} to={hero.routes.page}>Voir la doc →</Link>
                <Badges badges={hero.badges} />
              </div>
            </div>
          </div>

          {/* Secondary cards */}
          {secondary.length > 0 && (
            <div className={styles.secondaryGrid}>
              {secondary.slice(0, 2).map((p) => (
                <div key={p.id} className={styles.secondaryCard}>
                  <Ribbon text={p.ribbon} />
                  <div className={styles.secondaryTop}>
                    {p.icon && (
                      <img
                        className={styles.secondaryIcon}
                        src={`/img/plugins/${p.icon}`}
                        alt={p.name}
                        loading="lazy"
                      />
                    )}
                    <div className={styles.secondaryName}>{p.name}</div>
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
                  <p className={styles.secondaryDesc}>{p.description}</p>
                  <div className={styles.secondaryFooter}>
                    <Link className={`${styles.cta} ${styles.stretchedLink}`} to={p.routes.page}>Voir →</Link>
                    <Badges badges={p.badges} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
