import React from 'react';
import Link from '@docusaurus/Link';
import plugins from '@site/data/plugins';

type PluginLink = { label: string; href?: string | null };

type Props = {
  title: string;
  description?: string;

  // icon: "/img/plugins/<id>/<id>_icon.png" ou "/img/plugins/<id>_icon.png" selon ta convention
  icon?: string;

  badges?: string[];

  /**
   * Ancien système (toujours supporté).
   * Exemple: [{label:"GitHub", href:"..."}, {label:"Market", href:"..."}]
   */
  links?: PluginLink[];

  /**
   * Nouveau système "de base" (optionnel).
   * Si tu fournis ces props, PluginHero construit automatiquement les boutons.
   * Tu peux aussi cumuler avec `links` (les doublons sont évités).
   */
  githubUrl?: string | null;
  marketUrl?: string | null;
  docsUrl?: string | null;
  changelogUrl?: string | null;

  /**
   * Bouton PayPal (optionnel).
   * - donateUrl: ton lien paypal.me
   * - donateLabel: texte du bouton
   */
  donateUrl?: string | null;
  donateLabel?: string;

  /** Affiche un bandeau "Nouveau" en haut à droite de la card */
  isNew?: boolean;

  /** Slug du plugin dans plugins.ts — permet de récupérer links.market automatiquement */
  pluginId?: string;
};

function badgeStyle(badge: string): React.CSSProperties {
  const b = badge.toLowerCase();
  const base: React.CSSProperties = {
    fontSize: '.85rem',
    padding: '.15rem .55rem',
    borderRadius: 999,
    border: '1px solid',
    fontWeight: 600,
  };
  if (b === 'stable')         return { ...base, borderColor: '#4caf50', color: '#4caf50', background: 'rgba(76,175,80,.08)' };
  if (b === 'beta')           return { ...base, borderColor: '#ff9800', color: '#ff9800', background: 'rgba(255,152,0,.08)' };
  if (b === 'dev')            return { ...base, borderColor: '#9c27b0', color: '#9c27b0', background: 'rgba(156,39,176,.08)' };
  if (b === 'alpha')          return { ...base, borderColor: '#f44336', color: '#f44336', background: 'rgba(244,67,54,.08)' };
  if (b.startsWith('jeedom')) return { ...base, borderColor: '#3b82f6', color: '#3b82f6', background: 'rgba(59,130,246,.08)' };
  if (b.startsWith('php'))    return { ...base, borderColor: '#a78bfa', color: '#a78bfa', background: 'rgba(167,139,250,.08)' };
  if (b.startsWith('os'))     return { ...base, borderColor: '#f87171', color: '#f87171', background: 'rgba(248,113,113,.08)' };
  if (b === 'python')         return { ...base, borderColor: '#facc15', color: '#ca8a04', background: 'rgba(250,204,21,.08)' };
  if (b === 'node.js')        return { ...base, borderColor: '#83cd29', color: '#417e38', background: 'rgba(131,205,41,.08)' };
  if (b === 'daemon')         return { ...base, borderColor: '#22d3ee', color: '#22d3ee', background: 'rgba(34,211,238,.08)' };
  if (b === 'mqtt')           return { ...base, borderColor: '#fb923c', color: '#fb923c', background: 'rgba(251,146,60,.08)' };
  if (b === 'api')            return { ...base, borderColor: '#34d399', color: '#34d399', background: 'rgba(52,211,153,.08)' };
  return { ...base, borderColor: 'var(--ifm-color-emphasis-200)', background: 'var(--ifm-background-color)', color: 'var(--ifm-font-color-base)', fontWeight: 400 };
}

function uniqLinks(links: PluginLink[]) {
  const seen = new Set<string>();
  return links.filter((l) => {
    if (!l.href) return false;
    const key = `${l.label}|${l.href}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export default function PluginHero({
  title,
  description,
  icon,
  badges = [],
  links = [],
  githubUrl = null,
  marketUrl = null,
  docsUrl = null,
  changelogUrl = null,
  donateUrl = null,
  donateLabel = '☕ Soutenir le développement',
  isNew = false,
  pluginId,
}: Props) {
  const pluginData = pluginId ? plugins.find((p) => p.id === pluginId) : null;
  const resolvedMarketUrl = marketUrl ?? pluginData?.links?.market ?? null;
  const resolvedBadges = badges.length > 0 ? badges : (pluginData?.badges ?? []);
  // On construit une liste de liens "standard" + liens libres
  const baseLinks: PluginLink[] = [
    docsUrl ? { label: 'Documentation', href: docsUrl } : null,
    changelogUrl ? { label: 'Changelog', href: changelogUrl } : null,
    githubUrl ? { label: 'GitHub', href: githubUrl } : null,
  ].filter(Boolean) as PluginLink[];

  const mergedLinks = uniqLinks([...baseLinks, ...links]).filter((l) => l.href);

  return (
    <div
      style={{
        position: 'relative',
        border: '1px solid var(--ifm-color-emphasis-200)',
        borderRadius: 16,
        padding: '1.5rem',
        background: 'var(--ifm-background-surface-color)',
        boxShadow: '0 6px 20px rgba(0,0,0,.06)',
        marginBottom: '1.5rem',
        overflow: 'hidden',
      }}
    >
      {isNew && (
        <div
          style={{
            position: 'absolute',
            top: 16,
            right: -28,
            background: 'linear-gradient(90deg, #f59e0b, #ef4444)',
            color: '#fff',
            fontSize: '.75rem',
            fontWeight: 700,
            letterSpacing: '.05em',
            padding: '.25rem 3rem',
            transform: 'rotate(45deg)',
            boxShadow: '0 2px 6px rgba(0,0,0,.2)',
            textTransform: 'uppercase',
          }}
        >
          Nouveau
        </div>
      )}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {icon ? (
          <img
            src={icon}
            alt={title}
            width={64}
            height={64}
            style={{ borderRadius: 12 }}
          />
        ) : null}

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <h1 style={{ margin: 0, fontSize: '2rem' }}>{title}</h1>
            {resolvedMarketUrl && (
              <a
                href={resolvedMarketUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.68rem',
                  padding: '0.1rem 0.45rem',
                  borderRadius: 999,
                  fontWeight: 600,
                  color: '#fff',
                  background: '#7aaa02',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'background 120ms ease',
                }}
              >
                Market →
              </a>
            )}
          </div>
          {description ? (
            <p style={{ margin: '.35rem 0 0 0', opacity: 0.9 }}>
              {description}
            </p>
          ) : null}
        </div>
      </div>

      {(resolvedBadges.length > 0 || mergedLinks.length > 0 || !!donateUrl) && (
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '.5rem',
            alignItems: 'center',
          }}
        >
          {resolvedBadges.map((b) => (
            <span key={b} style={badgeStyle(b)}>{b}</span>
          ))}

          {(mergedLinks.length > 0 || donateUrl) && (
            <span style={{ marginLeft: 'auto', display: 'flex', gap: '.5rem' }}>
              {mergedLinks.map((l) => (
                <Link
                  key={l.label}
                  className="button button--sm button--primary"
                  to={l.href as string}
                >
                  {l.label}
                </Link>
              ))}

              {donateUrl ? (
                <a
                  className="button button--sm button--secondary"
                  href={donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {donateLabel}
                </a>
              ) : null}
            </span>
          )}
        </div>
      )}
    </div>
  );
}