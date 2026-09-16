// Minimal Service Worker required to satisfy PWA installation criteria
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Passes network requests directly to server
  e.respondWith(fetch(e.request));
});