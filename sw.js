self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Only intercept GET requests
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request).catch((err) => {
      console.warn('Fetch failed inside SW:', err);
      // Return network fetch response or fallback if offline
      return fetch(e.request);
    })
  );
});
