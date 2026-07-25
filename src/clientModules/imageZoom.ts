import mediumZoom from 'medium-zoom';

export function onRouteDidUpdate() {
  mediumZoom('.markdown img:not(.no-zoom)', {
    background: 'rgba(0, 0, 0, 0.85)',
    margin: 24,
  });
}
