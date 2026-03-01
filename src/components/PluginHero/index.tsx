import React from 'react';
import Link from '@docusaurus/Link';

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
};

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
}: Props) {
  // On construit une liste de liens "standard" + liens libres
  const baseLinks: PluginLink[] = [
    docsUrl ? { label: 'Documentation', href: docsUrl } : null,
    changelogUrl ? { label: 'Changelog', href: changelogUrl } : null,
    githubUrl ? { label: 'GitHub', href: githubUrl } : null,
    marketUrl ? { label: 'Market', href: marketUrl } : null,
  ].filter(Boolean) as PluginLink[];

  const mergedLinks = uniqLinks([...baseLinks, ...links]).filter((l) => l.href);

  return (
    <div
      style={{
        border: '1px solid var(--ifm-color-emphasis-200)',
        borderRadius: 16,
        padding: '1.5rem',
        background: 'var(--ifm-background-surface-color)',
        boxShadow: '0 6px 20px rgba(0,0,0,.06)',
        marginBottom: '1.5rem',
      }}
    >
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
          <h1 style={{ margin: 0, fontSize: '2rem' }}>{title}</h1>
          {description ? (
            <p style={{ margin: '.35rem 0 0 0', opacity: 0.9 }}>
              {description}
            </p>
          ) : null}
        </div>
      </div>

      {(badges.length > 0 || mergedLinks.length > 0 || !!donateUrl) && (
        <div
          style={{
            marginTop: '1rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '.5rem',
            alignItems: 'center',
          }}
        >
          {badges.map((b) => (
            <span
              key={b}
              style={{
                fontSize: '.85rem',
                padding: '.15rem .55rem',
                borderRadius: 999,
                border: '1px solid var(--ifm-color-emphasis-200)',
                background: 'var(--ifm-background-color)',
              }}
            >
              {b}
            </span>
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