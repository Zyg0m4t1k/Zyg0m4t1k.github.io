import React from "react";
import { useLocation } from "@docusaurus/router";
import Link from "@docusaurus/Link";
import { pluginsNav } from "../data/pluginsNav";

type Props = {
  children: React.ReactNode;
};

export default function PluginsLayout({ children }: Props) {
  const { pathname } = useLocation();

  return (
    <main className="plugins-layout margin-vert--lg">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px minmax(0, 1fr)",
          gap: "24px",
          alignItems: "start",
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
                          padding: "10px 12px",
                          borderRadius: 10,
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
  );
}