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
  if (b === 'stable')         return styles.stable;
  if (b === 'beta')           return styles.beta;
  if (b === 'dev')            return styles.dev;
  if (b === 'alpha')          return styles.alpha;
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

        const ribbonClass = p.ribbon
          ? p.ribbon.toLowerCase().includes('new') || p.ribbon.toLowerCase().includes('nouv')
            ? styles.ribbonNew
            : p.ribbon.toLowerCase().includes('maj') || p.ribbon.toLowerCase().includes('upd') || p.ribbon.toLowerCase().includes('màj')
            ? styles.ribbonUpdate
            : styles.ribbonBeta
          : null;

        return (
			<Link key={p.id} className={styles.card} to={to}>
			  {p.ribbon && (
			    <span className={`${styles.ribbon} ${ribbonClass}`}>{p.ribbon}</span>
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
				</div>

				{status && (
				  <div className={`${styles.statusBadge} ${styles[status.toLowerCase()] || ''}`}>
					{status}
				  </div>
				)}
			  </div>

			  <div className={styles.desc}>{p.description}</div>

			  {extraBadges.length > 0 && (
				<div className={styles.bottomBadges}>
				  {extraBadges.map((b) => (
					<div key={b} className={`${styles.badge} ${badgeColorClass(b)}`}>
					  {badgeLabel(b)}
					</div>
				  ))}
				</div>
			  )}
			</Link>
        );
      })}
    </div>
  );
}