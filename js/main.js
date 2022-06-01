// Make sure service workers are supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/serviceworkers.github.io/sw_cached_pages.js', {
        scope: '/serviceworkers.github.io/',
      })
      .then((reg) => {
        console.log('Service worker registered', reg);
      })
      .catch((err) => `Service worker not registered: ${err}`);
  });
}
