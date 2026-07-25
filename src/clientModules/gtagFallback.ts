// Fallback no-op pour window.gtag
// Évite "window.gtag is not a function" quand GA est bloqué (adblock) ou en mode dev
if (typeof window !== 'undefined') {
  (window as any).dataLayer = (window as any).dataLayer || [];
  if (typeof (window as any).gtag !== 'function') {
    (window as any).gtag = function (...args: unknown[]) {
      (window as any).dataLayer.push(args);
    };
  }
}

export {};
