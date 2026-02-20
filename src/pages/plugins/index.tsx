import React from 'react';
import Layout from '@theme/Layout';
import PluginsGrid from '../../components/PluginsGrid';

export default function PluginsIndex(): JSX.Element {
  return (
    <Layout title="Plugins" description="Liste des plugins Jeedom">
      <main>
        <div style={{ padding: '2.5rem 0 1rem' }}>
          <div className="container">
            <h1 style={{ marginBottom: '0.5rem' }}>Plugins</h1>
            <p style={{ opacity: 0.85, maxWidth: 900 }}>
              
            </p>
          </div>
        </div>

        <div className="container" style={{ paddingBottom: '3rem' }}>
          <PluginsGrid />
        </div>
      </main>
    </Layout>
  );
}