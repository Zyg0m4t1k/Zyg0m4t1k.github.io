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
        <div style={{ padding: '4rem 0', textAlign: 'center' }}>
          <div className="container">
            <h1 style={{ fontSize: '2.6rem', marginBottom: '1rem' }}>
              {translate({ id: 'homepage.hero.title', message: 'Automatisez votre maison, à votre façon' })}
            </h1>
            <p style={{ fontSize: '1.15rem', opacity: 0.85, maxWidth: 680, margin: '0 auto 1.75rem' }}>
              {translate({ id: 'homepage.hero.subtitle', message: 'Des plugins Jeedom robustes et documentés — Matter, Tailscale, SwitchBot, ntfy et plus encore.' })}
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="button button--primary button--lg" to={useBaseUrl('/plugins')}>
                {translate({ id: 'homepage.cta.plugins', message: 'Voir les plugins' })}
              </Link>
              <Link className="button button--secondary button--lg" to={useBaseUrl('/docs/intro')}>
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