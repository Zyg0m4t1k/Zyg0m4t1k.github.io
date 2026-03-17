// Force la langue par défaut à 'fr' si aucune préférence n'a été explicitement choisie.
// Empêche Docusaurus de mémoriser 'en' comme langue par défaut.
if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
  const stored = localStorage.getItem('docusaurus.preferredLocale');
  if (!stored) {
    localStorage.setItem('docusaurus.preferredLocale', 'fr');
  }
}

export {};
