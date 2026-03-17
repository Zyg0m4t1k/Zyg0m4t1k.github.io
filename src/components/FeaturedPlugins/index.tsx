import React from 'react';
import Link from '@docusaurus/Link';
import plugins from '@site/data/plugins';
import styles from './styles.module.css';

const featured = plugins.filter((p) => p.featured);
const [hero, ...secondary] = featured;

const STATUS_BADGES = ['stable', 'beta', 'dev', 'alpha'];

function badgeColorClass(badge: string): string {
  const b = badge.toLowerCase();
  if (b.startsWith('jeedom')) return styles.badgeJeedom;
  if (b.startsWith('php'))    return styles.badgePhp;
  if (b.startsWith('os'))     return styles.badgeOs;
  if (b === 'python')         return styles.badgePython;
  if (b === 'daemon')         return styles.badgeDaemon;
  if (b === 'mqtt')           return styles.badgeMqtt;
  if (b === 'api')            return styles.badgeApi;
  return '';
}

function Badges({ badges }: { badges?: string[] }) {
  const filtered = (badges ?? []).filter((b) => !STATUS_BADGES.includes(b.toLowerCase()));
  if (!filtered.length) return null;
  return (
    <div className={styles.badgeRow}>
      {filtered.map((b) => (
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
          <Link className={styles.hero} to={hero.routes.page}>
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
              </div>
              <p className={styles.heroDesc}>{hero.description}</p>
              <div className={styles.heroFooter}>
                <span className={styles.cta}>Voir la doc →</span>
                <Badges badges={hero.badges} />
              </div>
            </div>
          </Link>

          {/* Secondary cards */}
          {secondary.length > 0 && (
            <div className={styles.secondaryGrid}>
              {secondary.slice(0, 2).map((p) => (
                <Link key={p.id} className={styles.secondaryCard} to={p.routes.page}>
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
                  </div>
                  <p className={styles.secondaryDesc}>{p.description}</p>
                  <div className={styles.secondaryFooter}>
                    <span className={styles.cta}>Voir →</span>
                    <Badges badges={p.badges} />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
