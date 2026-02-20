import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import HomepageFeatures from '../components/HomepageFeatures';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Accueil"
      description="Docs & ressources pour mes plugins Jeedom"
    >
      <main>
        <div style={{ padding: '3rem 0' }}>
          <div className="container">
            <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>
              Zyg0m4t1k — Jeedom Plugins
            </h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.85, maxWidth: 820 }}>
              Vitrine, documentation et ressources autour de mes plugins Jeedom.
              (Les textes détaillés seront ajoutés ensuite.)
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
              <Link className="button button--primary" to={useBaseUrl('/plugins')}>
                Voir les plugins
              </Link>
              <Link className="button button--secondary" to={useBaseUrl('/docs/intro')}>
                Ouvrir la doc
              </Link>
            </div>
          </div>
        </div>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}