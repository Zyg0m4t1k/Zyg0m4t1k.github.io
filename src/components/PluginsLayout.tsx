import React from "react";
import Layout from "@theme/Layout";
import { useLocation } from "@docusaurus/router";
import Link from "@docusaurus/Link";
import { pluginsNav } from "../data/pluginsNav";

export default function PluginsLayout({ title, children }) {
  const { pathname } = useLocation();

  return (
    <Layout title={title}>
      <main className="container margin-vert--lg">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "260px 1fr",
            gap: "24px",
          }}
        >
          <aside>
            <div className="card">
              <div className="card__header">
                <strong>Plugins</strong>
              </div>
              <div className="card__body">
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {pluginsNav.map((item) => {
                    const active = pathname === item.to;
                    return (
                      <li key={item.to} style={{ marginBottom: 8 }}>
                        <Link
                          to={item.to}
                          style={{
                            display: "block",
                            padding: "8px 10px",
                            borderRadius: 8,
                            textDecoration: "none",
                            fontWeight: active ? 700 : 500,
                            background: active
                              ? "var(--ifm-menu-color-background-active)"
                              : "transparent",
                          }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </aside>

          <article>{children}</article>
        </div>
      </main>
    </Layout>
  );
}
