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
  routes?: { page?: string };
};

const catalogue = plugins as CataloguePlugin[];

function statusLabel(status?: string): string | null {
  if (!status) return null;
  const s = status.toLowerCase();
  if (s === 'stable') return 'Stable';
  if (s === 'beta') return 'Beta';
  if (s === 'alpha') return 'Alpha';
  return status;
}

export default function PluginsGrid(): JSX.Element {
  return (
    <div className={styles.grid}>
      {plugins.map((p) => {
        const to = p.routes?.page ?? `/plugins/${p.id}`;
        const badge = statusLabel(p.status);
        const icon = p.icon ? `/img/plugins/${p.icon}` : null;

        return (
          <Link key={p.id} className={styles.card} to={to}>
            <div className={styles.header}>
              <div className={styles.titleRow}>
                {icon && <img className={styles.icon} src={icon} alt={p.name} loading="lazy" />}
                <div className={styles.title}>{p.name}</div>
              </div>
              {badge && <div className={styles.badge}>{badge}</div>}
            </div>

            <div className={styles.desc}>{p.description}</div>
          </Link>
        );
      })}
    </div>
  );
}
