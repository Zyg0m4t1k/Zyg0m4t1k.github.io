import React from 'react';
import Link from '@docusaurus/Link';

type PluginLink = { label: string; href?: string | null };

type Props = {
  title: string;
  description?: string;
  icon?: string; // ex: "/img/plugins/matter/matter_icon.png"
  badges?: string[];
  links?: PluginLink[]; // ex: [{label:"GitHub", href:"..."}, ...]
};

export default function PluginHero({
  title,
  description,
  icon,
  badges = [],
  links = [],
}: Props) {
  const filteredLinks = links.filter((l) => l.href);

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
            <p style={{ margin: '.35rem 0 0 0', opacity: 0.9 }}>{description}</p>
          ) : null}
        </div>
      </div>

      {(badges.length > 0 || filteredLinks.length > 0) && (
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

          {filteredLinks.length > 0 && (
            <span style={{ marginLeft: 'auto', display: 'flex', gap: '.5rem' }}>
              {filteredLinks.map((l) => (
                <Link
                  key={l.label}
                  className="button button--sm button--primary"
                  to={l.href as string}
                >
                  {l.label}
                </Link>
              ))}
            </span>
          )}
        </div>
      )}
    </div>
  );
}