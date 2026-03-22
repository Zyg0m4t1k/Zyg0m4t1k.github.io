import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Docusaurus webpack supports importing YAML/JSON from @site
import plugins from '@site/data/plugins';

type CataloguePlugin = {
  id: string;
  name: string;
  description: string;
  icon?: string;
  status?: string;
  badges?: string[];
  ribbon?: string; // texte du bandeau coin (ex: "Nouveau", "Màj", "Beta")
  routes?: { page?: string };
  links?: { market?: string | null };
};

const catalogue = plugins as CataloguePlugin[];

/* ================================
   Status principal (Stable/Beta)
================================ */
function statusLabel(status?: string): string | null {
  if (!status) return null;
  const s = status.toLowerCase();
  if (s === 'stable') return 'Stable';
  if (s === 'beta') return 'Beta';
  if (s === 'alpha') return 'Alpha';
  return status;
}

/* ================================
   Labels custom badges
================================ */
function badgeLabel(badge: string): string {
  const b = badge.toLowerCase();

  if (b === 'daemon') return 'Daemon';
  if (b === 'api') return 'API';
  if (b === 'regex') return 'Regex';
  if (b === 'mqtt') return 'MQTT';
  if (b === 'widget') return 'Widget';
  if (b === 'matter') return 'Matter';
  if (b === 'thread') return 'Thread';
  if (b === 'jeedom4.5+') return 'Jeedom 4.5+';

  return badge;
}

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
  if (b === 'daemon')         return styles.badgeDaemon;
  if (b === 'mqtt')           return styles.badgeMqtt;
  if (b === 'api')            return styles.badgeApi;
  return '';
}

export default function PluginsGrid(): JSX.Element {
  return (
    <div className={styles.grid}>
      {catalogue.map((p) => {
        const to = p.routes?.page ?? `/plugins/${p.id}`;
        const status = statusLabel(p.status);
        const icon = p.icon ? `/img/plugins/${p.icon}` : null;

        const extraBadges = (p.badges ?? []).filter(Boolean);

        const allBadges = [
          ...(status ? [status] : []), // Status en premier
          ...extraBadges.map(badgeLabel),
        ];

        return (
          <div key={p.id} className={styles.card}>
            {p.ribbon && (
              <span className={styles.ribbon}>{p.ribbon}</span>
            )}
            <div className={styles.header}>
              <div className={styles.titleRow}>
                {icon && (
                  <img
                    className={styles.icon}
                    src={icon}
                    alt={p.name}
                    loading="lazy"
                  />
                )}
                <div className={styles.title}>{p.name}</div>
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
            </div>

            <div className={styles.desc}>{p.description}</div>

            <div className={styles.footer}>
              <Link className={`${styles.cta} ${styles.stretchedLink}`} to={to}>Voir →</Link>
              {allBadges.length > 0 && (
                <div className={styles.badgeRow}>
                  {allBadges.map((b) => (
                    <span key={b} className={`${styles.badge} ${badgeColorClass(b)}`}>{b}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
