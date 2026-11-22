import React from 'react';
import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';
import PluginsGrid from '../../components/PluginsGrid';

export default function PluginsIndex(): JSX.Element {
  return (
    <Layout title="Plugins" description={translate({ id: 'plugins.page.description', message: 'Liste des plugins Jeedom' })}>
      <main>
        <div className="page-hero-bg" style={{ padding: '2.5rem 0 1.5rem' }}>
          <div className="container">
            <h1 style={{ marginBottom: '0.5rem' }}>Plugins</h1>
          </div>
        </div>

        <div className="container" style={{ paddingBottom: '3rem' }}>
          <PluginsGrid />
        </div>
      </main>
    </Layout>
  );
}