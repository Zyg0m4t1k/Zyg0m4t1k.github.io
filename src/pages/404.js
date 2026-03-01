import React, { useEffect } from "react";
import { useLocation } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function NotFound() {
  const location = useLocation();
  const baseUrl = useBaseUrl("/");

  useEffect(() => {
    const path = location.pathname;

    if (!path.startsWith("/docs/") && !path.startsWith("/plugins/")) {
      window.location.replace(baseUrl);
    }
  }, [location, baseUrl]);

  return null;
}
