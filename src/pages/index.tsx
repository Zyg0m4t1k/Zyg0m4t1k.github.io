import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { translate } from '@docusaurus/Translate';
import HomepageFeatures from '../components/HomepageFeatures';
import FeaturedPlugins from '../components/FeaturedPlugins';
import RecentPosts from '../components/RecentPosts';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={translate({ id: 'homepage.title', message: 'Plugins Jeedom : Matter, Tailscale, SwitchBot, ntfy' })}
      description={translate({ id: 'homepage.description', message: 'Découvrez les plugins Jeedom de Zyg0m4t1k : Matter, Tailscale, SwitchBot, notifications ntfy, éclairage et automatisations. Documentation complète en français.' })}
    >
      <main>
        <div style={{ padding: '3rem 0' }}>
          <div className="container">
            <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>
              {translate({ id: 'homepage.hero.title', message: 'Zyg0m4t1k — Jeedom Plugins' })}
            </h1>
            <p style={{ fontSize: '1.1rem', opacity: 0.85, maxWidth: 820 }}>
              {translate({ id: 'homepage.hero.subtitle', message: 'Vitrine, documentation et ressources autour de mes plugins Jeedom.' })}
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
              <Link className="button button--primary" to={useBaseUrl('/plugins')}>
                {translate({ id: 'homepage.cta.plugins', message: 'Voir les plugins' })}
              </Link>
              <Link className="button button--secondary" to={useBaseUrl('/docs/intro')}>
                {translate({ id: 'homepage.cta.docs', message: 'Ouvrir la doc' })}
              </Link>
            </div>
          </div>
        </div>

        <RecentPosts />
        <FeaturedPlugins />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}